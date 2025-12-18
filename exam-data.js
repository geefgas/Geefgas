/* =========================================================
   GeefGas — exam-data.js
   Taxi Examens 1 t/m 15
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
   Onderwerp: Wet- en regelgeving taxi
   ========================= */

const TAXI_EXAMEN_1 = {
  id: "taxi-examen-1",
  title: "Taxi Examen 1 – Wet- en regelgeving taxi",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    q(1,"Wetgeving","Welke combinatie is verplicht om taxivervoer te mogen uitvoeren?",["Rijbewijs B en KvK","Geldige taxipas en geldige vergunning","Alleen een boordcomputer"],1),
    q(2,"Taxipas","Wie verstrekt de taxipas?",["Gemeente","RDW","Kiwa"],2),
    q(3,"Taxipas","Wat gebeurt er als je taxipas is verlopen?",["Je mag doorrijden tot controle","Je mag geen taxiwerk verrichten","Alleen overdag rijden"],1),
    q(4,"Verantwoordelijkheid","Wie is juridisch verantwoordelijk tijdens de taxirit?",["De passagier","Het taxibedrijf","De chauffeur"],2),
    q(5,"Vergunning","Wat is een chauffeurskaart?",["Een parkeerkaart","Een taxipas","Een kentekenbewijs"],1),

    q(6,"Vergunning","Wanneer moet je taxipas zichtbaar zijn?",["Alleen bij controle","Tijdens taxiwerkzaamheden zichtbaar in de auto","Nooit zichtbaar vanwege privacy"],1),
    q(7,"ILT","Wat is een taak van ILT?",["Ritten plannen","Controle op naleving taxiwetgeving","Tarief bepalen"],1),
    q(8,"ILT","Wat mag ILT bij controle eisen?",["Alleen rijbewijs","Documenten en administratie","Alleen mondelinge uitleg"],1),
    q(9,"ILT","Wat kan ILT doen bij ernstige overtreding?",["Alleen waarschuwen","Boete of sanctie opleggen","Niets"],1),
    q(10,"Wet","Wanneer ben je in overtreding?",["Bij een klacht van een klant","Als je zonder geldige taxipas rijdt","Bij file"],1),

    q(11,"Onderneming","Wie is verantwoordelijk voor de vergunning van het voertuig?",["De klant","De ondernemer","De garage"],1),
    q(12,"Onderneming","Mag je rijden als het voertuig niet als taxi is aangemeld?",["Ja","Nee","Alleen korte ritten"],1),
    q(13,"Controle","Wat is correct gedrag bij een controle?",["Discussie aangaan","Meewerken en documenten tonen","Wegrijden"],1),
    q(14,"Wet","Waarom bestaat taxiwetgeving?",["Voor winst","Voor veiligheid en eerlijk vervoer","Voor reclame"],1),
    q(15,"Overtreding","Wat is een mogelijke gevolg van structurele overtredingen?",["Geen","Intrekking taxipas","Extra klanten"],1),

    q(16,"Identificatie","Moet je je kunnen identificeren tijdens taxiwerk?",["Nee","Ja","Alleen ’s nachts"],1),
    q(17,"Rijbewijs","Welk rijbewijs is minimaal vereist?",["Rijbewijs A","Rijbewijs B","Rijbewijs C"],1),
    q(18,"Wet","Mag je taxiwerk verrichten zonder vergunning als klant akkoord is?",["Ja","Nee","Alleen contant"],1),
    q(19,"Controle","Wat gebeurt er als je documenten niet kunt tonen?",["Niets","Risico op sanctie","Alleen waarschuwing"],1),
    q(20,"Wet","Wat valt onder taxivervoer?",["Privéritten","Vervoer tegen betaling","Alleen lange ritten"],1),

    q(21,"Bevoegdheid","Mag een chauffeur zelf regels aanpassen?",["Ja","Nee","Bij drukte"],1),
    q(22,"Handhaving","Waarom is handhaving noodzakelijk?",["Om chauffeurs te pesten","Om ervoor te zorgen dat iedereen zich aan de regels houdt.","Voor administratie"],1),
    q(23,"Wet","Wie bepaalt de wettelijke eisen voor taxiwerk?",["Chauffeur","Overheid","Klant"],1),
    q(24,"Verantwoordelijkheid","Ben je verantwoordelijk voor naleving ook als werkgever fout zit?",["Nee","Ja, als chauffeur heb je eigen verantwoordelijkheid","Alleen bij controle"],1),
    q(25,"Overtreding","Is ‘niet weten’ een geldige reden bij overtreding?",["Ja","Nee","Soms"],1),

    q(26,"Wet","Wanneer is een rit illegaal?",["Bij file","Zonder juiste bevoegdheid","Bij slechte navigatie"],1),
    q(27,"Controle","Wat moet altijd kloppen tijdens taxiwerk?",["Radiozender","Documenten","hoeveelheid fooi"],1),
    q(28,"Wet","Wat gebeurt bij herhaalde zware overtredingen?",["Niets","Zwaardere sancties","Meer controles alleen"],1),
    q(29,"Taxipas","Mag je taxipas uitlenen?",["Ja","Nee","Alleen aan collega"],1),
    q(30,"Wet","Wat betekent ‘persoonlijke bevoegdheid’?",["Auto is bevoegd","Chauffeur is bevoegd","Klant bepaalt"],1),

    q(31,"Controle","Wat is verplicht bij controle?",["Discussie","Medewerking","Ontkennen"],1),
    q(32,"Wet","Waarom is regelgeving noodzakelijk?",["Alleen voor snelheidsduivels","Voor duidelijkheid en gelijkheid","Alleen voor reclame"],1),
    q(33,"Wet","Mag je rijden als je taxipas thuis ligt?",["Ja","Nee","Alleen korte ritten"],1),
    q(34,"Wet","Wat is de kernverantwoordelijkheid van de chauffeur?",["Omzet","Veilig en legaal vervoer","Snelheid"],1),
    q(35,"Sanctie","Wat kan een sanctie zijn?",["Bonus","Boete","Fooi"],1),

    q(36,"Wet","Wanneer geldt de taxiwet?",["Altijd","Tijdens betaald vervoer","Alleen ’s nachts"],1),
    q(37,"Controle","Wat moet je altijd kunnen aantonen?",["Je route","Je bevoegdheid","Je mening"],1),
    q(38,"Wet","Wie controleert naleving van taxiwetten?",["Klant","ILT","Garage"],1),
    q(39,"Wet","Wat is geen excuus bij overtreding?",["Onwetendheid","Overmacht","Nood"],0),
    q(40,"Samenvatting","Wat is de basisvoorwaarde om taxiwerk te doen?",["Klanttevredenheid","Voldoen aan wet- en regelgeving","Snel rijden"],1)

  ]
};

   /* =========================
   TAXI EXAMEN 2
   Onderwerp: BCT / ritregistratie / administratie / storingen
   ========================= */

const TAXI_EXAMEN_2 = {
  id: "taxi-examen-2",
  title: "Taxi Examen 2 – BCT & ritregistratie",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    q(1,"BCT","Wat is het hoofddoel van de BCT?",["Kilometers bijhouden voor onderhoud","Ritten en werktijden registreren volgens regels","Alleen navigatie tonen"],1),
    q(2,"BCT","Wanneer moet je BCT-registratie op orde zijn?",["Alleen bij controle","Altijd tijdens taxiwerk","Alleen bij lange ritten"],1),
    q(3,"BCT","Wat doe je vóór je eerste rit met de BCT?",["Pas na de eerste rit inloggen","Controleren of je correct bent ingelogd/gestart","BCT uitzetten om batterij te sparen"],1),
    q(4,"BCT","De BCT is vóór dienst defect. Wat is het beste?",["Toch beginnen, later invullen","Storingsprocedure volgen en alleen rijden als toegestaan","De klant laten registreren"],1),
    q(5,"BCT","De BCT valt uit tijdens een rit. Wat is juist?",["Negeren en doorgaan","Volg storingsprocedure en zorg dat registratie klopt","Stop direct midden op de weg"],1),

    q(6,"Ritregistratie","Waarom is ritregistratie belangrijk?",["Alleen voor marketing","Voor controle/handhaving en administratie","Alleen voor klanttevredenheid"],1),
    q(7,"Ritregistratie","Wat is het risico van structureel fout registreren?",["Geen, zolang je netjes rijdt","Boete/handhaving en administratieve problemen","Je krijgt extra ritten"],1),
    q(8,"Ritregistratie","Wat hoort minimaal logisch te kloppen in ritgegevens?",["Kleur van de auto","Tijd/ritstatus/activiteit passend bij je werkzaamheden","Muziekvolume"],1),
    q(9,"Ritregistratie","Wat is het beste bij twijfel over een handeling in de BCT?",["Zelf iets invullen dat ‘ongeveer’ klopt","Procedure raadplegen/bedrijf vragen en correct handelen","Negeer het tot morgen"],1),
    q(10,"Ritregistratie","Als je iets verkeerd hebt geregistreerd, wat is het meest professioneel?",["Laten staan, niemand merkt het","Corrigeren volgens procedure zodat het herleidbaar klopt","Alles verwijderen"],1),

    q(11,"Storingen","Wat is een storingsprocedure in de praktijk?",["Doorrijden alsof er niets is","Vastgelegde stappen volgen om bij defect toch correct te registreren","Alleen de telefoon uitzetten"],1),
    q(12,"Storingen","Wat moet je doen als de BCT (boordcomputer taxi) defect is?",["Niets doen en hopen dat het vanzelf werkt","en tot die tijd handmatig je rij- en rusttijden bijhouden","gewoon doorwerken zonder registratie"],1),
    q(13,"Controle","Bij controle vraagt men om registratie. Wat is juist?",["Je zegt dat je het later wel toont","Je toont/overhandigt wat gevraagd wordt volgens regels","Je toont een copy als je het niet bij je hebt"],1),
    q(14,"Controle","Wat kan de Inspectie Leefomgeving en Transport (ILT) controleren tijdens een taxicontrole?",["Alleen of de taxi schoon en representatief is","De juiste werking en gegevensregistratie van de BCT","Alleen de betaalwijze van de passagier"],1),
    q(15,"Controle","Wat is de beste houding bij vragen over registratie?",["Kortaf en geïrriteerd","Rustig uitleggen en meewerken","Alles ontkennen"],1),

    q(16,"Werk- vs privétijd","Wanneer mag een taxi privé worden gebruikt zonder dat dit als taxirit in de BCT wordt geregistreerd?",["Wanneer de chauffeur geen passagiers vervoert","Alleen als het voertuig niet voor taxivervoer wordt gebruikt en de BCT correct op privé / buiten dienst staat","Wanneer de rit minder dan 10 kilometer is"],1),
    q(17,"Werk- vs privétijd","Wat is fout in administratie?",["Werkrit als werk registreren","Privégebruik als werk laten lijken","Correct begin/einde dienst registreren"],1),
    q(18,"Dienststart","Wat moet je bij dienststart voorkomen?",["Dat je te vroeg begint","Dat je al rijdt zonder correcte status/registratie","Dat je tank vol zit"],1),
    q(19,"Dienststop","Wat moet je doen bij einde dienst?",["BCT aan laten staan","Dienst correct afsluiten volgens procedure","Taxipas in de bct laten"],1),
    q(20,"Dienst","Mag een chauffeur pauze houden terwijl er een passagier in de taxi zit?",["Ja, zolang de taxi stilstaat","Nee, een pauze mag alleen zonder passagiers","Alleen met toestemming van de passagier"],1),

    q(21,"Bewijslast","Waarom moet registratie controleerbaar zijn?",["Voor social media","Om vast te stellen of een chauffeur zich houdt aan de regels voor arbeidstijden, rusttijden en taxivervoer","Omdat klanten dat eisen"],1),
    q(22,"Bewijslast","Wat is het grootste probleem met ‘achteraf invullen van je registratie uit je hoofd’?",["Het kost tijd","Er worden  fouten  gemaakt en ook vaak niet toegestaan","Juist wel aangeraden om te doen"],1),
    q(23,"Datakwaliteit","Welke situatie is het meest verdacht bij controle?",["Consistente registratie","Veel ritten zonder logische verklaring","Netjes afgeronde ritten"],1),
    q(24,"Datakwaliteit","Wat is juist bij een vergeten registratiehandeling?",["Verstoppen","Melden/corrigeren volgens procedure","Nieuwe rit starten alsof niets is gebeurd"],1),
    q(25,"Datakwaliteit","Wat moet je vermijden om ‘fraude’ te voorkomen?",["Transparant werken","Registraties bewust manipuleren","Storingen melden"],1),

    q(26,"Apparatuur","Wat doe je als je BCT/apparaat los zit of slecht leest?",["Negeer het","Veilig stoppen en het oplossen/ laten oplossen","Tijdens rijden prutsen"],1),
    q(27,"Apparatuur","Wat is professioneel bij software-update melding tijdens dienst?",["Direct updaten tijdens rijden","Alleen uitvoeren als je veilig stilstaat en het kan","Altijd annuleren"],1),
    q(28,"Apparatuur","Wat is het beste bij lege batterij/voeding probleem?",["Doorrijden tot hij uitvalt","Voorkomen door vooraf te checken; anders veilig oplossen","BCT uitzetten"],1),
    q(29,"Apparatuur","Wat is fout bij registratieapparatuur?",["Schoon en werkend houden","Kabels zo leggen dat het niet hindert","Zo plaatsen dat het afleidt tijdens rijden"],2),
    q(30,"Apparatuur","Wat is het beste moment om instellingen te controleren?",["Tijdens druk verkeer","Voor vertrek of wanneer je veilig stilstaat","Tijdens een rotonde"],1),

    q(31,"Administratie","Wat is het doel van een goede ritadministratie voor jou?",["Meer fooi","Inzicht, bewijs en minder gedoe bij controle","Sneller rijden"],1),
    q(32,"Administratie","Welke situatie is het meest professioneel?",["Papieren overal in de auto","Alles netjes en terugvindbaar","Niets bewaren"],1),
    q(33,"Administratie","Wat doe je bij verschil tussen ritbon en registratie?",["Negeren","Uitzoeken en corrigeren volgens procedure","Alles weggooien"],1),
    q(34,"Administratie","Waarom is consistentie belangrijk?",["Ziet er mooi uit","Het voorkomt vragen en sancties bij controle","Omdat klanten dat eisen"],1),
    q(35,"Administratie","Wat is juist bij meerdere chauffeurs in één voertuig?",["Iedereen gebruikt dezelfde login","Iedere chauffeur registreert op eigen manier volgens regels","Alleen de eigenaar registreert"],1),

    q(36,"Privacy in administratie","Wat is het beste bij klantgegevens in administratie?",["Alles onbeperkt bewaren","Alleen noodzakelijke gegevens en veilig omgaan","Open delen in groepsapp"],1),
    q(37,"Privacy in administratie","Wat is fout bij digitale opslag?",["Beveiligen en beperken","Delen met vrienden/collega’s zonder reden","Alleen bewaren wat nodig is"],1),
    q(38,"Incidenten","Bij een incident (ruzie/ongeval) waarom is correcte registratie extra belangrijk?",["Voor muziekkeuze","Voor bewijs en reconstructie","Voor korting"],1),
    q(39,"Incidenten","Wat is het beste na een incident met registratieproblemen?",["Stilhouden","Melden en vastleggen volgens procedure","Alles resetten"],1),
    q(40,"Samenvatting","Wat is de beste kernregel voor BCT/administratie?",["Achteraf fixen is prima","Registreer eerlijk, volledig en volgens procedure","Alleen registreren bij controle"],1),

  ]
};

  /* =========================
   TAXI EXAMEN 3
   Onderwerp: KIWA / voertuigeisen / uitrusting / onderhoud & veiligheid
   ========================= */

