/* GeefGas v1 – testmodus (zonder betaling) */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

/* Jaar in footer */
const yearEl = $("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* Mobile menu */
const mobileBtn = $("#mobileMenuBtn");
const mobileMenu = $("#mobileMenu");

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener("click", () => {
    const open = mobileMenu.hasAttribute("hidden");
    if (open) {
      mobileMenu.removeAttribute("hidden");
      mobileBtn.setAttribute("aria-expanded", "true");
    } else {
      mobileMenu.setAttribute("hidden", "");
      mobileBtn.setAttribute("aria-expanded", "false");
    }
  });
}

/* ===========================
   PAKKETKNOPPEN → TESTEN
   =========================== */
$$(".startBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    // In testfase: direct naar examens
    window.location.href = "examens.html";
  });
});

/* ===========================
   DEMO MODAL
   =========================== */
const demoModal = $("#demoModal");
const openDemoBtn = $("#openDemoBtn");

const demoQuestions = [
  {
    q: "Wie heeft voorrang op dit kruispunt?",
    a: ["De taxi", "De fietser van rechts", "De tegenligger"],
    c: 1
  },
  {
    q: "Wat moet je doen bij slecht zicht?",
    a: [
      "Zelfde snelheid aanhouden",
      "Snelheid aanpassen en afstand vergroten",
      "Dichter op je voorligger rijden"
    ],
    c: 1
  },
  {
    q: "Wat betekent een doorgetrokken streep?",
    a: ["Inhalen toegestaan", "Inhalen verboden", "Alleen voor taxi"],
    c: 1
  }
];

let demoIndex = 0;
let demoScore = 0;

function openDemo() {
  if (!demoModal) return;
  demoIndex = 0;
  demoScore = 0;
  renderDemo();
  demoModal.showModal();
}

function renderDemo() {
  const q = demoQuestions[demoIndex];
  $("#demoQuestion").textContent = q.q;
  $("#demoProgress").textContent = `Vraag ${demoIndex + 1} van ${demoQuestions.length}`;

  const answersEl = $("#demoAnswers");
  answersEl.innerHTML = "";

  q.a.forEach((txt, i) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.innerHTML = `<span class="answer__key">${String.fromCharCode(65 + i)}</span>${txt}`;
    btn.onclick = () => {
      if (i === q.c) demoScore++;
      demoIndex++;
      if (demoIndex < demoQuestions.length) {
        renderDemo();
      } else {
        finishDemo();
      }
    };
    answersEl.appendChild(btn);
  });
}

function finishDemo() {
  $("#demoScoreText").textContent =
    `Je score: ${demoScore}/${demoQuestions.length}.  
     Wil je onbeperkt oefenen? Kies een pakket.`;

  $(".demo").hidden = true;
  $("#demoResult").hidden = false;
}

if (openDemoBtn) {
  openDemoBtn.addEventListener("click", openDemo);
}
