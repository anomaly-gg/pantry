/* Full recipe: what you have and need, ingredients for your number of people, steps, "I cooked this".
   `meal` is set when opened from the week plan (cooking it ticks the meal off). */

function openRecipe(r, meal) {
  // from the plan: the portions it was planned for; otherwise lunch dishes default to lasting until dinner
  const canDouble = !meal && lunchCoversDinner(S.prefs) && r.slots.includes("L");
  // breakfast-time visits to a dish that also works for breakfast start at one meal
  let twice = canDouble && !(r.slots.includes("B") && new Date().getHours() < 10);
  let servings = meal ? mealPortions(meal, S.prefs) : S.prefs.servings * (twice ? 2 : 1);
  openSheet({ title: "", wide: true, build: body => {
    const st = recipeStatus(r, pantryAvail(S), servings);
    const haveKeys = new Set(st.have.map(n => n.key));
    const missingKeys = new Set(st.missing.map(m => m.key));

    const head = h("div", { class: "recipe-head" },
      h("h2", { class: "title", text: r.name }),
      h("div", { class: "recipe-meta" },
        h("span", null, icon("clock", 16), h("span", { class: "num", text: r.min + " min" })),
        h("span", { text: STYLE_LABEL[r.style] }),
        r.tagSet.has("soup") ? h("span", { text: "Soup" }) : null,
        h("span", { class: "serves" }, icon("users", 16), stepper(servings, 1, 30, v => { servings = v; refreshSheets(); }, "People"))));

    const forWhen = canDouble ? h("div", { class: "seg small-seg", role: "radiogroup", "aria-label": "How much to cook" },
      [[false, "One meal"], [true, "Lunch + dinner"]].map(([v, label]) => h("label", null,
        h("input", { type: "radio", name: "cookFor", checked: twice === v, onchange: () => { twice = v; servings = S.prefs.servings * (v ? 2 : 1); refreshSheets(); } }),
        h("span", { text: label })))) : null;
    const keepNote = (meal ? meal.portions > S.prefs.servings : twice) && r.tagSet.has("nokeep")
      ? h("p", { class: "hint", text: "This one is best eaten fresh. For dinner, keep the extra in the fridge and reheat just before eating." }) : null;

    const status = st.missing.length
      ? h("div", { class: "recipe-status need" },
          h("div", null, h("b", { text: "You'd need: " }), needText(st.missing)),
          h("button", { class: "btn small", onclick: () => {
            for (const m of st.missing) addShop(ING[m.key].name, { key: m.key, amt: ING[m.key].track ? m.amt : null, forText: r.name });
            saveState(); updateBadges(); toast("Added to your shopping list");
          } }, icon("cart", 16), "Add to list"))
      : h("div", { class: "recipe-status ok" }, icon("check", 18), h("span", { text: "You have everything for this." }));

    const ingList = h("ul", { class: "ing-list" },
      r.items.map(i => h("li", { class: haveKeys.has(i.key) ? "have" : missingKeys.has(i.key) ? "need" : "opt" },
        h("span", { class: "mark", "aria-hidden": "true" }, haveKeys.has(i.key) ? icon("check", 14) : missingKeys.has(i.key) ? icon("cart", 14) : "·"),
        h("span", { text: ingredientLine(i, servings) + (i.opt ? " (optional)" : "") }))),
      r.withRice && !r.items.some(i => i.key === "rice") ? h("li", { class: haveKeys.has("rice") ? "have" : "need" },
        h("span", { class: "mark", "aria-hidden": "true" }, haveKeys.has("rice") ? icon("check", 14) : icon("cart", 14)),
        h("span", { text: "Rice to serve (about " + formatAmt(RICE_PER_SERVING * servings, ING.rice) + " uncooked)" })) : null);

    appendAll(body, head, forWhen, keepNote, status,
      h("section", { class: "recipe-sec" }, h("h3", { class: "label", text: "Ingredients" }), ingList),
      h("section", { class: "recipe-sec" }, h("h3", { class: "label", text: "Steps" + (servings !== 4 ? " (written for 4; use the amounts above)" : "") }),
        h("ol", { class: "steps" }, r.steps.map(s => h("li", { text: s })))),
      r.tip ? h("p", { class: "tip", text: r.tip }) : null,
      h("div", { class: "sheet-actions sticky" },
        meal && meal.done
          ? h("button", { class: "btn big block", onclick: () => { meal.done = false; S.planAt = Date.now(); syncPlanShopping(S, S.plan); saveState(); closeSheet(); render(); } }, "Mark as not cooked")
          : h("button", { class: "btn primary big block", onclick: () => openCooked(r, servings, meal) }, icon("check", 20), "I cooked this")));
  } });
}
