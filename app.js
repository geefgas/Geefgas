/* =========================================================
   GeefGas – app.js
   - Mobile menu toggle (stabiel)
   - Best NL voice selection + save preference
   ========================================================= */

(function(){
  // ---------- Mobile menu ----------
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      const open = menu.hasAttribute("hidden") ? false : true;
      if (open) {
        menu.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
      } else {
        menu.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
      }
    });

    // close menu when clicking a link
    menu.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a) {
        menu.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---------- Voice helpers ----------
  function pickBestNLVoice(voices){
    const nl = voices.filter(v => (v.lang || "").toLowerCase().startsWith("nl"));
    const list = nl.length ? nl : voices;

    // prefer human-like voices on iOS/macOS (Siri) and higher-quality voices
    const prefs = ["siri", "enhanced", "premium", "natural", "neural"];
    for (const p of prefs) {
      const found = list.find(v => (v.name || "").toLowerCase().includes(p));
      if (found) return found;
    }
    return list[0] || null;
  }

  // Warm up voices list (some browsers populate async)
  function loadVoices(){
    return new Promise(resolve => {
      if (!("speechSynthesis" in window)) return resolve([]);
      let voices = speechSynthesis.getVoices();
      if (voices && voices.length) return resolve(voices);

      const onChange = () => {
        voices = speechSynthesis.getVoices();
        speechSynthesis.removeEventListener("voiceschanged", onChange);
        resolve(voices || []);
      };
      speechSynthesis.addEventListener("voiceschanged", onChange);
      setTimeout(() => resolve(speechSynthesis.getVoices() || []), 800);
    });
  }

  // Store a good default voice once
  (async function initVoice(){
    if (!("speechSynthesis" in window)) return;

    const saved = localStorage.getItem("gg_voiceName");
    if (saved) return; // already chosen

    const voices = await loadVoices();
    const best = pickBestNLVoice(voices);
    if (best) localStorage.setItem("gg_voiceName", best.name);
  })();

})();
