/* =========================================================
   GeefGas — exam-data.js
   Taxi Examens 1 t/m 3 (elk 40 vragen)
   - Vaste vragen (geen shuffle)
   - Alleen categorie: Taxi
   - Geen afbeeldingen (voor nu)
   Export: window.EXAM_DATA / window.EXAMS / window.exams / window.ggExams
   ========================================================= */

(function () {

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

  // =========================
  // TAXI EXAMEN 1
  // =========================
  const TAXI_EXAMEN_1 = {
    id: "taxi-examen-1",
    title: "Taxi Examen 1 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [
      q(1, "Taxipas", "Welke eis geldt om als taxichauffeur te mogen rijden?", ["Alleen rijbewijs B", "Een geldige taxipas", "Alleen inschrijving bij KvK"], 1),
      q(2, "ILT-controle", "Bij een controle vraagt ILT om je taxipas. Wat is juist?", ["Je toont je taxipas op verzoek", "Je hoeft die niet te tonen", "Je toont alleen je rijbewijs"], 0),
      q(3, "Vergunningen", "Wanneer mag je taxivervoer uitvoeren?", ["Als er een dakbord op staat", "Als je de route goed kent", "Als de vereiste vergunning(en) en voorwaarden voor taxiwerk in orde zijn"], 2),
      q(4, "Documenten", "Wat is het beste handelen als je twijfelt of je een verplicht document bij je hebt?", ["Toch rijden, niemand merkt het", "Eerst controleren/regelen vóór je gaat rijden", "Alleen ’s nachts rijden"], 1),
      q(5, "ILT-controle", "Wat is professioneel gedrag bij een controle?", ["Rustig meewerken en gevraagde documenten tonen", "Discussie zoeken en weigeren", "Snel wegrijden"], 0),
      q(6, "Handhaving", "Wat kan een gevolg zijn van rijden zonder geldige taxipas?", ["Geen gevolgen als je netjes rijdt", "Boete/handhaving en mogelijk stillegging", "Alleen een waarschuwing zonder registratie"], 1),
      q(7, "Vergunningen", "Je rijdt voor een bedrijf. Wie is verantwoordelijk dat de bedrijfs-/voertuigvoorwaarden voor taxiwerk kloppen?", ["Alleen de klant", "Het bedrijf/ondernemer; jij controleert basis voordat je gaat rijden", "Alleen de garage"], 1),
      q(8, "Taxipas", "Je taxipas is verlopen. Wat is juist?", ["Je mag rijden als je rustig rijdt", "Je mag niet rijden; eerst verlengen", "Je mag alleen korte ritten rijden"], 1),
      q(9, "Professionaliteit", "Wat hoort bij professioneel taxiwerk?", ["Veilig, klantgericht en volgens regels werken", "Altijd de langste route nemen", "Altijd zo snel mogelijk rijden"], 0),
      q(10, "Standplaats", "Je staat op een standplaats. Wat is juist?", ["Je volgt de wachtrij en lokale regels", "Je dringt voor omdat je haast hebt", "Je zet je auto dwars zodat jij als eerste weg kunt"], 0),

      q(11, "Opstapmarkt", "Wat betekent ‘opstapmarkt’ (straattaxi) in de praktijk?", ["Ritten via vaste contracten", "Klanten die direct instappen op straat/standplaats", "Alleen zorgvervoer"], 1),
      q(12, "Veiligheid", "Een klant wil instappen op een onveilige plek (bijv. midden op de weg). Wat doe je?", ["Toch stoppen want klant bepaalt", "Doorrijden naar een veilige, toegestane plek", "Hard remmen en midden op de rijbaan stoppen"], 1),
      q(13, "Privacy", "Wat is juist over klantgesprekken en klantgegevens?", ["Je deelt het met collega’s, dat is normaal", "Je gaat discreet om met informatie", "Je zet alles op social media als reclame"], 1),
      q(14, "Klant & gedrag", "Een klant wordt boos. Wat is het beste handelen?", ["Boos terugdoen", "Rustig blijven, luisteren en professioneel blijven", "Klant direct uitzetten zonder veilig te stoppen"], 1),
      q(15, "Rit weigeren", "Wanneer mag je een rit weigeren?", ["Altijd zonder reden", "Bij gevaar of onacceptabel gedrag", "Bij korte afstand"], 1),
      q(16, "Tarieven", "Wanneer moet de klant duidelijkheid kunnen krijgen over de ritprijs?", ["Pas aan het einde van de rit", "Vooraf of tijdens de rit duidelijk en eerlijk", "Alleen na afloop als er discussie is"], 1),
      q(17, "Tarieven", "De klant vraagt om ‘zonder meter/zwart’. Wat is juist?", ["Je gaat akkoord", "Je weigert en werkt volgens de regels", "Alleen doen bij korte ritten"], 1),
      q(18, "Bon", "Een klant vraagt om een bon/factuur. Wat is juist?", ["Dat hoeft nooit", "Je verstrekt dit volgens de geldende werkwijze/afspraken", "Alleen bij contante betaling"], 1),
      q(19, "Betaling", "Een pintransactie mislukt. Wat doe je eerst?", ["Nogmaals proberen of alternatief afspreken", "Klant direct uitzetten", "Doorrijden zonder af te rekenen"], 0),
      q(20, "Betaling", "De klant wil pinnen maar het apparaat werkt niet. Wat is het beste?", ["Direct contant eisen en anders weggaan", "Rustig een oplossing zoeken volgens afspraken/bedrijf", "Klant laten gaan zonder betaling"], 1),

      q(21, "Route", "De klant wil een andere route dan jij verwacht. Wat is het meest professioneel?", ["Negeer en rijd jouw route", "Kort bespreken en volgen als het veilig/haalbaar is", "Rit direct stoppen"], 1),
      q(22, "Route", "Je slaat verkeerd af. Wat is het beste?", ["Illegaal keren waar het niet mag", "Rustig aangeven en veilig corrigeren via een toegestane route", "Doen alsof het expres was"], 1),
      q(23, "Veiligheid", "Waar laat je een klant het beste uitstappen?", ["Midden op de rijbaan", "Op een veilige plek waar uitstappen is toegestaan", "Op een kruispunt zodat je snel weg bent"], 1),
      q(24, "Veiligheid", "Wat is het beste om ‘dooring’ te voorkomen bij uitstappen naast fietsers?", ["Deur snel openzwaaien", "Spiegels checken/kijk over schouder en veilig uitstappen", "Passagier zoekt het uit"], 1),
      q(25, "Gordel", "Een passagier wil zonder gordel rijden. Wat is juist?", ["Toestaan bij korte afstand", "Uitleggen en pas rijden als het veilig/volgens regels kan", "Negeer het; jij draagt gordel wel"], 1),
      q(26, "Zitplaatsen", "Een klant wil meer personen meenemen dan veilige zitplaatsen. Wat is juist?", ["Toestaan als het maar kort is", "Niet toestaan; veiligheid en regels gaan voor", "Alleen toestaan bij lage snelheid"], 1),
      q(27, "Bagage", "Een klant heeft veel bagage. Wat is juist?", ["Bagage los in het gangpad is prima", "Je helpt waar redelijk mogelijk en zorgt dat bagage veilig staat", "Je weigert bagage altijd"], 1),
      q(28, "Nood", "Een passagier wordt onwel in de auto. Wat is het beste?", ["Doorrijden naar eindbestemming", "Zo snel mogelijk veilig stoppen en passende hulp inschakelen", "De klant zeggen dat hij niet moet zeuren"], 1),
      q(29, "Communicatie", "Je begrijpt een buitenlandse klant niet goed. Wat is het beste?", ["Zeggen dat het jouw probleem niet is", "Rustig communiceren en bestemming laten bevestigen (bv. tonen)", "Gewoon wegrijden en zien waar je uitkomt"], 1),
      q(30, "Afleiding", "Wat is professioneel rond telefoneren/appen tijdens het rijden?", ["Appen tijdens het rijden", "Afleiding vermijden en aandacht op verkeer", "Bellen zonder handsfree is prima"], 1),

      q(31, "Voertuig", "Wat is verstandig vóór je dienst begint?", ["Basiscontrole (banden/verlichting/schade)", "Niets controleren, dat kost tijd", "Alleen de radio testen"], 0),
      q(32, "Alcohol/drugs", "Wat is juist over rijden onder invloed tijdens taxiwerk?", ["Een beetje mag", "Nooit; je rijdt nuchter en fit", "Alleen ’s avonds is het oké"], 1),
      q(33, "Conflicten", "Een klant wil dat jij een verkeersregel overtreedt om sneller te zijn. Wat is juist?", ["Je doet het voor extra geld", "Je legt uit dat je je aan de verkeersregels houdt", "Je doet het als het rustig is"], 1),
      q(34, "Standplaats", "Waarom zijn standplaatsregels belangrijk?", ["Voor eerlijke volgorde en veiligheid", "Zodat je sneller kunt rijden", "Alleen voor reclame"], 0),
      q(35, "Professionaliteit", "Wat is de beste omschrijving van professioneel taxi-rijgedrag?", ["Snel en assertief rijden", "Veilig, voorspelbaar, klantgericht en volgens de regels werken", "Zoveel mogelijk ritten in korte tijd"], 1),
      q(36, "Tarieven", "Er zijn extra kosten (tol/parkeren). Wat is professioneel?", ["Vooraf benoemen en afstemmen", "Niet noemen en achteraf rekenen", "Alleen noemen als klant klaagt"], 0),
      q(37, "Klant", "Een klant vraagt om harde muziek terwijl jij daardoor afgeleid raakt. Wat doe je professioneel?", ["Meteen keihard zetten", "Rustig aangeven wat kan en wat niet, veiligheid voorop", "Stoppen midden op de snelweg"], 1),
      q(38, "Privacy", "Mag je klanten filmen voor ‘bewijs’ zonder reden?", ["Ja, altijd", "Nee, alleen als er een duidelijke noodzaak is en volgens regels", "Ja, als je het niet vertelt"], 1),
      q(39, "Veilig stoppen", "Je moet onderweg stoppen voor een telefoontje. Wat is het beste?", ["Stoppen op een veilige plek waar het is toegestaan", "Stoppen op een kruispunt", "Stoppen midden op de rijbaan"], 0),
      q(40, "Samenvatting", "Wat is de kern van taxiwerk als dienstverlener?", ["Alleen snelheid", "Veiligheid en klantgerichtheid", "Altijd discussiëren over de route"], 1),
    ]
  };

  // =========================
  // TAXI EXAMEN 2
  // =========================
  const TAXI_EXAMEN_2 = {
    id: "taxi-examen-2",
    title: "Taxi Examen 2 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [
      q(1, "BCT", "Wat is het doel van de BCT in het taxivervoer?", ["Alleen navigatie tonen", "Ritten en werktijden registreren volgens de regels", "De auto op afstand starten"], 1),
      q(2, "BCT", "De BCT werkt niet vóór je dienst. Wat is het beste?", ["Gewoon rijden en later invullen", "Storingsprocedure volgen en alleen rijden als dat toegestaan is", "BCT uitzetten en doorrijden"], 1),
      q(3, "BCT", "De BCT valt uit tijdens je dienst. Wat is het beste?", ["Negeren en doorrijden", "Handelen volgens storingsprocedure en correct registreren", "De klant laten registreren"], 1),
      q(4, "Ritadministratie", "Waarom is correcte ritregistratie belangrijk?", ["Alleen voor marketing", "Voor controle/handhaving en correcte administratie", "Alleen voor de klant"], 1),
      q(5, "Ritadministratie", "Wanneer hoort je registratie op orde te zijn?", ["Alleen bij controle", "Altijd tijdens taxiwerk", "Alleen ’s nachts"], 1),
      q(6, "Handhaving", "Wat is een reëel risico als je registratie structureel niet klopt?", ["Geen, want klant betaalt toch", "Boete/handhaving en problemen bij controle", "Alleen een compliment"], 1),
      q(7, "Tarieven", "Wanneer geef je het liefst prijsinformatie om misverstanden te voorkomen?", ["Pas na aankomst", "Voor vertrek of direct bij start", "Nooit; dat maakt het spannend"], 1),
      q(8, "Tarieven", "Wat is het meest professioneel bij twijfel over tariefafspraken?", ["Zelf een bedrag kiezen", "Vooraf verifiëren en duidelijk communiceren", "Achteraf pas bespreken"], 1),
      q(9, "Bon", "De klant wil een bon. Wat is juist?", ["Je hoeft nooit een bon te geven", "Je verstrekt een bon/factuur volgens afspraken/werkwijze", "Alleen bij contant"], 1),
      q(10, "Bon", "De bonprinter heeft geen papier. Wat doe je professioneel?", ["Zeggen: pech gehad", "Alternatief aanbieden volgens procedure (bijv. digitaal)", "Een willekeurig bedrag roepen"], 1),

      q(11, "Betaling", "Pin werkt niet. Wat is het beste?", ["Klant laten gaan zonder betalen", "Oplossing zoeken volgens procedure/afspraak", "Boos worden en stoppen midden op de weg"], 1),
      q(12, "Betaling", "Klant wil contant betalen met groot biljet en jij hebt geen wisselgeld. Wat is het beste?", ["Vooraf aangeven en samen oplossing kiezen", "Extra kosten rekenen zonder uitleg", "Klant uitschelden"], 0),
      q(13, "Betaling", "Wat is het beste bij een mislukte pintransactie?", ["Nogmaals proberen of alternatief afspreken", "Klant direct uitzetten", "Doorrijden zonder af te rekenen"], 0),
      q(14, "AVG/Privacy", "Wat is juist over het noteren van klantgegevens?", ["Alles noteren ‘voor de zekerheid’", "Alleen wat nodig is voor rit/factuur en netjes bewaren", "Altijd foto’s maken van ID"], 1),
      q(15, "AVG/Privacy", "Een klant laat iets liggen. Wat is professioneel?", ["Houden want gevonden = van jou", "Melden/terugbezorgen volgens procedure", "Weggooien"], 1),
      q(16, "Rij- en rusttijden", "Waarom zijn rusttijden belangrijk in de praktijk?", ["Voor meer winst", "Voor veiligheid (vermindert vermoeidheidsrisico)", "Alleen omdat klanten dat willen"], 1),
      q(17, "Rij- en rusttijden", "Je merkt dat je slaperig wordt. Wat is het beste?", ["Doorrijden tot einde dienst", "Pauze nemen en pas verder rijden als je weer fit bent", "Hardere muziek en door"], 1),
      q(18, "Rij- en rusttijden", "Wat is het uitgangspunt bij professioneel werken?", ["Rijden zolang je wakker blijft", "Fit en veilig werken; afspraken/regels volgen", "Rust is alleen voor vakantie"], 1),
      q(19, "Nachtwerk", "Waarom vraagt nachtwerk extra aandacht?", ["Omdat de wegen breder zijn", "Door hoger risico op vermoeidheid en minder zicht", "Omdat je altijd sneller mag"], 1),
      q(20, "Dienststart", "Wat is verstandig vóór je eerste rit?", ["Registratie/systemen checken en klaarzetten", "Direct rijden zonder check", "Alleen radio aanzetten"], 0),

      q(21, "Route", "Klant wil een andere route dan navigatie. Wat is het best?", ["Negeren en navigatie volgen", "Kort bespreken en volgen als het veilig/haalbaar is", "Rit direct beëindigen"], 1),
      q(22, "Route", "Je hebt vertraging door drukte. Wat is professioneel?", ["Niets zeggen", "Klant kort informeren en veilig blijven rijden", "Extra hard rijden om in te halen"], 1),
      q(23, "Route", "Wat is juist bij omrijden vanwege wegafsluiting?", ["Door de afzetting rijden", "Veilige en toegestane omleiding kiezen", "Stoppen op de snelweg om te kijken"], 1),
      q(24, "Klant & gedrag", "Klant wil dat jij ‘even snel’ door oranje/rood rijdt. Wat is juist?", ["Doen als het veilig lijkt", "Niet doen; je houdt je aan de regels", "Alleen doen als je haast hebt"], 1),
      q(25, "Klant & gedrag", "Wat is het beste bij een meningsverschil over prijs?", ["Escaleren en dreigen", "Rustig uitleggen en verwijzen naar duidelijke afspraken/bon", "Klant opsluiten"], 1),
      q(26, "ILT & documenten", "Bij controle wordt om documenten gevraagd. Wat is het beste?", ["Zeggen dat je ze thuis hebt", "Tonen wat gevraagd wordt en meewerken", "Wegrijden"], 1),
      q(27, "Voertuig", "Welke basiscontrole helpt problemen voorkomen?", ["Bandenspanning/verlichting/schade", "Alleen luchtverfrisser", "Alleen stoelverwarming"], 0),
      q(28, "Voertuig", "Je dashboard waarschuwt voor een veiligheidskritische storing. Wat is het beste?", ["Negeren en doorrijden", "Veilig stoppen en volgens procedure handelen", "Alleen harder rijden"], 1),
      q(29, "Standplaats", "Wat is professioneel bij drukte op standplaats?", ["Toeteren en voordringen", "Rustig blijven en wachtrij volgen", "Op de stoep parkeren"], 1),
      q(30, "Standplaats", "Wat is het doel van standplaatsregels?", ["Alleen boetes geven", "Eerlijkheid en veiligheid", "Meer reclameplekken"], 1),

      q(31, "KIWA", "Waarom is een keuring belangrijk voor taxiwerk?", ["Voor veiligheid en wettelijke eisen", "Voor meer fooi", "Voor gratis brandstof"], 0),
      q(32, "KIWA", "Je keuring is verlopen. Wat is juist?", ["Je mag rijden als klant akkoord is", "Niet rijden tot alles weer in orde is", "Alleen korte ritten rijden"], 1),
      q(33, "PAMAN", "Waar staat PAMAN voor?", ["Persoonlijke veiligheid, Andersmans veiligheid, Markeren, Alarmeren, Noodzakelijke hulp verlenen", "Parkeren, Afrekenen, Muziek, Afslag, Navigatie", "Pech, Alarm, Motor, Aanrijding, Niets"], 0),
      q(34, "PAMAN", "Wat betekent ‘alarmeren’ binnen PAMAN?", ["Hulpdiensten/centrale inschakelen waar nodig", "Boos terugroepen", "Hard remmen zodat iedereen stopt"], 0),
      q(35, "PAMAN", "Wat betekent ‘markeren’ binnen PAMAN?", ["Locatie/situatie herkenbaar maken voor hulpdiensten", "De klant filmen voor later", "Op de claxon blijven drukken"], 0),
      q(36, "Nood", "Klant wordt onwel: wat is het beste?", ["Doorrijden naar bestemming", "Veilig stoppen en hulp inschakelen", "Negeren"], 1),
      q(37, "Gordel", "Passagier weigert gordel: wat is juist?", ["Toestaan bij korte afstand", "Uitleggen en alleen veilig/volgens regels verder", "Negeer het altijd"], 1),
      q(38, "Veilig uitstappen", "Wat is het beste bij uitstappen aan fietsstrook?", ["Deur direct open", "Eerst kijken (spiegels/schouder) en pas veilig openen", "Klant duwen zodat hij snel is"], 1),
      q(39, "Professionaliteit", "Wat is een kernpunt van taxiwerk als dienstverlener?", ["Alleen snelheid", "Veiligheid en klantgerichtheid", "Altijd discussiëren"], 1),
      q(40, "Samenvatting", "Wat is in één zin het beste uitgangspunt voor taxiwerk?", ["Regels buigen voor klanttevredenheid", "Veilig, eerlijk en volgens regels werken", "Zo veel mogelijk ritten in korte tijd"], 1),
    ]
  };

  // =========================
  // TAXI EXAMEN 3 (nieuwe toevoegen)
  // =========================
  const TAXI_EXAMEN_3 = {
    id: "taxi-examen-3",
    title: "Taxi Examen 3 (40 vragen)",
    category: "Taxi",
    durationMinutes: 30,
    passMinCorrect: 32,
    questions: [
      q(1, "Klant & service", "Wat is het meest klantgerichte begin van een rit?", ["Zonder groeten wegrijden", "Bestemming bevestigen en rustig starten", "Eerst je telefoon bijwerken"], 1),
      q(2, "Klant & service", "Klant twijfelt over bestemming. Wat is het beste?", ["Gokken en wegrijden", "Rustig laten uitleggen/tonen en bevestigen", "Zeggen dat het niet jouw probleem is"], 1),
      q(3, "Klant & gedrag", "Een klant is boos en maakt handgebaren. Wat is jouw beste houding?", ["Rustig blijven en focussen op veilig rijden", "Boos teruggebaren", "Snel harder rijden om het te beëindigen"], 0),
      q(4, "Klant & gedrag", "Wanneer is het verstandig de rit te stoppen?", ["Altijd bij onenigheid", "Als veiligheid in gevaar komt en je veilig kunt stoppen", "Alleen als de klant dat wil"], 1),
      q(5, "Veiligheid", "Wat doe je als een klant je afleidt tijdens rijden?", ["Doorpraten en appen tegelijk", "Rustig aangeven dat je moet focussen op verkeer", "Omkijken en blijven discussiëren"], 1),
      q(6, "Veiligheid", "Je moet een discussie beëindigen zonder risico. Wat is het beste?", ["Hard remmen om indruk te maken", "Kalm blijven en op een veilige plek stoppen indien nodig", "De klant uitschelden"], 1),
      q(7, "Gordel", "Klant achterin draagt geen gordel en wil dat zo houden. Wat is juist?", ["Toestaan bij korte rit", "Uitleggen en alleen verder als het veilig/volgens regels kan", "Negeer altijd"], 1),
      q(8, "Zitplaatsen", "Klant wil een kind op schoot meenemen zonder gordel. Wat is juist?", ["Toestaan", "Niet toestaan; veiligheid gaat voor", "Alleen toestaan bij lage snelheid"], 1),
      q(9, "Bagage", "Bagage blokkeert zicht/veiligheid. Wat is het beste?", ["Toch rijden", "Bagage veilig herplaatsen/zekeren vóór vertrek", "Klant laten vasthouden tijdens rijden"], 1),
      q(10, "Bagage", "Klant heeft zware koffers. Wat is professioneel?", ["Niet helpen, nooit", "Helpen waar redelijk mogelijk en veilig", "Koffers in de rijbaan zetten"], 1),

      q(11, "Schiphol/drukke zone", "Ophalen bij Kiss & Ride: wat is het beste uitgangspunt?", ["Stoppen waar je wilt", "Regels/aanwijzingen volgen en veilig blijven", "Op de busbaan gaan staan"], 1),
      q(12, "Stoppen", "Waar laat je een klant uitstappen in druk stadsverkeer?", ["Midden op de rijbaan", "Veilige toegestane plek", "Op een fietspad"], 1),
      q(13, "Doorring", "Uitstappen naast fietsers: wat is de beste instructie aan klant?", ["Deur direct open", "Even wachten tot jij zegt dat het veilig is", "Snel uitstappen zonder te kijken"], 1),
      q(14, "Route", "Klant zegt: ‘rij maar waar jij wilt’. Wat is professioneel?", ["Langste route rijden", "Logische route kiezen en bij twijfel checken", "Rondjes rijden zonder reden"], 1),
      q(15, "Route", "Klant wil omrijden langs een plek (om iets op te halen). Wat is het beste?", ["Direct weigeren altijd", "Overleggen of het kan en wat dat betekent voor tijd/prijs", "Zonder iets te zeggen doen"], 1),
      q(16, "Tarieven", "Klant vraagt vooraf: ‘wat kost het ongeveer?’. Wat is het beste?", ["Geen antwoord geven", "Eerlijk een indicatie geven en uitleggen waar het van afhangt", "Een extreem laag bedrag zeggen"], 1),
      q(17, "Tarieven", "Tijdens de rit ontstaat discussie over route en kosten. Wat is professioneel?", ["Discussie winnen", "Kalm blijven en afspraken/indicatie uitleggen", "Klant uitlachen"], 1),
      q(18, "Bon", "Klant wil een bon met datum/tijd/bedrag. Wat doe je?", ["Geef niets", "Lever bon/factuur volgens werkwijze", "Schrijf alleen ‘betaald’ op papier"], 1),
      q(19, "Betaling", "Klant wil pinnen, maar terminal geeft storing. Wat is professioneel?", ["Boos worden", "Alternatief afspreken volgens procedure (bijv. andere methode)", "Klant laten gaan zonder betaling"], 1),
      q(20, "Betaling", "Klant wil achteraf pas betalen. Wat is professioneel?", ["Altijd oké", "Volg de gebruikelijke werkwijze: afrekenen aan het eind van de rit", "Laat het maar zitten"], 1),

      q(21, "Conflicten", "Klant dreigt. Wat is de beste prioriteit?", ["De klant gelijk geven", "Persoonlijke veiligheid en andersmans veiligheid (PAMAN)", "Sneller rijden om weg te komen"], 1),
      q(22, "PAMAN", "Wat is het juiste uitgangspunt bij PAMAN?", ["Eerst filmen, dan bellen", "Veiligheid voorop; daarna markeren/alarmeren/hulp", "Eerst discussiëren, dan stoppen"], 1),
      q(23, "PAMAN", "Wat betekent ‘noodzakelijke hulp verlenen’ praktisch?", ["Niets doen", "Hulp inschakelen en eerste hulp waar mogelijk/veilig", "Alleen toeteren"], 1),
      q(24, "Nood", "Klant wordt agressief en je voelt je onveilig. Wat is het beste?", ["Doorrijden tot bestemming en hopen dat het stopt", "Veilig stoppen en hulp/centrale inschakelen indien nodig", "Klant opsluiten"], 1),
      q(25, "Nood", "Er is een ongeval vlak voor je. Wat is het beste handelen?", ["Doorrijden en filmen", "Veilig handelen: veiligheid, alarmeren indien nodig, geen extra gevaar maken", "Toeteren en door"], 1),
      q(26, "Vermoeidheid", "Je merkt dat je concentratie afneemt. Wat doe je?", ["Nog één ritje en dan pauze", "Pauze nemen vóór je verder rijdt", "Harder rijden om sneller klaar te zijn"], 1),
      q(27, "Afleiding", "Klant wil dat je tijdens het rijden iets op je telefoon opzoekt. Wat is professioneel?", ["Doen tijdens rijden", "Pas doen als je veilig stilstaat", "De telefoon aan klant geven en zelf blijven rijden"], 1),
      q(28, "Privacy", "Een klant vraagt om gegevens van vorige klant. Wat doe je?", ["Geven", "Niet geven; privacy respecteren", "Alleen geven tegen betaling"], 1),
      q(29, "Privacy", "Je hebt camerabeelden in de auto. Wat is het meest professioneel?", ["Altijd openbaar delen", "Alleen gebruiken volgens doel/regels en beveiligd bewaren", "Verkopen aan vrienden"], 1),
      q(30, "Professionaliteit", "Wat is een professioneel antwoord op ‘rij maar wat sneller’?", ["Oké, ik ga regels overtreden", "Ik rijd veilig en volgens verkeersregels", "Dan stap je maar uit"], 1),

      q(31, "Documenten", "Klant vraagt: ‘ben je wel een echte taxi?’. Wat is netjes?", ["Boos worden", "Rustig uitleggen dat je bevoegd bent en professioneel blijven", "Klant uitzetten"], 1),
      q(32, "ILT", "Je ziet ILT en je wordt zenuwachtig. Wat is het beste?", ["Snel omrijden", "Rustig blijven; als alles op orde is hoef je niet te stressen", "BCT uitzetten"], 1),
      q(33, "Voertuig", "Klant klaagt over smerigheid. Wat is professioneel?", ["Negeren", "Netjes reageren en zorgen voor een schone, representatieve auto", "Zeggen dat klanten zeuren"], 1),
      q(34, "Service", "Klant wil raam open, jij wordt afgeleid door wind/geluid. Wat is best?", ["Nee zeggen zonder uitleg", "Overleggen: comfort én veiligheid", "Hard remmen om punt te maken"], 1),
      q(35, "Service", "Klant is slecht ter been. Wat is professioneel?", ["Haast maken en doorrijden", "Rustig helpen waar redelijk en veilig mogelijk", "Klant laten vallen"], 1),
      q(36, "Stoppen", "Je moet parkeren om de situatie te bespreken. Wat is juist?", ["Stoppen waar het verboden/onveilig is", "Stoppen op een veilige plek waar het is toegestaan", "Stoppen op een rotonde"], 1),
      q(37, "Klant & gedrag", "Klant wil roken/vapen in de auto en jij wilt dat niet. Wat is best?", ["Toestaan altijd", "Rustig jouw regels uitleggen en alternatief bieden (stopplek)", "Boos worden"], 1),
      q(38, "Route", "Navigatie stuurt je een straat in met ‘verboden in te rijden’. Wat doe je?", ["Toch erin", "Je volgt de verkeersborden; navigatie is hulpmiddel", "Je stopt midden op de weg"], 1),
      q(39, "Samenvatting", "Wat is de beste kernregel bij taxiwerk in moeilijke situaties?", ["Altijd klant gelijk geven", "Veiligheid en regels gaan voor; blijf professioneel", "Snel klaar zijn is het belangrijkst"], 1),
      q(40, "Samenvatting", "Wat is het beste einddoel van professioneel taxiwerk?", ["Zo veel mogelijk ritten", "Veilige, eerlijke en klantgerichte dienstverlening", "Zo hard mogelijk rijden"], 1),
    ]
  };

  // Export
  const exams = [TAXI_EXAMEN_1, TAXI_EXAMEN_2, TAXI_EXAMEN_3];

  window.EXAM_DATA = { exams };
  window.EXAMS = exams;
  window.exams = exams;
  window.ggExams = exams;

})();

