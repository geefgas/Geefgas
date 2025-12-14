/* =========================================
   GeefGas – exam-data.js (COMPLETE)
   Doel: moeilijkere (plausibele) antwoorden
   - Taxi verkeer + taxi-regelgeving (basis set)
   - Structuur: EXAM_SETS + QUESTIONS + helpers
   ========================================= */

const EXAM_SETS = {
  taxi_examen_v1: {
    id: "taxi_examen_v1",
    title: "Taxi Examen v1 (40 vragen)",
    durationSec: 25 * 60,
    // Je kunt dit uitbreiden naar 40 door meer IDs toe te voegen.
    questionIds: [
      "TX_VOORR_001",
      "TX_VOORR_002",
      "TX_STOP_001",
      "TX_SNEL_001",
      "TX_PARK_001",
      "TX_BAAN_001",
      "TX_OV_001",
      "TX_SPOED_001",
      "TX_PASS_001",
      "TX_PASS_002",
      "TX_WEGW_001",
      "TX_BCT_001",
      "TX_KIWA_001",
      "TX_ILT_001",
      "TX_TARIEF_001",
      "TX_DOC_001",
      "TX_VEIL_001",
      "TX_VEIL_002",
      "TX_OVERT_001",
      "TX_ETIEK_001"
    ]
  }
};

/**
 * QUESTIONS:
 * - answers: 3 of 4 opties (hier meestal 3 voor rust)
 * - correct: index van juiste antwoord
 * - explanation: korte, duidelijke uitleg (examengericht)
 * - image: placeholder pad (later jouw AI visuals)
 */
