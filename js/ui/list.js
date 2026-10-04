/* List tab: the shopping list. Things the week plan needs, things you added, and ticked items that go
   straight into the pantry. */

function renderList() {
  const view = document.getElementById("view-list");
  const list = shopList();
  const input = h("input", { id: "shopInput", type: "text", enterkeyhint: "done", autocomplete: "off", placeholder: "Add to list, e.g. 1 dozen eggs", "aria-label": "Add to shopping list" });
  const form = h("form", { class: "addbar", onsubmit: e => {
    e.preventDefault();
    const added = [];
    for (const part of input.value.split(/[,;\n]+/)) {
      const en = splitEntry(part);
      if (!en || !en.name) continue;
      const key = matchIngredient(en.name);
      const q = parseQty(en.qty);
      const amt = key && q ? toBase(q, ING[key]) : null;
      added.push(addShop(en.name, { key, amt, qty: amt == null ? en.qty : "" }));
    }
    input.value = "";
    if (added.length) { saveState(); render(); document.getElementById("shopInput")?.focus(); }
  } }, input, h("button", { class: "btn primary", type: "submit" }, "Add"));

  const parts = [h("div", { class: "view-head" }, h("h2", { text: "Shopping list" }),
    h("p", { text: "Tick things as you buy them. Ticked items go into your pantry with one tap." })), form];

  if (!list.length) {
    parts.push(h("div", { class: "empty" }, h("h3", { text: "Nothing to buy" }),
      h("p", { text: "Plan your week and anything it needs shows up here. On the Cook tab you can also add what a recipe is missing." }),
      h("button", { class: "btn", onclick: () => setTab("week") }, "Plan my week")));
    view.replaceChildren(...parts);
    return;
  }
  const groups = [
    ["For this week's plan", list.filter(s => !s.got && s.src === "plan")],
    ["Added by you", list.filter(s => !s.got && s.src !== "plan")],
    ["Got it", list.filter(s => s.got)],
  ];
  for (const [title, items] of groups) {
    if (!items.length) continue;
    parts.push(h("section", { class: "shop-group" },
      h("div", { class: "group-head" }, h("h3", { class: "label", text: title }), h("span", { class: "num count", text: items.length })),
      h("ul", { class: "shop-items" }, items.map(shopRow))));
  }
  const got = list.filter(s => s.got).length;
  parts.push(h("div", { class: "list-actions" },
    h("button", { class: "btn primary big block", disabled: !got, onclick: () => {
      const n = moveGotToPantry(); render(); toast(plural(n, "item") + " added to your pantry");
    } }, got ? "Put " + plural(got, "ticked item") + " in the pantry" : "Tick items as you buy them"),
    h("div", { class: "row" },
      h("button", { class: "btn", onclick: async () => {
        const text = "Shopping list\n" + list.filter(s => !s.got).map(s => "- " + s.name + (shopQtyText(s) ? " (" + shopQtyText(s) + ")" : "")).join("\n");
        toast(await copyText(text) ? "List copied. Paste it in a message." : "Couldn't copy on this device");
      } }, icon("copy", 16), "Copy list"),
      got ? h("button", { class: "btn ghost", onclick: () => { for (const s of list.filter(x => x.got)) removeShop(s.id, false); saveState(); render(); } }, "Remove ticked") : null)));
  view.replaceChildren(...parts);
}

function shopRow(s) {
  const qty = shopQtyText(s);
  return h("li", { class: "shop-item" + (s.got ? " got" : "") },
    h("label", { class: "shop-check" },
      h("input", { type: "checkbox", checked: s.got, onchange: e => { s.got = e.target.checked; s.at = Date.now(); saveState(); render(); } }),
      h("span", { class: "shop-text" },
        h("span", { class: "shop-name" }, h("span", { text: s.name.replace(/\s*\(.*?\)/, "") }), qty ? h("span", { class: "shop-qty num", text: qty }) : null),
        s.forText ? h("small", { text: "for " + s.forText }) : null)),
    h("button", { class: "x", "aria-label": "Remove " + s.name, onclick: () => { removeShop(s.id); render(); } }, icon("x", 18)));
}
