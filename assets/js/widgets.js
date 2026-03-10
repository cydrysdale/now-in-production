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
    { t: "History", b: "In 1842, the first U.S. design patent—D1, to type founder George Bruce—covered a typeface, protecting appearance rather than function. It mattered little when copying metal type was slow and costly, but set the pattern: the U.S. may protect the look of letters via design patents, not broad copyright—so modern protection centers on the software font file and licensing." },
    { t: "Font Fact", b: "Arial: In the 1990s, Microsoft commissioned Robin Nicholas and Patricia Saunders at Monotype to design Arial as a “metrics-compatible” twin of Helvetica. Because the shapes themselves couldn’t be copyrighted, Microsoft could sell a Helvetica lookalike bundled with Windows—skirting licensing fees while keeping document layouts identical." },
    { t: "History", b: "Since 2002, the EU’s Community design regime has protected the visual appearance of products—including typographic typefaces—either as Registered Community Designs (renewable in 5-year blocks to a 25-year maximum) or as Unregistered Community Designs lasting 3 years from first disclosure; EUIPO guidance even sets specific filing representations for typefaces. The UK provides parallel design protection and includes typeface-specific provisions in the Copyright, Designs and Patents Act 1988 (e.g., ss. 54–55)." },
    { t: "Font Fact", b: "Comic Sans: Drawn in 1994 by Microsoft designer Vincent Connare after he saw Microsoft Bob’s speech bubbles set in Times New Roman. He sketched a friendlier UI font inspired by comic books—specifically The Dark Knight Returns and Watchmen. It missed Bob’s ship date but debuted in the Windows 95 Plus! Pack (and apps like 3D Movie Maker). Coincidentally, its design was easier to read for those with dyslexia and inspired the creation of fonts like Dyslexie and OpenDyslexic." },
    { t: "Font Fact", b: "Impact: Drawn in 1965 by Geoffrey Lee for tight newspaper columns and bold headlines, Impact uses heavy strokes and compressed letterforms to maximize presence in minimal space. Later bundled on millions of PCs, it became the default voice of internet memes—blocky uppercase with a high-contrast outline and still legible after being deep-fried from jpeg save degradation." },
    { t: "Font Fact", b: "Papyrus: Hand-drawn by Chris Costello in 1982 to evoke an imagined ancient script, Papyrus spread widely via lettering transfer sheets and later operating-system bundles. Its ubiquity made it instantly recognizable and a pop-culture lightning rod after the logo for the movie, Avatar, and an SNL sketch which turned the font into a meme." },
    { t: "Font Fact", b: "Helvetica: Released in 1957 as Neue Haas Grotesk (Max Miedinger with Eduard Hoffmann), the family was renamed Helvetica a few years later—Latin for “Swiss”—to ease international adoption. Its neutral, orderly voice suited transit systems and global brands, making it the archetype of modernist sans-serif typography for signage, corporate identity, and UI." },
    { t: "Font Fact", b: "Times New Roman: Commissioned in 1931 for The Times of London under Stanley Morison’s direction and drawn by Victor Lardent, it was engineered to print more readable text per line on inexpensive newsprint. That efficiency and formal tone explain why it still signals authority in books, journals, and academic defaults decades after its debut." },
    { t: "Font Fact", b: "Georgia: Created by Matthew Carter in 1993 for early, low-DPI screens—with Tom Rickner’s hinting—Georgia pairs a big x-height and sturdy serifs with warm curves to stay legible at small sizes. Shipped broadly on desktops and the web, it proved that “web-safe” could be both practical and personable for long-form reading." },
    { t: "Font Fact", b: "Verdana: Also by Matthew Carter (1996) for Microsoft, Verdana is a humanist sans tuned for tiny pixels—open counters, generous spacing, and distinct shapes for look-alikes like I/l/1. Expert hinting made it a UI staple of the dial-up era and a continuing model for screen legibility across operating systems." },
    { t: "Font Fact", b: "Trajan: Designed by Carol Twombly at Adobe in 1989 from the Roman capitals on Trajan’s Column, Trajan ships as an all-caps display face with monumental proportions. Its classical gravitas made it a natural for movie posters and book jackets—typography that needs to signal epic, timeless, and authoritative in a single headline." },
    { t: "Font Fact", b: "Cooper Black: Oswald Bruce Cooper’s 1922 design is the original “friendly loud”—a soft-edged, ultra-bold serif with pudding-thick curves and generous weight. It resurfaced in waves from 1960s album art to modern packaging, where its cheerful heft delivers warmth, nostalgia, and readable impact at a glance." },
    { t: "Font Fact", b: "Gotham: Tobias Frere-Jones distilled mid-century New York signage into Gotham (2000), a geometric yet approachable sans drawn from real city lettering. It leapt from magazine commissions into mainstream culture via the Obama 2008 campaign and corporate branding, becoming shorthand for clean, contemporary American optimism." },
    { t: "Font Fact", b: "Calibri: Designed by Lucas de Groot as part of Microsoft’s ClearType collection, Calibri replaced Times New Roman as the Office default in 2007, nudging billions of documents toward a friendlier sans. In 2023 Microsoft moved the default to Aptos, but Calibri’s rounded geometry still defines an era of everyday digital typography." }
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
    // Optional widget; may not be present in this build
    if (typeof initLicenseEstimator === "function") initLicenseEstimator(root);
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
  const resetBtn = lab.querySelector('.feature-lab__reset');
  if (!sample || !fontSel) return;

  // Axis ranges and OpenType features each family actually exposes.
  // Ranges must match the axes requested in the Google Fonts CSS2 URL.
  const SUPPORT = {
    "roboto":        { axes:{wght:[100,900]                                            }, feats:['kern','liga','calt','ss01','smcp'] },
    "roboto-flex":   { axes:{wght:[100,1000], wdth:[75,125], opsz:[8,144], slnt:[-10,0]}, feats:['kern','liga','calt','tnum','zero'] },
    "roboto-slab":   { axes:{wght:[100,900]                                            }, feats:['kern','liga','calt','smcp','onum'] },
    "roboto-serif":  { axes:{wght:[100,900],  wdth:[75,125], opsz:[8,144]              }, feats:['kern','liga','calt','smcp','onum','tnum','zero'] },
    "source-serif":  { axes:{wght:[200,900],                  opsz:[8,60]              }, feats:['kern','liga','calt','smcp','onum','tnum','zero'] },
    "spectral":      { axes:{wght:[200,800]                                            }, feats:['kern','liga','calt','smcp','onum','tnum','zero'] },
    "recursive":     { axes:{wght:[300,1000],                              slnt:[-15,0]}, feats:['kern','liga','calt','ss01','zero'] },
    "fraunces":      { axes:{wght:[100,900],                  opsz:[9,144]             }, feats:['kern','liga','calt','ss01','onum','tnum'] },
    "inter":         { axes:{wght:[100,900],                  opsz:[14,32]             }, feats:['kern','liga','calt','tnum','zero'] }
  };

  const DEFAULTS = { wght:'400', wdth:'100', opsz:'14', slnt:'0' };
  const DEFAULT_FONT = 'roboto-flex';

  // Keep a flag so opsz slider can disable auto optical sizing
  let manualOpsz = false;

  function updateReadouts(){
    sliders.forEach(s => {
      const out = s.parentElement.querySelector('output');
      if (out) out.textContent = s.value;
    });
  }

  function updateFeatures(){
    // Non-numeric features go through font-feature-settings
    const featureNames = ['kern','liga','calt','smcp','ss01'];
    // Numeric features go exclusively through font-variant-numeric
    // to avoid conflicts when both properties target the same OT feature
    const numericMap = { onum:'oldstyle-nums', tnum:'tabular-nums', zero:'slashed-zero' };

    const active = [];
    const numeric = [];

    featureNames.forEach(n => {
      const box = lab.querySelector('[data-feature="'+n+'"]');
      if (!box || box.disabled) return;
      active.push('"' + n + '" ' + (box.checked ? 1 : 0));
    });

    Object.keys(numericMap).forEach(n => {
      const box = lab.querySelector('[data-feature="'+n+'"]');
      if (!box || box.disabled || !box.checked) return;
      numeric.push(numericMap[n]);
    });

    sample.style.fontFeatureSettings = active.length ? active.join(', ') : 'normal';
    sample.style.fontVariantNumeric  = numeric.length ? numeric.join(' ') : 'normal';
  }

  function updateAxes(){
    const axes = [];
    let slntVal = null;

    sliders.forEach(s => {
      if (s.disabled) return;
      const tag = s.dataset.axis;
      const val = s.value;

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
      if (!ok) box.checked = false;
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

    updateReadouts();
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
  sliders.forEach(s => s.addEventListener('input', () => {
    if (s.dataset.axis === 'opsz') manualOpsz = true; // user took explicit opsz control
    const out = s.parentElement.querySelector('output');
    if (out) out.textContent = s.value;
    updateAxes();
  }));
  if (fontSel) fontSel.addEventListener('change', e => applyFont(e.target.value));

  // Reset button — restore all controls to defaults
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      fontSel.value = DEFAULT_FONT;
      sliders.forEach(s => { s.value = DEFAULTS[s.dataset.axis] || s.min; });
      boxes.forEach(b => {
        const f = b.dataset.feature;
        b.checked = (f === 'kern' || f === 'liga' || f === 'calt');
      });
      applyFont(DEFAULT_FONT);
    });
  }

  // Initial paint
  applyFont(fontSel ? fontSel.value : DEFAULT_FONT);
})();

