    // Sprite progression carousel
    (() => {
      const track = document.querySelector('#spriteProgression .roster-carousel');
      if (!track) return;
      const dots = [...document.querySelectorAll('#spriteProgression .carousel-dot')];
      const slides = [...track.querySelectorAll('.diagram')];
      const prev = document.getElementById('spritePrev');
      const next = document.getElementById('spriteNext');
      if (!dots.length || !slides.length) return;

      let ticking = false;

      function getIndex() {
        // Each slide is centered; measure from the track's visual center
        const center = track.scrollLeft + track.offsetWidth / 2;
        let closest = 0, minDist = Infinity;
        slides.forEach((s, i) => {
          const mid = s.offsetLeft + s.offsetWidth / 2;
          const d = Math.abs(center - mid);
          if (d < minDist) { minDist = d; closest = i; }
        });
        return closest;
      }

      function update() {
        const idx = getIndex();
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        if (prev) prev.disabled = idx === 0;
        if (next) next.disabled = idx === slides.length - 1;
        ticking = false;
      }

      function scrollTo(i) {
        const slide = slides[i];
        if (!slide) return;
        const target = slide.offsetLeft - (track.offsetWidth - slide.offsetWidth) / 2;
        track.scrollTo({ left: target, behavior: 'smooth' });
      }

      track.addEventListener('scroll', () => {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
      }, { passive: true });

      dots.forEach((dot, i) => dot.addEventListener('click', () => scrollTo(i)));
      if (prev) prev.addEventListener('click', () => { const i = getIndex(); if (i > 0) scrollTo(i - 1); });
      if (next) next.addEventListener('click', () => { const i = getIndex(); if (i < slides.length - 1) scrollTo(i + 1); });

      update();
    })();

    // Predict-like-a-phone game
    (() => {
      const game = document.getElementById('predictGame');
      if (!game) return;

      const rounds = [
        {
          s: 'I need to go to the ___',
          c: ['store', 'quantum', 'briefly'],
          p: 0, b: 0,
          e: 'For common phrases, simple prediction nails it. "To the" \u2192 "store" is one of the most frequent word pairings in English.'
        },
        {
          s: 'The surgeon carefully picked up the ___',
          c: ['phone', 'scalpel', 'kids'],
          p: 0, b: 1,
          e: 'Your phone sees "up the" and guesses "phone"\u2014a common pairing. An LLM sees "surgeon" earlier on the counter and picks "scalpel."'
        },
        {
          s: 'After years of studying marine biology, she finally got to swim with the ___',
          c: ['flow', 'kids', 'dolphins'],
          p: 1, b: 2,
          e: '"Marine biology" is 9 words back\u2014far beyond the phone\u2019s window, but easily within an LLM\u2019s counter space.'
        },
        {
          s: 'Of all the planets in our solar system, Jupiter is the ___',
          c: ['planet', 'same', 'largest'],
          p: 1, b: 2,
          e: 'Your phone sees "is the" and suggests "same"\u2014one of the most common bigrams in English. An LLM connects "planets," "solar system," and "Jupiter" to pick "largest."'
        }
      ];

      let cur = 0;
      let done = false;
      const history = [];

      const sentenceEl = game.querySelector('#pgSentence');
      const choicesEl = game.querySelector('#pgChoices');
      const revealEl = game.querySelector('#pgReveal');
      const nextBtn = game.querySelector('#pgNext');
      const backBtn = game.querySelector('#pgBack');
      const resetBtn = game.querySelector('#pgReset');
      const progressEl = game.querySelector('#pgProgress');

      function buildRevealHTML(r) {
        let html = '';
        if (r.p === r.b) {
          html += '<p style="margin:0"><strong>Phone suggestion: ' + r.c[r.p] + '</strong>\u2014matches the context-aware pick this time.</p>';
        } else {
          html += '<p style="margin:0"><strong>Phone suggestion:</strong> ' + r.c[r.p] + ' &nbsp;|&nbsp; <strong>Context-aware pick:</strong> ' + r.c[r.b] + '</p>';
        }
        html += '<p class="note" style="margin:.5rem 0 0">' + r.e + '</p>';
        if (cur >= rounds.length - 1) {
          html += '<p style="margin:.8rem 0 0"><strong>Takeaway:</strong> Simple prediction matches common patterns. LLMs use attention to match meaning\u2014which is why they\u2019re dramatically better, but still one token at a time.</p>';
        }
        return html;
      }

      function showAnswered(r) {
        done = true;
        const btns = choicesEl.querySelectorAll('button');
        btns.forEach((btn, i) => {
          btn.disabled = true;
          if (i === r.b) {
            btn.style.outline = '2px solid var(--accent)';
            btn.style.outlineOffset = '2px';
          }
        });
        revealEl.innerHTML = buildRevealHTML(r);
        revealEl.style.display = 'block';
      }

      function render() {
        const r = rounds[cur];
        sentenceEl.textContent = r.s;
        choicesEl.innerHTML = '';
        progressEl.textContent = 'Round ' + (cur + 1) + ' of ' + rounds.length;

        r.c.forEach((word, i) => {
          const btn = document.createElement('button');
          btn.className = 'sandbox-btn';
          btn.textContent = word;
          btn.type = 'button';
          btn.addEventListener('click', () => pick(i));
          choicesEl.appendChild(btn);
        });

        if (history[cur] !== undefined) {
          showAnswered(r);
          nextBtn.style.display = cur < rounds.length - 1 ? 'inline-block' : 'none';
        } else {
          done = false;
          revealEl.style.display = 'none';
          nextBtn.style.display = 'none';
        }

        backBtn.style.display = cur > 0 ? 'inline-block' : 'none';
        resetBtn.style.display = history.length > 0 ? 'inline-block' : 'none';
      }

      function pick(idx) {
        if (done) return;
        history[cur] = idx;
        showAnswered(rounds[cur]);
        if (cur < rounds.length - 1) {
          nextBtn.style.display = 'inline-block';
        }
        resetBtn.style.display = 'inline-block';
      }

      nextBtn.addEventListener('click', () => { cur++; render(); });
      backBtn.addEventListener('click', () => { cur--; render(); });
      resetBtn.addEventListener('click', () => { cur = 0; history.length = 0; render(); });

      render();
    })();

    // Temperature demo slider
    (() => {
      const slider = document.getElementById('tempSlider');
      const output = document.getElementById('tempOutput');
      const label  = document.getElementById('tempValue');
      if (!slider || !output || !label) return;

      const tiers = [
        [12,  ' blue'],
        [25,  ' clear and cloudless'],
        [37,  ' a deep, brilliant blue that makes the whole city look painted'],
        [50,  ' an ocean flipped upside down, restless and wide'],
        [62,  ' humming with colors that haven\'t been named yet'],
        [75,  ' bargaining with the sea over who gets to keep the color indigo'],
        [87,  ' a cathedral ceiling, echoing with wind'],
        [99,  ' a slow-breathing gradient, deepening toward dusk'],
        [100, ' melting into purple dreams, gathering passing secrets in invisible hands']
      ];

      slider.addEventListener('input', () => {
        const v = +slider.value;
        label.textContent = 'Temperature: ' + (v / 50).toFixed(1);
        const tier = tiers.find(t => v <= t[0]) || tiers[tiers.length - 1];
        output.textContent = tier[1];
      });
    })();

    // Context overflow demo (kitchen-themed)
    (() => {
      const demo = document.getElementById('overflowDemo');
      if (!demo) return;

      const scene    = document.getElementById('ofScene');
      const addBtn   = document.getElementById('ofAdd');
      const resendBtn = document.getElementById('ofResend');
      const resetBtn = document.getElementById('ofReset');
      const status   = document.getElementById('ofStatus');
      const reveal   = document.getElementById('ofReveal');

      const MAX = 8;
      const SLOT_WIDTH = 11.5; // percent per slot (ticket + gap)
      const START_OFFSET = 1.5; // percent from left edge
      let items = [];
      let msgCount = 0;
      let rulesDropped = false;
      let falling = false;

      function ticketLeft(i) {
        return START_OFFSET + i * SLOT_WIDTH;
      }

      function twoLine(text) {
        // Split label into two lines at the space: "Your prompt" → "Your<br>prompt"
        var idx = text.indexOf(' ');
        return idx > 0 ? text.slice(0, idx) + '<br>' + text.slice(idx + 1) : text;
      }

      function render(fallingIndex, newIndex) {
        scene.innerHTML = '';
        items.forEach((item, i) => {
          const el = document.createElement('div');
          const isPrompt = item.type === 'rules';
          const isFalling = i === fallingIndex;
          const isNew = i === newIndex;
          el.className = 'kitchen-ticket'
            + (isPrompt ? ' kitchen-ticket--prompt' : ' kitchen-ticket--msg')
            + (isFalling ? ' kitchen-ticket--falling' : '');
          el.style.left = ticketLeft(i) + '%';

          // Only the new ticket gets the drop-in animation; others skip it
          if (!isNew && !isFalling) {
            el.style.animation = 'none';
            el.setAttribute('data-settled', '');
          }

          const label = document.createElement('span');
          label.className = 'kitchen-ticket__label';
          label.innerHTML = twoLine(item.label);
          el.appendChild(label);

          // After drop-in animation, mark as settled for smooth left transitions
          if (isNew) {
            el.addEventListener('animationend', function() {
              el.setAttribute('data-settled', '');
            }, { once: true });
          }

          scene.appendChild(el);
        });
        status.textContent = items.length + ' / ' + MAX + ' slots used';
      }

      function init() {
        items = [{ label: 'Your prompt', type: 'rules' }];
        msgCount = 0;
        rulesDropped = false;
        falling = false;
        reveal.style.display = 'none';
        resendBtn.style.display = 'none';
        addBtn.disabled = false;
        render(-1, 0); // animate the initial prompt ticket dropping in
      }

      addBtn.addEventListener('click', () => {
        if (falling) return; // guard against rapid clicks during fall
        msgCount++;

        if (items.length >= MAX) {
          const removed = items.shift();

          if (removed.type === 'rules' && !rulesDropped) {
            rulesDropped = true;
            falling = true;

            // Re-insert prompt at index 0 so we can animate it falling
            items.unshift(removed);
            items.push({ label: 'Msg ' + msgCount, type: 'msg' });
            render(0, items.length - 1); // index 0 falls, last index drops in

            // After fall animation (ticketFallOff = 1.2s), clean up and show reveal
            setTimeout(() => {
              items.shift(); // remove prompt for real
              falling = false;
              render(-1, -1); // no animations on cleanup re-render
              reveal.innerHTML = '<p style="margin:0"><strong>Your original prompt just fell off the counter.</strong></p><p class="note" style="margin:.5rem 0 0">The model has no idea it ever existed. This is one of the ways context overflow can happen. The original instructions are physically gone.</p>';
              reveal.style.display = 'block';
              resendBtn.style.display = 'inline-block';
              addBtn.disabled = (msgCount >= MAX + 5);
            }, 1250);
            return;
          }
        }

        items.push({ label: 'Msg ' + msgCount, type: 'msg' });
        render(-1, items.length - 1); // animate only the new ticket
        if (msgCount >= MAX + 5) addBtn.disabled = true;
      });

      resendBtn.addEventListener('click', () => {
        if (falling) return;
        // Push the prompt back onto the line as a new ticket (bumps oldest msg off)
        if (items.length >= MAX) items.shift();
        items.push({ label: 'Your prompt', type: 'rules' });
        render(-1, items.length - 1);
        resendBtn.style.display = 'none';
        reveal.innerHTML = '<p style="margin:0"><strong>Your prompt is back on the counter.</strong></p><p class="note" style="margin:.5rem 0 0">In a long conversation, restating your key instructions reminds the model what matters. Think of it as handing the chef a fresh copy of the original order. It costs you context space, but it keeps the output aligned with your intent\u2014especially when earlier messages have already been lost to overflow.</p>';
      });

      resetBtn.addEventListener('click', init);
      init();
    })();

    // Hallucination quiz
    (() => {
      const quiz = document.getElementById('hallucinationQuiz');
      if (!quiz) return;

      const rounds = [
        {
          claim: 'The average person swallows approximately eight spiders per year while sleeping.',
          fact: false,
          e: 'The origin of this "fact" is a mystery. It was once presented as “Real Fact” #31 under Snapple caps, but isn\u2019t listed among the "Real Facts" on their website. It\u2019s also widely attributed to a 1993 magazine column to demonstrate how easily misinformation spreads, however the article itself cannot be found anywhere online.'
        },
        {
          claim: 'A group of flamingos is called a "flamboyance."',
          fact: true,
          e: 'Correct\u2014like "a murder of crows" or "a parliament of owls." It sounds made up, which is the point: how plausible something sounds tells you nothing about whether it\u2019s true.'
        },
        {
          claim: 'Goldfish have a memory span of approximately three seconds.',
          fact: false,
          e: 'Goldfish can retain learned behaviors for months and navigate mazes. This myth is so widespread and goes back so far that there\u2019s no known origin to this myth and many models often state it as fact without any hedging.'
        },
        {
          claim: 'Bananas are technically classified as berries, but strawberries are not.',
          fact: true,
          e: 'Botanically correct. Berries develop from a single ovary\u2014bananas qualify, strawberries don\u2019t. While LLMs might not know how many R\u2019s or N\u2019s are in those fruits (due to how tokenization works) they get this right because it\u2019s well-represented in training data.'
        }
      ];

      let cur = 0;
      let done = false;
      const history = [];

      const claimEl = document.getElementById('hqClaim');
      const factBtn = document.getElementById('hqFact');
      const mythBtn = document.getElementById('hqMyth');
      const revealEl = document.getElementById('hqReveal');
      const nextBtn = document.getElementById('hqNext');
      const backBtn = document.getElementById('hqBack');
      const resetBtn = document.getElementById('hqReset');
      const progressEl = document.getElementById('hqProgress');

      function computeScore() {
        let s = 0;
        for (let i = 0; i < history.length; i++) {
          if (history[i] === rounds[i].fact) s++;
        }
        return s;
      }

      function buildRevealHTML(r, answeredFact) {
        const correct = answeredFact === r.fact;
        let html = '<p style="margin:0">';
        html += correct ? '<strong>Correct!</strong> ' : '<strong>Not quite.</strong> ';
        html += 'This is <strong>' + (r.fact ? 'a real fact' : 'a common myth') + '</strong>.</p>';
        html += '<p class="note" style="margin:.5rem 0 0">' + r.e + '</p>';
        if (cur >= rounds.length - 1) {
          const score = computeScore();
          html += '<p style="margin:.8rem 0 0"><strong>Result: ' + score + ' / ' + rounds.length + '.</strong> ';
          if (score === rounds.length) {
            html += 'Nice work\u2014but in practice there\u2019s no "Fact or Myth" button. Every AI claim arrives in the same confident voice.';
          } else {
            html += 'That\u2019s the point. Every claim used the same confident tone. The myths were structurally identical to the real facts.';
          }
          html += '</p>';
        }
        return html;
      }

      function showAnswered(r, answeredFact) {
        done = true;
        factBtn.disabled = true;
        mythBtn.disabled = true;
        factBtn.style.outline = '';
        mythBtn.style.outline = '';
        const rightBtn = r.fact ? factBtn : mythBtn;
        rightBtn.style.outline = '2px solid var(--accent)';
        rightBtn.style.outlineOffset = '2px';
        revealEl.innerHTML = buildRevealHTML(r, answeredFact);
        revealEl.style.display = 'block';
      }

      function render() {
        const r = rounds[cur];
        claimEl.textContent = '\u201c' + r.claim + '\u201d';
        progressEl.textContent = 'Claim ' + (cur + 1) + ' of ' + rounds.length;

        if (history[cur] !== undefined) {
          showAnswered(r, history[cur]);
          nextBtn.style.display = cur < rounds.length - 1 ? 'inline-block' : 'none';
        } else {
          done = false;
          factBtn.disabled = false;
          mythBtn.disabled = false;
          factBtn.style.outline = '';
          mythBtn.style.outline = '';
          revealEl.style.display = 'none';
          nextBtn.style.display = 'none';
        }

        backBtn.style.display = cur > 0 ? 'inline-block' : 'none';
        resetBtn.style.display = history.length > 0 ? 'inline-block' : 'none';
      }

      function pick(answeredFact) {
        if (done) return;
        history[cur] = answeredFact;
        showAnswered(rounds[cur], answeredFact);
        if (cur < rounds.length - 1) {
          nextBtn.style.display = 'inline-block';
        }
        resetBtn.style.display = 'inline-block';
      }

      factBtn.addEventListener('click', () => pick(true));
      mythBtn.addEventListener('click', () => pick(false));
      nextBtn.addEventListener('click', () => { cur++; render(); });
      backBtn.addEventListener('click', () => { cur--; render(); });
      resetBtn.addEventListener('click', () => { cur = 0; history.length = 0; render(); });

      render();
    })();

    // Prompt iteration demo
    (() => {
      const demo = document.getElementById('iterationDemo');
      if (!demo) return;

      const steps = [
      {
        prompt: 'Write me an email about the product update.',
        output:
          'Subject: Product Update\n\nHi there,\n\nI wanted to share a quick update about our product. We\u2019ve been working hard and have made some exciting improvements. More details coming soon... hopefully.\n\nLet me know if you have any questions.\n\nBest,\n[Company name]',
        notice:
          '<strong>The problem:</strong> The LLM had almost nothing to work with, so the output is generic filler. It contains no actual product details, no hook, and no reason to buy. But notice\u2014the email <em>looks</em> professional and well-structured. If you weren\u2019t paying attention, you might actually send this and wonder why nobody clicked.'
      },
      {
        prompt:
          'Write a marketing email announcing the iRock Pro MAX+ pet rock. It now has integrated AI features and voice commands. Mention rock-solid answers and that pre-orders are open.',
        output:
          'Subject: Introducing iRock Pro MAX+ \u2014 Your Pet Rock, Now with AI\n\nHi there,\n\nWe\u2019re excited to introduce the iRock Pro MAX+, a pet rock with integrated AI features. It offers rock-solid answers and voice command support.\n\nPre-orders are now open. If you\u2019d like to be among the first to experience a smarter pet rock, reserve yours today.\n\nBest,\n[Company name]',
        notice:
          '<strong>Better:</strong> Now the email has <em>some</em> real content because the prompt provided actual features and a basic CTA. But the tone is still generic and there\u2019s no offer, urgency, or specific feature framing (why should anyone care about a rock with AI?).'
      },
      {
        prompt:
          'Write a marketing email announcing our new product release.\n\nProduct name: iRock Pro MAX+\nTagline: \u201cAI-POWERED SMART ROCK!\u201d\nTone: sophisticated tech-hype + conversational \nFormat: 3 short paragraphs + a feature bullet list + a clear CTA section.\nInclude features in the attached iRock_Pro_Max_Plus.doc (use the exact phrases at least once).\n\nOffer: 20% off pre-orders with code STONESMART\nDeadline: 11:59PM Friday\nCTA button text (as plain text): [Preorder iRock Pro MAX+]\nAdd the iRock standard disclaimer\nEnd with a \u201cWhat to do next\u201d bullet list (3 bullets).\nInclude the attached hero image at the top.',
        output:
          'Subject: Meet iRock Pro MAX+ \u2014 the AI-POWERED SMART ROCK!'+
          '<img src="../images/iRock-Pro-Max-hero.png" alt="iRock Pro MAX+ email hero image" style="width:100%;border-radius:6px;margin-bottom:8px">'+
          'Hi [first_name],\n\nThe future just landed on your desk. Introducing iRock Pro MAX+, the world\u2019s first pet rock upgraded with cutting edge artificial intelligence. It\u2019s cute, it\u2019s quiet, and it seamlessly connects to your smart home.\n\nPowered by Stone-Cold Intelligence\u2122 and an impressive 3000 petaflops processing, iRock Pro MAX+ delivers rock-solid answers. It also includes Ultra 5G-lithic connectivity plus our proprietary R.O.C.K. (Robotic Optimized Cognitive Kernel) to keep your conversations grounded.\n\nFeatures you never asked for:\n\u2022 Stone-Cold Intelligence\u2122\n\u2022 3000 petaflops processing\n\u2022 Rock-solid answers\n\u2022 Ultra 5G-lithic connectivity\n\u2022 R.O.C.K. (Robotic Optimized Cognitive Kernel)\n\u2022 Voice command enabled\n\u2022 Virtual pet rock mode\n\u2022 Zen mode setting\n\nPre-orders are open now\u2014and for a limited time you can get 20% off with code STONESMART (expires 11:59PM Friday).\n\n[Preorder iRock Pro MAX+]\n\nFine print: AI features vary by subscription tier. Plans start at $29.99/mo for Basic (includes Zen mode)\n\nWhat to do next:\n\u2022 Use code STONESMART to pre-order by 11:59PM Friday\n\u2022 Log in to our app to name your iRock Pro MAX+\n\u2022 Enable Zen mode and experience pure, uninterrupted nothingness\n',
        notice:
          '<strong>Same framework, different story.</strong> The only difference was the ticket: specific product facts, a structured format, and explicit tone produced an email that\u2019s usable. Three prompts, three drafts, one extremely useful rock.'
      }
      ];

      let cur = 0;

      const promptEl = document.getElementById('itPrompt');
      const outputEl = document.getElementById('itOutput');
      const noticeEl = document.getElementById('itNotice');
      const nextBtn = document.getElementById('itNext');
      const backBtn = document.getElementById('itBack');
      const resetBtn = document.getElementById('itReset');
      const progressEl = document.getElementById('itProgress');
      const promptBlock = document.getElementById('itPromptBlock');

      function render() {
        const s = steps[cur];
        progressEl.textContent = 'Draft ' + (cur + 1) + ' of ' + steps.length;
        promptBlock.setAttribute('data-label', 'Order ticket (draft ' + (cur + 1) + '):');
        promptEl.textContent = s.prompt;
        outputEl.innerHTML = s.output.replace(/\n/g, '<br>');
        noticeEl.innerHTML = '<p style="margin:0">' + s.notice + '</p>';
        nextBtn.style.display = cur < steps.length - 1 ? 'inline-block' : 'none';
        backBtn.style.display = cur > 0 ? 'inline-block' : 'none';
        resetBtn.style.display = cur > 0 ? 'inline-block' : 'none';
      }

      nextBtn.addEventListener('click', () => { cur++; render(); });
      backBtn.addEventListener('click', () => { cur--; render(); });
      resetBtn.addEventListener('click', () => { cur = 0; render(); });

      render();
    })();

    // Workflow station demo
    (() => {
      const demo = document.getElementById('workflowDemo');
      if (!demo) return;

      const steps = [
        {
          label: 'Station 1: Organize',
          prompt: 'Here are rough notes from today\u2019s product sync. Clean them up: fix shorthand, group related items by topic, and mark action items with \u2192.',
          output: 'DESIGN\n\u2022 Homepage redesign approved \u2014 using Option B (card layout)\n\u2022 Mobile nav needs another round \u2014 Janet reviewing by Thursday\n\nENGINEERING\n\u2022 API migration 80% complete, on track for March 7\n\u2022 Auth module blocked on third-party SDK update\n\u2192 Sam to contact vendor re: SDK timeline (by Wed)\n\nLAUNCH\n\u2022 QA starts Monday \u2014 test plan in Confluence\n\u2192 All leads review QA sections (before Monday standup)\n\u2192 3 volunteers needed for user testing (sign up by EOD Fri)',
          notice: 'This station has one job: organizing raw input. The chef isn\u2019t writing the summary yet\u2014just sorting ingredients so the next station starts clean.'
        },
        {
          label: 'Station 2: Extract',
          prompt: 'From the organized notes above, create two lists: (1) Key decisions, one line each. (2) Action items with owner and deadline.',
          output: 'DECISIONS\n1. Homepage redesign \u2192 Option B (card layout)\n2. Mobile nav deferred for another review round\n3. API migration on track for March 7 deadline\n4. QA testing launches Monday\n\nACTION ITEMS\n\u2022 Sam \u2192 Contact SDK vendor re: timeline (by Wed)\n\u2022 All leads \u2192 Review QA test plan sections (before Mon standup)\n\u2022 TBD \u2192 3 volunteers for user testing (by EOD Fri)',
          notice: 'The chef is working with clean, structured input from Station 1\u2014not the original messy shorthand. Better input at each station means better output at every station.'
        },
        {
          label: 'Station 3: Draft + Expo',
          prompt: 'Write a 3-paragraph stakeholder summary from these decisions and action items. Tone: concise, professional. After the summary, add a "Verify before sending" section listing anything implied but not explicitly confirmed in the original notes.',
          output: 'PRODUCT SYNC \u2014 STAKEHOLDER SUMMARY\n\nThe homepage redesign is moving forward with Option B (card layout). Mobile navigation needs an additional review round; Janet will have feedback by Thursday.\n\nThe API migration is 80% complete, tracking toward March 7. The auth module is blocked by a third-party SDK update\u2014Sam is following up with the vendor by Wednesday.\n\nQA begins Monday. Leads should review their test plan sections before standup. We need three volunteers for user testing by end of day Friday.\n\nVERIFY BEFORE SENDING\n\u2022 Was Option B formally approved or just preferred?\n\u2022 Is March 7 a hard deadline or a target?\n\u2022 Is there a sign-up channel for user testing volunteers?',
          notice: '<strong>Three stations, three focused prompts.</strong> Each received clean input from the previous step, had a single clear job, and produced structured output. The "Verify" section is the expo pass\u2014the chef flagging items for you to check before serving.'
        }
      ];

      let cur = 0;

      const promptEl = document.getElementById('wfPrompt');
      const outputEl = document.getElementById('wfOutput');
      const noticeEl = document.getElementById('wfNotice');
      const nextBtn = document.getElementById('wfNext');
      const backBtn = document.getElementById('wfBack');
      const resetBtn = document.getElementById('wfReset');
      const progressEl = document.getElementById('wfProgress');
      const promptBlock = document.getElementById('wfPromptBlock');

      function render() {
        const s = steps[cur];
        progressEl.textContent = s.label;
        promptBlock.setAttribute('data-label', s.label + ' \u2014 prompt:');
        promptEl.textContent = s.prompt;
        outputEl.innerHTML = s.output.replace(/\n/g, '<br>');
        noticeEl.innerHTML = '<p style="margin:0">' + s.notice + '</p>';
        nextBtn.style.display = cur < steps.length - 1 ? 'inline-block' : 'none';
        backBtn.style.display = cur > 0 ? 'inline-block' : 'none';
        resetBtn.style.display = cur > 0 ? 'inline-block' : 'none';
      }

      nextBtn.addEventListener('click', () => { cur++; render(); });
      backBtn.addEventListener('click', () => { cur--; render(); });
      resetBtn.addEventListener('click', () => { cur = 0; render(); });

      render();
    })();
    // Wireframe demo (appendix)
    (() => {
      const root = document.getElementById('tplChefSelect');
      if (!root) return;

      const rosterEl = document.getElementById('tplRoster');
      const artEl    = document.getElementById('tplArt');
      const infoEl   = document.getElementById('tplInfo');

      const DATA = [
        { id: 'item-1', name: 'Lorem Ipsum',        title: 'Lorem ipsum dolor',    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', accent: '#629c67', stats: { PREP: 1, FLAV: 1, HEAT: 1, GEAR: 1, PLAT: 1 } },
        { id: 'item-2', name: 'Dolor Sit',          title: 'Consectetur adipiscing', bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',                  accent: '#5f8fb0', stats: { PREP: 1, FLAV: 1, HEAT: 1, GEAR: 1, PLAT: 1 } },
        { id: 'item-3', name: 'Amet Elit',          title: 'Sed do eiusmod',        bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',                        accent: '#9f79d4', stats: { PREP: 1, FLAV: 1, HEAT: 1, GEAR: 1, PLAT: 1 } },
        { id: 'item-4', name: 'Tempor Incididunt',  title: 'Ut labore et',          bio: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',               accent: '#4d7cc2', stats: { PREP: 1, FLAV: 1, HEAT: 1, GEAR: 1, PLAT: 1 } },
        { id: 'item-5', name: 'Magna Aliqua',       title: 'Ut enim ad',            bio: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.',                      accent: '#cf6448', stats: { PREP: 1, FLAV: 1, HEAT: 1, GEAR: 1, PLAT: 1 } },
        { id: 'item-6', name: 'Commodo Consequat',  title: 'Duis aute irure',       bio: 'Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit.',            accent: '#7b8f4f', stats: { PREP: 1, FLAV: 1, HEAT: 1, GEAR: 1, PLAT: 1 } }
      ];

      let active = 0;

      function stars(n) {
        return '<span class="star-on">\u2605</span>'.repeat(n) + '<span class="star-off">\u2606</span>'.repeat(5 - n);
      }

      function render() {
        var item = DATA[active];
        root.style.setProperty('--chef-accent', item.accent);

        // Roster
        rosterEl.innerHTML = '';
        DATA.forEach(function (d, i) {
          var btn = document.createElement('button');
          btn.className = 'portrait' + (i === active ? ' active' : '');
          btn.type = 'button';
          btn.setAttribute('aria-label', 'Select ' + d.name);
          btn.textContent = 'Lorem ' + (i + 1);
          btn.addEventListener('click', function () { active = i; render(); });
          rosterEl.appendChild(btn);
        });

        // Art placeholder
        artEl.innerHTML = '';
        var ph = document.createElement('div');
        ph.className = 'chef-art-placeholder';
        ph.textContent = 'Lorem ipsum';
        artEl.appendChild(ph);

        // Info
        var html = '<div class="chef-name">' + item.name + '</div>';
        html += '<div class="chef-title-label">' + item.title + '</div>';
        html += '<div class="chef-bio">' + item.bio + '</div>';
        html += '<div class="chef-stats">';
        for (var key in item.stats) {
          html += '<div class="stat-row"><span class="stat-label">' + key + '</span>';
          html += '<span class="stat-stars" aria-label="' + item.stats[key] + ' out of 5">' + stars(item.stats[key]) + '</span></div>';
        }
        html += '</div>';
        infoEl.innerHTML = html;
      }

      render();
    })();

    // Chef Select
    (() => {
      const root = document.getElementById('chefSelect');
      if (!root) return;

      const motionOK = matchMedia('(prefers-reduced-motion: no-preference)').matches;

      const chefs = [
        {
          id: 'claude', name: 'Claude', title: 'The Head Chef of Clarity',
          img: '../images/character_select/Claude.png',
          bio: 'Runs a terrifyingly organized kitchen. Labels every jar, writes a prep list for the prep list, and politely refuses to substitute ingredients.<br><strong>Best for:</strong> careful reasoning, crisp writing, and code-review when you need structure.<br><strong>Watch for:</strong> occasionally trying to turn a simple grilled cheese into a masterpiece.',
          stats: { PREP: 5, FLAV: 2, HEAT: 1, GEAR: 4, PLAT: 4 }
        },
        {
          id: 'chatgpt', name: 'ChatGPT', title: 'The All-Purpose Chef',
          img: '../images/character_select/ChatGPT.png',
          bio: 'The reliable generalist who can run three stations and still answer your questions mid-rush.<br><strong>Best for:</strong> conversation, drafting, editing, explaining, brainstorming, and fast iteration when you want a steady back-and-forth.<br><strong>Watch for:</strong> occasionally substituting ingredients without saying anything.',
          stats: { PREP: 3, FLAV: 4, HEAT: 3, GEAR: 3, PLAT: 3 }
        },
        {
          id: 'gemini', name: 'Gemini', title: 'The Ambidextrous Caterer',
          img: '../images/character_select/Gemini.png',
          bio: 'Shows up with a banquet cart packed with cookbooks and various tricks of the trade.<br><strong>Best for:</strong> “here\u2019s a screenshot / table / doc\u2014tell me what matters,” research-y synthesis, and anything that mixes formats.<br><strong>Watch for:</strong> the occasional experimental garnish\u2014do an expo pass before it leaves the kitchen.',
          stats: { PREP: 4, FLAV: 2, HEAT: 3, GEAR: 5, PLAT: 2 }
        },
        {
          id: 'copilot', name: 'Copilot', title: 'The Prep Cook Living in the Pantry',
          img: '../images/character_select/CoPilot.png',
          bio: 'All the tools and always embedded in your IDE, your browser, your docs.  Not the flashiest chef on the line, but always ready to support with its signature move: auto-complete.<br><strong>Best for:</strong> staying in flow during your stay in Microsoft-land.<br><strong>Watch for:</strong> improvisation of the menu when overwhelmed.',
          stats: { PREP: 4, FLAV: 3, HEAT: 1, GEAR: 5, PLAT: 3 }
        },
        {
          id: 'grok', name: 'Grok', title: 'The Spicy Special',
          img: '../images/character_select/Grok.png',
          bio: 'Brings all the chaos of a herd of caffeinated squirrels in a bouncy castle wearing a trench coat. Also, an unapologetic fanboy of a certain billionaire, if that\u2019s at all important to the dish you\u2019re ordering.<br><strong>Best for:</strong> big swings and punchy rewrites when you want spicy ideas more than facts.<br><strong>Watch for:</strong> high variance\u2014it tends to over-season and improvise ingredients\u2014don\u2019t feed it after midnight.',
          stats: { PREP: 1, FLAV: 5, HEAT: 5, GEAR: 2, PLAT: 3 }
        },
        {
          id: 'llama', name: 'LLaMA', title: 'The Home Kitchen Kit',
          img: '../images/character_select/LLaMA.png',
          bio: 'Bring-your-own-stove: beloved for self-hosting, customization, and gourmet meals from the privacy of your own home.<br><strong>Best for:</strong> privacy-sensitive workflows and full control over tinkering, tuning, and swapping ingredients.<br><strong>Watch for:</strong> results vary by model/size and setup\u2014your mise en place (prompts, evals, settings, etc.) matters a lot.',
          stats: { PREP: 5, FLAV: 2, HEAT: 3, GEAR: 5, PLAT: 1 }
        }
      ];

      const rosterEl = document.getElementById('csRoster');
      const artEl = document.getElementById('csArt');
      const infoEl = document.getElementById('csInfo');
      const panelEl = document.getElementById('csPanel');
      const accentByChef = {
        claude: '#5f8fb0',
        chatgpt: '#629c67',
        gemini: '#9f79d4',
        copilot: '#4d7cc2',
        grok: '#cf6448',
        llama: '#7b8f4f'
      };
      let active = -1;
      let prevActive = -1;
      let swapTimer = 0;
      let accentTimer = 0;
      let hintTimer = 0;
      let hintShown = false;
      let lastScrollY = window.scrollY;
      let scrollTicking = false;

      function stars(n) {
        const on = '<span class="star-on">\u2605</span>'.repeat(n);
        const off = '<span class="star-off">\u2606</span>'.repeat(5 - n);
        return on + off;
      }

      function applyChefAccent() {
        if (active < 0) {
          root.style.removeProperty('--chef-accent');
          return;
        }
        const c = chefs[active];
        root.style.setProperty('--chef-accent', accentByChef[c.id] || 'var(--accent)');
      }

      function updatePanel() {
        if (active < 0) {
          if (panelEl) panelEl.classList.add('placeholder');
          artEl.innerHTML = '<img class="chef-art-placeholder" src="../images/character_select/Silhouette.png" alt="Generic chef silhouette">';
          infoEl.innerHTML =
            '<div class="chef-name">???</div>' +
            '<div class="chef-title-label">Select your chef</div>' +
            '<div class="chef-bio"></div>';
          return;
        }

        const c = chefs[active];
        if (panelEl) panelEl.classList.remove('placeholder');
        artEl.innerHTML = '<img class="chef-art-img" src="' + c.img + '" alt="' + c.name + ' chef card art">';

        let html = '<div class="chef-name">' + c.name + '</div>';
        html += '<div class="chef-title-label">' + c.title + '</div>';
        html += '<div class="chef-bio">' + c.bio + '</div>';
        html += '<div class="chef-stats">';
        for (const [key, val] of Object.entries(c.stats)) {
          html += '<div class="stat-row">';
          html += '<span class="stat-label">' + key + '</span>';
          html += '<span class="stat-stars" aria-label="' + val + ' out of 5">' + stars(val) + '</span>';
          html += '</div>';
        }
        html += '</div>';
        infoEl.innerHTML = html;
      }

      function revealStats() {
        if (!motionOK) return;
        infoEl.querySelectorAll('.stat-row').forEach((row, i) => {
          row.animate(
            [
              { opacity: 0, transform: 'translateX(-8px)' },
              { opacity: 1, transform: 'translateX(0)' }
            ],
            { duration: 250, delay: i * 60, easing: 'ease', fill: 'backwards' }
          );
        });
      }

      function animatePortraitSelection(buttonEl) {
        if (!motionOK || !buttonEl) return;
        buttonEl.animate(
          [
            { transform: 'scale(1)' },
            { transform: 'scale(1.08)' },
            { transform: 'scale(1)' }
          ],
          { duration: 300, easing: 'ease' }
        );
      }

      function showHintPulse() {
        if (!motionOK || hintShown || active >= 0) return;
        const target = rosterEl.querySelector('.portrait:not(.active)');
        if (!target) return;
        hintShown = true;
        target.classList.add('hint-pulse');
        target.addEventListener('animationend', () => {
          target.classList.remove('hint-pulse');
        }, { once: true });
      }

      function updateExitState() {
        const currentScrollY = window.scrollY;
        const deltaY = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;
        if (!root.classList.contains('in-view')) {
          root.classList.remove('exiting-up');
          scrollTicking = false;
          return;
        }
        const rect = root.getBoundingClientRect();
        const inViewZone = rect.top > window.innerHeight * 0.12 && rect.top < window.innerHeight * 1.05;
        const movingUpFast = deltaY < -14;
        root.classList.toggle('exiting-up', movingUpFast && inViewZone);
        scrollTicking = false;
      }

      function handleScroll() {
        if (scrollTicking) return;
        scrollTicking = true;
        requestAnimationFrame(updateExitState);
      }

      function render() {
        rosterEl.querySelectorAll('.portrait').forEach((p, i) => {
          p.classList.toggle('active', i === active && active >= 0);
        });

        const changed = active !== prevActive;
        prevActive = active;
        clearTimeout(swapTimer);
        clearTimeout(accentTimer);
        applyChefAccent();

        if (motionOK && changed) {
          artEl.classList.add('flipping');
          infoEl.classList.add('swapping');
          if (panelEl && active >= 0) {
            panelEl.classList.add('accent-pulse');
            accentTimer = setTimeout(() => {
              panelEl.classList.remove('accent-pulse');
            }, 260);
          }
          swapTimer = setTimeout(() => {
            updatePanel();
            requestAnimationFrame(() => {
              artEl.classList.remove('flipping');
              infoEl.classList.remove('swapping');
              revealStats();
            });
          }, 190);
        } else {
          updatePanel();
          if (changed) revealStats();
        }
      }

      const portraits = {
        claude: '../images/character_select/Claude-portrait.png',
        chatgpt: '../images/character_select/ChatGPT-portrait.png',
        gemini: '../images/character_select/Gemini-portrait.png',
        copilot: '../images/character_select/CoPilot-portrait.png',
        grok: '../images/character_select/Grok-portrait.png',
        llama: '../images/character_select/LLama-portrait.png'
      };

      chefs.forEach((c, i) => {
        const btn = document.createElement('button');
        btn.className = 'portrait';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Select ' + c.name);
        const img = document.createElement('img');
        img.src = portraits[c.id];
        img.alt = c.name;
        img.loading = 'lazy';
        btn.appendChild(img);
        const selectChef = () => {
          active = i;
          render();
          animatePortraitSelection(btn);
        };
        btn.addEventListener('click', selectChef);
        btn.addEventListener('keydown', (event) => {
          if (event.repeat) return;
          if (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'Spacebar') return;
          event.preventDefault();
          selectChef();
        });
        rosterEl.appendChild(btn);
      });

      if (motionOK) {
        root.classList.add('motion-ready');
        const portraitEls = rosterEl.querySelectorAll('.portrait');
        portraitEls.forEach(p => { p.style.opacity = '0'; });

        const io = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            root.classList.add('in-view');
            portraitEls.forEach((p, i) => {
              p.animate(
                [
                  { opacity: 0, transform: 'translateY(12px)' },
                  { opacity: 1, transform: 'translateY(0)' }
                ],
                { duration: 400, delay: 50 + i * 60, easing: 'ease', fill: 'backwards' }
              );
              p.style.opacity = '';
            });
            hintTimer = setTimeout(showHintPulse, 520);
            io.disconnect();
          }
        }, { threshold: 0.15 });
        io.observe(root);
        window.addEventListener('scroll', handleScroll, { passive: true });
      }

      render();
    })();
