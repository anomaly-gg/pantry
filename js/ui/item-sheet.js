/* Edit one pantry item: name, amount, what it counts as in recipes, use soon, remove. */

function openItemSheet(id) {
  openSheet({ title: "Edit item", build: body => {
    const it = S.items[id];
    if (!it) { body.append(h("p", { class: "hint", text: "This item was removed." })); return; }
    const name = h("input", { class: "field-input", id: "itemName", type: "text", value: it.name });
    const qty = h("input", { class: "field-input", id: "itemQty", type: "text", value: itemQtyText(it), placeholder: "e.g. 3 cans, 1 kg, half head" });
    const kind = h("select", { class: "field-input", id: "itemKind" },
      h("option", { value: "", text: "Not in the recipe book" }),
      CATEGORIES.map(([cat, label]) => h("optgroup", { label },
        Object.values(ING).filter(i => i.cat === cat).sort((a, b) => a.name.localeCompare(b.name))
          .map(i => h("option", { value: i.key, text: i.name, selected: i.key === it.key ? "selected" : null })))));
    const unitHint = h("p", { class: "hint" });
    const showUnit = () => {
      const ingr = ING[kind.value];
      unitHint.textContent = !ingr ? "" : ingr.track ? "Amounts are counted for " + ingr.name.toLowerCase() + ", e.g. " + formatAmt(ingr.unit === "g" ? 500 : ingr.unit === "ml" ? (ingr.conv.can || 400) : 2, ingr) + "."
        : ingr.name + " is a seasoning, so you don't need an amount.";
    };
    kind.addEventListener("change", showUnit);
    showUnit();
    body.append(
      h("label", { class: "field" }, h("span", { class: "label", text: "Name" }), name),
      h("label", { class: "field" }, h("span", { class: "label", text: "Amount" }), qty),
      h("label", { class: "field" }, h("span", { class: "label", text: "Counts as" }), kind, unitHint),
      h("label", { class: "check-row" }, h("input", { type: "checkbox", id: "itemSoon", checked: it.soon }), h("span", { text: "Use soon (it's about to spoil)" })),
      h("div", { class: "row sheet-actions" },
        h("button", { class: "btn primary big", onclick: () => {
          it.name = cap(name.value.trim() || it.name);
          it.key = kind.value || null;
          it.soon = body.querySelector("#itemSoon").checked;
          setItemQty(it, qty.value);
          closeSheet(); render(); toast("Saved");
        } }, "Save"),
        h("button", { class: "btn danger", onclick: () => { closeSheet(); removeWithUndo(it); } }, "Remove")));
  } });
}
