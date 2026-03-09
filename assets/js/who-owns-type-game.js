/*!
 * Freelance Font Pack — optional game overlay for "Who Owns the Alphabet"
 * No deps. No-ops if #caseFile is absent. localStorage for persistence.
 */
(function () {
  'use strict';

  /* ── guard ── */
  if (!document.getElementById('caseFile')) return;

  /* ── DOM helpers ── */
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  /* ── seeded RNG (mulberry32) ── */
  function mulberry32(s) {
    return () => {
      s |= 0; s = (s + 0x6d2b79f5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffle(a, rng) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor((rng ? rng() : Math.random()) * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ── constants ── */
  const LS = 'cd-font-pack';
  const CHANNELS = ['desktop', 'web', 'app', 'server', 'broadcast'];
  const CH_LABEL = {
    desktop: 'Desktop', web: 'Web', app: 'App/eBook',
    server: 'Server', broadcast: 'Broadcast', vendors: 'Vendors'
  };
  const REGIONS = ['US', 'EU', 'UK', 'Global'];
  const FONTS = [
    'Roboto Serif', 'Inter', 'Source Serif 4', 'Fraunces',
    'Roboto Flex', 'Spectral', 'Recursive', 'Roboto Slab'
  ];
  const SECTIONS = [
    'the-letters-before-us',
    'letters-as-objects',
    'the-foundry-age',
    'letters-as-software',
    'who-controls-type',
    'rules-of-the-game',
    'future-of-letters'
  ];

  /* ── change order decks ── */
  const CO_DECKS = {
    'the-letters-before-us': [
      { type: 'helpful', text: 'A colleague shared their font subscription login — head start on research.', fx: null },
      { type: 'helpful', text: 'The client provided a clear brand brief with font preferences listed. Less guesswork.', fx: null },
      { type: 'complication', text: 'The client wants a "unique" font but has zero budget for licensing.', fx: null },
      { type: 'complication', text: 'The deadline just moved up by two weeks. No time for extended trials.', fx: null },
      { type: 'helpful', text: 'You found a comprehensive type specimen archive — faster shortlisting.', fx: null },
      { type: 'complication', text: 'The client\'s existing brand uses a font that\'s been discontinued. Replacement needed.', fx: null }
    ],
    'letters-as-objects': [
      { type: 'helpful', text: 'A senior designer already has a desktop license for one of your shortlist fonts — one fewer seat to buy.', fx: null },
      { type: 'helpful', text: 'You inherited specimen sheets from a retired designer — free reference material.', fx: null },
      { type: 'complication', text: 'The client wants "that classic Garamond feel" but three foundries cut it differently. Extra research needed.', fx: null },
      { type: 'complication', text: 'Your primary font\'s free trial just expired. Remove your Desktop pass if you had one.', fx: { revokePass: 'desktop' } },
      { type: 'helpful', text: 'A type history blog post confirmed your era research — confidence boost on the shortlist.', fx: null },
      { type: 'complication', text: 'Your shortlist font has no italic cut. You need a companion or alternative.', fx: null },
      { type: 'complication', text: 'The client insists on a "Gutenberg-style" font. Nothing matches; manage expectations.', fx: null }
    ],
    'the-foundry-age': [
      { type: 'helpful', text: 'The agency already licensed a web tier — you inherit web coverage.', fx: { grantPass: 'web' } },
      { type: 'helpful', text: 'Legal agreed to review your EULA before launch. One less task.', fx: null },
      { type: 'complication', text: 'The foundry was acquired; new parent changed EULA terms. Re-verify everything.', fx: null },
      { type: 'complication', text: 'Your web pass expired when the aggregator subscription lapsed. Lose your Web pass.', fx: { revokePass: 'web' } },
      { type: 'helpful', text: 'The foundry offers a 30-day free trial — you can test before committing.', fx: null },
      { type: 'complication', text: 'Two shortlist fonts are from the same foundry but on different license tiers. Confusing paperwork ahead.', fx: null },
      { type: 'helpful', text: 'A designer friend recommends a lesser-known foundry with better terms and similar quality.', fx: null }
    ],
    'letters-as-software': [
      { type: 'complication', text: 'Scope creep! The client now wants an app embed. "App" added to your required channels.', fx: { addChannel: 'app' } },
      { type: 'complication', text: 'Traffic projections doubled. If web is required, your tier just went from low to high.', fx: { upgradeTraffic: true } },
      { type: 'helpful', text: 'One shortlist font is SIL OFL — no per-seat desktop cost. Free Desktop pass.', fx: { grantPass: 'desktop' } },
      { type: 'helpful', text: 'The client\'s developer already set up proper @font-face with WOFF2. Web delivery is handled.', fx: { grantPass: 'web' } },
      { type: 'helpful', text: 'Your shortlist font ships with a pre-built WOFF2 subset — lighter web delivery, no extra tooling.', fx: null },
      { type: 'complication', text: 'The client\'s CMS strips @font-face declarations on deploy. You need a workaround.', fx: null },
      { type: 'complication', text: 'Your shortlist font\'s variable version has a different EULA than its static weights. Double-check scope.', fx: null }
    ],
    'who-controls-type': [
      { type: 'helpful', text: 'The indie foundry offers a "brand pack" covering desktop + web + app. Free App pass.', fx: { grantPass: 'app' } },
      { type: 'complication', text: 'The previous agency shared font files with vendors who have no licenses. Vendors now required.', fx: { requireVendors: true } },
      { type: 'complication', text: 'The aggregator subscription lapsed 6 months ago. Lose your Server pass if you had one.', fx: { revokePass: 'server' } },
      { type: 'helpful', text: 'Your Google Fonts pick covers all channels under OFL. Free Server pass.', fx: { grantPass: 'server' } },
      { type: 'helpful', text: 'The client already uses a font management tool with license tracking built in. Easier audit trail.', fx: null },
      { type: 'complication', text: 'The indie foundry you picked just got acquired. New owner, new terms — re-verify your EULA.', fx: null },
      { type: 'helpful', text: 'Your shortlist OFL font has excellent multi-script coverage. One less worry for the global rollout.', fx: null }
    ],
    'rules-of-the-game': [
      { type: 'complication', text: 'The broadcast team needs the font for a TV campaign. "Broadcast" added to your channels.', fx: { addChannel: 'broadcast' } },
      { type: 'helpful', text: 'You discover the client holds a forgotten server-render license. Free Server pass.', fx: { grantPass: 'server' } },
      { type: 'complication', text: 'A compliance letter arrived — they detected unlicensed web usage. Lose your Web pass.', fx: { revokePass: 'web' } },
      { type: 'helpful', text: 'The client\'s legal team already has a font management policy. Your job just got easier.', fx: null },
      { type: 'helpful', text: 'Legal has a font licensing template ready — saves a week of review.', fx: null },
      { type: 'complication', text: 'The client operates in the EU. Registered design protection adds a wrinkle to your plan.', fx: null },
      { type: 'complication', text: 'A vendor claims they have rights to share fonts but can\'t produce any paperwork. Freeze sharing.', fx: null }
    ],
    'future-of-letters': [
      { type: 'helpful', text: 'Your primary font is variable — one file covers all weights. Performance win and simpler licensing.', fx: null },
      { type: 'complication', text: 'The client wants CJK support added. Licensing costs and file sizes just ballooned.', fx: null },
      { type: 'helpful', text: 'The open-source community just released a quality variable serif that fits your brief perfectly.', fx: { grantPass: 'desktop' } },
      { type: 'complication', text: 'The client\'s brand refresh now needs to support 12 writing systems. Massive scope change.', fx: null },
      { type: 'helpful', text: 'Variable font tech means fewer files to license and manage. Your brief just got simpler.', fx: null },
      { type: 'complication', text: 'The font you chose doesn\'t have a variable version. You\'re stuck with six static weight files.', fx: null }
    ]
  };

  /* ── deed data ── */
  const DEEDS = {
    'the-letters-before-us': {
      takeaways: [
        'Ownership is the through-line: craftspeople → corporations → code → contracts.',
        'The game is a learning overlay: deeds (knowledge), passes (channel rights), receipts (paper trail).',
        'Winning means shipping without surprises: match channels to rights, keep the paperwork.'
      ],
      q: 'In this case file, what does a Railroad Pass represent?',
      opts: [
        { id: 'a', text: 'A design trend you should follow', correct: false },
        { id: 'b', text: 'The right to use a font in a specific channel (web/app/server/etc.)', correct: true },
        { id: 'c', text: 'Proof you drew the letterforms yourself', correct: false }
      ],
      why: 'Licenses scope fonts by channel. The “pass” metaphor is your reminder to map each real use (desktop/web/app/server/broadcast) to an explicit right.'
    },
    'letters-as-objects': {
      takeaways: [
        'Before licensing, the cost of making type was its own protection.',
        'A "font" was a physical set of metal sorts — ownership meant owning metal.',
        'The first U.S. design patent (D1, 1842) was for a typeface.'
      ],
      q: 'A rival printer in 1480 wants your typeface. What stops them?',
      opts: [
        { id: 'a', text: 'Copyright law', correct: false },
        { id: 'b', text: 'They\'d need to re-cut steel punches — years of work', correct: true },
        { id: 'c', text: 'Royal decree forbids copying fonts', correct: false }
      ],
      why: 'Before modern IP law, the cost and skill of cutting steel punches was the primary barrier. Copyright for typeface designs still doesn\'t exist in most places.'
    },
    'the-foundry-age': {
      takeaways: [
        'Foundries became ecosystems — your foundry relationship defined your access.',
        'Different foundries\' cuts of the "same" typeface differ in metrics and feel.',
        'Classification systems gave designers a shared vocabulary for choosing type.'
      ],
      q: 'Client says "use Garamond." What do you confirm first?',
      opts: [
        { id: 'a', text: 'Which foundry\'s cut — they have different metrics', correct: true },
        { id: 'b', text: 'Whether Garamond is still under patent', correct: false },
        { id: 'c', text: 'Whether Garamond works on Macs', correct: false }
      ],
      why: '"Garamond" from Adobe, Monotype, and others are all different designs with different metrics. Confirm the foundry and file version.'
    },
    'letters-as-software': {
      takeaways: [
        'In the U.S., typeface shapes aren\'t copyrightable, but the font file is.',
        'Someone can legally redraw Helvetica, but copying the .otf is infringement.',
        'Licenses fill the gap between shapes and software.'
      ],
      q: 'Your dev copies a competitor\'s .otf and renames it. Legal?',
      opts: [
        { id: 'a', text: 'Yes — the name change makes it new', correct: false },
        { id: 'b', text: 'No — the file is protected software regardless of filename', correct: true },
        { id: 'c', text: 'Only if the shapes are public domain', correct: false }
      ],
      why: 'Renaming doesn\'t relicense. Font files are software — copying is infringement even when the letter shapes aren\'t copyrightable.'
    },
    'who-controls-type': {
      takeaways: [
        'Source (indie, aggregator, OFL) affects terms, support, and future-proofing.',
        'Even OFL fonts have rules — attribution, reserved names, modification docs.',
        'Budget for type like imagery — plan a core set plus project-specific.'
      ],
      q: 'You\'re using an OFL font. What\'s still required?',
      opts: [
        { id: 'a', text: 'Pay the designer a royalty', correct: false },
        { id: 'b', text: 'Keep the OFL license text bundled when you redistribute', correct: true },
        { id: 'c', text: 'Get written permission from Google', correct: false }
      ],
      why: '"Open" isn\'t ungoverned. OFL requires bundling the license, respecting reserved names, and documenting modifications.'
    },
    'rules-of-the-game': {
      takeaways: [
        'Licenses define what you can do per channel, where, and at what scale.',
        'Jurisdiction matters — U.S., EU, and UK protect type differently.',
        'When inheriting a brand, verify the rights you actually hold.'
      ],
      q: 'Your site exceeds the font\'s 250K page-view web license. What happens?',
      opts: [
        { id: 'a', text: 'Nothing — web fonts are free once cached', correct: false },
        { id: 'b', text: 'You\'re out of scope — true-up to a higher tier', correct: true },
        { id: 'c', text: 'The font stops rendering automatically', correct: false }
      ],
      why: 'Web licenses are tiered by page views. Exceeding your tier means you\'re out of compliance. The font still renders, but you\'re unlicensed.'
    }
  };

  /* ── pass scenarios ── */
  const PASS_SCENARIOS = [
    { scenario: 'Install the font on five Macs for InDesign work.', answer: 'desktop', why: 'Installing on machines = Desktop license.' },
    { scenario: 'Serve the font via @font-face in CSS for site visitors.', answer: 'web', why: 'Serving through CSS = Web license, tied to domains and page views.' },
    { scenario: 'Package the font inside an iOS app bundle.', answer: 'app', why: 'Embedding in a distributed app = App/Embed license.' },
    { scenario: 'Backend renders social-share OG images using the font.', answer: 'server', why: 'Server-side rendering = Server license.' },
    { scenario: 'Marketing uses the font in a TV commercial and YouTube pre-roll.', answer: 'broadcast', why: 'Video for TV/streaming = Broadcast license.' }
  ];

  /* ── ridiculous costs ── */
  const COSTS = [
    '$42,069.00', '$99,999.99', '$1,337,420.00', '$867,530.90',
    '$314,159.27', '$777,777.77', '$500,000.01', '$69,420.00'
  ];

  /* ── 5-rule cheat sheet ── */
  const CHEAT_SHEET = [
    'Verify rights by channel before shipping — desktop, web, app, server, broadcast are separate.',
    'Confirm the foundry and file version, not just the typeface name.',
    'Keep invoices/EULAs with the project — treat fonts like any dependency.',
    'Rename doesn\'t relicense — copying a font file is infringement regardless of filename.',
    'Budget for type like imagery — plan a core set and add project-specific licenses.'
  ];

  /* ═══════════════════════════════════════
     STATE
     ═══════════════════════════════════════ */
  let S;

  function blank() {
    return {
      active: false, seed: null, brief: null,
      collected: { deeds: {}, passes: {}, stamps: {} },
      receipts: { source: false, eula: false, renewals: false },
      complications: [], coDrawn: {}
    };
  }

  function load() {
    try {
      const r = JSON.parse(localStorage.getItem(LS));
      if (r && r.collected) { S = r; return; }
    } catch {}
    S = blank();
  }

  function save() {
    try { localStorage.setItem(LS, JSON.stringify(S)); } catch {}
  }

  function fullReset() {
    S = blank(); save(); renderAll();
  }

  /* ── brief generation ── */
  function rollBrief(seed) {
    const rng = mulberry32(seed);
    const ch = shuffle(CHANNELS, rng);
    const count = 3 + Math.floor(rng() * 3);
    const channels = ch.slice(0, Math.min(count, 5));
    if (!channels.includes('desktop') && !channels.includes('web'))
      channels[0] = rng() > 0.5 ? 'desktop' : 'web';
    return {
      channels,
      vendors: rng() > 0.4,
      region: REGIONS[Math.floor(rng() * REGIONS.length)],
      traffic: channels.includes('web') ? (rng() > 0.5 ? 'high' : 'low') : null,
      deadline: rng() > 0.6 ? 'rushed' : 'normal',
      shortlist: shuffle(FONTS, rng).slice(0, 2 + Math.floor(rng() * 2))
    };
  }

  /* ── apply change order effect ── */
  function applyEffect(fx) {
    if (!fx || !S.brief) return;
    if (fx.grantPass) S.collected.passes[fx.grantPass] = true;
    if (fx.revokePass) delete S.collected.passes[fx.revokePass];
    if (fx.addChannel && !S.brief.channels.includes(fx.addChannel))
      S.brief.channels.push(fx.addChannel);
    if (fx.requireVendors) S.brief.vendors = true;
    if (fx.upgradeTraffic && S.brief.traffic) S.brief.traffic = 'high';
    save();
  }

  /* ── missing items ── */
  function missing() {
    if (!S.brief) return { channels: [], deeds: [], receipts: [], vendors: false };
    const m = { channels: [], deeds: [], receipts: [], vendors: false };
    S.brief.channels.forEach(ch => { if (!S.collected.passes[ch]) m.channels.push(ch); });
    Object.keys(DEEDS).forEach(d => { if (!S.collected.deeds[d]) m.deeds.push(d); });
    ['source', 'eula', 'renewals'].forEach(k => { if (!S.receipts[k]) m.receipts.push(k); });
    if (S.brief.vendors && !S.collected.passes.vendors) m.vendors = true;
    return m;
  }

  /* ═══════════════════════════════════════
     RENDER: Case File
     ═══════════════════════════════════════ */
  function renderCaseFile() {
    const root = document.getElementById('caseFile');
    if (!root) return;

    if (!S.active) {
      root.innerHTML =
        '<details class="chance" id="caseFileDetails">' +
          '<summary class="chance-summary">' +
            '<span class="chance-title">&#128188; Freelance Font Pack — Optional Case File Game</span>' +
          '</summary>' +
          '<div class="chance-content">' +
            '<p><strong>Want to play while you read?</strong> You\'re a freelance designer shipping a mini rebrand. Your job: source and use fonts compliantly across the channels the project needs.</p>' +
            '<p>Roll a brief to get random project constraints. As you read each section, collect <strong>Community Chest</strong> (knowledge), <strong>Passes</strong> (channel rights), and <strong>Receipts</strong> (paper trail). At the end, see if your Case File has everything — or get a (very expensive) invoice for what\'s missing.</p>' +
            '<p class="muted small">The guide works perfectly without the game. This is just a fun overlay.</p>' +
            '<button class="btn" type="button" id="rollBriefBtn">Roll the Brief</button>' +
          '</div>' +
        '</details>';
      $('#rollBriefBtn').addEventListener('click', startGame);
      return;
    }

    var b = S.brief;
    root.innerHTML =
      '<details class="chance" id="caseFileDetails" open>' +
        '<summary class="chance-summary">' +
          '<span class="chance-title">&#128188; Your Case File</span>' +
        '</summary>' +
        '<div class="chance-content case-file">' +
          '<div class="case-file__section">' +
            '<h4 style="margin:0 0 .5rem;">The Brief</h4>' +
            '<div class="case-file__chips" id="briefChips"></div>' +
            '<p class="muted small" style="margin:.5rem 0 0;">Shortlist: ' + b.shortlist.join(', ') + '</p>' +
          '</div>' +
          '<div class="case-file__section">' +
            '<h4 style="margin:.75rem 0 .5rem;">Collected Evidence</h4>' +
            '<div id="caseProgress"></div>' +
          '</div>' +
          '<div class="case-file__section" id="caseComplications" style="display:none;">' +
            '<h4 style="margin:.75rem 0 .5rem;">Complications</h4>' +
            '<ul id="complicationsList" class="small"></ul>' +
          '</div>' +
          '<div style="margin-top:.75rem; display:flex; gap:.5rem; flex-wrap:wrap;">' +
            '<button class="btn" type="button" id="rerollBtn" style="font-size:.85rem;">Reroll Brief</button>' +
            '<button class="btn" type="button" id="resetGameBtn" style="font-size:.85rem; opacity:.7;">Reset Game</button>' +
          '</div>' +
        '</div>' +
      '</details>';

    $('#rerollBtn').addEventListener('click', function () {
      S.seed = Date.now() ^ (Math.random() * 0xffffffff);
      S.brief = rollBrief(S.seed);
      S.collected = { deeds: {}, passes: {}, stamps: {} };
      S.receipts = { source: false, eula: false, renewals: false };
      S.complications = []; S.coDrawn = {};
      save(); renderAll();
    });

    $('#resetGameBtn').addEventListener('click', function () {
      if (confirm('Reset the game? You\'ll lose all collected artifacts.')) fullReset();
    });

    updateCaseFile();
  }

  function startGame() {
    var seedParam = new URLSearchParams(location.search).get('seed');
    S.active = true;
    S.seed = seedParam ? parseInt(seedParam, 10) : (Date.now() ^ (Math.random() * 0xffffffff));
    S.brief = rollBrief(S.seed);
    save(); renderAll(); hookStamps(); preselectShortlist();
  }

  /* ── preselect shortlist fonts in Pairing Sandbox ── */
  function preselectShortlist() {
    if (!S.active || !S.brief || !S.brief.shortlist.length) return;
    var headSel = document.getElementById('pairHeadFont');
    var bodySel = document.getElementById('pairBodyFont');
    function pickOption(sel, name) {
      if (!sel) return;
      var opts = sel.options;
      for (var i = 0; i < opts.length; i++) {
        if (opts[i].textContent.trim() === name) {
          sel.value = opts[i].value;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
          return;
        }
      }
    }
    if (headSel && S.brief.shortlist[0]) pickOption(headSel, S.brief.shortlist[0]);
    if (bodySel && S.brief.shortlist[1]) pickOption(bodySel, S.brief.shortlist[1]);
  }

  function updateCaseFile() {
    if (!S.active || !S.brief) return;

    var chips = $('#briefChips');
    if (chips) {
      var html = '';
      S.brief.channels.forEach(function (ch) {
        var met = !!S.collected.passes[ch];
        html += '<span class="brief-chip' + (met ? ' is-met' : '') + '">' + (met ? '&#10003; ' : '') + (CH_LABEL[ch] || ch) + '</span>';
      });
      if (S.brief.vendors) {
        var vmet = !!S.collected.passes.vendors;
        html += '<span class="brief-chip' + (vmet ? ' is-met' : '') + '">' + (vmet ? '&#10003; ' : '') + 'Vendors</span>';
      }
      html += '<span class="brief-chip brief-chip--info">' + S.brief.region + '</span>';
      if (S.brief.traffic) html += '<span class="brief-chip brief-chip--info">' + S.brief.traffic + ' traffic</span>';
      html += '<span class="brief-chip brief-chip--info">' + S.brief.deadline + '</span>';
      chips.innerHTML = html;
    }

    var prog = $('#caseProgress');
      if (prog) {
        var dc = Object.keys(S.collected.deeds).length;
        var pc = Object.keys(S.collected.passes).length;
        var sc = Object.keys(S.collected.stamps).length;
        var rc = [S.receipts.source, S.receipts.eula, S.receipts.renewals].filter(Boolean).length;
        var deedTotal = Object.keys(DEEDS).length;
        prog.innerHTML =
          '<div class="case-file__counts">' +
          '<span class="case-count">&#127922; ' + dc + '/' + deedTotal + ' Community Chest</span>' +
          '<span class="case-count">&#127915; ' + pc + ' Passes</span>' +
          '<span class="case-count">&#128203; ' + rc + '/3 Receipts</span>' +
          '<span class="case-count">&#11088; ' + sc + ' Stamps</span>' +
        '</div>';
      }

    var compEl = $('#caseComplications');
    var compList = $('#complicationsList');
    if (compEl && compList) {
      if (S.complications.length) {
        compEl.style.display = '';
        compList.innerHTML = S.complications.map(function (c) { return '<li>' + c + '</li>'; }).join('');
      } else {
        compEl.style.display = 'none';
      }
    }

    updatePortfolio();
  }

  /* ═══════════════════════════════════════
     RENDER: Deeds
     ═══════════════════════════════════════ */
  function renderDeeds() {
    SECTIONS.forEach(function (secId) {
      var container = $('[data-deed="' + secId + '"]');
      if (!container) return;
      container.innerHTML = '';
      if (!S.active) return;

      var d = DEEDS[secId];
      if (!d) return;

      var already = !!S.collected.deeds[secId];

      var html =
        '<details class="chest deed-card">' +
          '<summary class="chest-summary">' +
            '<span class="chest-title">&#127922; Community Chest: Section Takeaway</span>' +
            (already ? ' <span class="deed-earned">&#10003; Collected</span>' : '') +
          '</summary>' +
          '<div class="chest-content deed-card__inner">' +
            '<p class="small muted" style="margin-bottom:.5rem;"><strong>You now know:</strong></p>' +
            '<ul class="deed-card__takeaways">' +
              d.takeaways.map(function (t) { return '<li>' + t + '</li>'; }).join('') +
            '</ul>';

      if (!already) {
        html +=
          '<div class="deed-card__question">' +
            '<p style="margin:.75rem 0 .5rem;"><strong>Lock-in question:</strong> ' + d.q + '</p>' +
            '<fieldset style="border:1px dashed rgba(0,0,0,.15); border-radius:10px; padding:.75rem; display:grid; gap:.4rem;">' +
              '<legend class="sr-only">Choose an answer</legend>' +
              d.opts.map(function (o) {
                return '<label><input type="radio" name="deed-' + secId + '" value="' + o.id + '"> ' + o.text + '</label>';
              }).join('') +
            '</fieldset>' +
            '<div class="deed-card__result" role="status" aria-live="polite" style="margin-top:.5rem; min-height:1.5rem;"></div>' +
          '</div>';
      }

      html += '</div></details>';
      container.innerHTML = html;

      if (!already) wireDeed(container, secId, d);
    });
  }

  function wireDeed(container, secId, d) {
    var radios = container.querySelectorAll('input[name="deed-' + secId + '"]');
    var resultEl = container.querySelector('.deed-card__result');
    var answered = false;

    radios.forEach(function (r) {
      r.addEventListener('change', function () {
        if (answered) return;
        answered = true;
        var opt = d.opts.find(function (o) { return o.id === r.value; });
        var correct = opt && opt.correct;
        resultEl.innerHTML =
          '<p style="color:' + (correct ? '#166534' : '#991b1b') + '; font-weight:600;">' +
            (correct ? '&#10003; Correct! ' : '&#10007; Not quite. ') + d.why +
          '</p>' +
          '<button class="btn deed-card__add" type="button" style="margin-top:.5rem;">Add Community Chest to Case File' + (correct ? '' : ' anyway') + '</button>';
        resultEl.querySelector('.deed-card__add').addEventListener('click', function () {
          S.collected.deeds[secId] = true;
          save();
          // Re-render this deed as collected
          container.innerHTML =
            '<details class="chest deed-card" open>' +
              '<summary class="chest-summary"><span class="chest-title">&#127922; Community Chest: Section Takeaway</span> <span class="deed-earned">&#10003; Collected</span></summary>' +
              '<div class="chest-content deed-card__inner">' +
                '<p class="small muted" style="margin-bottom:.5rem;"><strong>You now know:</strong></p>' +
                '<ul class="deed-card__takeaways">' +
                  d.takeaways.map(function (t) { return '<li>' + t + '</li>'; }).join('') +
                '</ul>' +
              '</div>' +
            '</details>';
          updateCaseFile();
        });
      });
    });
  }

  /* ═══════════════════════════════════════
     RENDER: Change Orders
     ═══════════════════════════════════════ */
  function renderChangeOrders() {
    SECTIONS.forEach(function (secId) {
      var container = $('[data-change-order="' + secId + '"]');
      if (!container) return;
      container.innerHTML = '';
      if (!S.active) return;

      var deck = CO_DECKS[secId];
      if (!deck) return;

      container.innerHTML =
        '<details class="chance" style="margin-top:.75rem;">' +
          '<summary class="chance-summary"><span class="chance-title">&#127922; Chance Card</span></summary>' +
          '<div class="chance-content"><div class="change-order__inner"></div></div>' +
        '</details>';

      var inner = container.querySelector('.change-order__inner');
      if (!inner) return;

      if (S.coDrawn[secId] != null) {
        inner.innerHTML = coCardHTML(deck[S.coDrawn[secId]]);
        return;
      }

      inner.innerHTML =
        '<div class="change-order">' +
          '<button class="btn btn--chance change-order__draw" type="button">Draw</button>' +
          '<div class="change-order__result" role="status" aria-live="polite" style="margin-top:.5rem;"></div>' +
        '</div>';

      inner.querySelector('.change-order__draw').addEventListener('click', function () {
        var idx = Math.floor(Math.random() * deck.length);
        S.coDrawn[secId] = idx;
        var card = deck[idx];
        if (card.fx) applyEffect(card.fx);
        if (card.type === 'complication') S.complications.push(card.text);
        save();
        inner.querySelector('.change-order__result').innerHTML = coCardHTML(card);
        inner.querySelector('.change-order__draw').disabled = true;
        updateCaseFile();
      });
    });
  }

  function coCardHTML(card) {
    var isHelp = card.type === 'helpful';
    return (
      '<div class="change-order">' +
        '<div class="change-order__card ' + (isHelp ? 'is-helpful' : 'is-complication') + '">' +
          '<strong>' + (isHelp ? '&#127775; Helpful Find' : '&#9888;&#65039; Complication') + '</strong>' +
          '<p style="margin:.4rem 0 0;">' + card.text + '</p>' +
          (card.fx ? '<p class="small muted" style="margin:.25rem 0 0;"><em>Effect applied to your brief.</em></p>' : '') +
        '</div>' +
      '</div>'
    );
  }

  /* ═══════════════════════════════════════
     RENDER: Railroad Pass Scenarios
     ═══════════════════════════════════════ */
  function renderPassScenarios() {
    var container = document.getElementById('passScenarios');
    if (!container) return;
    container.innerHTML = '';
    if (!S.active) return;

    var needed = S.brief ? S.brief.channels.map(function (c) { return CH_LABEL[c]; }).join(', ') + (S.brief.vendors ? ', Vendors' : '') : '';

    container.innerHTML =
      '<details class="tip" style="margin-top:.75rem;">' +
        '<summary><strong>&#127915; Railroad Passes (game)</strong></summary>' +
        '<div class="mini-widget" style="margin-top:.5rem;">' +
          '<p class="muted small" style="margin-top: 0;">Name the channel, earn the pass.' + (needed ? ' <strong>Your brief requires:</strong> ' + needed : '') + '</p>' +
          '<div id="passScenariosList"></div>' +
        '</div>' +
      '</details>';

    var list = $('#passScenariosList');

    PASS_SCENARIOS.forEach(function (ps, i) {
      var already = !!S.collected.passes[ps.answer];
      var div = document.createElement('div');
      div.className = 'pass-scenario';

      if (already) {
        div.innerHTML =
          '<p class="pass-scenario__text"><em>' + ps.scenario + '</em></p>' +
          '<p style="margin:0; color:#166534; font-weight:600;">&#10003; ' + CH_LABEL[ps.answer] + ' pass earned. ' + ps.why + '</p>';
      } else {
        div.innerHTML =
          '<p class="pass-scenario__text"><em>' + ps.scenario + '</em></p>' +
          '<fieldset class="pass-scenario__options">' +
            CHANNELS.map(function (ch) {
              return '<label><input type="radio" name="pass-' + i + '" value="' + ch + '"> ' + CH_LABEL[ch] + '</label>';
            }).join('') +
          '</fieldset>' +
          '<div class="pass-result" role="status" aria-live="polite"></div>';

        wirePass(div, ps, i);
      }
      list.appendChild(div);
    });

    // Vendor scenario
    if (S.brief && S.brief.vendors) {
      var vDiv = document.createElement('div');
      vDiv.className = 'pass-scenario';
      if (S.collected.passes.vendors) {
        vDiv.innerHTML =
          '<p class="pass-scenario__text"><em>Your agency partner needs font files for print production.</em></p>' +
          '<p style="margin:0; color:#166534; font-weight:600;">&#10003; Vendor sharing pass earned.</p>';
      } else {
        vDiv.innerHTML =
          '<p class="pass-scenario__text"><em>Your agency partner needs font files for print production. What do they need?</em></p>' +
          '<fieldset class="pass-scenario__options">' +
            '<label><input type="radio" name="pass-vendor" value="share"> Share your files</label>' +
            '<label><input type="radio" name="pass-vendor" value="own"> They need their own license</label>' +
          '</fieldset>' +
          '<div class="pass-result" role="status" aria-live="polite"></div>';
        wireVendorPass(vDiv);
      }
      list.appendChild(vDiv);
    }

    // Boss Fight prompt
    var prompt = document.createElement('p');
    prompt.className = 'muted small';
    prompt.style.marginTop = '.75rem';
    prompt.innerHTML = '<strong>Bonus:</strong> Open the <em>"If a Compliance Letter Arrives"</em> section above and complete the Boss Fight audit quiz to earn a bonus stamp.';
    list.appendChild(prompt);
  }

  function wirePass(div, ps, i) {
    var radios = div.querySelectorAll('input[name="pass-' + i + '"]');
    var result = div.querySelector('.pass-result');
    var done = false;
    radios.forEach(function (r) {
      r.addEventListener('change', function () {
        if (done) return; done = true;
        if (r.value === ps.answer) {
          S.collected.passes[ps.answer] = true; save();
          result.innerHTML = '<p style="margin:0; color:#166534; font-weight:600;">&#10003; Correct! ' + CH_LABEL[ps.answer] + ' pass earned. ' + ps.why + '</p>';
        } else {
          result.innerHTML =
            '<p style="margin:0; color:#991b1b;">&#10007; That\'s ' + CH_LABEL[r.value] + '. The answer is <strong>' + CH_LABEL[ps.answer] + '</strong>. ' + ps.why + '</p>' +
            '<button class="btn" type="button" style="margin-top:.4rem; font-size:.85rem;">Claim pass anyway</button>';
          result.querySelector('.btn').addEventListener('click', function () {
            S.collected.passes[ps.answer] = true; save();
            result.innerHTML = '<p style="margin:0; color:#166534; font-weight:600;">&#10003; ' + CH_LABEL[ps.answer] + ' pass earned.</p>';
            updateCaseFile();
          });
        }
        updateCaseFile();
      });
    });
  }

  function wireVendorPass(div) {
    var radios = div.querySelectorAll('input[name="pass-vendor"]');
    var result = div.querySelector('.pass-result');
    var done = false;
    radios.forEach(function (r) {
      r.addEventListener('change', function () {
        if (done) return; done = true;
        if (r.value === 'own') {
          S.collected.passes.vendors = true; save();
          result.innerHTML = '<p style="margin:0; color:#166534; font-weight:600;">&#10003; Correct! Vendors need their own license. Pass earned.</p>';
        } else {
          result.innerHTML =
            '<p style="margin:0; color:#991b1b;">&#10007; Sharing font files usually violates EULA terms. They need their own license.</p>' +
            '<button class="btn" type="button" style="margin-top:.4rem; font-size:.85rem;">Claim pass anyway</button>';
          result.querySelector('.btn').addEventListener('click', function () {
            S.collected.passes.vendors = true; save();
            result.innerHTML = '<p style="margin:0; color:#166534; font-weight:600;">&#10003; Vendor pass earned.</p>';
            updateCaseFile();
          });
        }
        updateCaseFile();
      });
    });
  }

  /* ═══════════════════════════════════════
     RENDER: Paper Trail Receipt
     ═══════════════════════════════════════ */
  function renderReceipt() {
    var container = document.getElementById('paperTrail');
    if (!container) return;
    container.innerHTML = '';
    if (!S.active) return;

    container.innerHTML =
      '<details class="tip" style="margin-top:.75rem;">' +
        '<summary><strong>&#128203; Paper Trail Receipt (game)</strong></summary>' +
        '<div class="mini-widget" style="margin-top:.5rem;">' +
          '<p class="muted small" style="margin-top: 0;">Check off what you\'ve confirmed for your project fonts.</p>' +
          '<div style="display:grid; gap:.5rem; margin-top:.5rem;">' +
            '<label class="receipt-check"><input type="checkbox" id="receipt-source"' + (S.receipts.source ? ' checked' : '') + '> Confirmed where each font came from (foundry, aggregator, or OFL)</label>' +
            '<label class="receipt-check"><input type="checkbox" id="receipt-eula"' + (S.receipts.eula ? ' checked' : '') + '> Located the EULA/invoice for each licensed font</label>' +
            '<label class="receipt-check"><input type="checkbox" id="receipt-renewals"' + (S.receipts.renewals ? ' checked' : '') + '> Identified who owns renewals / subscription management</label>' +
          '</div>' +
        '</div>' +
      '</details>';

    ['source', 'eula', 'renewals'].forEach(function (key) {
      var cb = container.querySelector('#receipt-' + key);
      if (cb) cb.addEventListener('change', function () {
        S.receipts[key] = this.checked; save(); updateCaseFile();
      });
    });
  }

  /* ═══════════════════════════════════════
     RENDER: Portfolio + Invoice
     ═══════════════════════════════════════ */
  function renderPortfolio() {
    var container = document.getElementById('portfolio');
    if (!container) return;
    container.innerHTML = '';

    if (!S.active) {
      container.innerHTML =
        '<details class="tip" style="margin-top:1rem;">' +
          '<summary><strong>&#128230; Portfolio Printout</strong></summary>' +
          '<div><p class="muted">Roll a brief in the GO section to generate your portfolio and invoice.</p></div>' +
        '</details>';
      return;
    }

    container.innerHTML =
      '<details class="chance" style="margin-top:1rem;" id="portfolioDetails">' +
        '<summary class="chance-summary"><span class="chance-title">&#128230; Ship-It Packet &amp; Invoice</span></summary>' +
        '<div class="chance-content">' +
          '<div id="portfolioPacket"></div>' +
          '<div id="portfolioInvoice" style="margin-top:1rem;"></div>' +
        '</div>' +
      '</details>';

    updatePortfolio();
  }

  function updatePortfolio() {
    if (!S.active || !S.brief) return;
    var packet = document.getElementById('portfolioPacket');
    var invoice = document.getElementById('portfolioInvoice');
    if (!packet || !invoice) return;

    var m = missing();
    var dc = Object.keys(S.collected.deeds).length;
    var pc = Object.keys(S.collected.passes).length;
    var sc = Object.keys(S.collected.stamps).length;
    var rc = [S.receipts.source, S.receipts.eula, S.receipts.renewals].filter(Boolean).length;
    var total = dc + pc + sc + rc;

    // Packet
    var p = '<h4 style="margin:0 0 .5rem;">&#10004; Ship-It Packet</h4>';
    p += '<p><strong>' + total + '</strong> artifacts collected.</p>';

    if (dc) {
      p += '<p style="margin:.5rem 0 .25rem;"><strong>Community Chest collected:</strong></p><ul>';
      Object.keys(S.collected.deeds).forEach(function (d) {
        p += '<li>&#127922; ' + d.replace(/-/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); }) + '</li>';
      });
      p += '</ul>';
    }
    if (pc) {
      p += '<p style="margin:.5rem 0 .25rem;"><strong>Passes earned:</strong></p><ul>';
      Object.keys(S.collected.passes).forEach(function (k) {
        p += '<li>&#127915; ' + (CH_LABEL[k] || k) + '</li>';
      });
      p += '</ul>';
    }
    if (sc) {
      p += '<p style="margin:.5rem 0 .25rem;"><strong>Stamps earned:</strong></p><ul>';
      Object.keys(S.collected.stamps).forEach(function (k) {
        p += '<li>&#11088; ' + k + '</li>';
      });
      p += '</ul>';
    }
    var ri = [S.receipts.source && 'Font source confirmed', S.receipts.eula && 'EULA/invoice located', S.receipts.renewals && 'Renewals owner identified'].filter(Boolean);
    if (ri.length) {
      p += '<p style="margin:.5rem 0 .25rem;"><strong>Receipts:</strong></p><ul>';
      ri.forEach(function (r) { p += '<li>&#128203; ' + r + '</li>'; });
      p += '</ul>';
    }

    p += '<div class="portfolio-cheatsheet">' +
      '<h4 style="margin:0 0 .5rem;">5 Rules You\'ll Use on Monday</h4>' +
      '<ol style="margin:0; padding-left:1.25rem;">' +
        CHEAT_SHEET.map(function (r) { return '<li style="margin-bottom:.35rem;">' + r + '</li>'; }).join('') +
      '</ol></div>';
    packet.innerHTML = p;

    // Invoice
    // Win condition: cover the brief requirements (passes + paper trail + vendors if required).
    // Deeds/stamps are bonus learnings and don’t block “shipping”.
    var allMet = m.channels.length === 0 && m.receipts.length === 0 && !m.vendors;

    if (allMet) {
      invoice.innerHTML =
        '<div class="invoice-clear">' +
          '<h4 style="margin:0; color:#166534;">&#127881; Clean Invoice — You shipped it!</h4>' +
          '<p style="margin:.5rem 0 0;">Your Case File covers every requirement in the brief. No missing items. No surprise fees.</p>' +
        '</div>';
    } else {
      var ih = '<div class="invoice-missing">' +
        '<h4 style="margin:0 0 .75rem; color:#991b1b;">&#128176; Missing Items Invoice</h4>' +
        '<p class="small muted" style="margin:0 0 .75rem;">Required by your brief but not collected. Costs are, uh, approximate.</p>' +
        '<table style="width:100%; border-collapse:collapse;">' +
          '<thead><tr><th style="text-align:left; padding:6px 8px; border-bottom:2px solid #991b1b;">Missing Item</th>' +
          '<th style="text-align:right; padding:6px 8px; border-bottom:2px solid #991b1b;">Cost</th></tr></thead><tbody>';
      var ci = 0;
      function cost() { return COSTS[ci++ % COSTS.length]; }
      m.channels.forEach(function (ch) {
        ih += '<tr><td class="invoice-cell">&#127915; ' + CH_LABEL[ch] + ' pass</td><td class="invoice-cost">' + cost() + '</td></tr>';
      });
      if (m.vendors)
        ih += '<tr><td class="invoice-cell">&#127915; Vendor sharing pass</td><td class="invoice-cost">' + cost() + '</td></tr>';
      m.receipts.forEach(function (r) {
        var l = r === 'source' ? 'Font source confirmation' : r === 'eula' ? 'EULA/invoice' : 'Renewals owner';
        ih += '<tr><td class="invoice-cell">&#128203; ' + l + '</td><td class="invoice-cost">' + cost() + '</td></tr>';
      });
      ih += '</tbody></table></div>';
      invoice.innerHTML = ih;
    }
  }

  /* ═══════════════════════════════════════
     STAMPS: Hook existing widgets
     ═══════════════════════════════════════ */
  function hookStamps() {
    if (!S.active) return;

    // Classification quiz — 3 correct in a row
    var quizStreak = 0;
    var classResult = document.getElementById('classQuizResult');
    if (classResult) {
      new MutationObserver(function () {
        var t = classResult.textContent;
        if (t.indexOf('Correct') !== -1) {
          quizStreak++;
          if (quizStreak >= 3 && !S.collected.stamps['Classifier']) {
            S.collected.stamps['Classifier'] = true; save(); updateCaseFile();
            showToast('Classifier\'s Stamp earned! (3 correct in a row)');
          }
        } else if (t.indexOf('Not quite') !== -1) {
          quizStreak = 0;
        }
      }).observe(classResult, { childList: true, characterData: true, subtree: true });
    }

    // Anatomy explorer — 3 unique parts
    var anatomyClicked = new Set();
    $$('.anatomy-label').forEach(function (g) {
      g.addEventListener('click', function () {
        if (g.dataset.part) anatomyClicked.add(g.dataset.part);
        if (anatomyClicked.size >= 3 && !S.collected.stamps['Anatomist']) {
          S.collected.stamps['Anatomist'] = true; save(); updateCaseFile();
          showToast('Anatomist\'s Stamp earned! (3 parts explored)');
        }
      });
    });

    // Feature lab — toggle tnum on
    var tnum = $('[data-feature="tnum"]');
    if (tnum) {
      tnum.addEventListener('change', function () {
        if (this.checked && !S.collected.stamps['Feature Spotter']) {
          S.collected.stamps['Feature Spotter'] = true; save(); updateCaseFile();
          showToast('Feature Spotter\'s Stamp earned! (tabular figures activated)');
        }
      });
    }

    // Boss Fight: audit quiz — award a receipt-style stamp on clear
    var auditOut = document.querySelector('[data-widget="audit-quiz"] .quiz-out');
    if (auditOut) {
      new MutationObserver(function () {
        var t = auditOut.textContent || '';
        if (t.indexOf('Cleared Audit Receipt') !== -1 && !S.collected.stamps['Cleared Audit Receipt']) {
          S.collected.stamps['Cleared Audit Receipt'] = true; save(); updateCaseFile();
          showToast('Cleared Audit Receipt earned!');
        }
      }).observe(auditOut, { childList: true, characterData: true, subtree: true });
    }
  }

  function showToast(msg) {
    var t = document.createElement('div');
    t.className = 'stamp-toast';
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('is-visible'); });
    setTimeout(function () {
      t.classList.remove('is-visible');
      setTimeout(function () { t.remove(); }, 400);
    }, 3000);
  }

  /* ═══════════════════════════════════════
     RENDER ALL + BOOT
     ═══════════════════════════════════════ */
  function renderAll() {
    renderCaseFile();
    renderDeeds();
    renderChangeOrders();
    renderPassScenarios();
    renderReceipt();
    renderPortfolio();
  }

  function boot() {
    load();
    renderAll();
    if (S.active) { hookStamps(); preselectShortlist(); }
  }

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', boot);
  else
    boot();
})();
