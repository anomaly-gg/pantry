/* Sync section of Preferences: turn on, show the code, join with a code, stop. */

let syncBusy = false, syncMsg = "";

function syncSection() {
  const box = h("div", { class: "pref sync" }, h("div", { class: "label", text: "Sync phone, PC and household" }));
  if (!sync.id) {
    const code = h("input", { class: "field-input", id: "syncCode", type: "text", placeholder: "XXXX-XXXX-XXXX-XXXX-XXXX", autocapitalize: "characters", autocomplete: "off" });
    box.append(
      h("p", { class: "hint", text: "Get a sync code on one device, then enter it on the others. Everyone with the code shares the same pantry, plan and list." }),
      h("button", { class: "btn primary", disabled: syncBusy, onclick: () => runSync(createSyncSpace) }, syncBusy ? "Working…" : "Get a sync code"),
      h("div", { class: "join" }, code, h("button", { class: "btn", disabled: syncBusy, onclick: () => runSync(() => joinSyncSpace(code.value)) }, "Join")));
  } else {
    box.append(
      h("div", { class: "code-row" },
        h("code", { class: "sync-code num", text: formatCode(sync.id) }),
        h("button", { class: "btn small", onclick: async () => toast(await copyText(formatCode(sync.id)) ? "Code copied" : "Couldn't copy") }, icon("copy", 15), "Copy")),
      h("p", { class: "hint", text: sync.error ? sync.error : sync.last ? "Last synced " + new Date(sync.last).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }) + "." : "Not synced yet." }),
      h("div", { class: "row" },
        h("button", { class: "btn", disabled: syncBusy, onclick: () => runSync(syncNow) }, "Sync now"),
        h("button", { class: "btn ghost", onclick: () => { leaveSync(); refreshSheets(); toast("Sync turned off on this device"); } }, "Stop syncing here")));
  }
  if (syncMsg) box.append(h("p", { class: "notice", text: syncMsg }));
  return box;
}

async function runSync(fn) {
  syncBusy = true; syncMsg = ""; refreshSheets();
  try { await fn(); if (sync.error) syncMsg = sync.error; }
  catch (e) { syncMsg = e.message || "Something went wrong."; }
  syncBusy = false; refreshSheets(); render();
}
