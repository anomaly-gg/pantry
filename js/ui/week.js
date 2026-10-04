/* Week tab: a 7-day plan built from the pantry, with swap and "cooked" per meal. */

let confirmReplan = false;

function makePlan() {
  S.plan = buildWeek(S, Math.floor(Math.random() * 1e9));
  S.planAt = Date.now();
  syncPlanShopping(S, S.plan);
  saveState();
  confirmReplan = false;
  render();
  const buy = shopList().filter(s => s.src === "plan" && !s.got).length;
  toast(buy ? "Week planned. " + plural(buy, "thing") + " to buy." : "Week planned, all from your pantry");
}

function renderWeek() {
  const view = document.getElementById("view-week");
  const plan = S.plan;
  const today = planDayIndex(plan);
  const current = plan && today >= 0;
  const slots = planSlots(S.prefs);
  const who = slots.map(s => SLOT_NAMES[s].toLowerCase()).join(", ").replace(/, ([^,]*)$/, " and $1")
    + (lunchCoversDinner(S.prefs) ? " (lunch made big enough for dinner)" : "") + " for " + plural(S.prefs.servings, "person", "people");

  const head = h("div", { class: "view-head" }, h("h2", { text: "Your week" }),
    h("p", { text: current ? "Built from your pantry. Tap a meal for the recipe." : "Seven days of " + who + ", built from what you have." }));

  if (!current) {
    view.replaceChildren(head, h("div", { class: "empty plan-empty" },
      h("h3", { text: plan ? "Last week's plan is over" : "No plan yet" }),
      h("p", { text: pantryList().length
        ? "The planner uses fresh food first and canned food later, never plans more of something than you have, and puts anything missing on your shopping list."
        : "Add your pantry first so the plan can use it. You can still plan now; everything would go on the shopping list." }),
      h("button", { class: "btn primary big", disabled: !slots.length, onclick: makePlan }, plan ? "Plan this week" : "Plan my week"),
      h("button", { class: "btn ghost", onclick: openPrefs }, "Change people or meals")));
    return;
  }

  const buying = shopList().filter(s => s.src === "plan" && !s.got);
  const cooked = plan.meals.filter(m => m.done).length;
  const bar = h("div", { class: "plan-bar" },
    h("div", { class: "plan-stats" },
      h("div", null, h("b", { class: "num", text: cooked + "/" + plan.meals.length }), h("span", { text: "cooked" })),
      h("button", { class: "plan-buy", onclick: () => setTab("list") }, h("b", { class: "num", text: buying.length }), h("span", { text: "to buy" }))),
    confirmReplan
      ? h("div", { class: "row" }, h("span", { class: "hint", text: "Replace this plan?" }),
          h("button", { class: "btn small primary", onclick: makePlan }, "Yes, new plan"),
          h("button", { class: "btn small", onclick: () => { confirmReplan = false; renderWeek(); } }, "Cancel"))
      : h("button", { class: "btn small", onclick: () => { confirmReplan = true; renderWeek(); } }, icon("swap", 16), "New plan"));
  const lunchNow = lunchCoversDinner(S.prefs), lunchThen = plan.meals.some(m => m.slot === "L" && m.portions > plan.servings);
  if (lunchNow !== lunchThen && plan.meals.some(m => m.slot === "L")) bar.append(h("p", { class: "hint", text: lunchNow
    ? "This plan cooks lunch for one meal only. Make a new plan so lunch lasts until dinner."
    : "This plan doubles lunch for dinner. Make a new plan to use your new setting." }));
  if (plan.servings !== S.prefs.servings) bar.append(h("p", { class: "hint", text: "This plan is for " + plural(plan.servings, "person", "people") + ". Make a new plan to use your new setting." }));

  const start = fromIso(plan.start);
  const days = [];
  for (let d = 0; d < 7; d++) {
    const meals = plan.meals.filter(m => m.d === d).sort((a, b) => SLOT_ORDER.indexOf(a.slot) - SLOT_ORDER.indexOf(b.slot));
    const date = addDays(start, d);
    days.push(h("section", { class: "day" + (d < today ? " past" : "") + (d === today ? " today" : ""), id: d === today ? "today" : null },
      h("div", { class: "day-head" },
        h("h3", { text: date.toLocaleDateString("en-US", { weekday: "long" }) }),
        h("span", { class: "date num", text: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }) }),
        d === today ? h("span", { class: "pill", text: "Today" }) : null),
      meals.length ? h("ul", { class: "meals" }, meals.map(mealRow)) : h("p", { class: "hint", text: "Nothing planned." })));
  }
  view.replaceChildren(head, bar, ...days);
}

function mealRow(m) {
  const r = RECIPE_BY_ID[m.rid];
  if (!r) return h("li", { class: "meal" }, h("span", { class: "hint", text: "This recipe is no longer in the book. Swap it." }));
  return h("li", { class: "meal" + (m.done ? " done" : "") },
    h("span", { class: "slot", text: m.slot === "L" && m.portions > S.prefs.servings ? "Lunch + dinner" : SLOT_NAMES[m.slot] }),
    h("button", { class: "meal-main", onclick: () => openRecipe(r, m) },
      h("span", { class: "meal-name", text: r.name }),
      h("span", { class: "meal-sub" },
        h("span", { class: "num", text: r.min + " min" }),
        m.portions ? h("span", { class: "num", text: m.portions + " servings" }) : null,
        m.done ? h("span", { class: "ok", text: "Cooked" })
          : m.missing.length ? h("span", { class: "buy", text: "Buy " + needText(m.missing) })
          : h("span", { class: "ok", text: "All from pantry" }))),
    m.done ? h("span", { class: "done-mark", "aria-label": "Cooked" }, icon("check", 20))
      : h("button", { class: "icon-btn swap", "aria-label": "Swap " + r.name, title: "Swap", onclick: () => openSwap(m) }, icon("swap", 20)));
}