// =========================
// TAXI EXAMEN 4 (40) — Taxi
// =========================
const EXAMEN_4 = {
  id: "examen-4",
  title: "Taxi Examen 4 (40 vragen)",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    { id: 1, type: "mcq", category: "Wetgeving", prompt: "Wie is verantwoordelijk voor naleving van taxiregels tijdens een rit?", options: ["Alleen het taxibedrijf", "De taxichauffeur", "De passagier"], correctIndex: 1 },
    { id: 2, type: "mcq", category: "Taxipas", prompt: "Wanneer moet je je taxipas bij je hebben?", options: ["Alleen bij controle", "Altijd tijdens taxiwerk", "Alleen overdag"], correctIndex: 1 },
    { id: 3, type: "mcq", category: "ILT", prompt: "Wat mag de ILT doen bij een controle?", options: ["Alleen waarschuwen", "Documenten en registratie controleren", "Alleen kenteken noteren"], correctIndex: 1 },
    { id: 4, type: "mcq", category: "BCT", prompt: "Wat registreert de BCT?", options: ["Alleen kilometers", "Rit- en werktijden", "Alleen betalingen"], correctIndex: 1 },
    { id: 5, type: "mcq", category: "BCT", prompt: "Wanneer moet de BCT correct zijn ingelogd?", options: ["Na de eerste rit", "Voor aanvang van de dienst", "Alleen bij lange ritten"], correctIndex: 1 },

    { id: 6, type: "mcq", category: "Veiligheid", prompt: "Wat doe je bij agressief gedrag van een klant?", options: ["Terugschreeuwen", "Rustig blijven en veiligheid vooropstellen", "Direct doorrijden"], correctIndex: 1 },
    { id: 7, type: "mcq", category: "Gedrag", prompt: "Wat hoort bij professioneel chauffeurgedrag?", options: ["Discussies winnen", "Rustig en respectvol blijven", "Altijd gelijk willen hebben"], correctIndex: 1 },
    { id: 8, type: "mcq", category: "Route", prompt: "De klant vraagt een omweg zonder reden. Wat doe je?", options: ["Altijd weigeren", "Bespreken en akkoord bij duidelijke afspraken", "Gewoon rijden"], correctIndex: 1 },
    { id: 9, type: "mcq", category: "Tarieven", prompt: "Wat moet je doen als een klant naar de prijs vraagt?", options: ["Ontwijken", "Duidelijk uitleg geven", "Pas na afloop zeggen"], correctIndex: 1 },
    { id: 10, type: "mcq", category: "Betaling", prompt: "Wanneer moet een betaling correct geregistreerd zijn?", options: ["Na de dienst", "Tijdens of direct na de rit", "Alleen bij pin"], correctIndex: 1 },

    { id: 11, type: "mcq", category: "Bon", prompt: "Is een klant gerechtigd op een bon?", options: ["Nee", "Ja, op verzoek", "Alleen zakelijk"], correctIndex: 1 },
    { id: 12, type: "mcq", category: "Bagage", prompt: "Hoe ga je om met zware bagage?", options: ["Niet helpen", "Helpen waar redelijk en veilig", "Altijd weigeren"], correctIndex: 1 },
    { id: 13, type: "mcq", category: "Veiligheid", prompt: "Wanneer mag je stoppen om iemand af te zetten?", options: ["Altijd overal", "Alleen op een veilige en toegestane plek", "Midden op de weg"], correctIndex: 1 },
    { id: 14, type: "mcq", category: "Gordel", prompt: "Wat doe je als een passagier geen gordel draagt?", options: ["Negeren", "Uitleggen en pas rijden als het veilig is", "Doorrijden"], correctIndex: 1 },
    { id: 15, type: "mcq", category: "Alcohol", prompt: "Wat geldt voor alcohol tijdens taxiwerk?", options: ["Beetje mag", "Nul tolerantie", "Alleen ’s avonds"], correctIndex: 1 },

    { id: 16, type: "mcq", category: "Voertuig", prompt: "Wat controleer je voor je dienst?", options: ["Alleen brandstof", "Basisveiligheid van het voertuig", "Niets"], correctIndex: 1 },
    { id: 17, type: "mcq", category: "Ritweigering", prompt: "Wanneer mag je een rit weigeren?", options: ["Zonder reden", "Bij gevaar of onacceptabel gedrag", "Bij korte afstand"], correctIndex: 1 },
    { id: 18, type: "mcq", category: "Communicatie", prompt: "Hoe ga je om met een boze klant?", options: ["Boos terug", "Luisteren en rustig blijven", "Rit stoppen"], correctIndex: 1 },
    { id: 19, type: "mcq", category: "Navigatie", prompt: "Mag je navigatie gebruiken tijdens het rijden?", options: ["Nee", "Ja, als het niet afleidt", "Alleen bij file"], correctIndex: 1 },
    { id: 20, type: "mcq", category: "Privacy", prompt: "Wat doe je met klantinformatie?", options: ["Delen", "Discreet behandelen", "Opslaan privé"], correctIndex: 1 },

    { id: 21, type: "mcq", category: "Nood", prompt: "Een klant wordt onwel. Wat doe je?", options: ["Doorrijden", "Veilig stoppen en hulp inschakelen", "Negeren"], correctIndex: 1 },
    { id: 22, type: "mcq", category: "Rijgedrag", prompt: "Wat is passend rijgedrag met passagiers?", options: ["Sportief", "Rustig en voorspelbaar", "Haastig"], correctIndex: 1 },
    { id: 23, type: "mcq", category: "Werkdruk", prompt: "Hoe ga je om met tijdsdruk?", options: ["Harder rijden", "Veilig blijven rijden", "Regels loslaten"], correctIndex: 1 },
    { id: 24, type: "mcq", category: "Planning", prompt: "Wat doe je bij vertraging?", options: ["Niets zeggen", "Klant informeren", "Rit annuleren"], correctIndex: 1 },
    { id: 25, type: "mcq", category: "Gedrag", prompt: "Wat is ongewenst chauffeurgedrag?", options: ["Rustig uitleggen", "Schreeuwen", "Luisteren"], correctIndex: 1 },

    { id: 26, type: "mcq", category: "Wet", prompt: "Waarom zijn taxiregels belangrijk?", options: ["Voor winst", "Voor veiligheid en eerlijkheid", "Voor snelheid"], correctIndex: 1 },
    { id: 27, type: "mcq", category: "Voertuig", prompt: "Wat doe je bij een technisch mankement?", options: ["Doorrijden", "Niet rijden tot opgelost", "Langzamer rijden"], correctIndex: 1 },
    { id: 28, type: "mcq", category: "Betaling", prompt: "Mag je betaling weigeren?", options: ["Ja", "Nee, behalve bij misbruik", "Altijd"], correctIndex: 1 },
    { id: 29, type: "mcq", category: "Dienst", prompt: "Wanneer eindigt je dienst volgens de regels?", options: ["Wanneer jij wilt", "Volgens rij- en rusttijden", "Na laatste klant"], correctIndex: 1 },
    { id: 30, type: "mcq", category: "Professionaliteit", prompt: "Wat straalt professionaliteit uit?", options: ["Haast", "Beheerst gedrag", "Discussie"], correctIndex: 1 },

    { id: 31, type: "mcq", category: "Conflicten", prompt: "Wat is de beste aanpak bij conflict?", options: ["Escaleren", "De-escaleren", "Negeren"], correctIndex: 1 },
    { id: 32, type: "mcq", category: "Controle", prompt: "Wat gebeurt bij ernstige overtredingen?", options: ["Niets", "Boete of sanctie", "Alleen waarschuwing"], correctIndex: 1 },
    { id: 33, type: "mcq", category: "Klant", prompt: "Wat doe je als een klant onrealistische eisen stelt?", options: ["Altijd toegeven", "Uitleg geven en grenzen aangeven", "Rit stoppen"], correctIndex: 1 },
    { id: 34, type: "mcq", category: "Werkethiek", prompt: "Wat is eerlijk taxiwerk?", options: ["Maximaal verdienen", "Volgens regels en afspraken", "Sneller dan toegestaan"], correctIndex: 1 },
    { id: 35, type: "mcq", category: "Veiligheid", prompt: "Waarom altijd afstand houden?", options: ["Comfort", "Veiligheid", "Brandstof"], correctIndex: 1 },

    { id: 36, type: "mcq", category: "Stress", prompt: "Wat doe je bij stress?", options: ["Negeren", "Rust nemen", "Doorpushen"], correctIndex: 1 },
    { id: 37, type: "mcq", category: "Communicatie", prompt: "Wat is goede communicatie?", options: ["Kortaf", "Duidelijk en respectvol", "Onpersoonlijk"], correctIndex: 1 },
    { id: 38, type: "mcq", category: "Werk", prompt: "Wanneer ben je geschikt om te rijden?", options: ["Altijd", "Fit en alert", "Bij weinig klanten"], correctIndex: 1 },
    { id: 39, type: "mcq", category: "Verantwoordelijkheid", prompt: "Wie draagt eindverantwoordelijkheid tijdens de rit?", options: ["Klant", "Chauffeur", "Planner"], correctIndex: 1 },
    { id: 40, type: "mcq", category: "Samenvatting", prompt: "Wat is de kern van taxiwerk?", options: ["Snelheid", "Veilig en klantgericht vervoer", "Omzet"], correctIndex: 1 }

  ]
};
