/* GeefGas — exam-data.js
   Bevat: Examen 1 (40) + Taxi Examen 2 (40)
   Export: window.EXAM_DATA / window.EXAMS / etc.
*/

(function () {

  // =========================
  // EXAMEN 1 (zoals je al had)
  // =========================
  const EXAMEN_1 = {
    id: "examen-1",
    title: "Examen 1 (40 vragen)",
    category: "Auto",
    durationMinutes: 30,
    passMinCorrect: 32, // max 8 fouten
    questions: [
      { id: 1, type: "mcq", category: "Voorrang", prompt: "Je rijdt rechtdoor op een gelijkwaardig kruispunt. Van rechts komt een fietser rechtdoor. Wie heeft voorrang?", image: "assets/examen1/q01.jpg", options: ["Jij, omdat je rechtdoor rijdt", "De fietser, omdat hij van rechts komt", "Niemand, je mag tegelijk rijden"], correctIndex: 1 },
      { id: 2, type: "mcq", category: "Voorrang", prompt: "Je slaat linksaf. Een tegenligger rijdt rechtdoor. Wie heeft voorrang?", image: "assets/examen1/q02.jpg", options: ["Jij, want je bent eerder op de kruising", "De tegenligger die rechtdoor rijdt", "Jij, want linksaf is sneller weg"], correctIndex: 1 },
      { id: 3, type: "mcq", category: "Borden", prompt: "Je nadert een STOP-bord zonder stopstreep. Waar moet je stoppen?", image: "assets/examen1/q03.jpg", options: ["Alleen als er verkeer aankomt", "Op een plek waar je goed zicht hebt op kruisend verkeer", "Pas midden op de kruising"], correctIndex: 1 },
      { id: 4, type: "mcq", category: "Afstand", prompt: "Het wegdek is nat. Wat is juist rijgedrag?", image: "assets/examen1/q04.jpg", options: ["Dezelfde volgafstand houden", "Later remmen", "Meer afstand houden"], correctIndex: 2 },
      { id: 5, type: "mcq", category: "Verkeerslichten", prompt: "Je nadert een kruising met verkeerslichten. Het verkeerslicht wordt geel. Wat is juist?", image: "assets/examen1/q05.jpg", options: ["Altijd doorrijden", "Doorrijden als je niet hard hoeft te remmen", "Stoppen, tenzij stoppen niet meer veilig kan"], correctIndex: 2 },

      { id: 6, type: "mcq", category: "Rijgedrag", prompt: "Je rijdt in druk verkeer. Wat is juist?", image: "assets/examen1/q06.jpg", options: ["Je past je snelheid aan om mee te rijden met het verkeer", "Je probeert zo min mogelijk te remmen", "Je rijdt rustig en anticipeert op andere weggebruikers"], correctIndex: 2 },
      { id: 7, type: "mcq", category: "Voorrang", prompt: "Je nadert een gelijkwaardige kruising. Van rechts nadert verkeer. Wat is juist?", image: "assets/examen1/q07.jpg", options: ["Je rijdt door en mindert vaart", "Je rijdt door omdat er geen borden staan", "Je laat verkeer van rechts voorgaan"], correctIndex: 2 },
      { id: 8, type: "mcq", category: "Verkeerslichten", prompt: "Het verkeerslicht wordt geel. Wat is juist?", image: "assets/examen1/q08.jpg", options: ["Je rijdt door", "Je rijdt door als je niet hard hoeft te remmen", "Je stopt, tenzij stoppen niet meer veilig kan"], correctIndex: 2 },
      { id: 9, type: "mcq", category: "Afstand", prompt: "Je rijdt op een nat wegdek. Wat is juist?", image: "assets/examen1/q09.jpg", options: ["Je houdt dezelfde volgafstand", "Je remt later dan normaal", "Je houdt meer afstand"], correctIndex: 2 },
      { id: 10, type: "mcq", category: "Inhalen", prompt: "Je wilt inhalen, maar je hebt beperkt zicht. Wat is juist?", image: "assets/examen1/q10.jpg", options: ["Je haalt in als je snelheid verhoogt", "Je begint met inhalen", "Je wacht tot je goed zicht hebt"], correctIndex: 2 },

      { id: 11, type: "mcq", category: "Rijgedrag", prompt: "Je rijdt op een smalle weg en er komt verkeer tegemoet. Wat is juist?", image: "assets/examen1/q11.jpg", options: ["Je rijdt door om doorstroming te houden", "Je blijft versnellen zodat je erlangs bent", "Je mindert snelheid en houdt rekening met tegemoetkomend verkeer"], correctIndex: 2 },
      { id: 12, type: "mcq", category: "Bijzondere manoeuvres", prompt: "Je wilt wegrijden vanaf de kant van de weg. Wat is juist?", image: "assets/examen1/q12.jpg", options: ["Je rijdt direct weg om snel mee te komen", "Je geeft richting aan en laat het andere verkeer voorgaan", "Je toetert en rijdt weg"], correctIndex: 1 },
      { id: 13, type: "mcq", category: "Spoor", prompt: "Je nadert een spoorwegovergang zonder slagbomen. Wat is juist?", image: "assets/examen1/q13.jpg", options: ["Je rijdt door als je geen trein ziet", "Je steekt over als je zeker weet dat het veilig is", "Je stopt altijd midden op de overgang"], correctIndex: 1 },
      { id: 14, type: "mcq", category: "Parkeren", prompt: "Je wilt parkeren langs de weg. Wat is juist?", image: "assets/examen1/q14.jpg", options: ["Je zet de auto half op de stoep", "Je parkeert waar het uitkomt als het rustig is", "Je parkeert alleen waar het mag en veilig is"], correctIndex: 2 },
      { id: 15, type: "mcq", category: "Weer", prompt: "Je rijdt in de regen op een drukke weg. Wat is juist?", image: "assets/examen1/q15.jpg", options: ["Dezelfde volgafstand houden", "Alleen langzamer rijden", "Meer afstand houden en vooruitkijken"], correctIndex: 2 },
      { id: 16, type: "mcq", category: "Afstand", prompt: "Je rijdt bij slecht zicht. Wat is juist?", image: "assets/examen1/q16.jpg", options: ["Dichter achterop rijden", "Alleen je snelheid verlagen", "Meer afstand houden"], correctIndex: 2 },
      { id: 17, type: "mcq", category: "Verkeerslichten", prompt: "Het verkeerslicht is rood. Wat is juist?", image: "assets/examen1/q17.jpg", options: ["Doorrijden als het rustig is", "Stoppen vóór de stopstreep", "Alleen stoppen als er verkeer is"], correctIndex: 1 },
      { id: 18, type: "mcq", category: "Fietsers", prompt: "Je rijdt achter een fietser op een smalle weg. Wat is juist?", image: "assets/examen1/q18.jpg", options: ["Kort achter de fietser blijven rijden", "De fietser snel passeren zonder ruimte", "Afstand houden en wachten op een veilige plek"], correctIndex: 2 },
      { id: 19, type: "mcq", category: "Voetgangers", prompt: "Bij een zebrapad staat een voetganger klaar om over te steken. Wat is juist?", image: "assets/examen1/q19.jpg", options: ["Doorrijden als je voorrang hebt", "De voetganger voor laten gaan", "Toeteren zodat hij wacht"], correctIndex: 1 },
      { id: 20, type: "mcq", category: "Rijgedrag", prompt: "Je rijdt in stadsverkeer. Wat is juist?", image: "assets/examen1/q20.jpg", options: ["Zo snel mogelijk doorrijden", "Alleen op borden letten", "Rustig rijden en anticiperen"], correctIndex: 2 },

      { id: 21, type: "mcq", category: "Mist", prompt: "Je rijdt buiten de bebouwde kom in mist. Wat is juist?", image: "assets/examen1/q21.jpg", options: ["Maximumsnelheid blijven rijden", "Groot licht gebruiken", "Snelheid aanpassen en extra afstand houden"], correctIndex: 2 },
      { id: 22, type: "mcq", category: "Voorrang", prompt: "Je nadert een kruising met haaientanden voor jou. Wat is juist?", image: "assets/examen1/q22.jpg", options: ["Je rijdt door", "Je mindert vaart", "Je verleent voorrang aan kruisend verkeer"], correctIndex: 2 },
      { id: 23, type: "mcq", category: "Bebouwde kom", prompt: "Je rijdt binnen de bebouwde kom langs een bushalte. Een bus geeft richting aan om weg te rijden. Wat is juist?", image: "assets/examen1/q23.jpg", options: ["Je rijdt door", "Je mindert alleen vaart", "Je geeft de bus de gelegenheid om weg te rijden"], correctIndex: 2 },
      { id: 24, type: "mcq", category: "Gladheid", prompt: "Je rijdt op een glad wegdek. Wat is juist?", image: "assets/examen1/q24.jpg", options: ["Later remmen", "Minder afstand houden", "Rustig rijden en meer afstand houden"], correctIndex: 2 },
      { id: 25, type: "mcq", category: "Inhalen", prompt: "Wat is juist bij inhalen?", image: "assets/examen1/q25.jpg", options: ["Inhalen bij twijfel", "Inhalen omdat je sneller bent", "Alleen inhalen met voldoende zicht en ruimte"], correctIndex: 2 },
      { id: 26, type: "mcq", category: "File", prompt: "Je nadert een file. Wat is juist?", image: "assets/examen1/q26.jpg", options: ["Pas laat remmen", "Snel aansluiten", "Tijdig snelheid verminderen en afstand houden"], correctIndex: 2 },
      { id: 27, type: "mcq", category: "Woonwijk", prompt: "Je rijdt in een woonwijk. Wat is juist?", image: "assets/examen1/q27.jpg", options: ["Zo veel mogelijk doorrijden", "Alleen op borden letten", "Voorzichtig rijden en anticiperen op onverwacht gedrag"], correctIndex: 2 },
      { id: 28, type: "mcq", category: "Kruising", prompt: "Je nadert een kruising zonder verkeerslichten en met beperkt zicht. Wat is juist?", image: "assets/examen1/q28.jpg", options: ["Doorrijden om doorstroming te houden", "Toeteren en doorrijden", "Voorzichtig naderen en goed kijken"], correctIndex: 2 },
      { id: 29, type: "mcq", category: "Portieren", prompt: "Je rijdt langs geparkeerde auto’s. Wat is juist?", image: "assets/examen1/q29.jpg", options: ["Zo dicht mogelijk langs de auto’s rijden", "Snel passeren", "Afstand houden vanwege openslaande portieren"], correctIndex: 2 },
      { id: 30, type: "mcq", category: "Snelheid", prompt: "Wat is juist over je snelheid aanpassen?", image: "assets/examen1/q30.jpg", options: ["Alleen aanpassen bij regen", "Altijd dezelfde snelheid rijden", "Snelheid aanpassen aan omstandigheden"], correctIndex: 2 },

      { id: 31, type: "mcq", category: "Verlichting", prompt: "Je rijdt in het donker buiten de bebouwde kom. Wat is juist?", image: "assets/examen1/q31.jpg", options: ["Altijd groot licht gebruiken", "Sneller rijden omdat het rustig is", "Verlichting en snelheid aanpassen aan de situatie"], correctIndex: 2 },
      { id: 32, type: "mcq", category: "Voorrang", prompt: "Je nadert een gelijkwaardige kruising. Wat is het belangrijkste?", image: "assets/examen1/q32.jpg", options: ["Harder rijden zodat je er eerder bent", "Zorgen dat je gezien wordt", "Voorrang verlenen aan verkeer van rechts"], correctIndex: 2 },
      { id: 33, type: "mcq", category: "Verkeerslichten", prompt: "Je ziet rood licht. Wat is juist?", image: "assets/examen1/q33.jpg", options: ["Stoppen vóór de stopstreep", "Langzaam doorrijden", "Alleen stoppen als er verkeer is"], correctIndex: 0 },
      { id: 34, type: "mcq", category: "Bochten", prompt: "Je nadert een bocht met beperkt zicht. Wat is juist?", image: "assets/examen1/q34.jpg", options: ["Snelheid verhogen om erdoor te zijn", "Rijden op de middenstreep", "Snelheid aanpassen en rechts houden"], correctIndex: 2 },
      { id: 35, type: "mcq", category: "Inhalen", prompt: "Je twijfelt of inhalen veilig is. Wat doe je?", image: "assets/examen1/q35.jpg", options: ["Toch inhalen", "Inhalen met groot licht", "Niet inhalen en wachten"], correctIndex: 2 },
      { id: 36, type: "mcq", category: "Afstand", prompt: "Je rijdt met hogere snelheid. Wat is juist?", image: "assets/examen1/q36.jpg", options: ["Afstand maakt niet uit", "Minder afstand houden", "Meer afstand houden"], correctIndex: 2 },
      { id: 37, type: "mcq", category: "Kruispunt", prompt: "Je nadert een kruispunt. Wat is juist rijgedrag?", image: "assets/examen1/q37.jpg", options: ["Versnellen", "Alleen naar links kijken", "Vooruitkijken en snelheid aanpassen"], correctIndex: 2 },
      { id: 38, type: "mcq", category: "Fietsers", prompt: "Je wilt afslaan en er rijdt een fietser naast je. Wat is juist?", image: "assets/examen1/q38.jpg", options: ["Snel afslaan vóór de fietser", "De fietser afsnijden", "De fietser voor laten gaan en pas afslaan als het veilig is"], correctIndex: 2 },
      { id: 39, type: "mcq", category: "Rijgedrag", prompt: "Wat is juist in wisselende verkeerssituaties?", image: "assets/examen1/q39.jpg", options: ["Rijgedrag blijft altijd hetzelfde", "Alleen aanpassen bij slecht weer", "Rijgedrag aanpassen aan de situatie"], correctIndex: 2 },
      { id: 40, type: "mcq", category: "Veiligheid", prompt: "Wat is het belangrijkste doel van defensief rijden?", image: "assets/examen1/q40.jpg", options: ["Sneller aankomen", "Anderen laten schrikken", "Risico’s verminderen en veilig rijden"], correctIndex: 2 }
    ]
  };

  // =========================
  // TAXI EXAMEN 2 (NIEUW, 40)
  // =========================
  const EXAMEN_2 = {
    id: "examen-2",
    title: "Taxi Examen 2 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [
      // 1–10: taxipas / documenten / controle
      { id: 1, type: "mcq", category: "Taxipas", prompt: "Welke eis geldt om als taxichauffeur te mogen rijden?", image: "assets/examen2/q01.jpg", options: ["Alleen een rijbewijs B", "Een geldige taxipas", "Alleen een KvK-inschrijving"], correctIndex: 1 },
      { id: 2, type: "mcq", category: "Controle", prompt: "Bij een controle vraagt een toezichthouder om je taxipas. Wat is juist?", image: "assets/examen2/q02.jpg", options: ["Je hoeft die niet te tonen", "Je toont je taxipas op verzoek", "Je toont alleen je rijbewijs"], correctIndex: 1 },
      { id: 3, type: "mcq", category: "Vergunning", prompt: "Wanneer mag een voertuig als taxi ritten uitvoeren?", image: "assets/examen2/q03.jpg", options: ["Als de bestuurder de weg kent", "Als het bedrijf beschikt over de juiste vergunning(en) en het voertuig is toegestaan voor taxivervoer", "Als er een dakbord op staat"], correctIndex: 1 },
      { id: 4, type: "mcq", category: "KIWA", prompt: "Waarvoor is een KIWA-keuring (taxi) in de praktijk vooral belangrijk?", image: "assets/examen2/q04.jpg", options: ["Om sneller te mogen rijden", "Om te voldoen aan de gestelde eisen/inspectie voor taxivervoer", "Om de brandstofkosten te verlagen"], correctIndex: 1 },
      { id: 5, type: "mcq", category: "BCT", prompt: "Wat is het doel van de BCT in het taxivervoer?", image: "assets/examen2/q05.jpg", options: ["Alleen navigatie tonen", "Ritten en werktijden registreren volgens de regels", "Het voertuig op afstand starten"], correctIndex: 1 },
      { id: 6, type: "mcq", category: "BCT", prompt: "Wat doe je als de BCT (tijdelijk) niet functioneert vóór je dienst?", image: "assets/examen2/q06.jpg", options: ["Gewoon gaan rijden en later invullen", "Handelen volgens de geldende procedure/regels (bijv. storingsprocedure) en alleen rijden als dit is toegestaan", "De BCT uitzetten en doorrijden"], correctIndex: 1 },
      { id: 7, type: "mcq", category: "Documenten", prompt: "Welke combinatie moet je in ieder geval in orde hebben om professioneel te kunnen werken?", image: "assets/examen2/q07.jpg", options: ["Alleen je pinapparaat", "Geldige documenten/registraties die voor taxivervoer gelden", "Alleen een bedrijfslogo"], correctIndex: 1 },
      { id: 8, type: "mcq", category: "Gedrag", prompt: "Een passagier vraagt om zonder gordel te rijden. Wat is juist?", image: "assets/examen2/q08.jpg", options: ["Je staat het toe als het korte afstand is", "Je legt uit dat gordel dragen verplicht is en rijdt pas als dit veilig kan", "Je rijdt door zolang je rustig rijdt"], correctIndex: 1 },
      { id: 9, type: "mcq", category: "Professionaliteit", prompt: "Wat hoort bij professioneel taxivervoer?", image: "assets/examen2/q09.jpg", options: ["Zo snel mogelijk rijden om tijd te winnen", "Veilig, rustig en klantgericht rijden", "Altijd de kortste route kiezen zonder overleg"], correctIndex: 1 },
      { id: 10, type: "mcq", category: "Handhaving", prompt: "Wat is het verstandigst als je twijfelt of iets volgens de taxiregels mag?", image: "assets/examen2/q10.jpg", options: ["Toch doen als er geen controle is", "De regels/procedure volgen of navraag doen voordat je het doet", "De klant laten beslissen"], correctIndex: 1 },

      // 11–20: tarieven / ritadministratie / klant / klachten
      { id: 11, type: "mcq", category: "Tarieven", prompt: "Wanneer moet de passagier duidelijkheid kunnen krijgen over de ritprijs?", image: "assets/examen2/q11.jpg", options: ["Pas aan het einde van de rit", "Vooraf of tijdens de rit op een duidelijke en eerlijke manier", "Alleen als de klant erom vraagt na afloop"], correctIndex: 1 },
      { id: 12, type: "mcq", category: "Bon", prompt: "Een passagier vraagt om een bon/factuur. Wat is juist?", image: "assets/examen2/q12.jpg", options: ["Dat hoeft nooit", "Je verstrekt dit volgens de geldende werkwijze/afspraken", "Alleen bij contante betaling"], correctIndex: 1 },
      { id: 13, type: "mcq", category: "Route", prompt: "De klant wil een andere route dan jouw voorkeursroute. Wat is het meest professioneel?", image: "assets/examen2/q13.jpg", options: ["Je negeert het en rijdt jouw route", "Je bespreekt het kort en volgt de wens van de klant als dit veilig/haalbaar is", "Je stopt de rit direct"], correctIndex: 1 },
      { id: 14, type: "mcq", category: "Klant", prompt: "Een klant is ontevreden en wordt boos. Wat is het beste handelen?", image: "assets/examen2/q14.jpg", options: ["Boos terugdoen", "Rustig blijven, luisteren en professioneel blijven", "De klant direct uitzetten"], correctIndex: 1 },
      { id: 15, type: "mcq", category: "Bagage", prompt: "Een klant heeft veel bagage. Wat is juist?", image: "assets/examen2/q15.jpg", options: ["Bagage is altijd jouw probleem", "Je helpt waar redelijk mogelijk en zorgt dat bagage veilig is vastgezet/veilig geplaatst", "Bagage mag los in het gangpad liggen"], correctIndex: 1 },
      { id: 16, type: "mcq", category: "Veiligheid", prompt: "Wat is juist als het gaat om je rijstijl met passagiers?", image: "assets/examen2/q16.jpg", options: ["Hard optrekken is professioneel", "Rustig rijden, anticiperen en meer afstand houden", "Altijd precies op de bumper rijden zodat niemand ertussen kan"], correctIndex: 1 },
      { id: 17, type: "mcq", category: "Betaalmiddelen", prompt: "De klant wil pinnen maar het apparaat werkt niet. Wat is het beste?", image: "assets/examen2/q17.jpg", options: ["Direct contant eisen en anders weggaan", "Rustig een oplossing zoeken volgens afspraak/bedrijf (bijv. andere betaalmethode) en professioneel blijven", "De klant laten gaan zonder betaling"], correctIndex: 1 },
      { id: 18, type: "mcq", category: "Ritadministratie", prompt: "Waarom is een correcte ritregistratie belangrijk?", image: "assets/examen2/q18.jpg", options: ["Alleen voor marketing", "Voor controle/handhaving en correcte administratie", "Alleen voor de klant"], correctIndex: 1 },
      { id: 19, type: "mcq", category: "Gedrag", prompt: "Wat is juist als je een fout maakt onderweg (verkeerd afslaan)?", image: "assets/examen2/q19.jpg", options: ["Doen alsof het expres was", "Open en rustig aangeven en de beste veilige oplossing kiezen", "Snel keren waar het niet mag"], correctIndex: 1 },
      { id: 20, type: "mcq", category: "Klant", prompt: "Een klant wil dat je telefoneert tijdens het rijden. Wat is professioneel?", image: "assets/examen2/q20.jpg", options: ["Bellen tijdens het rijden is prima", "Je vermijdt afleiding en houdt aandacht op het verkeer", "Je appt snel terug terwijl je rijdt"], correctIndex: 1 },

      // 21–30: arbeid/rust / planning / veiligheid
      { id: 21, type: "mcq", category: "Rusttijden", prompt: "Wat is het uitgangspunt bij rij- en rusttijden voor professioneel vervoer?", image: "assets/examen2/q21.jpg", options: ["Je rijdt door zolang je wakker blijft", "Je houdt je aan de geldende rij- en rusttijden/afspraken", "Je rust pas als je dienst klaar is"], correctIndex: 1 },
      { id: 22, type: "mcq", category: "Vermoeidheid", prompt: "Je merkt dat je vermoeid wordt tijdens je dienst. Wat is het beste?", image: "assets/examen2/q22.jpg", options: ["Doorrijden tot je laatste rit", "Een pauze nemen en pas verder rijden als het veilig is", "Meer koffie drinken en door"], correctIndex: 1 },
      { id: 23, type: "mcq", category: "Planning", prompt: "Je hebt vertraging door druk verkeer. Wat is professioneel richting de klant?", image: "assets/examen2/q23.jpg", options: ["Niets zeggen", "Kort informeren en rustig/veilig blijven rijden", "Extra hard rijden om het in te halen"], correctIndex: 1 },
      { id: 24, type: "mcq", category: "Veiligheid", prompt: "Wat is juist bij stoppen/afzetten op een drukke weg?", image: "assets/examen2/q24.jpg", options: ["Altijd zo dicht mogelijk bij de bestemming, ook al is het onveilig", "Een veilige plek kiezen waar uitstappen veilig kan", "Midden op de rijbaan stoppen"], correctIndex: 1 },
      { id: 25, type: "mcq", category: "Deuren", prompt: "Wat is het beste om ‘dooring’ te voorkomen bij uitstappen naast fietsers?", image: "assets/examen2/q25.jpg", options: ["De deur snel openzwaaien", "Controleer spiegels/kijk over je schouder en laat passagier veilig uitstappen", "De passagier moet het zelf maar uitzoeken"], correctIndex: 1 },
      { id: 26, type: "mcq", category: "Conflicten", prompt: "Een klant wil dat je een verkeersregel overtreedt om sneller te zijn. Wat is juist?", image: "assets/examen2/q26.jpg", options: ["Je doet het als de klant betaalt", "Je legt uit dat je je aan de verkeersregels houdt", "Je overtreedt het als het rustig is"], correctIndex: 1 },
      { id: 27, type: "mcq", category: "Voertuig", prompt: "Wat is juist vóór je dienst begint?", image: "assets/examen2/q27.jpg", options: ["Niets controleren, dat kost tijd", "Basiscontrole uitvoeren (banden, verlichting, schade) zodat je veilig kunt rijden", "Alleen wassen is genoeg"], correctIndex: 1 },
      { id: 28, type: "mcq", category: "Nood", prompt: "Een passagier wordt onwel in de auto. Wat is het beste?", image: "assets/examen2/q28.jpg", options: ["Doorrijden naar eindbestemming", "Zo snel mogelijk veilig stoppen en passende hulp inschakelen", "De klant vragen om niet te zeuren"], correctIndex: 1 },
      { id: 29, type: "mcq", category: "Privacy", prompt: "Wat is juist over klantgegevens/gesprekken?", image: "assets/examen2/q29.jpg", options: ["Alles doorvertellen aan collega’s", "Discreet omgaan met informatie en professioneel blijven", "Foto’s maken van klanten is normaal"], correctIndex: 1 },
      { id: 30, type: "mcq", category: "Rijgedrag", prompt: "Wat is het meest passende rijgedrag bij passagiers in de auto?", image: "assets/examen2/q30.jpg", options: ["Sportief rijden zodat je sneller bent", "Rustig, voorspelbaar rijden en anticiperen", "Hard remmen om ruimte te maken"], correctIndex: 1 },

      // 31–40: handhaving / regels / professionaliteit
      { id: 31, type: "mcq", category: "Handhaving", prompt: "Wat kan een reden zijn voor een boete bij taxivervoer?", image: "assets/examen2/q31.jpg", options: ["Netjes rijden", "Niet voldoen aan geldende taxivoorschriften/registratie", "Gordel dragen"], correctIndex: 1 },
      { id: 32, type: "mcq", category: "BCT", prompt: "Wanneer hoort je rit/werkregistratie op orde te zijn?", image: "assets/examen2/q32.jpg", options: ["Alleen als je gecontroleerd wordt", "Altijd, gedurende je werkzaamheden", "Alleen bij nacht"], correctIndex: 1 },
      { id: 33, type: "mcq", category: "Gedrag", prompt: "Wat is juist als je klant vraagt om een ‘snelle’ rit door rood/oranje?", image: "assets/examen2/q33.jpg", options: ["Doen als het veilig lijkt", "Niet doen; je houdt je aan de regels", "Alleen als je haast hebt"], correctIndex: 1 },
      { id: 34, type: "mcq", category: "Taxi-werk", prompt: "Wat is een kernpunt van taxivervoer als dienstverlener?", image: "assets/examen2/q34.jpg", options: ["Alleen snelheid", "Veiligheid en klantgerichtheid", "Altijd discussiëren over de route"], correctIndex: 1 },
      { id: 35, type: "mcq", category: "Voertuig", prompt: "Je voertuig heeft een mankement dat invloed kan hebben op veiligheid. Wat is juist?", image: "assets/examen2/q35.jpg", options: ["Doorrijden tot het echt kapot gaat", "Niet rijden totdat het is opgelost/veilig verklaard", "Alleen langzamer rijden"], correctIndex: 1 },
      { id: 36, type: "mcq", category: "Alcohol/drugs", prompt: "Wat is juist over rijden onder invloed tijdens taxiwerk?", image: "assets/examen2/q36.jpg", options: ["Een beetje mag", "Nooit; je rijdt nuchter en fit", "Alleen ‘s avonds is het oké"], correctIndex: 1 },
      { id: 37, type: "mcq", category: "Communicatie", prompt: "Hoe ga je het best om met een buitenlandse klant die je niet goed begrijpt?", image: "assets/examen2/q37.jpg", options: ["Zeggen dat het jouw probleem niet is", "Rustig, duidelijk communiceren en de bestemming bevestigen (bijv. laten tonen)", "Gewoon wegrijden en zien waar je uitkomt"], correctIndex: 1 },
      { id: 38, type: "mcq", category: "Routes", prompt: "Wat is professioneel bij routekeuze?", image: "assets/examen2/q38.jpg", options: ["Altijd de langste route", "Een logische route kiezen en afstemmen bij twijfel", "Altijd dezelfde route ongeacht situatie"], correctIndex: 1 },
      { id: 39, type: "mcq", category: "Klant", prompt: "Een klant wil meer personen meenemen dan veilige zitplaatsen. Wat is juist?", image: "assets/examen2/q39.jpg", options: ["Toestaan als het maar kort is", "Niet toestaan; veiligheid en regels gaan voor", "Alleen toestaan bij lage snelheid"], correctIndex: 1 },
      { id: 40, type: "mcq", category: "Samenvatting", prompt: "Wat is de beste omschrijving van professioneel taxi-rijgedrag?", image: "assets/examen2/q40.jpg", options: ["Snel en assertief rijden", "Veilig, voorspelbaar, klantgericht en volgens de regels werken", "Zoveel mogelijk ritten in korte tijd"], correctIndex: 1 }
    ]
  };

  const data = { exams: [EXAMEN_1, EXAMEN_2] };

  window.EXAM_DATA = data;
  window.EXAMS = data.exams;
  window.exams = data.exams;
  window.ggExams = data.exams;

})();
