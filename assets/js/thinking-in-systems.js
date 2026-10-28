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

  // A worksheet is useful without JS; this adds an export of the reader's answers.
  document.querySelectorAll('[data-problem-worksheet]').forEach((worksheet) => {
    const button = worksheet.querySelector('[data-download-worksheet]');
    const fields = Array.from(worksheet.querySelectorAll('textarea'));
    const status = worksheet.querySelector('.worksheet-status');
    if (!button || !fields.length || !status) return;

    const resizers = fields.map((field) => {
      const resize = () => {
        field.style.height = 'auto';
        field.style.height = `${field.scrollHeight + 2}px`;
      };
      field.addEventListener('input', () => {
        resize();
        status.textContent = '';
      });
      resize();
      return resize;
    });
    window.addEventListener('resize', () => resizers.forEach(resize => resize()));
    window.addEventListener('beforeprint', () => resizers.forEach(resize => resize()));
    button.hidden = false;
    button.addEventListener('click', () => {
      const sections = fields.map((field, index) => {
        const question = field.labels[0]?.textContent.trim() || `Question ${index + 1}`;
        return `## ${index + 1}. ${question}\n\n${field.value.trim() || '(Not yet answered)'}\n`;
      });
      const text = '# Problem-framing brief\n\n'
        + '[Essay one\'s five-stage diagnostic](https://cydrysdale.github.io/now-in-production/guides/when-ai-gets-the-right-answer.html#diagnostic-title) '
        + 'helps trace an unreliable answer. This brief asks you to establish the outcome you want and the system you need to examine. '
        + 'If the problem is answer reliability, use that diagnostic within the boundary you define here.\n\n'
        + sections.join('\n')
        + '\n## Next investigation\n\n- What we will try:\n- What we will hold constant:\n- When we will review the evidence:\n'
        + '\nBased on essay 02 of Thinking in Systems, “A Better Prompt Won’t Fix the Wrong Problem.”\n';
      const url = URL.createObjectURL(new Blob([text], { type: 'text/markdown;charset=utf-8' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'problem-framing-brief.md';
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      status.textContent = 'Your brief is ready to save.';
    });
  });
})();