const TAXI_EXAMEN_3 = {
  id: "taxi-examen-3",
  title: "Taxi Examen 3 – Voertuigtechniek & keuring",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    q(1,"KIWA-keuring","Waarom is een KIWA-keuring belangrijk voor taxiwerk?",["Voor extra snelheid op de weg","Voor voldoen aan taxi-eisen/veiligheid en toelating","Voor korting op brandstof"],1),
    q(2,"KIWA-keuring","Wat is het juiste uitgangspunt als de KIWA-status verlopen is?",["Je mag rijden als klanten akkoord zijn","Niet rijden tot het weer in orde is","Alleen korte ritten rijden"],1),
    q(3,"Voertuigeisen","Wat is het belangrijkste doel van voertuigeisen voor taxi’s?",["Meer comfort voor de chauffeur","Veilig en betrouwbaar vervoer voor passagiers","Meer bagageruimte voor de chauffeur"],1),
    q(4,"Veiligheid","Wat controleer je het meest logisch vóór je dienst begint?",["Alleen ruitenwisservloeistof","Banden/verlichting/remmen (basisveiligheid)","Alleen radio en airco"],1),
    q(5,"Verlichting","Wat is het risico van defecte verlichting?",["Alleen cosmetisch","Slechter zicht/zichtbaarheid en gevaar/boete","Geen risico als het droog is"],1),

    q(6,"Banden","Waarom is juiste bandenspanning belangrijk?",["Alleen voor snelheid","Veiligheid, grip en remweg","Alleen voor comfort"],1),
    q(7,"Banden","Wat doe je bij een (zichtbaar) beschadigde band vóór vertrek?",["Toch rijden, komt wel","Niet rijden en laten controleren/vervangen","Alleen harder oppompen"],1),
    q(8,"Remmen","Wat is een alarmsignaal bij remmen?",["Radio stoort","Trillen/geluid of remwerking afwijkend","Stoel zit niet lekker"],1),
    q(9,"Ruiten & zicht","Wat is het meest professioneel bij slecht zicht door vieze ruit?",["Doorrijden, klant wacht","Eerst schoonmaken/ontwasemen vóór vertrek","Alleen langzamer rijden"],1),
    q(10,"Ruitenwissers","Wat is juist bij versleten wissers bij regen?",["Negeer, je ziet genoeg","Vervangen/regelen voor veilig zicht","Alleen de achterruit gebruiken"],1),

    q(11,"Gordels","Wat is juist over gordels in je taxi?",["Alleen voorin is belangrijk","Gordels moeten werken; veiligheid voor alle inzittenden","Gordels achterin zijn optioneel"],1),
    q(12,"Airbags & storingen","Wat doe je bij een airbag-waarschuwingslampje?",["Negeren","Laten controleren; veiligheid kan in geding zijn","Sticker plakken en rijden"],1),
    q(13,"Dashboardlampjes","Wat is het beste bij een rood waarschuwingslampje tijdens rijden?",["Doorrijden tot einde rit","Zo snel mogelijk veilig stoppen en handelen","Alleen harder rijden"],1),
    q(14,"Motor/olie","Wat is juist als het olielampje brandt?",["Doorrijden, olie komt later","Veilig stoppen en oorzaak checken/ hulp inschakelen","Alleen gas loslaten"],1),
    q(15,"Koelsysteem","Temperatuur loopt te hoog op. Wat is het beste?",["Doorrijden, het zakt wel","Veilig stoppen en probleem oplossen/ hulp","Raam open zetten en door"],1),

    q(16,"Brandstof/energie","Wat is verstandig qua brandstof/actieradius?",["Wachten tot het echt op is","Zorgen dat je dienst betrouwbaar kan doorlopen","Alleen tanken na elke rit"],1),
    q(17,"Elektrisch/hybride","Wat is belangrijk bij laden/opladen tijdens werk?",["Altijd laden op verboden plekken","Veilig en toegestaan laden; planning maken","Alleen laden als klant in auto zit"],1),
    q(18,"Taxi-uitrusting","Wat is het meest logisch om standaard aan boord te hebben?",["Alleen snoepjes","Basisveiligheidsmiddelen (bijv. gevarendriehoek/hesje waar vereist)","Alleen parfum"],1),
    q(19,"EHBO","Waarom is EHBO-set nuttig in taxiwerk?",["Voor decoratie","Bij kleine incidenten kan het helpen tot hulp er is","Alleen voor de keuring"],1),
    q(20,"Brandblusser","Wat is juist als je een brandblusser hebt?",["Nooit controleren","Zorg dat die bereikbaar en binnen datum is","Altijd onder bagage leggen"],1),

    q(21,"Deuren","Wat is het risico van een deur die niet goed sluit?",["Alleen lawaai","Onveilig voor passagiers en verkeersgevaar","Geen risico bij lage snelheid"],1),
    q(22,"Kinderzitje","Wanneer is het professioneel om over kinderbeveiliging na te denken?",["Pas als politie vraagt","Vooraf; veiligheid en regels gaan voor","Nooit, klant regelt het"],1),
    q(23,"Bagageruimte","Wat is het beste met zware bagage in kofferbak?",["Los neergooien","Stabiel plaatsen zodat het niet kan schuiven","Op de hoedenplank leggen"],1),
    q(24,"Interieur","Waarom is een schoon interieur belangrijk?",["Alleen voor Instagram","Hygiëne, representatie en klantbeleving","Alleen voor de keuring"],1),
    q(25,"Geurtjes","Klant klaagt over sterke geur. Wat is professioneel?",["Zeggen: wen er maar aan","Rustig oplossen (ventilatie/neutraler) en professioneel blijven","Boos worden"],1),

    q(26,"Ruiten ontwasemen","Wat is het beste bij beslagen ramen?",["Doorrijden met klein kiertje","Ontwasemen/ventilatie aan en pas veilig rijden","Met doekje tijdens rijden wrijven"],1),
    q(27,"Spiegels","Wanneer stel je spiegels het best af?",["Tijdens druk verkeer","Voor vertrek of wanneer je veilig stilstaat","In een bocht"],1),
    q(28,"Zitpositie","Waarom is goede zitpositie belangrijk?",["Voor stoer uiterlijk","Controle over voertuig en minder vermoeidheid","Alleen voor foto’s"],1),
    q(29,"Geluid","Auto maakt plots een hard metaalachtig geluid. Wat is het beste?",["Radio harder","Veilig stoppen en laten controleren","Doorrijden tot einde dienst"],1),
    q(30,"Schade","Je ontdekt nieuwe schade aan je taxi vóór dienst. Wat doe je professioneel?",["Negeer","Melden/registreren volgens bedrijfsprocedure","Alleen foto posten"],1),

    q(31,"Ruiten/sterretje","Sterretje in voorruit in je zichtveld. Wat is verstandig?",["Niets, hoort erbij","Laten beoordelen/repareren; zicht en veiligheid","Tape erover en rijden"],1),
    q(32,"Verlichting binnen","Waarom is interieurverlichting relevant?",["Alleen gezellig","Kan helpen bij veilig instappen/uitstappen en vinden van spullen","Nooit gebruiken"],1),
    q(33,"Slijtage","Wat is juist over preventief onderhoud?",["Wachten tot iets kapot is","Voorkomt uitval en verhoogt veiligheid","Alleen nodig bij oude auto"],1),
    q(34,"Bandprofiel","Waarom is voldoende profiel belangrijk?",["Alleen voor snelheid","Grip en remweg, vooral bij regen","Alleen voor comfort"],1),
    q(35,"Sneeuw/ijs","Wat is het beste uitgangspunt bij gladheid?",["Zelfde rijstijl","Rustiger rijden, meer afstand en voertuig in orde","Harder rijden zodat je erdoor bent"],1),

    q(36,"Ruitensproeier","Ruitensproeier werkt niet en ruit is vies. Wat doe je?",["Negeer","Eerst oplossen/ bijvullen; zicht is veiligheid","Alleen achterruit sproeien"],1),
    q(37,"Lamp vervangen","Een dimlicht is kapot. Wat is het meest professioneel?",["Alleen bij nacht fixen","Z.s.m. vervangen/regelen voordat je veilig kunt rijden","Plakband op de koplamp"],1),
    q(38,"Waarschuwing banden","Bandenspanningsmelding (TPMS) gaat aan. Wat doe je?",["Negeren","Stop veilig en controleer/laat controleren","Reset en doorrijden zonder check"],1),
    q(39,"Passagiersveiligheid","Wat is het meest professionele vóór vertrek met passagiers?",["Direct optrekken","Korte check: iedereen veilig zit, deuren dicht, gordels indien nodig","Eerst appje sturen"],1),
    q(40,"Samenvatting","Wat is de kern van ‘taxiwaardig voertuig’?",["Alleen netjes gewassen","Veilig, betrouwbaar, correct onderhouden en representatief","Alleen luxe merk"],1),

  ]
};

  /* =========================
   TAXI EXAMEN 4
   Onderwerp: Rij- & rusttijden / fitheid / vermoeidheid / veilig plannen
   ========================= */

const TAXI_EXAMEN_4 = {
  id: "taxi-examen-4",
  title: "Taxi Examen 4 – Rij- en rusttijden",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    q(1,"Vermoeidheid","Wat is vaak een vroeg signaal van vermoeidheid tijdens rijden?",["Je hoort de radio beter","Veel gapen en minder focus","Je ziet scherper"],1),
    q(2,"Vermoeidheid","Wat is de veiligste eerste stap als je merkt dat je slaperig wordt?",["Nog snel één rit afmaken","Zo snel mogelijk veilig pauzeren","Harder rijden zodat je sneller klaar bent"],1),
    q(3,"Vermoeidheid","Waarom is ‘even doorbijten’ gevaarlijk?",["Omdat klanten dat niet leuk vinden","Omdat reactietijd en aandacht snel verslechteren","Omdat je dan minder fooi krijgt"],1),
    q(4,"Pauze","Wat is een verstandig moment om pauze te nemen?",["Alleen als je echt bijna in slaap valt","Bij de eerste duidelijke vermoeidheidssignalen","Alleen als je geen ritten hebt"],1),
    q(5,"Pauzeplek","Wat is de beste plek voor een pauze?",["Op de vluchtstrook","Op een veilige, toegestane plek (parkeerplaats/terrein)","Midden op een rotonde"],1),

    q(6,"Concentratie","Welke situatie vraagt extra rust/alertheid?",["Recht stuk weg met weinig verkeer","Druk stadsverkeer met veel prikkels","Stilstaan bij rood licht"],1),
    q(7,"Nachtwerk","Wat is een typisch risico bij nachtwerk?",["Meer zicht","Hoger risico op microslaap","Kortere remweg"],1),
    q(8,"Nachtwerk","Wat helpt het meest om ’s nachts veilig te blijven?",["Alleen energiedrank","Pauzes plannen en alert blijven op signalen","Ramen dicht en warmte hoog"],1),
    q(9,"Microslaap","Wat kan microslaap betekenen?",["Je knippert langer en ‘mist’ seconden","Je rijdt automatisch perfect","Je wordt ineens super gefocust"],0),
    q(10,"Microslaap","Wat is juist als je vermoedt dat microslaap dreigt?",["Het gaat vanzelf over","Direct stoppen en rusten","Harder muziek en door"],1),

    q(11,"Planning","Waarom is planning belangrijk voor veilig taxiwerk?",["Voor meer discussies","Om stress en haast te verminderen","Om altijd de langste route te kiezen"],1),
    q(12,"Planning","Je loopt vertraging op. Wat is de beste keuze?",["Regels overtreden om in te halen","Rustig blijven, veilig rijden en zo nodig communiceren","Boos worden op andere weggebruikers"],1),
    q(13,"Haast","Wat is het grootste gevaar van ‘haast-rijden’?",["Je rijdt zuiniger","Meer fouten, minder overzicht en meer risico","Je maakt minder stops"],1),
    q(14,"Stress","Wat is een goede manier om stress te verlagen tijdens werk?",["Meer appen met collega’s","Rustig ademhalen, pauze pakken en prioriteit geven aan veiligheid","Sneller rijden zodat het voorbij is"],1),
    q(15,"Stress","Welke keuze is het meest professioneel bij hoge werkdruk?",["Veiligheid blijft altijd boven snelheid","Altijd alles aannemen","Nooit pauzeren"],0),

    q(16,"Gezondheid","Wat helpt het meest tegen ‘inzakkers’ tijdens lange diensten?",["Alleen suiker","Regelmatig water drinken en licht/gezond eten","Geen eten en door"],1),
    q(17,"Gezondheid","Waarom is voldoende drinken belangrijk?",["Voor betere radio","Voor concentratie en alertheid","Alleen voor de klant"],1),
    q(18,"Medicatie","Wat is verstandig bij medicatie die slaperigheid kan veroorzaken?",["Doorrijden, je went eraan","Niet rijden / eerst advies volgen en veiligheid voorop","Dubbele koffie en rijden"],1),
    q(19,"Alcohol/drugs","Waarom is ‘fit en nuchter’ essentieel?",["Voor marketing","Voor verkeersveiligheid en verantwoordelijkheid","Voor een schonere auto"],1),
    q(20,"Zelfcheck","Welke zelfcheck is het meest nuttig vóór je start?",["Of je telefoon vol is","Of je uitgerust en scherp bent","Of je playlist klopt"],1),

    q(21,"Rijstijl","Wat is de beste rijstijl bij verminderde alertheid?",["Sportief en snel","Rustig, voorspelbaar, meer afstand","Kort op je voorganger"],1),
    q(22,"Afstand","Waarom helpt extra volgafstand bij vermoeidheid?",["Omdat je dan harder mag","Je krijgt meer tijd om te reageren","Omdat je sneller aankomt"],1),
    q(23,"Rit aannemen","Je voelt je te moe voor nog een rit. Wat is het beste?",["Toch aannemen voor de omzet","Niet aannemen; veiligheid gaat voor","Aannemen en halverwege stoppen op rijbaan"],1),
    q(24,"Pauze-inhoud","Wat is beter tijdens een pauze om alert te worden?",["Even bewegen en frisse lucht","Blijven zitten en scrollen","Warm eten en meteen door"],0),
    q(25,"Pauzeduur","Wat is een verstandig uitgangspunt bij vermoeidheid?",["Korte pauze kan al helpen, maar alleen als je daarna weer echt fit bent","Altijd 30 seconden is genoeg","Nooit pauzeren want dat kost tijd"],0),

    q(26,"Slaap","Wat is het risico van te weinig slaap meerdere dagen achter elkaar?",["Je went eraan","Cumulatieve vermoeidheid en slechtere prestaties","Je wordt juist beter"],1),
    q(27,"Slaap","Wat is een signaal dat je niet fit genoeg bent om te rijden?",["Je bent wat stiller","Je merkt moeite met focus/ogengevoel zwaar","Je hebt zin in koffie"],1),
    q(28,"Rustmoment","Wanneer is een rustmoment extra belangrijk?",["Na een bijna-incident of schrikmoment","Alleen als klant klaagt","Alleen bij regen"],0),
    q(29,"Schrikmoment","Na een schrikmoment (bijna-botsing): wat is beste aanpak?",["Doorrijden en vergeten","Even veilig stoppen/ademhalen en pas verder als rustig","Boos achtervolgen"],1),
    q(30,"Agressie van buitenaf","Andere weggebruikers provoceren. Wat is het beste?",["Terug provoceren","Rustig blijven en afstand houden","Direct vol gas ernaast"],1),

    q(31,"Telefoon/afleiding","Waarom is afleiding extra gevaarlijk bij vermoeidheid?",["Omdat je dan beter oplet","Omdat je aandacht al beperkt is en sneller wegvalt","Omdat je dan zuiniger rijdt"],1),
    q(32,"Telefoon/afleiding","Wat is de veiligste regel voor handelingen op je telefoon?",["Snel tijdens rijden","Alleen als je veilig stilstaat","Alleen op snelweg"],1),
    q(33,"Multitasken","Wat is juist over multitasken tijdens rijden?",["Het gaat prima als je ervaring hebt","Het verhoogt fouten en verlaagt aandacht","Het maakt je sneller"],1),
    q(34,"Routekeuze","Waarom kan onbekende route extra vermoeiend zijn?",["Omdat je minder hoeft te denken","Meer mentale belasting door zoeken/anticiperen","Omdat je dan sneller rijdt"],1),
    q(35,"Navi","Wat is verstandig als navigatie je blijft herberekenen en je onrustig wordt?",["Blijven staren op scherm","Veilig pauzeren en route opnieuw bepalen","Harder rijden"],1),

    q(36,"Weer","Welke omstandigheden verhogen vermoeidheidsbelasting?",["Heldere dag, rustige weg","Regen/donker/drukke stad","Korte rit in woonwijk"],1),
    q(37,"Weer","Wat is de beste aanpassing bij slecht weer en lange dienst?",["Zelfde tempo","Meer afstand, rustiger rijden en eerder pauzeren","Sneller rijden zodat je klaar bent"],1),
    q(38,"Einde dienst","Wat is het beste uitgangspunt voor ‘einde dienst’?",["Doorgaan tot je omvalt","Stoppen op tijd zodat je fit blijft en veilig thuiskomt","Altijd nog één extra rit"],1),
    q(39,"Professioneel","Wat is professioneel als je merkt dat je grenzen bereikt?",["Grenzen negeren","Grenzen herkennen en veilig handelen (pauze/stop)","Klanten de schuld geven"],1),
    q(40,"Samenvatting","Wat is de kern van veilig werken bij taxi?",["Altijd doorgaan voor omzet","Fit blijven: plannen, pauzeren, signalen serieus nemen","Snel rijden om tijd te winnen"],1),

  ]
};

  /* =========================
   TAXI EXAMEN 5
   Onderwerp: Klachten / consument / communicatie / professionaliteit
   ========================= */

