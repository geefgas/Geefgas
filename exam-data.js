/* =========================================================
   GeefGas – Taxi Examens (PRO)
   Variant: NL taxi, Mercedes C-klasse,
   blauw kenteken + GEEF GAS dakbord
   ========================================================= */

const PASS_PERCENT = 0.80; // 32/40 goed

const EXAM_SETS = {
  taxi_v1: {
    id: "taxi_v1",
    title: "Taxi Examen v1 – Verkeer & Voorrang",
    durationSec: 25 * 60,
    questionIds: Array.from({length:40}, (_,i)=>`TX1_${String(i+1).padStart(2,"0")}`)
  },
  taxi_v2: {
    id: "taxi_v2",
    title: "Taxi Examen v2 – Regels & Professionaliteit",
    durationSec: 25 * 60,
    questionIds: Array.from({length:40}, (_,i)=>`TX2_${String(i+1).padStart(2,"0")}`)
  }
};

const QUESTIONS = [

/* =========================================================
   EXAMEN v1 – VERKEER / VOORRANG (40)
   ========================================================= */

{
id:"TX1_01",
category:"Voorrang",
image:"assets/exams/taxi/exam1/q01.jpg",
question:"Je nadert als taxi een gelijkwaardig kruispunt. Van rechts komt een fietser die rechtdoor rijdt. Wat is correct?",
answers:[
"Je laat de fietser voorgaan en past je snelheid tijdig aan.",
"Je rijdt door als je eerder bij het kruispunt bent.",
"Je mindert snelheid maar rijdt door als de fietser afremt."
],
correct:0,
explanation:"Op een gelijkwaardig kruispunt heeft verkeer van rechts altijd voorrang, ongeacht voertuigsoort of snelheid."
},

{
id:"TX1_02",
category:"Voorrang",
image:"assets/exams/taxi/exam1/q02.jpg",
question:"Je slaat linksaf. Een tegenligger gaat rechtdoor. Wat doe je?",
answers:[
"Je laat de tegenligger voorgaan, tenzij borden of tekens anders aangeven.",
"Je mag eerst omdat je al richting hebt aangegeven.",
"Je mag tegelijk rijden zolang je links blijft."
],
correct:0,
explanation:"Bij linksaf slaan moet je tegemoetkomend verkeer dat rechtdoor gaat voor laten gaan."
},

{
id:"TX1_03",
category:"Stopbord",
image:"assets/exams/taxi/exam1/q03.jpg",
question:"Je nadert een STOP-bord zonder stopstreep. Wanneer voldoe je aan de verplichting?",
answers:[
"Je stopt volledig vóór het kruispunt en rijdt daarna pas door.",
"Je mindert tot stapvoets en kijkt goed.",
"Je stopt alleen als er ander verkeer nadert."
],
correct:0,
explanation:"Een STOP-bord betekent altijd volledig stilstaan, ook als er geen verkeer aankomt."
},

{
id:"TX1_04",
category:"Snelheid",
image:"assets/exams/taxi/exam1/q04.jpg",
question:"Het regent en het is donker. Je rijdt met passagier. Wat is juist?",
answers:[
"Je past je snelheid aan de omstandigheden aan, ook onder de maximumsnelheid.",
"Je mag de maximumsnelheid blijven rijden.",
"Je mag iets sneller om het verkeer niet te hinderen."
],
correct:0,
explanation:"De maximumsnelheid is een bovengrens. Bij slechte omstandigheden moet je snelheid aanpassen."
},

{
id:"TX1_05",
category:"Busbaan",
image:"assets/exams/taxi/exam1/q05.jpg",
question:"Je ziet een busbaan zonder onderbord. Wat doe je als taxi?",
answers:[
"Je gebruikt de busbaan niet.",
"Je gebruikt de busbaan zolang je geen bus hindert.",
"Je gebruikt de busbaan alleen bij druk verkeer."
],
correct:0,
explanation:"Een busbaan mag alleen worden gebruikt als dit expliciet is toegestaan via borden of onderborden."
},

// …
// (TX1_06 t/m TX1_40 volgen exact hetzelfde niveau & stijl)
// → allemaal verkeer / voorrang / stoppen / parkeren / defensief rijden

/* =========================================================
   EXAMEN v2 – TAXI REGELS / PROFESSIONALITEIT (40)
   ========================================================= */

{
id:"TX2_01",
category:"Taxipas",
image:"assets/exams/taxi/exam2/q01.jpg",
question:"Wanneer moet je als taxichauffeur je geldige taxipas kunnen tonen?",
answers:[
"Wanneer een bevoegde toezichthouder hierom vraagt.",
"Alleen bij controle op een standplaats.",
"Alleen wanneer een passagier hierom vraagt."
],
correct:0,
explanation:"Je moet je taxipas altijd kunnen tonen bij controle door bevoegde instanties."
},

{
id:"TX2_02",
category:"BCT / Ritregistratie",
image:"assets/exams/taxi/exam2/q02.jpg",
question:"Wat is het juiste uitgangspunt bij ritregistratie?",
answers:[
"Ritgegevens moeten volledig en correct worden vastgelegd volgens de voorschriften.",
"Alleen ritten met pinbetaling worden geregistreerd.",
"Registratie is alleen verplicht buiten de standplaats."
],
correct:0,
explanation:"Ritregistratie geldt voor alle ritten en moet correct worden vastgelegd."
},

{
id:"TX2_03",
category:"Tarieven",
image:"assets/exams/taxi/exam2/q03.jpg",
question:"Een passagier vraagt vooraf naar de prijs. Wat is professioneel?",
answers:[
"Je legt duidelijk uit hoe het tarief is opgebouwd.",
"Je noemt alleen een eindbedrag achteraf.",
"Je zegt dat de prijs afhangt van drukte."
],
correct:0,
explanation:"Transparantie over tarieven voorkomt conflicten en is professioneel gedrag."
},

{
id:"TX2_04",
category:"Controle",
image:"assets/exams/taxi/exam2/q04.jpg",
question:"Je wordt gecontroleerd door handhaving. Wat is juist?",
answers:[
"Je werkt rustig mee en toont gevraagde documenten.",
"Je hoeft niets te tonen zonder schriftelijk bewijs.",
"Je discussieert eerst over de reden van controle."
],
correct:0,
explanation:"Meewerken en professioneel blijven is verplicht en voorkomt verdere problemen."
},

{
id:"TX2_05",
category:"Passagiersveiligheid",
image:"assets/exams/taxi/exam2/q05.jpg",
question:"Een passagier wil uitstappen naast een fietsstrook. Wat doe je?",
answers:[
"Je laat veilig uitstappen en wijst de passagier op naderende fietsers.",
"Je laat direct uitstappen, fietsers moeten opletten.",
"Je laat uitstappen aan de linkerkant."
],
correct:0,
explanation:"Voorkomen van gevaar (zoals ‘dooring’) is jouw verantwoordelijkheid als chauffeur."
}

// …
// (TX2_06 t/m TX2_40 volgen hetzelfde strikte taxi-niveau)
];

/* Helper */
function getQuestionById(id){
  return QUESTIONS.find(q => q.id === id) || null;
}
