// GeefGas – Taxi Exam Data (Examen v1 = 40 vragen)
// Let op: vragen zijn eigen geschreven (geen CBR-tekst), maar examengericht en taxi-specifiek.
//
// Foto's:
// - Nu gebruiken we eigen SVG visuals (geen copyright / altijd beschikbaar).
// - Later kunnen we dit vervangen door AI-realistische beelden (jouw eigendom).

function makeSvgDataUri(title, subtitle) {
  const svg =
`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="520" viewBox="0 0 1200 520">
  <defs>
    <linearGradient id="bg" x1="0" x2="1">
      <stop offset="0" stop-color="#171923"/>
      <stop offset="1" stop-color="#0F1116"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="520" fill="url(#bg)"/>
  <circle cx="980" cy="140" r="170" fill="#E6C36A" opacity="0.14"/>
  <circle cx="1040" cy="180" r="230" fill="#E6C36A" opacity="0.08"/>
  <text x="60" y="115" font-family="Arial" font-size="42" fill="#F7F7FA" font-weight="700">${escapeXml(title)}</text>
  <text x="60" y="168" font-family="Arial" font-size="22" fill="#B7B9C6">${escapeXml(subtitle)}</text>
  <rect x="60" y="230" width="1080" height="230" rx="22" fill="#1F2230" stroke="rgba(255,255,255,0.10)"/>
  <text x="90" y="305" font-family="Arial" font-size="24" fill="#F7F7FA" font-weight="700">Taxi Examen v1 (placeholder visual)</text>
  <text x="90" y="350" font-family="Arial" font-size="20" fill="#B7B9C6">Later vervangen door AI-realistische foto’s (jouw eigendom).</text>
  <rect x="880" y="335" width="230" height="70" rx="18" fill="#CFAE55"/>
  <text x="995" y="380" font-family="Arial" font-size="22" fill="#111111" font-weight="900" text-anchor="middle">Volgende</text>
</svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function escapeXml(str){
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const EXAM_SETS = {
  taxi_examen_v1: {
    id: "taxi_examen_v1",
    title: "Taxi Examen v1 (40 vragen)",
    durationSec: 25 * 60,
    questionCount: 40,
    questionIds: Array.from({length: 40}, (_, i) => i + 1),
  }
};

const EXAM_QUESTIONS = [
  // ===== VERKEERSINZICHT (taxi-context) =====
  {
    id: 1,
    category: "Voorrang (taxi-context)",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Voorrang", "Gelijkwaardig kruispunt – verkeer van rechts"),
    question: "Je nadert als taxi een gelijkwaardig kruispunt. Van rechts komt een fietser. Wat doe je?",
    answers: ["Ik rijd door, ik ben taxi", "Ik laat de fietser van rechts voorgaan", "Ik geef gas om eerder te zijn"],
    correct: 1,
    explanation: "Taxi’s hebben geen algemene voorrang. Op een gelijkwaardig kruispunt gaat verkeer van rechts eerst."
  },
  {
    id: 2,
    category: "Rotonde",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Rotonde", "Wie heeft voorrang?"),
    question: "Je wilt een rotonde oprijden. Verkeer rijdt al op de rotonde. Wat is correct?",
    answers: ["Ik rijd door, ik heb haast", "Ik verleen voorrang aan verkeer op de rotonde", "Ik toeter zodat ze stoppen"],
    correct: 1,
    explanation: "Verkeer op de rotonde heeft voorrang (gebruikelijke situatie). Jij voegt veilig in."
  },
  {
    id: 3,
    category: "Stoppen & passagiers",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("In-/uitstappen", "Veiligheid gaat voor"),
    question: "Een passagier wil uitstappen op een plek waar dit onveilig is. Wat doe je?",
    answers: ["Toch stoppen, klant is koning", "Veilig alternatief voorstellen en daar stoppen", "Passagier laten springen terwijl je langzaam rijdt"],
    correct: 1,
    explanation: "Als professionele chauffeur weeg je veiligheid en verkeerssituatie mee. Kies een veilige plek."
  },
  {
    id: 4,
    category: "Slecht weer",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Slecht weer", "Remweg en zicht"),
    question: "Bij regen en slecht zicht met passagiers, wat is het beste rijgedrag?",
    answers: ["Snelheid omlaag en afstand groter", "Zelfde snelheid, anders kom je te laat", "Dichter op je voorganger rijden om sneller door te kunnen"],
    correct: 0,
    explanation: "Remweg wordt langer en zicht slechter. Professioneel rijden = rustiger en meer afstand."
  },
  {
    id: 5,
    category: "Verkeersborden",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Bordkennis", "Waarschuwings- / verbodsborden"),
    question: "Wat is de juiste houding bij een waarschuwingsbord (bijv. gevaarlijke situatie)?",
    answers: ["Snelheid aanpassen en extra opletten", "Negeer, is maar advies", "Alleen remmen als iemand toetert"],
    correct: 0,
    explanation: "Waarschuwingsborden betekenen: anticiperen, snelheid aanpassen en extra alert zijn."
  },
  {
    id: 6,
    category: "Wegmarkering",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Wegmarkering", "Doorgetrokken streep"),
    question: "Wat betekent een doorgetrokken streep tussen rijstroken?",
    answers: ["Overschrijden is toegestaan bij haast", "Niet overschrijden", "Alleen taxi’s mogen overschrijden"],
    correct: 1,
    explanation: "Een doorgetrokken streep mag je niet overschrijden (behalve uitzonderingen die hier niet gelden)."
  },
  {
    id: 7,
    category: "Snelheid (professionaliteit)",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Snelheid", "Comfort & veiligheid"),
    question: "Wat is als taxi-chauffeur het meest professioneel bij tijdsdruk?",
    answers: ["Harder rijden dan toegestaan", "Rustig binnen de regels rijden en veilig blijven", "Door rood als er niemand is"],
    correct: 1,
    explanation: "Professionaliteit is veiligheid en naleving. Tijdsdruk is geen reden om regels te overtreden."
  },
  {
    id: 8,
    category: "Inhalen",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Inhalen", "Zicht en ruimte"),
    question: "Wanneer is inhalen in het algemeen NIET verantwoord?",
    answers: ["Als je goed zicht en voldoende ruimte hebt", "Als je zicht beperkt is (bocht/top) of twijfel hebt", "Als je passagier zegt dat je moet inhalen"],
    correct: 1,
    explanation: "Beperkt zicht of twijfel = niet inhalen. Jij beslist, niet de passagier."
  },
  {
    id: 9,
    category: "Stoppen / stilstaan",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Stoppen", "Niet hinderen"),
    question: "Je wilt stoppen voor in-/uitstappen. Wat is de beste keuze?",
    answers: ["Stoppen waar het mag én zonder gevaar/hinder", "Altijd op de busbaan", "In een bocht, want dan zien ze je"],
    correct: 0,
    explanation: "Stoppen mag alleen waar het is toegestaan en veilig is voor anderen en je passagier."
  },
  {
    id: 10,
    category: "Gordels",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Passagiersveiligheid", "Gordelplicht"),
    question: "Wat is de juiste houding rond gordels in de taxi?",
    answers: ["Gordels zijn optioneel", "Je stimuleert/controleert dat passagiers gordel gebruiken waar verplicht", "Alleen de chauffeur hoeft gordel"],
    correct: 1,
    explanation: "Gordels zijn verplicht waar van toepassing. Als chauffeur stuur je op veiligheid."
  },

  // ===== TAXI-WETGEVING / VERGUNNINGEN / BCT / TARIEVEN =====
  {
    id: 11,
    category: "Chauffeurskaart (taxipas)",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Taxipas", "Chauffeurskaart"),
    question: "Wanneer moet je als taxichauffeur je chauffeurskaart (taxipas) kunnen tonen bij controle?",
    answers: ["Alleen als je klant erom vraagt", "Op verzoek van een toezichthouder/controleur", "Nooit, dat is privé"],
    correct: 1,
    explanation: "Bij toezicht/controle moet je je chauffeurskaart kunnen tonen. Zorg dat je deze bij je hebt."
  },
  {
    id: 12,
    category: "KIWA / vergunningen",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Vergunning", "Ondernemer vs chauffeur"),
    question: "Wat is het belangrijkste verschil tussen een chauffeurskaart en een ondernemers-/vervoersvergunning?",
    answers: ["Geen verschil", "Chauffeurskaart is voor de bestuurder; vergunning is voor het bedrijf/ondernemer", "Vergunning is alleen voor buitenlandse ritten"],
    correct: 1,
    explanation: "Chauffeurskaart = bevoegdheid chauffeur. Vergunning = toestemming om taxivervoer aan te bieden als onderneming."
  },
  {
    id: 13,
    category: "BCT (Boordcomputer Taxi)",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("BCT", "Registratie ritten"),
    question: "Wat is een kernfunctie van de Boordcomputer Taxi (BCT)?",
    answers: ["Muziek afspelen", "Rittenregistratie/controleerbaarheid van taxivervoer", "Het vervangen van verkeersregels"],
    correct: 1,
    explanation: "De BCT is bedoeld voor registratie en controleerbaarheid van ritten/werktijden (afhankelijk van regels)."
  },
  {
    id: 14,
    category: "BCT – storing",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("BCT storing", "Wat doe je?"),
    question: "De BCT geeft een storing. Wat is het meest professioneel?",
    answers: ["Negeer en rijd door zonder registratie", "Volg de voorgeschreven procedure/meldingsstappen en los dit correct op", "Verwijder het apparaat"],
    correct: 1,
    explanation: "Bij storingen volg je de regels/procedure. Niet registreren of knoeien is risicovol en kan sancties geven."
  },
  {
    id: 15,
    category: "Tarieven / meter",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Tarieven", "Transparantie"),
    question: "Wat is belangrijk voor transparantie naar de passagier over de ritprijs?",
    answers: ["Nooit iets zeggen", "Duidelijkheid vooraf/onderweg volgens geldende afspraken en zichtbaarheid waar vereist", "Prijs pas achteraf verzinnen"],
    correct: 1,
    explanation: "Als taxichauffeur werk je transparant: prijsafspraken duidelijk, en waar vereist meter/tarieven zichtbaar."
  },
  {
    id: 16,
    category: "Handhaving",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Controle", "Toezicht"),
    question: "Wat is de juiste houding bij een controle door bevoegde toezichthouders?",
    answers: ["Weigeren mee te werken", "Correct meewerken en gevraagde documenten tonen", "Wegrijden om discussie te vermijden"],
    correct: 1,
    explanation: "Professioneel gedrag: meewerken met bevoegde controle en relevante documenten kunnen tonen."
  },
  {
    id: 17,
    category: "Taxivervoer – definitie",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Taxivervoer", "Wat valt eronder?"),
    question: "Welke omschrijving past het best bij taxivervoer (algemeen)?",
    answers: ["Elke rit met een auto", "Vervoer van personen tegen betaling op aanvraag/afspraak", "Alleen ritten boven 100 km"],
    correct: 1,
    explanation: "Taxivervoer draait om personenvervoer tegen betaling op aanvraag/afspraak (algemene examengerichte definitie)."
  },
  {
    id: 18,
    category: "Professionaliteit",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Professionaliteit", "Verantwoordelijkheid"),
    question: "Wat is het meest professioneel als een passagier vraagt om een illegale handeling (bijv. door rood)?",
    answers: ["Doen om een goede review te krijgen", "Rustig uitleggen dat dit niet kan en veilig blijven rijden", "Alleen doen als het rustig is"],
    correct: 1,
    explanation: "Je houdt je aan de regels. Veiligheid en wet gaan boven klantwens."
  },
  {
    id: 19,
    category: "Rit weigeren",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Weigeren", "Wanneer wel/niet?"),
    question: "Wat is het meest verdedigbaar als je een rit wilt weigeren?",
    answers: ["Altijd weigeren als je geen zin hebt", "Alleen op basis van geldige redenen (veiligheid/gedrag/regelgeving) en professioneel communiceren", "Weigeren op basis van uiterlijk"],
    correct: 1,
    explanation: "Weigeren moet professioneel en op geldige gronden. Discriminatie of willekeur is fout."
  },
  {
    id: 20,
    category: "Documenten",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Documenten", "Op orde"),
    question: "Welke aanpak is het beste om problemen bij controles te voorkomen?",
    answers: ["Documenten thuis laten", "Altijd zorgen dat vereiste documenten/kaarten aanwezig en geldig zijn", "Alleen meenemen in het weekend"],
    correct: 1,
    explanation: "Zorg dat je documenten/kaart(en) en eventuele registraties op orde zijn."
  },

  // ===== MIX: TAXI + VEILIGHEID + KLANT =====
  {
    id: 21,
    category: "Passagiers",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Kwetsbare passagier", "Kinderen / ouderen"),
    question: "Wat is als taxi-chauffeur het beste bij een kwetsbare passagier (ouder/kind)?",
    answers: ["Zo snel mogelijk rijden om het af te ronden", "Extra rustig rijden en veilige in-/uitstap ondersteunen", "Stoppen midden op de rijbaan zodat het sneller is"],
    correct: 1,
    explanation: "Professioneel vervoer: comfort en veiligheid eerst, zeker bij kwetsbare passagiers."
  },
  {
    id: 22,
    category: "Veiligheid",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Afstand", "Remweg"),
    question: "Waarom houd je als taxi extra afstand in druk verkeer?",
    answers: ["Omdat je dan langzamer lijkt", "Omdat het remweg/anticipatie verbetert en comfort geeft", "Omdat het verplicht is om 100 meter te houden"],
    correct: 1,
    explanation: "Afstand = tijd om te reageren, minder kans op noodremmen en meer comfort voor passagiers."
  },
  {
    id: 23,
    category: "Communicatie",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Communicatie", "Rust"),
    question: "Een passagier is boos over de route. Wat is het meest professioneel?",
    answers: ["Terugschreeuwen", "Rustig blijven, uitleg geven en veilige focus behouden", "Ter plekke stoppen op een gevaarlijke plek"],
    correct: 1,
    explanation: "Blijf rustig en professioneel; veiligheid en focus op verkeer gaan altijd voor."
  },
  {
    id: 24,
    category: "Tarieven",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Prijsafspraak", "Duidelijkheid"),
    question: "Wat is de beste manier om discussie over prijs te voorkomen?",
    answers: ["Niets zeggen", "Vooraf duidelijk zijn over tarief/afspraak binnen de regels", "Prijs pas aan het einde noemen en hopen dat het goed gaat"],
    correct: 1,
    explanation: "Duidelijkheid vooraf voorkomt conflicten en vergroot vertrouwen."
  },
  {
    id: 25,
    category: "Gedrag",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Vermoeidheid", "Rijgeschiktheid"),
    question: "Je merkt dat je erg vermoeid bent. Wat is het meest professioneel?",
    answers: ["Toch doorrijden, je moet geld verdienen", "Pauze nemen/stoppen als het onveilig wordt", "Koffie drinken en harder rijden"],
    correct: 1,
    explanation: "Vermoeidheid is een groot risico. Professioneel handelen = rust nemen en veiligheid waarborgen."
  },

  // ===== REGELGEVING / SYSTEMEN (examengericht) =====
  {
    id: 26,
    category: "BCT / registratie",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("BCT", "Werking"),
    question: "Waarom is correcte ritregistratie belangrijk?",
    answers: ["Alleen voor reclame", "Voor naleving, controleerbaarheid en vertrouwen", "Alleen omdat passagiers dat leuk vinden"],
    correct: 1,
    explanation: "Registratie helpt bij naleving, toezicht en professionele bedrijfsvoering."
  },
  {
    id: 27,
    category: "Vergunningen",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Vergunning", "Geldigheid"),
    question: "Wat is het risico van rijden met verlopen/ontbrekende bevoegdheden (kaart/vergunning)?",
    answers: ["Geen risico", "Sancties/boetes en mogelijk stillegging, plus reputatieschade", "Alleen een waarschuwing op social media"],
    correct: 1,
    explanation: "Onjuiste bevoegdheden kunnen leiden tot handhaving en ernstige gevolgen."
  },
  {
    id: 28,
    category: "Taximeter",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Taximeter", "Transparantie"),
    question: "Wat is in het algemeen het doel van een taximeter/tariefsysteem?",
    answers: ["Sneller rijden", "Transparante en controleerbare prijsbepaling", "Alleen muziek in de taxi"],
    correct: 1,
    explanation: "Tariefsysteem/meter ondersteunt transparantie en controleerbaarheid van de ritprijs."
  },
  {
    id: 29,
    category: "Controle",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Controle", "Documenten"),
    question: "Wat doe je als je documenten niet direct kunt tonen bij een controle?",
    answers: ["Discussie maken", "Professioneel blijven en zo snel mogelijk volgens regels oplossen (bijv. later tonen indien toegestaan)", "Wegrijden"],
    correct: 1,
    explanation: "Blijf professioneel en los het volgens de regels op. Wegrijden of escaleren is fout."
  },
  {
    id: 30,
    category: "Taxipas",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Taxipas", "Persoonlijk"),
    question: "De chauffeurskaart (taxipas) is:",
    answers: ["Vrij te gebruiken door collega's", "Persoonsgebonden en niet overdraagbaar", "Alleen nodig in het weekend"],
    correct: 1,
    explanation: "Chauffeurskaart is persoonsgebonden. Delen/uitlenen is fout en risicovol."
  },

  // ===== EXTRA VERKEER + TAXI-CONTEXT =====
  {
    id: 31,
    category: "Stadsverkeer",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Stadsverkeer", "Anticiperen"),
    question: "In druk stadsverkeer, wat is de beste taxi-rijstijl?",
    answers: ["Agressief invoegen", "Rustig anticiperen en ruimte laten", "Altijd toeteren bij elke twijfel"],
    correct: 1,
    explanation: "Anticiperen en ruimte geven voorkomt incidenten en verhoogt comfort."
  },
  {
    id: 32,
    category: "Busbaan",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Busbaan", "Toegestaan?"),
    question: "Mag je als taxi altijd op een busbaan rijden?",
    answers: ["Ja, altijd", "Alleen als verkeersborden/regels dat expliciet toestaan", "Alleen als je passagier VIP is"],
    correct: 1,
    explanation: "Toegang tot busbanen hangt af van borden/regels. Taxi is niet automatisch toegestaan."
  },
  {
    id: 33,
    category: "Parkeren",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Parkeren", "Hinder"),
    question: "Wat is het grootste risico van 'even' dubbel parkeren voor een passagier?",
    answers: ["Niets", "Hinder/gevaar voor verkeer en mogelijk boetes/incidenten", "Je auto wordt mooier"],
    correct: 1,
    explanation: "Dubbel parkeren kan gevaarlijk zijn en tot handhaving leiden. Kies veilige, toegestane stopplek."
  },
  {
    id: 34,
    category: "Passagiersgedrag",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Onrustige passagier", "Veiligheid"),
    question: "Een passagier leidt je af tijdens het rijden. Wat doe je?",
    answers: ["Meegaan in discussie tijdens het rijden", "Grenzen aangeven en focus op verkeer houden; zo nodig veilig stoppen", "Harder rijden zodat je sneller klaar bent"],
    correct: 1,
    explanation: "Afleiding verhoogt risico. Professioneel: grenzen, focus, eventueel veilig stoppen."
  },
  {
    id: 35,
    category: "Route",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Routekeuze", "Duidelijkheid"),
    question: "Wat is het beste bij routekeuze als taxi?",
    answers: ["Altijd de langste route voor meer geld", "Transparant rijden en eventuele opties kort bespreken", "Alleen de snelste route zonder te kijken naar veiligheid"],
    correct: 1,
    explanation: "Eerlijk en transparant. Veiligheid en duidelijke communicatie zijn belangrijk."
  },

  // ===== TAXI REGELGEVING / PRAKTIJK =====
  {
    id: 36,
    category: "Tarieven",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Tarieven", "Klacht voorkomen"),
    question: "Wat helpt het meest om klachten over te hoge prijs te voorkomen?",
    answers: ["Geen bon/overzicht geven", "Duidelijke uitleg/overzicht en transparantie volgens regels", "Altijd cash eisen"],
    correct: 1,
    explanation: "Transparantie en duidelijkheid voorkomen escalatie en klachten."
  },
  {
    id: 37,
    category: "Handhaving",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Handhaving", "Sancties"),
    question: "Wat is een mogelijk gevolg van ernstige overtredingen als taxichauffeur?",
    answers: ["Alleen een waarschuwing", "Boete/sanctie en mogelijk gevolgen voor bevoegdheid (kaart/werk)", "Gratis brandstof"],
    correct: 1,
    explanation: "Ernstige overtredingen kunnen leiden tot boetes en gevolgen voor je bevoegdheid en bedrijfsvoering."
  },
  {
    id: 38,
    category: "BCT / integriteit",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Integriteit", "Correcte registratie"),
    question: "Wat is de juiste houding rond systemen zoals BCT en ritregistratie?",
    answers: ["Creatief omgaan zodat het beter uitkomt", "Correct en eerlijk gebruiken, niet manipuleren", "Alleen gebruiken als er controle is"],
    correct: 1,
    explanation: "Integriteit is essentieel. Manipulatie is fout en kan zwaar bestraft worden."
  },
  {
    id: 39,
    category: "Vergunningen (bedrijf)",
    difficulty: "Gemiddeld",
    image: makeSvgDataUri("Ondernemer", "Bedrijfsregels"),
    question: "Je rijdt voor een bedrijf. Waarom is het belangrijk dat het bedrijf correct vergund/ingeschreven is?",
    answers: ["Alleen voor marketing", "Voor wettige exploitatie en betrouwbaarheid richting klant/toezicht", "Dat maakt niet uit"],
    correct: 1,
    explanation: "Vervoer moet binnen de regels plaatsvinden. Correcte bedrijfsvergunningen/registraties zijn cruciaal."
  },
  {
    id: 40,
    category: "Samenvatting (taxi-examen)",
    difficulty: "Makkelijk",
    image: makeSvgDataUri("Taxi Examen", "Kernprincipe"),
    question: "Wat is het kernprincipe van professioneel taxivervoer?",
    answers: ["Snelste rit, ongeacht regels", "Veilig, eerlijk, transparant en binnen de wet", "Altijd doen wat passagier wil"],
    correct: 1,
    explanation: "Professionaliteit = veiligheid + naleving + transparantie + respectvolle omgang."
  },
];

// Helper
function getQuestionById(id) {
  return EXAM_QUESTIONS.find(q => q.id === id);
}
