#!/usr/bin/env python3
"""Optional authoring tools. The committed HTML remains a buildless static site."""
import argparse
from datetime import date
import html
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urljoin, urlsplit

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = 'guides/thinking-in-systems.json'
REGISTRY = 'guides/guides.json'
DEFAULT_IMAGE = 'images/now-in-production.png'


def require(condition, message):
    if not condition:
        raise ValueError(message)


def read(path):
    return path.read_text(encoding='utf-8')


def encode(value):
    return json.dumps(value, ensure_ascii=False, indent=2) + '\n'


def esc(value):
    return html.escape(str(value), quote=True)


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.meta, self.ids, self.refs = {}, [], []
        self.title, self.h1, self.canonical = '', '', ''
        self.capture = None
        self.in_head = False
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'head':
            self.in_head = True
        if tag == 'h1' or (tag == 'title' and self.in_head):
            self.capture = tag
        if tag == 'br' and self.capture:
            self.handle_data(' ')
        if tag == 'meta':
            self.meta[a.get('name', a.get('property'))] = a.get('content', '')
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonical = a.get('href', '')
        if a.get('id'):
            self.ids.append(a['id'])
        for key in ('href', 'src'):
            if a.get(key):
                self.refs.append(a[key])

    def handle_endtag(self, tag):
        if tag == 'head':
            self.in_head = False
        if tag == self.capture:
            self.capture = None

    def handle_data(self, data):
        if self.capture:
            setattr(self, self.capture, getattr(self, self.capture) + data)


def normalized(value):
    return ' '.join(value.split())


def local_path(root, url):
    path = (root / unquote(url)).resolve()
    require(path.is_relative_to(root.resolve()), f'Path outside repository: {url}')
    return path


def manifest(root):
    data = json.loads(read(root / MANIFEST))
    require(data['id'] == 'thinking-in-systems', 'Unexpected series ID')
    require(data['site_url'].startswith('https://') and data['site_url'].endswith('/'), 'site_url must be an HTTPS directory URL')
    lessons = data['lessons']
    require([x['number'] for x in lessons] == list(range(1, 6)), 'Series must contain lessons 1–5 in order')
    urls = []
    for item in lessons:
        require(item['status'] in ('planned', 'wip', 'published'), 'Invalid lesson status')
        if item['status'] == 'planned':
            require(item['url'] is None, 'Planned lessons must not have a URL; use wip for drafts')
            continue
        require(isinstance(item['title'], str) and item['title'].strip(), 'A draft or published lesson needs a title')
        require(re.fullmatch(r'guides/[a-z0-9]+(?:-[a-z0-9]+)*\.html', item['url'] or ''), 'Invalid guide URL')
        require(local_path(root, item['url']).is_file(), f"Missing page: {item['url']}")
        urls.append(item['url'])
    require(len(urls) == len(set(urls)), 'Duplicate lesson URLs')
    return data


def image_path(root, series, guide_url, image):
    absolute = urljoin(series['site_url'] + guide_url, image)
    require(absolute.startswith(series['site_url']), f'OG image must be local to this site: {image}')
    relative = unquote(absolute[len(series['site_url']):])
    require(relative.startswith('images/') and local_path(root, relative).is_file(), f'Missing image under images/: {image}')
    return relative


def validate_page(root, series, item, source, detailed=False):
    page = Page(source)
    label = item['url']
    require(page.title.strip(), f'{label}: missing title')
    for key in ('description', 'guide:category', 'guide:updated', 'og:image'):
        require(page.meta.get(key, '').strip(), f'{label}: missing {key}')
    updated = page.meta['guide:updated']
    require(re.fullmatch(r'\d{4}-\d{2}-\d{2}', updated), f'{label}: use YYYY-MM-DD')
    date.fromisoformat(updated)
    published = page.meta.get('guide:published', '')
    if item['status'] == 'published':
        require(published, f'{label}: missing guide:published; set the first publication date')
    if published:
        require(re.fullmatch(r'\d{4}-\d{2}-\d{2}', published), f'{label}: guide:published must use YYYY-MM-DD')
        date.fromisoformat(published)
    image = image_path(root, series, label, page.meta['og:image'])
    if not detailed:
        return page
    require(normalized(page.title) == item['title'] == normalized(page.h1), f'{label}: title, h1, and series title must agree')
    require(page.meta.get('og:title') == item['title'], f'{label}: og:title does not match')
    require(page.meta.get('guide:series') == series['id'], f'{label}: wrong guide:series')
    require(page.meta.get('guide:order') == str(item['number']), f'{label}: wrong guide:order')
    require(page.meta['guide:category'] == f"{series['title']} · {item['number']:02}", f'{label}: wrong series category')
    require(page.canonical == series['site_url'] + label == page.meta.get('og:url'), f'{label}: canonical and og:url must match its path')
    require(len(page.ids) == len(set(page.ids)), f'{label}: duplicate element IDs')
    if item['status'] == 'published':
        require(not re.search(r'\bTODO\b|\{\{[^}]+\}\}', source), f'{label}: unfinished placeholders')
        require(image != DEFAULT_IMAGE, f'{label}: replace the placeholder OG image before publishing')
    for ref in page.refs:
        absolute = urljoin(series['site_url'] + label, ref)
        if not absolute.startswith(series['site_url']):
            continue
        parts = urlsplit(absolute[len(series['site_url']):])
        target = local_path(root, parts.path or 'index.html')
        require(target.is_file(), f'{label}: missing local reference {ref}')
        if parts.fragment and target.suffix == '.html':
            ids = page.ids if target == root / label else Page(read(target)).ids
            require(unquote(parts.fragment) in ids, f'{label}: missing anchor {ref}')
    return page


