/* Back-compat shim.
   The sandbox code lives at `assets/js/sandbox.js`. Keep this file so older links don’t break. */
(() => {
  const script = document.createElement('script');
  script.src = 'assets/js/sandbox.js';
  document.head.appendChild(script);
})();
