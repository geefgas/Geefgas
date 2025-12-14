/* =========================================================
   GeefGas — exam-data.js
   Examen 1 — 40 vragen (CBR-niveau)
   ========================================================= */

(function () {

  const QUESTIONS = [

    // 1–10
    {
      id: "q01",
      category: "Voorrang",
      question: "Je rijdt rechtdoor op een gelijkwaardig kruispunt. Van rechts komt een fietser rechtdoor. Wie heeft voorrang?",
      answers: [
        "Jij",
        "De auto",
        "De fietser"
      ],
      correct: 2,
      image: "assets/q01.png",
      explanation: "Op een gelijkwaardig kruispunt heeft verkeer van rechts voorrang. Dit geldt ook voor fietsers."
    },
    {
      id: "q02",
      category: "Voorrang",
      question: "Je slaat linksaf. Een tegenligger rijdt rechtdoor. Wat doe je?",
      answers: [
        "Je rijdt eerst",
        "Je laat de tegenligger voorgaan",
        "Je rijdt tegelijk"
      ],
      correct: 1,
      image: "assets/q02.png",
      explanation: "Bij linksaf slaan moet je rechtdoorgaand verkeer voor laten gaan."
    },
    {
      id: "q03",
      category: "Verkeerslichten",
      question: "Het verkeerslicht wordt geel terwijl je nadert. Wat is juist?",
      answers: [
        "Doorrijden",
        "Gas bijgeven",
        "Stoppen, tenzij stoppen niet meer veilig kan"
      ],
      correct: 2,
      image: "assets/q03.png",
      explanation: "Geel betekent stoppen, behalve als stoppen niet veilig kan."
    },
    {
      id: "q04",
      category: "Afstand",
      question: "Het wegdek is nat. Wat is juist rijgedrag?",
      answers: [
        "Dezelfde volgafstand houden",
        "Later remmen",
        "Meer afstand houden"
      ],
      correct: 2,
      image: "assets/q04.png",
      explanation: "Op nat wegdek is de remweg langer."
    },
    {
      id: "q05",
      category: "Inhalen",
      question: "Je wilt inhalen maar je zicht is beperkt. Wat doe je?",
      answers: [
        "Toch inhalen",
        "Snelheid verhogen",
        "Wachten tot je voldoende zicht hebt"
      ],
      correct: 2,
      image: "assets/q05.png",
      explanation: "Inhalen mag alleen als je voldoende zicht en ruimte hebt."
    },
    {
      id: "q06",
      category: "Inzicht",
      question: "Je rijdt in druk verkeer. Wat is juist rijgedrag?",
      answers: [
        "Zo min mogelijk remmen",
        "Zo snel mogelijk doorrijden",
        "Rustig rijden en anticiperen"
      ],
      correct: 2,
      image: "assets/q06.png",
      explanation: "Anticiperen voorkomt gevaarlijke situaties."
    },
    {
      id: "q07",
      category: "Voorrang",
      question: "Je nadert een kruising zonder verkeersborden. Van rechts nadert verkeer. Wat doe je?",
      answers: [
        "Doorrijden",
        "Gas bijgeven",
        "Verkeer van rechts voor laten gaan"
      ],
      correct: 2,
      image: "assets/q07.png",
      explanation: "Zonder borden geldt de regel: rechts heeft voorrang."
    },
    {
      id: "q08",
      category: "Afstand",
      question: "Je rijdt achter een fietser op een smalle weg. Wat is juist?",
      answers: [
        "Kort achter de fietser blijven",
        "Direct inhalen",
        "Afstand houden en wachten"
      ],
      correct: 2,
      image: "assets/q08.png",
      explanation: "Je haalt een fietser alleen veilig in."
    },
    {
      id: "q09",
      category: "Snelheid",
      question: "Je nadert een file. Wat doe je?",
      answers: [
        "Laat remmen",
        "Direct aansluiten",
        "Tijdig snelheid verminderen"
      ],
      correct: 2,
      image: "assets/q09.png",
      explanation: "Tijdig remmen voorkomt kop-staartbotsingen."
    },
    {
      id: "q10",
      category: "Inzicht",
      question: "Je rijdt in druk stadsverkeer. Wat is juist?",
      answers: [
        "Zo snel mogelijk doorrijden",
        "Weinig afstand houden",
        "Anticiperen op andere weggebruikers"
      ],
      correct: 2,
      image: "assets/q10.png",
      explanation: "Goed verkeersinzicht is essentieel."
    },

    // 11–20
    {
      id: "q11",
      category: "Voorrang",
      question: "Je nadert een kruising met haaientanden voor jou. Wat doe je?",
      answers: [
        "Doorrijden",
        "Gas minderen",
        "Voorrang verlenen"
      ],
      correct: 2,
      image: "assets/q11.png",
      explanation: "Haaientanden betekenen: voorrang verlenen."
    },
    {
      id: "q12",
      category: "Verlichting",
      question: "Je rijdt in het donker buiten de bebouwde kom. Wat is juist?",
      answers: [
        "Altijd groot licht",
        "Sneller rijden",
        "Verlichting aanpassen aan de situatie"
      ],
      correct: 2,
      image: "assets/q12.png",
      explanation: "Je past verlichting en snelheid aan."
    },
    {
      id: "q13",
      category: "Overwegen",
      question: "Je nadert een spoorwegovergang zonder slagbomen. Wat doe je?",
      answers: [
        "Doorrijden",
        "Gas bijgeven",
        "Alleen oversteken als het veilig is"
      ],
      correct: 2,
      image: "assets/q13.png",
      explanation: "Je mag alleen oversteken als het veilig is."
    },
    {
      id: "q14",
      category: "Inhalen",
      question: "Wanneer mag je inhalen?",
      answers: [
        "Bij twijfel",
        "Als je haast hebt",
        "Bij voldoende zicht en ruimte"
      ],
      correct: 2,
      image: "assets/q14.png",
      explanation: "Zonder voldoende zicht mag je niet inhalen."
    },
    {
      id: "q15",
      category: "Afstand",
      question: "Je rijdt in de regen. Wat is juist?",
      answers: [
        "Dezelfde afstand houden",
        "Sneller rijden",
        "Meer afstand houden"
      ],
      correct: 2,
      image: "assets/q15.png",
      explanation: "Regen verlengt de remweg."
    },
    {
      id: "q16",
      category: "Gladheid",
      question: "Het is glad door sneeuw of ijzel. Wat is juist?",
      answers: [
        "Hard remmen",
        "Rustig rijden en meer afstand houden",
        "Dicht achter je voorganger blijven"
      ],
      correct: 1,
      image: "assets/q16.png",
      explanation: "Rustig rijden en afstand houden voorkomt slippen."
    },
    {
      id: "q17",
      category: "Rotonde",
      question: "Je nadert een rotonde met haaientanden. Wat doe je?",
      answers: [
        "Doorrijden",
        "De rotonde oprijden",
        "Voorrang verlenen aan verkeer op de rotonde"
      ],
      correct: 2,
      image: "assets/q17.png",
      explanation: "Haaientanden betekenen voorrang verlenen."
    },
    {
      id: "q18",
      category: "Inzicht",
      question: "Je rijdt in een woonwijk. Wat is juist?",
      answers: [
        "Zo snel mogelijk rijden",
        "Alleen op borden letten",
        "Extra voorzichtig rijden"
      ],
      correct: 2,
      image: "assets/q18.png",
      explanation: "In woonwijken zijn onverwachte situaties."
    },
    {
      id: "q19",
      category: "Verkeerslichten",
      question: "Het verkeerslicht is rood. Wat doe je?",
      answers: [
        "Doorrijden",
        "Gas minderen",
        "Stoppen voor de stopstreep"
      ],
      correct: 2,
      image: "assets/q19.png",
      explanation: "Rood betekent stoppen."
    },
    {
      id: "q20",
      category: "Inzicht",
      question: "Je rijdt in druk verkeer. Wat is juist rijgedrag?",
      answers: [
        "Snel doorrijden",
        "Alleen op je rijstrook letten",
        "Anticiperen op anderen"
      ],
      correct: 2,
      image: "assets/q20.png",
      explanation: "Anticiperen voorkomt gevaar."
    },

    // 21–40
    {
      id: "q21",
      category: "Bus",
      question: "Je rijdt binnen de bebouwde kom. Een bus wil wegrijden bij een halte. Wat doe je?",
      answers: [
        "Doorrijden",
        "Gas minderen",
        "De bus laten wegrijden"
      ],
      correct: 2,
      image: "assets/q21.png",
      explanation: "Binnen de bebouwde kom moet je de bus gelegenheid geven."
    },
    {
      id: "q22",
      category: "Voetgangers",
      question: "Je nadert een zebrapad. Een voetganger wil oversteken. Wat doe je?",
      answers: [
        "Doorrijden",
        "Claxonneren",
        "De voetganger laten oversteken"
      ],
      correct: 2,
      image: "assets/q22.png",
      explanation: "Voetgangers op een zebrapad hebben voorrang."
    },
    {
      id: "q23",
      category: "Zicht",
      question: "Je nadert een kruising met beperkt zicht. Wat is juist?",
      answers: [
        "Doorrijden",
        "Gas bijgeven",
        "Voorzichtig naderen"
      ],
      correct: 2,
      image: "assets/q23.png",
      explanation: "Bij beperkt zicht moet je extra voorzichtig zijn."
    },
    {
      id: "q24",
      category: "Invoegen",
      question: "Je wilt invoegen op een drukke weg. Wat doe je?",
      answers: [
        "Direct invoegen",
        "Andere bestuurders laten remmen",
        "Snelheid aanpassen en veilig invoegen"
      ],
      correct: 2,
      image: "assets/q24.png",
      explanation: "Je voegt alleen veilig in."
    },
    {
      id: "q25",
      category: "Afleiding",
      question: "Je krijgt een melding op je telefoon tijdens het rijden. Wat doe je?",
      answers: [
        "Even kijken",
        "De telefoon pakken",
        "Je aandacht bij het verkeer houden"
      ],
      correct: 2,
      image: "assets/q25.png",
      explanation: "Afleiding verhoogt het ongevalsrisico."
    },
    {
      id: "q26",
      category: "Smalle weg",
      question: "Je rijdt op een smalle weg en een tegenligger nadert. Wat doe je?",
      answers: [
        "Doorrijden",
        "Gas bijgeven",
        "Snelheid aanpassen en rekening houden"
      ],
      correct: 2,
      image: "assets/q26.png",
      explanation: "Samen veilig passeren."
    },
    {
      id: "q27",
      category: "Kinderen",
      question: "Je ziet spelende kinderen langs de weg. Wat is juist?",
      answers: [
        "Doorrijden",
        "Alleen letten op borden",
        "Extra voorzichtig rijden"
      ],
      correct: 2,
      image: "assets/q27.png",
      explanation: "Kinderen kunnen onverwacht de weg oplopen."
    },
    {
      id: "q28",
      category: "Parkeerterrein",
      question: "Je rijdt op een parkeerterrein. Wat is juist?",
      answers: [
        "Je hebt altijd voorrang",
        "Je rijdt maximaal",
        "Rekening houden met voetgangers"
      ],
      correct: 2,
      image: "assets/q28.png",
      explanation: "Op parkeerterreinen is extra opletten nodig."
    },
    {
      id: "q29",
      category: "Regen",
      question: "Het regent hard. Wat is juist rijgedrag?",
      answers: [
        "Dezelfde afstand houden",
        "Later remmen",
        "Meer afstand houden"
      ],
      correct: 2,
      image: "assets/q29.png",
      explanation: "Regen verlengt de remweg."
    },
    {
      id: "q30",
      category: "Algemeen",
      question: "Wat is goed rijgedrag?",
      answers: [
        "Altijd hetzelfde rijden",
        "Alleen aanpassen bij slecht weer",
        "Je rijgedrag aanpassen aan de situatie"
      ],
      correct: 2,
      image: "assets/q30.png",
      explanation: "Je past je rijgedrag aan omstandigheden aan."
    },

    // 31–40 (zelfde niveau, andere contexten)
    {
      id: "q31",
      category: "Snelheid",
      question: "Je rijdt in een woonwijk. Wat is juist?",
      answers: [
        "Maximaal rijden",
        "Snel doorrijden",
        "Snelheid aanpassen"
      ],
      correct: 2,
      image: "assets/q31.png",
      explanation: "In woonwijken is voorzichtig rijden belangrijk."
    },
    {
      id: "q32",
      category: "Verkeerslichten",
      question: "Het verkeerslicht springt op groen. Wat doe je?",
      answers: [
        "Direct optrekken zonder kijken",
        "Gas bijgeven",
        "Goed kijken en dan doorrijden"
      ],
      correct: 2,
      image: "assets/q32.png",
      explanation: "Ook bij groen moet je opletten."
    },
    {
      id: "q33",
      category: "File",
      question: "Je nadert langzaam rijdend verkeer. Wat is juist?",
      answers: [
        "Laat remmen",
        "Kort aansluiten",
        "Tijdig afremmen"
      ],
      correct: 2,
      image: "assets/q33.png",
      explanation: "Tijdig remmen voorkomt ongevallen."
    },
    {
      id: "q34",
      category: "Verlichting",
      question: "Wanneer gebruik je groot licht?",
      answers: [
        "Altijd",
        "In de bebouwde kom",
        "Als je niemand hindert"
      ],
      correct: 2,
      image: "assets/q34.png",
      explanation: "Groot licht mag alleen als je niemand verblindt."
    },
    {
      id: "q35",
      category: "Inhalen",
      question: "Je wilt een fietser inhalen. Wat is juist?",
      answers: [
        "Dicht langs rijden",
        "Claxonneren",
        "Voldoende afstand houden"
      ],
      correct: 2,
      image: "assets/q35.png",
      explanation: "Zijdelingse afstand is verplicht."
    },
    {
      id: "q36",
      category: "Kruispunt",
      question: "Je nadert een onoverzichtelijke kruising. Wat doe je?",
      answers: [
        "Doorrijden",
        "Gas bijgeven",
        "Voorzichtig naderen"
      ],
      correct: 2,
      image: "assets/q36.png",
      explanation: "Voorzichtig naderen voorkomt gevaar."
    },
    {
      id: "q37",
      category: "Borden",
      question: "Je ziet een verkeersbord dat je niet direct herkent. Wat doe je?",
      answers: [
        "Negeren",
        "Doorrijden",
        "Rijgedrag aanpassen"
      ],
      correct: 2,
      image: "assets/q37.png",
      explanation: "Je past je rijgedrag aan."
    },
    {
      id: "q38",
      category: "Vermoeidheid",
      question: "Je merkt dat je vermoeid raakt. Wat doe je?",
      answers: [
        "Doorrijden",
        "Harder rijden",
        "Een pauze nemen"
      ],
      correct: 2,
      image: "assets/q38.png",
      explanation: "Vermoeidheid verhoogt het risico."
    },
    {
      id: "q39",
      category: "Inzicht",
      question: "Je nadert een druk kruispunt. Wat is juist?",
      answers: [
        "Zo snel mogelijk doorrijden",
        "Alleen letten op je rijstrook",
        "Vooruitkijken en anticiperen"
      ],
      correct: 2,
      image: "assets/q39.png",
      explanation: "Vooruitkijken voorkomt gevaar."
    },
    {
      id: "q40",
      category: "Algemeen",
      question: "Wat hoort bij veilig rijgedrag?",
      answers: [
        "Altijd hetzelfde rijden",
        "Alleen aanpassen bij slecht weer",
        "Rijgedrag aanpassen aan omstandigheden"
      ],
      correct: 2,
      image: "assets/q40.png",
      explanation: "Veilig rijden is situationeel."
    }

  ];

  const EXAM_SETS = {
    taxi_v1: {
      title: "Examen 1",
      durationSec: 1800,
      questionIds: QUESTIONS.map(q => q.id)
    }
  };

  window.QUESTIONS = QUESTIONS;
  window.EXAM_SETS = EXAM_SETS;

})();
