/* =========================================================
   GeefGas — exam-data-hard.js
   Taxi Examens (MOEILIJK / STRIKVRAGEN)
   - Examen 1 (40 vragen)
   - Examen 2 (40 vragen)
   - Examen 3 (40 vragen)  <-- NIEUW
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
     ========================= */

  const TAXI_EXAMEN_1_HARD = {
    id: "taxi-examen-1-hard",
    title: "Taxi Examen 1 – Moeilijk",
    category: "Taxi",
    durationMinutes: 35,
    passMinCorrect: 32,
    questions: [

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

      q(38,"Tarieven","Klant vraagt vóór vertrek om prijsinschatting. Wat is het meest correct?",[
        "Geen indicatie geven om discussie te voorkomen",
        "Eerlijke indicatie geven + benoemen waarvan het afhangt (route/drukte/wachttijd/extra kosten)",
        "Een laag bedrag noemen zodat klant instapt"
      ],1),

      q(39,"Privacy","Iemand vraagt jou om gegevens van een vorige klant (‘ik ben iets kwijt, geef zijn nummer’). Wat doe je?",[
        "Geven, want je helpt",
        "Niet geven; privacy respecteren en doorverwijzen naar procedure",
        "Alleen geven als die persoon overtuigend klinkt"
      ],1),

      q(40,"Samenvatting","Wat is de beste kernregel in het moeilijke niveau?",[
        "Snelheid en omzet eerst",
        "Veilig, aantoonbaar en professioneel handelen (regels, registratie, communicatie)",
        "Zo min mogelijk praten en gewoon rijden"
      ],1),
    ]
  };

  /* =========================
     TAXI EXAMEN 2 (HARD)
     ========================= */

  const TAXI_EXAMEN_2_HARD = {
    id: "taxi-examen-2-hard",
    title: "Taxi Examen 2 – Moeilijk",
    category: "Taxi",
    durationMinutes: 35,
    passMinCorrect: 32,
    questions: [

      q(1,"Administratie & documenten","Je start je dienst, maar je ontdekt dat één verplicht document nét verlopen is. Wat is de meest verdedigbare keuze?",[
        "Eerst één rit doen en daarna regelen",
        "Niet starten met werk; eerst herstellen/regelen",
        "Alleen starten als je dichtbij blijft"
      ],1),

      q(2,"Administratie & BCT","Je wisselt van chauffeur in dezelfde taxi. Wat is in de praktijk het meest correct?",[
        "Doorrijden en later in de administratie rechttrekken",
        "De nieuwe chauffeur registreert onder zijn eigen gegevens/werkwijze en start correct",
        "De eigenaar blijft ingelogd; dat is het simpelst"
      ],1),

      q(3,"Administratie & BCT","Tijdens een controle krijg je een vraag over een ‘gat’ in registratie. Wat is de beste aanpak?",[
        "Kort afkappen: ‘technisch probleem’ en klaar",
        "Feitelijk uitleggen wat er gebeurde en verwijzen naar storings-/correctieprocedure",
        "Zeggen dat controles altijd onzin zijn"
      ],1),

      q(4,"Administratie & BCT","Wat maakt een registratie bij controle vooral sterk?",[
        "Dat je veel ritten hebt",
        "Dat de gegevens logisch herleidbaar zijn en aansluiten bij je werkzaamheden",
        "Dat je alles achteraf kunt uitleggen"
      ],1),

      q(5,"Apparatuur","Je krijgt een storingmelding op apparatuur die je afleidt. Wat is het meest professioneel?",[
        "Direct oplossen terwijl je rijdt, anders vergeet je het",
        "Alleen handelen als je veilig stilstaat; anders later volgens procedure",
        "Melding uitzetten en nooit meer aanzetten"
      ],1),

      q(6,"Wet- en regelgeving","Een klant zegt: ‘Je hoeft de regels niet zo strikt te nemen, ik vind het prima’. Wat is het juiste uitgangspunt?",[
        "Klant bepaalt de spelregels",
        "Regels blijven gelden; jij blijft verantwoordelijk",
        "Alleen bij lange ritten gelden regels"
      ],1),

      q(7,"Wet- en regelgeving","Je wordt gevraagd om ‘even snel’ te stoppen waar het krap is. Wat is het meest verdedigbaar?",[
        "Stoppen zolang de klant uitstapt binnen 10 seconden",
        "Een plek kiezen waar stoppen toegestaan en veilig is, ook als dat iets verder is",
        "Stoppen met alarmlichten en dan is het altijd goed"
      ],1),

      q(8,"Wet- en regelgeving","Welke keuze voorkomt het meeste gedoe bij toezicht én bij klachten?",[
        "Zoveel mogelijk mondeling afspreken",
        "Transparant werken: afspraken kort bevestigen en registratie/bon correct",
        "Nooit uitleg geven zodat klanten niet gaan discussiëren"
      ],1),

      q(9,"Wet- en regelgeving","Wat is een realistische valkuil bij ‘ik wist het niet’?",[
        "Dat het altijd als excuus geaccepteerd wordt",
        "Dat je geacht wordt basisregels te kennen; onwetendheid helpt zelden",
        "Dat je dan altijd alleen een waarschuwing krijgt"
      ],1),

      q(10,"Wet- en regelgeving","Je twijfelt of een zone alleen voor bestemmingsverkeer is. Wat is het meest professionele gedrag?",[
        "Toch erin rijden; taxi’s worden meestal gedoogd",
        "Eerst checken/alternatief kiezen; niet gokken met verboden zones",
        "Stil gaan staan tot iemand achter je toetert"
      ],1),

      q(11,"Ritvoorbereiding","Een klant heeft twee mogelijke ingangen genoemd. Wat voorkomt mislopen het best?",[
        "Gissen en doorrijden tot je iemand ziet",
        "Korte bevestiging: exacte ingang/kenmerk/meeting point afspreken",
        "Zeggen dat de klant maar moet bellen als hij je ziet"
      ],1),

      q(12,"Ritvoorbereiding","Wat is een ‘professionele’ voorbereiding op een druk station?",[
        "Recht voor de deur wachten tot klant er is",
        "Vooraf: ophaalzone/regels + meeting point, en doorstroming respecteren",
        "In de busbaan staan want dat is het dichtst"
      ],1),

      q(13,"Ritvoorbereiding","Welke keuze is het meest consistent met veilig werken?",[
        "Route instellen tijdens het wegrijden zodat je tijd wint",
        "Route instellen vóór vertrek of wanneer je stilstaat",
        "Route vragen via app terwijl je rijdt"
      ],1),

      q(14,"Ritvoorbereiding","Je krijgt een opdracht met onduidelijke bestemming (‘bij het ziekenhuis’). Wat is het meest correct?",[
        "Naar de eerste ingang rijden die je kent",
        "Doorvragen: welk ziekenhuis, welke ingang/afdeling, en hoe afspreken bij drukte",
        "Annuleren: dit is te vaag"
      ],1),

      q(15,"Ritvoorbereiding","Wat is een slimme routine vóór je vertrekt met passagier?",[
        "Alleen controleren of de deur dicht is",
        "Korte check: deuren, zit veilig, bagage stabiel, en vertrek rustig",
        "Direct optrekken zodat je sneller weg bent"
      ],1),

      q(16,"Verkeersdeelname","Een passagier wil dat je ‘even snel’ een appje stuurt naar iemand. Wat is het beste?",[
        "Doen als je één hand aan het stuur houdt",
        "Alleen doen als je veilig stilstaat (of weigeren als het niet kan)",
        "Doen bij lage snelheid, dat is veilig genoeg"
      ],1),

      q(17,"Verkeersdeelname","Wat is de beste reactie op druk van achterliggers (toeteren/duwen) in een druk gebied?",[
        "Snel handelen zodat ze stoppen",
        "Je eigen veilige keuzes blijven maken; voorspelbaar en rustig",
        "Terug toeteren om grenzen te stellen"
      ],1),

      q(18,"Verkeersdeelname","Je mist een afslag en klant zucht geïrriteerd. Wat is professioneel?",[
        "Abrupt terugsturen zodat je ‘fout’ herstelt",
        "Rustig doorrijden en via veilige route corrigeren; kort uitleggen",
        "Stilstaan op de rijbaan om te overleggen"
      ],1),

      q(19,"Verkeersdeelname","Je rijdt in regen/donker in de stad. Welke aanpassing is het meest logisch?",[
        "Meer afstand en rustiger rijstijl",
        "Zelfde rijstijl; je hebt ervaring",
        "Korter op voorgangers om mee te komen"
      ],0),

      q(20,"Verkeersdeelname","Klant vraagt om ‘een beetje sportiever rijden’ omdat hij misselijk wordt van langzaam rijden. Wat is het beste?",[
        "Sneller rijden zodat het korter duurt",
        "Soepel/constant rijden en uitleggen dat veiligheid en comfort leidend zijn",
        "Hard optrekken zodat de klant merkt dat je controle hebt"
      ],1),

      q(21,"Calamiteiten","Je ziet een kleine aanrijding zonder zichtbare letsels. Wat is een goede eerste prioriteit?",[
        "Kijken wie schuld heeft",
        "Veiligheid/overzicht: gevaar verminderen en pas dan afhandelen",
        "Direct filmen voor bewijs"
      ],1),

      q(22,"Calamiteiten","Wat is een veelgemaakte fout bij ‘helpen’ bij een ongeval?",[
        "Rustig blijven",
        "Te snel handelen zonder eigen veiligheid te checken",
        "112 bellen bij twijfel"
      ],1),

      q(23,"Calamiteiten","Je passagier raakt in paniek. Wat werkt meestal het best?",[
        "Zelf gehaast worden om het ‘op te lossen’",
        "Rustige stem, korte instructies en veilige stop als dat nodig is",
        "Discussie voeren zodat de passagier inziet dat hij ongelijk heeft"
      ],1),

      q(24,"Calamiteiten","Je voertuig krijgt een veiligheidskritische melding tijdens rit. Wat is het meest verdedigbaar?",[
        "Eerst rit afmaken, daarna kijken",
        "Veilig handelen: zo snel mogelijk veilig stoppen en procedure volgen",
        "Negeer meldingen; auto’s piepen vaker"
      ],1),

      q(25,"Calamiteiten","Bij een verstoring (afsluiting/omleiding) wat voorkomt escalatie het meest?",[
        "Niets zeggen tot je er bent",
        "Korte update: wat is er en wat ga je doen",
        "Zeggen dat ‘de gemeente weer moeilijk doet’"
      ],1),

      q(26,"Communicatie","Welke formulering voorkomt vaak discussie over routekeuze?",[
        "‘Ik rijd zoals ik wil’",
        "‘Er zijn twee logische routes; wilt u voorkeur of zal ik de snelste/veiligste nemen?’",
        "‘We zien wel’"
      ],1),

      q(27,"Omgang met klanten","Een klant wil stilte, maar jij wil vriendelijk zijn. Wat is het best?",[
        "Blijven praten; anders is het ongemakkelijk",
        "Respecteren: kort checken en dan stilte houden",
        "De klant vragen waarom hij zo stil is"
      ],1),

      q(28,"Omgang met klanten","De klant spreekt slecht Nederlands en geeft tegenstrijdige aanwijzingen. Wat is het meest professioneel?",[
        "Doorrijden en hopen dat het klopt",
        "Rustig laten aanwijzen/opschrijven/kaart tonen en bevestigen",
        "Zeggen dat hij maar Nederlands moet leren"
      ],1),

      q(29,"Omgang met klanten","Klant vraagt om een tussenstop. Wat is de beste aanpak?",[
        "Zonder praten doen, dat is service",
        "Kort afstemmen: tijd/wachttijd/tarief en of het kan op die plek",
        "Altijd weigeren; dat geeft gedoe"
      ],1),

      q(30,"Tarieven & transparantie","Welke keuze is het minst risicovol voor klachten over prijs?",[
        "Vooraf kort aangeven wat de prijs beïnvloedt en wat je gaat doen",
        "Alleen bij aankomst uitleggen want dan is het ‘feit’",
        "Zeggen dat je geen tijd hebt voor uitleg"
      ],0),

      q(31,"Conflictsituatie","Wat is vaak de beste ‘eerste’ interventie bij oplopende irritatie?",[
        "Grappen maken zodat het luchtig wordt",
        "Rustig samenvatten wat de klant wil en grenzen/opties geven",
        "Harder praten zodat je boven de klant uitkomt"
      ],1),

      q(32,"Conflictsituatie","Welke reactie is het meest professioneel bij onterechte beschuldiging?",[
        "Terug beschuldigen; anders win je niet",
        "Feitelijk blijven en procedure volgen (bon/route/registratie)",
        "Zwijgen en expres omrijden"
      ],1),

      q(33,"Agressie","Een klant wordt verbaal agressief maar nog niet fysiek. Wat is een verstandige focus?",[
        "De klant laten merken dat jij de baas bent",
        "De-escaleren: kalm, korte zinnen, grenzen; veiligheid plannen",
        "Doen alsof je hem niet hoort"
      ],1),

      q(34,"Agressie","Wanneer is ‘rit beëindigen’ logisch verdedigbaar?",[
        "Bij een nare opmerking",
        "Bij serieuze bedreiging/veiligheidsrisico en je kunt veilig stoppen",
        "Als de klant weigert te praten"
      ],1),

      q(35,"Eigen gedrag","Wat is een subtiele valkuil bij agressie/conflict?",[
        "Rustig blijven",
        "In discussie schieten om gelijk te krijgen",
        "Een veilige stopplek zoeken"
      ],1),

      q(36,"Klachtenprocedure","Wat is het meest nuttig om te doen direct na een incident dat mogelijk een klacht wordt?",[
        "Alles vergeten zodat je rustig blijft",
        "Feiten kort vastleggen volgens procedure (tijd, plek, afspraak, wat gezegd is)",
        "Alleen een review vragen zodat het ‘positief’ blijft"
      ],1),

      q(37,"Klachtenprocedure","Welke houding helpt het best om klachten niet groter te maken?",[
        "Defensief reageren en alles tegenspreken",
        "Kalm blijven, luisteren, en wijzen op de juiste procedure",
        "Sarcastisch doen zodat de klant stopt"
      ],1),

      q(38,"Geografie NL","Welke stad ligt het meest logisch in Oost-Nederland?",[
        "Arnhem",
        "Haarlem",
        "Leiden"
      ],0),

      q(39,"Geografie NL","Welke provincie grenst aan Duitsland en ligt in het oosten van Nederland?",[
        "Gelderland",
        "Noord-Holland",
        "Zeeland"
      ],0),

      q(40,"Samenvatting","Wat is de rode draad van ‘moeilijk niveau’?",[
        "Altijd de klant tevreden houden, ongeacht situatie",
        "Aantoonbaar correct handelen: veiligheid, regels, registratie en communicatie",
        "Zoveel mogelijk regels uit je hoofd leren zonder toepassing"
      ],1),

    ]
  };

  /* =========================
     TAXI EXAMEN 3 (HARD)  <-- NIEUW
     Focus: strik (realistische scenario’s)
     - ritvoorbereiding (Eindterm 3)
     - veilig/professioneel rijden (Eindterm 4)
     - verstoringen/calamiteiten (Eindterm 5)
     - communicatie/klanten/conflict/klachten (Eindterm 6-10)
     - administratie/apparatuur (Eindterm 1)
     - geo NL (Eindterm 11)
     ========================= */

  const TAXI_EXAMEN_3_HARD = {
    id: "taxi-examen-3-hard",
    title: "Taxi Examen 3 – Moeilijk",
    category: "Taxi",
    durationMinutes: 35,
    passMinCorrect: 32,
    questions: [

      // Ritvoorbereiding / halen & brengen
      q(1,"Ritvoorbereiding","Je moet iemand ophalen bij een ziekenhuis waar meerdere ingangen zijn (SEH, polikliniek, hoofdingang). Wat is de meest professionele start?",[
        "Naar hoofdingang rijden en wachten tot je gebeld wordt",
        "Vooraf exacte ingang/afdeling + herkenningspunt afstemmen en een veilige ophaalplek kiezen",
        "Rondjes rijden totdat je iemand ziet zwaaien"
      ],1),

      q(2,"Ritvoorbereiding","Een klant geeft een locatie door via WhatsApp-pin, maar jij ziet dat het in een autoluwe zone valt. Wat doe je?",[
        "Toch erin; taxi’s mogen vaak wel",
        "Veilig alternatief afspreken (meeting point) en dit kort uitleggen",
        "Stoppen vóór de zone en de klant laten zoeken"
      ],1),

      q(3,"Halen/brengen","De klant wil uitstappen ‘aan de overkant’ terwijl er een fietsstrook en veel verkeer is. Wat is het meest verdedigbaar?",[
        "Stoppen zodra je een gaatje ziet",
        "Doorrijden naar een veilige plek en klant daar laten uitstappen (eventueel korte loopafstand)",
        "Alarmlichten aan en deur open"
      ],1),

      q(4,"Halen/brengen","Je staat in een korte stopzone en klant appt: “2 minuten”. Wat is professioneel?",[
        "Blijven staan tot hij er is, want dat is service",
        "Doorstroming respecteren: doorrijden/ronde maken en duidelijke afspraak/meeting point",
        "Op de stoep parkeren, dan hindert het niemand"
      ],1),

      q(5,"Ritvoorbereiding","Wat is een subtiele maar belangrijke check vóór vertrek bij drukte?",[
        "Kijken of je muzieklijst klaar staat",
        "Omgeving checken i.v.m. voetgangers/fietsers vóór je wegrijdt",
        "Claxon testen"
      ],1),

      // Administratie / apparatuur
      q(6,"Administratie & BCT","Je komt erachter dat je één rit per ongeluk in de verkeerde status hebt gezet. Wat is het meest professioneel?",[
        "Laten staan; corrigeren geeft alleen aandacht",
        "Corrigeren volgens procedure zodat het herleidbaar klopt",
        "Alles verwijderen zodat niemand het ziet"
      ],1),

      q(7,"Administratie & documenten","Een klant vraagt om een zakelijke factuur met specifieke gegevens. Wat is het beste uitgangspunt?",[
        "Zeggen dat dat niet kan",
        "Volgens procedure: bon/factuur leveren zoals jouw systeem/bedrijf dat regelt",
        "Mondeling bedrag noemen en klaar"
      ],1),

      q(8,"Apparatuur","Tijdens het rijden valt je bon-printer uit en klant vraagt direct om bon bij aankomst. Wat is het meest professioneel?",[
        "Zeggen: ‘bonnen bestaan niet’",
        "Bij aankomst alternatief aanbieden (bijv. digitaal) en het netjes registreren",
        "De rit annuleren halverwege"
      ],1),

      q(9,"Administratie & privacy","Je bewaart klantgegevens ‘voor het geval dat’. Wat is het veiligste uitgangspunt?",[
        "Alles bewaren, dat is handig",
        "Alleen noodzakelijke gegevens bewaren en veilig omgaan met opslag/toegang",
        "Alles delen met collega’s zodat iedereen kan helpen"
      ],1),

      q(10,"Administratie & BCT","Wat roept bij controle vaak de meeste vragen op?",[
        "Een drukke avond met veel ritten",
        "Onverklaarbare gaten of patroon dat niet aansluit bij werkzaamheden",
        "Een korte pauze tussen ritten"
      ],1),

      // Verkeersdeelname / professioneel rijden
      q(11,"Verkeersdeelname","De klant zit achterin zonder gordel en zegt: “Het hoeft toch niet?”. Wat is het meest correct?",[
        "Niets zeggen; klant is volwassen",
        "Rustig aangeven dat veiligheid voorop staat en vertrekken pas als het veilig is",
        "Alleen iets zeggen als er politie is"
      ],1),

      q(12,"Verkeersdeelname","Je rijdt een woonwijk in waar veel kinderen spelen en het is schemerig. Wat is de meest professionele rijstijl?",[
        "Constant tempo, maar ruim blijven kijken en snelheid aanpassen aan situatie",
        "Snel erdoorheen zodat het gevaar korter duurt",
        "Kort op je voorganger zodat je mee kunt"
      ],0),

      q(13,"Verkeersdeelname","Je merkt dat je eigen frustratie oploopt door een lastige klant. Wat is slim?",[
        "Doorpraten tot je gelijk krijgt",
        "Rustig blijven, korte zinnen, eventueel veilig pauzemoment/stop als nodig",
        "Harder rijden zodat het sneller voorbij is"
      ],1),

      q(14,"Verkeersdeelname","De navigatie stuurt je een busbaan op (bord: verboden). Wat is het juiste uitgangspunt?",[
        "Als taxi mag je dat meestal",
        "Borden/wegmarkering gaan voor; route aanpassen",
        "Even erop, dan eraf"
      ],1),

      q(15,"Verkeersdeelname","Wat is vaak de grootste fout bij tijdsdruk?",[
        "Klant informeren dat het druk is",
        "Risico nemen en regels ‘oprekken’ om tijd in te halen",
        "Een omleiding kiezen"
      ],1),

      // Calamiteiten / verstoringen
      q(16,"Calamiteiten","Je komt bij een ongeval en er is veel verkeer. Wat is de beste eerste stap volgens veilig handelen?",[
        "Direct hulp verlenen zonder omgeving te checken",
        "Eigen veiligheid en omgeving eerst veilig maken (overzicht/markeren), daarna handelen",
        "Doorrijden om ruimte te maken"
      ],1),

      q(17,"Calamiteiten","Een passagier krijgt een paniekaanval en wil dat je “door rijdt”. Wat is het meest verdedigbaar?",[
        "Doorrijden; klant beslist",
        "Veilig stoppen, rust creëren en indien nodig hulp inschakelen",
        "Raam open en harder rijden"
      ],1),

      q(18,"Calamiteiten","Je voertuig krijgt plots een rood waarschuwingslampje (veiligheidskritisch). Wat is het meest professioneel?",[
        "Rit afmaken als het nog rijdt",
        "Zo snel mogelijk veilig stoppen en procedure volgen (laten controleren)",
        "Radio uitzetten, dan zie je het lampje niet"
      ],1),

      q(19,"Verstoringen","Een wegafsluiting zorgt voor omrijden. Wat is het meest professioneel richting klant?",[
        "Niets zeggen, dat voorkomt discussie",
        "Kort uitleggen wat er speelt en welke logische route je kiest",
        "Zeggen dat het ‘altijd wat is’"
      ],1),

      q(20,"Verstoringen","De klant klaagt over vertraging door file en vraagt om ‘alternatief via woonwijkjes’. Wat is het beste?",[
        "Altijd doen; klant betaalt",
        "Overwegen als het veilig/legaal/logisch is; anders kort uitleggen en veilig blijven",
        "Door rood rijden zodat je alsnog op tijd bent"
      ],1),

      // Communicatie / klanten
      q(21,"Communicatie","Welke openingszin verlaagt meestal de kans op misverstanden?",[
        "‘Waarheen?’ en direct wegrijden",
        "‘Goedemiddag, bestemming is … klopt dat? Heeft u routevoorkeur?’",
        "‘We zien wel waar we uitkomen’"
      ],1),

      q(22,"Communicatie","Een klant corrigeert je constant (“nee, daar links!”) terwijl jij borden volgt. Wat is professioneel?",[
        "In discussie gaan en bewijzen dat je gelijk hebt",
        "Rustig afstemmen: ‘Wilt u de route bepalen of zal ik borden/navigatie volgen?’",
        "De klant negeren en expres anders rijden"
      ],1),

      q(23,"Omgang met klanten","Klant vraagt om onredelijk verzoek (bijv. uitstappen op gevaarlijke plek). Wat is beste reactie?",[
        "Direct weigeren zonder uitleg",
        "Kalm uitleggen en alternatief bieden dat veilig/toegestaan is",
        "Toestaan als de klant belooft snel te zijn"
      ],1),

      q(24,"Omgang met klanten","Een stille klant lijkt gespannen. Wat is passend gedrag?",[
        "Veel vragen stellen om hem te laten praten",
        "Neutraal, rustig rijden en korte, behulpzame communicatie als dat past",
        "Sportief rijden om het snel af te ronden"
      ],1),

      q(25,"Tarieven","Klant vraagt aan het begin: “Wordt dit duurder als het druk is?” Wat is meest professioneel?",[
        "Ontwijken; anders discussie",
        "Kort uitleggen welke factoren prijs beïnvloeden (tijd/afstand/wachttijd/extra kosten)",
        "Zeggen: ‘altijd hetzelfde’"
      ],1),

      // Conflict / agressie / klachten
      q(26,"Conflicten","Wat is vaak de beste ‘eerste’ stap bij oplopende irritatie?",[
        "Terugdrukken met strengheid",
        "Samenvatten, erkenning geven en grenzen/opties aanbieden",
        "Zwijgen tot het overgaat"
      ],1),

      q(27,"Agressie","Welke reactie vergroot het risico op escalatie het meest?",[
        "Kalm blijven en herhalen wat je wel kunt doen",
        "Sarcastisch reageren of intimideren",
        "Rustig grenzen stellen"
      ],1),

      q(28,"Agressie","Wanneer is stoppen/beëindigen van de rit het best verdedigbaar?",[
        "Bij elk meningsverschil",
        "Bij veiligheidsrisico/bedreiging en je kunt veilig stoppen",
        "Als de klant geen fooi wil geven"
      ],1),

      q(29,"Klachtenprocedure","Een klant zegt: “Ik ga klagen.” Wat is het beste?",[
        "Discussie aangaan zodat hij dat niet doet",
        "Rustig uitleggen hoe de procedure werkt en feiten vastleggen",
        "Zeggen dat klachten niets doen"
      ],1),

      q(30,"Klachtenprocedure","Wat noteer je het liefst bij een mogelijk klachtmoment?",[
        "Alleen hoe irritant de klant was",
        "Feiten: tijd, locatie, afspraken, wat er gezegd/gedaan is",
        "Niets; dat kan tegen je werken"
      ],1),

      // Veiligheid / voertuig / gedrag
      q(31,"Voertuig & veiligheid","Je ontdekt vlak vóór vertrek dat een band er ‘net’ zacht uitziet. Wat is het meest professioneel?",[
        "Doorrijden; dat trekt wel bij",
        "Eerst checken/oppompen/controle; veiligheid gaat voor",
        "Alleen sneller rijden zodat je eerder klaar bent"
      ],1),

      q(32,"Voertuig & veiligheid","Wat is de meest verdedigbare aanpak bij beslagen ramen vlak vóór vertrek?",[
        "Rijden met klein kiertje",
        "Eerst zicht herstellen (ontwasemen/ventilatie) en dan pas rijden",
        "Met doekje wrijven tijdens het rijden"
      ],1),

      q(33,"Veiligheid algemeen","Wat is de beste ‘anti-dooring’ routine bij uitstappen in druk stadsverkeer?",[
        "Deur zelf openzetten voor de klant",
        "Spiegels + schoudercheck en klant instrueren te wachten tot het veilig is",
        "Alarmlichten aan en direct laten uitstappen"
      ],1),

      q(34,"Fitheid","Welke combinatie is het meest risicovol voor fouten?",[
        "Goede slaap + rustige dagdienst",
        "Weinig slaap + nacht + regen + druk stadsverkeer",
        "Korte ritten in woonwijk"
      ],1),

      q(35,"Fitheid","Je merkt dat je focus wegvalt. Wat is meest professioneel?",[
        "Nog snel de laatste rit",
        "Veilig pauzeren en pas doorgaan als je weer fit bent",
        "Extra koffie en door"
      ],1),

      // Geografisch inzicht
      q(36,"Geografie NL","Welke stad ligt in Noord-Brabant?",[
        "Eindhoven",
        "Zwolle",
        "Leeuwarden"
      ],0),

      q(37,"Geografie NL","Welke combinatie is het meest logisch (noord → zuid)?",[
        "Groningen → Zwolle → Maastricht",
        "Maastricht → Utrecht → Leeuwarden",
        "Rotterdam → Arnhem → Amsterdam"
      ],0),

      q(38,"Geografie NL","Welke provincie grenst aan België en ligt in het zuidwesten?",[
        "Zeeland",
        "Drenthe",
        "Flevoland"
      ],0),

      q(39,"Geografie NL","Welke stad ligt in Gelderland?",[
        "Arnhem",
        "Haarlem",
        "Delft"
      ],0),

      // Samenvatting
      q(40,"Samenvatting","Wat is de beste samenvatting van professioneel taxiwerk (moeilijk niveau)?",[
        "Altijd zo snel mogelijk klaar zijn",
        "Veilig, aantoonbaar correct en klantgericht binnen regels en procedures",
        "Zo min mogelijk communicatie zodat je geen discussie krijgt"
      ],1),

    ]
  };

  /* =========================
     EXAMS ARRAY (HARD)
     ========================= */

  const exams = [
    TAXI_EXAMEN_1_HARD,
    TAXI_EXAMEN_2_HARD,
    TAXI_EXAMEN_3_HARD
  ];

  window.EXAM_DATA_HARD = { exams };
  window.EXAMS_HARD = exams;
  window.examsHard = exams;

})();