const TAXI_EXAMEN_5 = {
  id: "taxi-examen-5",
  title: "Taxi Examen 5 – Klachten & professionaliteit",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    q(1,"Klantcontact","Wat is een professioneel begin van het contact met een klant?",["Direct wegrijden zonder iets te zeggen","Groeten en bestemming kort bevestigen","Eerst je telefoon checken"],1),
    q(2,"Klantcontact","Waarom is bestemming bevestigen belangrijk?",["Voor extra fooi","Om misverstanden en klachten te voorkomen","Omdat het verplicht is bij elke straat"],1),
    q(3,"Communicatie","Wat is de beste stijl van communiceren met klanten?",["Kortaf en dominant","Duidelijk, rustig en respectvol","Sarcastisch zodat het grappig is"],1),
    q(4,"Communicatie","Klant praat door jou heen en wordt geïrriteerd. Wat is het beste?",["Harder praten","Rustig blijven en in korte zinnen communiceren","De klant negeren en expres omrijden"],1),
    q(5,"Respect","Welke uitspraak is het meest professioneel?",["‘Als het je niet bevalt, stap je uit.’","‘Ik begrijp het; laten we kijken naar een oplossing.’","‘Jij snapt het verkeer niet.’"],1),

    q(6,"Klacht","Klant zegt: ‘Ik wil een klacht indienen.’ Wat doe je?",["Boos worden","Rustig uitleggen hoe dat kan volgens jouw procedure/bedrijf","Zeggen dat klachten nergens toe leiden"],1),
    q(7,"Klacht","Wat is het beste doel tijdens een klachtgesprek?",["Gelijk krijgen","De-escaleren en duidelijkheid geven","Zo snel mogelijk ophangen"],1),
    q(8,"Klacht","Wat is de slechtste reactie bij een klacht?",["Luisteren en samenvatten","Verdedigen en de klant aanvallen","Vragen wat er precies mis ging"],1),
    q(9,"Klacht","Wat helpt het meest om een conflict te kalmeren?",["Klant onderbreken","Rustige toon en erkenning van gevoel","Klant belachelijk maken"],1),
    q(10,"Klacht","Klant klaagt over jouw rijstijl. Wat is het beste?",["Zeggen dat jij altijd gelijk hebt","Rustig uitleggen dat veiligheid voorop staat en je daarop stuurt","Extra hard optrekken om te tonen dat je controle hebt"],1),

    q(11,"Service","Klant wil muziek zachter. Wat is professioneel?",["Negeren","Aanpassen als het kan zonder afleiding","Muziek harder zetten"],1),
    q(12,"Service","Klant wil stilte. Wat is het beste?",["Blijven praten","Vragen of klant liever stilte heeft en dat respecteren","Klant uitlachen"],1),
    q(13,"Service","Klant wil dat je de airco uitzet maar het beslaat. Wat doe je?",["Airco uitzetten en niets zeggen","Uitleggen dat zicht en veiligheid belangrijk zijn en een compromis zoeken","Ramen dicht en doorrijden zonder zicht"],1),
    q(14,"Service","Wat hoort bij een representatieve taxi?",["Rommel is oké","Schoon en netjes interieur","Alleen een groot logo"],1),
    q(15,"Service","Wat is het beste als een klant een kwetsbare/passieve houding heeft?",["Snel en hard rijden zodat het klaar is","Rustig en comfortabel rijden en duidelijk communiceren","De klant negeren"],1),

    q(16,"Grenzen","Klant vraagt om onredelijke eisen (bijv. schreeuwt). Wat is het beste?",["Alles toestaan","Rustig grenzen stellen en professioneel blijven","Terugschreeuwen"],1),
    q(17,"Grenzen","Wanneer is ‘stoppen met de rit’ het meest verdedigbaar?",["Bij elke kleine irritatie","Als veiligheid of orde ernstig in gevaar komt en je veilig kunt stoppen","Als klant geen fooi geeft"],1),
    q(18,"Grenzen","Wat is een professionele zin bij grens stellen?",["‘Hou je mond.’","‘Ik wil je helpen, maar we houden het respectvol.’","‘Ik rij expres om.’"],1),
    q(19,"Conflicten","Klant dreigt met een slechte review. Wat is beste houding?",["Bang worden en alles toestaan","Rustig blijven en correct handelen; review is geen reden om regels te breken","Discussie op social media starten"],1),
    q(20,"Conflicten","Wat is vaak de snelste manier om escalatie te voorkomen?",["De klant vernederen","Rustig luisteren en opties geven","Klant laten merken dat jij sterker bent"],1),

    q(21,"Route/verwachting","Klant zegt: ‘Dit duurt te lang.’ Wat is professioneel?",["‘Niet zeuren.’","Uitleggen (drukte/omleiding) en aangeven dat je veilig rijdt","Gas geven en door rood"],1),
    q(22,"Route/verwachting","Klant denkt dat jij expres omrijdt. Wat is het beste?",["Boos worden","Feitelijk uitleggen (route/drukte) en evt. alternatief bespreken","Klant uitzetten op de snelweg"],1),
    q(23,"Transparantie","Wat helpt het meest tegen discussies onderweg?",["Zwijgen tot aankomst","Vooraf duidelijkheid en onderweg korte updates bij wijzigingen","Altijd zeggen dat alles duur is"],1),
    q(24,"Transparantie","Wat is professioneel als je iets niet zeker weet (bestemming/ingang)?",["Gokken","Even vragen/confirmatie bij klant","Doorrijden en hopen"],1),
    q(25,"Transparantie","Wat is een goede manier om misverstanden te voorkomen bij ophalen?",["Nooit bellen","Kort bevestigen: naam/locatie/ingang","Meteen wegrijden als klant niet direct klaar staat"],1),

    q(26,"Klanttypes","Wat is het beste bij een klant die veel vragen stelt?",["Irriteren en kortaf zijn","Rustig en duidelijk antwoord geven, zonder afleiding","Alle vragen negeren"],1),
    q(27,"Klanttypes","Een klant is zenuwachtig (bijv. ziekenhuis). Wat is professioneel?",["Hard remmen en sportief rijden","Rustig, voorspelbaar rijden en geruststellen waar passend","Veel grappen maken over ongeluk"],0),
    q(28,"Klanttypes","Klant is dronken maar rustig. Wat is het beste?",["Altijd ruzie zoeken","Rustig blijven en grenzen bewaken; veiligheid en hygiëne meewegen","De klant filmen"],1),
    q(29,"Klanttypes","Klant heeft haast voor trein/vlucht. Wat is professioneel?",["Regels overtreden om te ‘helpen’","Uitleggen dat je veilig en volgens regels rijdt","Snelste weg via trottoir nemen"],1),
    q(30,"Klanttypes","Klant is slechthorend. Wat helpt het meest?",["Zachter praten en wegkijken","Duidelijk articuleren en eventueel laten tonen/opschrijven","Snel praten zodat je klaar bent"],1),

    q(31,"Professioneel gedrag","Wat is ongewenst gedrag tijdens een rit?",["Rustig blijven","Sarcastische opmerkingen maken","Kort informeren bij vertraging"],1),
    q(32,"Professioneel gedrag","Wat is het beste als jij een fout maakt (bijv. verkeerde afslag) en klant merkt het?",["Ontkennen","Rustig erkennen en de beste veilige oplossing kiezen","Boos worden dat klant oplet"],1),
    q(33,"Integriteit","Wat is integriteit in taxiwerk?",["Doen alsof je niets hoort","Eerlijk, betrouwbaar en respectvol handelen","Altijd gelijk willen krijgen"],1),
    q(34,"Integriteit","Klant vraagt je om ‘even’ iets illegaals te doen (niet gevaar-gerelateerd). Wat is best?",["Toch doen","Weigeren en professioneel uitleggen","Alleen doen als niemand kijkt"],1),
    q(35,"Samenwerken","Wat is het beste bij misverstand tussen collega’s over een klant?",["Ruzie maken waar klant bij is","Rustig oplossen buiten het zicht van de klant","De klant laten kiezen wie gelijk heeft"],1),

    q(36,"Nazorg","Wat is professioneel aan het einde van de rit?",["Zonder kijken wegrijden","Klant kort bedanken en controleren of alles mee is","Klant vragen om review voordat hij uitstapt"],1),
    q(37,"Nazorg","Klant laat iets liggen en belt later. Wat is beste houding?",["Niet opnemen","Helpen volgens procedure en rustig blijven","Zeggen dat het niet jouw probleem is"],1),
    q(38,"Beeldvorming","Wat beïnvloedt klantbeleving het meest?",["Alleen snelheid","Houding, communicatie, comfort en veiligheid","Alleen het merk auto"],1),
    q(39,"Beeldvorming","Wat is het beste antwoord op: ‘Jij bent onvriendelijk.’?",["‘Dat klopt.’","‘Het spijt me dat het zo overkomt, wat kan ik beter doen?’","‘Dan loop je maar.’"],1),
    q(40,"Samenvatting","Wat is de kern van professioneel klantcontact?",["Klant altijd gelijk geven","Respectvol, duidelijk, rustig en oplossingsgericht blijven","Klant onder druk zetten"],1),

  ]
};

  /* =========================
   TAXI EXAMEN 6
   Onderwerp: Halen/brengen & bijzondere situaties (veilig stoppen/instappen/uitstappen/drukke zones)
   ========================= */

