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
  var REL_TAG = { partner: "Partner", parent: "Parent", kid: "Kid", coworker: "Coworker", friend: "Friend" };
  var KIND_TAG = { everyday: "Everyday", conflict: "They're upset with you", repair: "After a misstep" };
  var STORE_KEY = "empathy-flashcards-v1";

  var cardEl = document.getElementById("card");
  var progressEl = document.getElementById("progress");
  var filtersEl = document.getElementById("filters");

  // ---------- State (saved per device so you resume where you left off) ----------
  var state = load() || {};
  if (!RELS.some(function (r) { return r.key === state.filter; })) state.filter = "all";
  if (!validDeck(state.deck, state.filter)) newDeck();
  if (typeof state.pos !== "number" || state.pos < 0 || state.pos >= state.deck.length) state.pos = 0;
  state.revealed = false;

  function load() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)); } catch (e) { return null; }
  }
  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ filter: state.filter, deck: state.deck, pos: state.pos }));
    } catch (e) { /* storage unavailable: fine */ }
  }
  function idsFor(filter) {
    return CARDS.filter(function (c) { return filter === "all" || c.rel === filter; })
      .map(function (c) { return c.id; });
  }
  function validDeck(deck, filter) {
    if (!Array.isArray(deck)) return false;
    var ids = idsFor(filter);
    return deck.length === ids.length && deck.every(function (id) { return BY_ID[id] && ids.indexOf(id) !== -1; });
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function newDeck(avoidFirst) {
    state.deck = shuffle(idsFor(state.filter));
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

  function tags(c) {
    var t = el("div", "tags");
    t.appendChild(el("span", "tag", REL_TAG[c.rel] || c.rel));
    t.appendChild(el("span", "tag kind", KIND_TAG[c.kind] || c.kind));
    return t;
  }

  function render() {
    var c = BY_ID[state.deck[state.pos]];
    cardEl.textContent = "";
    // Restart the entrance animation.
    cardEl.style.animation = "none"; void cardEl.offsetWidth; cardEl.style.animation = "";
    cardEl.scrollTop = 0;

    if (!c) {
      cardEl.appendChild(el("p", "setup", "No cards found."));
      return;
    }

    cardEl.appendChild(tags(c));

    if (!state.revealed) {
      var body = el("div", "front-body");
      body.appendChild(el("p", "setup", c.setup));
      body.appendChild(el("p", "speaker", c.speaker + " says"));
      body.appendChild(el("p", "quote", "“" + c.quote + "”"));
      cardEl.appendChild(body);
      var hint = el("div", "hint");
      hint.appendChild(el("span", "dot"));
      hint.appendChild(el("span", null, "Say your response out loud, then tap"));
      cardEl.appendChild(hint);
      cardEl.setAttribute("aria-label", "Situation. Tap to see responses.");
    } else {
      var recap = el("div", "recap");
      recap.appendChild(el("p", "speaker", c.speaker));
      recap.appendChild(el("p", "quote", "“" + c.quote + "”"));
      cardEl.appendChild(recap);

      var ul = el("ul", "responses");
      c.responses.forEach(function (r) {
        var li = el("li");
        li.appendChild(el("span", "move", r.move));
        li.appendChild(el("p", "say", "“" + r.text + "”"));
        ul.appendChild(li);
      });
      cardEl.appendChild(ul);

      if (c.trap) {
        var trap = el("div", "trap");
        trap.appendChild(el("span", "move", "Trap to avoid · " + c.trap.type));
        var p = el("p");
        p.appendChild(el("s", null, "“" + c.trap.text + "”"));
        trap.appendChild(p);
        cardEl.appendChild(trap);
      }

      var hint2 = el("div", "hint");
      hint2.appendChild(el("span", null, "Tap for the next card"));
      cardEl.appendChild(hint2);
      cardEl.setAttribute("aria-label", "Responses. Tap for the next card.");
    }

    progressEl.textContent = (state.pos + 1) + " of " + state.deck.length;
  }

  function renderFilters() {
    filtersEl.textContent = "";
    RELS.forEach(function (r) {
      var b = el("button", "chip", r.label);
      b.type = "button";
      b.setAttribute("aria-pressed", String(state.filter === r.key));
      b.addEventListener("click", function () {
        if (state.filter === r.key) return;
        state.filter = r.key;
        state.revealed = false;
        newDeck();
        save();
        renderFilters();
        render();
      });
      filtersEl.appendChild(b);
    });
  }

  // ---------- Tap to advance ----------
  function advance() {
    // Ignore taps that end a text selection or a scroll-drag.
    if (window.getSelection && String(window.getSelection())) return;
    if (!state.revealed) {
      state.revealed = true;
    } else {
      state.revealed = false;
      var current = state.deck[state.pos];
      state.pos++;
      if (state.pos >= state.deck.length) newDeck(current);
      save();
    }
    render();
  }
  cardEl.addEventListener("click", advance);
  cardEl.addEventListener("keydown", function (e) {
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

  renderFilters();
  render();
  save();
})();
