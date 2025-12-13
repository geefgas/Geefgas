// GeefGas – Exam Data (Taxi) v2
// Nu: image + uitleg + thema

function svgDataUrl(svg) {
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const IMG_KRUISPUNT = svgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="650" viewBox="0 0 1200 650">
  <defs>
    <linearGradient id="g" x1="0" x2="1">
      <stop offset="0" stop-color="#12121A"/>
      <stop offset="1" stop-color="#0B0B0F"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="650" fill="url(#g)"/>
  <rect x="0" y="280" width="1200" height="90" fill="#1E1E2A"/>
  <rect x="560" y="0" width="90" height="650" fill="#1E1E2A"/>
  <path d="M40 325 h1120" stroke="#E0B84A" stroke-width="6" stroke-dasharray="18 18" opacity="0.55"/>
  <path d="M605 40 v560" stroke="#E0B84A" stroke-width="6" stroke-dasharray="18 18" opacity="0.55"/>

  <!-- taxi -->
  <rect x="520" y="470" width="70" height="120" rx="14" fill="#E0B84A"/>
  <text x="555" y="540" font-family="Arial" font-size="22" text-anchor="middle" fill="#0B0B0F" font-weight="700">TAXI</text>

  <!-- cyclist -->
  <circle cx="880" cy="325" r="18" fill="#F5F5F7"/>
  <rect x="860" y="315" width="70" height="20" rx="10" fill="#B6B6C2"/>
  <text x="895" y="300" font-family="Arial" font-size="18" text-anchor="middle" fill="#F5F5F7">fiets</text>

  <!-- hint -->
  <text x="60" y="80" font-family="Arial" font-size="28" fill="#F5F5F7" font-weight="700">Situatie (placeholder)</text>
  <text x="60" y="118" font-family="Arial" font-size="18" fill="#B6B6C2">Kruispunt zonder borden: rechts heeft voorrang.</text>
</svg>
`);

const IMG_BORD = svgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="650" viewBox="0 0 1200 650">
  <rect width="1200" height="650" fill="#0B0B0F"/>
  <text x="60" y="90" font-family="Arial" font-size="28" fill="#F5F5F7" font-weight="700">Bord (placeholder)</text>
  <text x="60" y="130" font-family="Arial" font-size="18" fill="#B6B6C2">Deze afbeeldingen vervangen we later door jouw eigen visuals.</text>

  <rect x="520" y="160" width="160" height="340" rx="20" fill="#12121A" stroke="#E0B84A" stroke-width="6"/>
  <polygon points="600,210 660,310 540,310" fill="#E0B84A"/>
  <rect x="585" y="310" width="30" height="120" fill="#E0B84A"/>
</svg>
`);

const IMG_WEER = svgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="650" viewBox="0 0 1200 650">
  <rect width="1200" height="650" fill="#0B0B0F"/>
  <text x="60" y="90" font-family="Arial" font-size="28" fill="#F5F5F7" font-weight="700">Slecht zicht (placeholder)</text>
  <text x="60" y="130" font-family="Arial" font-size="18" fill="#B6B6C2">Regen/mist: pas snelheid aan en houd extra afstand.</text>

  <circle cx="220" cy="230" r="70" fill="#E0B84A" opacity="0.25"/>
  <circle cx="310" cy="250" r="90" fill="#E0B84A" opacity="0.18"/>
  <circle cx="410" cy="240" r="70" fill="#E0B84A" opacity="0.14"/>

  <rect x="120" y="360" width="960" height="90" fill="#171723"/>
  <path d="M150 405 h900" stroke="#E0B84A" stroke-width="6" stroke-dasharray="18 18" opacity="0.55"/>
  <rect x="240" y="335" width="90" height="60" rx="14" fill="#F5F5F7"/>
  <rect x="420" y="335" width="90" height="60" rx="14" fill="#B6B6C2"/>
</svg>
`);

const IMG_STREEP = svgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="650" viewBox="0 0 1200 650">
  <rect width="1200" height="650" fill="#0B0B0F"/>
  <text x="60" y="90" font-family="Arial" font-size="28" fill="#F5F5F7" font-weight="700">Markering (placeholder)</text>
  <text x="60" y="130" font-family="Arial" font-size="18" fill="#B6B6C2">Doorgetrokken streep: niet overschrijden.</text>

  <rect x="120" y="300" width="960" height="120" fill="#171723"/>
  <path d="M600 310 v100" stroke="#E0B84A" stroke-width="12"/>
  <rect x="260" y="330" width="110" height="60" rx="14" fill="#E0B84A"/>
  <rect x="840" y="330" width="110" height="60" rx="14" fill="#B6B6C2"/>
</svg>
`);

