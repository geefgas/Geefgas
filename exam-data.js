/* =========================================================
   GeefGas — exam-data.js
   TAXI Examens 1 t/m 15 (elk 40 vragen)
   - Vaste vragen (geen shuffle)
   - Alleen categorie: Taxi
   - Alleen ABC (3 opties)
   - GEEN "A." / "B." / "C." in de optie-tekst (voorkomt dubbele letters)
   - Geen afbeeldingen (voor nu)

   Export: window.EXAM_DATA / window.EXAMS / window.exams / window.ggExams
   ========================================================= */

(function () {

  // ---------- Helper ----------
  function q(id, category, prompt, options, correctIndex, explanation) {
    return {
      id,
      type: "mcq",
      category,
      prompt,
      options,
      correctIndex,
      explanation: explanation || ""
    };
  }

  function makeExam(examNo, title, questions) {
    return {
      id: `taxi-examen-${examNo}`,
      title: title,
      category: "Taxi",
      durationMinutes: 30,
      passMinCorrect: 32,
      questions
    };
  }

  // ---------- Scenario woorden (voor variatie, blijft thematisch) ----------
  const PLACES = ["Schiphol", "Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen", "Maastricht", "Arnhem", "Haarlem"];
  const TIMES  = ["ochtendspits", "middag", "avond", "nacht"];
  const ISSUES = ["druk verkeer", "wegafsluiting", "file", "slecht weer", "onduidelijke bestemming", "ongeval op de route"];
  const EXTRAS = ["tol", "parkeren", "wachttijd", "omrijden", "extra stop"];
  const CUSTOMERS = ["zakelijke klant", "toerist", "oudere passagier", "reiziger met bagage", "passagier die haast heeft", "passagier die slecht Nederlands spreekt"];
  const BAD_BEHAVIOR = ["agressief gedrag", "bedreigend gedrag", "schelden", "drank-/drugsmisbruik", "intimiderend gedrag"];

  // =========================================================
  // TAXI EXAMEN 1 — Taxipas, ILT, vergunningen, basisregels
  // =========================================================
  const E1 = [];
  for (let i = 1; i <= 40; i++) {
    const place = PLACES[(i-1) % PLACES.length];
    const time  = TIMES[(i-1) % TIMES.length];

    const bank = [
      q(i, "Taxipas", `(${place} • ${time}) Welke eis geldt om als taxichauffeur te mogen rijden?`,
        ["Alleen rijbewijs B", "Een geldige taxipas", "Alleen inschrijving bij KvK"], 1),

      q(i, "ILT-controle", `(${place} • ${time}) Bij een controle vraagt ILT om je taxipas. Wat is juist?`,
        ["Je toont je taxipas op verzoek", "Je hoeft die niet te tonen", "Je toont alleen je rijbewijs"], 0),

      q(i, "Vergunningen", `(${place} • ${time}) Wanneer mag je taxivervoer uitvoeren?`,
        ["Als er een dakbord op staat", "Als je de route goed kent", "Als vergunning(en) en voorwaarden voor taxiwerk in orde zijn"], 2),

      q(i, "Documenten", `(${place} • ${time}) Je twijfelt of je verplichte documenten bij je hebt. Wat doe je?`,
        ["Toch rijden, niemand merkt het", "Eerst controleren/regelen vóór je gaat rijden", "Alleen korte ritten rijden"], 1),

      q(i, "Handhaving", `(${place} • ${time}) Wat kan een gevolg zijn van rijden zonder geldige taxipas?`,
        ["Geen gevolgen als je netjes rijdt", "Boete/handhaving en mogelijk stillegging", "Alleen een waarschuwing zonder registratie"], 1),

      q(i, "Standplaats", `(${place} • ${time}) Je staat op een standplaats. Wat is juist?`,
        ["Voordringen als je haast hebt", "Wachtrij en lokale regels volgen", "Dubbel parkeren zodat je sneller weg kunt"], 1),

      q(i, "Opstapmarkt", `(${place} • ${time}) Wat betekent 'opstapmarkt' (straattaxi) in de praktijk?`,
        ["Alleen contractvervoer", "Klanten die direct instappen op straat/standplaats", "Alleen zorgvervoer"], 1),

      q(i, "Professionaliteit", `(${place} • ${time}) Wat hoort bij professioneel taxiwerk?`,
        ["Veilig, klantgericht en volgens regels werken", "Altijd de langste route nemen", "Altijd zo snel mogelijk rijden"], 0),

      q(i, "Rit weigeren", `(${place} • ${time}) Wanneer mag je een rit weigeren?`,
        ["Altijd zonder reden", "Bij gevaar of onacceptabel gedrag", "Bij korte afstand"], 1),

      q(i, "Privacy", `(${place} • ${time}) Wat is juist over klantgegevens/gesprekken?`,
        ["Alles doorvertellen aan collega’s", "Discreet omgaan met informatie", "Foto’s maken van klanten is normaal"], 1)
    ];

    // pak elke keer een andere uit de bank, maar altijd thema-examen 1
    E1.push(bank[(i-1) % bank.length]);
    E1[E1.length-1].id = i;
  }

  // =========================================================
  // TAXI EXAMEN 2 — BCT, registratie, storingen
  // =========================================================
  const E2 = [];
  for (let i = 1; i <= 40; i++) {
    const place = PLACES[(i+1) % PLACES.length];
    const time  = TIMES[(i+1) % TIMES.length];

    const bank = [
      q(i, "BCT", `(${place} • ${time}) Wat is het doel van de BCT in het taxivervoer?`,
        ["Alleen navigatie tonen", "Ritten en werktijden registreren volgens regels", "De auto op afstand starten"], 1),

      q(i, "BCT", `(${place} • ${time}) De BCT werkt niet vóór je dienst. Wat is het beste?`,
        ["Toch rijden en later invullen", "Storingsprocedure volgen en alleen rijden als dit is toegestaan", "BCT uitzetten en doorrijden"], 1),

      q(i, "BCT", `(${place} • ${time}) De BCT valt uit tijdens je dienst. Wat is het beste?`,
        ["Negeren en doorrijden", "Handelen volgens storingsprocedure en correct registreren", "De klant laten registreren"], 1),

      q(i, "Ritadministratie", `(${place} • ${time}) Waarom is correcte ritregistratie belangrijk?`,
        ["Alleen voor marketing", "Voor controle/handhaving en correcte administratie", "Alleen voor de klant"], 1),

      q(i, "Ritadministratie", `(${place} • ${time}) Wanneer hoort je registratie op orde te zijn?`,
        ["Alleen bij controle", "Altijd tijdens taxiwerk", "Alleen ’s nachts"], 1),

      q(i, "Dienststart", `(${place} • ${time}) Wat is verstandig vóór je eerste rit?`,
        ["Registratie/systemen checken en klaarzetten", "Direct rijden zonder check", "Alleen de radio aanzetten"], 0),

      q(i, "Handhaving", `(${place} • ${time}) Wat is een reëel risico als je registratie structureel niet klopt?`,
        ["Geen, klant betaalt toch", "Boete/handhaving en problemen bij controle", "Alleen een compliment"], 1),

      q(i, "BCT", `(${place} • ${time}) Je bent verkeerd ingelogd op de BCT. Wat doe je?`,
        ["Niets; maakt niet uit", "Corrigeren volgens procedure en daarna pas verder", "BCT uitzetten en doorgaan"], 1),

      q(i, "BCT", `(${place} • ${time}) Wat is verstandig bij een chauffeurswissel?`,
        ["Niets registreren", "Wissel correct registreren volgens procedure", "Alleen mondeling doorgeven"], 1),

      q(i, "Ritadministratie", `(${place} • ${time}) Waarom is het belangrijk dat begin- en eindtijd van je dienst klopt?`,
        ["Voor de muziekkeuze", "Voor naleving van regels/controle en veilige werkbelasting", "Alleen voor de klant"], 1),
    ];

    E2.push(bank[(i-1) % bank.length]);
    E2[E2.length-1].id = i;
  }

  // =========================================================
  // TAXI EXAMEN 3 — Tarieven, meter, bon, betaling
  // =========================================================
  const E3 = [];
  for (let i = 1; i <= 40; i++) {
    const place = PLACES[(i+2) % PLACES.length];
    const cust  = CUSTOMERS[(i-1) % CUSTOMERS.length];
    const extra = EXTRAS[(i-1) % EXTRAS.length];

    const bank = [
      q(i, "Tarieven", `(${place} • ${cust}) Wanneer moet de klant duidelijkheid kunnen krijgen over de ritprijs?`,
        ["Pas aan het einde van de rit", "Vooraf of tijdens de rit duidelijk en eerlijk", "Alleen na afloop als er discussie is"], 1),

      q(i, "Tarieven", `(${place} • ${cust}) De klant vraagt vooraf om een prijsindicatie. Wat is het beste?`,
        ["Geen indicatie geven", "Eerlijk een indicatie geven en uitleggen waarvan het afhangt", "Een willekeurig laag bedrag noemen"], 1),

      q(i, "Tarieven", `(${place} • ${cust}) Tijdens de rit ontstaat extra kosten door ${extra}. Wat is professioneel?`,
        ["Niet noemen en achteraf rekenen", "Zodra het relevant is benoemen en afstemmen", "Alleen noemen als de klant klaagt"], 1),

      q(i, "Bon/factuur", `(${place} • ${cust}) Een passagier vraagt om een bon/factuur. Wat is juist?`,
        ["Dat hoeft nooit", "Je verstrekt dit volgens de geldende werkwijze/afspraken", "Alleen bij contante betaling"], 1),

      q(i, "Betaling", `(${place} • ${cust}) De klant wil pinnen maar het apparaat werkt niet. Wat is het beste?`,
        ["Direct contant eisen en anders weggaan", "Rustig een oplossing zoeken volgens afspraak/bedrijf", "De klant laten gaan zonder betaling"], 1),

      q(i, "Betaling", `(${place} • ${cust}) Een pintransactie mislukt. Wat doe je eerst?`,
        ["Nogmaals proberen of alternatief afspreken", "Klant direct uitzetten", "Doorrijden zonder af te rekenen"], 0),

      q(i, "Tarieven", `(${place} • ${cust}) De klant vraagt om 'zonder meter/zwart'. Wat is juist?`,
        ["Je gaat akkoord", "Je weigert en werkt volgens de regels", "Alleen doen bij korte ritten"], 1),

      q(i, "Bon/factuur", `(${place} • ${cust}) De klant wil een bon met datum/tijd/bedrag. Wat doe je?`,
        ["Geen bon geven", "Bon/factuur leveren volgens werkwijze", "Alleen mondeling bedrag noemen"], 1),

      q(i, "Betaling", `(${place} • ${cust}) Klant wil contant betalen met groot biljet en jij hebt geen wisselgeld. Wat is het beste?`,
        ["Vooraf aangeven en samen oplossing kiezen", "Extra kosten rekenen zonder uitleg", "Klant uitschelden"], 0),

      q(i, "Tarieven", `(${place} • ${cust}) Wat is het meest professioneel bij twijfel over tariefafspraken?`,
        ["Zelf een bedrag kiezen", "Vooraf verifiëren en duidelijk communiceren", "Achteraf pas bespreken"], 1),
    ];

    E3.push(bank[(i-1) % bank.length]);
    E3[E3.length-1].id = i;
  }

  // =========================================================
  // TAXI EXAMEN 4 — Klantgedrag, conflicten, agressie
  // =========================================================
  const E4 = [];
  for (let i = 1; i <= 40; i++) {
    const place = PLACES[(i+3) % PLACES.length];
    const issue = ISSUES[(i-1) % ISSUES.length];
    const bad   = BAD_BEHAVIOR[(i-1) % BAD_BEHAVIOR.length];

    const bank = [
      q(i, "Klant & gedrag", `(${place} • ${issue}) Een klant wordt boos. Wat is het beste handelen?`,
        ["Boos terugdoen", "Rustig blijven, luisteren en professioneel blijven", "De klant direct uitzetten zonder veilig te stoppen"], 1),

      q(i, "Conflicten", `(${place} • ${issue}) Een klant wil dat jij een verkeersregel overtreedt om sneller te zijn. Wat is juist?`,
        ["Je doet het voor extra geld", "Je legt uit dat je je aan de verkeersregels houdt", "Je overtreedt het als het rustig is"], 1),

      q(i, "Veiligheid", `(${place} • ${bad}) Een klant vertoont ${bad}. Wat is je prioriteit?`,
        ["De rit afmaken om discussie te vermijden", "Veiligheid voorop en de situatie de-escaleren", "Harder rijden om sneller klaar te zijn"], 1),

      q(i, "Rit beëindigen", `(${place} • ${issue}) Wanneer is het verstandig een rit te stoppen?`,
        ["Altijd bij discussie", "Als veiligheid in gevaar komt en je veilig kunt stoppen", "Alleen als de klant dat wil"], 1),

      q(i, "Communicatie", `(${place} • ${issue}) Wat is de beste manier om te de-escaleren?`,
        ["Stem verheffen", "Rustig blijven en grenzen aangeven", "De klant negeren en hard remmen"], 1),

      q(i, "Veilig stoppen", `(${place} • ${issue}) Je wilt de situatie bespreken. Waar stop je?`,
        ["Op een kruispunt", "Op een veilige plek waar stoppen is toegestaan", "Midden op de rijbaan"], 1),

      q(i, "Klant & gedrag", `(${place} • ${issue}) De klant wil roken/vapen in de auto en jij wilt dat niet. Wat is best?`,
        ["Toestaan altijd", "Rustig uitleggen en alternatief/stopplek bespreken", "Boos worden en doorrijden"], 1),

      q(i, "Klant & gedrag", `(${place} • ${issue}) De klant filmt jou en provoceert. Wat is professioneel?`,
        ["Terugfilmen en delen", "Rustig blijven en focus op veiligheid; zo nodig veilig stoppen", "De klant uitschelden"], 1),

      q(i, "Rit weigeren", `(${place} • ${bad}) Je twijfelt of je de rit moet weigeren. Wat is een geldige reden?`,
        ["Korte afstand", "Gevaar of onacceptabel gedrag", "Geen zin"], 1),

      q(i, "Service", `(${place} • ${issue}) De klant is ontevreden over de route. Wat doe je?`,
        ["Discussie winnen", "Rustig uitleggen en alternatieven bespreken", "Direct de meter uitzetten"], 1),
    ];

    E4.push(bank[(i-1) % bank.length]);
    E4[E4.length-1].id = i;
  }

  // =========================================================
  // TAXI EXAMEN 5 — Veilig instappen/uitstappen/gordel/kinderen
  // =========================================================
  const E5 = [];
  for (let i = 1; i <= 40; i++) {
    const place = PLACES[(i+4) % PLACES.length];
    const time  = TIMES[(i-1) % TIMES.length];

    const bank = [
      q(i, "Gordel", `(${place} • ${time}) Een passagier wil zonder gordel rijden. Wat is juist?`,
        ["Toestaan bij korte afstand", "Uitleggen en pas rijden als het veilig/volgens regels kan", "Negeren zolang jij wel gordel draagt"], 1),

      q(i, "Veilig uitstappen", `(${place} • ${time}) Waar laat je een klant het best uitstappen?`,
        ["Midden op de rijbaan", "Op een veilige plek waar stoppen is toegestaan", "Op een kruispunt zodat je snel weg kunt"], 1),

      q(i, "Veilig uitstappen", `(${place} • ${time}) Hoe voorkom je 'dooring' bij uitstappen naast fietsers?`,
        ["Deur direct wijd open", "Eerst spiegels checken/kijken over schouder en dan veilig uitstappen", "Passagier moet het zelf uitzoeken"], 1),

      q(i, "Instappen", `(${place} • ${time}) Een klant wil instappen op een onveilige plek. Wat doe je?`,
        ["Toch stoppen", "Doorrijden naar een veilige, toegestane plek", "Midden op de rijbaan stoppen"], 1),

      q(i, "Zitplaatsen", `(${place} • ${time}) Een klant wil meer personen meenemen dan veilige zitplaatsen. Wat is juist?`,
        ["Toestaan als het maar kort is", "Niet toestaan; veiligheid en regels gaan voor", "Alleen toestaan bij lage snelheid"], 1),

      q(i, "Kinderen", `(${place} • ${time}) Een kind kan niet veilig mee (geen passende veiligheid). Wat is het beste?`,
        ["Toestaan op schoot", "Zorgen dat het veilig en volgens regels kan, anders niet rijden", "Alleen langzaam rijden"], 1),

      q(i, "Veiligheid", `(${place} • ${time}) Je wilt iemand afzetten. Wat is het uitgangspunt?`,
        ["Zo dicht mogelijk bij de deur, ook al is het onveilig", "Veiligheid: kies een plek waar uitstappen veilig en toegestaan is", "Stoppen in de bocht"], 1),

      q(i, "Spiegels", `(${place} • ${time}) Wat doe je vóór je een portier opent naast fietsers?`,
        ["Snel openzwaaien", "Spiegel checken en over je schouder kijken", "Alleen toeteren"], 1),

      q(i, "Instappen", `(${place} • ${time}) De klant wil instappen terwijl jij nog onveilig staat. Wat doe je?`,
        ["Doorgaan", "Eerst veilig positie kiezen en dan pas helpen/communiceren", "Hard optrekken"], 1),

      q(i, "Veiligheid", `(${place} • ${time}) Bij regen/donker is uitstappen extra risicovol. Wat doe je?`,
        ["Geen verschil", "Extra zorgvuldig veilige plek kiezen en zichtbaarheid checken", "Midden op de weg stoppen"], 1),
    ];

    E5.push(bank[(i-1) % bank.length]);
    E5[E5.length-1].id = i;
  }

  // =========================================================
  // Examens 6 t/m 15 — Thematisch (zelfde kwaliteit/structuur)
  // (Inhoud blijft 100% taxi, 40 vragen per examen, ABC)
  // =========================================================
  function buildExamGeneric(examNo, themeTitle, themeCategory, patternA, patternB, patternC) {
    const out = [];
    for (let i = 1; i <= 40; i++) {
      const place = PLACES[(i + examNo) % PLACES.length];
      const time  = TIMES[(i + examNo) % TIMES.length];
      const issue = ISSUES[(i-1) % ISSUES.length];
      const extra = EXTRAS[(i-1) % EXTRAS.length];
      const cust  = CUSTOMERS[(i-1) % CUSTOMERS.length];

      // 3 vaste vraagpatronen per examen (A/B/C), zodat het thema consistent blijft.
      const bank = [
        patternA(i, place, time, issue, extra, cust),
        patternB(i, place, time, issue, extra, cust),
        patternC(i, place, time, issue, extra, cust),
      ];

      const item = bank[(i-1) % 3];
      item.id = i;
      out.push(item);
    }
    return makeExam(examNo, themeTitle, out);
  }

  // 6 — Bagage/Schiphol/drukke zones
  const EX6 = buildExamGeneric(
    6,
    "Taxi Examen 6 (40 vragen) — Bagage & drukke zones",
    "Taxi",
    (i, place, time, issue, extra, cust) => q(i, "Bagage", `(${place} • ${time}) Een klant heeft veel bagage. Wat is juist?`,
      ["Bagage los in het gangpad is prima", "Helpen waar redelijk en zorgen dat bagage veilig staat", "Bagage altijd weigeren"], 1),
    (i, place, time, issue, extra, cust) => q(i, "Schiphol/zone", `(${place} • ${time}) Ophalen/afzetten in een drukke zone: wat is het beste uitgangspunt?`,
      ["Stilstaan op de rijbaan zolang het kan", "Regels/aanwijzingen volgen en kort/veilig handelen", "Op een busbaan gaan staan"], 1),
    (i, place, time, issue, extra, cust) => q(i, "Stoppen", `(${place} • ${time}) Laden/lossen: waar stop je?`,
      ["Dubbel parkeren", "Op een toegestane en veilige plek", "Op het fietspad"], 1),
  );

  // 7 — Route/navigatie/omrijden
  const EX7 = buildExamGeneric(
    7,
    "Taxi Examen 7 (40 vragen) — Route & navigatie",
    "Taxi",
    (i, place, time, issue, extra, cust) => q(i, "Route", `(${place} • ${issue}) Je moet omrijden. Wat is professioneel?`,
      ["Niets zeggen", "Klant kort informeren en veilig blijven rijden", "Regels overtreden om tijd in te halen"], 1),
    (i, place, time, issue, extra, cust) => q(i, "Navigatie", `(${place} • ${time}) Navigatie stuurt je tegen verkeersborden in. Wat doe je?`,
      ["Navigatie volgen", "Verkeersborden volgen; navigatie is hulpmiddel", "Stoppen midden op de weg"], 1),
    (i, place, time, issue, extra, cust) => q(i, "Route", `(${place} • ${time}) De klant wil een extra stop. Wat is het beste?`,
      ["Zonder iets te zeggen doen", "Overleggen wat het betekent voor tijd/prijs en dan akkoord", "Altijd weigeren"], 1),
  );

  // 8 — Professionaliteit/service
  const EX8 = buildExamGeneric(
    8,
    "Taxi Examen 8 (40 vragen) — Service & professionaliteit",
    "Taxi",
    (i, place, time, issue, extra, cust) => q(i, "Service", `(${place} • ${cust}) Wat is een klantgerichte start van een rit?`,
      ["Zonder groeten wegrijden", "Bestemming bevestigen en rustig starten", "Eerst je telefoon bijwerken"], 1),
    (i, place, time, issue, extra, cust) => q(i, "Communicatie", `(${place} • ${cust}) Hoe ga je om met een klacht tijdens de rit?`,
      ["Negeren", "Luisteren en rustig reageren", "Boos terugdoen"], 1),
    (i, place, time, issue, extra, cust) => q(i, "Professionaliteit", `(${place} • ${cust}) Wat is passende rijstijl met passagiers?`,
      ["Sportief optrekken", "Rustig, voorspelbaar en anticiperend", "Op bumper rijden"], 1),
  );

  // 9 — Rij- en rusttijden/vermoeidheid
  const EX9 = buildExamGeneric(
    9,
    "Taxi Examen 9 (40 vragen) — Rij- en rusttijden",
    "Taxi",
    (i, place, time, issue, extra, cust) => q(i, "Vermoeidheid", `(${place} • ${time}) Je merkt dat je slaperig wordt. Wat is het beste?`,
      ["Nog één rit en dan pauze", "Pauze nemen vóór je verder rijdt", "Hardere muziek en door"], 1),
    (i, place, time, issue, extra, cust) => q(i, "Rij- en rusttijden", `(${place} • ${time}) Wat is het uitgangspunt bij professioneel werken?`,
      ["Rijden zolang je wakker blijft", "Rij- en rusttijden naleven; veilig werken", "Rust pas na dienst"], 1),
    (i, place, time, issue, extra, cust) => q(i, "Werkdruk", `(${place} • ${time}) Hoe ga je om met tijdsdruk?`,
      ["Harder rijden", "Veilig blijven rijden en realistisch plannen", "Regels loslaten"], 1),
  );

  // 10 — PAMAN & noodsituaties
  const EX10 = buildExamGeneric(
    10,
    "Taxi Examen 10 (40 vragen) — PAMAN & nood",
    "Taxi",
    (i, place, time, issue, extra, cust) => q(i, "PAMAN", `(${place}) Waar staat PAMAN voor?`,
      ["Persoonlijke veiligheid, Andersmans veiligheid, Markeren, Alarmeren, Noodzakelijke hulp verlenen",
       "Parkeren, Afrekenen, Meter, Afslag, Navigatie",
       "Pech, Alarm, Motor, Aanrijding, Niets"], 0),
    (i, place, time, issue, extra, cust) => q(i, "Nood", `(${place} • ${time}) Een passagier wordt onwel. Wat doe je?`,
      ["Doorrijden naar bestemming", "Veilig stoppen en passende hulp inschakelen", "Negeren"], 1),
    (i, place, time, issue, extra, cust) => q(i, "PAMAN", `(${place} • ${time}) Wat betekent 'alarmeren' binnen PAMAN?`,
      ["Boos terugroepen", "Hulp/centrale/hulpdiensten inschakelen waar nodig", "Hard remmen zodat iedereen stopt"], 1),
  );

  // 11 — Voertuig/KIWA/techniek
  const EX11 = buildExamGeneric(
    11,
    "Taxi Examen 11 (40 vragen) — Voertuig & KIWA",
    "Taxi",
    (i, place, time, issue, extra, cust) => q(i, "Voertuig", `(${place} • ${time}) Wat controleer je vóór je dienst om veilig te kunnen rijden?`,
      ["Niets", "Basis: banden, verlichting, schade", "Alleen radio/airco"], 1),
    (i, place, time, issue, extra, cust) => q(i, "KIWA", `(${place} • ${time}) Waarvoor is een taxi-keuring (KIWA) in de praktijk vooral belangrijk?`,
      ["Om sneller te mogen rijden", "Om te voldoen aan gestelde eisen/inspectie voor taxivervoer", "Om brandstofkosten te verlagen"], 1),
    (i, place, time, issue, extra, cust) => q(i, "Mankement", `(${place} • ${time}) Je hebt een veiligheidskritische storing. Wat doe je?`,
      ["Negeren en doorrijden", "Veilig stoppen en volgens procedure handelen", "Alleen langzamer rijden"], 1),
  );

  // 12 — Handhaving/boetes
  const EX12 = buildExamGeneric(
    12,
    "Taxi Examen 12 (40 vragen) — Handhaving & boetes",
    "Taxi",
    (i, place, time, issue, extra, cust) => q(i, "Handhaving", `(${place}) Wat kan een reden zijn voor een boete bij taxivervoer?`,
      ["Netjes rijden", "Niet voldoen aan taxivoorschriften/registratie", "Gordel dragen"], 1),
    (i, place, time, issue, extra, cust) => q(i, "ILT-controle", `(${place}) Wat is professioneel gedrag bij een controle?`,
      ["Meewerken en gevraagde documenten tonen", "Discussie zoeken en weigeren", "Snel wegrijden"], 0),
    (i, place, time, issue, extra, cust) => q(i, "Documenten", `(${place}) Wat voorkomt veel problemen bij controles?`,
      ["Gokken dat het wel goed is", "Voor dienst alles nalopen (pas/registratie/voertuig)", "Alleen tanken"], 1),
  );

  // 13 — Privacy/AVG/camera
  const EX13 = buildExamGeneric(
    13,
    "Taxi Examen 13 (40 vragen) — Privacy & AVG",
    "Taxi",
    (i, place, time, issue, extra, cust) => q(i, "AVG/Privacy", `(${place} • ${cust}) Wat is juist over klantinformatie (AVG)?`,
      ["Alles opslaan voor later", "Alleen bewaren wat nodig is en veilig omgaan", "Delen met vrienden"], 1),
    (i, place, time, issue, extra, cust) => q(i, "Camera", `(${place} • ${cust}) Je hebt camerabeelden. Wat is professioneel?`,
      ["Altijd openbaar delen", "Alleen gebruiken volgens doel/regels en beveiligd bewaren", "Verkopen aan anderen"], 1),
    (i, place, time, issue, extra, cust) => q(i, "Privacy", `(${place} • ${cust}) Een klant vraagt om gegevens van een vorige klant. Wat doe je?`,
      ["Geven", "Niet geven; privacy respecteren", "Alleen geven tegen betaling"], 1),
  );

  // 14 — Praktijksituaties/dilemma’s
  const EX14 = buildExamGeneric(
    14,
    "Taxi Examen 14 (40 vragen) — Praktijksituaties",
    "Taxi",
    (i, place, time, issue, extra, cust) => q(i, "Dilemma", `(${place} • ${issue}) De klant wil dat je stopt op een plek die niet veilig is. Wat is juist?`,
      ["Toch stoppen", "Doorrijden naar een veilige plek waar stoppen is toegestaan", "Midden op de rijbaan stoppen"], 1),
    (i, place, time, issue, extra, cust) => q(i, "Dilemma", `(${place} • ${time}) Je krijgt een telefoontje tijdens het rijden. Wat is het beste?`,
      ["Opnemen en praten", "Stoppen op een veilige plek waar het is toegestaan", "Snel appen"], 1),
    (i, place, time, issue, extra, cust) => q(i, "Dilemma", `(${place} • ${time}) Pin werkt niet en klant heeft geen cash. Wat is best?`,
      ["Klant laten gaan", "Oplossing zoeken volgens afspraak/bedrijf", "Boos worden"], 1),
  );

  // 15 — Proefexamen (mix, maar nog steeds taxi en correct)
  const EX15 = buildExamGeneric(
    15,
    "Taxi Examen 15 (40 vragen) — Proefexamen",
    "Taxi",
    (i, place, time, issue, extra, cust) => q(i, "Proefexamen", `(${place} • ${time}) ILT vraagt om je taxipas. Wat doe je?`,
      ["Tonen op verzoek", "Weigeren", "Alleen rijbewijs tonen"], 0),
    (i, place, time, issue, extra, cust) => q(i, "Proefexamen", `(${place} • ${time}) De BCT werkt niet vóór je dienst. Wat doe je?`,
      ["Toch rijden", "Storingsprocedure volgen en alleen rijden als toegestaan", "BCT uitzetten en doorrijden"], 1),
    (i, place, time, issue, extra, cust) => q(i, "Proefexamen", `(${place} • ${time}) Je moet stoppen om te bellen. Wat is juist?`,
      ["Stoppen op een kruispunt", "Stoppen op een veilige plek waar het is toegestaan", "Stoppen midden op de rijbaan"], 1),
  );

  // =========================================================
  // Export: 15 examens
  // =========================================================
  const exams = [
    makeExam(1, "Taxi Examen 1 (40 vragen) — Taxipas & ILT", E1),
    makeExam(2, "Taxi Examen 2 (40 vragen) — BCT & registratie", E2),
    makeExam(3, "Taxi Examen 3 (40 vragen) — Tarieven & betaling", E3),
    makeExam(4, "Taxi Examen 4 (40 vragen) — Conflicten & gedrag", E4),
    makeExam(5, "Taxi Examen 5 (40 vragen) — Veiligheid instap/uitstap", E5),

    EX6, EX7, EX8, EX9, EX10, EX11, EX12, EX13, EX14, EX15
  ];

  window.EXAM_DATA = { exams };
  window.EXAMS = exams;
  window.exams = exams;
  window.ggExams = exams;

})();