def replace_block(source, name, content, indent):
    start, end = f'<!-- {name}_START -->', f'<!-- {name}_END -->'
    require(source.count(start) == source.count(end) == 1, f'Expected one {name} marker pair')
    before, rest = source.split(start)
    _, after = rest.split(end)
    return before + start + '\n' + content + '\n' + indent + end + after


def series_nav(series, current):
    lines = ['        <ol class="series-issues" aria-label="Series progress">']
    for lesson in series['lessons']:
        n = lesson['number']
        if n == current['number']:
            state = 'This essay' if current['status'] == 'published' else 'This draft'
            body = f'<span>{n:02}</span><span class="issue-state">{state}</span>'
            attrs = ' aria-current="page"'
        elif lesson['status'] == 'published':
            body = f'<a href="{esc(Path(lesson["url"]).name)}" aria-label="Essay {n:02}: {esc(lesson["title"])}"><span>{n:02}</span><span class="issue-state">Read essay</span></a>'
            attrs = ''
        else:
            body = f'<span>{n:02}</span><span class="issue-state">Forthcoming</span>'
            attrs = ''
        lines.append(f'          <li{attrs}>{body}</li>')
    lines.append('        </ol>')
    published = [x for x in series['lessons'] if x['status'] == 'published']
    previous = [x for x in published if x['number'] < current['number']]
    following = [x for x in published if x['number'] > current['number']]
    neighbors = ([('prev', 'Previous essay', previous[-1])] if previous else []) + ([('next', 'Next essay', following[0])] if following else [])
    if neighbors:
        lines.append('        <nav class="series-adjacent" aria-label="More in this series">')
        for rel, caption, lesson in neighbors:
            lines.append(f'          <a rel="{rel}" href="{esc(Path(lesson["url"]).name)}"><span>{caption} · {lesson["number"]:02}</span>{esc(lesson["title"])}</a>')
        lines.append('        </nav>')
    return '\n'.join(lines)


def card(root, series, item, page):
    m = page.meta
    image = image_path(root, series, item['url'], m['og:image'])
    return f'''          <a href="{esc(item['url'])}" style="text-decoration:none;" data-published="{esc(m['guide:published'])}">
            <section>
              <div class="grid" style="align-items:center; gap:16px;">
                <div>
                  <h3 class="guide-card-title">{esc(page.title.strip())}</h3>
                  <div class="sub" style="margin-bottom:8px;">
                    <span class="pill">{esc(m['guide:category'])}</span>
                    &nbsp;•&nbsp;<span class="pill">Published {esc(m['guide:published'])}</span>
                  </div>
                  <p style="margin:6px 0 0;">{esc(m['description'])}</p>
                </div>
                <div class="image-container" style="max-width:280px;">
                  <img src="{esc(image)}" alt="" loading="lazy">
                </div>
              </div>
            </section>
          </a>'''


def desired_files(root):
    """Calculate and validate every generated change before writing any of them."""
    series = manifest(root)
    lessons = [x for x in series['lessons'] if x['status'] != 'planned']
    owned = {x['url'] for x in lessons}
    registry = json.loads(read(root / REGISTRY))
    registry = [x for x in registry if x.get('series') != series['id'] and x['url'] not in owned]
    registry += [dict(url=x['url'], status=x['status'], series=series['id'], number=x['number']) for x in lessons]
    require(len({x['url'] for x in registry}) == len(registry), 'Duplicate registry URLs')
    require(all(x['status'] in ('wip', 'published') for x in registry), 'Invalid registry status')
    updates = {REGISTRY: encode(registry)}
    for item in lessons:
        source = read(root / item['url'])
        validate_page(root, series, item, source, detailed=True)
        source = re.sub(r'^[ \t]*<meta name="robots"[^>]*>\n', '', source, flags=re.M)
        if item['status'] == 'wip':
            source = source.replace('</head>', '  <meta name="robots" content="noindex,follow">\n</head>')
        updates[item['url']] = replace_block(source, 'SERIES_NAV', series_nav(series, item), '        ')
    cards = []
    for item in registry:
        if item['status'] == 'published':
            page = validate_page(root, series, item, updates.get(item['url']) or read(local_path(root, item['url'])))
            cards.append((item, page))
    cards.sort(key=lambda pair: (-date.fromisoformat(pair[1].meta['guide:published']).toordinal(), pair[0]['url']))
    rendered = '\n'.join(card(root, series, item, page) for item, page in cards)
    updates['index.html'] = replace_block(read(root / 'index.html'), 'GUIDE_CARDS', rendered, '          ')
    return updates


