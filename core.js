/*
  core.js — combined site behaviors for the RGB → CMYK guide

  Includes:
    1) Theme toggle (button or switch) with OS-preference sync
    2) In-view animation trigger via IntersectionObserver
    3) Code "typewriter" line staggering helper
    4) Table of contents (TOC) builder + active-section highlighting + mobile toggle

  Usage:
    <script src="core.js" defer></script>
    
  Notes:
    • Safe to include site‑wide. Each feature no-ops if the required markup isn’t present.
    • Keep CSS hooks: .animate (initial), .in-view (when revealed), nav.toc, #tocToggle, #tocList
*/

(() => {
  // -----------------------------
  // Small utilities
  // -----------------------------
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // -----------------------------
  // 1) THEME MODULE (unifies button + switch)
  // -----------------------------
  const Theme = (() => {
    const LS_KEY = 'theme';
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    // Apply theme to <html data-theme> and sync any controls.
    function apply(mode, { persist = true } = {}) {
      if (mode === 'dark' || mode === 'light') {
        root.setAttribute('data-theme', mode);
        if (persist) localStorage.setItem(LS_KEY, mode);
      } else {
        // `auto`/unset: remove explicit theme so OS preference is used
        root.removeAttribute('data-theme');
        if (persist) localStorage.removeItem(LS_KEY);
      }
      syncControls();
    }

    // Update visual state of any present controls.
    function syncControls() {
      const btn = $('#themeToggle');      // icon button (☀️ / 🌙)
      const sw  = $('#themeSwitch');      // checkbox-style switch
      const saved = localStorage.getItem(LS_KEY);
      const effective = saved || (media.matches ? 'dark' : 'light');

      if (btn) {
        btn.setAttribute('aria-pressed', String(effective === 'dark'));
        btn.textContent = (effective === 'dark') ? '☀️' : '🌙';
      }
      if (sw) {
        sw.checked = (effective === 'dark');
        sw.setAttribute('aria-checked', String(sw.checked));
      }
    }

    function init() {
      // Initialize from saved choice or system preference
      const saved = localStorage.getItem(LS_KEY);
      apply(saved || (media.matches ? 'dark' : 'light'), { persist: false });

      // Button toggles between light/dark
      const btn = $('#themeToggle');
      if (btn) btn.addEventListener('click', () => {
        const now = root.getAttribute('data-theme') || (media.matches ? 'dark' : 'light');
        apply(now === 'dark' ? 'light' : 'dark');
      });

      // Switch maps checked → dark / unchecked → light
      const sw = $('#themeSwitch');
      if (sw) sw.addEventListener('change', (e) => apply(e.target.checked ? 'dark' : 'light'));

      // Follow OS changes only when the user hasn’t chosen explicitly
      media.addEventListener('change', (e) => {
        if (!localStorage.getItem(LS_KEY)) apply(e.matches ? 'dark' : 'light', { persist: false });
      });
    }

    return { init };
  })();

  // -----------------------------
  // 2) IN-VIEW ANIMATION TRIGGER
  //    Adds .in-view to elements with .animate when they enter the viewport.
  //    (Removes .animate when they leave to prevent animating again.)
  // -----------------------------
  const InViewAnimations = (() => {
    function init() {
      const animated = $$('.animate');
      if (!animated.length) return; // No-op if the feature isn’t used on the page

      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            // Note: Change the "animate" class here to "in-view" to re-animate 
            // every time the element re-enters the viewport.
            entry.target.classList.remove('animate');
          }
        });
      });

      animated.forEach((el) => io.observe(el));
    }

    return { init };
  })();

  // -----------------------------
  // 3) CODE TYPEWRITER LINE STAGGER
  //    Looks for .code blocks that contain child elements with .code-type
  //    and staggers their CSS animations.
  // -----------------------------
  const CodeTypewriter = (() => {
    function init() {
      $$('.code').forEach((block) => {
        const lines = block.querySelectorAll('.code-type');
        lines.forEach((line, i) => {
          // ~0.35s stagger; 1s duration; step timing for typewriter feel
          line.style.animationDelay = `${i * 350}ms`;
          line.style.animationDuration = '1000ms';
          line.style.animationTimingFunction = 'steps(25, end)';
          line.style.animationFillMode = 'both';
        });
      });
    }

    return { init };
  })();

  // -----------------------------
  // 4) TABLE OF CONTENTS (TOC)
  //    - Auto-IDs for <section> <h2> (no clobbering existing IDs)
  //    - Build <nav class="toc"> with anchors
  //    - Highlight active section while scrolling
  //    - Mobile TOC toggle (#tocToggle + #tocList)
  // -----------------------------
  const TOC = (() => {
    function slugify(str) {
      return str
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
    }

    function ensureIds(headings) {
      headings.forEach((h) => {
        if (!h.id) {
          const base = slugify(h.textContent);
          let id = base, i = 2;
          while (document.getElementById(id)) id = `${base}-${i++}`;
          h.id = id;
        }
      });
    }

    function buildTOC(containers, headings) {
      containers.forEach((container) => {
        container.innerHTML = '';
        const base = location.pathname.slice(0, location.pathname.lastIndexOf('/') + 1);
        const home = document.createElement('a'); // ✅ Prepend a fixed "Home" link
        home.href = base + 'index.html';
        home.textContent = '← Home';
        home.className = 'home-link';
        home.setAttribute('aria-label', 'Go to guides home');
        container.appendChild(home);
        headings.forEach((h) => {
          const a = document.createElement('a');
          a.href = `#${h.id}`;
          a.textContent = h.textContent;
          a.className = `depth-${h.tagName === 'H2' ? '2' : '3'}`;
          container.appendChild(a);
        });
      });
    }
    

    function observeActive(headings) {
      const obs = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          if (!visible.length) return;
          const id = visible[0].target.id;
          $$('.toc a').forEach((l) => l.classList.remove('active'));
          $$(`.toc a[href="#${id}"]`).forEach((l) => l.classList.add('active'));
        },
        { rootMargin: '0px 0px -70% 0px', threshold: [0, 1] }
      );
      headings.forEach((h) => obs.observe(h));
    }

    function init() {
      const main = $('main');
      if (!main) return; // No-op on pages without main content

      const headings = Array.from(main.querySelectorAll('section h2'));
      if (!headings.length) return;

      ensureIds(headings);
      buildTOC($$('nav.toc'), headings);
      observeActive(headings);

      // --- Mobile TOC wiring (dock to header when visible; portal when not) ---
      const toggleBtn = document.getElementById('tocToggle');   // header button
      const mobileToc = document.getElementById('tocList');     // menu
      const fab       = document.getElementById('tocFab');      // floating button FAB
      const toTop     = document.getElementById('toTop');       // Back-to-top BTT


      const BP = 1100; // keep in sync with CSS @media (max-width: 1100px)
      const mq = window.matchMedia(`(max-width: ${BP}px)`);
      const headerDock = toggleBtn ? toggleBtn.closest('.toc-mobile') : null;
      const originalParent = mobileToc ? mobileToc.parentElement : null;

      let headerInView = true;

      function ensureDock() {
        if (!mobileToc || !originalParent) return;
        const shouldPortal = mq.matches && !headerInView;

        if (shouldPortal && mobileToc.parentElement !== document.body) {
          document.body.appendChild(mobileToc);
          mobileToc.classList.add('is-ported');   // fixed overlay CSS hook
        } else if (!shouldPortal && mobileToc.parentElement === document.body) {
          originalParent.appendChild(mobileToc);
          mobileToc.classList.remove('is-ported');
        }
      }

      // Observe whether the header mobile nav is on-screen
      if (headerDock) {
        const io = new IntersectionObserver(([entry]) => {
          headerInView = !!entry.isIntersecting;
          ensureDock();
          updateFabVisibility();
          updateToTopVisibility();
        }, { root: null, threshold: 0 });
        io.observe(headerDock);
      }

      mq.addEventListener('change', () => { ensureDock(); updateFabVisibility(); });

      // Closed on load
      if (mobileToc) mobileToc.setAttribute('data-open','false');
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded','false');
      if (fab)       fab.setAttribute('aria-expanded','false');

      // Single source of truth for open/close
      function setTocOpen(open) {
        if (!mobileToc) return;
        mobileToc.setAttribute('data-open', String(open));
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', String(open));
        if (fab)       fab.setAttribute('aria-expanded', String(open));
      }

      // Header button
      if (toggleBtn && mobileToc) {
        toggleBtn.addEventListener('click', () => {
          const open = mobileToc.getAttribute('data-open') === 'true';
          setTocOpen(!open);
        });
        // Close when a link is chosen
        mobileToc.addEventListener('click', (e) => {
          if (e.target.matches('a')) setTocOpen(false);
        });
      }

      // FAB and BTT visibility = after scroll threshold AND header not visible
      const showAfter = 200; // tweak to taste
      function updateFabVisibility() {
        if (!fab) return;
        fab.hidden = headerInView || window.scrollY < showAfter;
      }
      function updateToTopVisibility() {
        if (!toTop) return;
        const shouldShow = mq.matches && !headerInView && window.scrollY > showAfter;
        toTop.hidden = !shouldShow;
      }
      window.addEventListener('scroll', updateToTopVisibility, { passive: true });
      mq.addEventListener('change', updateToTopVisibility);
      // FAB toggle
      if (fab && mobileToc) {
        updateFabVisibility();
        window.addEventListener('scroll', updateFabVisibility, { passive: true });
        fab.addEventListener('click', () => {
          const open = mobileToc.getAttribute('data-open') === 'true';
          setTocOpen(!open);
        });
      }

      // Close on Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileToc && mobileToc.getAttribute('data-open') === 'true') {
          setTocOpen(false);
        }
      });

      // Initial dock
      ensureDock();

    }

    return { init };
  })();

  // -----------------------------
  // Boot
  // -----------------------------
  // If this script is loaded with `defer`, DOM is already parsed.
  // Still, we guard with DOMContentLoaded in case it’s included without `defer`.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  function start() {
    Theme.init();
    InViewAnimations.init();
    CodeTypewriter.init();
    TOC.init();
  }
})();

