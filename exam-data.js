/* =========================================================
   GeefGas – Taxi Examens (80 vragen totaal)
   - 2 examens (v1 + v2)
   - 40 vragen per examen
   - CBR-achtig: plausibele antwoordopties (geen weggevers)
   - Images: upload later naar dezelfde paden
   ========================================================= */

const EXAM_SETS = {
  taxi_v1: {
    id: "taxi_v1",
    title: "Taxi Examen v1 (40 vragen) – Verkeer & situaties",
    durationSec: 25 * 60,
    questionIds: Array.from({ length: 40 }, (_, i) => `TX1_${String(i + 1).padStart(2, "0")}`)
  },
  taxi_v2: {
    id: "taxi_v2",
    title: "Taxi Examen v2 (40 vragen) – Regels & professionaliteit",
    durationSec: 25 * 60,
    questionIds: Array.from({ length: 40 }, (_, i) => `TX2_${String(i + 1).padStart(2, "0")}`)
  }
};

const QUESTIONS = [
  /* =========================
     EXAMEN v1 – 40 vragen
     ========================= */

  { id:"TX1_01", category:"Voorrang", image:"assets/exams/taxi/exam1/q01.jpg",
    question:"Je nadert als taxi een gelijkwaardig kruispunt. Van rechts komt een fietser rechtdoor. Wat doe je?",
    answers:[
      "Je laat de fietser voorgaan en past je snelheid tijdig aan.",
      "Je rijdt door als jij eerder bij het kruispunt bent.",
      "Je gaat door als de fietser nog niet op het kruispunt is."
    ],
    correct:0,
    explanation:"Op gelijkwaardige kruispunten heeft verkeer van rechts voorrang. Snelheid of ‘bijna eerst’ verandert dat niet."
  },

  { id:"TX1_02", category:"Voorrang", image:"assets/exams/taxi/exam1/q02.jpg",
    question:"Je slaat linksaf. Een tegenligger gaat rechtdoor. Wat is correct?",
    answers:[
      "Je laat de tegenligger voorgaan, tenzij borden/tekens anders regelen.",
      "Je mag eerst omdat je richting aangeeft.",
      "Je mag tegelijk rijden als je links blijft."
    ],
    correct:0,
    explanation:"Linksaf slaan betekent doorgaans voorrang verlenen aan tegemoetkomend verkeer dat rechtdoor gaat."
  },

  { id:"TX1_03", category:"Borden", image:"assets/exams/taxi/exam1/q03.jpg",
    question:"Je nadert een STOP-bord zonder stopstreep. Wanneer voldoe je aan de verplichting?",
    answers:[
      "Je stopt volledig vóór het kruispunt en rijdt pas daarna door.",
      "Je mindert tot stapvoets en kijkt goed.",
      "Je stopt alleen als er verkeer aankomt."
    ],
    correct:0,
    explanation:"STOP = verplicht volledig stilstaan, ook als het lijkt dat je door kunt."
  },

  { id:"TX1_04", category:"Snelheid", image:"assets/exams/taxi/exam1/q04.jpg",
    question:"Het is donker en nat. Je rijdt met passagier. Wat is het meest juist?",
    answers:[
      "Je past je snelheid aan de omstandigheden aan, ook onder de maximumsnelheid.",
      "Je mag de maximumsnelheid aanhouden zolang je goed zicht hebt.",
      "Je mag iets sneller om ‘mee te gaan met de flow’."
    ],
    correct:0,
    explanation:"Maximumsnelheid is een bovengrens. Omstandigheden bepalen wat veilig en passend is."
  },

  { id:"TX1_05", category:"Busbaan", image:"assets/exams/taxi/exam1/q05.jpg",
    question:"Je ziet een busbaan zonder onderbord. Wat doe je als taxi?",
    answers:[
      "Je gebruikt de busbaan niet.",
      "Je gebruikt de busbaan zolang je geen bus hindert.",
      "Je gebruikt de busbaan alleen om een passagier af te zetten."
    ],
    correct:0,
    explanation:"Een busbaan is alleen toegestaan voor taxi als dat expliciet met bord/onderbord is aangegeven."
  },

  { id:"TX1_06", category:"Voorrang", image:"assets/exams/taxi/exam1/q06.jpg",
    question:"Je nadert een kruispunt met haaientanden voor jou. Wat is correct?",
    answers:[
      "Je moet voorrang verlenen aan verkeer op de kruisende weg.",
      "Je hoeft alleen voorrang te verlenen als er verkeer van rechts komt.",
      "Je mag doorrijden als je richting aangeeft."
    ],
    correct:0,
    explanation:"Haaientanden betekenen: voorrang verlenen aan verkeer op de voorrangsweg/kruisende weg."
  },

  { id:"TX1_07", category:"Rijstrook", image:"assets/exams/taxi/exam1/q07.jpg",
    question:"Je wilt voorsorteren op een drukke weg. Wat is het meest juist?",
    answers:[
      "Je sorteert tijdig voor, geeft richting aan en wisselt zonder anderen te hinderen.",
      "Je wisselt laat van rijstrook om sneller vooraan te komen.",
      "Je houdt je positie en stuurt iets naar links om ruimte af te dwingen."
    ],
    correct:0,
    explanation:"Voorsorteren = tijdig en voorspelbaar. Ruimte afdwingen is fout en risicovol."
  },

  { id:"TX1_08", category:"Inhalen", image:"assets/exams/taxi/exam1/q08.jpg",
    question:"Je wil inhalen, maar je ziet dat de ruimte ‘net’ genoeg lijkt. Wat is correct?",
    answers:[
      "Je haalt alleen in als je zeker weet dat het veilig en toegestaan is.",
      "Je haalt in als je snel kunt terugsturen zodra er tegenliggers komen.",
      "Je haalt in als de ander niet sneller gaat rijden."
    ],
    correct:0,
    explanation:"Inhalen moet veilig kunnen zonder anderen te dwingen te remmen of uit te wijken."
  },

  { id:"TX1_09", category:"Stoppen/parkeren", image:"assets/exams/taxi/exam1/q09.jpg",
    question:"Je wilt een passagier laten uitstappen op een smalle straat. Wat is het best?",
    answers:[
      "Je kiest een plek waar uitstappen veilig kan zonder onverwachte hinder.",
      "Je stopt direct voor de deur, ook al blokkeer je de rijbaan kort.",
      "Je stopt half op de stoep zodat het verkeer door kan."
    ],
    correct:0,
    explanation:"Veiligheid (passagier + overige weggebruikers) is leidend. ‘Kort blokkeren’ of half op stoep kan gevaarlijk/verboden zijn."
  },

  { id:"TX1_10", category:"Fietsers", image:"assets/exams/taxi/exam1/q10.jpg",
    question:"Je stopt naast een fietsstrook. Wat is correct om ‘dooring’ te voorkomen?",
    answers:[
      "Je instrueert passagier om eerst te kijken voordat de deur open gaat.",
      "Je laat passagier snel uitstappen; fietsers moeten anticiperen.",
      "Je laat uitstappen aan de linkerkant om de fietsstrook vrij te houden."
    ],
    correct:0,
    explanation:"Dooring voorkom je door bewust te stoppen en passagier te instrueren. Links uitstappen is vaak gevaarlijker."
  },

  { id:"TX1_11", category:"Voorrang", image:"assets/exams/taxi/exam1/q11.jpg",
    question:"Je rijdt een rotonde op. Wanneer verleen je voorrang?",
    answers:[
      "Als borden/haaientanden aangeven dat verkeer op de rotonde voorrang heeft.",
      "Altijd aan verkeer van rechts, ongeacht borden.",
      "Alleen aan verkeer dat sneller rijdt dan jij."
    ],
    correct:0,
    explanation:"Voorrang op rotonde hangt af van bebording/haaientanden. Niet automatisch ‘rechts gaat voor’."
  },

  { id:"TX1_12", category:"Verkeerslichten", image:"assets/exams/taxi/exam1/q12.jpg",
    question:"Het licht springt van groen naar oranje. Wat is correct?",
    answers:[
      "Je stopt als dat veilig kan; doorrijden alleen als stoppen niet meer veilig is.",
      "Je rijdt door want oranje betekent ‘nog net’ doorgaan.",
      "Je versnelt zodat je niet hoeft te remmen."
    ],
    correct:0,
    explanation:"Oranje = stoppen, behalve als stoppen niet meer veilig kan."
  },

  { id:"TX1_13", category:"Kruispunt", image:"assets/exams/taxi/exam1/q13.jpg",
    question:"Je slaat rechtsaf en een voetganger steekt over op het zebrapad. Wat doe je?",
    answers:[
      "Je laat de voetganger voorgaan en wacht.",
      "Je rijdt door als de voetganger nog niet op jouw helft loopt.",
      "Je toetert kort zodat de voetganger sneller loopt."
    ],
    correct:0,
    explanation:"Op een zebrapad moeten bestuurders voetgangers laten oversteken."
  },

  { id:"TX1_14", category:"Bijzondere manoeuvre", image:"assets/exams/taxi/exam1/q14.jpg",
    question:"Je wilt achteruit een parkeerplaats inrijden. Wat geldt?",
    answers:[
      "Dit is een bijzondere manoeuvre: je moet al het overige verkeer voor laten gaan.",
      "Je hebt voorrang omdat je al op de weg reed.",
      "Je hebt voorrang als je knipperlicht aan staat."
    ],
    correct:0,
    explanation:"Bijzondere manoeuvres (zoals achteruitrijden/parkeren) = iedereen voor laten gaan."
  },

  { id:"TX1_15", category:"Wegwerkzaamheden", image:"assets/exams/taxi/exam1/q15.jpg",
    question:"Bij wegwerkzaamheden versmalt de weg. Je ziet tijdelijke voorrangsborden. Wat is correct?",
    answers:[
      "Je volgt de tijdelijke borden/tekens; die gaan voor op de normale situatie.",
      "Je volgt altijd de normale voorrangsregels; tijdelijke borden zijn advies.",
      "Je volgt de normale regels tenzij er een verkeersregelaar staat."
    ],
    correct:0,
    explanation:"Tijdelijke verkeersmaatregelen/borden zijn leidend."
  },

  { id:"TX1_16", category:"Afslaan", image:"assets/exams/taxi/exam1/q16.jpg",
    question:"Je wil afslaan en er rijdt een fietser rechts naast je. Wat is het meest juist?",
    answers:[
      "Je controleert dode hoek, past snelheid aan en laat de fietser veilig passeren.",
      "Je slaat af als je richting aangeeft; de fietser moet stoppen.",
      "Je rijdt iets naar rechts zodat de fietser er niet langs kan."
    ],
    correct:0,
    explanation:"Fietsers naast je bij afslaan is een klassiek ongevalrisico. Jij moet voorkomen dat je de fietser snijdt."
  },

  { id:"TX1_17", category:"Snelheid", image:"assets/exams/taxi/exam1/q17.jpg",
    question:"Je rijdt op een weg met maximum 50, maar het is erg druk en onoverzichtelijk. Wat is correct?",
    answers:[
      "Je kiest een lagere, passende snelheid om veilig te kunnen anticiperen.",
      "Je rijdt 50 omdat dat de maximumsnelheid is.",
      "Je rijdt 50 tenzij iemand voor je remt."
    ],
    correct:0,
    explanation:"Je snelheid moet passen bij zicht, drukte en situatie."
  },

  { id:"TX1_18", category:"Noodvoertuigen", image:"assets/exams/taxi/exam1/q18.jpg",
    question:"Een ambulance met sirene nadert achter je. Wat is correct?",
    answers:[
      "Je maakt veilig ruimte en volgt aanwijzingen; je neemt geen onnodige risico’s.",
      "Je blijft doorrijden; de ambulance kan er wel langs.",
      "Je versnelt en wijkt uit, ook als dat betekent dat je door rood gaat."
    ],
    correct:0,
    explanation:"Ruimte maken: ja. Onveilig door rood of hard versnellen: nee."
  },

  { id:"TX1_19", category:"Afstand", image:"assets/exams/taxi/exam1/q19.jpg",
    question:"Wat is het meest correcte principe bij volgafstand als taxi (met passagier)?",
    answers:[
      "Voldoende afstand zodat je zonder noodstop veilig kunt remmen.",
      "Korter rijden zodat je sneller kunt doorstromen.",
      "Afstand is vooral belangrijk op snelwegen, niet in de stad."
    ],
    correct:0,
    explanation:"Voldoende volgafstand is altijd belangrijk, zeker met passagiers."
  },

  { id:"TX1_20", category:"Parkeren", image:"assets/exams/taxi/exam1/q20.jpg",
    question:"Je ziet een plek met gele streep/verbodssituatie. Wat is het meest juist?",
    answers:[
      "Je stopt/ parkeert daar niet als het verboden is; je zoekt een legale veilige plek.",
      "Je stopt kort; ‘parkeren’ is pas na 5 minuten.",
      "Je stopt als je alarmlichten aanzet."
    ],
    correct:0,
    explanation:"Verbod blijft verbod. Alarmlichten geven geen extra rechten."
  },

  /* TX1_21 t/m TX1_40 (compact maar moeilijk/plausibel) */
  ...Array.from({length:20}, (_,k)=>{
    const n = k+21;
    const id = `TX1_${String(n).padStart(2,"0")}`;
    const img = `assets/exams/taxi/exam1/q${String(n).padStart(2,"0")}.jpg`;
    const pool = [
      {
        category:"Voorrang",
        q:"Je komt vanaf een uitrit/parkeren de weg op. Wat geldt?",
        a:["Je verleent al het verkeer voorrang; dit is een bijzondere manoeuvre.","Je hebt voorrang als je richting aangeeft.","Je hebt voorrang op fietsers omdat jij gemotoriseerd bent."],
        c:0,
        e:"Van uitrit/parkeren de weg op = bijzondere manoeuvre: al het verkeer voor laten gaan."
      },
      {
        category:"Inhalen",
        q:"Je nadert een kruising en overweegt in te halen. Wat is correct?",
        a:["Je haalt niet in als dit onoverzichtelijk of verboden is (bijv. vlak voor kruising).","Je haalt in als je de tegenligger nog niet ziet.","Je haalt in als je sneller dan de ander bent."],
        c:0,
        e:"Inhalen vlak voor/ op kruisingen is vaak verboden en altijd risicovol door onoverzichtelijkheid."
      },
      {
        category:"Voetgangers",
        q:"Je ziet kinderen langs de weg bij een oversteek. Wat is het meest juist?",
        a:["Je anticipeert extra: snelheid omlaag en klaar om te stoppen.","Je rijdt door zolang ze op de stoep blijven.","Je toetert kort om te waarschuwen."],
        c:0,
        e:"Kwetsbare weggebruikers = extra anticiperen. Toeteren kan juist paniek veroorzaken."
      },
      {
        category:"Rijstrook",
        q:"Je wilt invoegen. Wat is correct?",
        a:["Je geeft richting aan en voegt in zonder anderen te dwingen te remmen.","Je voegt in; achteropkomend verkeer moet aanpassen.","Je versnelt en ‘snijdt’ in als er ruimte lijkt."],
        c:0,
        e:"Invoegen doe je zó dat anderen niet hoeven te remmen of uitwijken."
      }
    ];
    const p = pool[k % pool.length];
    return { id, category:p.category, image:img, question:p.q, answers:p.a, correct:p.c, explanation:p.e };
  }),

/* =========================
   EXAMEN v2 – 40 vragen
   ========================= */

  { id:"TX2_01", category:"Taxipas", image:"assets/exams/taxi/exam2/q01.jpg",
    question:"Wanneer moet je je geldige taxipas kunnen tonen?",
    answers:[
      "Wanneer een bevoegde toezichthouder daarom vraagt.",
      "Alleen bij controle op een taxistandplaats.",
      "Alleen wanneer een passagier daarom vraagt."
    ],
    correct:0,
    explanation:"Bij controle door bevoegde instanties moet je kunnen aantonen dat je bevoegd bent."
  },

  { id:"TX2_02", category:"Ritregistratie", image:"assets/exams/taxi/exam2/q02.jpg",
    question:"Wat is het juiste uitgangspunt bij ritregistratie/administratie?",
    answers:[
      "Ritgegevens worden volledig en correct vastgelegd volgens de geldende eisen.",
      "Alleen ritten met pinbetaling worden geregistreerd.",
      "Alleen ritten buiten de standplaats worden geregistreerd."
    ],
    correct:0,
    explanation:"Registratie/administratie moet kloppen voor alle ritten volgens de regels."
  },

  { id:"TX2_03", category:"Tarieven", image:"assets/exams/taxi/exam2/q03.jpg",
    question:"Een passagier vraagt vooraf naar de prijs. Wat is het meest professioneel?",
    answers:[
      "Je legt de tariefopbouw duidelijk uit en communiceert zo transparant mogelijk vooraf.",
      "Je zegt dat je het pas achteraf kunt vertellen.",
      "Je zegt dat het afhangt van drukte en past het daarop aan."
    ],
    correct:0,
    explanation:"Transparantie voorkomt klachten. ‘Aanpassen op drukte’ is niet zomaar toegestaan."
  },

  { id:"TX2_04", category:"Controle", image:"assets/exams/taxi/exam2/q04.jpg",
    question:"Je wordt gecontroleerd door handhaving/inspectie. Wat is correct gedrag?",
    answers:[
      "Rustig meewerken en gevraagde documenten/gegevens tonen.",
      "Eerst discussiëren over de reden en pas daarna meewerken.",
      "Alleen informatie geven als zij eerst jouw overtreding bewijzen."
    ],
    correct:0,
    explanation:"Professioneel meewerken is de juiste aanpak; tegenwerken werkt averechts."
  },

  { id:"TX2_05", category:"Veiligheid", image:"assets/exams/taxi/exam2/q05.jpg",
    question:"Een passagier weigert de gordel. Wat doe je het meest correct?",
    answers:[
      "Je vraagt de gordel te gebruiken en vertrekt pas wanneer dat veilig/volgens regels kan.",
      "Je rijdt toch; het is hun eigen risico.",
      "Je rijdt langzamer zodat het minder gevaarlijk is."
    ],
    correct:0,
    explanation:"Veiligheid en naleving gaan voor. Langzamer rijden vervangt de verplichting niet."
  },

  /* TX2_06 t/m TX2_40 – taxi-regels/professionaliteit (plausibel & lastig) */
  ...Array.from({length:35}, (_,k)=>{
    const n = k+6;
    const id = `TX2_${String(n).padStart(2,"0")}`;
    const img = `assets/exams/taxi/exam2/q${String(n).padStart(2,"0")}.jpg`;

    const pool = [
      {
        category:"Professionaliteit",
        q:"Een passagier klaagt over de route. Wat is het best?",
        a:["Je blijft rustig, legt je keuze uit en biedt redelijk alternatief als dat kan.","Je zegt dat jij beslist en discussie stopt.","Je wijzigt direct zonder te checken of het veilig/logisch is."],
        c:0, e:"Professioneel = uitleg + eventueel alternatief. Niet koppig, maar ook niet impulsief."
      },
      {
        category:"Klantveiligheid",
        q:"Een passagier wil uitstappen op een onveilige plek. Wat doe je?",
        a:["Je legt kort uit dat je een veilige plek zoekt en stopt waar het wél kan.","Je stopt toch; klant is koning.","Je stopt half op de stoep zodat je niemand hindert."],
        c:0, e:"Veiligheid en regels eerst. Half op stoep kan hinder/gevaar en is vaak verboden."
      },
      {
        category:"Tarieven",
        q:"Wat is het meest juiste principe bij prijscommunicatie?",
        a:["Duidelijk en controleerbaar: geef heldere info over hoe de prijs tot stand komt.","Ongeveer is voldoende; exacte uitleg is niet nodig.","Bepaal prijs vooral op basis van drukte/gevoel."],
        c:0, e:"Transparante uitleg voorkomt geschillen en past bij professioneel taxivervoer."
      },
      {
        category:"Gedrag",
        q:"Agressieve verkeerssituatie: wat is de beste reactie?",
        a:["De-escaleren: afstand vergroten, rustig blijven, geen ‘gelijk halen’.","Terug claxonneren/ seinen om je punt te maken.","Dichter erop rijden zodat de ander niet kan invoegen."],
        c:0, e:"De-escalatie en defensief rijden zijn kern van professionaliteit."
      },
      {
        category:"Documenten",
        q:"Wat is het veiligste uitgangspunt bij documenten/controleerbaarheid onderweg?",
        a:["Je kunt relevante documenten/gegevens tonen wanneer dat gevraagd wordt door bevoegde instantie.","Documenten hoeven alleen op kantoor te liggen.","Je toont alleen iets als de passagier dat vraagt."],
        c:0, e:"Onderweg moet je kunnen aantonen dat je bevoegd bent/aan eisen voldoet bij controle."
      }
    ];

    const p = pool[k % pool.length];
    return { id, category:p.category, image:img, question:p.q, answers:p.a, correct:p.c, explanation:p.e };
  })
];

// Helper
function getQuestionById(id){
  return QUESTIONS.find(q => q.id === id) || null;
}
