"""Exercise publication transitions in a temporary checkout, never in the real series."""
import argparse
from contextlib import redirect_stdout
import io
from pathlib import Path
import shutil
import tempfile
import unittest
from urllib.parse import urljoin, urlsplit

import maintain as m


class GuideWorkflow(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        for name in ('guides', 'templates/thinking-in-systems', 'assets'):
            shutil.copytree(m.ROOT / name, self.root / name)
        shutil.copy(m.ROOT / 'index.html', self.root / 'index.html')
        series = m.manifest(self.root)
        # Keep lifecycle tests independent of how many real lessons are published.
        for lesson in series['lessons'][1:]:
            lesson.update(title=None, url=None, status='planned')
        (self.root / m.MANIFEST).write_text(m.encode(series), encoding='utf-8')
        # Asset presence is checked here; the browser suite tests real asset rendering.
        refs = [series['site_url'] + m.DEFAULT_IMAGE]
        for path in (self.root / 'guides').glob('*.html'):
            page = m.Page(m.read(path))
            refs += [urljoin(series['site_url'] + 'guides/' + path.name, r) for r in page.refs + [page.meta['og:image']]]
        for ref in refs:
            if ref.startswith(series['site_url']):
                target = self.root / urlsplit(ref[len(series['site_url']):]).path
                if not target.exists():
                    target.parent.mkdir(parents=True, exist_ok=True)
                    target.write_bytes(b'fixture')
        for lesson in series['lessons']:
            if lesson['url']:
                notes = self.root / f'wip_notes/thinking-in-systems-{lesson["number"]:02}'
                notes.mkdir(parents=True)
                (notes / 'source.md').write_text('Original essay', encoding='utf-8')
                (notes / 'edited.html').write_text('Saved editorial copy', encoding='utf-8')
        self.essay = self.root / 'input.md'
        self.essay.write_bytes('# Source essay\r\n\r\nPreserve “voice” & wording.\r\n'.encode())
        self.args = argparse.Namespace(number=2, slug='a-second-lesson', title='A second lesson',
                                       description='A specific question for readers.', essay=self.essay,
                                       image=m.DEFAULT_IMAGE)
        self.output = redirect_stdout(io.StringIO())
        self.output.__enter__()
        self.addCleanup(self.output.__exit__, None, None, None)
        m.sync(self.root)

    def update_status(self, status):
        data = m.manifest(self.root)
        data['lessons'][1]['status'] = status
        if status == 'published':
            path = self.root / data['lessons'][1]['url']
            if not m.Page(m.read(path)).meta.get('guide:published'):
                path.write_text(m.read(path).replace('</head>', '  <meta name="guide:published" content="2026-10-27">\n</head>'), encoding='utf-8')
        (self.root / m.MANIFEST).write_text(m.encode(data), encoding='utf-8')

    def test_sync_is_idempotent_and_check_detects_drift(self):
        m.sync(self.root)
        first = m.desired_files(self.root)
        m.sync(self.root)
        self.assertEqual(first, m.desired_files(self.root))
        m.sync(self.root, check=True)
        index = self.root / 'index.html'
        index.write_text(m.read(index).replace('class="guide-card-title"', 'class="outdated"', 1), encoding='utf-8')
        with self.assertRaisesRegex(ValueError, 'stale'):
            m.sync(self.root, check=True)
        m.sync(self.root)
        m.sync(self.root, check=True)

    def test_new_draft_preserves_source_and_is_hidden(self):
        m.new_lesson(self.root, self.args)
        notes = self.root / 'wip_notes/thinking-in-systems-02'
        self.assertEqual(self.essay.read_bytes(), (notes / 'source.md').read_bytes())
        self.assertNotIn('a-second-lesson.html', m.read(self.root / 'index.html'))
        page = m.read(self.root / 'guides/a-second-lesson.html')
        self.assertIn('noindex,follow', page)
        self.assertIn('This draft', page)
        m.sync(self.root, check=True)
        with self.assertRaisesRegex(ValueError, 'already exists'):
            m.new_lesson(self.root, self.args)

    def test_publication_and_withdrawal_update_all_navigation(self):
        m.new_lesson(self.root, self.args)
        self.update_status('published')
        with self.assertRaisesRegex(ValueError, 'unfinished placeholders'):
            m.sync(self.root)
        path = self.root / 'guides/a-second-lesson.html'
        path.write_text(m.read(path).replace('TODO:', 'Reviewed:').replace(m.DEFAULT_IMAGE, 'images/thinking-in-systems-01.png'), encoding='utf-8')
        m.sync(self.root)
        m.snapshot(self.root, 2)
        m.sync(self.root, check=True)
        self.assertIn('href="guides/a-second-lesson.html"', m.read(self.root / 'index.html'))
        first = m.read(self.root / 'guides/when-ai-gets-the-right-answer.html')
        self.assertIn('rel="next" href="a-second-lesson.html"', first)
        self.assertIn('rel="prev"', m.read(path))
        self.assertNotIn('noindex', m.read(path))
        self.update_status('wip')
        m.sync(self.root)
        self.assertNotIn('a-second-lesson.html', m.read(self.root / 'index.html'))
        self.assertNotIn('a-second-lesson.html', m.read(self.root / 'guides/when-ai-gets-the-right-answer.html'))

    def test_rejects_placeholder_art_and_broken_metadata(self):
        m.new_lesson(self.root, self.args)
        path = self.root / 'guides/a-second-lesson.html'
        path.write_text(m.read(path).replace('TODO:', 'Reviewed:'), encoding='utf-8')
        self.update_status('published')
        with self.assertRaisesRegex(ValueError, 'placeholder OG image'):
            m.sync(self.root)
        self.update_status('wip')
        path.write_text(m.read(path).replace('content="2"', 'content="3"'), encoding='utf-8')
        with self.assertRaisesRegex(ValueError, 'guide:order'):
            m.sync(self.root)

    def test_rejects_invalid_paths_and_existing_notes(self):
        self.args.slug = '../escape'
        with self.assertRaisesRegex(ValueError, 'kebab-case'):
            m.new_lesson(self.root, self.args)
        self.args.slug = 'a-second-lesson'
        (self.root / 'wip_notes/thinking-in-systems-02').mkdir()
        with self.assertRaisesRegex(ValueError, 'overwrite'):
            m.new_lesson(self.root, self.args)

    def test_escapes_user_metadata_and_ignores_svg_titles(self):
        self.args.title = 'Evidence & <meaning>'
        m.new_lesson(self.root, self.args)
        page = m.Page(m.read(self.root / 'guides/a-second-lesson.html'))
        self.assertEqual(page.title, self.args.title)
        self.assertEqual(m.Page('<head><title>Page</title></head><svg><title>Diagram</title></svg>').title, 'Page')

    def test_rejects_invalid_manifest_and_duplicate_ids(self):
        path = self.root / m.MANIFEST
        original = m.read(path)
        path.write_text(original.replace('"number": 5', '"number": 4'), encoding='utf-8')
        with self.assertRaisesRegex(ValueError, '1–5'):
            m.sync(self.root)
        path.write_text(original, encoding='utf-8')
        page = self.root / 'guides/when-ai-gets-the-right-answer.html'
        page.write_text(m.read(page).replace('</body>', '<div id="content"></div></body>'), encoding='utf-8')
        with self.assertRaisesRegex(ValueError, 'duplicate element IDs'):
            m.sync(self.root)


if __name__ == '__main__':
    unittest.main()
