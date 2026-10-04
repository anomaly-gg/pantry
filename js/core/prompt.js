/* "Ask an AI for more ideas": builds a prompt to paste into any chat assistant (ChatGPT, Gemini, Claude).
   Free, nothing to set up, and the app never sends your pantry anywhere itself. No DOM. */

function aiPrompt(state) {
  const p = state.prefs;
  const lines = pantryList().map(i => "- " + i.name + (itemQtyText(i) ? " (" + itemQtyText(i) + ")" : "") + (i.soon ? " [use soon]" : ""));
  const basics = p.basics.map(k => ING[k] ? ING[k].name : k).join(", ");
  const style = { filipino: "Filipino home cooking", asian: "Asian home cooking", western: "Western home cooking", mix: "any cuisine" }[p.style];
  const shop = { none: "Use only what I have.", few: "I can buy one or two cheap extra ingredients.", any: "I don't mind buying extra ingredients." }[p.shop];
  return [
    "Suggest 5 recipes I can cook with what I have at home. I cook for " + plural(p.servings, "person", "people") + " and like " + style + ".",
    shop + " Use the items marked [use soon] first. No oven.",
    lunchCoversDinner(p) ? "We cook breakfast and lunch only. Lunch is cooked big enough to also be dinner, so lunch dishes must keep well for a few hours and reheat well." : "",
    "",
    "My pantry:",
    ...lines,
    "",
    "Always available: " + basics + ".",
    "",
    "For each recipe give: name, cooking time, ingredients with amounts, short numbered steps, and anything I'd need to buy.",
  ].join("\n");
}
