/* Back-compat shim.
   The site JS lives at `assets/js/core.js` and `assets/js/widgets.js`. */
(() => {
  const load = (src) => {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
  };
  load('assets/js/core.js');
  load('assets/js/widgets.js');
})();