const IMG_HALTE = svgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="650" viewBox="0 0 1200 650">
  <rect width="1200" height="650" fill="#0B0B0F"/>
  <text x="60" y="90" font-family="Arial" font-size="28" fill="#F5F5F7" font-weight="700">Stoppen / Halte (placeholder)</text>
  <text x="60" y="130" font-family="Arial" font-size="18" fill="#B6B6C2">Stoppen mag alleen voor in-/uitstappen waar dat is toegestaan.</text>

  <rect x="120" y="340" width="960" height="90" fill="#171723"/>
  <path d="M150 385 h900" stroke="#E0B84A" stroke-width="6" stroke-dasharray="18 18" opacity="0.55"/>
  <rect x="260" y="310" width="120" height="60" rx="14" fill="#E0B84A"/>
  <text x="320" y="348" font-family="Arial" font-size="18" text-anchor="middle" fill="#0B0B0F" font-weight="700">TAXI</text>

  <rect x="940" y="250" width="18" height="160" fill="#B6B6C2"/>
  <rect x="910" y="240" width="80" height="36" rx="10" fill="#12121A" stroke="#E0B84A" stroke-width="3"/>
  <text x="950" y="266" font-family="Arial" font-size="16" text-anchor="middle" fill="#F5F5F7">halte</text>
</svg>
`);

const EXAM_QUESTIONS = [
  {
    id: 1,
    theme: "Voorrang",
    image: IMG_KRUISPUNT,
    question: "Wie heeft voorrang op dit kruispunt?",
    answers: ["De taxi", "De fietser van rechts", "De tegenligger"],
    correct: 1,
    explanation:
      "Op een gelijkwaardig kruispunt (zonder voorrangsborden/tekens) geldt: verkeer van rechts gaat voor. Dus de fietser van rechts heeft voorrang."
  },
  {
    id: 2,
    theme: "Verkeersborden",
    image: IMG_BORD,
    question: "Wat moet je doen bij dit bord (waarschuwingsbord)?",
    answers: ["Stoppen", "Snelheid verminderen en extra opletten", "Altijd voorrang verlenen"],
    correct: 1,
    explanation:
      "Waarschuwingsborden geven een gevaarlijke situatie aan. Je past je snelheid aan en bent extra alert. Stoppen is alleen verplicht bij STOP-bord of wanneer de situatie dat vereist."
  },
  {
    id: 3,
    theme: "Zicht & veiligheid",
    image: IMG_WEER,
    question: "Wat is correct rijgedrag bij slecht zicht?",
    answers: ["Zelfde snelheid aanhouden", "Snelheid aanpassen en afstand vergroten", "Dichter op je voorligger rijden"],
    correct: 1,
    explanation:
      "Bij regen/mist heb je minder zicht en langere remweg. Daarom: snelheid omlaag en extra afstand. Dicht op je voorligger rijden maakt het juist gevaarlijk."
  },
  {
    id: 4,
    theme: "Stoppen & stilstaan",
    image: IMG_HALTE,
    question: "Wanneer is stoppen met de taxi correct?",
    answers: ["Altijd, overal waar ruimte is", "Alleen waar het mag en voor in-/uitstappen", "Nooit"],
    correct: 1,
    explanation:
      "Stoppen mag alleen als het is toegestaan (geen verbodsborden/gevaarlijke plek) en bij taxi vooral functioneel: passagiers in-/uit laten stappen zonder de doorstroming/veiligheid te verstoren."
  },
  {
    id: 5,
    theme: "Wegmarkering",
    image: IMG_STREEP,
    question: "Wat betekent een doorgetrokken streep?",
    answers: ["Inhalen toegestaan", "Niet overschrijden (inhalen verboden)", "Alleen overschrijden als je haast hebt"],
    correct: 1,
    explanation:
      "Een doorgetrokken streep mag je niet overschrijden. Dat betekent in de praktijk vaak: inhalen verboden of rijstrook niet wisselen over die lijn."
  }
];