const QUESTIONS = [
  {
    id: "TX_VOORR_001",
    category: "Voorrang",
    image: "assets/placeholder-taxi.jpg",
    question:
      "Je nadert als taxi een gelijkwaardig kruispunt. Van rechts komt een fietser. Wat doe je?",
    answers: [
      "Je laat de fietser van rechts voorgaan en past je snelheid tijdig aan.",
      "Je rijdt door omdat je sneller bent en de fietser jou wel ziet naderen.",
      "Je mindert vaart, maar gaat door als de fietser nog niet op het kruispunt is."
    ],
    correct: 0,
    explanation:
      "Op een gelijkwaardig kruispunt gaat verkeer van rechts voor. ‘Nog niet op het kruispunt’ is geen regel; je moet voorrang verlenen en je snelheid aanpassen."
  },
  {
    id: "TX_VOORR_002",
    category: "Voorrang",
    image: "assets/placeholder-taxi.jpg",
    question:
      "Je slaat linksaf en een tegenligger gaat rechtdoor. Wat is de juiste keuze?",
    answers: [
      "Je laat de tegenligger voorgaan, tenzij verkeersborden/tekens anders aangeven.",
      "Je mag eerst omdat je links afslaat en je richting al vroeg hebt aangegeven.",
      "Je mag tegelijk rijden als je vóór het midden van het kruispunt blijft."
    ],
    correct: 0,
    explanation:
      "Bij linksaf slaan moet je doorgaans voorrang verlenen aan tegemoetkomend verkeer dat rechtdoor gaat (tenzij de situatie/borden anders regelen)."
  },
  {
    id: "TX_STOP_001",
    category: "Borden",
    image: "assets/placeholder-bord.jpg",
    question:
      "Je nadert een STOP-bord. Wanneer voldoe je aan de verplichting?",
    answers: [
      "Je stopt volledig vóór de stopstreep of vóór het kruispunt als er geen streep is, en pas daarna rijd je door.",
      "Je mindert tot stapvoets en kijkt goed; volledig stilstaan is alleen nodig als er verkeer aankomt.",
      "Je stopt alleen als je geen vrij zicht hebt; anders mag je direct doorrijden."
    ],
    correct: 0,
    explanation:
      "STOP betekent verplicht volledig stilstaan. ‘Stapvoets’ of ‘alleen bij verkeer’ is niet voldoende."
  },
  {
    id: "TX_SNEL_001",
    category: "Snelheid",
    image: "assets/placeholder-weg.jpg",
    question:
      "Je rijdt met passagier. Het is nat en donker, maar je hebt haast. Wat is het meest juist?",
    answers: [
      "Je past je snelheid aan omstandigheden aan, ook als dit onder de maximumsnelheid is.",
      "Je mag de maximumsnelheid aanhouden zolang je binnen je rijstrook blijft.",
      "Je mag iets sneller als je de situatie goed kent en het rustig is."
    ],
    correct: 0,
    explanation:
      "Maximumsnelheid is een bovengrens. Bij regen/donkerte moet je snelheid aanpassen aan omstandigheden."
  },
  {
    id: "TX_PARK_001",
    category: "Stoppen & parkeren",
    image: "assets/placeholder-stad.jpg",
    question:
      "Je wilt een passagier laten uitstappen op een smalle straat. Wat is het meest veilig en correct?",
    answers: [
      "Je kiest een plek waar uitstappen veilig kan zonder het verkeer onverwacht te hinderen, en je waarschuwt de passagier om uit te kijken.",
      "Je stopt zo dicht mogelijk bij de bestemming, ook al moeten achteropkomenden even wachten.",
      "Je stopt kort op de rijbaan; uitstappen duurt maar enkele seconden."
    ],
    correct: 0,
    explanation:
      "Passagiersveiligheid en verkeersveiligheid staan voorop. ‘Even wachten’ kan gevaarlijk zijn door onverwachte obstakels."
  },
  {
    id: "TX_BAAN_001",
    category: "Rijstrookgebruik",
    image: "assets/placeholder-weg.jpg",
    question:
      "Je rijdt op een meerstrooksweg en wilt voorsorteren. Wat is het meest juist?",
    answers: [
      "Je sorteert tijdig voor met richtingaanwijzer en past je snelheid aan, zonder anderen te hinderen.",
      "Je wisselt pas laat van rijstrook zodat je sneller vooraan kunt aansluiten.",
      "Je gaat kort op de naastgelegen strook rijden om ruimte af te dwingen."
    ],
    correct: 0,
    explanation:
      "Voorsorteren doe je tijdig en voorspelbaar. Ruimte ‘afdwingen’ is fout en risicovol."
  },
  {
    id: "TX_OV_001",
    category: "Openbaar vervoer / busbaan",
    image: "assets/placeholder-ov.jpg",
    question:
      "Je ziet een busbaan. Wat is de juiste aanpak als taxi?",
    answers: [
      "Je gebruikt de busbaan alleen als het expliciet is toegestaan voor taxi’s (bord/onderbord) en je voldoet aan voorwaarden.",
      "Je mag de busbaan gebruiken zolang je geen bus hindert.",
      "Je mag de busbaan gebruiken om passagiers snel te vervoeren als het druk is."
    ],
    correct: 0,
    explanation:
      "Gebruik van busbaan door taxi hangt af van lokale borden/onderborden. ‘Niet hinderen’ is geen algemene toestemming."
  },
  {
    id: "TX_SPOED_001",
    category: "Spoed / voorrang",
    image: "assets/placeholder-weg.jpg",
    question:
      "Een voertuig met blauw zwaailicht en sirene nadert achter je. Wat is het meest juist?",
    answers: [
      "Je maakt veilig ruimte en volgt aanwijzingen; je mag daarbij kort afwijken van regels als dat nodig en veilig is.",
      "Je blijft rijden volgens de regels; zij zoeken zelf maar een weg langs je.",
      "Je versnelt om uit de weg te blijven, ook als je dan te hard rijdt."
    ],
    correct: 0,
    explanation:
      "Je moet voorrang verlenen en ruimte maken. Onveilig versnellen is fout; afwijken van regels kan alleen als het veilig is."
  },
  {
    id: "TX_PASS_001",
    category: "Passagiers",
    image: "assets/placeholder-taxi.jpg",
    question:
      "Een passagier wil uitstappen aan de rechterkant, maar daar is direct een fietsstrook. Wat doe je?",
    answers: [
      "Je stopt zo dat uitstappen veilig kan en je instrueert de passagier om eerst te kijken (dooring) voordat de deur opengaat.",
      "Je laat direct uitstappen; fietsers moeten maar anticiperen.",
      "Je laat uitstappen aan de linkerkant zodat de fietsstrook vrij blijft."
    ],
    correct: 0,
    explanation:
      "‘Dooring’ voorkomen is essentieel: veilig stoppen en passagier instrueren. Linkerkant uitstappen is vaak gevaarlijker door verkeer."
  },
  {
    id: "TX_PASS_002",
    category: "Passagiers",
    image: "assets/placeholder-stad.jpg",
    question:
      "Een passagier vraagt je om ‘even snel’ te stoppen op een plek waar dat onveilig is. Wat is het meest professioneel?",
    answers: [
      "Je legt kort uit dat je een veilige plek zoekt en stopt iets verderop waar het wél kan.",
      "Je stopt toch; klant is koning en het duurt maar kort.",
      "Je stopt half op de stoep zodat je niemand hindert."
    ],
    correct: 0,
    explanation:
      "Veiligheid en regels gaan voor. ‘Half op de stoep’ kan hinder/gevaar opleveren en is vaak verboden."
  },
  {
    id: "TX_WEGW_001",
    category: "Wegwerkzaamheden",
    image: "assets/placeholder-wegwerk.jpg",
    question:
      "Bij wegwerkzaamheden staat een tijdelijke versmalling. Je nadert tegelijk met een tegenligger. Wat is het meest juist?",
    answers: [
      "Je volgt de voorrangsregeling (borden/tekens) en neemt geen risico; zo nodig wacht je.",
      "Je rijdt door als jij er als eerste ‘bijna’ bent.",
      "Je geeft lichtsignalen zodat de tegenligger stopt."
    ],
    correct: 0,
    explanation:
      "Tijdelijke borden/tekens bepalen de voorrang. ‘Bijna eerst’ en seinen om voorrang te krijgen is fout."
  },

  /* ===== Taxi-regelgeving (examengericht, met plausibele afleiders) ===== */

  {
    id: "TX_BCT_001",
    category: "Taxi-regelgeving",
    image: "assets/placeholder-doc.jpg",
    question:
      "Wat is de meest juiste omschrijving van wat je als chauffeur moet doen met ritregistratie/boordcomputer (BCT) in de praktijk?",
    answers: [
      "Je zorgt dat ritgegevens correct worden vastgelegd volgens de geldende eisen en je gebruikt het systeem zoals voorgeschreven.",
      "Je registreert alleen ritten met pinbetaling; contante ritten zijn optioneel.",
      "Je registreert alleen ritten buiten de standplaats; binnen de stad is dat niet nodig."
    ],
    correct: 0,
    explanation:
      "Registratie/administratie moet voldoen aan de voorschriften. ‘Alleen pin’ of ‘alleen buiten stad’ is onjuist."
  },
  {
    id: "TX_KIWA_001",
    category: "Taxi-regelgeving",
    image: "assets/placeholder-doc.jpg",
    question:
      "Welke uitspraak over vergunningen/kwaliteitseisen (zoals KIWA-keuringen of vergelijkbare eisen) is het meest juist?",
    answers: [
      "Je voldoet aan de geldende eisen en kunt aantonen dat voertuig/bedrijf aan voorwaarden voldoet wanneer dat gevraagd wordt.",
      "Keuringen zijn alleen nodig bij een nieuwe taxi; daarna niet meer.",
      "Alleen het voertuig moet voldoen; de chauffeurdocumenten zijn los daarvan niet relevant."
    ],
    correct: 0,
    explanation:
      "In de praktijk gaat het om voldoen aan eisen en kunnen aantonen. ‘Eenmalig’ of ‘alleen voertuig’ is te kort door de bocht."
  },
  {
    id: "TX_ILT_001",
    category: "Taxi-regelgeving",
    image: "assets/placeholder-doc.jpg",
    question:
      "Je wordt gecontroleerd (handhaving/inspectie). Wat is de beste houding en aanpak?",
    answers: [
      "Je werkt professioneel mee, toont gevraagde documenten/gegevens en blijft rustig en correct.",
      "Je discussieert eerst over de reden van controle voordat je iets laat zien.",
      "Je geeft alleen informatie als zij kunnen bewijzen dat jij iets fout hebt gedaan."
    ],
    correct: 0,
    explanation:
      "Professioneel meewerken en correct documenteren voorkomt escalatie. Discussie/tegenwerken helpt niet en kan gevolgen hebben."
  },
  {
    id: "TX_TARIEF_001",
    category: "Tarieven",
    image: "assets/placeholder-taxi.jpg",
    question:
      "Wat is het meest juist als een passagier vraagt hoe de prijs tot stand komt?",
    answers: [
      "Je legt rustig uit hoe tariefopbouw werkt (bijv. start/afstand/tijd) en communiceert vooraf zo duidelijk mogelijk.",
      "Je noemt alleen een totaalbedrag achteraf; uitleg is niet nodig.",
      "Je zegt dat het ‘ongeveer’ is en past het tarief aan op basis van drukte."
    ],
    correct: 0,
    explanation:
      "Duidelijke communicatie voorkomt klachten. Tarief ‘aanpassen op drukte’ is niet zomaar toegestaan; transparantie is key."
  },
  {
    id: "TX_DOC_001",
    category: "Documenten",
    image: "assets/placeholder-doc.jpg",
    question:
      "Welke situatie is het meest correct met betrekking tot documenten/identificatie als taxichauffeur?",
    answers: [
      "Je kunt relevante documenten (chauffeur/voertuig/bedrijf) tonen wanneer daarom wordt gevraagd door bevoegde instanties.",
      "Documenten hoeven alleen op kantoor aanwezig te zijn; onderweg is niet nodig.",
      "Alleen de passagier mag om documenten vragen; handhaving niet."
    ],
    correct: 0,
    explanation:
      "In de praktijk moet je kunnen aantonen dat je bevoegd bent en aan eisen voldoet bij controle."
  },

  /* ===== Veiligheid & professionaliteit ===== */

  {
    id: "TX_VEIL_001",
    category: "Veiligheid",
    image: "assets/placeholder-taxi.jpg",
    question:
      "Een passagier weigert de gordel om te doen. Wat is het meest juist?",
    answers: [
      "Je vraagt de passagier de gordel te gebruiken en rijdt pas weg als dit veilig is en volgens de regels kan.",
      "Je rijdt gewoon; het is de verantwoordelijkheid van de passagier.",
      "Je rijdt alleen langzamer zodat het risico kleiner is."
    ],
    correct: 0,
    explanation:
      "Gordelgebruik is veiligheids- en regelkwestie. ‘Alleen langzamer’ lost verplichtingen niet op."
  },
  {
    id: "TX_VEIL_002",
    category: "Veiligheid",
    image: "assets/placeholder-stad.jpg",
    question:
      "Je ziet een agressieve verkeerssituatie. Wat is de meest professionele taxi-reactie?",
    answers: [
      "Je blijft rustig, vergroot afstand, vermijdt escalatie en kiest veiligheid boven ‘gelijk krijgen’.",
      "Je reageert met lichtsignalen/claxon om duidelijk te maken dat jij gelijk hebt.",
      "Je gaat dichter erop rijden om te voorkomen dat iemand invoegt."
    ],
    correct: 0,
    explanation:
      "Professioneel rijgedrag is defensief en de-escalerend. Dicht erop en ‘druk zetten’ is gevaarlijk."
  },
  {
    id: "TX_OVERT_001",
    category: "Regels",
    image: "assets/placeholder-weg.jpg",
    question:
      "Je bent te laat voor een rit. Welke keuze is het meest juist?",
    answers: [
      "Je rijdt volgens de regels en past planning/route aan; je compenseert niet met risico’s.",
      "Je rijdt iets harder ‘met de flow mee’ zolang anderen ook harder rijden.",
      "Je haalt vaker in zodat je tijd wint, ook als het krap is."
    ],
    correct: 0,
    explanation:
      "Tijdverlies compenseer je niet met gevaarlijk rijgedrag. ‘Flow’ is geen vrijbrief."
  },
  {
    id: "TX_ETIEK_001",
    category: "Klant & communicatie",
    image: "assets/placeholder-taxi.jpg",
    question:
      "Een passagier klaagt over de route. Wat is de beste aanpak?",
    answers: [
      "Je blijft professioneel, legt de keuze uit en biedt eventueel een alternatief als dat redelijk is.",
      "Je zegt dat jij de chauffeur bent en dat discussie zinloos is.",
      "Je verandert direct de route zonder te checken of het veilig/handig is."
    ],
    correct: 0,
    explanation:
      "Professioneel = rustig uitleggen + eventueel alternatief. Niet koppig, maar ook niet impulsief wijzigen."
  }
];

/* ===== Helpers ===== */
function getQuestionById(id){
  return QUESTIONS.find(q => q.id === id) || null;
}
