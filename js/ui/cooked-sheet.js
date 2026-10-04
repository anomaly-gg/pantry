/* "I cooked this": take what the recipe used out of the pantry. Shows each item before → after so the
   amounts can be corrected first, and the whole change can be undone. */

function openCooked(r, servings, meal) {
  const avail = pantryAvail(S);
  const rows = [];
  for (const n of recipeNeeds(r, servings)) {
    const ingr = ING[n.key];
    if (!ingr.track || n.amt == null || !avail.has(n.key) || avail.get(n.key).basic) continue;
    for (const it of Object.values(S.items).filter(i => i.key === n.key)) {
      let after = "", gone = false;
      if (it.amt != null) {
        const left = it.amt - n.amt;
        gone = left <= 0.0001;
        after = gone ? "" : formatAmt(left, ingr);
      }
      rows.push({ it, need: n.amt, after, gone, unknown: it.amt == null });
      break;     // take from the first matching item only
    }
  }
  openSheet({ title: "Update your pantry", build: body => {
    body.append(h("p", { class: "hint", text: rows.length
      ? "Here's what " + r.name + " used. Fix any amount, then save."
      : "This recipe didn't use anything with a counted amount, so there's nothing to take out." }));
    const list = h("ul", { class: "cooked-list" });
    for (const row of rows) {
      const ingr = ING[row.it.key];
      const left = h("input", { class: "field-input small", type: "text", value: row.after, placeholder: row.unknown ? "how much is left?" : "",
        "aria-label": "Left of " + row.it.name, disabled: row.gone ? "disabled" : null, oninput: e => { row.after = e.target.value; } });
      const usedUp = h("input", { type: "checkbox", checked: row.gone, onchange: e => { row.gone = e.target.checked; left.disabled = row.gone; if (!row.gone) left.focus(); } });
      list.append(h("li", null,
        h("div", { class: "cl-name" }, h("b", { text: row.it.name }),
          h("small", { text: (row.unknown ? "used about " : "had " + itemQtyText(row.it) + " · used ") + formatAmt(row.need, ingr) })),
        h("div", { class: "cl-after" }, h("span", { class: "label", text: "Left" }), left),
        h("label", { class: "check-row small" }, usedUp, h("span", { text: "Used up" }))));
    }
    body.append(list, h("div", { class: "row sheet-actions" },
      h("button", { class: "btn primary big", onclick: () => {
        const before = clone(S.items);
        for (const row of rows) {
          if (row.gone) removeItem(row.it.id, false);
          else if (row.after.trim() !== (row.unknown ? "" : itemQtyText(row.it))) setItemQty(row.it, row.after, false);
        }
        logCooked(r.id);
        if (meal) { meal.done = true; S.planAt = Date.now(); syncPlanShopping(S, S.plan); }
        saveState();
        closeAllSheets(); render();
        toast("Nice! Pantry updated", { label: "Undo", fn: () => {
          for (const id of Object.keys(before)) { S.items[id] = Object.assign(before[id], { at: Date.now() }); delete S.itemsDel[id]; }
          S.cooked.pop();
          if (meal) { meal.done = false; S.planAt = Date.now(); syncPlanShopping(S, S.plan); }
          saveState(); render();
        } });
      } }, rows.length ? "Save" : "Done"),
      h("button", { class: "btn", onclick: () => closeSheet() }, "Cancel")));
  } });
}
