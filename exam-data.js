/* GeefGas — exam-data.js
   Dit bestand bevat ALLEEN Examen 1 (40 vragen).
   De 2 oude examens zijn hiermee verwijderd.
   We exporteren meerdere “namen” zodat je app.js/examens.html altijd iets vindt.
*/

(function () {
  const EXAMEN_1 = {
    id: "examen-1",
    title: "Examen 1 (40 vragen)",
    category: "Auto",
    durationMinutes: 30,
    passMinCorrect: 32, // max 8 fouten
    questions: [
      // 1–5: klikvolgorde
      {
        id: 1,
        type: "order",
        prompt: "Klik in de juiste volgorde wie er mag rijden.",
        image: "assets/examen1/q01.jpg",
        entities: [
          { key: "A", label: "Fietser (van rechts)" },
          { key: "B", label: "Auto (van onder)" },
          { key: "C", label: "Auto (van links)" }
        ],
        correctOrder: ["A", "B", "C"]
      },
      {
        id: 2,
        type: "order",
        prompt: "Klik in de juiste volgorde wie er mag rijden.",
        image: "assets/examen1/q02.jpg",
        entities: [
          { key: "A", label: "Auto (linksaf)" },
          { key: "B", label: "Auto (tegenligger rechtdoor)" },
          { key: "C", label: "Fietser (rechtdoor)" }
        ],
        correctOrder: ["C", "B", "A"]
      },
      {
        id: 3,
        type: "order",
        prompt: "Klik in de juiste volgorde wie er mag rijden.",
        image: "assets/examen1/q03.jpg",
        entities: [
          { key: "A", label: "Auto op rotonde" },
          { key: "B", label: "Auto vóór haaientanden" },
          { key: "C", label: "Fietser op rotonde" }
        ],
        correctOrder: ["A", "C", "B"]
      },
      {
        id: 4,
        type: "order",
        prompt: "Klik in de juiste volgorde wie er mag rijden.",
        image: "assets/examen1/q04.jpg",
        entities: [
          { key: "A", label: "Auto (rechtdoor)" },
          { key: "B", label: "Auto (linksaf)" },
          { key: "C", label: "Voetganger (oversteken)" }
        ],
        correctOrder: ["A", "C", "B"]
      },
      {
        id: 5,
        type: "order",
        prompt: "Klik in de juiste volgorde wie er mag rijden.",
        image: "assets/examen1/q05.jpg",
        entities: [
          { key: "A", label: "Voetganger (zebrapad)" },
          { key: "B", label: "Auto (rechtdoor)" },
          { key: "C", label: "Fietser (rechtdoor)" }
        ],
        correctOrder: ["A", "B", "C"]
      },

      // 6–10: klassiek
      {
        id: 6,
        type: "mcq",
        prompt: "Je rijdt in druk verkeer. Wat is juist?",
        image: "assets/examen1/q06.jpg",
        options: [
          "Je past je snelheid aan om mee te rijden met het verkeer",
          "Je probeert zo min mogelijk te remmen",
          "Je rijdt rustig en anticipeert op andere weggebruikers"
        ],
        correctIndex: 2
      },
      {
        id: 7,
        type: "mcq",
        prompt: "Je nadert een kruising zonder verkeersborden. Van rechts nadert verkeer. Wat is juist?",
        image: "assets/examen1/q07.jpg",
        options: [
          "Je rijdt door en mindert vaart",
          "Je rijdt door omdat er geen borden staan",
          "Je laat verkeer van rechts voorgaan"
        ],
        correctIndex: 2
      },
      {
        id: 8,
        type: "mcq",
        prompt: "Je nadert een kruising met verkeerslichten. Het verkeerslicht wordt geel. Wat is juist?",
        image: "assets/examen1/q08.jpg",
        options: [
          "Je rijdt door",
          "Je rijdt door als je niet hard hoeft te remmen",
          "Je stopt, tenzij stoppen niet meer veilig kan"
        ],
        correctIndex: 2
      },
      {
        id: 9,
        type: "mcq",
        prompt: "Je rijdt op een nat wegdek. Wat is juist?",
        image: "assets/examen1/q09.jpg",
        options: [
          "Je houdt dezelfde volgafstand",
          "Je remt later dan normaal",
          "Je vergroot je volgafstand"
        ],
        correctIndex: 2
      },
      {
        id: 10,
        type: "mcq",
        prompt: "Je wilt inhalen, maar je hebt beperkt zicht. Wat is juist?",
        image: "assets/examen1/q10.jpg",
        options: [
          "Je haalt in als je snelheid verhoogt",
          "Je begint met inhalen",
          "Je wacht tot je goed zicht hebt"
        ],
        correctIndex: 2
      },

      // 11–20 (met klikvragen: 12,14,16,19)
      {
        id: 11,
        type: "mcq",
        prompt: "Je rijdt op een smalle weg. Tegemoetkomend verkeer nadert. Wat is juist?",
        image: "assets/examen1/q11.jpg",
        options: [
          "Je rijdt door om doorstroming te houden",
          "Je rijdt door en mindert vaart",
          "Je vermindert snelheid en houdt rekening met het tegemoetkomend verkeer"
        ],
        correctIndex: 2
      },
      {
        id: 12,
        type: "order",
        prompt: "Klik in de juiste volgorde wie er mag rijden.",
        image: "assets/examen1/q12.jpg",
        entities: [
          { key: "A", label: "Auto vóór versmalling" },
          { key: "B", label: "Auto al in versmalling" },
          { key: "C", label: "Fietser achter B" }
        ],
        correctOrder: ["B", "C", "A"]
      },
      {
        id: 13,
        type: "mcq",
        prompt: "Je nadert een spoorwegovergang zonder slagbomen. Wat is juist?",
        image: "assets/examen1/q13.jpg",
        options: [
          "Je rijdt door als je geen trein ziet",
          "Je mindert alleen vaart",
          "Je steekt alleen over als het veilig is"
        ],
        correctIndex: 2
      },
      {
        id: 14,
        type: "order",
        prompt: "Klik in de juiste volgorde wie er mag rijden.",
        image: "assets/examen1/q14.jpg",
        entities: [
          { key: "A", label: "Auto van rechts (rechtdoor)" },
          { key: "B", label: "Auto van onder (linksaf)" },
          { key: "C", label: "Fietser van links (rechtdoor)" }
        ],
        correctOrder: ["A", "C", "B"]
      },
      {
        id: 15,
        type: "mcq",
        prompt: "Je rijdt in de regen op een drukke weg. Wat is juist?",
        image: "assets/examen1/q15.jpg",
        options: [
          "Je houdt dezelfde volgafstand",
          "Je rijdt vooral langzamer",
          "Je vergroot je volgafstand en anticipeert op het verkeer"
        ],
        correctIndex: 2
      },
      {
        id: 16,
        type: "order",
        prompt: "Klik in de juiste volgorde wie er mag rijden.",
        image: "assets/examen1/q16.jpg",
        entities: [
          { key: "A", label: "Auto op rotonde" },
          { key: "B", label: "Fietser op rotonde" },
          { key: "C", label: "Auto vóór haaientanden" }
        ],
        correctOrder: ["A", "B", "C"]
      },
      {
        id: 17,
        type: "mcq",
        prompt: "Je nadert een kruising met verkeerslichten. Het verkeerslicht wordt geel. Wat is juist?",
        image: "assets/examen1/q17.jpg",
        options: [
          "Je rijdt door",
          "Je rijdt door als je niet hard hoeft te remmen",
          "Je stopt, tenzij stoppen niet meer veilig kan"
        ],
        correctIndex: 2
      },
      {
        id: 18,
        type: "mcq",
        prompt: "Je rijdt achter een fietser op een smalle weg. Wat is juist?",
        image: "assets/examen1/q18.jpg",
        options: [
          "Je blijft kort achter de fietser rijden",
          "Je probeert de fietser snel te passeren",
          "Je houdt afstand en wacht op een veilige mogelijkheid"
        ],
        correctIndex: 2
      },
      {
        id: 19,
        type: "order",
        prompt: "Klik in de juiste volgorde wie er mag rijden.",
        image: "assets/examen1/q19.jpg",
        entities: [
          { key: "A", label: "Voetganger (zebrapad)" },
          { key: "B", label: "Auto (rechtdoor)" },
          { key: "C", label: "Fietser (rechtdoor)" }
        ],
        correctOrder: ["A", "B", "C"]
      },
      {
        id: 20,
        type: "mcq",
        prompt: "Je rijdt in druk stadsverkeer. Wat is juist?",
        image: "assets/examen1/q20.jpg",
        options: [
          "Je probeert zo min mogelijk te remmen",
          "Je past je snelheid aan om mee te rijden",
          "Je rijdt rustig en anticipeert op andere weggebruikers"
        ],
        correctIndex: 2
      },

      // 21–30 (klikvragen: 22,25,28)
      {
        id: 21,
        type: "mcq",
        prompt: "Je rijdt buiten de bebouwde kom. Het zicht is beperkt door mist. Wat is juist?",
        image: "assets/examen1/q21.jpg",
        options: [
          "Je rijdt de maximumsnelheid",
          "Je gebruikt groot licht",
          "Je past je snelheid aan en houdt extra afstand"
        ],
        correctIndex: 2
      },
      {
        id: 22,
        type: "order",
        prompt: "Klik in de juiste volgorde wie er mag rijden.",
        image: "assets/examen1/q22.jpg",
        entities: [
          { key: "A", label: "Auto van rechts (rechtdoor)" },
          { key: "B", label: "Auto van onder (linksaf)" },
          { key: "C", label: "Auto van boven (rechtdoor)" }
        ],
        correctOrder: ["A", "C", "B"]
      },
      {
        id: 23,
        type: "mcq",
        prompt: "Je rijdt binnen de bebouwde kom langs een bushalte. Een bus geeft richting aan om weg te rijden. Wat is juist?",
        image: "assets/examen1/q23.jpg",
        options: [
          "Je rijdt door",
          "Je mindert alleen vaart",
          "Je geeft de bus de gelegenheid om weg te rijden"
        ],
        correctIndex: 2
      },
      {
        id: 24,
        type: "mcq",
        prompt: "Je rijdt op een weg met glad wegdek. Wat is juist?",
        image: "assets/examen1/q24.jpg",
        options: [
          "Je remt later",
          "Je houdt minder afstand",
          "Je rijdt gelijkmatig en houdt meer afstand"
        ],
        correctIndex: 2
      },
      {
        id: 25,
        type: "order",
        prompt: "Klik in de juiste volgorde wie er mag rijden.",
        image: "assets/examen1/q25.jpg",
        entities: [
          { key: "A", label: "Auto rechtdoor (groen)" },
          { key: "B", label: "Auto rechtsaf (groen)" },
          { key: "C", label: "Voetganger oversteken (groen)" }
        ],
        correctOrder: ["C", "A", "B"]
      },
      {
        id: 26,
        type: "mcq",
        prompt: "Je rijdt op een weg met tegenliggers. Wat is juist bij inhalen?",
        image: "assets/examen1/q26.jpg",
        options: [
          "Je haalt in bij twijfel",
          "Je haalt in als je sneller bent",
          "Je haalt alleen in als je voldoende zicht en ruimte hebt"
        ],
        correctIndex: 2
      },
      {
        id: 27,
        type: "mcq",
        prompt: "Je nadert een file. Wat is juist?",
        image: "assets/examen1/q27.jpg",
        options: [
          "Je sluit direct aan",
          "Je remt pas laat",
          "Je vermindert tijdig snelheid en houdt afstand"
        ],
        correctIndex: 2
      },
      {
        id: 28,
        type: "order",
        prompt: "Klik in de juiste volgorde wie er mag rijden.",
        image: "assets/examen1/q28.jpg",
        entities: [
          { key: "A", label: "Auto met voorrang (door borden)" },
          { key: "B", label: "Auto zonder voorrang" },
          { key: "C", label: "Fietser achter B" }
        ],
        correctOrder: ["A", "C", "B"]
      },
      {
        id: 29,
        type: "mcq",
        prompt: "Je rijdt in een woonwijk. Wat is juist?",
        image: "assets/examen1/q29.jpg",
        options: [
          "Je rijdt zo veel mogelijk door",
          "Je let vooral op borden",
          "Je rijdt voorzichtig en anticipeert op onverwachte situaties"
        ],
        correctIndex: 2
      },
      {
        id: 30,
        type: "mcq",
        prompt: "Je nadert een kruising met haaientanden voor jou. Wat is juist?",
        image: "assets/examen1/q30.jpg",
        options: [
          "Je rijdt door",
          "Je mindert vaart",
          "Je verleent voorrang aan het kruisende verkeer"
        ],
        correctIndex: 2
      },

      // 31–40 (klikvragen: 32,35,38)
      {
        id: 31,
        type: "mcq",
        prompt: "Je rijdt binnen de bebouwde kom langs geparkeerde auto’s. Wat is juist?",
        image: "assets/examen1/q31.jpg",
        options: [
          "Je rijdt zo dicht mogelijk langs de auto’s",
          "Je rijdt met dezelfde snelheid door",
          "Je houdt voldoende afstand in verband met openslaande portieren"
        ],
        correctIndex: 2
      },
      {
        id: 32,
        type: "order",
        prompt: "Klik in de juiste volgorde wie er mag rijden.",
        image: "assets/examen1/q32.jpg",
        entities: [
          { key: "A", label: "Auto van rechts (rechtdoor)" },
          { key: "B", label: "Fietser van onder (rechtdoor)" },
          { key: "C", label: "Auto van links (rechtsaf)" }
        ],
        correctOrder: ["A", "B", "C"]
      },
      {
        id: 33,
        type: "mcq",
        prompt: "Je nadert een kruising met verkeerslichten. Het verkeerslicht is rood. Wat is juist?",
        image: "assets/examen1/q33.jpg",
        options: [
          "Je rijdt door als het rustig is",
          "Je mindert vaart",
          "Je stopt vóór de stopstreep"
        ],
        correctIndex: 2
      },
      {
        id: 34,
        type: "mcq",
        prompt: "Je rijdt buiten de bebouwde kom op een smalle weg. Wat is juist?",
        image: "assets/examen1/q34.jpg",
        options: [
          "Je rijdt altijd maximaal",
          "Je rijdt alleen langzamer in bochten",
          "Je past je snelheid aan de omstandigheden aan"
        ],
        correctIndex: 2
      },
      {
        id: 35,
        type: "order",
        prompt: "Klik in de juiste volgorde wie er mag rijden.",
        image: "assets/examen1/q35.jpg",
        entities: [
          { key: "A", label: "Auto met voorrang (door borden)" },
          { key: "B", label: "Auto tegemoetkomend" },
          { key: "C", label: "Fietser achter B" }
        ],
        correctOrder: ["A", "C", "B"]
      },
      {
        id: 36,
        type: "mcq",
        prompt: "Je rijdt in het donker buiten de bebouwde kom. Wat is juist?",
        image: "assets/examen1/q36.jpg",
        options: [
          "Je gebruikt altijd groot licht",
          "Je rijdt sneller omdat het rustig is",
          "Je past je verlichting en snelheid aan de situatie aan"
        ],
        correctIndex: 2
      },
      {
        id: 37,
        type: "mcq",
        prompt: "Je nadert een kruising zonder verkeerslichten. Het zicht is beperkt. Wat is juist?",
        image: "assets/examen1/q37.jpg",
        options: [
          "Je rijdt door om doorstroming te houden",
          "Je toetert",
          "Je nadert de kruising voorzichtig"
        ],
        correctIndex: 2
      },
      {
        id: 38,
        type: "order",
        prompt: "Klik in de juiste volgorde wie er mag rijden.",
        image: "assets/examen1/q38.jpg",
        entities: [
          { key: "A", label: "Fietser op rotonde" },
          { key: "B", label: "Auto op rotonde" },
          { key: "C", label: "Auto vóór haaientanden" }
        ],
        correctOrder: ["A", "B", "C"]
      },
      {
        id: 39,
        type: "mcq",
        prompt: "Je rijdt in druk verkeer en nadert een kruising. Wat is juist?",
        image: "assets/examen1/q39.jpg",
        options: [
          "Je probeert zo snel mogelijk door te rijden",
          "Je let vooral op je eigen rijstrook",
          "Je anticipeert op het gedrag van andere weggebruikers"
        ],
        correctIndex: 2
      },
      {
        id: 40,
        type: "mcq",
        prompt: "Je rijdt in wisselende verkeerssituaties. Wat is juist rijgedrag?",
        image: "assets/examen1/q40.jpg",
        options: [
          "Je past je rijgedrag alleen aan bij slecht weer",
          "Je rijdt altijd hetzelfde",
          "Je past je rijgedrag aan de situatie aan"
        ],
        correctIndex: 2
      }
    ]
  };

  // Export in meerdere varianten zodat je bestaande code blijft werken:
  const data = { exams: [EXAMEN_1] };

  window.EXAM_DATA = data;     // veilig
  window.EXAMS = data.exams;   // vaak gebruikt
  window.exams = data.exams;   // fallback
  window.ggExams = data.exams; // fallback
})();
   
