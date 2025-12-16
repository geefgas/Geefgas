/* =========================================================
   GeefGas — exam-data.js
   Taxi Examens 1 t/m 11
   Elk examen: 40 vragen
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
     TAXI EXAMEN 1
     ========================= */
  const TAXI_EXAMEN_1 = {
    id: "taxi-examen-1",
    title: "Taxi Examen 1 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [
      q(1,"Taxipas","Welke eis geldt om als taxichauffeur te mogen rijden?",["Alleen rijbewijs B","Een geldige taxipas","Alleen KvK-inschrijving"],1),
      q(2,"Taxipas","Wanneer moet je je taxipas bij je hebben?",["Alleen bij controle","Altijd tijdens taxiwerk","Alleen ’s nachts"],1),
      q(3,"ILT","Wat mag ILT controleren?",["Alleen kenteken","Documenten en ritregistratie","Alleen rijbewijs"],1),
      q(4,"Vergunningen","Wanneer mag je taxivervoer uitvoeren?",["Als klant contant betaalt","Als alles wettelijk in orde is","Als je route kent"],1),
      q(5,"BCT","Wat is het doel van de BCT?",["Navigatie","Ritten en werktijden registreren","Betalen"],1),
      q(6,"BCT","BCT werkt niet vóór dienst. Wat doe je?",["Toch rijden","Storingsprocedure volgen","Uitzetten"],1),
      q(7,"Ritweigering","Wanneer mag je een rit weigeren?",["Altijd","Bij gevaar of agressie","Bij korte rit"],1),
      q(8,"Gordel","Passagier wil geen gordel. Wat doe je?",["Negeren","Uitleggen en pas rijden als veilig","Toestaan"],1),
      q(9,"Veiligheid","Waar laat je een klant uitstappen?",["Rijbaan","Veilige toegestane plek","Kruispunt"],1),
      q(10,"Betaling","Wanneer reken je af?",["Begin rit","Einde rit","Alleen contant"],1),

      q(11,"Bon","Klant vraagt om bon. Wat is juist?",["Niet nodig","Bon verstrekken","Alleen zakelijk"],1),
      q(12,"Route","Klant wil andere route. Wat doe je?",["Negeren","Bespreken en volgen","Rit stoppen"],1),
      q(13,"Conflicten","Wat heeft altijd prioriteit?",["Tijd","Veiligheid (PAMAN)","Omzet"],1),
      q(14,"Nood","Passagier wordt onwel. Wat doe je?",["Doorrijden","Veilig stoppen en hulp","Negeren"],1),
      q(15,"Rusttijden","Waarom zijn rusttijden belangrijk?",["Winst","Veiligheid","Planning"],1),

      q(16,"Standplaats","Wat is juist gedrag?",["Voordringen","Wachtrij volgen","Dubbel parkeren"],1),
      q(17,"Privacy","Hoe ga je om met klantgegevens?",["Delen","Discreet","Online zetten"],1),
      q(18,"Voertuig","Wat check je vóór je dienst?",["Brandstof","Basisveiligheid","Niets"],1),
      q(19,"Alcohol","Wat geldt tijdens taxiwerk?",["Beetje mag","Nul tolerantie","Alleen avond"],1),
      q(20,"Professionaliteit","Wat hoort bij taxiwerk?",["Haast","Rustig en voorspelbaar","Sportief"],1),

      q(21,"Bagage","Hoe ga je om met veel bagage?",["Weigeren","Helpen en veilig plaatsen","Los laten"],1),
      q(22,"Communicatie","Wat is goede communicatie?",["Kortaf","Duidelijk en respectvol","Onpersoonlijk"],1),
      q(23,"Wet","Waarom zijn taxiregels belangrijk?",["Snelheid","Veiligheid en eerlijkheid","Omzet"],1),
      q(24,"Dienst","Wanneer mag je rijden?",["Altijd","Fit en alert","Bij weinig klanten"],1),
      q(25,"Stoppen","Waar stop je om te bellen?",["Kruispunt","Veilige plek","Rijbaan"],1),

      q(26,"Verantwoordelijkheid","Wie is verantwoordelijk tijdens de rit?",["Klant","Chauffeur","Planner"],1),
      q(27,"Doorring","Hoe voorkom je dooring?",["Deur open","Kijken en veilig openen","Haast"],1),
      q(28,"Techniek","Waarschuwingslampje brandt. Wat doe je?",["Negeren","Veilig stoppen","Harder rijden"],1),
      q(29,"Schiphol","Wat is belangrijk bij Kiss & Ride?",["Blijven staan","Regels volgen","Busbaan"],1),
      q(30,"Stress","Wat doe je bij stress?",["Doorpushen","Rust nemen","Negeren"],1),

      q(31,"Ethiek","Wat is eerlijk taxiwerk?",["Max winst","Volgens regels","Sneller"],1),
      q(32,"Nood","Ongeval vóór je. Wat doe je?",["Filmen","Veilig handelen","Doorrijden"],1),
      q(33,"Privacy","Mag je klanten filmen?",["Altijd","Alleen bij noodzaak","Nooit"],1),
      q(34,"Werkdruk","Hoe omgaan met tijdsdruk?",["Sneller rijden","Veilig blijven","Regels loslaten"],1),
      q(35,"Service","Wat straalt professionaliteit uit?",["Haast","Beheerst gedrag","Discussie"],1),

      q(36,"Comfort","Raam open leidt af. Wat doe je?",["Nee","Overleggen","Hard remmen"],1),
      q(37,"Hulp","Slecht ter been klant. Wat doe je?",["Haast","Helpen waar veilig","Negeren"],1),
      q(38,"Parkeren","Waar mag je stoppen?",["Overal","Toegestane plek","Rotonde"],1),
      q(39,"Roken","Klant wil roken. Wat doe je?",["Toestaan","Regels uitleggen","Boos"],1),
      q(40,"Samenvatting","Doel taxiwerk?",["Veel ritten","Veilig en klantgericht","Zo hard mogelijk"],1),
    ]
  };

  /* =========================
     TAXI EXAMEN 2
     ========================= */
  const TAXI_EXAMEN_2 = {
    id: "taxi-examen-2",
    title: "Taxi Examen 2 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [
      q(1,"BCT","Wanneer log je in op de BCT?",["Na eerste rit","Voor start dienst","Bij controle"],1),
      q(2,"Ritregistratie","Waarom is registratie belangrijk?",["Marketing","Controle","Alleen klant"],1),
      q(3,"ILT","Wat gebeurt bij zware overtreding?",["Niets","Boete of sanctie","Compliment"],1),
      q(4,"Tarieven","Wanneer geef je prijsindicatie?",["Na afloop","Voor vertrek","Nooit"],1),
      q(5,"Bon","Printer stuk. Wat doe je?",["Pech","Alternatief bieden","Bedrag roepen"],1),

      q(6,"Betaling","Geen wisselgeld. Wat doe je?",["Weigeren","Vooraf bespreken","Extra rekenen"],1),
      q(7,"AVG","Welke gegevens vastleggen?",["Alles","Alleen noodzakelijk","Geen"],1),
      q(8,"Vermoeidheid","Je wordt slaperig. Wat doe je?",["Doorrijden","Pauze nemen","Koffie"],1),
      q(9,"Nachtwerk","Waarom extra risico?",["Rustig","Minder zicht","Meer boetes"],1),
      q(10,"Dienst","Wat check je bij start?",["Radio","Systemen","Niets"],1),

      q(11,"Route","Navigatie stuurt fout. Wat doe je?",["Volgen","Borden volgen","Stoppen"],1),
      q(12,"Gedrag","Klant vraagt door rood. Wat doe je?",["Doen","Weigeren","Alleen oranje"],1),
      q(13,"Controle","Wat is juist bij controle?",["Wegrijden","Meewerken","Discussie"],1),
      q(14,"KIWA","Keuring verlopen. Wat doe je?",["Rijden","Niet rijden","Korte rit"],1),
      q(15,"PAMAN","Wat is eerste stap?",["Filmen","Veiligheid","Discussie"],1),

      q(16,"Markeren","Wat betekent markeren?",["Claxon","Locatie zichtbaar maken","Filmen"],1),
      q(17,"Alarmeren","Wat betekent alarmeren?",["Boos","Hulp inschakelen","Stoppen"],1),
      q(18,"Uitstappen","Beste plek?",["Fietspad","Veilige plek","Rijbaan"],1),
      q(19,"Zitplaatsen","Te veel personen. Wat doe je?",["Toestaan","Weigeren","Langzaam"],1),
      q(20,"Telefoon","Wanneer bellen?",["Tijdens rijden","Handsfree","Nooit"],1),

      q(21,"Privacy","Camerabeelden delen?",["Altijd","Volgens regels","Nooit"],1),
      q(22,"Service","Slechte review dreigt. Wat doe je?",["Toegeven","Professioneel blijven","Discussie"],1),
      q(23,"Hygiëne","Vieze auto. Wat doe je?",["Negeren","Schoonhouden","Klanten schuld"],1),
      q(24,"Stress","Wat helpt bij stress?",["Pushen","Rust","Negeren"],1),
      q(25,"Ethiek","Wat is eerlijk?",["Max winst","Regels volgen","Sneller"],1),

      q(26,"Parkeren","Waar stoppen?",["Overal","Toegestaan","Rotonde"],1),
      q(27,"Roken","Klant wil roken. Wat doe je?",["Toestaan","Regels uitleggen","Boos"],1),
      q(28,"Hulp","Slecht ter been klant?",["Haast","Helpen veilig","Negeren"],1),
      q(29,"Werkdruk","Hoe omgaan?",["Sneller","Veilig","Regels los"],1),
      q(30,"Samenvatting","Uitgangspunt taxiwerk?",["Buigen","Veilig en eerlijk","Snel"],1),

      q(31,"Nood","Ongeval zien. Wat doe je?",["Filmen","Veilig handelen","Door"],1),
      q(32,"Comfort","Raam open stoort. Wat doe je?",["Nee","Overleggen","Remmen"],1),
      q(33,"Voertuig","Lampje brandt. Wat doe je?",["Negeren","Stoppen","Gas"],1),
      q(34,"Dienst","Wanneer rijden?",["Altijd","Fit","Weinig klanten"],1),
      q(35,"Professionaliteit","Wat straalt dat uit?",["Haast","Rust","Discussie"],1),

      q(36,"Privacy","Foto klant maken?",["Altijd","Niet toegestaan","Alleen leuk"],1),
      q(37,"Conflicten","Boze klant. Wat doe je?",["Boos","Rustig","Negeer"],1),
      q(38,"Planning","Vertraging. Wat doe je?",["Zwijgen","Informeren","Haast"],1),
      q(39,"Veiligheid","Afleiding. Wat doe je?",["Appen","Aandacht verkeer","Discussie"],1),
      q(40,"Einddoel","Doel taxiwerk?",["Omzet","Veilig & klantgericht","Snel"],1),
    ]
  };

  /* =========================
     TAXI EXAMEN 3
     ========================= */
  const TAXI_EXAMEN_3 = {
    id: "taxi-examen-3",
    title: "Taxi Examen 3 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [
      q(1,"Dienststart","Wat doe je eerst bij dienststart?",["Rijden","Systemen checken","Radio"],1),
      q(2,"Schiphol","Wat is belangrijk bij luchthavenritten?",["Haast","Regels volgen","Dubbel parkeren"],1),
      q(3,"Klant","Bestemming onduidelijk. Wat doe je?",["Gokken","Bevestigen","Rijden"],1),
      q(4,"Klant","Boos gedrag. Wat is beste houding?",["Boos","Rustig","Harder"],1),
      q(5,"Veiligheid","Afleiding tijdens rijden. Wat doe je?",["Negeer","Aangeven","Appen"],1),

      q(6,"PAMAN","Waar staat PAMAN voor?",[
        "Persoonlijke veiligheid, Andersmans veiligheid, Markeren, Alarmeren, Noodzakelijke hulp",
        "Parkeren, Afrekenen, Muziek, Afslag, Navigatie",
        "Pech, Alarm, Motor, Aanrijding, Niets"
      ],0),
      q(7,"Nood","Wat is juiste volgorde bij nood?",["Filmen","Veiligheid eerst","Discussie"],1),
      q(8,"Bagage","Bagage blokkeert zicht. Wat doe je?",["Rijden","Herplaatsen","Negeren"],1),
      q(9,"Zitplaatsen","Kind zonder zitplaats. Wat doe je?",["Toestaan","Weigeren","Langzaam"],1),
      q(10,"Gordel","Achterpassagier weigert gordel?",["Toestaan","Uitleggen","Negeren"],1),

      q(11,"Route","Klant zegt: rij maar. Wat doe je?",["Langste","Logische route","Rondjes"],1),
      q(12,"Route","Omrijden gevraagd. Wat doe je?",["Weigeren","Overleggen","Zwijgen"],1),
      q(13,"Tarieven","Klant vraagt prijsindicatie?",["Geen","Eerlijk uitleggen","Laag bedrag"],1),
      q(14,"Bon","Klant wil uitgebreide bon?",["Nee","Verstrekken","Handgeschreven"],1),
      q(15,"Betaling","Terminal storing. Wat doe je?",["Boos","Alternatief zoeken","Klant laten gaan"],1),

      q(16,"Conflicten","Klant dreigt. Wat doe je?",["Discussie","Veilig handelen","Doorrijden"],1),
      q(17,"Nood","Agressieve klant. Wat doe je?",["Opsluiten","Veilig stoppen en hulp","Negeren"],1),
      q(18,"Vermoeidheid","Concentratie daalt. Wat doe je?",["Doorrijden","Pauze","Koffie"],1),
      q(19,"Telefoon","Klant wil dat je iets opzoekt. Wat doe je?",["Tijdens rijden","Stilstand","Geef telefoon"],1),
      q(20,"Privacy","Gegevens vorige klant delen?",["Ja","Nee","Tegen betaling"],1),

      q(21,"Camera","Hoe gebruik je camerabeelden?",["Delen","Volgens regels","Online"],1),
      q(22,"Service","Vieze auto klacht. Wat doe je?",["Negeren","Netjes reageren","Boos"],1),
      q(23,"Comfort","Raam open leidt af. Wat doe je?",["Nee","Overleggen","Remmen"],1),
      q(24,"Hulp","Slecht ter been klant?",["Haast","Helpen veilig","Negeren"],1),
      q(25,"Stoppen","Situatie bespreken. Waar stoppen?",["Rijbaan","Veilige plek","Rotonde"],1),

      q(26,"Navigatie","Verboden straat. Wat doe je?",["Inrijden","Borden volgen","Stoppen"],1),
      q(27,"ILT","Controle zien. Wat doe je?",["Weg","Rustig","BCT uit"],1),
      q(28,"Hygiëne","Auto representatief houden?",["Onbelangrijk","Belangrijk","Alleen weekend"],1),
      q(29,"Werkdruk","Tijd tekort. Wat doe je?",["Sneller","Veilig","Regels los"],1),
      q(30,"Professionaliteit","Wat hoort daarbij?",["Haast","Beheerst","Discussie"],1),

      q(31,"Privacy","Klanten filmen voor bewijs?",["Altijd","Alleen bij noodzaak","Nooit"],1),
      q(32,"Dienst","Wanneer stoppen met rijden?",["Wanneer wilt","Volgens regels","Na fooi"],1),
      q(33,"Ethiek","Wat is eerlijk werk?",["Max winst","Regels volgen","Sneller"],1),
      q(34,"Nood","Ongeval zien. Wat doe je?",["Filmen","Veilig handelen","Door"],1),
      q(35,"Communicatie","Buitenlandse klant?",["Negeren","Rustig communiceren","Weglopen"],1),

      q(36,"Stress","Beste aanpak stress?",["Negeren","Rust","Pushen"],1),
      q(37,"Klant","Onrealistische eisen?",["Toegeven","Grenzen uitleggen","Stoppen"],1),
      q(38,"Verantwoordelijkheid","Wie beslist veiligheid?",["Klant","Chauffeur","Planner"],1),
      q(39,"Samenvatting","Belangrijkste regel?",["Snel","Veilig","Omzet"],1),
      q(40,"Einddoel","Doel taxiwerk?",["Veel ritten","Veilige klantgerichte dienst","Haast"],1),
    ]
  };

  /* =========================
     TAXI EXAMEN 4
     ========================= */
  const TAXI_EXAMEN_4 = {
    id: "taxi-examen-4",
    title: "Taxi Examen 4 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [
      q(1,"Taximeter","Wanneer moet je de meter correct gebruiken?",["Alleen bij lange ritten","Volgens de geldende werkwijze/afspraak voor die rit","Alleen als de klant het vraagt"],1),
      q(2,"Taximeter","Wat doe je als je merkt dat de meter verkeerd staat ingesteld?",["Niets","Rit stoppen en eerst corrigeren volgens procedure","Gewoon doorrijden en achteraf uitleggen"],1),
      q(3,"Tarieven","Tol- of parkeerkosten tijdens de rit: wat is het meest professioneel?",["Niet noemen en achteraf rekenen","Vooraf of zo vroeg mogelijk bespreken/afstemmen","Altijd zelf betalen"],1),
      q(4,"Tarieven","Klant vraagt om vaste prijs: wat is het beste?",["Altijd weigeren","Alleen afspreken als het duidelijk is en volgens bedrijfsregels","Zeggen ‘zien we wel’"],1),
      q(5,"Betaling","Klant wil de rit splitten (2 personen betalen): wat doe je?",["Kan nooit","Als je systeem het kan: netjes uitvoeren, anders alternatief afspreken","Zeggen dat het jouw probleem niet is"],1),

      q(6,"Factuur","Klant wil een factuur met btw-gegevens: wat is het beste?",["Zeggen dat dat niet kan","Volgens jouw werkwijze een factuur/bon met juiste gegevens geven","Alleen mondeling bedrag noemen"],1),
      q(7,"Verloren voorwerpen","Klant laat iets achter in de taxi. Wat is professioneel?",["Houden","Volgen van gevonden-voorwerpenprocedure en terugmelden","Weggooien"],1),
      q(8,"Klant & service","Klant wil de bestemming aanpassen tijdens de rit. Wat doe je?",["Weigeren altijd","Kort bevestigen en veilig aanpassen (route/prijs/registratie)","Doen zonder iets te zeggen"],1),
      q(9,"Wachttijd","Klant wil ‘even snel’ iets ophalen. Wat is professioneel?",["Altijd gratis wachten","Afspreken wat de wachttijd betekent (tijd/kosten) en of het kan","Weglopen en de auto achterlaten"],1),
      q(10,"Stopplek","Klant wil uitstappen op een plek waar stoppen verboden is. Wat doe je?",["Toch stoppen","Doorrijden naar een veilige plek waar stoppen is toegestaan","Midden op de weg stoppen met alarmlichten"],1),

      q(11,"Toegankelijkheid","Een klant met rollator: wat is professioneel?",["Niet meenemen","Helpen waar redelijk en veilig mogelijk, zonder verkeer te hinderen","Zeggen dat hij maar moet lopen"],1),
      q(12,"Kindervervoer","Klant wil een kind zonder juiste beveiliging vervoeren. Wat is juist?",["Toestaan","Niet doen; veiligheid en regels gaan voor","Alleen bij korte rit"],1),
      q(13,"Huisdieren","Klant wil een huisdier meenemen. Wat is het meest professioneel?",["Altijd weigeren","Volg bedrijfsregels en overleg rustig (veiligheid/hygiëne)","Boos worden"],1),
      q(14,"Rijgedrag","Wat is het beste rijgedrag als je een kwetsbare klant vervoert?",["Sneller rijden zodat het kort duurt","Rustig, voorspelbaar en comfortabel rijden","Hard remmen om ruimte te maken"],1),
      q(15,"Communicatie","Klant spreekt slecht Nederlands. Wat doe je?",["Zeggen dat hij pech heeft","Rustig communiceren en bestemming laten tonen/opschrijven","Zomaar gaan rijden"],1),

      q(16,"Milieuzone","Je moet door een milieuzone waar jouw voertuig niet mag. Wat doe je?",["Toch rijden","Alternatieve route kiezen en dit uitleggen aan klant","Snel doorrijden zodat niemand het ziet"],1),
      q(17,"Schade","Er ontstaat schade tijdens de rit (bijv. spiegel geraakt). Wat doe je?",["Doorrijden","Veilig stoppen en handelen volgens procedure/verzekering","De klant laten betalen en door"],1),
      q(18,"Ongeval","Je bent betrokken bij een ongeval met letsel. Wat is het juiste uitgangspunt?",["Alleen doorrijden","Eerst veiligheid, dan hulp/alarmeren (PAMAN)","Alleen foto’s maken"],1),
      q(19,"Agressie","Klant dreigt of wordt agressief. Wat is het beste?",["Discussie aangaan","De-escaleren en zo nodig veilig stoppen + hulp inschakelen","Harder rijden om het te ‘winnen’"],1),
      q(20,"Centrale/dispatch","Je krijgt een opdrachtwijziging tijdens rijden. Wat doe je?",["Direct typen op je telefoon","Pas reageren als je veilig stilstaat of handsfree kan","Negeren altijd"],1),

      q(21,"Rit annuleren","De klant wil de rit annuleren vlak na vertrek. Wat doe je?",["Altijd weigeren","Volg bedrijfsregels: rustig bespreken wat kan en wat de gevolgen zijn","Boos worden"],1),
      q(22,"Tijd & punctualiteit","Je loopt vertraging op. Wat is professioneel?",["Niets zeggen","Klant kort informeren en veilig blijven rijden","Regels overtreden om het in te halen"],1),
      q(23,"Klantcomfort","Klant klaagt over temperatuur. Wat doe je?",["Negeren","Overleggen en zo mogelijk aanpassen zonder afleiding","Hard remmen en zeggen ‘uitstappen’"],1),
      q(24,"Geluid/muziek","Klant wil keiharde muziek, jij raakt afgeleid. Wat doe je?",["Alles op max","Rustig uitleggen en een veilige middenweg kiezen","Telefoon pakken en filmen"],1),
      q(25,"Representatie","Wat hoort bij een representatieve taxi?",["Rommel is normaal","Schoon, veilig en netjes interieur","Alleen een logo"],1),

      q(26,"Veilig laden","Bagage in de kofferbak: wat is belangrijk?",["Los leggen maakt niet uit","Zorg dat het veilig ligt en niet kan schuiven/klep blokkeren","Altijd op de achterbank leggen"],1),
      q(27,"Fout parkeren","Je moet wachten maar er is geen plek. Wat doe je?",["Dubbel parkeren op drukke weg","Doorrijden naar een toegestane plek of rondje rijden","Op een fietspad gaan staan"],1),
      q(28,"Openbare orde","Klant is dronken maar rustig. Wat is het beste uitgangspunt?",["Altijd weigeren","Beoordeel veiligheid; vervoer alleen als het veilig blijft en volgens regels","Altijd meenemen, ongeacht gedrag"],1),
      q(29,"Hygiëne","Klant is misselijk. Wat doe je preventief?",["Niets","Rustig rijden, ventilatie, en bereid zijn veilig te stoppen indien nodig","Hard optrekken zodat het snel klaar is"],1),
      q(30,"Ritgegevens","Waarom is het belangrijk ritgegevens correct te hebben (bestemming/tijd)?",["Alleen voor reclame","Voor administratie, controle en eventuele klachtenafhandeling","Het maakt niet uit"],1),

      q(31,"Klachten","Klant wil een klacht indienen. Wat doe je?",["Negeren","Rustig uitleggen hoe de klant dit kan doen volgens bedrijf/procedure","Boos worden"],1),
      q(32,"Discussie prijs","Klant zegt: ‘je rijdt expres om’. Wat doe je?",["Escaleren","Kalm blijven, uitleg geven en feiten/afspraken benoemen","Harder rijden"],1),
      q(33,"Privacy","Mag je een audio-opname van klantgesprekken zomaar bewaren en delen?",["Ja","Nee, alleen volgens regels/noodzaak","Ja, als je het niet vertelt"],1),
      q(34,"Identiteit","Klant vraagt om je naam/bedrijfsgegevens. Wat is professioneel?",["Weigeren","Netjes info geven voor zover gebruikelijk/veilig (bv. via bon/kaartje)","Boos reageren"],1),
      q(35,"Veiligheidsgevoel","Wat helpt jouw veiligheid tijdens het werk het meest?",["Altijd discussiëren","Rustig blijven, grenzen stellen en procedures kennen (PAMAN)","Altijd alleen ’s nachts rijden"],1),

      q(36,"Verkeer","Klant zegt: ‘rij door het rood, er komt niets’. Wat doe je?",["Doen","Niet doen; verkeersregels blijven gelden","Alleen bij groen-oranje"],1),
      q(37,"Routekeuze","Bij twijfel over de beste route: wat doe je?",["Altijd langste","Logische route kiezen en desnoods kort afstemmen met klant","Zomaar rijden"],1),
      q(38,"Stoppen onderweg","Je moet onderweg bellen met de centrale. Wat doe je?",["Bellen tijdens rijden met telefoon in hand","Stoppen op een veilige plek waar het toegestaan is","Stoppen midden op de rijbaan"],1),
      q(39,"Gedrag chauffeur","Wat is ongewenst chauffeurgedrag?",["Rustig uitleggen","Schreeuwen of intimideren","Klant netjes informeren"],1),
      q(40,"Samenvatting","Wat is de beste kernregel voor taxiwerk?",["Altijd klant gelijk","Veilig, eerlijk, volgens regels en professioneel","Zo snel mogelijk klaar"],1),
    ]
  };

  /* =========================
     TAXI EXAMEN 5
     ========================= */
  const TAXI_EXAMEN_5 = {
    id: "taxi-examen-5",
    title: "Taxi Examen 5 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [
      q(1,"Opstapmarkt","Wat is het belangrijkste bij klanten meenemen vanaf een standplaats?",["Alleen snelheid","Volgorde/regels en veiligheid","Altijd vaste prijs"],1),
      q(2,"Opstapmarkt","Een collega dringt voor in de rij. Wat is het beste?",["Terugduwen","Rustig blijven en regels volgen","Toeteren tot hij weggaat"],1),
      q(3,"Straattaxi","Een klant wil instappen op een busbaan. Wat doe je?",["Toch stoppen","Doorrijden naar veilige plek","Midden op de busbaan stoppen"],1),
      q(4,"Stopverbod","Klant wil uitstappen in stopverbod. Wat is juist?",["Klant bepaalt","Veilige toegestane plek kiezen","Altijd uitstappen waar klant wil"],1),
      q(5,"Rijstrook","Je staat stil om klant te laten instappen. Wat is juist?",["Op de rijbaan laten instappen","Zo min mogelijk hinder en veilig","Altijd op fietspad"],1),

      q(6,"Klantcontact","Wat is de beste startzin bij instappen?",["‘Waarheen?’ zonder groet","Groeten en bestemming bevestigen","Eerst telefoon checken"],1),
      q(7,"Route","Klant vraagt: ‘kortste of snelste route?’ Wat doe je?",["Zeggen ‘maakt niet uit’","Kort uitleggen en keuze afstemmen","Altijd langste route"],1),
      q(8,"Tarieven","Klant wil vooraf zekerheid. Wat is het beste?",["Geen info geven","Indicatie geven en uitleg (afhankelijk van route/tijd)","Een willekeurig bedrag roepen"],1),
      q(9,"Tarieven","Wanneer voorkom je tarief-ruzie het meest?",["Na de rit","Voor vertrek/zo vroeg mogelijk","Alleen bij klachten"],1),
      q(10,"Bon","Klant wil bon met vertrek/aanomst. Wat doe je?",["Niet mogelijk","Bon volgens systeem/werkwijze","Alleen mondeling"],1),

      q(11,"Betaalwijze","Klant wil pinnen. Wanneer meld je eventuele storing?",["Na de rit","Zodra je het merkt, rustig","Nooit melden"],1),
      q(12,"Betaalbewijs","Wat hoort op een correcte bon/factuur?",["Alleen ‘betaald’","Basisgegevens zoals datum/bedrag/rit","Alleen naam klant"],1),
      q(13,"Klacht","Klant klaagt over omrijden. Wat is professioneel?",["Escaleren","Rustig uitleg geven en feiten benoemen","Klant uitlachen"],1),
      q(14,"Conflicten","Klant schreeuwt. Wat is je doel?",["Terugschreeuwen","De-escaleren en veilig blijven","Snel doorrijden om klaar te zijn"],1),
      q(15,"Rit stoppen","Wanneer stop je een rit het meest terecht?",["Bij elk meningsverschil","Als veiligheid in gevaar komt","Als klant geen fooi geeft"],1),

      q(16,"Vermoeidheid","Wat is beste actie bij slaperigheid?",["Nog 1 rit","Pauze/stoppen en pas door als fit","Hardere muziek"],1),
      q(17,"Telefoon","Klant wil dat je navigeert via telefoon in de hand. Wat doe je?",["Doen tijdens rijden","Alleen instellen als je stilstaat","Klant laten vasthouden"],1),
      q(18,"Afleiding","Wat is het meest riskant voor veiligheid?",["Rustig gesprek","Appen tijdens rijden","Kijken in spiegels"],1),
      q(19,"Veiligheid","Wat is defensief rijden met passagiers?",["Snel optrekken","Rustig, voorspelbaar, afstand houden","Dicht op bumper"],1),
      q(20,"Gordel","Wat is juist over gordelgebruik?",["Alleen voorin","Volgens regels en veiligheid: gebruik stimuleren","Nooit verplicht"],1),

      q(21,"Bagage","Bagage kan schuiven. Wat is beste oplossing?",["Negeer","Vastzetten/veilig plaatsen","Op schoot laten"],1),
      q(22,"Toegankelijkheid","Rolstoel/rollator: wat is professioneel?",["Niet meenemen","Helpen waar redelijk en veilig","Alleen tegen extra geld"],1),
      q(23,"Hygiëne","Wat is belangrijk voor representatie?",["Rommel is oké","Schoon en netjes interieur","Alleen buitenkant"],1),
      q(24,"Roken","Klant wil vapen. Wat doe je?",["Toestaan altijd","Rustig uitleggen wat jouw/bedrijfsregels zijn","Boos worden"],1),
      q(25,"Muziek","Klant wil harde muziek. Jij raakt afgeleid. Wat doe je?",["Max volume","Overleggen en veilige middenweg","Rit beëindigen direct"],1),

      q(26,"Veilig uitstappen","Wat doe je bij uitstappen naast fietsstrook?",["Deur direct open","Eerst checken (spiegel/schouder)","Klant moet zelf kijken"],1),
      q(27,"Stoppen","Je moet een bericht lezen. Wat is juist?",["Rijdend lezen","Veilig stoppen op toegestane plek","Op rotonde stoppen"],1),
      q(28,"Onwel","Klant wordt misselijk. Wat doe je?",["Harder rijden","Rustig rijden en zo nodig veilig stoppen","Negeren"],1),
      q(29,"Noodsituatie","Bij incident: wat is het juiste uitgangspunt?",["Eerst filmen","Eerst veiligheid (PAMAN)","Eerst doorrijden"],1),
      q(30,"PAMAN","Wat hoort bij ‘alarmeren’?",["Boos roepen","Hulp inschakelen indien nodig","Claxon gebruiken"],1),

      q(31,"Verzekering/procedure","Schade aan taxi tijdens rit. Wat doe je?",["Wegrijden","Veilig stoppen en procedure volgen","Klant laten betalen en door"],1),
      q(32,"Verloren voorwerp","Klant laat telefoon achter. Wat doe je?",["Houden","Melden/gevonden-voorwerpenprocedure","Weggooien"],1),
      q(33,"Privacy","Mag je klantinfo delen met vrienden?",["Ja","Nee, discreet behandelen","Alleen als klant fooi geeft"],1),
      q(34,"AVG","Welke gegevens bewaar je?",["Alles voor de zekerheid","Alleen noodzakelijk en veilig","Geen enkele ooit"],1),
      q(35,"Communicatie","Buitenlandse klant begrijpt je niet. Wat doe je?",["Onvriendelijk worden","Rustig, eenvoudig, bestemming laten tonen","Zeggen ‘zoek maar uit’"],1),

      q(36,"Verkeer","Klant vraagt door rood te rijden. Wat doe je?",["Doen als het rustig is","Weigeren, regels blijven gelden","Alleen bij oranje"],1),
      q(37,"Routeplanning","File op snelste route. Wat doe je?",["Doorrijden in file zonder te melden","Alternatief bespreken/aanpassen","Stil gaan staan"],1),
      q(38,"Dienstdiscipline","Wat helpt boetes voorkomen?",["Geluk","Regels volgen en registratie op orde","Altijd inhalen"],1),
      q(39,"Klantveiligheid","Wat is belangrijkste bij vervoeren van kinderen?",["Snelheid laag","Juiste beveiliging en regels","Alleen korte rit"],1),
      q(40,"Samenvatting","Professioneel taxiwerk is vooral:",["Snel en hard","Veilig, eerlijk, klantgericht","Alleen veel omzet"],1),
    ]
  };

  /* =========================
     TAXI EXAMEN 6
     ========================= */
  const TAXI_EXAMEN_6 = {
    id: "taxi-examen-6",
    title: "Taxi Examen 6 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [
      q(1,"KIWA","Wat is een kernreden dat taxi’s worden gekeurd?",["Meer fooi","Veiligheid en voldoen aan eisen","Sneller mogen rijden"],1),
      q(2,"Voertuig","Wat controleer je minimaal vóór vertrek?",["Alleen radio","Banden/verlichting/spiegels","Alleen airco"],1),
      q(3,"Voertuig","Wat doe je bij kapotte remlichten?",["Doorrijden","Niet rijden tot opgelost","Alleen overdag rijden"],1),
      q(4,"Voertuig","Wat is juist bij storingslampje motor?",["Altijd negeren","Beoordelen en zo nodig veilig stoppen/procedure","Gas bijgeven"],1),
      q(5,"Bandenspanning","Waarom belangrijk?",["Voor uiterlijk","Voor veiligheid en remweg","Alleen brandstof"],1),

      q(6,"Rijgedrag","Wat is comfortabel rijden voor klant?",["Hard optrekken","Geleidelijk optrekken/remmen","Laat remmen"],1),
      q(7,"Afstand","Waarom extra volgafstand met passagiers?",["Voor spanning","Voor veiligheid/comfort","Niet nodig"],1),
      q(8,"Bochten","Wat is beste aanpak in bocht met passagier?",["Laat insturen en hard","Rustig snelheid aanpassen","Middenlijn pakken"],1),
      q(9,"Remmen","Wat is het meest professioneel?",["Laat en hard","Tijdig en geleidelijk","Alleen op laatste moment"],1),
      q(10,"Navigatie","Wat is altijd leidend?",["Navigatie","Verkeersborden en regels","Klantgevoel"],1),

      q(11,"Milieuzone","Je route gaat door zone waar je niet mag. Wat doe je?",["Toch gaan","Alternatieve route kiezen en uitleggen","Snel doorrijden"],1),
      q(12,"Busbaan","Klant zegt: ‘pak busbaan’. Wat doe je?",["Doen als het leeg is","Regels volgen; busbaan alleen als toegestaan","Altijd busbaan"],1),
      q(13,"Stilstaan","Waar mag je passagier laten instappen?",["Midden rijbaan","Veilige plek met minimale hinder","Op zebrapad"],1),
      q(14,"Zebrapad","Klant wil uitstappen op zebra. Wat doe je?",["Toestaan","Door naar veilige plek","Snel uitstappen laten"],1),
      q(15,"Stopverbod","Wat is de beste keuze?",["Toch stoppen","Doorrijden naar toegestane plek","Alarmlichten aan en stoppen"],1),

      q(16,"Slechte weersomstandigheden","Wat is juiste rijstijl bij regen?",["Zelfde afstand","Meer afstand en rustiger","Harder rijden"],1),
      q(17,"Mist","Wat is verstandig?",["Groot licht altijd","Snelheid omlaag en extra afstand","Bumperkleven"],1),
      q(18,"Gladheid","Wat is het beste?",["Later remmen","Rustig en voorspelbaar rijden","Dichter erop"],1),
      q(19,"Wind","Wat is belangrijk bij harde wind?",["Sneller rijden","Meer marge en aandacht voor fietsers","Alleen claxonneren"],1),
      q(20,"Nacht","Waarom extra risico?",["Wegen zijn leeg","Minder zicht en vermoeidheid","Altijd sneller"],1),

      q(21,"Klantservice","Klant vraagt om water/oplader. Wat is professioneel?",["Altijd nee","Wat kan bieden zonder veiligheid te schaden","Alles beloven"],1),
      q(22,"Klacht","Klant klaagt over rijstijl. Wat doe je?",["Negeer","Luisteren en rustig aanpassen waar veilig","Boos worden"],1),
      q(23,"Discussie","Prijsdiscussie: beste aanpak?",["Escaleren","Rustig uitleg en verwijs naar bon/afspraak","Klant bedreigen"],1),
      q(24,"Agressie","Klant wordt agressief. Wat is juist?",["Discussie winnen","De-escaleren en veiligheid voorop","Door rood rijden"],1),
      q(25,"Rit beëindigen","Wanneer is dat het meest terecht?",["Bij lage fooi","Bij onveiligheid","Bij korte rit"],1),

      q(26,"PAMAN","Wat is de juiste volgorde in de basis?",["Markeren-veiligheid-alarmeren","Veiligheid → markeren → alarmeren → hulp","Alarmeren-rijden-markeren"],1),
      q(27,"Alarmeren","Wanneer alarmeren?",["Nooit","Als nodig bij incident/gevaar","Alleen bij schade"],1),
      q(28,"Markeren","Waarom markeren?",["Voor reclame","Hulpdiensten vinden plek sneller","Voor social media"],1),
      q(29,"Hulp verlenen","Wat is uitgangspunt?",["Altijd zelf oplossen","Alleen wat veilig kan; hulp inschakelen","Niets doen"],1),
      q(30,"Eigen veiligheid","Wat helpt het meest?",["Discussies aangaan","Rustig blijven en procedures kennen","Altijd nachts rijden"],1),

      q(31,"Documenten","Wat moet je kunnen tonen bij controle?",["Alleen rijbewijs","Geldige documenten/registraties die gevraagd worden","Alleen pinbon"],1),
      q(32,"Taxipas","Je pas is verlopen. Wat doe je?",["Toch rijden","Niet rijden tot verlengd","Alleen korte ritten"],1),
      q(33,"BCT","Wat is het meest belangrijk bij BCT?",["Uitzetten bij drukte","Correct registreren volgens regels","Alleen ritprijs tonen"],1),
      q(34,"Storingsprocedure","Wat doe je bij BCT storing?",["Negeer","Volg procedure en registreer correct","Verberg storing"],1),
      q(35,"Administratie","Waarom klopt administratie?",["Alleen marketing","Controle/handhaving en betrouwbaarheid","Alleen klant"],1),

      q(36,"Gevonden voorwerpen","Wat is professioneel?",["Houden","Procedure volgen en terugmelden","Verkopen"],1),
      q(37,"Privacy","Wat is juist?",["Klantgesprekken delen","Discreet omgaan met info","Alles filmen en posten"],1),
      q(38,"Communicatie","Wat werkt bij onduidelijke bestemming?",["Gokken","Laten tonen en bevestigen","Boos worden"],1),
      q(39,"Samenvatting","Beste taxi-rijstijl is:",["Sportief","Rustig, veilig, voorspelbaar","Agressief"],1),
      q(40,"Samenvatting","Beste basisregel is:",["Klant wil = doen","Veiligheid en regels eerst","Omzet eerst"],1),
    ]
  };

  /* =========================
     TAXI EXAMEN 7
     ========================= */
  const TAXI_EXAMEN_7 = {
    id: "taxi-examen-7",
    title: "Taxi Examen 7 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [
      q(1,"Contractvervoer","Wat is belangrijk bij een vooraf geboekte rit?",["Alleen snelheid","Op tijd, duidelijkheid, correcte registratie","Alleen vaste prijs"],1),
      q(2,"Afspraak","Klant heeft ‘meet & greet’. Wat is professioneel?",["Onvindbaar staan","Duidelijk herkenbaar en volgens locatie-regels wachten","Midden op rijbaan wachten"],1),
      q(3,"Wachten","Waar wacht je het best op klant?",["Op zebrapad","Op toegestane plek zonder hinder","Op busbaan"],1),
      q(4,"Annulering","Klant annuleert op het laatste moment. Wat doe je?",["Boos worden","Bedrijfsregels volgen en rustig communiceren","Klant blokkeren direct"],1),
      q(5,"No-show","Klant komt niet opdagen. Wat is beste aanpak?",["Weglopen zonder melding","Procedure volgen (bellen/melden/wachttijd)","Direct vertrekken en rekenen"],1),

      q(6,"Bestemming","Klant geeft vage bestemming (‘bij station’). Wat doe je?",["Gokken","Doorvragen en bevestigen","Rijden en zien wel"],1),
      q(7,"Route","Klant wil ‘geen snelweg’. Wat doe je?",["Negeren","Route aanpassen als haalbaar/veilig","Rit stoppen"],1),
      q(8,"Route","Navigatie zegt omrijden door woonerf. Wat doe je?",["Sneller rijden","Snelheid aanpassen en verkeersregels volgen","Toeteren om ruimte"],1),
      q(9,"Tijd","Klant heeft haast. Wat is juist?",["Regels overtreden","Rustig uitleg: je rijdt veilig en volgens regels","Hard rijden en door rood"],1),
      q(10,"Communicatie","Wat is beste bij vertraging?",["Niets zeggen","Klant kort informeren","Pas bij aankomst zeggen"],1),

      q(11,"Betaling","Klant wil vooraf betalen. Wat doe je?",["Kan nooit","Volgens bedrijfswerkwijze; duidelijk afspreken","Altijd weigeren"],1),
      q(12,"Betaling","Klant wil achteraf per factuur. Wat doe je?",["Altijd nee","Alleen volgens afspraken/bedrijf; anders alternatief","Gratis rijden"],1),
      q(13,"Bon","Klant wil btw-gegevens. Wat doe je?",["Kan niet","Factuur/bon volgens systeem","Alleen mondeling"],1),
      q(14,"Fooi","Klant geeft geen fooi. Wat is professioneel?",["Geïrriteerd doen","Neutraal en netjes blijven","Klant afsnauwen"],1),
      q(15,"Prijsdiscussie","Beste aanpak?",["Escaleren","Kalm uitleg en bon/afspraak tonen","Klant opsluiten"],1),

      q(16,"Klantveiligheid","Klant wil met open deur/half uitstappen. Wat doe je?",["Laat gaan","Stop op veilige plek en laat veilig uitstappen","Rijd door met open deur"],1),
      q(17,"Kinderen","Klant wil kind zonder stoel. Wat doe je?",["Toestaan","Niet doen; veiligheid/regels","Alleen korte rit"],1),
      q(18,"Dieren","Hond mee: wat doe je?",["Altijd weigeren","Bedrijfsregels volgen en hygiëne/veiligheid afwegen","Boos worden"],1),
      q(19,"Zitplaatsen","Meer passagiers dan gordels. Wat doe je?",["Toestaan","Weigeren; regels en veiligheid","Langzaam rijden"],1),
      q(20,"Bagage","Bagage blokkeert achterruit. Wat doe je?",["Negeer","Veilig herplaatsen vóór vertrek","Klant vasthouden"],1),

      q(21,"Incident","Klant heeft ruzie met ander verkeer. Wat doe jij?",["Meedoen","Rustig blijven en focus op veiligheid","Toeteren en uitschelden"],1),
      q(22,"Agressie","Klant wordt dreigend. Wat is juist?",["De discussie winnen","De-escaleren, veilig stoppen, hulp indien nodig","Harder rijden om weg te komen"],1),
      q(23,"PAMAN","Wat is eerste prioriteit?",["Omzet","Veiligheid","Klant gelijk"],1),
      q(24,"Centrale","Wanneer reageer je op appje van centrale?",["Rijdend typen","Als je veilig stilstaat/handsfree","Nooit"],1),
      q(25,"Telefoon","Mag je bellen zonder handsfree?",["Ja","Nee","Alleen op snelweg"],1),

      q(26,"Voertuig","Wat is ‘representatief’?",["Rommel oké","Schoon, netjes, veilig","Alleen glimmend"],1),
      q(27,"Hygiëne","Klant klaagt over geur. Wat doe je?",["Negeer","Professioneel reageren en verbeteren","Klant uitlachen"],1),
      q(28,"Airco/verwarming","Klant wil andere temperatuur. Wat doe je?",["Negeer","Overleg en pas aan als veilig","Hard remmen"],1),
      q(29,"Muziek","Klant wil stilte. Wat doe je?",["Muziek harder","Muziek uit/laag en respectvol","Discussie"],1),
      q(30,"Privacy","Mag je klantfoto’s delen als reclame?",["Ja","Nee, privacy respecteren","Alleen zonder vragen"],1),

      q(31,"ILT","Wat is beste houding bij controle?",["Wegrijden","Rustig meewerken","Boos worden"],1),
      q(32,"Documenten","Wat is belangrijk bij documenten?",["Thuis is genoeg","Op orde en toonbaar","Alleen kopie"],1),
      q(33,"BCT","Waarom BCT correct gebruiken?",["Voor navigatie","Voor rit/werktijd registratie volgens regels","Voor muziek"],1),
      q(34,"Storingen","BCT storing tijdens rit: wat doe je?",["Negeer","Procedure volgen en correct registreren","Uitzetten en door"],1),
      q(35,"Rusttijden","Waarom belangrijk?",["Voor omzet","Voor veiligheid en fitheid","Alleen verplicht bij controle"],1),

      q(36,"Vermoeidheid","Concentratie zakt. Wat doe je?",["Nog 2 ritten","Pauze en pas door als fit","Meer appen"],1),
      q(37,"Stoppen","Waar stop je bij nood?",["Midden op rijbaan","Veilige plek; alarmlichten waar nodig","In bocht"],1),
      q(38,"Onwel","Klant wordt onwel. Wat doe je?",["Doorrijden","Veilig stoppen en hulp inschakelen","Negeren"],1),
      q(39,"Samenvatting","Beste gedrag taxi-chauffeur:",["Assertief en hard","Rustig, klantgericht, volgens regels","Onverschillig"],1),
      q(40,"Samenvatting","Wat is het einddoel?",["Veel ritten","Veilig en klantgericht vervoeren","Sneller dan anderen"],1),
    ]
  };

  /* =========================
     TAXI EXAMEN 8 (NIEUW)
     ========================= */
  const TAXI_EXAMEN_8 = {
    id: "taxi-examen-8",
    title: "Taxi Examen 8 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [
      q(1,"Start rit","Wat doe je vóór je wegrijdt met een nieuwe klant?",["Direct optrekken","Bestemming bevestigen en veilig wegrijden","Eerst bellen"],1),
      q(2,"Routekeuze","Klant vraagt: ‘rij je op meter of vaste prijs?’. Wat doe je?",["Onzeker blijven","Duidelijk uitleggen wat geldt voor deze rit","Zeggen: later"],1),
      q(3,"Transparantie","Wat voorkomt misverstanden over kosten?",["Geen info geven","Duidelijke uitleg vooraf/zo vroeg mogelijk","Alleen achteraf"],1),
      q(4,"Wachttijd","Klant wil 10 minuten wachten. Wat is professioneel?",["Altijd gratis","Afspreken wat dit betekent voor tijd/kosten","Zonder uitleg wachten"],1),
      q(5,"Omweg","Klant wil langs een winkel. Wat is beste aanpak?",["Direct weigeren","Overleg of het kan en wat het betekent","Zomaar doen"],1),

      q(6,"Bon","Wanneer geef je een bon?",["Nooit","Op verzoek volgens werkwijze","Alleen contant"],1),
      q(7,"Pin","Wat doe je als pinapparaat storing geeft?",["Klant laten gaan","Rustig alternatief zoeken volgens procedure","Boos worden"],1),
      q(8,"Contant","Klant betaalt met groot biljet. Wat is verstandig?",["Doen alsof je wissel hebt","Vooraf aangeven en oplossing afspreken","Klant eruit zetten"],1),
      q(9,"Klantcontact","Wat is professioneel bij een boze klant?",["Terugschreeuwen","Rustig blijven en luisteren","Toeteren"],1),
      q(10,"De-escalatie","Wat helpt het meest bij spanning in de auto?",["Discussie winnen","Kalm blijven en grenzen aangeven","Hard rijden"],1),

      q(11,"Veilige stop","Je moet iets uitleggen aan klant. Waar doe je dat het best?",["Rijdend","Op veilige plek stilstaand","Op rotonde"],1),
      q(12,"Afleiding","Klant vraagt of jij even een bericht leest. Wat doe je?",["Lezen tijdens rijden","Alleen als je veilig stilstaat","Klant laten sturen"],1),
      q(13,"Rijstijl","Wat is ‘voorspelbaar rijden’?",["Onverwacht remmen","Rustig, tijdig richting aangeven, gelijkmatig","Veel wisselen"],1),
      q(14,"Afstand","Met passagiers: hoe houd je afstand?",["Korter, want je kent de weg","Ruimer, voor comfort en veiligheid","Afstand maakt niet uit"],1),
      q(15,"Inhalen","Wanneer haal je het best niet in?",["Als je haast hebt","Bij twijfel/gebrek aan zicht","Als je sneller bent"],1),

      q(16,"Stopplek","Klant wil uitstappen op een druk kruispunt. Wat doe je?",["Toch stoppen","Door naar veilige plek","Alarmlichten en stoppen"],1),
      q(17,"Uitstappen fietsers","Hoe voorkom je ‘dooring’?",["Deur in één keer open","Spiegel/schoudercheck en veilig openen","Klant moet zelf"],1),
      q(18,"Gordel","Wat is het beste bij gordelweigering?",["Negeren","Uitleggen; veiligheid/regels voorop","Toestaan altijd"],1),
      q(19,"Kinderen","Kind wil zonder beveiliging mee. Wat doe je?",["Toestaan","Niet doen; regels/veiligheid","Alleen 2 km"],1),
      q(20,"Zitplaatsen","Meer personen dan gordels: wat is juist?",["Toestaan","Weigeren","Langzaam rijden"],1),

      q(21,"Privacy","Wat doe je met gesprekken die je hoort?",["Doorvertellen","Discreet houden","Online posten"],1),
      q(22,"Cameragebruik","Camerabeelden: wat is professioneel?",["Openbaar delen","Alleen gebruiken/bewaren volgens regels","Doorsturen naar vrienden"],1),
      q(23,"Klantgegevens","Wat noteer je voor factuur?",["Alles wat je weet","Alleen noodzakelijke gegevens","Altijd ID-foto"],1),
      q(24,"Verloren voorwerpen","Klant vergeet tas. Wat doe je?",["Houden","Procedure volgen en terugmelden","Weggooien"],1),
      q(25,"Klachten","Klant wil klacht indienen. Wat doe je?",["Negeer","Leg procedure rustig uit","Word boos"],1),

      q(26,"Voertuigcheck","Wat is een slimme dagelijkse check?",["Alleen wassen","Banden, verlichting, ruiten, schade","Alleen airco"],1),
      q(27,"Storingslampje","Veiligheidskritisch lampje: wat doe je?",["Doorrijden","Veilig stoppen en procedure volgen","Harder rijden"],1),
      q(28,"Keuring","Keuring verlopen: wat doe je?",["Toch rijden","Niet rijden tot in orde","Alleen korte rit"],1),
      q(29,"Brandstof","Wat is professioneel rond tankniveau?",["Rijden tot leeg","Zorgen dat je dienst haalbaar is","Altijd halfvol"],1),
      q(30,"Schoonmaak","Waarom schoon interieur?",["Voor snelheid","Voor representatie/hygiëne","Niet belangrijk"],1),

      q(31,"Weer","Wat doe je bij zware regen?",["Zelfde snelheid/afstand","Snelheid omlaag, afstand groter","Harder rijden"],1),
      q(32,"Mist","Wat is juist bij mist?",["Bumperkleven","Rustig rijden, afstand, verlichting passend","Groot licht altijd"],1),
      q(33,"Gladheid","Op glad wegdek: wat is beste?",["Laat remmen","Rustig en extra afstand","Dicht erop"],1),
      q(34,"Nacht","Waar let je extra op in de nacht?",["Minder regels","Vermoeidheid en zicht","Altijd sneller"],1),
      q(35,"Drukte","In druk verkeer: wat is professioneel?",["Agressief invoegen","Anticiperen en rustig blijven","Altijd claxonneren"],1),

      q(36,"Onwel","Klant wordt onwel: wat doe je?",["Doorrijden","Veilig stoppen en hulp regelen","Negeren"],1),
      q(37,"Incident","Bij gevaar: wat is eerste stap?",["Filmen","Veiligheid (PAMAN)","Discussie"],1),
      q(38,"Agressie","Klant agressief: beste aanpak?",["Harder rijden","De-escaleren en zo nodig hulp","Terugdreigen"],1),
      q(39,"Samenvatting","Welke zin past het best bij professioneel taxiwerk?",["Regels buigen voor klant","Veilig, eerlijk en klantgericht","Zo snel mogelijk"],1),
      q(40,"Samenvatting","Wat is altijd nummer 1?",["Omzet","Veiligheid","Gelijk krijgen"],1),
    ]
  };

  /* =========================
     TAXI EXAMEN 9 (NIEUW)
     ========================= */
  const TAXI_EXAMEN_9 = {
    id: "taxi-examen-9",
    title: "Taxi Examen 9 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [
      q(1,"BCT","Wat is het beste moment om te controleren of je BCT werkt?",["Na 3 ritten","Voor start dienst","Alleen bij controle"],1),
      q(2,"BCT","Wat is het risico van onjuiste registratie?",["Geen","Boetes/handhaving en administratieve problemen","Alleen minder fooi"],1),
      q(3,"Storingsprocedure","Wat is de juiste reactie bij BCT-storing?",["Negeer","Volg storingsprocedure","Zeg niets"],1),
      q(4,"Ritgegevens","Welke ritgegevens zijn belangrijk vast te leggen?",["Alleen muziekkeuze","Tijd/rittype/registratie volgens systeem","Alleen naam klant"],1),
      q(5,"Werkdiscipline","Wat voorkomt fouten in administratie?",["Haast","Rustig werken en checklists","Alles uit hoofd"],1),

      q(6,"Documenten","Wat hoort bij ‘op orde’ zijn voor controle?",["Alleen rijbewijs","Taxipas + vereiste documenten/registratie","Alleen kentekenbewijs"],1),
      q(7,"Taxipas","Wat doe je als je taxipas thuis ligt?",["Toch rijden","Niet rijden; eerst ophalen","Alleen korte rit"],1),
      q(8,"Vergunningen","Wie moet zorgen dat bedrijf/voertuigvoorwaarden kloppen?",["Alleen klant","Bedrijf; chauffeur checkt basis","Alleen garage"],1),
      q(9,"Controle","Hoe gedraag je je bij ILT-controle?",["Wegrijden","Rustig meewerken en tonen","Discussie starten"],1),
      q(10,"Handhaving","Wat kan ILT vragen tijdens controle?",["Alleen fooi","Documenten en registratie","Alleen muzieklijst"],1),

      q(11,"Tarieven","Wat is professioneel bij vragen over tarief?",["Ontwijken","Duidelijk uitleggen","Boos doen"],1),
      q(12,"Vaste prijs","Wanneer is vaste prijs het meest netjes?",["Altijd spontaan","Als het volgens bedrijfsregels duidelijk is afgesproken","Nooit"],1),
      q(13,"Tol/parkeren","Hoe ga je om met tol of parkeren?",["Verzwijgen","Zo vroeg mogelijk benoemen/afstemmen","Altijd zelf betalen"],1),
      q(14,"Wachttijd","Klant wil wachten tijdens stop. Wat doe je?",["Gratis altijd","Afstemmen over tijd/kosten","Weg rijden zonder iets te zeggen"],1),
      q(15,"Bon","Wat is de beste houding bij bonvraag?",["Weigeren","Lever volgens procedure (papier/digitaal)","Alleen zakelijk"],1),

      q(16,"Pin","Pin valt uit tijdens afrekenen. Wat doe je eerst?",["Klant laten gaan","Nogmaals proberen/alternatief volgens procedure","Boos worden"],1),
      q(17,"Contant","Geen wisselgeld: wat is professioneel?",["Klant uitschelden","Vooraf melden en oplossing kiezen","Extra rekenen zonder uitleg"],1),
      q(18,"Split betaling","2 klanten willen splitten. Wat doe je?",["Kan nooit","Als mogelijk: uitvoeren, anders alternatief","Negeer"],1),
      q(19,"Betaalveiligheid","Wat is een veilige afrekenplek?",["Midden rijbaan","Stilstaand op veilige plek","Op rotonde"],1),
      q(20,"Fraude","Klant wil ‘zonder meter’ zwart. Wat doe je?",["Doen","Weigeren en volgens regels werken","Alleen korte rit"],1),

      q(21,"Klantservice","Wat is klantgericht zonder regels te breken?",["Door rood rijden","Rustig uitleggen en veilig rijden","Onvriendelijk zijn"],1),
      q(22,"Omrijden","Weg afgesloten. Wat doe je?",["Door afzetting","Veilige omleiding kiezen en uitleggen","Stoppen op snelweg"],1),
      q(23,"Bestemming","Klant verandert bestemming. Wat doe je?",["Negeren","Bevestigen en veilig aanpassen (route/registratie)","Boos worden"],1),
      q(24,"Taalbarrière","Klant spreekt weinig NL. Wat is beste?",["Kortaf zijn","Bestemming laten tonen/opschrijven","Zomaar rijden"],1),
      q(25,"Klantgedrag","Klant wordt boos over file. Wat doe je?",["Terugschreeuwen","Kalm blijven en informeren","Extra hard rijden"],1),

      q(26,"Veiligheid","Wat is de beste manier om risico te verminderen?",["Haast","Defensief rijden en anticiperen","Bumperkleven"],1),
      q(27,"Afleiding","Wat is het meest afleidend?",["Radio","Appen tijdens rijden","Spiegelcheck"],1),
      q(28,"Rij- en rusttijden","Waarom rust nemen?",["Voor winst","Voor veiligheid/fitheid","Alleen voor controle"],1),
      q(29,"Vermoeidheid","Wat doe je bij slaperigheid?",["Doorrijden","Pauze nemen en pas door als fit","Alleen raam open"],1),
      q(30,"Nacht","Wat is een risico bij nachtwerk?",["Meer licht","Vermoeidheid en beperkt zicht","Altijd leeg"],1),

      q(31,"PAMAN","Wat is het eerste uitgangspunt bij incident?",["Filmen","Veiligheid","Discussie"],1),
      q(32,"Markeren","Markeren betekent:",["Claxonneren","Locatie/situatie herkenbaar maken","Hard remmen"],1),
      q(33,"Alarmeren","Alarmeren betekent:",["Boos zijn","Hulp inschakelen indien nodig","Doorrijden"],1),
      q(34,"Noodhulp","Wat doe je bij klant die onwel wordt?",["Negeren","Veilig stoppen en hulp inschakelen","Doorrijden"],1),
      q(35,"Eigen veiligheid","Wat helpt het meest?",["Escaleren","Rustig blijven en procedures kennen","Altijd alleen rijden"],1),

      q(36,"Privacy","Wat is juist over klantinformatie?",["Delen met vrienden","Discreet behandelen","Online posten"],1),
      q(37,"Camerabeelden","Wat is juist?",["Altijd delen","Alleen volgens regels/doel bewaren","Naar collega appen"],1),
      q(38,"Gevonden voorwerp","Wat is professioneel?",["Houden","Procedure volgen en terugmelden","Weggooien"],1),
      q(39,"Samenvatting","Professioneel taxiwerk betekent:",["Snelheid eerst","Regels + registratie + service","Klant altijd gelijk"],1),
      q(40,"Samenvatting","Wat is het belangrijkste tijdens je dienst?",["Omzet","Veiligheid","Discussie winnen"],1),
    ]
  };

  /* =========================
     TAXI EXAMEN 10 (NIEUW)
     ========================= */
  const TAXI_EXAMEN_10 = {
    id: "taxi-examen-10",
    title: "Taxi Examen 10 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [
      q(1,"EHBO","Klant zegt dat hij duizelig is. Wat doe je eerst?",["Negeer","Veilig stoppen en situatie inschatten","Harder rijden"],1),
      q(2,"EHBO","Klant wordt benauwd. Wat is verstandig?",["Doorrijden","Veilig stoppen en zo nodig 112/ hulp inschakelen","Alleen raam dicht"],1),
      q(3,"EHBO","Klant is flauwgevallen. Wat is prioriteit?",["Bestemming halen","Veiligheid en hulp inschakelen","Foto maken"],1),
      q(4,"EHBO","Wanneer bel je 112 het snelst?",["Als het duur is","Bij ernstige klachten/levensgevaar","Nooit"],1),
      q(5,"Ongeval","Je ziet een ongeval. Wat is eerste stap?",["Filmen","Eigen/andersmans veiligheid","Doorrijden"],1),

      q(6,"PAMAN","Wat past het best bij PAMAN?",["Omzet eerst","Veiligheid → markeren → alarmeren → helpen","Ruzie maken"],1),
      q(7,"Markeren","Hoe kan je markeren bij incident?",["Locatie doorgeven en zichtbaar maken","Alleen toeteren","Niets"],0),
      q(8,"Agressie","Klant wordt agressief. Wat is het beste?",["Terugdreigen","De-escaleren en hulp/centrale inschakelen indien nodig","Door rood rijden"],1),
      q(9,"Onveilig gevoel","Je voelt je onveilig: wat doe je?",["Niks","Zo nodig veilig stoppen en hulp inschakelen","Klant provoceren"],1),
      q(10,"Stopplek","Waar stop je het best bij nood?",["In bocht","Veilige plek met minimale hinder","Midden snelweg"],1),

      q(11,"Brand","Je ruikt brandlucht in de auto. Wat doe je?",["Negeer","Veilig stoppen en oorzaak laten checken","Harder rijden"],1),
      q(12,"Technisch","Remmen voelen slecht. Wat is juist?",["Toch rijden","Niet doorrijden; veiligheid eerst","Alleen rustig rijden"],1),
      q(13,"Band","Je hebt een lekke band. Wat doe je?",["Doorrijden","Veilig stoppen op veilige plek/pechprocedure","Hard remmen"],1),
      q(14,"Storingslampje","Rood waarschuwingslampje: wat is beste?",["Negeren","Veilig stoppen en controleren/procedure","Gas geven"],1),
      q(15,"Keuring","Waarom keuring/onderhoud?",["Voor geluid","Voor veiligheid en eisen","Voor meer fooi"],1),

      q(16,"Rijstijl","Wat is comfortabel voor kwetsbare klant?",["Sportief","Rustig en voorspelbaar","Hard remmen"],1),
      q(17,"Bochten","Hoe neem je bochten met passagier?",["Snel","Rustig en vloeiend","Middenlijn"],1),
      q(18,"Afstand","Waarom meer afstand bij passagier?",["Voor irritatie","Comfort en veiligheid","Niet nodig"],1),
      q(19,"Remmen","Wat is het beste remgedrag?",["Laat en hard","Tijdig en geleidelijk","Plotseling"],1),
      q(20,"Inhalen","Wat is juist bij twijfel over inhalen?",["Toch doen","Niet doen","Groot licht"],1),

      q(21,"Uitstappen","Klant wil uitstappen aan fietsstrook. Wat doe je?",["Deur open","Check spiegels/schouder en laat veilig uitstappen","Klant zelf"],1),
      q(22,"Zitplaatsen","Te veel personen. Wat doe je?",["Toestaan","Weigeren","Langzaam rijden"],1),
      q(23,"Kinderveiligheid","Kind zonder juiste beveiliging: wat doe je?",["Toestaan","Niet vervoeren","Alleen korte rit"],1),
      q(24,"Bagage","Bagage in gangpad: wat doe je?",["Oké","Veilig herplaatsen/zekeren","Niets"],1),
      q(25,"Rolstoel/rollator","Wat is professioneel?",["Weigeren","Helpen waar redelijk/veilig","Alleen tegen fooi"],1),

      q(26,"Communicatie","Klant begrijpt je niet. Wat doe je?",["Kortaf","Rustig, eenvoudig, laten tonen","Weglopen"],1),
      q(27,"Conflicten","Prijsruzie: beste aanpak?",["Escaleren","Kalm uitleggen en verwijzen naar afspraken/bon","Bedreigen"],1),
      q(28,"Klachten","Klant wil klacht. Wat doe je?",["Negeer","Leg procedure uit","Boos worden"],1),
      q(29,"Privacy","Klantgegevens: wat is juist?",["Delen","Alleen noodzakelijk en discreet","Online zetten"],1),
      q(30,"Camerabeelden","Wat is juist?",["Openbaar delen","Bewaren/gebruik volgens regels","Altijd verwijderen"],1),

      q(31,"Vermoeidheid","Je concentratie daalt. Wat doe je?",["Nog 1 rit","Pauze nemen","Harder rijden"],1),
      q(32,"Weer","Bij hevige regen: wat doe je?",["Zelfde afstand","Meer afstand en rustig","Sneller"],1),
      q(33,"Mist","Bij mist: wat is juist?",["Bumperkleven","Snelheid omlaag en afstand","Groot licht altijd"],1),
      q(34,"Gladheid","Wat doe je bij glad wegdek?",["Laat remmen","Rustig rijden en extra afstand","Dicht erop"],1),
      q(35,"Nacht","Wat is extra belangrijk?",["Meer haast","Zicht en vermoeidheid","Regels minder"],1),

      q(36,"Betaling","Pin kapot. Wat doe je?",["Klant laten gaan","Alternatief zoeken volgens procedure","Boos worden"],1),
      q(37,"Bon","Klant wil bon. Wat doe je?",["Nooit","Verstrekken volgens werkwijze","Alleen contant"],1),
      q(38,"Standplaats","Wat is juist op standplaats?",["Voordringen","Wachtrij volgen","Dubbel parkeren"],1),
      q(39,"Samenvatting","Wat is kern van professioneel taxiwerk?",["Snelheid","Veiligheid + service + regels","Alleen omzet"],1),
      q(40,"Samenvatting","Wat staat altijd voorop?",["Omzet","Veiligheid","Gelijk krijgen"],1),
    ]
  };

  /* =========================
     TAXI EXAMEN 11 (NIEUW)
     ========================= */
  const TAXI_EXAMEN_11 = {
    id: "taxi-examen-11",
    title: "Taxi Examen 11 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [
      q(1,"Luchthavenritten","Wat is professioneel bij ophalen op luchthaven?",["Overal stoppen","Locatieregels volgen en veilig wachten","Op busbaan wachten"],1),
      q(2,"Kiss & Ride","Wat is juist bij Kiss & Ride?",["Lang parkeren","Snel afhandelen volgens regels","Dubbel parkeren"],1),
      q(3,"Meet & greet","Wat is het belangrijkste?",["Onvindbaar zijn","Herkenbaar en klant netjes ontvangen","Direct wegrijden"],1),
      q(4,"Bagage service","Wat is professioneel met koffers?",["Nooit helpen","Helpen waar redelijk en veilig","Koffers laten vallen"],1),
      q(5,"Bestemming","Klant zegt: ‘hotel centrum’. Wat doe je?",["Gokken","Doorvragen en bevestigen","Rijden en zien wel"],1),

      q(6,"Tarieven","Klant vraagt: ‘wat kost dit ongeveer?’. Wat doe je?",["Geen antwoord","Indicatie + uitleg waar het van afhangt","Willekeurig laag bedrag"],1),
      q(7,"Tol/parkeren","Wie beslist over tolroute?",["Altijd jij zonder overleg","Overleg/afstemming met klant waar nodig","Altijd tol nemen"],1),
      q(8,"Wachttijd","Klant wil wachten bij aankomst. Wat doe je?",["Gratis altijd","Afspreken over tijd/kosten","Weglopen"],1),
      q(9,"Bon","Klant wil factuur met bedrijfsnaam. Wat doe je?",["Kan niet","Volgens werkwijze factuur/bon leveren","Alleen mondeling"],1),
      q(10,"Betaling","Klant wil split betaling. Wat doe je?",["Nooit","Als mogelijk netjes uitvoeren, anders alternatief","Negeer"],1),

      q(11,"Klantgedrag","Klant is dronken maar rustig. Wat is juiste uitgangspunt?",["Altijd meenemen","Veiligheid beoordelen en regels volgen","Altijd weigeren"],1),
      q(12,"Openbare orde","Klant wil extra persoon zonder gordel. Wat doe je?",["Toestaan","Weigeren","Langzaam rijden"],1),
      q(13,"Roken","Klant wil roken in taxi. Wat doe je?",["Toestaan","Regels uitleggen en alternatief (stopplek)","Boos worden"],1),
      q(14,"Muziek","Klant wil stilte. Wat doe je?",["Negeer","Pas aan en blijf professioneel","Harder zetten"],1),
      q(15,"Temperatuur","Klant klaagt over warmte/koude. Wat doe je?",["Negeer","Overleg en pas aan als veilig","Hard remmen"],1),

      q(16,"Veilig uitstappen","Waar laat je klant uitstappen in druk gebied?",["Midden rijbaan","Veilige toegestane plek","Op fietspad"],1),
      q(17,"Doorring","Wat is beste manier om dooring te voorkomen?",["Deur openzwaaien","Spiegel/schoudercheck, rustig openen","Klant moet zelf"],1),
      q(18,"Zebrapad","Klant wil uitstappen op zebrapad. Wat doe je?",["Toestaan","Door naar veilige plek","Snel uitstappen"],1),
      q(19,"Busbaan","Klant zegt: ‘pak busbaan’. Wat doe je?",["Doen","Regels volgen; alleen als toegestaan","Altijd busbaan"],1),
      q(20,"Milieuzone","Route door zone waar je niet mag. Wat doe je?",["Toch gaan","Alternatief kiezen en uitleggen","Snel doorrijden"],1),

      q(21,"Rijstijl","Wat is professioneel in druk stadsverkeer?",["Agressief invoegen","Rustig anticiperen","Veel claxonneren"],1),
      q(22,"Afstand","Waarom extra afstand met passagier?",["Voor irritatie","Comfort/veiligheid","Niet nodig"],1),
      q(23,"Remmen","Wat is het best voor comfort?",["Plots hard","Geleidelijk en tijdig","Laat en hard"],1),
      q(24,"Bochten","Wat is beste bochtgedrag?",["Snel","Vloeiend en rustig","Middenlijn"],1),
      q(25,"Inhalen","Wanneer niet inhalen?",["Bij twijfel","Als je haast hebt","Als klant vraagt"],0),

      q(26,"BCT","Waarom BCT correct gebruiken?",["Voor muziek","Voor rit- en werktijdregistratie","Voor korting"],1),
      q(27,"Storingen","BCT storing: wat doe je?",["Negeer","Procedure volgen en correct registreren","Uitzetten en verbergen"],1),
      q(28,"Documenten","Bij controle: wat is belangrijk?",["Thuis is genoeg","Op orde en toonbaar","Alleen rijbewijs"],1),
      q(29,"Taxipas","Taxipas verlopen: wat doe je?",["Toch rijden","Niet rijden; eerst verlengen","Alleen overdag"],1),
      q(30,"Privacy","Klantgegevens: wat is juist?",["Delen","Discreet; alleen noodzakelijk","Online zetten"],1),

      q(31,"Onwel","Klant wordt onwel. Wat doe je?",["Doorrijden","Veilig stoppen en hulp inschakelen","Negeren"],1),
      q(32,"Incident","Wat is eerste stap bij incident?",["Filmen","Veiligheid (PAMAN)","Discussie"],1),
      q(33,"Agressie","Klant agressief: beste aanpak?",["Terugdreigen","De-escaleren en hulp/centrale indien nodig","Harder rijden"],1),
      q(34,"Vermoeidheid","Je wordt slaperig. Wat doe je?",["Doorrijden","Pauze nemen","Meer appen"],1),
      q(35,"Nachtwerk","Waarom extra opletten?",["Meer licht","Minder zicht en vermoeidheid","Altijd rustig"],1),

      q(36,"Klachten","Klant wil klachtprocedure. Wat doe je?",["Negeer","Leg rustig uit hoe dit kan","Boos worden"],1),
      q(37,"Prijsdiscussie","Klant zegt: ‘je reed expres om’. Wat doe je?",["Escaleren","Kalm uitleggen, feiten/route toelichten","Klant uitlachen"],1),
      q(38,"Representatie","Wat hoort bij representatieve taxi?",["Rommel oké","Schoon, veilig, netjes","Alleen logo"],1),
      q(39,"Samenvatting","Wat is beste kernregel?",["Klant altijd gelijk","Veilig en volgens regels, klantgericht","Snel klaar"],1),
      q(40,"Samenvatting","Wat is het einddoel?",["Omzet","Veilig vervoer met goede service","Snelheid"],1),
    ]
  };

  const exams = [
    TAXI_EXAMEN_1,
    TAXI_EXAMEN_2,
    TAXI_EXAMEN_3,
    TAXI_EXAMEN_4,
    TAXI_EXAMEN_5,
    TAXI_EXAMEN_6,
    TAXI_EXAMEN_7,
    TAXI_EXAMEN_8,
    TAXI_EXAMEN_9,
    TAXI_EXAMEN_10,
    TAXI_EXAMEN_11
  ];

  window.EXAM_DATA = { exams };
  window.EXAMS = exams;
  window.exams = exams;
  window.ggExams = exams;

})();