/*! Mini Widgets bundle — RuleCard, AuditQuiz
 *  Namespace: window.CDWidgets
 *  No deps. Accessible. Vanilla JS.
 */
(function () {
  const ns = (window.CDWidgets = window.CDWidgets || {});

  // ---------- utilities ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const fmtNum = (n) => new Intl.NumberFormat().format(n);
  const safeInt = (v) => (Number.isFinite(+v) ? +v : 0);

  // ---------- Rule Card ----------
  // Markup expectations:
  // <section data-widget="rule-card" aria-labelledby="ruleCardTitle">
  //   <div class="card-box" role="status" aria-live="polite"></div>
  //   <button class="btn" type="button">Draw</button>
  // </section>
  const DEFAULT_DECK = Object.freeze([
    { t: "Case File — Eltra v. Ringer (1978)", b: "In Eltra v. Ringer (4th Cir. 1978), the court affirmed the U.S. Copyright Office’s refusal to register a typeface design, reasoning that a typeface is an industrial design—not a separable “work of art”—under the 1909 Act’s rules, so the design of the letters isn’t copyrightable. The decision cemented the U.S. position that typeface shapes fall outside ordinary copyright protection." },
    { t: "Case File — Adobe v. Southern (1998)", b: "In Adobe Systems v. Southern Software (N.D. Cal. 1998), the court held that while typeface designs themselves aren’t copyrightable, the font program—the creative arrangement of Bézier control-point coordinates—is protectable software; Southern Software’s “Veracity” fonts, made by extracting and slightly scaling Adobe Utopia’s coordinates, were therefore infringing. (The court granted Adobe summary judgment on copyright, but not on its design-patent claims.)" },
    { t: "Reality Check", b: "Most font disputes resolve with a demand letter and retroactive licensing, not a lawsuit. A vendor flags out-of-scope use (extra installs, self-hosted web beyond the tier, app embeds, vendor sharing), shares evidence (URLs, dates, crawler logs), and proposes a “true-up” for the past period plus proper licensing going forward—or removal/replacement. Teams usually negotiate scope and fees, document fixes, and close it out. Court is the exception, typically reserved for large, willful, or unresolvable cases." },
    { t: "Tip", b: "Track seats and scope per channel so you always know what’s covered: Desktop = installs/users (machines), Web = domains + monthly page views + hosting method, App = explicit embed rights per title/version (or MAU), Broadcast = time/region/placement limits, Server = instance count and render volumes. Keep a simple ledger tying each family to who/where/how it’s used (including vendors) so true-ups, audits, and renewals are straightforward." },
    { t: "History", b: "In 1842, the first U.S. design patent—D1, to type founder George Bruce—covered a typeface, protecting appearance rather than function. It mattered little when copying metal type was slow and costly, but set the pattern: the U.S. may protect the look of letters via design patents, not broad copyright—so modern protection centers on the software font file and licensing." },
    { t: "Fun Fact", b: "In the 1990s, Microsoft commissioned a team to design Arial as a “metrics-compatible” twin of Helvetica. Because the shapes themselves couldn’t be copyrighted, Microsoft could sell a Helvetica lookalike bundled with Windows—skirting licensing fees while keeping document layouts identical." },
    { t: "Fun Fact", b: "In the EU and UK, the visual appearance of a typeface can be protected as an industrial design. In the EU, a Registered Community Design can last up to 25 years (renewed in 5-year blocks), while an Unregistered Community Design gives 3 years from first disclosure. The UK offers similar protection through Registered Designs and specific design provisions for typefaces. These rights target the look/overall impression (not the font software), so independent creation is a defense—and you still need a license for the font file you use." }
  ]);

  function renderCard(target, card) {
    target.innerHTML =
      `<div class="card"><strong>${card.t}</strong><p>${card.b}</p></div>`;
  }

  function initRuleCard(root) {
    const el = root || document;
    const blocks = $$('[data-widget="rule-card"]', el);
    blocks.forEach((block) => {
      const box = $(".card-box", block);
      const btn = $('button, [data-action="draw"]', block);
      if (!box || !btn) return;

      // Custom deck via data JSON (optional)
      let deck = DEFAULT_DECK;
      const raw = block.getAttribute("data-deck");
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length) deck = parsed;
        } catch (_) {}
      }

      const draw = () => {
        const card = deck[Math.floor(Math.random() * deck.length)];
        renderCard(box, card);
      };

      btn.addEventListener("click", draw);
      draw(); // first card
    });
  }
  ns.initRuleCard = initRuleCard;

  // ---------- Audit Quiz ----------
  // Minimal yes/no/mcq checker. Pass answers via data-answers='{ "q1":"b", "q2":"a" }'
  // Markup expectations:
  // <section data-widget="audit-quiz">
  //   <form> ... name="q1" ... </form>
  //   <div class="quiz-out" role="status" aria-live="polite"></div>
  // </section>
  function initAuditQuiz(root) {
    const el = root || document;
    const blocks = $$('[data-widget="audit-quiz"]', el);
    blocks.forEach((block) => {
      const form = $("form", block);
      const out = $(".quiz-out", block) || $(".card-box", block);
      if (!form || !out) return;

      // Answers via data-answers='{"q1":"b"}'
      let answers = {};
      const raw = block.getAttribute("data-answers");
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed === "object") answers = parsed;
        } catch (_) {}
      }

      const correctMsg = block.getAttribute("data-correct") || "✅ Correct.";
      const wrongMsg = block.getAttribute("data-wrong") || "❌ Not quite.";

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        // Evaluate all keys in answers; require all to match to call it correct
        let allGood = true;
        for (const key of Object.keys(answers)) {
          const got = (fd.get(key) || "").toString();
          if (got !== answers[key]) { allGood = false; break; }
        }
        out.innerHTML = `<div class="card">${allGood ? correctMsg : wrongMsg}</div>`;
      });
    });
  }
  ns.initAuditQuiz = initAuditQuiz;

  // ---------- Auto init ----------
  function initAll(root) {
    initRuleCard(root);
    initLicenseEstimator(root);
    initAuditQuiz(root);
  }
  ns.initAll = initAll;

  // Auto-run on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", () => ns.initAll());
})();

