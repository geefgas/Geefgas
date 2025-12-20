/* =========================================================
   GeefGas — exam-data-hard.js
   Taxi Examens (MOEILIJK / STRIKVRAGEN)
   Start: Examen 1 (40 vragen)
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

  /* =========================
     TAXI EXAMEN 1 (HARD)
     Onderwerp: TVT mix (CBR-eindtermen)
     - administratie/documenten/apparatuur
     - wet- en regelgeving
     - ritvoorbereiding
     - professionele verkeersdeelname
     - calamiteiten / PAMAN
     - communicatie / klanten / agressie / klachten
     - globaal geografisch inzicht NL
     ========================= */

  const TAXI_EXAMEN_1_HARD = {
    id: "taxi-examen-1-hard",
    title: "Taxi Examen 1 – Moeilijk (strikvragen)",
    category: "Taxi",
    durationMinutes: 35,
    passMinCorrect: 32,
    questions: [

      // Wet- en regelgeving / bevoegdheden (strik)
      q(1,"Wet- en regelgeving","Je taxipas is geldig, maar je merkt vlak vóór dienst dat je hem niet bij je hebt. Wat is het meest correct?",[
        "Toch rijden; je bent bevoegd dus het is goed",
        "Niet rijden totdat je hem bij je hebt (kunnen tonen hoort erbij)",
        "Alleen rijden als je geen straatwerk doet"
      ],1),

      q(2,"Wet- en regelgeving","Een klant biedt contant extra geld aan voor een rit zonder registratie/bon. Wat is het meest professionele uitgangspunt?",[
        "Akkoord als de klant het wil",
        "Weigeren: transparant werken en volgens regels/afspraken registreren",
        "Alleen doen als de rit korter is dan 5 km"
      ],1),

      q(3,"Wet- en regelgeving","Bij twijfel of een ophaallocatie een verboden zone is, wat is de beste keuze?",[
        "Toch erin rijden, je bent taxi dus dat mag vaak",
        "Kiezen voor veilige/legale plek en eventueel lopen/meeting point afspreken",
        "Stil gaan staan vóór het bord tot iemand je doorlaat"
      ],1),

      q(4,"Wet- en regelgeving","Wat is een typische ‘valkuil’ bij controle door ILT?",[
        "Te netjes zijn",
        "Nervositeit/rommelen en halve antwoorden geven i.p.v. rustig en feitelijk",
        "Te veel meewerken"
      ],1),

      // Administratie / documenten / apparatuur (BCT)
      q(5,"Administratie & BCT","Je merkt dat je BCT-status nog op ‘privé/buiten dienst’ staat terwijl je al op weg bent naar een klant (zonder passagier). Wat is het meest correct?",[
        "Doorrijden en later corrigeren uit je hoofd",
        "Veilig stoppen en status/registratie direct correct zetten volgens procedure",
        "Pas aanpassen zodra er een passagier instapt"
      ],1),

      q(6,"Administratie & BCT","Welke combinatie is het meest verdacht bij een controle?",[
        "Registratie met logische pauzes en ritten",
        "Veel ‘gaten’/onverklaarbare periodes zonder plausibele verklaring",
        "Een drukke dag met veel korte ritten"
      ],1),

      q(7,"Administratie & BCT","Wat is de beste houding als je tijdens controle merkt dat je een fout hebt gemaakt in registratie?",[
        "Ontkennen; anders krijg je zeker een boete",
        "Feitelijk blijven en aangeven dat je corrigeert/volgt volgens procedure",
        "Zeggen dat de klant het wilde"
      ],1),

      q(8,"Administratie & BCT","Je hebt een printer/bon-systeem dat uitvalt vlak vóór een rit. Wat is professioneel?",[
        "Rijden en zeggen dat bonnen nooit hoeven",
        "Rijden, maar meteen alternatief aanbieden volgens jouw werkwijze (bijv. digitaal) en vastleggen",
        "Rit weigeren altijd"
      ],1),

      // Ritvoorbereiding
      q(9,"Ritvoorbereiding","Wat is bij ritvoorbereiding het meest ‘CBR-correct’?",[
        "Alleen navigatie instellen en gaan",
        "Route + haal/brengplek inschatten op veiligheid/toegestane stopplek, plus klantafspraken",
        "Alleen zorgen dat je op tijd bent"
      ],1),

      q(10,"Ritvoorbereiding","Een klant wil opgehaald worden ‘exact bij de deur’ in een straat met beperkte ruimte en veel fietsers. Wat is het meest professioneel?",[
        "Toch bij de deur, klant bepaalt",
        "Veilig alternatief voorstellen (meeting point op 20–50m) en uitleggen waarom",
        "Dubbel parkeren met alarmlichten"
      ],1),

      // Professionele verkeersdeelname
      q(11,"Verkeersdeelname","De klant zegt: ‘Ik ben te laat, rij door oranje/rood’. Wat is de beste reactie?",[
        "Toegeven als het ‘net kan’",
        "Rustig uitleggen dat je veilig en volgens verkeersregels rijdt",
        "Zeggen dat het niet jouw probleem is en stil blijven"
      ],1),

      q(12,"Verkeersdeelname","Je rijdt in de stad en ziet dat je navigatie je een straat in stuurt met een duidelijk verbodsbord. Wat geldt?",[
        "Navigatie gaat voor, die is slim",
        "Verkeersborden gaan voor; route aanpassen",
        "Je mag doorrijden als je taxiwerk doet"
      ],1),

      q(13,"Verkeersdeelname","Welke keuze is het meest professioneel bij onverwachte file en tijdsdruk?",[
        "Meer risico nemen om tijd in te halen",
        "Klant kort informeren en veilig blijven rijden",
        "Boos worden op andere weggebruikers"
      ],1),

      q(14,"Verkeersdeelname","Afleiding: je telefoon trilt door een centrale-bericht. Wat is de beste regel?",[
        "Snel kijken tijdens recht stuk",
        "Alleen handelen als je veilig stilstaat",
        "Bij 30 km/u mag het wel"
      ],1),

      // Calamiteiten / PAMAN
      q(15,"Calamiteiten (PAMAN)","Je komt als eerste bij een ongeval. Wat is stap 1 volgens het meest veilige principe?",[
        "Direct slachtoffers uit de auto trekken",
        "Eigen veiligheid en omgeving beoordelen/veiligstellen",
        "Direct foto’s maken voor bewijs"
      ],1),

      q(16,"Calamiteiten (PAMAN)","Wat betekent ‘markeren’ in de praktijk het best?",[
        "De plek herkenbaar/veilig maken voor verkeer (bijv. alarmlichten, gevarendriehoek waar passend)",
        "De betrokkenen hard aanspreken zodat ze stoppen",
        "Je taxi dwars zetten midden op de weg"
      ],0),

      q(17,"Calamiteiten (PAMAN)","Passagier wordt onwel en wil ‘door’ naar bestemming. Jij vertrouwt het niet. Wat doe je?",[
        "Toch doorrijden, klant beslist",
        "Veilig stoppen en hulp inschakelen/advies volgen; veiligheid eerst",
        "Alleen raam open en door"
      ],1),

      // Communicatie / klant / conflicten
      q(18,"Communicatie","Wat is de beste manier om misverstanden te voorkomen aan het begin van de rit?",[
        "Niet teveel praten",
        "Bestemming + voorkeur route/tarief-afspraak kort bevestigen",
        "Alleen vragen hoe de klant heet"
      ],1),

      q(19,"Omgang met klanten","Klant zegt: ‘Jij rijdt expres om’. Wat is het meest professioneel?",[
        "Klant belachelijk maken",
        "Feitelijk uitleggen (drukte/omleiding) en evt. alternatief bespreken",
        "Discussie winnen door harder te praten"
      ],1),

      q(20,"Omgang met klanten","Een klant is stil en gespannen (bijv. ziekenhuisrit). Wat is het meest passend?",[
        "Veel grapjes maken om sfeer te breken",
        "Rustig, voorspelbaar rijden en neutraal/behulpzaam communiceren",
        "Extra hard rijden zodat het sneller klaar is"
      ],1),

      // Agressie (eindterm 8/9)
      q(21,"Agressie","Wat is vaak de beste eerste stap bij beginnende agressie (verbaal)?",[
        "Terugduwen met autoriteit",
        "De-escaleren: rustig blijven, grenzen stellen, korte zinnen",
        "De klant negeren tot het overgaat"
      ],1),

      q(22,"Agressie","Wanneer is het beëindigen van een rit het best verdedigbaar?",[
        "Als de klant niet vriendelijk is",
        "Als veiligheid/orde ernstig in gevaar komt en je veilig kunt stoppen",
        "Als de klant geen fooi geeft"
      ],1),

      q(23,"Agressie","Wat is géén slimme keuze bij agressie?",[
        "Rustig blijven en procedure volgen",
        "Dreigen of intimideren",
        "Afstand houden en veilig handelen"
      ],1),

      // Klachtenprocedure
      q(24,"Klachtenprocedure","Een klant zegt: ‘Ik ga een klacht indienen’. Wat is het beste antwoord?",[
        "‘Doe maar, boeit me niet.’",
        "Rustig uitleggen hoe de klachtenprocedure werkt (bedrijf/centrale/kanalen) en feiten vastleggen",
        "‘Dan stap je maar uit.’"
      ],1),

      q(25,"Klachtenprocedure","Wat leg je het liefst vast bij een mogelijke klacht?",[
        "Alleen je mening over de klant",
        "Feiten: tijd, locatie, rit-gegevens, wat er gebeurde, wat is afgesproken",
        "Niets, want dat kan tegen je werken"
      ],1),

      // Ritvoorbereiding + veilig halen/brengen
      q(26,"Halen/brengen","Klant wil uitstappen op een fietsstrook ‘want dat is dichterbij’. Wat is het meest correct?",[
        "Toestaan als je alarmlichten aanzet",
        "Weigeren en doorrijden naar veilige/toegestane plek",
        "De deur alvast openzetten zodat het snel gaat"
      ],1),

      q(27,"Halen/brengen","Wat voorkomt ‘dooring’ het best?",[
        "De deur snel openzwaaien",
        "Spiegelcheck + schoudercheck en klant instrueren om te wachten tot het veilig is",
        "Claxonneren zodat fietsers stoppen"
      ],1),

      // Veiligheid / voertuig / verantwoordelijkheid
      q(28,"Voertuig & veiligheid","Je ziet vóór dienst een rood waarschuwingslampje (veiligheidskritisch). Wat doe je?",[
        "Doorrijden tot na de eerste rit",
        "Niet rijden: veilig handelen en laten controleren volgens procedure",
        "Alleen langzamer rijden"
      ],1),

      q(29,"Voertuig & veiligheid","Welke check is het meest logisch vóór je begint (professioneel)?",[
        "Alleen muziek en airco",
        "Basisveiligheid: banden, verlichting, ruiten/zicht, remmen + schade",
        "Alleen brandstofniveau"
      ],1),

      // Vermoeidheid / fitheid
      q(30,"Fitheid","Je merkt duidelijke vermoeidheidssignalen (gapend, focus weg). Wat is het meest correct?",[
        "Nog één rit afmaken",
        "Zo snel mogelijk veilig pauzeren en pas doorgaan als je weer fit bent",
        "Ramen open en harder rijden"
      ],1),

      q(31,"Fitheid","Welke situatie verhoogt de kans op gevaarlijke fouten het meest?",[
        "Rustige dagritten met goede slaap",
        "Nachtwerk + regen/donker + druk stadsverkeer",
        "Korte ritten in woonwijk"
      ],1),

      // Geografisch inzicht NL (globaal)
      q(32,"Geografie NL","Welke stad ligt in de provincie Noord-Holland?",[
        "Haarlem",
        "Utrecht",
        "Arnhem"
      ],0),

      q(33,"Geografie NL","Welke stad ligt in de provincie Zuid-Holland?",[
        "Groningen",
        "Rotterdam",
        "Maastricht"
      ],1),

      q(34,"Geografie NL","Welke provincie ligt het meest noordelijk?",[
        "Gelderland",
        "Groningen",
        "Noord-Brabant"
      ],1),

      q(35,"Geografie NL","Welke combinatie is geografisch het meest logisch (west → oost)?",[
        "Amsterdam → Utrecht → Arnhem",
        "Enschede → Zwolle → Den Haag",
        "Maastricht → Rotterdam → Groningen"
      ],0),

      // Strik-communicatie / professioneel gedrag
      q(36,"Communicatie","Welke zin is het meest professioneel bij een onredelijk verzoek?",[
        "‘Hou op met zeuren.’",
        "‘Ik wil u helpen, maar ik rijd veilig en volgens de regels.’",
        "‘Prima, maar dan betaalt u dubbel.’"
      ],1),

      q(37,"Professionaliteit","Wat straalt het meest professionaliteit uit tijdens een lastige rit?",[
        "Dominantie en korte lont",
        "Rust, beheersing en duidelijke grenzen",
        "Zo min mogelijk communicatie en doorgaan"
      ],1),

      // Tarieven / transparantie (strik)
      q(38,"Tarieven","Klant vraagt vóór vertrek om prijsinschatting. Wat is het meest correct?",[
        "Geen indicatie geven om discussie te voorkomen",
        "Eerlijke indicatie geven + benoemen waarvan het afhangt (route/drukte/wachttijd/extra kosten)",
        "Een laag bedrag noemen zodat klant instapt"
      ],1),

      // Integriteit / privacy
      q(39,"Privacy","Iemand vraagt jou om gegevens van een vorige klant (‘ik ben iets kwijt, geef zijn nummer’). Wat doe je?",[
        "Geven, want je helpt",
        "Niet geven; privacy respecteren en doorverwijzen naar procedure",
        "Alleen geven als die persoon overtuigend klinkt"
      ],1),

      // Samenvatting
      q(40,"Samenvatting","Wat is de beste kernregel in het moeilijke niveau?",[
        "Snelheid en omzet eerst",
        "Veilig, aantoonbaar en professioneel handelen (regels, registratie, communicatie)",
        "Zo min mogelijk praten en gewoon rijden"
      ],1),
    ]
  };

  const exams = [
    TAXI_EXAMEN_1_HARD
  ];

  window.EXAM_DATA_HARD = { exams };
  window.EXAMS_HARD = exams;
  window.examsHard = exams;

})();