const TAXI_EXAMEN_6 = {
  id: "taxi-examen-6",
  title: "Taxi Examen 6 – Halen/brengen & bijzondere situaties",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    q(1,"Instappen","Wat is het veiligste uitgangspunt bij instappen langs een drukke weg?",["Altijd direct bij de klant stoppen","Alleen stoppen waar instappen veilig kan","Stoppen op de rijbaan met alarmlichten is altijd prima"],1),
    q(2,"Instappen","Klant zwaait midden op de rijbaan. Wat doe je?",["Direct midden op de rijbaan stoppen","Doorrijden naar een veilige stopplek en klant daarheen laten komen","Snel keren op de weg"],1),
    q(3,"Instappen","Wat is een goede controle vóór vertrek na instappen?",["Direct optrekken","Kijken of iedereen veilig zit en deuren dicht zijn","Alleen de muziek aanzetten"],1),
    q(4,"Instappen","Waar laat je een klant het liefst instappen in een smalle straat?",["Op een plek met ruimte en overzicht","In een bocht","Voor een uitrit"],0),
    q(5,"Instappen","Klant wil instappen aan de ‘verkeerde’ kant (rijbaanzijde). Wat is best?",["Toestaan zonder meer","Klant naar veilige zijde begeleiden/vragen als dat kan","Hard optrekken zodat hij snel instapt"],1),

    q(6,"Uitstappen","Wat is het veiligste uitgangspunt bij uitstappen in stadsverkeer?",["Altijd exact voor de deur, ook al is het krap","Een veilige, toegestane plek kiezen","Midden op de rijbaan stoppen"],1),
    q(7,"Uitstappen","Klant wil uitstappen op een fietsstrook. Wat doe je?",["Toch laten uitstappen","Doorrijden naar een plek waar uitstappen veilig kan","Deur alvast openen zodat het snel gaat"],1),
    q(8,"Uitstappen","Wat is de beste instructie aan een klant bij uitstappen naast fietsers?",["‘Snel eruit!’","‘Wacht even tot ik zeg dat het veilig is.’","‘Kijk maar niet, ik let wel.’"],1),
    q(9,"Uitstappen","Wat is een goede handeling om ‘dooring’ te voorkomen?",["Deur snel openzwaaien","Spiegels checken en schoudercheck vóór openen","Alleen de claxon gebruiken"],1),
    q(10,"Uitstappen","Klant wil uitstappen direct na een kruispunt. Wat is best?",["Stoppen waar het uitkomt","Verder rijden naar een veilige plek met overzicht","Midden op het kruispunt stoppen"],1),

    q(11,"Drukke zones","Wat is het beste gedrag in een drukke ophaalzone (bijv. station)?",["Dubbel parkeren tot klant er is","Doorstroming respecteren en kort stoppen waar het mag","Op de taxibaan gaan staan als het sneller is"],1),
    q(12,"Drukke zones","Klant is nog niet klaar bij een kort-stop zone. Wat doe je?",["Blijven wachten en blokkeren","Doorrijden en opnieuw aansluiten/afspreken","Op de stoep parkeren"],1),
    q(13,"Drukke zones","Wat is het beste als je de klant niet kunt vinden op de ophaallocatie?",["Direct annuleren","Kort contact zoeken en duidelijke ontmoetingsplek afspreken","Rondjes rijden zonder plan"],1),
    q(14,"Drukke zones","Waarom is voorspelbaar rijden extra belangrijk in drukke zones?",["Omdat je dan sneller bent","Omdat er veel voetgangers/fietsers zijn","Omdat je anders geen fooi krijgt"],1),
    q(15,"Drukke zones","Je nadert een druk zebrapadgebied. Wat is het best?",["Doorrijden, taxi heeft voorrang","Snelheid aanpassen en extra alert zijn","Toeteren zodat iedereen stopt"],1),

    q(16,"Stoppen/parkeren","Wat is het beste als je moet wachten op een klant?",["Wachten op een toegestane plek zonder hinder","Wachten op een kruispunt","Wachten op een fietspad"],0),
    q(17,"Stoppen/parkeren","Wat is het veiligste bij kort laden/lossen?",["Midden op de rijbaan met alarmlichten","Een plek kiezen waar je zicht en ruimte hebt","In een bocht stoppen"],1),
    q(18,"Stoppen/parkeren","Waarom is ‘alleen even’ dubbel parkeren vaak risicovol?",["Omdat het altijd beboet wordt","Omdat het zicht en doorstroming belemmert","Omdat klanten dat niet leuk vinden"],1),
    q(19,"Stoppen/parkeren","Klant wil dat je wacht met motor draaiend in een afgesloten straat. Wat doe je?",["Altijd doen","Veilig en toegestaan parkeren; anders alternatief afspreken","Op de stoep gaan staan"],1),
    q(20,"Stoppen/parkeren","Wat is de beste keuze als je geen legale stopplek ziet?",["Toch stoppen","Doorrijden naar eerstvolgende legale/veilige plek","Stoppen op de rijbaan en hopen"],1),

    q(21,"Bijzondere passagiers","Klant heeft veel boodschappen. Wat is best bij in-/uitladen?",["Haasten en gooien","Rustig helpen waar redelijk en veilig","De klant alles zelf laten doen als straf"],1),
    q(22,"Bijzondere passagiers","Een klant met beperkte mobiliteit stapt langzaam in. Wat is best?",["Onrustig worden","Geduld, hulp waar veilig, en tijd nemen","Hard optrekken zodra deur bijna dicht is"],1),
    q(23,"Bijzondere passagiers","Klant reist met breekbare spullen. Wat is best?",["Hard rijden zodat het snel klaar is","Rustig en soepel rijden, spullen stabiel plaatsen","Spullen op schoot laten zonder gordel"],1),
    q(24,"Bijzondere passagiers","Klant is zichtbaar geëmotioneerd. Wat is professioneel?",["Grappen maken","Rustig blijven en geen onnodige druk zetten","Direct vragen om review"],1),
    q(25,"Bijzondere passagiers","Kinderen stappen in en rennen om de auto. Wat is best?",["Direct wegrijden","Eerst zorgen dat iedereen veilig zit en omgeving vrij is","Toeteren en gas geven"],1),

    q(26,"Weersituaties","Wat is het beste bij hevige regen tijdens halen/brengen?",["Zelfde aanpak als altijd","Extra tijd nemen voor instap/uitstap en zichtbaarheid","Sneller rijden zodat je uit de regen bent"],1),
    q(27,"Weersituaties","Bij gladheid moet je stoppen om klant uit te laten stappen. Wat is best?",["Op helling stoppen","Een vlakke, stabiele plek kiezen","In bocht stoppen"],1),
    q(28,"Weersituaties","Waarom zijn natte stoepen/curbs extra risicovol bij uitstappen?",["Omdat ze mooier glimmen","Omdat uitglijden/valrisico groter is","Omdat het geluid harder is"],1),
    q(29,"Weersituaties","Klant wil uitstappen in een plas naast de stoeprand. Wat doe je?",["Toch laten uitstappen","Een drogere/veiligere plek zoeken indien mogelijk","De klant laten springen"],1),
    q(30,"Weersituaties","Wat is een goede keuze bij mist in een ophaalzone?",["Sneller rijden om door te kunnen","Langzamer, meer afstand en extra alert op voetgangers","Groot licht in de stad aanzetten en toeteren"],1),

    q(31,"Routepraktijk","Je navigatie leidt je een drukke voetgangerszone in. Wat is best?",["Toch doorrijden","Alternatieve route kiezen die past bij de situatie","Stoppen en wachten tot het leeg is midden in de zone"],1),
    q(32,"Routepraktijk","Klant wil ‘zo dicht mogelijk’ bij ingang in een smalle straat. Wat doe je?",["Exact voor de deur stoppen, ongeacht risico","Uitleggen en kiezen voor veilig uitstappen op korte loopafstand","Inhalen en dwars parkeren"],1),
    q(33,"Routepraktijk","Je mist een afslag naar de bestemming. Wat is best?",["Direct abrupt terugsturen","Rustig doorrijden en via veilige route corrigeren","Midden op de weg achteruit rijden"],1),
    q(34,"Routepraktijk","Waarom is het handig om bij drukte een ‘meeting point’ af te spreken?",["Omdat het altijd gratis is","Omdat het chaos voorkomt en tijd bespaart","Omdat je dan geen gordel hoeft"],1),
    q(35,"Routepraktijk","Klant zegt: ‘Ik sta bij de hoofdingang’ maar er zijn meerdere ingangen. Wat doe je?",["Gokken","Vragen om herkenningspunt of exacte ingang","Boos worden dat klant vaag is"],1),

    q(36,"Veiligheid algemeen","Wat is de beste check vóór je een deur laat openen in drukte?",["Niets, klant ziet zelf wel","Spiegels/omgeving checken en zo nodig waarschuwen","Gas geven zodat fietsers stoppen"],1),
    q(37,"Veiligheid algemeen","Wat doe je als iemand bijna de deur open trekt terwijl er fietsers aankomen?",["Laat maar gebeuren","Waarschuwen en deur dicht houden tot het veilig is","De deur juist extra ver open zetten"],1),
    q(38,"Veiligheid algemeen","Klant vraagt ‘kun je hier even snel keren?’ terwijl het onoverzichtelijk is. Wat doe je?",["Doen, want klant vraagt","Weigeren en veilige plek zoeken om te keren of route volgen","Keren met hoge snelheid"],1),
    q(39,"Veiligheid algemeen","Waarom is ‘korte stop’ bij een rotonde extra risicovol?",["Omdat rotondes altijd leeg zijn","Omdat verkeer van meerdere richtingen komt en zicht wisselt","Omdat je daar altijd gratis mag staan"],1),
    q(40,"Samenvatting","Wat is de beste kernregel bij halen/brengen?",["Altijd precies voor de deur","Veiligheid en overzicht gaan vóór gemak","Snelheid is belangrijker dan veiligheid"],1),

  ]
};

  /* =========================
   TAXI EXAMEN 7
   Onderwerp: Ondernemen, planning & kwaliteit
   ========================= */

const TAXI_EXAMEN_7 = {
  id: "taxi-examen-7",
  title: "Taxi Examen 7 – Onderneming & kwaliteit",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    q(1,"Planning","Waarom is een realistische planning belangrijk?",["Voor hogere snelheid","Om afspraken na te komen en stress te voorkomen","Alleen voor de centrale"],1),
    q(2,"Planning","Je ziet dat een rit waarschijnlijk te laat aankomt. Wat is professioneel?",["Niets zeggen","Tijdig klant informeren","Harder rijden"],1),
    q(3,"Planning","Wat helpt om piekmomenten beter aan te kunnen?",["Alles aannemen","Vooruit plannen en prioriteiten stellen","Rusten overslaan"],1),
    q(4,"Planning","Waarom is buffertijd tussen ritten verstandig?",["Voor extra omzet","Voor onvoorziene vertragingen","Alleen voor luxe ritten"],1),
    q(5,"Planning","Wat is een teken van slechte planning?",["Rust tijdens dienst","Structurele haast en stress","Tijd overhouden"],1),

    q(6,"Centrale","Wat is het voordeel van goed samenwerken met de centrale?",["Meer boetes","Duidelijke opdrachten en minder misverstanden","Minder verantwoordelijkheid"],1),
    q(7,"Centrale","Je ontvangt onduidelijke instructies. Wat doe je?",["Gokken","Vragen om verduidelijking","Rit weigeren zonder uitleg"],1),
    q(8,"Centrale","Waarom is terugkoppeling na een probleemrit belangrijk?",["Voor roddels","Voor kwaliteitsverbetering","Dat is verplicht altijd"],1),
    q(9,"Centrale","Wat is professioneel bij een fout van de centrale?",["Boos reageren","Rustig melden en meedenken","Op social media klagen"],1),
    q(10,"Centrale","Wanneer neem je contact op met de centrale?",["Alleen bij nood","Bij relevante wijzigingen of problemen","Bij elke kleine twijfel"],1),

    q(11,"Kwaliteit","Wat draagt het meest bij aan constante kwaliteit?",["Snelheid","Vaste werkwijze en aandacht","Wisselende aanpak"],1),
    q(12,"Kwaliteit","Waarom is representativiteit belangrijk?",["Voor uiterlijk alleen","Voor vertrouwen en professionaliteit","Alleen voor reviews"],1),
    q(13,"Kwaliteit","Wat is een voorbeeld van kwaliteitsbewaking?",["Alles hetzelfde laten","Regelmatig reflecteren op eigen werk","Alleen luisteren naar klachten"],1),
    q(14,"Kwaliteit","Hoe ga je om met feedback van klanten?",["Negeren","Serieus nemen en beoordelen","Persoonlijk opvatten"],1),
    q(15,"Kwaliteit","Wat is het risico van ‘even snel’ oplossingen?",["Meer omzet","Kwaliteitsverlies en fouten","Geen risico"],1),

    q(16,"Ondernemen","Wat hoort bij professioneel ondernemerschap?",["Alleen rijden","Vooruitdenken en verantwoordelijkheid nemen","Alleen korte ritten"],1),
    q(17,"Ondernemen","Waarom is klantbehoud belangrijk?",["Voor reclame","Terugkerende omzet en reputatie","Alleen voor grote bedrijven"],1),
    q(18,"Ondernemen","Wat is een gezonde kijk op winst?",["Maximaliseren per rit","Balans tussen winst, kwaliteit en veiligheid","Winst maakt niet uit"],1),
    q(19,"Ondernemen","Wat helpt bij lange werkdagen?",["Doorrijden zonder pauze","Energie goed verdelen","Extra cafeïne"],1),
    q(20,"Ondernemen","Waarom is zelfreflectie nuttig?",["Voor straf","Om jezelf te verbeteren","Omdat iedereen het doet"],1),

    q(21,"Reputatie","Wat beïnvloedt je reputatie het meest?",["Eén snelle rit","Consistent gedrag over tijd","Alleen online reviews"],1),
    q(22,"Reputatie","Hoe ga je om met een negatieve beoordeling?",["Terugschelden","Leren en professioneel reageren","Negeren altijd"],1),
    q(23,"Reputatie","Waarom zijn mond-tot-mond aanbevelingen waardevol?",["Ze kosten niets","Ze komen voort uit vertrouwen","Ze zijn verplicht"],1),
    q(24,"Reputatie","Wat schaadt reputatie het snelst?",["Een fout toegeven","Onprofessioneel gedrag","Langere wachttijd"],1),
    q(25,"Reputatie","Wat is een professionele reactie op onterechte kritiek?",["Discussie aangaan","Rustig blijven en feiten benoemen","Klant blokkeren"],1),

    q(26,"Administratie","Waarom is basisadministratie belangrijk?",["Voor belasting alleen","Voor overzicht en verantwoording","Alleen voor grote ritten"],1),
    q(27,"Administratie","Wat helpt fouten in administratie voorkomen?",["Uitstellen","Regelmatig bijhouden","Alles tegelijk doen"],1),
    q(28,"Administratie","Waarom is structuur belangrijk?",["Ziet er netjes uit","Bespaart tijd en fouten","Alleen voor controle"],1),
    q(29,"Administratie","Wat is een risico van rommelige administratie?",["Meer vrijheid","Stress en misverstanden","Sneller werken"],1),
    q(30,"Administratie","Wanneer is het beste moment om administratie bij te werken?",["Als het uitkomt","Regelmatig en gepland","Aan het einde van het jaar"],1),

    q(31,"Werkhouding","Wat hoort bij een professionele werkhouding?",["Altijd ja zeggen","Grenzen kennen en communiceren","Alles accepteren"],1),
    q(32,"Werkhouding","Waarom is duidelijk communiceren belangrijk?",["Voor discussie","Om verwachtingen te managen","Alleen bij problemen"],1),
    q(33,"Werkhouding","Wat is een teken van vakvolwassenheid?",["Geen fouten maken","Fouten herkennen en herstellen","Altijd gelijk hebben"],1),
    q(34,"Werkhouding","Hoe voorkom je mentale overbelasting?",["Meer werken","Balans zoeken en pauzes respecteren","Klachten negeren"],1),
    q(35,"Werkhouding","Wat helpt bij duurzame inzetbaarheid?",["Altijd nachtdiensten","Gezonde werkgewoonten","Alleen ervaring"],1),

    q(36,"Samenwerking","Waarom is respectvolle samenwerking belangrijk?",["Voor gezelligheid","Voor soepele dienstverlening","Alleen voor collega’s"],1),
    q(37,"Samenwerking","Wat doe je bij meningsverschil met collega?",["Escaleren","Rustig bespreken","Negeer en roddel"],1),
    q(38,"Samenwerking","Wat is het voordeel van duidelijke afspraken?",["Meer regels","Minder misverstanden","Minder vrijheid"],1),
    q(39,"Samenwerking","Waarom is betrouwbaarheid belangrijk?",["Voor imago","Voor vertrouwen bij klanten en partners","Alleen voor contracten"],1),
    q(40,"Samenvatting","Wat is de kern van professioneel ondernemerschap in taxiwerk?",["Zo veel mogelijk rijden","Kwaliteit, betrouwbaarheid en verantwoordelijkheid","Alleen winst"],1),

  ]
};

  /* =========================
   TAXI EXAMEN 8
   Onderwerp: Ethiek & professionele grenzen
   ========================= */