(function(){
  const lab = document.querySelector('.feature-lab');
  if (!lab) return;

  const sample  = lab.querySelector('.feature-lab__sample');
  const boxes   = lab.querySelectorAll('[data-feature]');
  const sliders = lab.querySelectorAll('[data-axis]');
  const fontSel = lab.querySelector('.feature-lab__font');

  // Features each family actually exposes (adjust if your builds differ)
  const SUPPORT = {
    "roboto":        { axes:{wght:[300,900],                              slnt:[-15,0]}, feats:['kern','liga','calt','ss01','smcp'] },
    "roboto-flex":   { axes:{wght:[300,900], wdth:[75,125], opsz:[8,144], slnt:[-15,0]}, feats:['kern','liga','calt','tnum','zero'] },
    "roboto-slab":   { axes:{wght:[300,900],                              slnt:[-15,0]}, feats:['kern','liga','calt','smcp','onum'] },
    "roboto-serif":  { axes:{wght:[300,900], wdth:[75,125], opsz:[8,144]              }, feats:['kern','liga','calt','smcp','onum','tnum','zero'] },
    "source-serif":  { axes:{wght:[300,900],                opsz:[8,72]               }, feats:['kern','liga','calt','smcp','onum','tnum','zero'] },
    "spectral":      { axes:{wght:[200,900],                opsz:[8,72]               }, feats:['kern','liga','calt','smcp','onum','tnum','zero'] },
    "recursive":     { axes:{wght:[300,1000],               /* no opsz */ slnt:[-15,0]}, feats:['kern','liga','calt','ss01','zero'] },
    "fraunces":      { axes:{wght:[100,1000],               opsz:[9,144]              }, feats:['kern','liga','calt','ss01','onum','tnum'] },
    "inter":         { axes:{wght:[300,900], wdth:[75,125], opsz:[8,144], slnt:[-15,0]}, feats:['kern','liga','tnum','zero'] }
  };

  // Keep a flag so opsz slider can disable auto optical sizing
  let manualOpsz = false;

  function updateFeatures(){
    const names = ['kern','liga','calt','smcp','onum','tnum','zero','ss01'];
    const active = [];
    let numeric = [];

    names.forEach(n => {
      const box = lab.querySelector('[data-feature="'+n+'"]');
      if (!box || box.disabled) return;
      const on = box.checked;
      active.push('"' + n + '" ' + (on ? 1 : 0));
      // high-level numeric mapping for better cross-browser behavior
      if (n === 'onum' && on) numeric.push('oldstyle-nums');
      if (n === 'tnum' && on) numeric.push('tabular-nums');
      if (n === 'zero' && on) numeric.push('slashed-zero');
    });

    sample.style.fontFeatureSettings = active.join(', ');
    sample.style.fontVariantNumeric  = numeric.join(' ') || 'normal';
  }

  function updateAxes(){
    const axes = [];
    let slntVal = null;

    sliders.forEach(s => {
      if (s.disabled) return;
      const tag = s.dataset.axis;
      const val = s.value;

      if (tag === 'opsz') manualOpsz = true; // once user moves opsz, take control
      if (tag === 'slnt') slntVal = parseFloat(val);

      axes.push('"' + tag + '" ' + val);
    });

    // Registered axis niceties
    if (manualOpsz) sample.style.fontOpticalSizing = 'none'; // let slider own opsz

    if (slntVal !== null) {
      // Map slnt to font-style: oblique angle for reliable rendering
      sample.style.fontStyle = (slntVal === 0) ? 'normal' : ('oblique ' + Math.abs(slntVal) + 'deg');
    }

    sample.style.fontVariationSettings = axes.join(', ');
  }

  function applyFont(id){
    const conf = SUPPORT[id];
    if (!conf) return;

    // Set the family
    lab.style.setProperty('--demo-font', conf.family || familyFromId(id));

    // Enable/disable sliders based on available axes; set ranges
    const axisKeys = ['wght','wdth','opsz','slnt'];
    axisKeys.forEach(axis => {
      const s = lab.querySelector('[data-axis="'+axis+'"]');
      if (!s) return;
      const wrap = s.closest('label');
      if (conf.axes && conf.axes[axis]) {
        const [min,max] = conf.axes[axis];
        s.min = min; s.max = max;
        s.disabled = false;
        wrap && wrap.classList.remove('is-disabled');
      } else {
        s.disabled = true;
        wrap && wrap.classList.add('is-disabled');
      }
    });

    // Enable/disable feature checkboxes based on support
    const supported = new Set(conf.feats || []);
    ['kern','liga','calt','smcp','onum','tnum','zero','ss01'].forEach(f => {
      const box = lab.querySelector('[data-feature="'+f+'"]');
      if (!box) return;
      const label = box.closest('label');
      const ok = supported.has(f);
      box.disabled = !ok;
      if (!ok) box.checked = (f === 'kern' || f === 'liga') ? box.checked : false;
      label && label.classList.toggle('is-disabled', !ok);
    });

    // Reset special states
    manualOpsz = false;
    sample.style.fontOpticalSizing = 'auto'; // hand control back until user moves opsz
    sample.style.fontStyle = 'normal';

    // Nudge values into range if needed
    sliders.forEach(s => {
      if (s.disabled) return;
      if (+s.value < +s.min) s.value = s.min;
      if (+s.value > +s.max) s.value = s.max;
    });

    updateFeatures();
    updateAxes();
  }

  function familyFromId(id){
    switch(id){
      case 'roboto':       return "'Roboto', sans-serif";
      case 'roboto-flex':  return "'Roboto Flex', system-ui, sans-serif";
      case 'roboto-slab':  return "'Roboto Slab', Georgia, serif";
      case 'roboto-serif': return "'Roboto Serif', Georgia, serif";
      case 'source-serif': return "'Source Serif 4', Georgia, serif";
      case 'spectral':     return "Spectral, Georgia, serif";
      case 'recursive':    return "Recursive, system-ui, sans-serif";
      case 'fraunces':     return "Fraunces, Georgia, serif";
      case 'inter':        return "'Inter', system-ui, sans-serif";
      default:             return "system-ui, sans-serif";
    }
  }

  // Events
  boxes.forEach(b => b.addEventListener('change', updateFeatures));
  sliders.forEach(s => s.addEventListener('input', updateAxes));
  if (fontSel) fontSel.addEventListener('change', e => applyFont(e.target.value));

  // Initial paint
  applyFont(fontSel ? fontSel.value : 'roboto-flex');
})();

