/* =========================================================
   GeefGas — exam-data.js
   Taxi Examen 1 (40 unieke vragen)
   - Alleen categorie: Taxi
   - ABC-vragen
   - Geen herhalingen
   ========================================================= */

(function () {

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

  const TAXI_EXAMEN_1 = {
    id: "taxi-examen-1",
    title: "Taxi Examen 1 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [

      q(1, "Taxipas", "Welke eis geldt om als taxichauffeur te mogen rijden?", [
        "Alleen rijbewijs B",
        "Een geldige taxipas",
        "Alleen inschrijving bij de KvK"
      ], 1),

      q(2, "Taxipas", "Wanneer moet je je taxipas kunnen tonen?", [
        "Alleen bij een ongeval",
        "Altijd tijdens taxiwerk",
        "Alleen bij nacht"
      ], 1),

      q(3, "ILT", "Wat mag de Inspectie Leefomgeving en Transport (ILT) controleren?", [
        "Alleen je kenteken",
        "Documenten en ritregistratie",
        "Alleen je rijbewijs"
      ], 1),

      q(4, "Vergunningen", "Wanneer mag je taxivervoer uitvoeren?", [
        "Als de klant contant betaalt",
        "Als alle vereiste vergunningen en voorwaarden in orde zijn",
        "Als je de route goed kent"
      ], 1),

      q(5, "KIWA", "Waarvoor is een KIWA-keuring in de praktijk belangrijk?", [
        "Voor brandstofverbruik",
        "Voor veiligheid en wettelijke eisen",
        "Voor hogere tarieven"
      ], 1),

      q(6, "BCT", "Wat is het hoofddoel van de BCT?", [
        "Navigatie tonen",
        "Ritten en werktijden registreren",
        "Betalingen verwerken"
      ], 1),

      q(7, "BCT", "Wat doe je als de BCT vóór je dienst niet werkt?", [
        "Toch gaan rijden",
        "De storingsprocedure volgen",
        "De BCT uitschakelen"
      ], 1),

      q(8, "BCT", "Wat is juist als de BCT tijdens de rit uitvalt?", [
        "Negeren en doorrijden",
        "Handelen volgens de storingsprocedure",
        "De klant laten registreren"
      ], 1),

      q(9, "Ritweigering", "Wanneer mag je een rit weigeren?", [
        "Altijd zonder reden",
        "Bij gevaar of onacceptabel gedrag",
        "Bij korte afstand"
      ], 1),

      q(10, "Gordel", "Een passagier weigert de gordel te dragen. Wat is juist?", [
        "Toestaan bij korte rit",
        "Uitleggen en alleen rijden als het veilig is",
        "Negeren"
      ], 1),

      q(11, "Veiligheid", "Waar laat je een klant het beste uitstappen?", [
        "Midden op de rijbaan",
        "Op een veilige en toegestane plek",
        "Op een kruispunt"
      ], 1),

      q(12, "Doorring", "Hoe voorkom je gevaar bij uitstappen naast fietsers?", [
        "Deur direct openen",
        "Eerst kijken en veilig uitstappen",
        "De klant snel laten uitstappen"
      ], 1),

      q(13, "Betaling", "Wanneer reken je een rit normaal af?", [
        "Aan het begin",
        "Aan het einde van de rit",
        "Alleen bij contant"
      ], 1),

      q(14, "Betaling", "De pin werkt niet. Wat is het beste?", [
        "Klant laten gaan",
        "Oplossing zoeken volgens afspraak",
        "Boos worden"
      ], 1),

      q(15, "Bon", "Een klant vraagt om een bon. Wat is juist?", [
        "Dat hoeft nooit",
        "Je verstrekt een bon volgens de regels",
        "Alleen bij zakelijke ritten"
      ], 1),

      q(16, "Route", "De klant wil een andere route. Wat is professioneel?", [
        "Negeer de wens",
        "Kort bespreken en volgen als het kan",
        "De rit stoppen"
      ], 1),

      q(17, "Route", "Je rijdt verkeerd. Wat is het beste?", [
        "Illegaal keren",
        "Rustig aangeven en veilig corrigeren",
        "Doen alsof het expres was"
      ], 1),

      q(18, "Klantgedrag", "Een klant wordt boos. Wat doe je?", [
        "Boos terugdoen",
        "Rustig blijven en professioneel handelen",
        "De klant negeren"
      ], 1),

      q(19, "Conflicten", "Wat is prioriteit bij een dreigende situatie?", [
        "Op tijd aankomen",
        "Veiligheid (PAMAN)",
        "Discussie winnen"
      ], 1),

      q(20, "PAMAN", "Waar staat PAMAN voor?", [
        "Persoonlijke veiligheid, Andersmans veiligheid, Markeren, Alarmeren, Noodzakelijke hulp",
        "Parkeren, Afrekenen, Muziek, Afslag, Navigatie",
        "Pech, Alarm, Motor, Aanrijding, Niets"
      ], 0),

      q(21, "Nood", "Een passagier wordt onwel. Wat doe je?", [
        "Doorrijden",
        "Veilig stoppen en hulp inschakelen",
        "Negeren"
      ], 1),

      q(22, "Rij- en rusttijden", "Waarom zijn rusttijden belangrijk?", [
        "Voor hogere omzet",
        "Voor veiligheid en concentratie",
        "Voor klanten"
      ], 1),

      q(23, "Vermoeidheid", "Je merkt dat je slaperig wordt. Wat is juist?", [
        "Nog één rit",
        "Pauze nemen",
        "Harder rijden"
      ], 1),

      q(24, "Standplaats", "Wat is juist gedrag op een taxistandplaats?", [
        "Voordringen",
        "De wachtrij volgen",
        "Dubbel parkeren"
      ], 1),

      q(25, "Schiphol", "Wat is belangrijk bij Kiss & Ride-gebieden?", [
        "Zo lang mogelijk blijven staan",
        "Aanwijzingen en regels volgen",
        "Op de busbaan stoppen"
      ], 1),

      q(26, "Privacy", "Hoe ga je om met klantinformatie?", [
        "Delen met collega’s",
        "Discreet en vertrouwelijk",
        "Openbaar maken"
      ], 1),

      q(27, "Privacy", "Mag je klanten filmen zonder reden?", [
        "Ja",
        "Nee, alleen bij noodzaak en volgens regels",
        "Altijd"
      ], 1),

      q(28, "Voertuig", "Wat controleer je vóór je dienst?", [
        "Alleen brandstof",
        "Basisveiligheid van het voertuig",
        "Niets"
      ], 1),

      q(29, "Techniek", "Je ziet een veiligheidswaarschuwing op het dashboard. Wat doe je?", [
        "Negeren",
        "Veilig stoppen en handelen",
        "Harder rijden"
      ], 1),

      q(30, "Alcohol/drugs", "Wat geldt voor alcohol tijdens taxiwerk?", [
        "Een beetje mag",
        "Nul tolerantie",
        "Alleen overdag"
      ], 1),

      q(31, "Professionaliteit", "Wat hoort bij professioneel rijgedrag?", [
        "Sportief rijden",
        "Rustig en voorspelbaar rijden",
        "Haast maken"
      ], 1),

      q(32, "Tarieven", "Wat doe je bij twijfel over de prijs?", [
        "Zelf bepalen",
        "Vooraf duidelijk communiceren",
        "Achteraf uitleggen"
      ], 1),

      q(33, "Bagage", "Hoe ga je om met veel bagage?", [
        "Weigeren",
        "Helpen waar veilig mogelijk",
        "Los laten liggen"
      ], 1),

      q(34, "Communicatie", "Wat is goede communicatie met klanten?", [
        "Kortaf",
        "Duidelijk en respectvol",
        "Onpersoonlijk"
      ], 1),

      q(35, "Werkdruk", "Hoe ga je om met tijdsdruk?", [
        "Regels loslaten",
        "Veilig blijven rijden",
        "Sneller rijden"
      ], 1),

      q(36, "Wetgeving", "Waarom zijn taxiregels belangrijk?", [
        "Voor snelheid",
        "Voor veiligheid en eerlijkheid",
        "Voor omzet"
      ], 1),

      q(37, "Dienst", "Wanneer mag je rijden?", [
        "Altijd",
        "Alleen als je fit en alert bent",
        "Bij weinig klanten"
      ], 1),

      q(38, "Stoppen", "Waar stop je voor een telefoontje?", [
        "Op een kruispunt",
        "Op een veilige toegestane plek",
        "Midden op de weg"
      ], 1),

      q(39, "Verantwoordelijkheid", "Wie is verantwoordelijk tijdens de rit?", [
        "De klant",
        "De chauffeur",
        "De planner"
      ], 1),

      q(40, "Samenvatting", "Wat is de kern van professioneel taxiwerk?", [
        "Snelheid",
        "Veilig en klantgericht vervoer",
        "Omzet"
      ], 1)

    ]
  };

  const exams = [TAXI_EXAMEN_1];

  window.EXAM_DATA = { exams };
  window.EXAMS = exams;
  window.exams = exams;
  window.ggExams = exams;

})();