def sync(root, check=False):
    updates = desired_files(root)
    stale = [name for name, text in updates.items() if read(root / name) != text]
    if check:
        require(not stale, 'Run sync; generated content is stale: ' + ', '.join(stale))
        for item in manifest(root)['lessons']:
            if item['status'] == 'planned':
                continue
            notes = root / f'wip_notes/thinking-in-systems-{item["number"]:02}'
            require((notes / 'source.md').is_file() and (notes / 'source.md').stat().st_size, f'{notes}: preserve the original essay as source.md')
            if item['status'] == 'published':
                require((notes / 'edited.html').is_file(), f'Run snapshot --number {item["number"]} to preserve the edited copy')
        print('Guide metadata, assets, local links, source copies, cards, and series navigation passed.')
    else:
        for name in stale:
            (root / name).write_text(updates[name], encoding='utf-8')
        print('Updated: ' + ', '.join(stale) if stale else 'Generated content is already in sync.')


def new_lesson(root, args):
    series = manifest(root)
    require(1 <= args.number <= 5, 'Lesson number must be 1–5')
    item = series['lessons'][args.number - 1]
    require(item['status'] == 'planned', 'That lesson already exists')
    require(re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*', args.slug), 'Use a lowercase kebab-case slug')
    require(args.title.strip() and args.description.strip(), 'Title and description cannot be blank')
    url = f'guides/{args.slug}.html'
    destination = root / url
    notes = root / f'wip_notes/thinking-in-systems-{args.number:02}'
    require(not destination.exists() and not notes.exists(), 'Refusing to overwrite an existing page or notes folder')
    require(url not in {x['url'] for x in json.loads(read(root / REGISTRY))}, 'URL is already registered')
    source = args.essay.read_bytes()
    require(source.strip(), 'The source essay is empty')
    source.decode('utf-8')
    image = image_path(root, series, url, series['site_url'] + args.image)
    values = dict(title=args.title.strip(), description=args.description.strip(), number=args.number,
                  number_padded=f'{args.number:02}', date=date.today().isoformat(), url=url, canonical=series['site_url'] + url,
                  image=series['site_url'] + image, series_title=series['title'], series_subtitle=series['subtitle'],
                  series_description=series['description'])
    template = read(root / 'templates/thinking-in-systems/lesson.html')
    page = re.sub(r'\{\{(\w+)\}\}', lambda match: esc(values[match[1]]), template)
    brief_template = read(root / 'templates/thinking-in-systems/brief.md')
    brief = re.sub(r'\{\{(\w+)\}\}', lambda match: str(values[match[1]]), brief_template)
    desired_files(root)  # Fail on existing problems before creating a draft.
    item.update(title=values['title'], url=url, status='wip')
    notes.mkdir(parents=True)
    (notes / 'source.md').write_bytes(source)
    (notes / 'brief.md').write_text(brief, encoding='utf-8')
    destination.write_text(page, encoding='utf-8')
    (root / MANIFEST).write_text(encode(series), encoding='utf-8')
    sync(root)
    print(f'Created WIP {url}; original essay saved to {notes.relative_to(root)}/source.md')


def snapshot(root, number):
    items = [x for x in manifest(root)['lessons'] if x['number'] == number and x['url']]
    require(items, 'Create the lesson before taking a snapshot')
    notes = root / f'wip_notes/thinking-in-systems-{number:02}'
    require((notes / 'source.md').is_file(), 'Preserve the original essay before taking a snapshot')
    (notes / 'edited.html').write_bytes((root / items[0]['url']).read_bytes())
    print(f'Saved {notes.relative_to(root)}/edited.html (approval is recorded separately in brief.md).')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, default=ROOT, help=argparse.SUPPRESS)
    sub = parser.add_subparsers(dest='command', required=True)
    for command in ('sync', 'check'):
        sub.add_parser(command)
    snap = sub.add_parser('snapshot', help='Save the current edited HTML alongside the original essay')
    snap.add_argument('--number', required=True, type=int)
    new = sub.add_parser('new', help='Create a WIP lesson and preserve its source essay')
    new.add_argument('--number', required=True, type=int)
    new.add_argument('--slug', required=True)
    new.add_argument('--title', required=True)
    new.add_argument('--description', required=True)
    new.add_argument('--essay', required=True, type=Path)
    new.add_argument('--image', default=DEFAULT_IMAGE, help='Repository-relative image path; replace the default before publishing')
    args = parser.parse_args()
    try:
        root = args.root.resolve()
        if args.command == 'new':
            new_lesson(root, args)
        elif args.command == 'snapshot':
            snapshot(root, args.number)
        else:
            sync(root, check=args.command == 'check')
    except (ValueError, OSError, KeyError, TypeError) as error:
        print(f'Guide check: {error}', file=sys.stderr)
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