const TAXI_EXAMEN_8 = {
  id: "taxi-examen-8",
  title: "Taxi Examen 8 – Regels en gedrag",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    q(1,"Ethiek","Wat betekent professioneel handelen?",["Doen wat klant wil","Handelen volgens regels en normen","Snelste oplossing kiezen"],1),
    q(2,"Ethiek","Waarom zijn grenzen belangrijk in taxiwerk?",["Voor afstand","Voor veiligheid en duidelijkheid","Alleen juridisch"],1),
    q(3,"Ethiek","Wat doe je bij een verzoek dat niet mag?",["Toch doen","Uitleggen en weigeren","Negeren"],1),
    q(4,"Ethiek","Wat is het risico van ‘even helpen’ buiten de regels?",["Geen","Problemen voor jou en klant","Meer fooi"],1),
    q(5,"Ethiek","Wat hoort bij eerlijk taxiwerk?",["Altijd klant gelijk","Transparant en correct handelen","Creatief met regels"],1),

    q(6,"Grenzen","Klant vraagt om iets illegaals. Wat doe je?",["Meewerken","Duidelijk weigeren","Doen zonder praten"],1),
    q(7,"Grenzen","Waarom is consequent zijn belangrijk?",["Voor strengheid","Voor duidelijkheid en vertrouwen","Voor controle"],1),
    q(8,"Grenzen","Wat is een professionele manier van weigeren?",["Boos","Rustig en uitleg geven","Zonder reden"],1),
    q(9,"Grenzen","Wanneer wordt meebuigen onprofessioneel?",["Bij drukte","Als regels of veiligheid in gevaar komen","Bij lange rit"],1),
    q(10,"Grenzen","Wat helpt bij het stellen van grenzen?",["Discussie","Heldere communicatie","Onzekerheid"],1),

    q(11,"Lastige verzoeken","Klant wil sneller dan toegestaan. Wat doe je?",["Gas geven","Uitleggen dat dit niet kan","Negeren"],1),
    q(12,"Lastige verzoeken","Klant wil afwijken van afspraak. Wat is professioneel?",["Toestaan altijd","Bespreken en beoordelen","Direct weigeren"],1),
    q(13,"Lastige verzoeken","Wat is een valkuil bij lastige klanten?",["Te rustig blijven","Te veel toegeven","Luisteren"],1),
    q(14,"Lastige verzoeken","Wat helpt bij spanningsvolle situaties?",["Escaleren","Kalm blijven","Haast maken"],1),
    q(15,"Lastige verzoeken","Waarom is uitleg geven vaak effectief?",["Voor tijdrekken","Voor begrip en rust","Voor discussie"],1),

    q(16,"Keuzes","Wat is een professionele afweging?",["Wat snel is","Wat veilig en juist is","Wat winst oplevert"],1),
    q(17,"Keuzes","Waarom is nee zeggen soms nodig?",["Voor gemak","Om kwaliteit en veiligheid te bewaken","Om macht te tonen"],1),
    q(18,"Keuzes","Wat is een teken van sterke professionaliteit?",["Alles accepteren","Bewuste keuzes maken","Geen fouten maken"],1),
    q(19,"Keuzes","Hoe ga je om met twijfel?",["Negeren","Even stilstaan en beoordelen","Doorgaan"],1),
    q(20,"Keuzes","Wat helpt bij goede beslissingen?",["Stress","Ervaring en rust","Druk"],1),

    q(21,"Verantwoordelijkheid","Wie draagt verantwoordelijkheid tijdens de rit?",["Klant","Chauffeur","Centrale"],1),
    q(22,"Verantwoordelijkheid","Wat betekent verantwoordelijkheid nemen?",["Schuld vermijden","Bewust handelen","Alles vastleggen"],1),
    q(23,"Verantwoordelijkheid","Wanneer neem je extra verantwoordelijkheid?",["Nooit","Bij risico of onduidelijkheid","Alleen bij controle"],1),
    q(24,"Verantwoordelijkheid","Wat is het gevolg van verantwoordelijkheid ontwijken?",["Meer vrijheid","Onveilige situaties","Rust"],1),
    q(25,"Verantwoordelijkheid","Wat past bij verantwoord gedrag?",["Afwachten","Vooruitdenken","Afleiding"],1),

    q(26,"Communicatie","Wat helpt bij het uitleggen van een weigering?",["Korte toon","Rustige uitleg","Discussie"],1),
    q(27,"Communicatie","Wat moet je vermijden bij lastige gesprekken?",["Duidelijkheid","Emotioneel reageren","Luisteren"],1),
    q(28,"Communicatie","Waarom is respectvolle toon belangrijk?",["Voor imago","Voor de-escalatie","Voor snelheid"],1),
    q(29,"Communicatie","Wat doe je bij verbaal uitdagende klant?",["Terugdoen","Professioneel blijven","Negeren altijd"],1),
    q(30,"Communicatie","Wat helpt bij het bewaren van rust?",["Haast","Ademhalen en tempo verlagen","Discussie winnen"],1),

    q(31,"Morele druk","Klant probeert je onder druk te zetten. Wat doe je?",["Toegeven","Bij je professionele keuze blijven","Rit stoppen direct"],1),
    q(32,"Morele druk","Waarom is druk weerstaan belangrijk?",["Voor status","Voor veiligheid en integriteit","Voor tijd"],1),
    q(33,"Morele druk","Wat is een fout bij morele druk?",["Twijfelen","Grenzen loslaten","Uitleg geven"],1),
    q(34,"Morele druk","Wat helpt bij weerstand tegen druk?",["Onzekerheid","Zelfvertrouwen en regels kennen","Discussie"],1),
    q(35,"Morele druk","Wat is het effect van toegeven aan druk?",["Rust","Meer verwachtingen later","Tevreden klant"],1),

    q(36,"Zelfbewustzijn","Waarom is zelfbewustzijn belangrijk?",["Voor ego","Voor betere keuzes","Voor uitstraling"],1),
    q(37,"Zelfbewustzijn","Wat is een teken van professionele groei?",["Geen feedback","Leren van situaties","Alles weten"],1),
    q(38,"Zelfbewustzijn","Hoe ontwikkel je professionele stevigheid?",["Door toegeven","Door ervaring en reflectie","Door snelheid"],1),
    q(39,"Zelfbewustzijn","Wat helpt bij moeilijke beslissingen?",["Druk","Duidelijke waarden","Haast"],1),
    q(40,"Samenvatting","Wat is de kern van ethisch taxiwerk?",["Klant altijd gelijk","Juist handelen met respect en grenzen","Zo min mogelijk praten"],1),

  ]
};

  /* =========================
   TAXI EXAMEN 9
   Onderwerp: Bijzondere doelgroepen
   ========================= */

const TAXI_EXAMEN_9 = {
  id: "taxi-examen-9",
  title: "Taxi Examen 9 – Bijzondere doelgroepen",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    q(1,"Ouderen","Wat is belangrijk bij het vervoeren van ouderen?",["Snelheid","Rust en duidelijkheid","Strikte stilte"],1),
    q(2,"Ouderen","Waarom extra tijd nemen bij ouderen?",["Voor planning","Voor veiligheid en comfort","Voor administratie"],1),
    q(3,"Ouderen","Wat is onprofessioneel gedrag bij ouderen?",["Helpen","Haasten","Uitleg geven"],1),
    q(4,"Ouderen","Hoe communiceer je het beste met slechthorende klanten?",["Hard praten","Duidelijk en rustig spreken","Niet praten"],1),
    q(5,"Ouderen","Wat doe je als een oudere moeite heeft met instappen?",["Negeren","Helpen waar veilig mogelijk","Rijden"],1),

    q(6,"Kinderen","Wat is het belangrijkste bij vervoer van kinderen?",["Snel aankomen","Veiligheid","Rust"],1),
    q(7,"Kinderen","Mag je een kind vervoeren zonder juiste beveiliging?",["Ja","Nee","Alleen korte rit"],1),
    q(8,"Kinderen","Wie is verantwoordelijk voor veiligheid van het kind?",["Ouder","Chauffeur","Beide, maar chauffeur beslist of rit veilig is"],2),
    q(9,"Kinderen","Wat doe je bij twijfel over kinderzitje?",["Rijden","Weigeren tot het veilig is","Ouder laten beslissen"],1),
    q(10,"Kinderen","Wat is professioneel bij kinderen?",["Streng","Geduldig","Onverschillig"],1),

    q(11,"Toeristen","Wat hebben toeristen vaak nodig?",["Haast","Extra uitleg","Discussie"],1),
    q(12,"Toeristen","Hoe ga je om met taalbarrière?",["Negeren","Rustig communiceren en laten aanwijzen","Sneller rijden"],1),
    q(13,"Toeristen","Wat helpt bij onduidelijke bestemming?",["Gokken","Bestemming laten bevestigen","Doorrijden"],1),
    q(14,"Toeristen","Wat is professioneel bij toeristische vragen?",["Irritatie","Behulpzaam blijven","Doorverwijzen altijd"],1),
    q(15,"Toeristen","Waarom duidelijke uitleg over prijs?",["Voor discussie","Voor vertrouwen","Voor tijd"],1),

    q(16,"Beperking","Wat is belangrijk bij klanten met een beperking?",["Tempo","Respect en veiligheid","Strikte regels"],1),
    q(17,"Beperking","Hoe ga je om met rolstoel of hulpmiddel?",["Weigeren","Helpen waar veilig mogelijk","Zelf laten doen"],1),
    q(18,"Beperking","Wat is een professionele houding?",["Medelijden","Respectvol en gelijkwaardig","Afstandelijk"],1),
    q(19,"Beperking","Wat doe je als hulpmiddel niet veilig past?",["Toch meenemen","Rit weigeren of alternatief zoeken","Achterbank gebruiken"],1),
    q(20,"Beperking","Wat is belangrijkste uitgangspunt?",["Snelheid","Veilig vervoer","Planning"],1),

    q(21,"Assistentie","Wanneer bied je hulp aan?",["Altijd direct","Wanneer nodig en gewenst","Nooit"],1),
    q(22,"Assistentie","Waarom eerst vragen vóór helpen?",["Tijd","Respect voor zelfstandigheid","Regels"],1),
    q(23,"Assistentie","Wat doe je als hulp geweigerd wordt?",["Doordrukken","Respecteren","Rit stoppen"],1),
    q(24,"Assistentie","Wat is fout bij hulpverlening?",["Overleggen","Forceren","Geduld"],1),
    q(25,"Assistentie","Wat is professioneel?",["Overnemen","Ondersteunen waar nodig","Beslissen voor klant"],1),

    q(26,"Geduld","Waarom is geduld belangrijk?",["Voor snelheid","Voor veiligheid en comfort","Voor regels"],1),
    q(27,"Geduld","Wat helpt bij een trage klant?",["Zuchten","Rust bewaren","Haast maken"],1),
    q(28,"Geduld","Wat is het risico van ongeduld?",["Sneller klaar","Onveilige situaties","Meer fooi"],1),
    q(29,"Geduld","Wat straalt professionaliteit uit?",["Gejaagdheid","Rustige houding","Strengheid"],1),
    q(30,"Geduld","Wat helpt bij stressvolle situaties?",["Druk","Tijd nemen","Discussie"],1),

    q(31,"Communicatie","Waarom is duidelijke communicatie belangrijk?",["Voor snelheid","Voor begrip en vertrouwen","Voor controle"],1),
    q(32,"Communicatie","Wat vermijd je bij kwetsbare klanten?",["Duidelijkheid","Ironie","Uitleg"],1),
    q(33,"Communicatie","Wat doe je bij misverstand?",["Negeren","Opnieuw rustig uitleggen","Boos worden"],1),
    q(34,"Communicatie","Wat helpt bij vertrouwen?",["Haast","Vriendelijke houding","Discussie"],1),
    q(35,"Communicatie","Wat is een teken van goede service?",["Snel weg","Begrip tonen","Streng zijn"],1),

    q(36,"Besluit","Wanneer weiger je een rit?",["Nooit","Als veiligheid niet gewaarborgd is","Bij drukte"],1),
    q(37,"Besluit","Wat is professioneel bij weigeren?",["Kortaf","Uitleg geven","Negeer"],1),
    q(38,"Besluit","Wat is het doel van deze keuzes?",["Tijd besparen","Veilig en verantwoord vervoer","Discussie voorkomen"],1),
    q(39,"Besluit","Wat staat altijd voorop?",["Klantwens","Veiligheid","Planning"],1),
    q(40,"Samenvatting","Wat is de kern bij bijzondere doelgroepen?",["Iedereen gelijk behandelen zonder aanpassing","Aangepast, respectvol en veilig vervoer","Zo snel mogelijk rijden"],1),

  ]
};

  /* =========================
   TAXI EXAMEN 10
   Onderwerp: Veiligheid & noodsituaties
   ========================= */

