/* A recipe as a tappable card: name, time, what it uses up, what you'd need to buy. */

const STYLE_LABEL = { filipino: "Filipino", asian: "Asian", western: "Western" };

/* "Pechay or bok choy" → "pechay", "Squash (kalabasa)" → "squash" */
const shortName = key => ING[key].name.replace(/\s*\(.*?\)/, "").replace(/ or .*$/, "").toLowerCase();
function needText(missing) {
  return missing.map(m => shortName(m.key) + (m.side ? " (to serve)" : "")).join(", ");
}

function recipeCard(st, onOpen, avail = pantryAvail(S)) {
  const r = st.r;
  const soonKeys = st.uses.filter(u => avail.get(u.key)?.soon).map(u => shortName(u.key));
  return h("button", { class: "rcard", onclick: () => onOpen(r) },
    h("span", { class: "rcard-top" },
      h("span", { class: "rcard-name", text: r.name }),
      h("span", { class: "rcard-meta num" }, icon("clock", 14), r.min + " min")),
    h("span", { class: "rcard-sub", text: STYLE_LABEL[r.style] + (r.tagSet.has("side") ? " · side dish" : r.withRice ? " · with rice" : "") + (r.tagSet.has("soup") ? " · soup" : "") }),
    st.missing.length
      ? h("span", { class: "rcard-need" }, icon("cart", 15), h("span", { text: "Need " + needText(st.missing) }))
      : h("span", { class: "rcard-ready" }, icon("check", 15), h("span", { text: "You have everything" })),
    soonKeys.length ? h("span", { class: "rcard-soon" }, icon("flame", 14), h("span", { text: "Uses up " + soonKeys.join(", ") })) : null);
}
