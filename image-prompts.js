/* =========================================================
   GeefGas – Image Prompt Builder
   Doel: consistente NL taxi visuals (copyright-vrij)
   Variant: Mercedes C-klasse taxi, blauw kenteken "GEEF GAS",
   dakbord "GEEF GAS"
   ========================================================= */

const GG_IMAGE_STYLE = `
Photorealistic, modern Dutch street scene in the Netherlands.
Clear Dutch road markings and realistic Dutch traffic signage.
Main vehicle: a black Mercedes C-Class sedan taxi (C220 style), clean and modern.
Taxi roof sign text: "GEEF GAS" (readable).
Blue license plate text: "GEEF GAS" (readable).
No visible brand logos besides the taxi sign and plate.
No copyrighted artwork, no real company logos.
No readable faces, no celebrity likeness.
High detail, natural lighting, realistic shadows.
Camera: eye-level, 35mm, slight depth of field.
Aspect ratio 16:9.
`;

/**
 * Build a consistent prompt from a question object.
 * Works best when q.question contains the situation.
 */
function buildGeefGasPrompt(q){
  const cat = (q.category || "Taxi").toLowerCase();

  // Category-based scene guidance (keeps style consistent)
  let sceneHint = "";
  if (cat.includes("voorrang") || cat.includes("kruispunt")) {
    sceneHint = "Scene: a Dutch urban intersection with clear priority situation, cyclist lane visible, safe realistic spacing.";
  } else if (cat.includes("parkeren") || cat.includes("stoppen")) {
    sceneHint = "Scene: a Dutch street with parking bays / curbside stop area, cyclists nearby, safe passenger drop-off context.";
  } else if (cat.includes("busbaan")) {
    sceneHint = "Scene: Dutch road with a marked bus lane and clear lane markings; taxi drives in normal lane.";
  } else if (cat.includes("verkeerslichten") || cat.includes("lichten")) {
    sceneHint = "Scene: Dutch junction with traffic lights clearly visible; correct stop lines and pedestrian crossing.";
  } else if (cat.includes("fiets") || cat.includes("fietser")) {
    sceneHint = "Scene: Dutch bicycle infrastructure clearly visible (bike lane / cyclist crossing).";
  } else if (cat.includes("controle") || cat.includes("handhaving")) {
    sceneHint = "Scene: roadside inspection in the Netherlands, neutral official vehicle without logos, taxi pulled over safely.";
  } else {
    sceneHint = "Scene: realistic Dutch road situation matching the question context.";
  }

  // Use the question text as main scenario
  const scenario = `Scenario: ${q.question}`;

  // Negative prompts to avoid ugly AI artifacts
  const negatives = `
Avoid: distorted text, garbled letters, incorrect spelling, extra limbs, warped car shape,
watermarks, random UI overlays, cartoon style, overly dark scene.
`;

  return `${GG_IMAGE_STYLE}\n${sceneHint}\n${scenario}\n${negatives}`.trim();
}

// Export helper for your app if needed
function getPromptByQuestionId(id){
  const q = (typeof QUESTIONS !== "undefined") ? QUESTIONS.find(x => x.id === id) : null;
  if (!q) return null;
  return buildGeefGasPrompt(q);
}
