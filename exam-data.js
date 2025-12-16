/* =========================================================
   GeefGas — exam-data.js
   ALLEEN TAXI-EXAMENS
   Taxi Examen 1 t/m 15
   Elk examen: 40 vragen
   ========================================================= */

(function () {

  function makeExam(num, titleSuffix, questions) {
    return {
      id: `taxi-examen-${num}`,
      title: `Taxi Examen ${num} (40 vragen)`,
      category: "Taxi",
      durationMinutes: 30,
      passMinCorrect: 32,
      questions
    };
  }

  function q(id, category, prompt, options, correctIndex) {
    return {
      id,
      type: "mcq",
      category,
      prompt,
      options,
      correctIndex,
      explanation: ""
    };
  }

  // =========================
  // VASTE 40 VRAGEN TEMPLATE
  // (inhoudelijk correct, taxi-gericht)
  // =========================
  function baseQuestions() {
    return [
      q(1,"Wetgeving","Wat moet je altijd kunnen tonen bij een ILT-controle?",["Alleen rijbewijs","Taxipas","Kentekenbewijs"],1),
      q(2,"BCT","Wat is het doel van de BCT?",["Navigeren","Ritten en werktijden registreren","Betalen"],1),
      q(3,"Vergunning","Wanneer mag je taxivervoer uitvoeren?",["Met dakbord","Met geldige vergunning en taxipas","Alleen in de stad"],1),
      q(4,"KIWA","Waarom is een KIWA-keuring verplicht?",["Voor comfort","Voor veiligheid en wettelijke eisen","Voor verzekering"],1),
      q(5,"Gedrag","Wat is professioneel rijgedrag?",["Snel rijden","Rustig en veilig rijden","Altijd kortste route"],1),
      q(6,"Veiligheid","Wat doe je bij een agressieve klant?",["Discussie aangaan","Rustig blijven en veiligheid voorop","Direct stoppen midden op weg"],1),
      q(7,"Gordel","Wat doe je als een passagier geen gordel draagt?",["Negeer het","Leg uit en rijd pas veilig verder","Doorrijden"],1),
      q(8,"Betaling","Wat doe je als pin niet werkt?",["Rit annuleren","Oplossing zoeken volgens procedure","Klant laten gaan"],1),
      q(9,"Route","Wat doe je bij routewens van klant?",["Negeren","Overleggen en volgen indien veilig","Altijd eigen route"],1),
      q(10,"Privacy","Hoe ga je om met klantinformatie?",["Delen","Discreet houden","Opslaan privé"],1),

      q(11,"Rusttijden","Waarom zijn rusttijden belangrijk?",["Voor winst","Voor veiligheid","Voor marketing"],1),
      q(12,"Vermoeidheid","Wat doe je bij vermoeidheid?",["Doorrijden","Pauze nemen","Sneller rijden"],1),
      q(13,"Stoppen","Waar laat je een klant uitstappen?",["Midden op weg","Veilige toegestane plek","Waar klant wil"],1),
      q(14,"Bagage","Hoe ga je om met bagage?",["Los laten liggen","Veilig plaatsen","Niet helpen"],1),
      q(15,"Nood","Wat bij onwel wordende klant?",["Doorrijden","Veilig stoppen en hulp","Negeren"],1),
      q(16,"Conflicten","Wat bij verzoek tot overtreden regels?",["Doen","Uitleggen dat het niet mag","Negeren"],1),
      q(17,"Voertuig","Wat controleer je voor dienst?",["Niets","Basisveiligheid","Alleen brandstof"],1),
      q(18,"Handhaving","Wanneer moet administratie kloppen?",["Bij controle","Altijd","Nooit"],1),
      q(19,"Communicatie","Wat bij taalprobleem klant?",["Weggaan","Rustig communiceren","Bestemming gokken"],1),
      q(20,"Rijgedrag","Beste rijstijl met passagiers?",["Sportief","Voorspelbaar","Agressief"],1),

      q(21,"Alcohol","Wat geldt tijdens taxiwerk?",["Beetje mag","Nul tolerantie","Alleen ’s nachts"],1),
      q(22,"Veiligheid","Wat staat altijd voorop?",["Snelheid","Veiligheid","Winst"],1),
      q(23,"Documenten","Welke documenten zijn verplicht?",["Logo","Taxipas en vergunning","Navigatie"],1),
      q(24,"ILT","Wat mag ILT doen?",["Advies geven","Controleren en handhaven","Routes bepalen"],1),
      q(25,"Tarieven","Wanneer moet prijs duidelijk zijn?",["Na rit","Voor of tijdens rit","Nooit"],1),
      q(26,"Bon","Wanneer geef je een bon?",["Nooit","Op verzoek","Alleen contant"],1),
      q(27,"Klachten","Hoe ga je om met klachten?",["Verdedigen","Professioneel blijven","Negeren"],1),
      q(28,"Doorrijden","Wat bij verkeersovertreding?",["Goedpraten","Erkennen en veilig oplossen","Negeer"],1),
      q(29,"Extra passagiers","Meer personen dan gordels?",["Toestaan","Niet toestaan","Bij korte rit"],1),
      q(30,"Verantwoordelijkheid","Wie is verantwoordelijk?",["Klant","Chauffeur","Niemand"],1),

      q(31,"Dienstverlening","Wat hoort bij taxiwerk?",["Snelheid","Klantgerichtheid","Discussie"],1),
      q(32,"Planning","Wat bij vertraging?",["Zwijgen","Klant informeren","Sneller rijden"],1),
      q(33,"Afleiding","Telefoneren tijdens rijden?",["Ja","Nee","Soms"],1),
      q(34,"Wet","Waarom regels volgen?",["Boetes","Veiligheid en wet","Onbelangrijk"],1),
      q(35,"Controle","Wat toon je bij controle?",["Niets","Taxipas","Alleen ID"],1),
      q(36,"Dienstbegin","Wanneer BCT activeren?",["Na rit","Voor dienst","Nooit"],1),
      q(37,"Nachtwerk","Extra aandacht nodig?",["Nee","Ja, vermoeidheid","Alleen regen"],1),
      q(38,"Respect","Hoe benader je klanten?",["Neutraal","Respectvol","Kortaf"],1),
      q(39,"Stoppen","Waar stoppen bij nood?",["Midden weg","Veilige toegestane plek","Vluchstrook altijd"],1),
      q(40,"Samenvatting","Wat is professioneel taxiwerk?",["Snel","Veilig en klantgericht","Hard rijden"],1)
    ];
  }

  // =========================
  // ALLE 15 TAXI-EXAMENS
  // =========================
  const exams = [];
  for (let i = 1; i <= 15; i++) {
    exams.push(
      makeExam(
        i,
        "",
        baseQuestions().map(q => ({ ...q })) // clone
      )
    );
  }

  // Export
  window.EXAM_DATA = { exams };
  window.EXAMS = exams;
  window.exams = exams;
  window.ggExams = exams;

})();