const TAXI_EXAMEN_10 = {
  id: "taxi-examen-10",
  title: "Taxi Examen 10 – Veiligheid & noodsituaties",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    q(1,"Calamiteit","Wat is de eerste stap bij een noodsituatie?",["Foto maken","Veiligheid waarborgen","Doorrijden"],1),
    q(2,"Calamiteit","Waarom eerst veiligheid?",["Voor verzekering","Om letsel te voorkomen","Voor tijd"],1),
    q(3,"Calamiteit","Wat betekent PAMAN in de praktijk?",["Papieren invullen","Veilig handelen stap voor stap","Alleen bellen"],1),
    q(4,"Calamiteit","Wanneer schakel je hulpdiensten in?",["Bij twijfel","Bij gevaar of letsel","Nooit"],1),
    q(5,"Calamiteit","Wat is fout bij een noodsituatie?",["Rust bewaren","Paniek","Overzicht houden"],1),

    q(6,"Ongeval","Je bent betrokken bij een aanrijding. Wat doe je eerst?",["Discussie","Veilig stoppen","Doorrijden"],1),
    q(7,"Ongeval","Wanneer mag je plaats verlaten?",["Direct","Als alles is afgehandeld en veilig","Nooit"],1),
    q(8,"Ongeval","Wat is belangrijk bij letsel?",["Auto","Hulp verlenen","Papieren"],1),
    q(9,"Ongeval","Wat doe je met passagiers na ongeval?",["Laten zitten","In veiligheid brengen","Negeer"],1),
    q(10,"Ongeval","Wat helpt bij overzicht?",["Haast","Rust en duidelijke stappen","Discussie"],1),

    q(11,"Brand","Wat doe je bij brand in het voertuig?",["Doorrijden","Stoppen en evacueren","Ramen dicht"],1),
    q(12,"Brand","Wat neem je mee bij evacuatie?",["Bagage","Mensen","Telefoon"],1),
    q(13,"Brand","Wanneer gebruik je een brandblusser?",["Altijd","Alleen als veilig en klein","Nooit"],1),
    q(14,"Brand","Wat is prioriteit bij brand?",["Auto","Levens","Verzekering"],1),
    q(15,"Brand","Wat doe je na brandincident?",["Weglopen","Melden en vastleggen","Rijden"],1),

    q(16,"Medisch","Passagier wordt plots onwel. Wat doe je?",["Negeren","Veilig stoppen en hulp","Doorrijden"],1),
    q(17,"Medisch","Wanneer bel je 112?",["Bij twijfel","Bij ernstige klachten","Nooit"],1),
    q(18,"Medisch","Wat doe je tot hulp arriveert?",["Niets","Kalmeren en veiligheid bieden","Discussie"],1),
    q(19,"Medisch","Wat is fout bij medische nood?",["Rust","Eigen diagnose stellen","Luisteren"],1),
    q(20,"Medisch","Wat is jouw rol?",["Arts","Hulp inschakelen","Negeer"],1),

    q(21,"Agressie","Klant wordt agressief. Wat doe je eerst?",["Tegendreigen","De-escaleren","Rijden"],1),
    q(22,"Agressie","Wanneer stop je de rit?",["Nooit","Als veiligheid in gevaar komt","Bij discussie"],1),
    q(23,"Agressie","Wat helpt bij agressie?",["Stem verheffen","Rustige houding","Filmen"],1),
    q(24,"Agressie","Wanneer alarmeren?",["Bij gevaar","Altijd","Na afloop"],1),
    q(25,"Agressie","Wat vermijd je?",["Grenzen","Discussie","Veiligheid"],1),

    q(26,"Noodsituatie","Wat doe je bij paniek in de auto?",["Schreeuwen","Rust uitstralen","Sneller rijden"],1),
    q(27,"Noodsituatie","Waarom duidelijke instructies?",["Voor controle","Voor rust en veiligheid","Voor snelheid"],1),
    q(28,"Noodsituatie","Wat helpt passagiers?",["Chaos","Uitleg en begeleiding","Zwijgen"],1),
    q(29,"Noodsituatie","Wat is fout gedrag?",["Overzicht","Paniek zaaien","Communicatie"],1),
    q(30,"Noodsituatie","Wat staat altijd centraal?",["Planning","Veiligheid","Omzet"],1),

    q(31,"Nazorg","Waarom incident rapporteren?",["Onnodig","Voor verantwoording en leren","Voor straf"],1),
    q(32,"Nazorg","Wat noteer je na incident?",["Meningen","Feiten","Geruchten"],1),
    q(33,"Nazorg","Wat doe je bij klachten na noodsituatie?",["Negeer","Doorverwijzen volgens procedure","Discussie"],1),
    q(34,"Nazorg","Wat helpt bij verwerking?",["Ontkennen","Bespreken","Doorrijden"],1),
    q(35,"Nazorg","Wat is professioneel?",["Bagatelliseren","Serieus nemen","Boos"],1),

    q(36,"Verantwoordelijkheid","Wie beslist bij nood?",["Klant","Chauffeur","Centrale"],1),
    q(37,"Verantwoordelijkheid","Waarom deze verantwoordelijkheid?",["Omzet","Veiligheid","Tijd"],1),
    q(38,"Verantwoordelijkheid","Wat is juiste houding?",["Afwachten","Actief en rustig handelen","Paniek"],1),
    q(39,"Verantwoordelijkheid","Wat is doel van noodprocedures?",["Regels","Bescherming van mensen","Administratie"],1),
    q(40,"Samenvatting","Wat is kern bij calamiteiten?",["Snel weg","Veilig, rustig en volgens procedure handelen","Discussie winnen"],1),

  ]
};

  /* =========================
   TAXI EXAMEN 11
   Onderwerp: Wetgeving, boetes, sancties & aansprakelijkheid (praktijk)
   ========================= */

const TAXI_EXAMEN_11 = {
  id: "taxi-examen-11",
  title: "Taxi Examen 11 – Wetgeving, handhaving & aansprakelijkheid",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    q(1,"Wetgeving","Waarom bestaan taxiregels in de praktijk vooral?",["Voor extra winst","Voor veiligheid en betrouwbaarheid","Omdat taxi’s sneller zijn"],1),
    q(2,"Wetgeving","Wat is het risico van ‘even snel’ regels negeren omdat het rustig is?",["Geen risico","Boete/sanctie + veiligheidsschade","Alleen boze klant"],1),
    q(3,"Wetgeving","Wat is de meest professionele houding als je een regel niet 100% zeker weet?",["Doen alsof je het weet","Navraag doen/regels checken vóór je handelt","Gewoon doen, je merkt het wel"],1),
    q(4,"Wetgeving","Wat is een goede basisregel voor bewijs/registratie?",["Alles zelf verzinnen","Feiten vastleggen volgens procedure","Niets vastleggen"],1),
    q(5,"Wetgeving","Wie moet zich aan de verkeersregels houden tijdens taxiwerk?",["Alleen andere weggebruikers","Iedereen, dus ook jij","Alleen privé-auto’s"],1),

    q(6,"Handhaving","Wat is een reëel gevolg van ernstige of herhaalde overtredingen in taxiwerk?",["Alleen een waarschuwing","Boete/sanctie en mogelijk stillegging","Gratis rijles"],1),
    q(7,"Handhaving","Wat is het beste gedrag bij een controle?",["Discussie starten","Rustig meewerken en correct antwoorden","Snel wegrijden"],1),
    q(8,"Handhaving","Wat is verstandig als je document/registratie ontbreekt?",["Hoop dat niemand het merkt","Niet rijden en eerst oplossen","Alleen korte ritten doen"],1),
    q(9,"Handhaving","Wat is onprofessioneel bij een controle?",["Beleefd blijven","Agressief/denigrerend reageren","Duidelijk antwoorden"],1),
    q(10,"Handhaving","Wanneer is ‘ik wist het niet’ meestal géén goede verdediging?",["Altijd","Bij regels die je hoort te kennen als chauffeur","Als de klant het vroeg"],1),

    q(11,"Boetes","Wat voorkomt misverstanden over kosten het best?",["Pas na afloop praten","Vooraf of zo vroeg mogelijk duidelijkheid geven","Nooit uitleg geven"],1),
    q(12,"Boetes","Klant wil dat je op een plek stopt waar het verboden is. Wie loopt risico op boete?",["Alleen klant","Jij als bestuurder (en mogelijk bedrijf)","Niemand"],1),
    q(13,"Boetes","Wat is professioneel bij een parkeerboete tijdens werk?",["Verstoppen","Melden/registreren volgens bedrijfsafspraak","Op social media zetten"],1),
    q(14,"Boetes","Wat is het beste bij discussie over ‘omrijden’?",["Escaleren","Feitelijk uitleggen en verwijzen naar afspraken/routekeuze","Klant uitlachen"],1),
    q(15,"Boetes","Wat is de grootste fout bij tijdsdruk?",["Rustig blijven","Regels overtreden om tijd in te halen","Vooruit plannen"],1),

    q(16,"Aansprakelijkheid","Wat betekent ‘aansprakelijkheid’ in simpele woorden?",["Wie sneller is","Wie verantwoordelijk is voor schade","Wie de klant kent"],1),
    q(17,"Aansprakelijkheid","Bij schade aan bagage door onveilig plaatsen: wat is het beste uitgangspunt?",["Klant is altijd schuld","Jij zorgt dat bagage veilig ligt, dus jij voorkomt dit","Niemand kan iets doen"],1),
    q(18,"Aansprakelijkheid","Wat doe je bij schade aan het voertuig tijdens rit?",["Doorrijden","Veilig stoppen en handelen volgens procedure/verzekering","Klant laten beslissen"],1),
    q(19,"Aansprakelijkheid","Wat is het beste bij een bijna-ongeval door jouw fout?",["Ontkennen","Leren: rustig blijven en veilig corrigeren","Boos worden op anderen"],1),
    q(20,"Aansprakelijkheid","Wie draagt de eindverantwoordelijkheid voor veilig rijgedrag?",["De klant","De chauffeur","De navigatie"],1),

    q(21,"Regels & klant","Klant zegt: ‘ik betaal extra als je door rood rijdt’. Wat is juist?",["Doen voor extra geld","Weigeren; regels blijven gelden","Alleen doen bij oranje"],1),
    q(22,"Regels & klant","Klant wil meer personen meenemen dan gordels. Wat is juist?",["Toestaan bij korte rit","Weigeren; veiligheid/regels gaan voor","Toestaan bij lage snelheid"],1),
    q(23,"Regels & klant","Klant wil dat jij appt tijdens het rijden. Wat doe je?",["Appen terwijl je rijdt","Pas doen als je veilig stilstaat","Telefoon in de hand bellen"],1),
    q(24,"Regels & klant","Klant eist ‘zwarte rit’ zonder registratie. Wat is professioneel?",["Meedoen","Weigeren en volgens regels werken","Alleen buiten de stad"],1),
    q(25,"Regels & klant","Wat is een goede standaardzin bij onredelijke klantwensen?",["‘Dan stap je maar uit’","‘Ik rijd veilig en volgens de regels’","‘Ik doe wat u wilt’"],1),

    q(26,"Papierwerk","Waarom is correcte ritadministratie belangrijk bij klachten/geschillen?",["Voor reclame","Omdat feiten dan controleerbaar zijn","Omdat het verplicht leuk is"],1),
    q(27,"Papierwerk","Wat leg je vast na een incident?",["Geruchten","Feiten: tijd, plek, betrokkenen, wat er gebeurde","Alleen je mening"],1),
    q(28,"Papierwerk","Wat is het beste bij een verzoek om bonnetjes/factuur?",["Weigeren","Verstrekken volgens werkwijze","Alleen contant"],1),
    q(29,"Papierwerk","Wanneer is ‘achteraf invullen uit geheugen’ risicovol?",["Nooit","Omdat fouten sneller ontstaan en controle lastig is","Omdat klanten dat willen"],1),
    q(30,"Papierwerk","Wat is professioneel bij onzekerheid over procedure?",["Zelf iets bedenken","Procedure checken of collega/leiding vragen","Niets doen"],1),

    q(31,"Gedrag & sancties","Waarom kan onprofessioneel gedrag (schelden/dreigen) extra problemen geven?",["Het helpt bij fooi","Het kan klachten en handhaving verergeren","Het is verplicht"],1),
    q(32,"Gedrag & sancties","Wat is de beste manier om een conflict te verminderen?",["Stem verheffen","Rustig blijven en grenzen aangeven","Klant provoceren"],1),
    q(33,"Gedrag & sancties","Wat is slim als je merkt dat je emotioneel wordt?",["Doorzetten","Even pauze/ademen en professioneel blijven","Terugpakken op klant"],1),
    q(34,"Gedrag & sancties","Wat is fout bij klantklachten?",["Doorverwijzen naar procedure","Bewijs vernietigen","Rustig blijven"],1),
    q(35,"Gedrag & sancties","Wat is het beste bij een onterechte beschuldiging?",["Escaleren","Feitelijk blijven en procedure volgen","Klant bedreigen"],1),

    q(36,"Praktijkregel","Navigatie stuurt je een verboden straat in. Wat is juist?",["Navigatie gaat altijd voor","Verkeersborden gaan voor","Snel doorrijden"],1),
    q(37,"Praktijkregel","Stoppen op de busbaan ‘heel even’ om klant te laten uitstappen is:",["Altijd toegestaan","Risicovol en meestal verboden; kies veilige plek","Verplicht"],1),
    q(38,"Praktijkregel","Waarom is ‘ik was maar 1 minuut’ geen goed argument bij fout parkeren?",["Omdat tijd niet telt","Omdat het nog steeds verboden/onveilig kan zijn","Omdat klanten dat willen"],1),
    q(39,"Praktijkregel","Wat is het beste als klant jou pusht om te haasten?",["Sneller rijden","Rustig blijven: veiligheid boven tijd","Boos worden"],1),
    q(40,"Samenvatting","Wat is de kern van ‘juridisch slim’ taxiwerken?",["Regels buigen voor klant","Volgens regels werken, feiten vastleggen, professioneel blijven","Alles mondeling doen"],1),

  ]
};

   /* =========================
   TAXI EXAMEN 12
   Onderwerp: Tarieven, meter/prijsopbouw, wachttijd, bon/factuur (praktijkcases)
   ========================= */