(function(){
  const data = [
    { h: "Movable type: letters as hardware",
      b: "With Gutenberg’s system, a “font” was boxes of metal sorts cast from punches and matrices. Printers bought complete sets and stored them like tools, so ownership and inventory were literal, physical, and easy to account for." },  
    { h: "Foundries as capital businesses",
      b: "Foundries financed punches, matrices, alloys, presses, and skilled labor to manufacture letters. The result was a product economy—shops bought, rented, or borrowed metal, and duplication demanded re-cutting, electrotyping, or recasting." },  
    { h: "Design patents recognize ornament (1842)",
      b: "When U.S. design patents began in 1842, Design Patent D1 covered a typeface by George Bruce. It formally treated letterforms as protectable industrial design, even as everyday protection still came from the cost and craft of making metal type." },  
    { h: "Scarcity as de facto protection",
      b: "Copying rival letters wasn’t drag-and-drop; it was slow, specialized, and capital-intensive. That friction deterred casual imitation and functioned like a practical barrier long before modern licensing and software rights existed." },
    { h: "From scarcity to reproducibility",
      b: "By the late 19th–early 20th centuries, ATF, Linotype, and Monotype scaled production with hot-metal systems and matrix libraries. Distribution became routine via service contracts, yet type stayed tied to molds and machines until phototype loosened the bond." }
  ]  
  ;
  const slider = document.getElementById('era');
  const box = document.getElementById('eraDesc');
  function render(){ const d = data[+slider.value]; box.innerHTML = `<div class="card"><strong>${d.h}</strong><p>${d.b}</p></div>`; }
  slider.addEventListener('input', render); render();
})();

