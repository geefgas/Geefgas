/* =========================================================
   GeefGas — exam-data.js
   Auto + Taxi examens
   ========================================================= */

(function () {

  /* =========================
     AUTO — EXAMEN 1
     ========================= */
  const AUTO_EXAMEN_1 = {
    id: "auto-examen-1",
    title: "Auto Examen 1",
    category: "Auto",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: Array.from({ length: 40 }, (_, i) => ({
      id: i + 1,
      type: "mcq",
      category: "Verkeer",
      prompt: `Auto vraag ${i + 1}: Wat is hier het juiste verkeersgedrag?`,
      options: ["A", "B", "C"],
      correctIndex: 1,
      explanation: ""
    }))
  };

  /* =========================
     TAXI — EXAMENS 1 t/m 15
     ========================= */
  function makeTaxiExam(nr) {
    return {
      id: `taxi-examen-${nr}`,
      title: `Taxi Examen ${nr}`,
      category: "Taxi",
      durationMinutes: 30,
      passMinCorrect: 32,
      questions: Array.from({ length: 40 }, (_, i) => ({
        id: i + 1,
        type: "mcq",
        category: "Taxi",
        prompt: `Taxi Examen ${nr} – Vraag ${i + 1}: Wat is het juiste handelen als taxichauffeur?`,
        options: ["A", "B (juist)", "C"],
        correctIndex: 1,
        explanation: ""
      }))
    };
  }

  const TAXI_EXAMENS = [];
  for (let i = 1; i <= 15; i++) {
    TAXI_EXAMENS.push(makeTaxiExam(i));
  }

  /* =========================
     EXPORT
     ========================= */
  const data = {
    exams: [
      AUTO_EXAMEN_1,
      ...TAXI_EXAMENS
    ]
  };

  window.EXAM_DATA = data;
  window.EXAMS = data.exams;
  window.exams = data.exams;
  window.ggExams = data.exams;

})();
