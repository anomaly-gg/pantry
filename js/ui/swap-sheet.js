/* Swap one planned meal for another that fits what's left in the pantry. */

function openSwap(meal) {
  const day = addDays(fromIso(S.plan.start), meal.d).toLocaleDateString("en-US", { weekday: "long" });
  openSheet({ title: "Swap " + day + " " + SLOT_NAMES[meal.slot].toLowerCase(), build: body => {
    const opts = swapOptions(S, S.plan, meal, 8);
    const now = RECIPE_BY_ID[meal.rid];
    appendAll(body, h("p", { class: "hint", text: "Instead of " + (now ? now.name : "this meal") + ". These fit what's left after the rest of the week." }));
    if (!opts.length) { appendAll(body, h("p", { class: "hint", text: "No other recipes fit this meal right now." })); return; }
    const avail = availExcept(S, S.plan, meal);
    appendAll(body, h("div", { class: "rcards" }, opts.map(st => recipeCard(st, r => {
      swapMeal(S, S.plan, meal, r.id);
      S.planAt = Date.now();
      syncPlanShopping(S, S.plan);
      saveState();
      closeSheet(); render();
      toast("Swapped in " + r.name);
    }, avail))));
  } });
}
