(() => {
  const btn = document.getElementById("toggleTokens");
  const p = document.getElementById("tokenParagraph");
  if (!btn || !p) return;

  const originalHTML = p.innerHTML;

  let built = false;
  let tokensOn = false;

  // Deterministic pseudo-random generator for chunk sizes (so it looks stable)
  function makePRNG(seed = 123456789) {
    let s = seed >>> 0;
    return () => (s = (s * 1664525 + 1013904223) >>> 0);
  }

  // Unicode-aware chunking when available, fallback otherwise
  function getSegmentRegex() {
    try {
      // whitespace OR letters/numbers OR "other" (punctuation/symbols)
      return /(\s+|[\p{L}\p{N}]+|[^\s\p{L}\p{N}]+)/gu;
    } catch {
      return /(\s+|[A-Za-z0-9]+|[^A-Za-z0-9\s]+)/g;
    }
  }

  function buildTokenSpan(piece, tokenIndex) {
    const span = document.createElement("span");
    span.className = "tok";
    span.textContent = piece;

    const hue = (tokenIndex * 47) % 360;
    span.style.setProperty("--bg", `hsl(${hue} 90% 85%)`);

    return span;
  }

  /**
   * Loose tokenizer:
   * - Attaches whitespace to the next token (carry)
   * - Splits longer words into 2–4 char chunks
   */
  function tokenizeTextToFragment(text, state) {
    const frag = document.createDocumentFragment();
    const re = getSegmentRegex();

    // carry whitespace from previous node so spaces before <strong> can attach to its first token
    let pendingSpace = state.carry || "";
    state.carry = "";

    const segments = text.match(re) || [];

    for (const seg of segments) {
      // whitespace: hold it until the next real token
      if (/^\s+$/.test(seg)) {
        pendingSpace += seg;
        continue;
      }

      // "word" segment (letters/numbers) -> split into smaller chunks sometimes
      const isWord = /^[\p{L}\p{N}]+$/u.test(seg) || /^[A-Za-z0-9]+$/.test(seg);
      if (isWord && seg.length > 4) {
        let i = 0;
        while (i < seg.length) {
          const r = state.prng() % 3;          // 0..2
          const len = 2 + r;                   // 2..4
          let chunk = seg.slice(i, i + len);

          if (i === 0 && pendingSpace) {
            chunk = pendingSpace + chunk;
            pendingSpace = "";
          }

          frag.appendChild(buildTokenSpan(chunk, state.tokenIndex++));
          i += len;
        }
      } else {
        // punctuation or short word: keep as one token
        let piece = seg;
        if (pendingSpace) {
          piece = pendingSpace + piece;
          pendingSpace = "";
        }
        frag.appendChild(buildTokenSpan(piece, state.tokenIndex++));
      }
    }

    // If the text node ends with whitespace, carry it into the next node.
    state.carry = pendingSpace;

    return frag;
  }

  function processNode(node, state) {
    // Text node: replace its contents with token spans
    if (node.nodeType === Node.TEXT_NODE) {
      return tokenizeTextToFragment(node.nodeValue, state);
    }

    // Element node: clone the element and process children (preserves <strong>, etc.)
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node.cloneNode(false);
      for (const child of node.childNodes) {
        el.appendChild(processNode(child, state));
      }
      return el;
    }

    // Other nodes (comments, etc.): clone as-is
    return node.cloneNode(true);
  }

  function buildOnce() {
    if (built) return;

    // Parse original HTML into a temporary container
    const tmp = document.createElement("div");
    tmp.innerHTML = originalHTML;

    const state = {
      tokenIndex: 0,
      carry: "",
      prng: makePRNG(123456789)
    };

    const outFrag = document.createDocumentFragment();
    for (const child of tmp.childNodes) {
      outFrag.appendChild(processNode(child, state));
    }

    // Replace paragraph contents with tokenized version
    p.textContent = "";
    p.appendChild(outFrag);

    built = true;
  }

  btn.addEventListener("click", () => {
    if (!built) buildOnce();

    tokensOn = !tokensOn;
    p.classList.toggle("tokens-on", tokensOn);

    btn.setAttribute("aria-pressed", tokensOn ? "true" : "false");
    btn.textContent = tokensOn ? "Hide token highlights" : "Highlight tokens";
  });
})();
