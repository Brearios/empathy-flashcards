(function () {
  "use strict";

  var CARDS = window.CARDS || [];
  var BY_ID = {};
  CARDS.forEach(function (c) { BY_ID[c.id] = c; });

  var RELS = [
    { key: "all", label: "All" },
    { key: "partner", label: "Partner" },
    { key: "parent", label: "Parents" },
    { key: "kid", label: "Kids" },
    { key: "coworker", label: "Coworkers" },
    { key: "friend", label: "Friends" }
  ];
  var MODES = [
    { key: "mixed", label: "Mixed" },
    { key: "say", label: "Say it" },
    { key: "choice", label: "Pick one" }
  ];
  var REL_TAG = { partner: "Partner", parent: "Parent", kid: "Kid", coworker: "Coworker", friend: "Friend" };
  var KIND_TAG = { everyday: "Everyday", conflict: "They're upset with you", repair: "After a misstep" };
  var TONE_LABEL = { green: "Most empathetic", yellow: "Won't hurt, won't help" };
  var VERDICT = {
    green: "Nice. That's the most empathetic reply.",
    yellow: "Close. It won't hurt, but it won't help much.",
    red: "That one falls into a trap."
  };
  var STORE_KEY = "empathy-flashcards-v1";

  var cardEl = document.getElementById("card");
  var progressEl = document.getElementById("progress");
  var filtersEl = document.getElementById("filters");
  var modesEl = document.getElementById("modes");

  function isChoice(c) { return c && c.type === "choice"; }

  // ---------- State (saved per device so you resume where you left off) ----------
  var state = load() || {};
  if (!RELS.some(function (r) { return r.key === state.filter; })) state.filter = "all";
  if (!MODES.some(function (m) { return m.key === state.mode; })) state.mode = "mixed";
  if (!validDeck(state.deck)) newDeck();
  if (typeof state.pos !== "number" || state.pos < 0 || state.pos >= state.deck.length) state.pos = 0;
  resetCard();

  function resetCard() {
    state.revealed = false;   // "say it" cards: responses shown
    state.chosen = null;      // "pick one" cards: index of the tapped option
    state.order = null;       // "pick one" cards: shuffled option order
  }
  function load() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)); } catch (e) { return null; }
  }
  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ filter: state.filter, mode: state.mode, deck: state.deck, pos: state.pos }));
    } catch (e) { /* storage unavailable: fine */ }
  }
  function ids() {
    return CARDS.filter(function (c) {
      if (state.filter !== "all" && c.rel !== state.filter) return false;
      if (state.mode === "say" && isChoice(c)) return false;
      if (state.mode === "choice" && !isChoice(c)) return false;
      return true;
    }).map(function (c) { return c.id; });
  }
  function validDeck(deck) {
    if (!Array.isArray(deck)) return false;
    var want = ids();
    return deck.length === want.length && deck.every(function (id) { return want.indexOf(id) !== -1; });
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function newDeck(avoidFirst) {
    state.deck = shuffle(ids());
    // Don't repeat the card you just saw when the deck reshuffles.
    if (avoidFirst && state.deck.length > 1 && state.deck[0] === avoidFirst) {
      state.deck.push(state.deck.shift());
    }
    state.pos = 0;
  }

  // ---------- Rendering ----------
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function q(text) { return "“" + text + "”"; }

  function tags(c) {
    var t = el("div", "tags");
    t.appendChild(el("span", "tag", REL_TAG[c.rel] || c.rel));
    t.appendChild(el("span", "tag kind", KIND_TAG[c.kind] || c.kind));
    if (isChoice(c)) t.appendChild(el("span", "tag kind", "Pick one"));
    return t;
  }
  function hint(text, dot) {
    var h = el("div", "hint");
    if (dot) h.appendChild(el("span", "dot"));
    h.appendChild(el("span", null, text));
    return h;
  }
  function situation(c) {
    var body = el("div", "front-body");
    body.appendChild(el("p", "setup", c.setup));
    body.appendChild(el("p", "speaker", c.speaker + " says"));
    body.appendChild(el("p", "quote", q(c.quote)));
    return body;
  }

  function render(animate) {
    var c = BY_ID[state.deck[state.pos]];
    cardEl.textContent = "";
    cardEl.classList.toggle("choice-front", isChoice(c));
    if (animate !== false) {
      // Restart the entrance animation.
      cardEl.style.animation = "none"; void cardEl.offsetWidth; cardEl.style.animation = "";
      cardEl.scrollTop = 0;
    }

    if (!c) {
      cardEl.appendChild(el("p", "setup", "No cards match these filters."));
      progressEl.textContent = "";
      return;
    }

    cardEl.appendChild(tags(c));
    if (isChoice(c)) renderChoice(c); else renderSay(c);
    progressEl.textContent = (state.pos + 1) + " of " + state.deck.length;
  }

  function renderSay(c) {
    if (!state.revealed) {
      cardEl.appendChild(situation(c));
      cardEl.appendChild(hint("Say your response out loud, then tap", true));
      cardEl.setAttribute("aria-label", "Situation. Tap to see responses.");
      return;
    }
    var recap = el("div", "recap");
    recap.appendChild(el("p", "speaker", c.speaker));
    recap.appendChild(el("p", "quote", q(c.quote)));
    cardEl.appendChild(recap);

    var ul = el("ul", "responses");
    c.responses.forEach(function (r) {
      var li = el("li");
      li.appendChild(el("span", "move", r.move));
      li.appendChild(el("p", "say", q(r.text)));
      ul.appendChild(li);
    });
    cardEl.appendChild(ul);

    if (c.trap) {
      var trap = el("div", "trap");
      trap.appendChild(el("span", "move", "Trap to avoid · " + c.trap.type));
      var p = el("p");
      p.appendChild(el("s", null, q(c.trap.text)));
      trap.appendChild(p);
      cardEl.appendChild(trap);
    }
    cardEl.appendChild(hint("Tap for the next card"));
    cardEl.setAttribute("aria-label", "Responses. Tap for the next card.");
  }

  function renderChoice(c) {
    if (!state.order) state.order = shuffle(c.options.map(function (_, i) { return i; }));
    var chosen = state.chosen;
    cardEl.appendChild(situation(c));

    var ul = el("ul", "options");
    state.order.forEach(function (i) {
      var o = c.options[i];
      var li = el("li");
      var b = el("button", "opt");
      b.type = "button";
      if (chosen != null) {
        b.classList.add(o.tone);
        if (i === chosen) b.classList.add("picked");
        b.appendChild(el("span", "lbl", o.tone === "red" ? "Trap · " + o.trap : TONE_LABEL[o.tone]));
      }
      b.appendChild(el("span", null, o.text));
      if (chosen != null && o.note && o.tone !== "red") b.appendChild(el("span", "note", o.note));
      b.addEventListener("click", function (e) {
        if (state.chosen != null) return; // already answered: let the tap move to the next card
        e.stopPropagation();
        state.chosen = i;
        render(false);
      });
      li.appendChild(b);
      ul.appendChild(li);
    });
    cardEl.appendChild(ul);

    if (chosen == null) {
      cardEl.appendChild(hint("Tap the reply you'd give", true));
      cardEl.setAttribute("aria-label", "Pick the reply you would give.");
    } else {
      var tone = c.options[chosen].tone;
      var v = el("p", "verdict " + tone, VERDICT[tone]);
      cardEl.insertBefore(v, ul);
      cardEl.appendChild(hint("Tap for the next card"));
      cardEl.setAttribute("aria-label", VERDICT[tone] + " Tap for the next card.");
    }
  }

  function chips(container, items, key, cls) {
    container.textContent = "";
    items.forEach(function (r) {
      var b = el("button", "chip" + (cls ? " " + cls : ""), r.label);
      b.type = "button";
      b.setAttribute("aria-pressed", String(state[key] === r.key));
      b.addEventListener("click", function () {
        if (state[key] === r.key) return;
        state[key] = r.key;
        resetCard();
        newDeck();
        save();
        renderChips();
        render();
      });
      container.appendChild(b);
    });
  }
  function renderChips() {
    chips(filtersEl, RELS, "filter");
    chips(modesEl, MODES, "mode", "mode");
  }

  // ---------- Tap to advance ----------
  function advance() {
    // Ignore taps that end a text selection.
    if (window.getSelection && String(window.getSelection())) return;
    var c = BY_ID[state.deck[state.pos]];
    if (!c) return;
    if (isChoice(c)) {
      if (state.chosen == null) return; // must pick a reply first
    } else if (!state.revealed) {
      state.revealed = true;
      render();
      return;
    }
    var current = state.deck[state.pos];
    resetCard();
    state.pos++;
    if (state.pos >= state.deck.length) newDeck(current);
    save();
    render();
  }
  cardEl.addEventListener("click", advance);
  cardEl.addEventListener("keydown", function (e) {
    if (e.target !== cardEl) return;
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); advance(); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" && !document.querySelector("dialog[open]")) advance();
  });

  // ---------- Dialogs ----------
  function wireDialog(dlg) {
    dlg.addEventListener("click", function (e) {
      if (e.target === dlg || e.target.hasAttribute("data-close")) dlg.close();
    });
  }
  var helpDlg = document.getElementById("helpDlg");
  var installDlg = document.getElementById("installDlg");
  wireDialog(helpDlg);
  wireDialog(installDlg);
  document.getElementById("helpBtn").addEventListener("click", function () { helpDlg.showModal(); });

  // ---------- Add to home screen ----------
  var installBtn = document.getElementById("installBtn");
  var standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  if (standalone) installBtn.hidden = true;

  var ua = navigator.userAgent || "";
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  var isAndroid = /Android/.test(ua);
  var ios = document.getElementById("iosSteps");
  var android = document.getElementById("androidSteps");
  // Show the steps for this device first.
  if (isAndroid) { android.classList.add("first"); ios.parentNode.insertBefore(android, ios); }
  else if (isIOS) { ios.classList.add("first"); }

  var deferredPrompt = null;
  var installNow = document.getElementById("installNow");
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferredPrompt = e;
    installNow.hidden = false;
  });
  document.getElementById("installPromptBtn").addEventListener("click", function () {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.finally(function () {
      deferredPrompt = null;
      installNow.hidden = true;
      installDlg.close();
    });
  });
  window.addEventListener("appinstalled", function () { installBtn.hidden = true; });
  installBtn.addEventListener("click", function () { installDlg.showModal(); });

  // First visit: show how it works once.
  try {
    if (!localStorage.getItem(STORE_KEY + ":seenHelp")) {
      localStorage.setItem(STORE_KEY + ":seenHelp", "1");
      helpDlg.showModal();
    }
  } catch (e) { /* ignore */ }

  // ---------- Offline support ----------
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }

  renderChips();
  render();
  save();
})();
