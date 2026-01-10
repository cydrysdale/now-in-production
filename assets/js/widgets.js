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
    { t: "Font Fact", b: "Comic Sans: Drawn in 1994 by Microsoft designer Vincent Connare after he saw Microsoft Bob’s speech bubbles set in Times New Roman. He sketched a friendlier UI font inspired by comic books—specifically The Dark Knight Returns and Watchmen. It missed Bob’s ship date but debuted in the Windows 95 Plus! Pack (and apps like 3D Movie Maker). Coincidentally, it's design was easier to read for those with dyslexia and inspired the creation of fonts like Dyslexie and OpenDyslexic." },
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
  if (!sample || !fontSel) return;

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
  const slider = document.getElementById('era');
  const box = document.getElementById('eraDesc');
  if (!slider || !box) return;

  const data = [
    { h: "Movable type: letters as hardware",
      b: "With Gutenberg’s system, a “font” was boxes of metal sorts cast from punches and matrices. Printers bought complete sets and stored them like tools, so ownership and inventory were literal, physical, and easy to account for." },  
    { h: "Foundries as capital businesses",
      b: "Foundries financed punches, matrices, alloys, presses, and skilled labor to manufacture letters. The result was a product economy—shops bought, rented, or borrowed metal, and duplication demanded re-cutting, electrotyping, or recasting." },  
    { h: "Design patents recognize ornament (1842)",
      b: "When U.S. design patents began in 1842, George Bruce was awarded the first one, Design Patent D1, which covered a typeface. It formally treated letterforms as protectable industrial design, even as everyday protection still came from the cost and craft of making metal type." },  
    { h: "Scarcity as de facto protection",
      b: "Copying the metal type of rivals wasn’t drag-and-drop; it was slow, specialized, and expensive. That alone prevented a lot of casual imitation and functioned like a practical barrier long before modern licensing and software rights existed." },
    { h: "From scarcity to reproducibility",
      b: "By the late 19th–early 20th centuries, ATF, Linotype, and Monotype scaled production with hot-metal systems and matrix libraries. Distribution became routine via service contracts, yet type stayed tied to molds and machines until phototype loosened the bond." },
    { h: "Phototypesetting loosens the bond",
      b: "In the mid-20th century, Phototype replaced metal with glass, film, and light. Letters could be scaled and composited without recasting, shifting work from foundry benches to darkrooms and making reproduction faster—even as the workflow stayed physically hands-on." },
    { h: "Type becomes software",
      b: "By the 1980s, type became software. Influenced by calligraphy at Reed College, Steve Jobs pushed the original Macintosh to ship with multiple digital fonts named after cities—Chicago, Geneva, Monaco, New York—and fonts quickly became part of the product’s and users' personalities (see <strong>Comic Sans</strong>)." }, 
    { h: "Desktop publishing revolution",
      b: "As home computers became commonplace, anyone with a Mac, a LaserWriter printer, and Aldus PageMaker could design with professional typography at home or in a small office. Fonts weren’t the guarded property of print shops anymore." },
    { h: "Bundled files change behavior",
      b: "Once fonts lived as files, they traveled with disks and machines. Teams installed, shared, and sometimes copied them casually; what had been guarded shop assets became everyday UI choices—powerful, portable, and easy to overshare if you ignored the license." }
  ]  
  ;
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