(function(){
  const slider = document.getElementById('era');
  const box = document.getElementById('eraDesc');
  if (!slider || !box) return;

  const data = [
    { h: "Marks in clay: writing begins (~3100 BCE)",
      b: "In Mesopotamia, scribes pressed reed styluses into wet clay to create cuneiform—wedge-shaped marks for trade, law, and literature. In China, woodblock printing (7th century CE) carved full pages for reuse. These weren’t fonts, but they were the first repeatable writing systems. The scribes who mastered them held power: literacy itself was a controlled technology." },
    { h: "Movable type: letters as hardware (15th c.)",
      b: "With Gutenberg’s system, a \u201cfont\u201d was boxes of metal sorts cast from punches and matrices. Printers bought complete sets and stored them like tools, so ownership and inventory were literal, physical, and easy to account for." },
    { h: "Foundries as capital businesses",
      b: "Foundries financed punches, matrices, alloys, presses, and skilled labor to manufacture letters. The result was a product economy\u2014shops bought, rented, or borrowed metal, and duplication demanded re-cutting, electrotyping, or recasting." },
    { h: "Design patents recognize ornament (1842)",
      b: "When U.S. design patents began in 1842, George Bruce was awarded the first one, Design Patent D1, which covered a typeface. It formally treated letterforms as protectable industrial design, even as everyday protection still came from the cost and craft of making metal type." },
    { h: "Scarcity as de facto protection",
      b: "Copying the metal type of rivals wasn\u2019t drag-and-drop; it was slow, specialized, and expensive. That alone prevented a lot of casual imitation and functioned like a practical barrier long before modern licensing and software rights existed." },
    { h: "From scarcity to reproducibility",
      b: "By the late 19th\u2013early 20th centuries, ATF, Linotype, and Monotype scaled production with hot-metal systems and matrix libraries. Distribution became routine via service contracts, yet type stayed tied to molds and machines until phototype loosened the bond." },
    { h: "Phototypesetting loosens the bond",
      b: "In the mid-20th century, phototype replaced metal with glass, film, and light. Letters could be scaled and composited without recasting, shifting work from foundry benches to darkrooms and making reproduction faster\u2014even as the workflow stayed physically hands-on." },
    { h: "Type becomes software (1980s)",
      b: "By the 1980s, type became software. Influenced by calligraphy at Reed College, Steve Jobs pushed the original Macintosh to ship with multiple digital fonts named after cities\u2014Chicago, Geneva, Monaco, New York\u2014and fonts quickly became part of the product\u2019s and users\u2019 personalities." },
    { h: "Desktop publishing revolution",
      b: "As home computers became commonplace, anyone with a Mac, a LaserWriter printer, and Aldus PageMaker could design with professional typography at home or in a small office. Fonts weren\u2019t the guarded property of print shops anymore\u2014they were files on a floppy disk, easy to copy and share." }
  ];
  function render(){
    const d = data[+slider.value];
    if (!d) return;
    box.innerHTML = `<div class="card"><strong>${d.h}</strong><p>${d.b}</p></div>`;
  }
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
    const stackSel = stackCard.querySelector('.stack-input');
    const level   = stackCard.querySelector('.stack-level');
    const sample  = stackCard.querySelector('.stack-sample');
    const out     = stackCard.querySelector('.stack-out');

    const PRESETS = [
      { label: 'Sans \u2014 Roboto Flex \u2192 Inter \u2192 system-ui',        stack: ["'Roboto Flex'","'Inter'","system-ui","sans-serif"] },
      { label: 'Serif \u2014 Source Serif 4 \u2192 Spectral \u2192 Georgia',   stack: ["'Source Serif 4'","Spectral","Georgia","serif"] },
      { label: 'Slab \u2014 Roboto Slab \u2192 Roboto Serif \u2192 Georgia',   stack: ["'Roboto Slab'","'Roboto Serif'","Georgia","serif"] },
      { label: 'Display \u2014 Fraunces \u2192 Source Serif 4 \u2192 Georgia', stack: ["Fraunces","'Source Serif 4'","Georgia","serif"] },
      { label: 'Mono \u2014 VT323 \u2192 Courier New',                         stack: ["VT323","'Courier New'","monospace"] },
      { label: 'Mixed \u2014 Inter \u2192 Source Serif 4 \u2192 Georgia',      stack: ["'Inter'","'Source Serif 4'","Georgia","serif"] }
    ];

    const clean = s => s.replace(/^['"]|['"]$/g, '');

    // Populate stack presets
    PRESETS.forEach((p, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = p.label;
      stackSel.appendChild(opt);
    });

    function buildLevels(){
      const stack = PRESETS[+stackSel.value].stack;
      const prev = +level.value || 0;
      level.innerHTML = '';
      stack.forEach((font, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = (i === 0 ? 'Primary' : 'Fallback ' + i) + ' \u2014 ' + clean(font);
        level.appendChild(opt);
      });
      level.value = Math.min(prev, stack.length - 1);
    }

    function showLevel(){
      const stack = PRESETS[+stackSel.value].stack;
      const idx = +level.value;
      // Show only from the selected level onward for accurate fallback simulation
      sample.style.fontFamily = stack.slice(idx).join(', ');
      out.textContent = 'Showing level ' + idx + ': ' + clean(stack[idx]);
    }

    stackSel.addEventListener('change', () => { buildLevels(); showLevel(); });
    level.addEventListener('change', showLevel);
    buildLevels();
    showLevel();
  }

  // --- B) Contrast Checker (WCAG) ---
  const cc = document.querySelector('.tool-contrast');
  if (cc) {
    const t  = cc.querySelector('.cc-text');
    const b  = cc.querySelector('.cc-bg');
    const tp = cc.querySelector('.cc-text-picker');
    const bp = cc.querySelector('.cc-bg-picker');
    const swapBtn = cc.querySelector('.cc-swap');
    const s  = cc.querySelector('.cc-size');
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

    function syncPickers(){
      if (tp && /^#[0-9a-f]{6}$/i.test(t.value)) tp.value = t.value;
      if (bp && /^#[0-9a-f]{6}$/i.test(b.value)) bp.value = b.value;
    }

    function paint(){
      const tc = t.value, bc = b.value;
      const r = ratio(tc, bc);
      sample.style.color = tc;
      sample.style.background = bc;
      out.classList.remove('cc-pass','cc-warn','cc-fail');
      if (!r){ out.textContent = 'Ratio: \u2014 (enter valid hex, e.g. #1b1b1b)'; return; }
      const r2 = Math.round(r*100)/100;
      const large = (s.value==='large');
      const passAA  = r >= (large ? 3 : 4.5);
      const passAAA = r >= (large ? 4.5 : 7);
      out.textContent = `Ratio: ${r2}:1  \u2014  AA ${passAA?'\u2713':'\u2715'}  \u2022  AAA ${passAAA?'\u2713':'\u2715'}  (${large?'Large text':'Normal text'})`;
      out.classList.add(passAAA ? 'cc-pass' : passAA ? 'cc-warn' : 'cc-fail');
    }

    // Text inputs
    [t, b].forEach(el => el.addEventListener('input', () => { syncPickers(); paint(); }));
    s.addEventListener('input', paint);

    // Color pickers
    if (tp) tp.addEventListener('input', () => { t.value = tp.value; paint(); });
    if (bp) bp.addEventListener('input', () => { b.value = bp.value; paint(); });

    // Swap button
    if (swapBtn) {
      swapBtn.addEventListener('click', () => {
        const tmp = t.value;
        t.value = b.value;
        b.value = tmp;
        syncPickers();
        paint();
      });
    }

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
    else if (vals.some(v => warn.has(v))) { level='warn'; msg='Needs review—usage may exceed your terms (installs, page views, conversions).'; }
    else if (vals.length === 0)           { level='';    msg='Select options to see guidance.'; }
    else if (vals.every(v => okish.has(v))) { level='ok'; msg='Generally acceptable patterns — still verify license specifics.'; }

    out.classList.remove('is-ok','is-warn','is-risk');
    if (level) out.classList.add('is-'+level);
    out.textContent = msg;
  }

  form.addEventListener('change', grade);
  grade();
})();

// ---------- Type Classification Quiz ----------
(function(){
  const sample = document.getElementById('classQuizSample');
  const result = document.getElementById('classQuizResult');
  const nextBtn = document.getElementById('classQuizNext');
  if (!sample || !result || !nextBtn) return;

  const questions = [
    { family: "'Source Serif 4', Georgia, serif", text: "Handgloves 0123", answer: "serif", explain: "Source Serif 4 has finishing strokes (serifs) at the ends of its stems \u2014 a classic serif face." },
    { family: "'Inter', system-ui, sans-serif", text: "Handgloves 0123", answer: "sans-serif", explain: "Inter has no serifs \u2014 clean, open terminals make it a humanist sans-serif." },
    { family: "'Roboto Slab', Georgia, serif", text: "Handgloves 0123", answer: "slab", explain: "Roboto Slab has thick, block-like serifs with low stroke contrast \u2014 a slab serif (also called Egyptian)." },
    { family: "'Fraunces', Georgia, serif", text: "Handgloves 0123", answer: "serif", explain: "Fraunces is a soft serif with high contrast and distinctive ball terminals \u2014 firmly in the serif family." },
    { family: "Recursive, system-ui, sans-serif", text: "Handgloves 0123", answer: "sans-serif", explain: "Recursive is a sans-serif with a single-story \u2018a\u2019 and warm, slightly quirky proportions." },
    { family: "'Fredericka the Great', serif", text: "Handgloves", answer: "display", explain: "Fredericka the Great is a decorative display face with hand-drawn texture \u2014 designed for headlines, not body text." },
    { family: "'VT323', monospace", text: "Handgloves 0123", answer: "monospace", explain: "VT323 is a monospace font \u2014 every character occupies the same horizontal width, like a terminal screen." },
    { family: "Spectral, Georgia, serif", text: "Handgloves 0123", answer: "serif", explain: "Spectral has refined serifs and moderate contrast \u2014 a transitional serif designed for screen reading." }
  ];

  let current = null;
  let answered = false;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  let deck = shuffle(questions);
  let idx = 0;

  function loadQuestion() {
    if (idx >= deck.length) { deck = shuffle(questions); idx = 0; }
    current = deck[idx++];
    answered = false;
    sample.style.fontFamily = current.family;
    sample.textContent = current.text;
    result.textContent = '';
    result.style.color = '';
    // Clear radio selection
    document.querySelectorAll('input[name="classQ"]').forEach(r => { r.checked = false; });
  }

  // Listen for radio changes
  document.querySelectorAll('input[name="classQ"]').forEach(radio => {
    radio.addEventListener('change', function() {
      if (answered || !current) return;
      answered = true;
      if (this.value === current.answer) {
        result.textContent = '\u2705 Correct! ' + current.explain;
        result.style.color = '#166534';
      } else {
        result.textContent = '\u274c Not quite. ' + current.explain;
        result.style.color = '#991b1b';
      }
    });
  });

  nextBtn.addEventListener('click', loadQuestion);
  loadQuestion();
})();

// ---------- Type Anatomy Explorer ----------
(function(){
  const svg = document.getElementById('anatomySvg');
  const desc = document.getElementById('anatomyDesc');
  if (!svg || !desc) return;

  const parts = {
    stem: '<strong>Stem</strong> \u2014 The main vertical stroke of a letter. It\u2019s the backbone: the thick, structural line that gives letters like R, B, and d their height and posture.',
    bowl: '<strong>Bowl</strong> \u2014 The curved stroke that creates an enclosed or partially enclosed space. Think of the round parts of B, D, P, and R. The bowl\u2019s shape defines much of a typeface\u2019s personality.',
    counter: '<strong>Counter</strong> \u2014 The enclosed (or partially enclosed) space within a letter. The hole inside an \u2018o\u2019 or \u2018p\u2019. Open counters aid legibility; tight counters create density.',
    leg: '<strong>Leg</strong> \u2014 A short, downward stroke extending from the body of the letter, like the diagonal in R or K. It gives the letter its stance.',
    serif: '<strong>Serif</strong> \u2014 The small finishing strokes at the ends of a letter\u2019s stems. Serifs guide the eye along a line of text and are the defining feature that separates serif from sans-serif typefaces.',
    'x-height': '<strong>x-height</strong> \u2014 The height of lowercase letters (measured by the letter \u2018x\u2019, which has no ascenders or descenders). A generous x-height improves readability at small sizes.',
    descender: '<strong>Descender</strong> \u2014 The part of a lowercase letter that drops below the baseline, as in p, g, q, and y. Descender length affects line spacing and the overall texture of a paragraph.',
    aperture: '<strong>Aperture</strong> \u2014 The opening in a partially enclosed counter, as in c, e, or s. Wide apertures increase legibility; narrow ones create a more closed, formal feel.'
  };

  svg.querySelectorAll('.anatomy-label').forEach(g => {
    const part = g.dataset.part || 'part';
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'button');
    g.setAttribute('aria-label', `Highlight ${part}`);

    g.addEventListener('click', function() {
      const clickedPart = this.dataset.part;
      if (parts[clickedPart]) {
        desc.innerHTML = parts[clickedPart];
      }
      // Highlight: dim others, brighten clicked
      svg.querySelectorAll('.anatomy-label').forEach(other => {
        other.style.opacity = other === g ? '1' : '0.35';
      });
    });

    g.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'Spacebar') return;
      event.preventDefault();
      g.click();
    });
  });

  // Reset on clicking outside labels
  svg.addEventListener('click', function(e) {
    if (!e.target.closest('.anatomy-label')) {
      svg.querySelectorAll('.anatomy-label').forEach(g => { g.style.opacity = '1'; });
      desc.innerHTML = '<em>Click a label above to learn about that part of the letterform.</em>';
    }
  });
})();

// ---------- Pairing Sandbox ----------
(function(){
  const hSel = document.getElementById('pairHeading');
  const bSel = document.getElementById('pairBody');
  const hWght = document.getElementById('pairHeadingWght');
  const bWght = document.getElementById('pairBodyWght');
  const hPreview = document.getElementById('pairingH');
  const bPreview = document.getElementById('pairingB');
  if (!hSel || !bSel || !hPreview || !bPreview) return;

  function update() {
    hPreview.style.fontFamily = hSel.value;
    hPreview.style.fontWeight = hWght ? hWght.value : '700';
    bPreview.style.fontFamily = bSel.value;
    bPreview.style.fontWeight = bWght ? bWght.value : '400';
  }

  hSel.addEventListener('change', update);
  bSel.addEventListener('change', update);
  if (hWght) hWght.addEventListener('input', update);
  if (bWght) bWght.addEventListener('input', update);
  update();
})();
