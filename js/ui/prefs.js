/* Preferences sheet: people, cooking style, buying extras, meals to plan, kitchen basics, sync, data. */

let confirmClearPantry = false;

function openPrefs() {
  confirmClearPantry = false;
  openSheet({ title: "Preferences", build: body => {
    const p = S.prefs;
    const set = patch => { setPrefs(patch); render(); };

    const basics = h("div", { class: "chips" }, BASIC_CHOICES
      .sort((a, b) => (CATEGORIES.findIndex(c => c[0] === ING[a].cat) - CATEGORIES.findIndex(c => c[0] === ING[b].cat)) || ING[a].name.localeCompare(ING[b].name))
      .map(k => h("button", { class: "chip", "aria-pressed": p.basics.includes(k) ? "true" : "false", onclick: e => {
        const on = !p.basics.includes(k);
        setPrefs({ basics: on ? [...p.basics, k] : p.basics.filter(x => x !== k) });
        e.currentTarget.setAttribute("aria-pressed", on ? "true" : "false");
        render();
      } }, ING[k].name)));

    appendAll(body, 
      h("div", { class: "pref" }, h("div", { class: "label", text: "People eating" }),
        stepper(p.servings, 1, 12, v => set({ servings: v }), "People eating")),
      h("div", { class: "pref" }, h("div", { class: "label", text: "Cooking style you like most" }),
        segmented("style", [["filipino", "Filipino"], ["asian", "Asian"], ["western", "Western"], ["mix", "Mix it up"]], p.style, v => set({ style: v })),
        h("p", { class: "hint", text: "Your style goes first, but good matches from the others still show." })),
      h("div", { class: "pref" }, h("div", { class: "label", text: "Buying extra ingredients for the week plan" }),
        segmented("shop", [["none", "Only what I have"], ["few", "1 or 2 extras"], ["any", "Whatever it needs"]], p.shop, v => set({ shop: v }))),
      h("div", { class: "pref" }, h("div", { class: "label", text: "Meals in the week plan" }),
        h("div", { class: "seg" }, SLOT_ORDER.map(s => h("label", null,
          h("input", { type: "checkbox", checked: p.meals[s], onchange: e => set({ meals: Object.assign({}, p.meals, { [s]: e.target.checked }) }) }),
          h("span", { text: SLOT_NAMES[s] })))),
        p.meals.L && !p.meals.D ? h("label", { class: "check-row" },
          h("input", { type: "checkbox", checked: !!p.lunchCoversDinner, onchange: e => set({ lunchCoversDinner: e.target.checked }) }),
          h("span", { text: "Lunch lasts until dinner (cook double, pick dishes that keep)" })) : null),
      h("div", { class: "pref" }, h("div", { class: "label", text: "Always in my kitchen" }),
        h("p", { class: "hint", text: "Tick the seasonings you always keep. Recipes count them as available without listing them in the pantry." }),
        basics),
      syncSection(),
      installSection(),
      h("div", { class: "pref" }, h("div", { class: "label", text: "Your data" }),
        h("p", { class: "hint", text: "Everything is saved on this device" + (sync.id ? " and synced with your code." : ". Turn on sync to use it on another phone or your PC.") }),
        confirmClearPantry
          ? h("div", { class: "row" }, h("span", { text: "Remove all " + plural(pantryList().length, "item") + "?" }),
              h("button", { class: "btn danger", onclick: () => { clearPantry(); confirmClearPantry = false; refreshSheets(); render(); toast("Pantry cleared"); } }, "Yes, clear it"),
              h("button", { class: "btn", onclick: () => { confirmClearPantry = false; refreshSheets(); } }, "Cancel"))
          : h("button", { class: "btn danger", disabled: !pantryList().length, onclick: () => { confirmClearPantry = true; refreshSheets(); } }, "Clear pantry")),
      h("p", { class: "about hint", text: "Pantry Chef · " + RECIPES.length + " recipes · works offline. Recipes are matched by the app itself; nothing is sent to an AI." }));
  } });
}