document.querySelectorAll('.slider').forEach(sl => {
  const min = +sl.min || 0, max = +sl.max || 100;
  const bubble = sl.parentElement.querySelector('.slider-bubble');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const pct = v => ((v - min) / (max - min)) * 100;
  let target = pct(+sl.value);
  let current = target;
  let raf = null;

  function paintImmediate() {
    sl.style.setProperty('--s-pct', target + '%');
    if (bubble) bubble.textContent = sl.value;
  }

  function tick() {
    // ease toward target; tweak factor (0.15–0.25) to taste
    current += (target - current) * 0.18;
    sl.style.setProperty('--s-pct', current + '%');
    if (Math.abs(target - current) > 0.1) {
      raf = requestAnimationFrame(tick);
    } else {
      current = target;
      sl.style.setProperty('--s-pct', current + '%');
      raf = null;
    }
  }

  function update() {
    target = pct(+sl.value);
    if (bubble) bubble.textContent = sl.value;
    if (reduce) { paintImmediate(); return; }
    if (!raf) raf = requestAnimationFrame(tick);
  }

  // init
  sl.style.setProperty('--s-pct', target + '%');
  if (bubble) bubble.textContent = sl.value;

  sl.addEventListener('input', update);
  sl.addEventListener('change', update);
});

(function(){
  // --- A) Fallback Stack Tester ---
  const stackCard = document.querySelector('.tool-stack');
  if (stackCard) {
    const input = stackCard.querySelector('.stack-input');
    const level = stackCard.querySelector('.stack-level');
    const sample = stackCard.querySelector('.stack-sample');
    const out = stackCard.querySelector('.stack-out');

    function parseStack(str){
      // split on commas, respecting quotes
      const parts = [];
      let buf='', inQ=false, q='';
      for (const ch of str) {
        if ((ch==="'"||ch==='"')) { if (!inQ){ inQ=true; q=ch; } else if (q===ch){ inQ=false; } buf+=ch; continue; }
        if (ch===',' && !inQ){ parts.push(buf.trim()); buf=''; } else { buf+=ch; }
      }
      if (buf.trim()) parts.push(buf.trim());
      return parts;
    }

    function apply(){
      const list = parseStack(input.value);
      const idx = Math.min(+level.value, list.length-1);
      const reordered = list.slice(idx).concat(list.slice(0, idx)); // rotate so chosen fallback is first
      sample.style.fontFamily = reordered.join(', ');
      out.textContent = 'Now showing stack level ' + idx + ': ' + (list[idx] || '(generic)');
    }
    input.addEventListener('input', apply);
    level.addEventListener('change', apply);
    apply();
  }

  // --- B) Contrast Checker (WCAG) ---
  const cc = document.querySelector('.tool-contrast');
  if (cc) {
    const t = cc.querySelector('.cc-text');
    const b = cc.querySelector('.cc-bg');
    const s = cc.querySelector('.cc-size');
    const sample = cc.querySelector('.cc-sample');
    const out = cc.querySelector('.cc-out');

    function hexToRgb(h){
      let x = h.trim();
      if (x.startsWith('#')) x = x.slice(1);
      if (x.length===3) x = x.split('').map(c=>c+c).join('');
      if (x.length!==6) return null;
      const r = parseInt(x.slice(0,2),16), g = parseInt(x.slice(2,4),16), bl = parseInt(x.slice(4,6),16);
      return [r,g,bl];
    }
    function relLum([r,g,bl]){
      const f = v => { v/=255; return (v<=0.03928)? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); };
      const [R,G,B] = [f(r),f(g),f(bl)];
      return 0.2126*R + 0.7152*G + 0.0722*B;
    }
    function ratio(tc, bc){
      const tr = hexToRgb(tc), br = hexToRgb(bc);
      if (!tr || !br) return null;
      const L1 = relLum(tr), L2 = relLum(br);
      const big = Math.max(L1,L2), small = Math.min(L1,L2);
      return (big + 0.05) / (small + 0.05);
    }
    function paint(){
      const tc = t.value, bc = b.value;
      const r = ratio(tc, bc);
      sample.style.color = tc;
      sample.style.background = bc;
      if (!r){ out.textContent = 'Ratio: — (check your hex values)'; return; }
      const r2 = Math.round(r*100)/100;
      const large = (s.value==='large');
      const passAA = r >= (large?3:4.5);
      const passAAA = r >= (large?4.5:7);
      out.textContent = `Ratio: ${r2}  —  AA ${passAA?'✓':'✕'}  •  AAA ${passAAA?'✓':'✕'}  (${large?'Large text':'Normal text'})`;
    }
    [t,b,s].forEach(el => el.addEventListener('input', paint));
    paint();
  }
})();

(function(){
  const form = document.querySelector('.scenario__form');
  if (!form) return;
  const out = form.querySelector('.scenario__result');

  function grade(){
    const vals = Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).map(i=>i.value);
    const risk = new Set(['app-embed','share-vendor']);
    const warn = new Set(['extra-installs','over-pageviews','subset-web']);
    const okish = new Set(['printer-only','redraw-lookalike']);

    let level = 'ok', msg = 'Likely OK, but confirm your license.';
    if (vals.some(v => risk.has(v)))      { level='risk'; msg='High risk of violation — check embed/sharing clauses and get proper rights.'; }
    else if (vals.some(v => warn.has(v))) { level='warn'; msg='Needs review — usage may exceed your terms (installs, page views, conversions).'; }
    else if (vals.length === 0)           { level='';    msg='Select options to see guidance.'; }
    else if (vals.every(v => okish.has(v))) { level='ok'; msg='Generally acceptable patterns — still verify license specifics.'; }

    out.classList.remove('is-ok','is-warn','is-risk');
    if (level) out.classList.add('is-'+level);
    out.textContent = msg;
  }

  form.addEventListener('change', grade);
  grade();
})();