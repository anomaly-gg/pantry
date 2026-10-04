/* Cook tab: recipes you can make now, then ones that need one or two things. */

const COOK_FILTERS = [["quick", "Quick (20 min)"], ["breakfast", "Breakfast"], ["soup", "Soup"], ["kids", "Kid-friendly"],
  ["healthy", "Healthy"], ["cheap", "Cheap"], ["onepot", "One pan"], ["comfort", "Comfort food"], ["spicy", "Spicy"]];
const cookUi = { tags: new Set(), style: null, q: "", shown: { 0: 12, 1: 8, 2: 6 } };

function renderCook() {
  const view = document.getElementById("view-cook");
  const items = pantryList();
  if (!items.length) {
    view.replaceChildren(
      h("div", { class: "view-head" }, h("h2", { text: "What can I cook?" })),
      h("div", { class: "empty" }, h("h3", { text: "Add your pantry first" }),
        h("p", { text: "Pantry Chef matches " + RECIPES.length + " recipes against what you have. Tell it what's in your kitchen to get started." }),
        h("button", { class: "btn primary", onclick: () => setTab("pantry") }, "Go to pantry")));
    return;
  }
  const keepFocus = document.activeElement && document.activeElement.id === "cookSearch";
  const search = h("input", { class: "field-input search", id: "cookSearch", type: "search", value: cookUi.q, placeholder: "Search recipes or ingredients",
    "aria-label": "Search recipes", oninput: e => { cookUi.q = e.target.value; renderCookResults(); } });
  const filters = h("div", { class: "chips scroll", role: "group", "aria-label": "Filters" },
    COOK_FILTERS.map(([k, label]) => h("button", { class: "chip", "aria-pressed": cookUi.tags.has(k) ? "true" : "false",
      onclick: () => { cookUi.tags.has(k) ? cookUi.tags.delete(k) : cookUi.tags.add(k); renderCook(); } }, label)),
    Object.entries(STYLE_LABEL).map(([k, label]) => h("button", { class: "chip", "aria-pressed": cookUi.style === k ? "true" : "false",
      onclick: () => { cookUi.style = cookUi.style === k ? null : k; renderCook(); } }, label)));

  view.replaceChildren(
    h("div", { class: "view-head" }, h("h2", { text: "What can I cook?" }),
      h("p", { text: "From your " + plural(items.length, "item") + ", for " + plural(S.prefs.servings, "person", "people") + "." })),
    h("div", { class: "search-wrap" }, icon("search", 18), search),
    filters,
    h("div", { id: "cookResults", class: "cook-results" }));
  renderCookResults();
  if (keepFocus) { search.focus(); search.setSelectionRange(search.value.length, search.value.length); }
}

function renderCookResults() {
  const box = document.getElementById("cookResults");
  if (!box) return;
  const ranked = rankRecipes(S, { tags: [...cookUi.tags], style: cookUi.style, q: cookUi.q, maxMissing: 2 });
  const groups = [[0, "Ready to cook", "Everything's in your pantry."], [1, "Need one thing", null], [2, "Need two things", null]];
  const parts = [];
  if (!cookUi.q && !cookUi.tags.size && !cookUi.style) {
    const hints = unlockHints(S);
    if (hints.length) parts.push(h("div", { class: "unlock" },
      h("div", { class: "label", text: "Buy one thing, cook more" }),
      h("div", { class: "chips" }, hints.map(x => h("button", { class: "chip unlock-chip", title: "Add to shopping list",
        onclick: () => { addShop(ING[x.key].name, { key: x.key }); saveState(); updateBadges(); toast(ING[x.key].name + " added to your list"); } },
        icon("plus", 14), ING[x.key].name.replace(/\s*\(.*?\)/, ""), h("b", { class: "num", text: "+" + x.n })))),
      h("p", { class: "hint", text: "Each opens up more recipes. Tap to add it to your shopping list." })));
  }
  const avail = pantryAvail(S);
  let any = false;
  for (const [n, title, sub] of groups) {
    const list = ranked.filter(st => Math.min(st.missing.length, 2) === n && (n < 2 || st.missing.length === 2));
    if (!list.length) continue;
    any = true;
    const shown = list.slice(0, cookUi.shown[n]);
    parts.push(h("section", { class: "cook-group" },
      h("div", { class: "group-head" }, h("h3", { class: "label", text: title }), h("span", { class: "num count", text: list.length })),
      sub && n === 0 ? h("p", { class: "hint", text: sub }) : null,
      h("div", { class: "rcards" }, shown.map(st => recipeCard(st, r => openRecipe(r), avail))),
      list.length > shown.length ? h("button", { class: "btn ghost block", onclick: () => { cookUi.shown[n] += 12; renderCookResults(); } }, "Show " + Math.min(12, list.length - shown.length) + " more") : null));
  }
  if (!any) parts.push(h("div", { class: "empty" }, h("h3", { text: "No matches" }),
    h("p", { text: cookUi.q || cookUi.tags.size || cookUi.style ? "Try fewer filters or another search." : "Add a few more basics like rice, eggs, garlic and onion to unlock recipes." })));
  parts.push(aiCard());
  box.replaceChildren(...parts);
}

function aiCard() {
  return h("div", { class: "ai-card" },
    h("div", null, h("b", { text: "Want more ideas?" }),
      h("p", { class: "hint", text: "Copy a ready-made prompt with your pantry, then paste it into ChatGPT, Gemini or Claude. It's free and the app doesn't send anything itself." })),
    h("button", { class: "btn", onclick: async () => { toast(await copyText(aiPrompt(S)) ? "Copied. Paste it into your AI app." : "Couldn't copy on this device"); } },
      icon("copy", 16), "Copy prompt"));
}
