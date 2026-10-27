// Optional browser checks. Starts and closes its own local static server.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { resolve, relative, extname, isAbsolute, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const root = fileURLToPath(new URL('../../', import.meta.url));
const args = process.argv.slice(2);
function option(name) {
  const index = args.indexOf(name);
  if (index < 0) return null;
  assert(args[index + 1] && !args[index + 1].startsWith('--'), `Value required for ${name}`);
  return args[index + 1];
}
assert(args.every((x, i) => i % 2 ? !x.startsWith('--') : ['--lesson', '--screenshots'].includes(x)), 'Usage: smoke.mjs [--lesson N] [--screenshots DIR]');
const lessonNumber = option('--lesson');
const screenshotOption = option('--screenshots');
const screenshots = screenshotOption ? resolve(root, screenshotOption) : null;
const series = JSON.parse(await readFile(join(root, 'guides/thinking-in-systems.json'), 'utf8'));
const registry = JSON.parse(await readFile(join(root, 'guides/guides.json'), 'utf8'));
const lessons = series.lessons.filter(x => x.url && (lessonNumber ? x.number === Number(lessonNumber) : x.status === 'published'));
assert(lessons.length, 'No matching lesson to check');
const published = registry.filter(x => x.status === 'published').map(x => x.url).sort();
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json' };
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const file = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    const path = relative(root, file);
    if (path.startsWith('..') || isAbsolute(path)) throw new Error('Invalid path');
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream' });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end('Not found');
  }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}/`;
let browser;
try {
  browser = await chromium.launch({ executablePath: process.env.GUIDE_BROWSER_EXECUTABLE || undefined });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  // Check local assets without depending on Google Fonts availability.
  await context.route('https://fonts.googleapis.com/**', route => route.fulfill({ body: '', contentType: 'text/css' }));
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  async function open(url) {
    await page.goto(url, { waitUntil: 'networkidle' });
  }
  async function cards(expected = published) {
    const urls = await page.locator('#guideCards > a').evaluateAll(nodes => nodes.map(n => n.getAttribute('href')).sort());
    assert.deepEqual(urls, expected, 'Homepage must show precisely the published guides');
    for (const image of await page.locator('#guideCards img').all()) {
      await image.scrollIntoViewIfNeeded();
      await image.evaluate(node => node.decode());
    }
  }
  await open(base);
  await cards();
  await open(pathToFileURL(join(root, 'index.html')).href);
  await cards();

  for (const lesson of lessons) {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await open(base + lesson.url);
    assert.equal(await page.locator('h1').innerText().then(t => t.replace(/\s+/g, ' ').trim()), lesson.title);
    await page.locator('.toc-desktop .home-link').waitFor({ state: 'visible' });
    const expectedHome = new URL('../index.html', base + lesson.url).href;
    assert.equal(await page.locator('.toc-desktop .home-link').getAttribute('href').then(h => new URL(h, page.url()).href), expectedHome);
    assert(await page.locator('#reading-time').innerText().then(t => /\d+ min read/.test(t)), 'Reading time populated');
    const headings = await page.locator('article section h2[id]').evaluateAll(nodes => nodes.map(n => n.id));
    for (const id of headings) assert.equal(await page.locator(`.toc-desktop a[href="#${id}"]`).count(), 1, `TOC missing ${id}`);
    const links = await page.locator('.series-issues a').evaluateAll(nodes => nodes.map(n => n.getAttribute('href')));
    assert.deepEqual(links.sort(), series.lessons.filter(x => x.status === 'published' && x.number !== lesson.number).map(x => x.url.split('/').pop()).sort());
    assert.equal(await page.locator('.series-issues [aria-current="page"]').count(), 1);
    const startingTheme = await page.locator('html').getAttribute('data-theme');
    await page.locator('label[for="themeSwitch"]').click();
    const toggledTheme = await page.locator('html').getAttribute('data-theme');
    assert.notEqual(toggledTheme, startingTheme);
    await page.reload({ waitUntil: 'networkidle' });
    assert.equal(await page.locator('html').getAttribute('data-theme'), toggledTheme, 'Theme survives reload');

    for (const width of [320, 390, 601, 900, 1101, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${lesson.url}: overflow at ${width}px`);
      const sizes = await page.locator('.ring-label').evaluateAll(nodes => nodes.map(n => parseFloat(getComputedStyle(n).fontSize)));
      assert(sizes.every(size => size >= 13 && size <= 15), `Diagram labels outside 13–15px at ${width}px`);
    }
    for (const summary of await page.locator('details > summary').all()) {
      await summary.focus();
      await page.keyboard.press('Enter');
      assert(await summary.evaluate(node => node.parentElement.open), 'Disclosure opens with keyboard');
    }
    const worksheet = page.locator('[data-problem-worksheet]');
    if (await worksheet.count()) {
      const answers = [
        'The requester wants consistent answers & supported citations.',
        'Hold the prompt fixed and compare conflicting guidance with a resolved source set.',
        'Observed: different fonts. Hypothesis: source conflicts. Repeat across representative questions.',
        'The brand owner resolves precedence. Measure applicable guidance and citation support.'
      ];
      const fields = worksheet.locator('textarea');
      assert.equal(await fields.count(), answers.length, 'Four framing questions');
      for (let i = 0; i < answers.length; i++) await fields.nth(i).fill(answers[i]);
      await page.setViewportSize({ width: 320, height: 1000 });
      // Viewport changes can return before the page's resize handler has run.
      await page.waitForFunction(() => [...document.querySelectorAll('[data-problem-worksheet] textarea')]
        .every(field => field.scrollHeight <= field.clientHeight + 2), null, { timeout: 2000 });
      assert(await fields.evaluateAll(nodes => nodes.every(n => n.scrollHeight <= n.clientHeight + 2)), 'Answers remain visible at mobile width');
      await page.setViewportSize({ width: 1440, height: 1000 });
      const button = worksheet.locator('[data-download-worksheet]');
      await button.focus();
      const saved = page.waitForEvent('download');
      await page.keyboard.press('Enter');
      const download = await saved;
      assert.equal(download.suggestedFilename(), 'problem-framing-brief.md');
      const contents = await readFile(await download.path(), 'utf8');
      for (const answer of answers) assert(contents.includes(answer), 'Download preserves the answer');
      assert(contents.includes('## Next investigation'), 'Export includes a next step');
      for (const field of await fields.all()) await field.fill('');
      assert.equal(await worksheet.locator('.worksheet-status').innerText(), '', 'Editing clears the prior download status');
      console.log(`Passed lesson ${lesson.number}: keyboard worksheet export preserves all four answers`);
    }
    // Keep captures small enough to inspect; long essays can exceed browser image limits.
    if (screenshots) {
      await mkdir(screenshots, { recursive: true });
      for (const theme of ['light', 'dark']) {
        await page.evaluate(t => document.documentElement.setAttribute('data-theme', t), theme);
        await page.evaluate(() => scrollTo(0, 0));
        await page.screenshot({ path: join(screenshots, `lesson-${lesson.number}-${theme}-cover.png`) });
        await page.locator('.series-endnote').screenshot({ path: join(screenshots, `lesson-${lesson.number}-${theme}-series.png`) });
        const figures = await page.locator('figure').all();
        for (let i = 0; i < figures.length; i++) await figures[i].screenshot({ path: join(screenshots, `lesson-${lesson.number}-${theme}-figure-${i + 1}.png`) });
        if (await worksheet.count()) await worksheet.screenshot({ path: join(screenshots, `lesson-${lesson.number}-${theme}-worksheet.png`) });
      }
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.evaluate(() => scrollTo(0, 0));
    await page.locator('#tocToggle').click();
    await page.locator('#tocList .home-link').waitFor({ state: 'visible' });
    await page.locator('#tocList a[href="#' + headings[0] + '"]').click();
    assert.equal(new URL(page.url()).hash, '#' + headings[0]);
    if (screenshots) {
      await page.evaluate(() => scrollTo(0, 0));
      await page.screenshot({ path: join(screenshots, `lesson-${lesson.number}-mobile-cover.png`) });
      await page.locator('.series-endnote').screenshot({ path: join(screenshots, `lesson-${lesson.number}-mobile-series.png`) });
      const figures = await page.locator('figure').all();
      for (let i = 0; i < figures.length; i++) await figures[i].screenshot({ path: join(screenshots, `lesson-${lesson.number}-mobile-figure-${i + 1}.png`) });
    }
    await page.emulateMedia({ media: 'print' });
    assert(await page.locator('article').isVisible(), 'Article survives printing');
    await page.emulateMedia({ media: 'screen' });
    console.log(`Passed lesson ${lesson.number}: layout, navigation, theme, labels, keyboard disclosures, print`);
  }
  assert.deepEqual(errors, [], 'Unexpected browser errors');
  const noJS = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await noJS.newPage();
  await staticPage.goto(base);
  assert.deepEqual(await staticPage.locator('#guideCards > a').evaluateAll(nodes => nodes.map(n => n.getAttribute('href')).sort()), published);
  for (const lesson of lessons) {
    await staticPage.goto(base + lesson.url);
    assert(await staticPage.locator('.reading-route a').first().isVisible(), 'No-JS reading route visible');
    const summary = staticPage.locator('details > summary').first();
    if (await summary.count()) {
      await summary.click();
      assert(await summary.evaluate(node => node.parentElement.open), 'Native disclosure works without JS');
    }
    if (await staticPage.locator('[data-problem-worksheet]').count()) {
      assert(!await staticPage.locator('[data-download-worksheet]').isVisible(), 'JS-only export stays hidden without JS');
      const href = await staticPage.getByRole('link', { name: 'Download a blank worksheet' }).getAttribute('href');
      const response = await staticPage.request.get(new URL(href, staticPage.url()).href);
      assert(response.ok(), 'Blank worksheet is available without JS');
      const text = await response.text();
      for (const n of [1, 2, 3, 4]) assert(text.includes(`## ${n}.`), 'Blank worksheet has every question');
    }
  }
  await noJS.close();
  // Simulate a withdrawn guide to exercise the live registry filter.
  await context.route('**/guides/guides.json', route => route.fulfill({ json: registry.map(x => ({ ...x, status: x.url === published[0] ? 'wip' : x.status })) }));
  await open(base);
  await cards(published.filter(x => x !== published[0]));
  await context.unroute('**/guides/guides.json');
  // Network failures intentionally emit console errors; verify usable fallback content.
  await context.route('**/guides/guides.json', route => route.abort());
  await open(base);
  await cards();
  await context.unroute('**/guides/guides.json');
  await context.route('**/' + published[0], route => route.abort());
  await open(base);
  await cards();
  console.log('Passed homepage: HTTP, direct file, no JavaScript, WIP filtering, registry and page failure fallbacks');
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