const TAXI_EXAMEN_12 = {
  id: "taxi-examen-12",
  title: "Taxi Examen 12 – Tarieven, meter, wachttijd & factuur",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    q(1,"Tarieven","Wat is het meest professioneel als een klant vóór vertrek vraagt: ‘Wat gaat dit ongeveer kosten?’",["Zeggen: ‘geen idee’","Een eerlijke indicatie geven en uitleggen waarvan het afhangt","Een willekeurig laag bedrag noemen"],1),
    q(2,"Tarieven","Wat voorkomt de meeste tariefdiscussies?",["Geen uitleg geven","Vooraf heldere afspraken/indicatie geven","Pas achteraf praten"],1),
    q(3,"Tarieven","Klant vraagt om ‘vaste prijs’. Wat is het beste?",["Altijd weigeren","Alleen doen als het duidelijk is en volgens bedrijfsregels/afspraken","Zeggen: ‘we zien wel’"],1),
    q(4,"Tarieven","Wanneer is het slim om extra kosten (tol/parkeren) te benoemen?",["Pas bij aankomst","Zo vroeg mogelijk (liefst vooraf)","Nooit, dat schrikt af"],1),
    q(5,"Tarieven","Klant zegt: ‘Rij om, ik wil langs de supermarkt’. Wat is professioneel?",["Gewoon doen zonder iets te zeggen","Kort afstemmen wat dit betekent voor tijd/prijs","Boos weigeren"],1),

    q(6,"Taximeter","Wat is de meest veilige/professionele manier om met meterinstellingen te werken?",["Tijdens het rijden rommelen","Alleen instellen als je stilstaat en volgens procedure","Op gevoel laten staan"],1),
    q(7,"Taximeter","Je merkt dat je meter mogelijk verkeerd staat. Wat doe je?",["Negeert het","Stoppen/handelen volgens procedure vóór je doorrijdt","Achteraf corrigeren op papier"],1),
    q(8,"Taximeter","Wat is het grootste probleem van ‘meter uit’ rijden zonder afspraak?",["Klant vindt het leuk","Ontransparant en risico op klacht/handhaving","Je rijdt dan zuiniger"],1),
    q(9,"Taximeter","Een klant wil dat je de meter niet aanzet zodat het goedkoper lijkt. Wat is juist?",["Doen, klant bepaalt","Weigeren en volgens regels/afspraken werken","Alleen bij korte rit"],1),
    q(10,"Taximeter","Wat is professioneel als je niet zeker weet of je ‘meter’ of ‘vast tarief’ moet gebruiken?",["Gokken","Vooraf checken (bedrijf/afspraak) en duidelijk communiceren","Pas na afloop vragen"],1),

    q(11,"Wachttijd","Klant wil ‘2 minuten’ pinnen/iets halen. Wat is het beste?",["Altijd gratis wachten","Afstemmen of/hoe wachttijd wordt berekend en wat redelijk is","Direct weg rijden zonder iets te zeggen"],1),
    q(12,"Wachttijd","Waarom is wachttijd een gevoelig onderwerp?",["Omdat het altijd verboden is","Omdat klanten snel verrast zijn als het niet is besproken","Omdat het nooit voorkomt"],1),
    q(13,"Wachttijd","Wat is het meest klantvriendelijk als wachten niet kan (drukke plek/veiligheid)?",["Boos worden","Uitleggen en een alternatief bieden (veiligere plek/afspraak)","Klanten laten uitstappen midden op de weg"],1),
    q(14,"Wachttijd","Klant wil dat je in een verboden zone wacht. Wat doe je?",["Toch blijven staan","Niet doen; kies een toegestane plek of maak andere afspraak","Alarmlichten aan en klaar"],1),
    q(15,"Wachttijd","Wat is professioneel bij een lange wachttijd door file/brug open?",["Niets zeggen","Klant kort informeren en transparant blijven","Meter uitzetten zonder overleg"],1),

    q(16,"Bon","Een klant vraagt om een bon. Wat is juist?",["Dat hoeft nooit","Je verstrekt die volgens werkwijze/afspraken","Alleen bij contant"],1),
    q(17,"Bon","Wat is het beste als de printer geen papier heeft?",["Zeggen: pech gehad","Alternatief bieden (bijv. digitaal) volgens procedure","Een willekeurig bedrag opschrijven"],1),
    q(18,"Bon","Wat is voor klanten het belangrijkste op een bon?",["Alleen jouw voornaam","Duidelijke ritgegevens/bedrag en herkenbaarheid","Alleen een smiley"],1),
    q(19,"Bon","Klant wil zakelijke factuur met btw-gegevens. Wat doe je?",["Weigeren","Volgens procedure factuur/bon met juiste gegevens regelen","Alleen mondeling bedrag zeggen"],1),
    q(20,"Bon","Waarom is een bon/factuur ook voor jou handig?",["Alleen reclame","Het voorkomt discussies en helpt bij administratie/klachten","Het is verplicht voor fooi"],1),

    q(21,"Betaling","Klant wil split-betalen (2 personen). Wat is het beste?",["Kan nooit","Als je systeem het kan: netjes uitvoeren, anders alternatief afspreken","Zeggen dat het niet jouw probleem is"],1),
    q(22,"Betaling","Pin valt uit. Wat is professioneel?",["Klant laten gaan zonder betaling","Oplossing zoeken volgens procedure/afspraak","Klant direct uitschelden"],1),
    q(23,"Betaling","Je hebt geen wisselgeld voor een groot biljet. Wat is het beste?",["Extra kosten rekenen zonder uitleg","Vooraf aangeven en samen oplossing kiezen","Weigeren zonder uitleg"],1),
    q(24,"Betaling","Klant wil vooraf betalen. Wat is professioneel?",["Altijd verplicht","Mag als jullie dit afspreken en het netjes geregistreerd wordt","Nooit toegestaan"],1),
    q(25,"Betaling","Wat is het meest professioneel bij twijfel of betaling is gelukt (pin)?",["Gokken en doorrijden","Controleer transactie en communiceer rustig","Klant beschuldigen"],1),

    q(26,"Transparantie","Welke uitspraak is het meest professioneel?",["‘We zien wel wat het kost’","‘Ik geef u een indicatie en licht toe waar het van afhangt’","‘Kost altijd hetzelfde’"],1),
    q(27,"Transparantie","Wanneer bespreek je routekeuze het liefst?",["Nooit","Bij twijfel of als klant vraagt, kort en rustig","Pas na aankomst"],1),
    q(28,"Transparantie","Klant zegt: ‘Je rijdt expres om’. Wat is het beste?",["Escaleren","Kalm uitleggen (verkeer/veiligheid/afspraken) en transparant blijven","Klant uitlachen"],1),
    q(29,"Transparantie","Wat is een goede manier om misverstanden over tol/parkeren te voorkomen?",["Niet noemen","Vooraf benoemen en akkoord vragen","Achteraf pas zeggen"],1),
    q(30,"Transparantie","Waarom is ‘duidelijkheid’ een onderdeel van klantgerichtheid?",["Omdat klanten anders niet betalen","Omdat het vertrouwen en rust geeft","Omdat het sneller is"],1),

    q(31,"Praktijkcase","Klant wil uitstappen vóór bestemming om geld te besparen. Wat doe je?",["Verbieden","Als het veilig/haalbaar is: kort bespreken en veilig laten uitstappen","Midden op de rijbaan stoppen"],1),
    q(32,"Praktijkcase","Klant vraagt om ‘kortste route altijd’. Wat is professioneel?",["Altijd blind de kortste route","Uitleg: kortste is niet altijd snel/veilig; kies logisch en stem af bij twijfel","Altijd de langste route"],1),
    q(33,"Praktijkcase","Je moet omrijden door afsluiting. Wat is het beste?",["Niets zeggen","Klant kort informeren en veilige omleiding kiezen","Door de afzetting rijden"],1),
    q(34,"Praktijkcase","Klant vraagt halverwege: ‘Waarom is het bedrag al zo hoog?’",["Boos worden","Rustig uitleggen (afstand/tijd/wachttijd) en transparant blijven","Zeggen: ‘dat is nou eenmaal zo’"],1),
    q(35,"Praktijkcase","Klant wil ‘even snel’ stop bij pinautomaat in verboden zone. Wat doe je?",["Toch stoppen","Alternatief: veilige/legale plek zoeken","Midden op de busbaan stoppen"],1),

    q(36,"Service","Wat is professioneel als klant ontevreden is over prijs maar jij hebt alles netjes uitgelegd?",["Discussie winnen","Rustig blijven en verwijzen naar bon/afspraak/procedure","Klant uitschelden"],1),
    q(37,"Service","Wat is slim bij veel toeristen/anderstaligen om tariefmisverstanden te voorkomen?",["Sneller praten","Duidelijk, simpel uitleggen en bevestigen (bestemming/indicatie)","Niets zeggen"],1),
    q(38,"Service","Wat is het beste als je merkt dat jij iets onduidelijk hebt uitgelegd?",["Doen alsof het nooit gebeurde","Corrigeren: kort en eerlijk uitleggen","Klant de schuld geven"],1),
    q(39,"Service","Klant wil een ‘extra korting’ zonder reden. Wat is professioneel?",["Direct toegeven","Beleefd aangeven wat mogelijk is binnen regels/bedrijf","Boos worden"],1),
    q(40,"Samenvatting","Wat is de kern van professioneel omgaan met prijs in taxiwerk?",["Prijs geheim houden","Transparant, eerlijk en volgens afspraken/regels werken","Altijd de klant laten bepalen"],1),

  ]
};

   /* =========================
   TAXI EXAMEN 13
   Onderwerp: Veiligheid, PAMAN, agressie, ongevallen & noodsituaties (verdieping)
   ========================= */

const TAXI_EXAMEN_13 = {
  id: "taxi-examen-13",
  title: "Taxi Examen 13 – PAMAN",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    q(1,"Veiligheid","Wat is altijd je eerste verantwoordelijkheid als taxichauffeur?",["Op tijd aankomen","Veiligheid van jezelf, passagiers en anderen","Zo veel mogelijk ritten rijden"],1),
    q(2,"PAMAN","Waar staat de letter P in PAMAN voor?",["Parkeren","Persoonlijke veiligheid","Professionaliteit"],1),
    q(3,"PAMAN","Wat betekent ‘Andermans veiligheid’?",["Alleen passagiers","Iedereen in en rond de situatie","Alleen collega’s"],1),
    q(4,"PAMAN","Wat is het doel van ‘Markeren’ bij een incident?",["Foto’s maken voor social media","De plek zichtbaar/veilig maken voor anderen","De klant laten schrikken"],1),
    q(5,"PAMAN","Wanneer alarmeer je?",["Alleen bij schade","Als professionele hulp nodig is","Nooit, dat kost tijd"],1),

    q(6,"Agressie","Een klant begint te schreeuwen. Wat is de beste eerste reactie?",["Terugschreeuwen","Rustig blijven en de-escaleren","Direct stoppen midden op de weg"],1),
    q(7,"Agressie","Wat helpt het meest om agressie te voorkomen?",["Discussie aangaan","Rustige communicatie en duidelijke grenzen","Negeren tot het escaleert"],1),
    q(8,"Agressie","Wanneer is het verstandig om de rit te beëindigen?",["Bij elke klacht","Bij dreiging of onveilige situatie","Als de klant te laat is"],1),
    q(9,"Agressie","Wat doe je als je je onveilig voelt door een passagier?",["Doorrijden en hopen dat het stopt","Veilig stoppen en hulp inschakelen","De deuren op slot doen en doorrijden"],1),
    q(10,"Agressie","Wat is géén professionele reactie bij agressie?",["Kalm blijven","Intimideren of dreigen","Grenzen aangeven"],1),

    q(11,"Ongeval","Je bent betrokken bij een ongeval met letsel. Wat is stap 1?",["Foto’s maken","Zorgen voor veiligheid (PAMAN)","De rit afronden"],1),
    q(12,"Ongeval","Wanneer mag je een ongevalslocatie verlaten?",["Altijd direct","Pas als veiligheid en afhandeling geregeld zijn","Zodra de klant dat wil"],1),
    q(13,"Ongeval","Wat is juist bij een ongeval zonder letsel?",["Doorrijden","Veilig handelen en gegevens uitwisselen","Alleen foto maken"],1),
    q(14,"Ongeval","Waarom is markeren belangrijk bij een ongeval?",["Voor bewijs","Om vervolgincidenten te voorkomen","Voor de verzekering alleen"],1),
    q(15,"Ongeval","Wat doe je als je twijfelt of iemand letsel heeft?",["Niets","Alarmeren en professioneel laten beoordelen","Doorrijden"],1),

    q(16,"Nood","Een passagier wordt plots benauwd. Wat is juist?",["Doorrijden naar eindpunt","Veilig stoppen en hulp inschakelen","Raam open en door"],1),
    q(17,"Nood","Wat doe je bij bewusteloosheid van een passagier?",["Afwachten","112 bellen en instructies volgen","Naar bestemming rijden"],1),
    q(18,"Nood","Waarom is kalm blijven cruciaal in noodsituaties?",["Voor de uitstraling","Voor overzicht en juiste beslissingen","Omdat klanten dat verwachten"],1),
    q(19,"Nood","Wat is géén taak van jou bij een medische noodsituatie?",["Hulp inschakelen","Diagnose stellen","Veilig handelen"],1),
    q(20,"Nood","Wat doe je als een klant weigert hulp maar jij het niet vertrouwt?",["Luisteren en doorrijden","Toch veiligheid vooropstellen en hulp inschakelen","Boos worden"],1),

    q(21,"Veilig stoppen","Waar stop je bij nood het liefst?",["Midden op de rijbaan","Op een veilige, toegestane plek","Op een kruispunt"],1),
    q(22,"Veilig stoppen","Waarom is een veilige stopplek belangrijk?",["Voor de boete","Voor veiligheid van alle weggebruikers","Voor snelheid"],1),
    q(23,"Veilig stoppen","Wat doe je met alarmlichten bij nood?",["Nooit gebruiken","Gebruiken om zichtbaarheid te vergroten","Alleen ’s nachts"],1),
    q(24,"Veilig stoppen","Wat is onjuist bij veilig stoppen?",["Rustig handelen","Andere weggebruikers waarschuwen","Paniek veroorzaken"],1),
    q(25,"Veilig stoppen","Wat doe je na veilig stoppen?",["Discussie voeren","Situatie beoordelen en PAMAN volgen","Direct wegrijden"],1),

    q(26,"Persoonlijke veiligheid","Wat helpt jouw persoonlijke veiligheid het meest?",["Discussies winnen","Grenzen stellen en procedures kennen","Harder rijden"],1),
    q(27,"Persoonlijke veiligheid","Waarom is nachtwerk extra risicovol?",["Meer klanten","Minder zicht en meer onvoorspelbaarheid","Lagere tarieven"],1),
    q(28,"Persoonlijke veiligheid","Wat doe je als je merkt dat je spanning oploopt?",["Negeren","Rustmoment nemen","Doorpushen"],1),
    q(29,"Persoonlijke veiligheid","Wat is verstandig bij bedreiging?",["Held uithangen","Veiligheid voorop en hulp inschakelen","De klant confronteren"],1),
    q(30,"Persoonlijke veiligheid","Wat is géén goede veiligheidsmaatregel?",["Voorbereid zijn","Regels kennen","Conflicten opzoeken"],1),

    q(31,"Nazorg","Waarom is rapporteren na incident belangrijk?",["Voor roddels","Voor opvolging, leren en administratie","Voor social media"],1),
    q(32,"Nazorg","Wat doe je na een heftig incident?",["Direct doorwerken","Rust nemen en melden volgens procedure","Alles vergeten"],1),
    q(33,"Nazorg","Met wie bespreek je een incident?",["Iedereen","Volgens bedrijfsafspraken","Alleen klanten"],1),
    q(34,"Nazorg","Waarom is nazorg ook onderdeel van professionaliteit?",["Omdat het moet","Omdat het helpt veilig te blijven werken","Omdat klanten dat eisen"],1),
    q(35,"Nazorg","Wat is onprofessioneel na een incident?",["Reflecteren","Melden","Stoer doen en bagatelliseren"],1),

    q(36,"Verkeer","Klant zegt: ‘Rij sneller, ik ben te laat’. Wat doe je?",["Toegeven","Veilig blijven en regels volgen","Door rood rijden"],1),
    q(37,"Verkeer","Waarom blijven verkeersregels gelden bij stress?",["Voor boetes","Voor veiligheid","Voor planning"],1),
    q(38,"Verkeer","Wat is de beste reactie op druk van de klant?",["Discussie","Rustige uitleg en veiligheid voorop","Negeren"],1),
    q(39,"Verkeer","Wat is het grootste risico bij toegeven aan druk?",["Tijdverlies","Onveilige situaties","Lagere fooi"],1),
    q(40,"Samenvatting","Wat is de kern van veilig taxiwerk?",["Snelheid","Veiligheid, rust en professioneel handelen","Altijd toegeven"],1),

  ]
};

   /* =========================
   TAXI EXAMEN 14
   Onderwerp: Wetgeving, ILT, documenten, vergunningen, keuringen & controle (verdieping)
   ========================= */

