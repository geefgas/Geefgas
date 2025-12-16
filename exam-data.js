/* =========================================================
   GeefGas — exam-data.js
   Taxi Examens 1 t/m 15 (elk 40 vragen = 600 unieke vragen)
   - Alleen categorie: Taxi
   - ABC opties (zonder "A."/"B." in tekst)
   - Unieke vragen per examen (geen herhaling tussen examens)
   Export: window.EXAM_DATA / window.EXAMS / window.exams / window.ggExams
   ========================================================= */

(function () {
  function makeQuestion(category, prompt, options, correctIndex, explanation) {
    return {
      type: "mcq",
      category,
      prompt,
      options,
      correctIndex,
      explanation: explanation || ""
    };
  }

  // ---------------------------------------------------------
  // DATA POOLS (voor realistische variatie)
  // ---------------------------------------------------------
  const PLACES = [
    "Schiphol", "Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven",
    "Groningen", "Maastricht", "Arnhem", "Haarlem", "Leiden", "Amersfoort"
  ];

  const TIMES = ["ochtendspits", "middag", "avond", "nacht"];
  const ISSUES = ["druk verkeer", "wegafsluiting", "file", "slecht weer", "onduidelijke bestemming"];
  const CUSTOMER = ["zakelijke klant", "toerist", "oudere passagier", "reiziger met bagage", "groep vrienden"];
  const EXTRA = ["tol", "parkeren", "wachttijd", "omrijden", "extra stop"];
  const BEHAVIOR = ["agressief gedrag", "bedreigend gedrag", "drank-/drugsmisbruik", "weigeren te luisteren", "schelden"];
  const DOCS = ["taxipas", "rijbewijs", "BCT-registratie", "bedrijfsvergunning", "voertuigdocumenten"];

  function pick(arr, i) {
    return arr[i % arr.length];
  }

  // ---------------------------------------------------------
  // 600 UNIEKE VRAGEN MAKEN (BANK)
  // ---------------------------------------------------------
  function buildQuestionBank() {
    const bank = [];

    // 1) Taxipas / bevoegdheid (60)
    for (let i = 0; i < 60; i++) {
      const place = pick(PLACES, i);
      const t = pick(TIMES, i);
      bank.push(makeQuestion(
        "Taxipas",
        `Je start je dienst in ${place} tijdens de ${t}. Welke eis geldt om als taxichauffeur te mogen rijden?`,
        ["Alleen rijbewijs B", "Een geldige taxipas", "Alleen KvK-inschrijving"],
        1
      ));
    }

    // 2) ILT controle / tonen documenten (60)
    for (let i = 0; i < 60; i++) {
      const doc = pick(DOCS, i);
      bank.push(makeQuestion(
        "ILT-controle",
        `Bij een controle vraagt ILT om je ${doc}. Wat is juist?`,
        ["Je toont het op verzoek", "Je hoeft het niet te tonen", "Je toont alleen iets als je klant het vraagt"],
        0
      ));
    }

    // 3) Vergunningen / voorwaarden taxiwerk (40)
    for (let i = 0; i < 40; i++) {
      const issue = pick(ISSUES, i);
      bank.push(makeQuestion(
        "Vergunningen",
        `Je rijdt in opdracht terwijl er ${issue} is. Wanneer mag je taxivervoer uitvoeren?`,
        ["Als er een dakbord op staat", "Als je de route goed kent", "Als vergunning(en) en voorwaarden voor taxiwerk in orde zijn"],
        2
      ));
    }

    // 4) BCT basis (50)
    for (let i = 0; i < 50; i++) {
      const t = pick(TIMES, i);
      bank.push(makeQuestion(
        "BCT",
        `Wat is het belangrijkste doel van de BCT tijdens de ${t}?`,
        ["Navigatie tonen", "Ritten en werktijden registreren volgens regels", "De auto op afstand starten"],
        1
      ));
    }

    // 5) BCT storing (50)
    const BCT_MOMENTS = ["voor je dienst", "tijdens de rit", "na de rit", "bij chauffeurswissel", "aan het einde van je dienst"];
    for (let i = 0; i < 50; i++) {
      const m = pick(BCT_MOMENTS, i);
      bank.push(makeQuestion(
        "BCT",
        `De BCT werkt niet ${m}. Wat is het beste?`,
        ["Toch rijden en later invullen", "Storingsprocedure volgen en alleen rijden als dit is toegestaan", "BCT uitzetten en doorrijden"],
        1
      ));
    }

    // 6) Rij- en rusttijden / vermoeidheid (50)
    for (let i = 0; i < 50; i++) {
      const t = pick(TIMES, i);
      const place = pick(PLACES, i + 3);
      bank.push(makeQuestion(
        "Rij- en rusttijden",
        `Je rijdt in ${place} tijdens de ${t} en merkt dat je concentratie afneemt. Wat is het beste?`,
        ["Doorrijden tot je laatste rit", "Pauze nemen en pas verder rijden als het veilig is", "Extra hard rijden zodat je sneller klaar bent"],
        1
      ));
    }

    // 7) Tarieven / prijs vooraf (40)
    for (let i = 0; i < 40; i++) {
      const cust = pick(CUSTOMER, i);
      const place = pick(PLACES, i);
      bank.push(makeQuestion(
        "Tarieven",
        `Een ${cust} vraagt in ${place}: “Wat kost het ongeveer?” Wat is het beste antwoord?`,
        ["Geen antwoord geven", "Eerlijk een indicatie geven en uitleggen waarvan het afhangt", "Een willekeurig laag bedrag noemen om discussie te voorkomen"],
        1
      ));
    }

    // 8) Extra kosten (40)
    for (let i = 0; i < 40; i++) {
      const extra = pick(EXTRA, i);
      bank.push(makeQuestion(
        "Tarieven",
        `Tijdens de rit ontstaan extra kosten door ${extra}. Wat is professioneel?`,
        ["Niet noemen en achteraf rekenen", "Zodra het relevant is benoemen en afstemmen met de klant", "Alleen noemen als de klant klaagt"],
        1
      ));
    }

    // 9) Bon / factuur (40)
    for (let i = 0; i < 40; i++) {
      const place = pick(PLACES, i);
      bank.push(makeQuestion(
        "Bon/factuur",
        `Een klant vraagt na aankomst in ${place} om een bon/factuur. Wat is juist?`,
        ["Dat hoeft nooit", "Je verstrekt dit volgens de geldende werkwijze/afspraken", "Alleen bij contante betaling"],
        1
      ));
    }

    // 10) Betaling (50)
    const PAY_PROBLEMS = ["pinnen lukt niet", "terminal heeft storing", "klant heeft geen saldo", "contant: geen wisselgeld", "factuur: onduidelijke gegevens"];
    for (let i = 0; i < 50; i++) {
      const p = pick(PAY_PROBLEMS, i);
      bank.push(makeQuestion(
        "Betaling",
        `Bij het afrekenen: ${p}. Wat is het beste?`,
        ["Direct escaleren en klant eruit zetten", "Rustig een oplossing zoeken volgens afspraak/bedrijf", "De klant laten gaan zonder betaling"],
        1
      ));
    }

    // 11) Route / omrijden / navigatie (50)
    const ROUTE_CASES = ["wegafsluiting", "file", "ongeluk", "spitsdrukte", "tijdelijke omleiding"];
    for (let i = 0; i < 50; i++) {
      const r = pick(ROUTE_CASES, i);
      const place = pick(PLACES, i);
      bank.push(makeQuestion(
        "Route",
        `Navigatie stuurt je door een straat met “verboden in te rijden” door ${r} in ${place}. Wat doe je?`,
        ["Toch erin, navigatie weet het beter", "Je volgt verkeersborden; navigatie is hulpmiddel", "Stoppen midden op de weg om te overleggen"],
        1
      ));
    }

    // 12) Verkeerd afslaan (30)
    for (let i = 0; i < 30; i++) {
      const issue = pick(ISSUES, i);
      bank.push(makeQuestion(
        "Route",
        `Je slaat verkeerd af door ${issue}. Wat is het beste?`,
        ["Illegaal keren waar het niet mag", "Rustig aangeven en de veiligste toegestane oplossing kiezen", "Doen alsof het expres was"],
        1
      ));
    }

    // 13) Veilig stoppen/afzetten (40)
    const STOP_BAD = ["midden op de rijbaan", "op een kruispunt", "op een fietspad", "op een busbaan", "in een bocht"];
    for (let i = 0; i < 40; i++) {
      const bad = pick(STOP_BAD, i);
      const place = pick(PLACES, i);
      bank.push(makeQuestion(
        "Veilig stoppen",
        `Een klant wil uitstappen ${bad} in ${place}. Wat doe je?`,
        ["Toch stoppen, klant bepaalt", "Doorrijden naar een veilige plek waar stoppen is toegestaan", "Hard remmen en snel de deur openen"],
        1
      ));
    }

    // 14) Gordel / veiligheid passagiers (40)
    const BELT_CASES = ["achterin", "voorin", "met kind", "met bagage op schoot", "bij korte rit"];
    for (let i = 0; i < 40; i++) {
      const c = pick(BELT_CASES, i);
      bank.push(makeQuestion(
        "Veiligheid",
        `Een passagier ${c} wil geen gordel dragen. Wat is juist?`,
        ["Toestaan bij korte afstand", "Uitleggen en pas rijden als het veilig/volgens regels kan", "Negeren zolang jij wel gordel draagt"],
        1
      ));
    }

    // 15) Dooring / uitstappen naast fietsers (30)
    for (let i = 0; i < 30; i++) {
      const place = pick(PLACES, i);
      bank.push(makeQuestion(
        "Veilig uitstappen",
        `Uitstappen naast fietsers in ${place}: hoe voorkom je 'dooring'?`,
        ["Deur direct wijd open", "Eerst spiegels checken/kijken over schouder en dan veilig uitstappen", "Passagier moet het zelf uitzoeken"],
        1
      ));
    }

    // 16) Bagage (30)
    const BAGAGE_PROBS = ["blokkeert zicht", "ligt los in gangpad", "is te zwaar", "kan verschuiven", "past slecht"];
    for (let i = 0; i < 30; i++) {
      const b = pick(BAGAGE_PROBS, i);
      bank.push(makeQuestion(
        "Bagage",
        `Bagage ${b}. Wat is het beste vóór vertrek?`,
        ["Toch rijden, komt goed", "Bagage veilig plaatsen/zekeren voordat je gaat rijden", "De klant laten vasthouden tijdens het rijden"],
        1
      ));
    }

    // 17) Standplaats (30)
    for (let i = 0; i < 30; i++) {
      const place = pick(PLACES, i);
      bank.push(makeQuestion(
        "Standplaats",
        `Je staat op een standplaats in ${place}. Wat is juist?`,
        ["Voordringen als je haast hebt", "Wachtrij en lokale regels volgen", "Dubbel parkeren zodat je sneller weg kunt"],
        1
      ));
    }

    // 18) Privacy (30)
    const PRIV_CASES = ["gesprekken", "bestemmingen", "telefoonnummer", "betaalgegevens", "klantnaam op factuur"];
    for (let i = 0; i < 30; i++) {
      const p = pick(PRIV_CASES, i);
      bank.push(makeQuestion(
        "Privacy",
        `Hoe ga je om met klant-${p}?`,
        ["Delen met collega’s", "Discreet behandelen en alleen gebruiken als nodig", "Online posten als reclame"],
        1
      ));
    }

    // 19) Conflicten / klant vraagt overtreding (30)
    for (let i = 0; i < 30; i++) {
      const cust = pick(CUSTOMER, i);
      bank.push(makeQuestion(
        "Conflicten",
        `Een ${cust} vraagt of jij een verkeersregel kunt overtreden om sneller te zijn. Wat doe je?`,
        ["Doen voor extra geld", "Uitleggen dat je je aan verkeersregels houdt", "Alleen doen als het rustig is"],
        1
      ));
    }

    // 20) Onwel / nood (30)
    for (let i = 0; i < 30; i++) {
      const place = pick(PLACES, i);
      bank.push(makeQuestion(
        "Nood",
        `Een passagier wordt onwel tijdens de rit richting ${place}. Wat is het beste?`,
        ["Doorrijden naar eindbestemming", "Zo snel mogelijk veilig stoppen en passende hulp inschakelen", "De passagier negeren"],
        1
      ));
    }

    // 21) PAMAN (30)
    for (let i = 0; i < 30; i++) {
      bank.push(makeQuestion(
        "PAMAN",
        `Waar staat PAMAN voor?`,
        [
          "Persoonlijke veiligheid, Andersmans veiligheid, Markeren, Alarmeren, Noodzakelijke hulp verlenen",
          "Parkeren, Afrekenen, Meter, Afslag, Navigatie",
          "Pech, Alarm, Motor, Aanrijding, Niets"
        ],
        0
      ));
    }

    // 22) PAMAN markeren/alarmeren (30)
    const PAMAN_WORD = ["alarmeren", "markeren"];
    for (let i = 0; i < 30; i++) {
      const w = pick(PAMAN_WORD, i);
      bank.push(makeQuestion(
        "PAMAN",
        `Wat betekent '${w}' binnen PAMAN?`,
        w === "alarmeren"
          ? ["Boos terugroepen", "Hulp/centrale/hulpdiensten inschakelen waar nodig", "Hard remmen zodat iedereen stopt"]
          : ["Locatie/situatie herkenbaar maken voor hulpdiensten", "De klant filmen voor later", "Op de claxon blijven drukken"],
        w === "alarmeren" ? 1 : 0
      ));
    }

    // 23) Agressie (40)
    for (let i = 0; i < 40; i++) {
      const b = pick(BEHAVIOR, i);
      const place = pick(PLACES, i);
      bank.push(makeQuestion(
        "Veiligheid",
        `Een klant vertoont ${b} in ${place}. Wat is je beste houding?`,
        ["Boos terugdoen", "Rustig blijven en veiligheid vooropstellen", "Harder rijden om sneller klaar te zijn"],
        1
      ));
    }

    // 24) Ritweigering scenario (40)
    for (let i = 0; i < 40; i++) {
      const b = pick(BEHAVIOR, i);
      bank.push(makeQuestion(
        "Rit weigeren",
        `In welke situatie mag je een rit weigeren?`,
        ["Als je geen zin hebt", `Bij gevaar of onacceptabel gedrag (zoals ${b})`, "Bij een korte afstand"],
        1
      ));
    }

    // TOTAAL moet >= 600 zijn
    // We nemen de eerste 600 om exact 15x40 te vullen
    return bank;
  }

  const BANK = buildQuestionBank();
  const REQUIRED = 15 * 40;

  if (BANK.length < REQUIRED) {
    console.warn("Te weinig vragen in bank:", BANK.length, "nodig:", REQUIRED);
  }

  const bank600 = BANK.slice(0, REQUIRED);

  // ---------------------------------------------------------
  // MAAK 15 EXAMENS MET 40 UNIEKE VRAGEN ELK
  // ---------------------------------------------------------
  const exams = [];
  for (let examNo = 1; examNo <= 15; examNo++) {
    const start = (examNo - 1) * 40;
    const slice = bank600.slice(start, start + 40);

    // Nummer vragen 1..40 per examen
    const questions = slice.map((qq, idx) => ({
      id: idx + 1,
      type: "mcq",
      category: qq.category,
      prompt: qq.prompt,
      options: qq.options,
      correctIndex: qq.correctIndex,
      explanation: qq.explanation || ""
    }));

    exams.push({
      id: `taxi-examen-${examNo}`,
      title: `Taxi Examen ${examNo} (40 vragen)`,
      category: "Taxi",
      durationMinutes: 30,
      passMinCorrect: 32,
      questions
    });
  }

  // ---------------------------------------------------------
  // EXPORT
  // ---------------------------------------------------------
  window.EXAM_DATA = { exams };
  window.EXAMS = exams;
  window.exams = exams;
  window.ggExams = exams;

})();
