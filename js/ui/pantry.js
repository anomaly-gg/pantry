/* Pantry tab: add what you have, see it on shelves, set amounts, mark "use soon". */

function renderPantry() {
  const view = document.getElementById("view-pantry");
  const items = pantryList();

  const input = h("input", { id: "addInput", type: "text", enterkeyhint: "done", autocomplete: "off", autocapitalize: "sentences",
    placeholder: items.length ? "Add more, e.g. 2 cans tuna, 6 eggs" : "e.g. 3 cans sardines, rice 2kg, 6 eggs", "aria-label": "Add items" });
  const form = h("form", { class: "addbar", onsubmit: e => { e.preventDefault(); addFromInput(input); } },
    input, h("button", { class: "btn primary", type: "submit" }, "Add"));

  const have = new Set(items.map(i => i.key).filter(Boolean));
  const quick = QUICK_ADD.filter(q => { const k = matchIngredient(q); return !k || !have.has(k); }).slice(0, 18);
  const chips = h("div", { class: "chips scroll" }, quick.map(q =>
    h("button", { class: "chip add", type: "button", onclick: () => { addPantryText(q); toast("Added " + q.toLowerCase()); render(); } }, "+ " + q)));

  const parts = [
    h("div", { class: "view-head" }, h("h2", { text: "What's in your kitchen?" }),
      h("p", { text: "Type everything you have, separated by commas. Amounts help the week plan share things out." })),
    form,
    quick.length ? h("div", { class: "quick" }, h("div", { class: "label", text: "Quick add" }), chips) : null,
  ];

  if (!items.length) {
    parts.push(h("div", { class: "empty" },
      h("h3", { text: "Your pantry is empty" }),
      h("p", { text: "Add what's in your cupboard and fridge. Or load an example pantry to see how it works, then clear it in Preferences." }),
      h("button", { class: "btn", onclick: loadExample }, "Load an example pantry")));
  } else {
    const soon = items.filter(i => i.soon).length;
    const unknown = items.filter(i => !i.key).length;
    parts.push(h("div", { class: "pantry-summary" },
      h("div", { class: "stats" },
        h("div", null, h("b", { class: "num", text: items.length }), h("span", { text: "items" })),
        h("div", { class: "soon" }, h("b", { class: "num", text: soon }), h("span", { text: "use soon" }))),
      h("button", { class: "btn primary", onclick: () => setTab("cook") }, "What can I cook?")));
    parts.push(...shelves(items));
    if (unknown) parts.push(h("p", { class: "hint", text: "Items under “Not in the recipe book” aren't used in recipes yet. Tap one to tell the app what it is." }));
  }
  view.replaceChildren(...parts);
}

function addFromInput(input) {
  const text = input.value.trim();
  if (!text) { input.focus(); return; }
  const r = addPantryText(text);
  input.value = "";
  const unknown = r.added.filter(i => !i.key);
  let msg = (r.added.length ? "Added " + r.added.length : "") + (r.updated.length ? (r.added.length ? ", updated " : "Updated ") + r.updated.length : "");
  if (unknown.length) msg += ". Didn't recognise: " + unknown.map(i => i.name).join(", ");
  toast(msg || "Nothing added");
  render();
  document.getElementById("addInput")?.focus();
}

function loadExample() {
  addPantryText(EXAMPLE_PANTRY);
  for (const it of Object.values(S.items)) if (EXAMPLE_SOON.includes(it.key)) it.soon = true;
  saveState();
  toast("Example pantry loaded");
  render();
}

function shelves(items) {
  const groups = [["soon", "Use soon"], ...CATEGORIES, ["unknown", "Not in the recipe book"]].map(([k, label]) => ({ k, label, items: [] }));
  const by = Object.fromEntries(groups.map(g => [g.k, g]));
  for (const it of items) {
    if (it.soon) by.soon.items.push(it);
    else if (!it.key) by.unknown.items.push(it);
    else by[ING[it.key].cat].items.push(it);
  }
  return groups.filter(g => g.items.length).map(g => h("section", { class: "shelf" + (g.k === "soon" ? " is-soon" : "") },
    h("div", { class: "shelf-head" }, h("h3", { class: "label", text: g.label }), h("span", { class: "num count", text: g.items.length })),
    h("ul", { class: "items" }, g.items.map(itemRow))));
}

function itemRow(it) {
  const qty = h("input", { class: "qty", type: "text", value: itemQtyText(it), placeholder: "some", inputmode: "text",
    "aria-label": "Amount of " + it.name,
    onchange: e => { setItemQty(it, e.target.value); render(); } });
  return h("li", { class: "item" },
    h("button", { class: "item-name", onclick: () => openItemSheet(it.id) },
      h("span", { text: it.name }),
      it.key && norm(ING[it.key].name) !== norm(it.name) && !ING[it.key].alias.includes(norm(it.name)) ? h("small", { text: ING[it.key].name }) : null),
    qty,
    h("button", { class: "soon-btn", "aria-pressed": it.soon ? "true" : "false", title: "Use this first",
      onclick: () => { updateItem(it, { soon: !it.soon }); render(); } }, icon("flame", 16), h("span", { text: "Soon" })),
    h("button", { class: "x", "aria-label": "Remove " + it.name, onclick: () => removeWithUndo(it) }, icon("x", 18)));
}

function removeWithUndo(it) {
  const copy = clone(it);
  removeItem(it.id);
  render();
  toast("Removed " + it.name.toLowerCase(), { label: "Undo", fn: () => {
    delete S.itemsDel[copy.id];
    copy.at = Date.now();
    S.items[copy.id] = copy;
    saveState(); render();
  } });
}
