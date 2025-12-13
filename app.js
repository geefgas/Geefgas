/* GeefGas v1 – simple interactions (menu, demo modal, timer, start buttons) */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

/* Year */
$("#year").textContent = String(new Date().getFullYear());

/* Mobile menu */
const mobileBtn = $("#mobileMenuBtn");
const mobileMenu = $("#mobileMenu");

function toggleMobileMenu(forceOpen = null){
  const isHidden = mobileMenu.hasAttribute("hidden");
  const open = forceOpen === null ? isHidden : forceOpen;
  if(open){
    mobileMenu.removeAttribute("hidden");
    mobileBtn.setAttribute("aria-expanded","true");
  }else{
    mobileMenu.setAttribute("hidden","");
    mobileBtn.setAttribute("aria-expanded","false");
  }
}
mobileBtn?.addEventListener("click", () => toggleMobileMenu());
$$(".mobilemenu__link, .mobilemenu__cta").forEach(a=>{
  a.addEventListener("click", () => toggleMobileMenu(false));
});

/* Hero timer (fake ticking) */
(function heroTimer(){
  const el = $("#heroTimer");
  if(!el) return;

  let seconds = 24 * 60 + 58;
  setInterval(() => {
    seconds = Math.max(0, seconds - 1);
    const m = String(Math.floor(seconds / 60)).padStart(2,"0");
    const s = String(seconds % 60).padStart(2,"0");
    el.textContent = `${m}:${s}`;
    if(seconds === 0) seconds = 24 * 60 + 58;
  }, 1000);
})();

/* Start buttons (later koppel je dit aan Mollie checkout) */
$$(".startBtn").forEach(btn=>{
  btn.addEventListener("click", () => {
    const days = btn.getAttribute("data-days");
    alert(
      `Pakket geselecteerd: ${days} dagen.\n\n` +
      `Volgende stap (later): doorsturen naar betaling (Mollie) en account aanmaken.\n\n` +
      `Nu is dit een demo-landingspagina.`
    );
  });
});

/* Demo modal + quiz */
const demoModal = $("#demoModal");
const openDemoBtn = $("#openDemoBtn");
const demoQuestionEl = $("#demoQuestion");
const demoAnswersEl = $("#demoAnswers");
const demoProgressEl = $("#demoProgress");
const demoTimerEl = $("#demoTimer");
const demoNextBtn = $("#demoNextBtn");
const demoResult = $("#demoResult");
const demoScoreText = $("#demoScoreText");
const demoRestartBtn = $("#demoRestartBtn");
const demoBox = $(".demo");

const demoData = [
  {
    q: "Wat betekent dit bord?",
    answers: ["verkeersdrempel", "werk in uitvoering", "slecht wegdek"],
    correct: 0,
    explanation: "Dit is een demo-vraag. In de echte cursus krijg je uitleg per vraag + voorbeelden."
  },
  {
    q: "Wie heeft voorrang in deze situatie?",
    answers: ["De taxi", "De fietser van rechts", "De tegenligger"],
    correct: 1,
    explanation: "Demo. In jouw echte set tonen we altijd de regel + reden + tip."
  },
  {
    q: "Wat is het beste rijgedrag bij slecht zicht?",
    answers: ["Snelheid aanpassen en extra afstand", "Zelfde snelheid aanhouden", "Dichter op je voorligger rijden"],
    correct: 0,
    explanation: "Demo. In de echte cursus werken we met thema’s en herhalen via foutenlijst."
  }
];

let demoIndex = 0;
let demoScore = 0;
let demoSeconds = 120;
let demoInterval = null;
let selected = null;

function renderDemo(){
  const item = demoData[demoIndex];
  demoQuestionEl.textContent = item.q;
  demoProgressEl.textContent = `Vraag ${demoIndex+1} van ${demoData.length}`;
  demoAnswersEl.innerHTML = "";
  selected = null;

  item.answers.forEach((txt, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "answer";
    btn.innerHTML = `<span class="answer__key">${String.fromCharCode(65+i)}</span> ${txt}`;
    btn.addEventListener("click", () => {
      // unselect all
      $$("#demoAnswers .answer").forEach(b => b.style.outline = "none");
      btn.style.outline = "2px solid rgba(224,184,74,.55)";
      selected = i;
    });
    demoAnswersEl.appendChild(btn);
  });

  demoNextBtn.textContent = (demoIndex === demoData.length - 1) ? "Afronden" : "Volgende";
}

function startDemoTimer(){
  stopDemoTimer();
  demoSeconds = 120;
  demoTimerEl.textContent = "02:00";
  demoInterval = setInterval(() => {
    demoSeconds = Math.max(0, demoSeconds - 1);
    const m = String(Math.floor(demoSeconds / 60)).padStart(2,"0");
    const s = String(demoSeconds % 60).padStart(2,"0");
    demoTimerEl.textContent = `${m}:${s}`;
    if(demoSeconds === 0){
      finishDemo();
    }
  }, 1000);
}
function stopDemoTimer(){
  if(demoInterval) clearInterval(demoInterval);
  demoInterval = null;
}

function openDemo(){
  demoIndex = 0;
  demoScore = 0;
  demoResult.hidden = true;
  demoBox.hidden = false;

  renderDemo();
  startDemoTimer();
  demoModal.showModal();
}

function finishDemo(){
  stopDemoTimer();
  demoBox.hidden = true;
  demoResult.hidden = false;
  demoScoreText.textContent = `Je score: ${demoScore}/${demoData.length}. Wil je onbeperkt oefenen met uitleg per vraag? Kies dan een pakket.`;
}

openDemoBtn?.addEventListener("click", openDemo);

demoNextBtn?.addEventListener("click", () => {
  if(selected === null){
    alert("Kies eerst een antwoord.");
    return;
  }
  if(selected === demoData[demoIndex].correct) demoScore++;

  if(demoIndex < demoData.length - 1){
    demoIndex++;
    renderDemo();
  }else{
    finishDemo();
  }
});

demoRestartBtn?.addEventListener("click", () => {
  demoIndex = 0;
  demoScore = 0;
  demoResult.hidden = true;
  demoBox.hidden = false;
  renderDemo();
  startDemoTimer();
});

/* Close modal cleanup */
demoModal?.addEventListener("close", () => {
  stopDemoTimer();
});

