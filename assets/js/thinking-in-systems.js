// Small reading enhancements for the Thinking in Systems essays.
// The evidence exercise uses native details/summary and works without JavaScript.
(() => {
  if (!document.body.classList.contains('thinking-guide')) return;

  const article = document.querySelector('main article');
  const readingTime = document.getElementById('reading-time');
  if (article && readingTime) {
    const words = article.textContent.trim().split(/\s+/).length;
    readingTime.textContent = `About ${Math.ceil(words / 220)} min read`;
  }

  // core.js builds the TOC first. Keep its links and behavior, then add chapter labels.
  document.querySelectorAll('nav.toc').forEach((nav) => {
    nav.querySelectorAll('a[href^="#"]').forEach((link) => {
      const heading = document.getElementById(link.hash.slice(1));
      if (!heading) return;
      if (heading.dataset.tocLabel) link.textContent = heading.dataset.tocLabel;
      if (heading.dataset.tocGroup) {
        const label = document.createElement('p');
        label.className = 'toc-group';
        label.textContent = heading.dataset.tocGroup;
        link.before(label);
      }
    });
  });
})();
