/* =========================================================
   GeefGas – exam-data.js
   Examen 1 (40 vragen)
   Afbeeldingen: assets/q01.PNG t/m assets/q40.PNG (zoals jij uploadt)
   Inclusief klik-vragen (voorrang) waarbij je op de foto klikt.
   ========================================================= */

const QUESTIONS = [
  // 1–5: KLIK-VRAGEN (voorrang/volgorde)
  {
    id: 1,
    type: "order",
    category: "Voorrang",
    question: "Klik in de juiste volgorde wie er mag rijden.",
    // jouw testimage (mag PNG/JPG, examen.html zoekt meerdere varianten)
    image: "assets/q01.PNG",
    // hotspots: percentages (0–100). Jij kunt later makkelijk positions tunen.
    hotspots: [
      { key: "A", label: "A", x: 18, y: 60 }, // fietser
      { key: "B", label: "B", x: 55, y: 78 }, // auto onder
      { key: "C", label: "C", x: 78, y: 50 }  // auto links
    ],
    correctOrder: ["A", "B", "C"],
    explanation: "Op een gelijkwaardig kruispunt gaat verkeer van rechts voor. Daarna pas jij, daarna de ander."
  },
  {
    id: 2,
    type: "order",
    category: "Voorrang",
    question: "Klik in de juiste volgorde wie er mag rijden.",
    image: "assets/q02.PNG",
    hotspots: [
      { key: "A", label: "A", x: 25, y: 65 },
      { key: "B", label: "B", x: 70, y: 45 },
      { key: "C", label: "C", x: 55, y: 25 }
    ],
    correctOrder: ["C", "B", "A"],
    explanation: "Rechtdoorgaand verkeer gaat voor. Daarna pas afslaand verkeer."
  },
  {
    id: 3,
    type: "order",
    category: "Rotonde / voorrang",
    question: "Klik in de juiste volgorde wie er mag rijden.",
    image: "assets/q03.PNG",
    hotspots: [
      { key: "A", label: "A", x: 60, y: 40 }, // auto op rotonde
      { key: "B", label: "B", x: 20, y: 70 }, // auto voor haaientanden
      { key: "C", label: "C", x: 50, y: 70 }  // fietser op rotonde
    ],
    correctOrder: ["A", "C", "B"],
    explanation: "Verkeer op de rotonde gaat voor. Vervolgens de fietser op de rotonde. Jij pas daarna."
  },
  {
    id: 4,
    type: "order",
    category: "Voetganger / afslaan",
    question: "Klik in de juiste volgorde wie er mag rijden.",
    image: "assets/q04.PNG",
    hotspots: [
      { key: "A", label: "A", x: 55, y: 60 }, // auto rechtdoor
      { key: "B", label: "B", x: 28, y: 70 }, // auto linksaf
      { key: "C", label: "C", x: 70, y: 30 }  // voetganger
    ],
    correctOrder: ["A", "C", "B"],
    explanation: "Rechtdoorgaand verkeer eerst. Daarna voetganger. Linksaf als laatste."
  },
  {
    id: 5,
    type: "order",
    category: "Zebrapad / voorrang",
    question: "Klik in de juiste volgorde wie er mag rijden.",
    image: "assets/q05.PNG",
    hotspots: [
      { key: "A", label: "A", x: 55, y: 35 }, // voetganger
      { key: "B", label: "B", x: 35, y: 70 }, // auto
      { key: "C", label: "C", x: 72, y: 75 }  // fietser
    ],
    correctOrder: ["A", "B", "C"],
    explanation: "Voetgangers op een zebrapad laat je voorgaan. Daarna pas de overige voertuigen."
  },

  // 6–40: meerkeuze (voor nu)
  {
    id: 6,
    type: "mcq",
    category: "Verkeersinzicht",
    question: "Je rijdt in druk verkeer. Wat is juist?",
    answers: [
      "Je past je snelheid aan om mee te rijden met het verkeer",
      "Je probeert zo min mogelijk te remmen",
      "Je rijdt rustig en anticipeert op andere weggebruikers"
    ],
    correct: 2,
    image: "assets/q06.PNG",
    explanation: "Anticiperen en rustig rijden voorkomt onnodig remmen en vergroot de veiligheid."
  }
];

// automatisch aanvullen tot 40 vragen (placeholder-vragen + image pad)
for (let i = QUESTIONS.length + 1; i <= 40; i++) {
  QUESTIONS.push({
    id: i,
    type: "mcq",
    category: "Verkeersinzicht",
    question: `Voorbeeldvraag ${i}. Wat is het juiste rijgedrag?`,
    answers: [
      "Je rijdt door zonder rekening te houden met anderen",
      "Je anticipeert op andere weggebruikers",
      "Je rijdt zo snel mogelijk"
    ],
    correct: 1,
    image: `assets/q${String(i).padStart(2, "0")}.PNG`,
    explanation: "Goed rijgedrag betekent anticiperen op andere weggebruikers."
  });
}

const EXAM_SETS = {
  taxi_v1: {
    id: "taxi_v1",
    title: "Examen 1 (40 vragen)",
    durationSec: 1500,
    questionIds: QUESTIONS.map(q => q.id)
  }
};

window.QUESTIONS = QUESTIONS;
window.EXAM_SETS = EXAM_SETS;
