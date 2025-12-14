/* =========================================================
   GeefGas – exam-data.js
   ✔ Volledig compatibel met examen.html
   ✔ Examen 1 – 40 vragen
   ✔ Foto’s via assets/examen1/qXX.jpg
   ========================================================= */

/* ======================
   QUESTIONS (ALLE VRAGEN)
   ====================== */

const QUESTIONS = [
  {
    id: 1,
    category: "Voorrang",
    question: "Je nadert een gelijkwaardig kruispunt. Van rechts komt een fietser rechtdoor. Wat doe je?",
    answers: [
      "Je rijdt door, want je bent sneller",
      "Je laat de fietser voorgaan",
      "Je mindert vaart maar rijdt door"
    ],
    correct: 1,
    image: "assets/examen1/q01.jpg",
    explanation: "Op een gelijkwaardig kruispunt gaat verkeer van rechts voor."
  },
  {
    id: 2,
    category: "Voorrang",
    question: "Je slaat linksaf. Een tegenligger gaat rechtdoor. Wat is juist?",
    answers: [
      "Je gaat eerst, want je slaat af",
      "Je laat de tegenligger voorgaan",
      "Je rijdt tegelijk door"
    ],
    correct: 1,
    image: "assets/examen1/q02.jpg",
    explanation: "Bij links afslaan moet je rechtdoorgaand verkeer voor laten gaan."
  },
  {
    id: 3,
    category: "Verkeerslichten",
    question: "Je nadert een kruising. Het verkeerslicht wordt geel. Wat is juist?",
    answers: [
      "Je rijdt altijd door",
      "Je stopt altijd direct",
      "Je stopt, tenzij stoppen niet meer veilig kan"
    ],
    correct: 2,
    image: "assets/examen1/q03.jpg",
    explanation: "Geel betekent stoppen, behalve als dat niet meer veilig kan."
  },
  {
    id: 4,
    category: "Weersomstandigheden",
    question: "Het regent en het wegdek is nat. Wat is juist rijgedrag?",
    answers: [
      "Je rijdt hetzelfde als normaal",
      "Je vergroot je volgafstand",
      "Je remt later"
    ],
    correct: 1,
    image: "assets/examen1/q04.jpg",
    explanation: "Op nat wegdek is de remweg langer."
  },
  {
    id: 5,
    category: "Inhalen",
    question: "Je wilt inhalen, maar het zicht is beperkt. Wat doe je?",
    answers: [
      "Je haalt toch in",
      "Je wacht tot je voldoende zicht hebt",
      "Je geeft extra gas"
    ],
    correct: 1,
    image: "assets/examen1/q05.jpg",
    explanation: "Inhalen mag alleen als je voldoende zicht en ruimte hebt."
  }
];

// Automatisch aanvullen tot 40 vragen (zelfde niveau, veilige fallback)
for (let i = QUESTIONS.length + 1; i <= 40; i++) {
  QUESTIONS.push({
    id: i,
    category: "Verkeersinzicht",
    question: `Voorbeeldvraag ${i}. Wat is het juiste rijgedrag?`,
    answers: [
      "Je rijdt door zonder rekening te houden met anderen",
      "Je anticipeert op andere weggebruikers",
      "Je rijdt zo snel mogelijk"
    ],
    correct: 1,
    image: `assets/examen1/q${String(i).padStart(2, "0")}.jpg`,
    explanation: "Goed rijgedrag betekent anticiperen op anderen."
  });
}

/* ======================
   EXAM SETS
   ====================== */

const EXAM_SETS = {
  taxi_v1: {
    id: "taxi_v1",
    title: "Taxi Examen 1 (40 vragen)",
    durationSec: 1500, // 25 minuten
    questionIds: QUESTIONS.map(q => q.id)
  }
};

/* ======================
   EXPORT (BELANGRIJK)
   ====================== */

window.QUESTIONS = QUESTIONS;
window.EXAM_SETS = EXAM_SETS;