const TAXI_EXAMEN_14 = {
  id: "taxi-examen-14",
  title: "Taxi Examen 14 – Wetgeving, ILT & documenten",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    q(1,"Wetgeving","Wat is het belangrijkste doel van taxiwet- en regelgeving?",["Meer winst","Veiligheid, betrouwbaarheid en eerlijkheid in taxivervoer","Alleen administratie"],1),
    q(2,"Wetgeving","Als chauffeur ben je verantwoordelijk voor…",["Alleen klanttevredenheid","Je eigen handelen: veilig en volgens regels werken","Alleen het voertuig"],1),
    q(3,"Wetgeving","Wat is het risico van ‘regels buigen omdat het rustig is’?",["Geen","Handhaving/boete én onveiligheid","Alleen een waarschuwing"],1),
    q(4,"Wetgeving","Wat is het beste bij twijfel over een regel?",["Gokken","Regel checken of navraag doen vóór je handelt","Klant laten kiezen"],1),
    q(5,"Wetgeving","Wat is onprofessioneel bij regels?",["Zorgvuldig handelen","Bewust ‘net doen alsof’ bij controle","Duidelijk communiceren"],1),

    q(6,"ILT","Wat is de rol van ILT in taxi?",["Alleen routes adviseren","Toezicht/handhaving op naleving van regels","Alleen klantklachten afhandelen"],1),
    q(7,"ILT","Wat is het meest professionele gedrag bij een ILT-controle?",["Discussie zoeken","Rustig blijven en meewerken","Snel wegrijden"],1),
    q(8,"ILT","Wat doe je als je iets niet direct kunt tonen bij controle?",["Boos worden","Rustig uitleggen en volgens procedure handelen","Zeggen dat ILT geen recht heeft"],1),
    q(9,"ILT","Waarom is ‘meewerken’ verstandig?",["Omdat ILT altijd gelijk heeft","Omdat het escalatie voorkomt en hoort bij professionaliteit","Omdat je dan geen boete kunt krijgen"],1),
    q(10,"ILT","Wat is géén slimme reactie bij controle?",["Kalm blijven","Agressief reageren","Duidelijk antwoorden"],1),

    q(11,"Documenten","Waarom zijn documenten/registraties in taxi belangrijk?",["Voor reclame","Voor aantoonbaarheid bij toezicht en administratie","Alleen voor pinbetalingen"],1),
    q(12,"Documenten","Wat is de beste gewoonte vóór je dienst?",["Pas checken als er controle is","Kort checken of alles actueel/aanwezig is","Niets checken"],1),
    q(13,"Documenten","Wat is het risico van ‘vergeten’ verplicht document?",["Geen","Boete/handhaving en rit kan stilvallen","Alleen tijdverlies"],1),
    q(14,"Documenten","Wat doe je als je merkt dat een document verlopen is?",["Toch rijden","Niet rijden tot het geregeld is","Alleen korte ritten rijden"],1),
    q(15,"Documenten","Wat is professioneel als klant vraagt of je bevoegd bent?",["Klant uitlachen","Rustig uitleggen en professioneel blijven","Boos worden"],1),

    q(16,"Vergunningen","Wie moet zorgen dat de bedrijfsvoorwaarden voor taxi kloppen?",["Alleen de passagier","De ondernemer/het bedrijf; jij checkt basics vóór je rijdt","Alleen de garage"],1),
    q(17,"Vergunningen","Wat is verstandig als je voor een nieuwe opdrachtgever gaat rijden?",["Blind starten","Eerst checken of je volgens regels mag rijden (afspraken/registratie)","Alleen kijken of er een logo is"],1),
    q(18,"Vergunningen","Wat is het risico van rijden buiten de juiste voorwaarden?",["Alleen slechte review","Handhaving/boete en mogelijk stilzetten","Geen, zolang je veilig rijdt"],1),
    q(19,"Vergunningen","Wat is het beste bij onduidelijke opdracht (bijv. soort vervoer)?",["Toch rijden","Eerst duidelijkheid krijgen wat het is en of het mag","Klant laten bepalen"],1),
    q(20,"Vergunningen","Wat is onjuist bij vergunningen?",["Zeker weten dat het klopt","Aannemen dat ‘het wel goed zit’ zonder check","Transparant werken"],1),

    q(21,"Keuring/Voertuig","Waarom is een taxi-keuring/controle belangrijk?",["Voor extra fooi","Voor veiligheid en voldoen aan eisen","Voor gratis onderhoud"],1),
    q(22,"Keuring/Voertuig","Wat doe je bij een veiligheidskritisch mankement?",["Doorrijden","Niet rijden tot het veilig is opgelost","Alleen langzamer rijden"],1),
    q(23,"Keuring/Voertuig","Wat is verstandig bij waarschuwingslampje dat op remmen/veiligheid wijst?",["Negeren","Veilig stoppen en volgens procedure handelen","Harder rijden om sneller klaar te zijn"],1),
    q(24,"Keuring/Voertuig","Wat is een goede basiscontrole vóór je dienst?",["Alleen ruitenwissers","Verlichting/banden/schade-check","Alleen radio"],1),
    q(25,"Keuring/Voertuig","Wat is onprofessioneel bij voertuigstaat?",["Schone, veilige auto","Doorrijden met risico ‘tot na deze rit’","Mankement melden"],1),

    q(26,"Ritadministratie","Wat is het grootste nut van correcte ritgegevens (tijd/rit/bestemming)?",["Alleen voor navigatie","Controle, administratie en klachtenafhandeling","Alleen voor de klant"],1),
    q(27,"Ritadministratie","Wat is verstandig als je merkt dat een registratie fout is gegaan?",["Verbergen","Corrigeren volgens procedure/afspraken","Niets doen"],1),
    q(28,"Ritadministratie","Waarom is ‘achteraf invullen uit je hoofd’ risicovol?",["Het is sneller","Fouten/handhaving en onbetrouwbare administratie","Het is klantvriendelijk"],1),
    q(29,"Ritadministratie","Wanneer hoort je registratie ‘bij’ te zijn?",["Alleen bij controle","Doorlopend tijdens het werk","Alleen in de nacht"],1),
    q(30,"Ritadministratie","Wat is onjuist bij administratie?",["Zorgvuldig bijhouden","Creatief invullen om beter uit te komen","Transparant werken"],1),

    q(31,"Tarieven & transparantie","Wat is professioneel bij onduidelijkheid over tarief/prijs?",["Niets zeggen","Vooraf/zo snel mogelijk duidelijk bespreken","Achteraf verrassen"],1),
    q(32,"Tarieven & transparantie","Wat is onprofessioneel met extra kosten (tol/parkeren)?",["Vooraf benoemen","Zwijgen en achteraf rekenen zonder uitleg","Duidelijk afstemmen"],1),
    q(33,"Tarieven & transparantie","Klant vraagt om ‘zonder bon/zonder registratie’. Wat doe je?",["Akkoord","Weigeren en volgens regels werken","Alleen bij korte rit"],1),
    q(34,"Tarieven & transparantie","Wat is het beste bij meningsverschil over prijs?",["Escaleren","Rustig uitleggen en verwijzen naar afspraken/bon","Klant uitschelden"],1),
    q(35,"Tarieven & transparantie","Waarom is transparantie belangrijk?",["Voor marketing","Vertrouwen en minder conflicten/klachten","Alleen voor pin"],1),

    q(36,"Privacy (basis)","Wat is het veiligste uitgangspunt bij klantgegevens?",["Alles bewaren","Alleen bewaren wat nodig is en netjes beveiligen","Alles delen met collega’s"],1),
    q(37,"Privacy (basis)","Wat doe je als iemand om gegevens van een vorige klant vraagt?",["Geven","Niet geven; privacy respecteren","Alleen tegen betaling"],1),
    q(38,"Privacy (basis)","Wat is onprofessioneel met beelden/geluid in de taxi?",["Beveiligd en doelgericht","Openbaar delen zonder noodzaak","Volgens regels omgaan"],1),
    q(39,"Professionaliteit","Wat hoort bij professioneel werken onder toezicht?",["Zenuwachtig rommelen","Rustig blijven en alles netjes op orde hebben","Spullen verstoppen"],1),
    q(40,"Samenvatting","Wat is de beste samenvatting van ‘compliance’ in taxi?",["Regels alleen volgen bij controle","Altijd volgens regels werken: transparant, veilig en aantoonbaar","Regels negeren voor snelheid"],1),

  ]
};

   /* =========================
   TAXI EXAMEN 15
   Onderwerp: Klantenservice, klachten, communicatie, betaling, bon/factuur & nazorg
   ========================= */

const TAXI_EXAMEN_15 = {
  id: "taxi-examen-15",
  title: "Taxi Examen 15 – Klantservice & afhandeling",
  category: "Taxi",
  durationMinutes: 30,
  passMinCorrect: 32,
  questions: [

    q(1,"Klantenservice","Wat is het belangrijkste doel van goede klantservice in taxiwerk?",["Meer fooi","Veilig, prettig en betrouwbaar vervoer","Zo snel mogelijk klaar zijn"],1),
    q(2,"Klantenservice","Wat is een professioneel begin van elke rit?",["Direct wegrijden","Bestemming bevestigen en rustig starten","Eerst bellen"],1),
    q(3,"Klantenservice","Waarom is een rustige houding belangrijk?",["Voor imago","Om escalatie en stress te voorkomen","Omdat klanten dat eisen"],1),
    q(4,"Klantenservice","Wat is onprofessioneel klantgedrag van de chauffeur?",["Luisteren","Sarcastisch reageren","Duidelijk uitleggen"],1),
    q(5,"Klantenservice","Hoe ga je om met een ongeduldige klant?",["Negeren","Rustig blijven en professioneel communiceren","Terug snauwen"],1),

    q(6,"Communicatie","Wat is de beste manier om misverstanden te voorkomen?",["Zo weinig mogelijk zeggen","Duidelijk en tijdig communiceren","Pas na afloop uitleggen"],1),
    q(7,"Communicatie","Klant spreekt slecht Nederlands. Wat doe je?",["Zeggen dat hij pech heeft","Rustig communiceren en laten tonen/schrijven","Gewoon gaan rijden"],1),
    q(8,"Communicatie","Wat doe je als je de klant niet goed verstaat?",["Gokken","Vragen om herhaling of bevestiging","Rijden naar bekend punt"],1),
    q(9,"Communicatie","Wat is professioneel bij meningsverschil?",["Discussie winnen","Rustig blijven en uitleg geven","Stem verheffen"],1),
    q(10,"Communicatie","Wat is onjuist bij communicatie?",["Respectvol blijven","De klant kleineren","Duidelijk zijn"],1),

    q(11,"Betaling","Wanneer is het juiste moment om af te rekenen?",["Tijdens de rit","Aan het einde van de rit","Alleen vooraf"],1),
    q(12,"Betaling","Pin werkt niet. Wat is professioneel?",["Klant laten gaan","Alternatief zoeken volgens procedure","Boos worden"],1),
    q(13,"Betaling","Klant wil contant betalen, jij hebt geen wisselgeld. Wat doe je?",["Extra rekenen","Vooraf bespreken en oplossing zoeken","Rit annuleren"],1),
    q(14,"Betaling","Wat is onprofessioneel bij betaling?",["Duidelijk uitleggen","Discussie starten","Rustig blijven"],1),
    q(15,"Betaling","Waarom is correcte betaling belangrijk?",["Alleen voor omzet","Voor vertrouwen en correcte administratie","Alleen voor belasting"],1),

    q(16,"Bon","Wanneer moet je een bon kunnen geven?",["Nooit","Op verzoek van de klant","Alleen zakelijk"],1),
    q(17,"Bon","Wat hoort minimaal op een correcte bon?",["Alleen bedrag","Datum, bedrag en ritgegevens","Alleen naam chauffeur"],1),
    q(18,"Bon","Printer defect. Wat doe je?",["Zeggen dat het niet kan","Alternatief aanbieden volgens werkwijze","Niets doen"],1),
    q(19,"Factuur","Klant vraagt factuur met bedrijfsgegevens. Wat doe je?",["Weigeren","Volgens procedure verstrekken","Alleen mondeling bedrag noemen"],1),
    q(20,"Factuur","Waarom is een correcte factuur belangrijk?",["Voor reclame","Voor administratie en eventuele klachten","Alleen voor de klant"],1),

    q(21,"Klachten","Klant wil een klacht indienen. Wat doe je?",["Afkappen","Rustig uitleggen hoe dat kan","Boos reageren"],1),
    q(22,"Klachten","Wat is professioneel bij een klacht tijdens de rit?",["Escaleren","Luisteren en rustig blijven","Klant negeren"],1),
    q(23,"Klachten","Waarom is het belangrijk klachten serieus te nemen?",["Voor reviews","Voor verbetering en vertrouwen","Omdat het moet"],1),
    q(24,"Klachten","Wat is onprofessioneel bij klachten?",["Luisteren","Defensief en aanvallend reageren","Oplossing zoeken"],1),
    q(25,"Klachten","Wat is een goede houding na een klacht?",["Wrok","Reflecteren en leren","Klant onthouden"],1),

    q(26,"Nazorg","Klant laat iets achter in de taxi. Wat doe je?",["Houden","Volgens gevonden-voorwerpenprocedure handelen","Weggooien"],1),
    q(27,"Nazorg","Waarom is correcte nazorg belangrijk?",["Voor imago","Voor vertrouwen en professionaliteit","Alleen voor reviews"],1),
    q(28,"Nazorg","Wat doe je als een klant later belt over een rit?",["Geen info geven","Binnen regels helpen of doorverwijzen","Direct ophangen"],1),
    q(29,"Nazorg","Wat is onjuist bij nazorg?",["Correct registreren","Informatie delen zonder check","Professioneel blijven"],1),
    q(30,"Nazorg","Wat is een voorbeeld van goede nazorg?",["Klant negeren","Netjes afhandelen volgens procedure","Discussie starten"],1),

    q(31,"Professionaliteit","Wat straalt professionaliteit het meest uit?",["Haast","Rust en beheersing","Dominantie"],1),
    q(32,"Professionaliteit","Waarom is consistent gedrag belangrijk?",["Voor snelheid","Voor herkenbaarheid en vertrouwen","Voor controle"],1),
    q(33,"Professionaliteit","Wat doe je bij persoonlijke irritatie?",["Uitspreken op klant","Professioneel blijven","Rit stoppen"],1),
    q(34,"Professionaliteit","Wat is onprofessioneel gedrag?",["Beheerst blijven","Sarcastische opmerkingen","Uitleg geven"],1),
    q(35,"Professionaliteit","Waarom hoort service bij veiligheid?",["Omdat het leuk is","Rustige klanten zorgen voor minder risico","Voor omzet"],1),

    q(36,"Ethiek","Wat is ethisch taxiwerk?",["Maximale winst","Eerlijk, transparant en volgens regels","Zo snel mogelijk rijden"],1),
    q(37,"Ethiek","Wat doe je als een klant iets illegaals vraagt?",["Meewerken","Weigeren en professioneel blijven","Negeren"],1),
    q(38,"Ethiek","Waarom zijn grenzen stellen belangrijk?",["Voor controle","Voor veiligheid en respect","Voor snelheid"],1),
    q(39,"Ethiek","Wat is onethisch gedrag?",["Regels volgen","Misbruik maken van onwetende klanten","Uitleg geven"],1),
    q(40,"Samenvatting","Wat is de kern van uitstekende klantservice in taxiwerk?",["Altijd gelijk krijgen","Veilig, eerlijk, duidelijk en respectvol handelen","Zo veel mogelijk ritten"],1),

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
  TAXI_EXAMEN_11,
  TAXI_EXAMEN_12,
  TAXI_EXAMEN_13,
  TAXI_EXAMEN_14,
  TAXI_EXAMEN_15
];

window.EXAM_DATA = { exams };
window.EXAMS = exams;
window.exams = exams;
window.ggExams = exams;

})();
