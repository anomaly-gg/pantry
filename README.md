# Pantry Chef

List what's in your kitchen; get recipes you can cook right now and a 7-day meal plan that uses it up,
plus a shopping list for anything missing. No AI needed: the app carries its own recipe book (149 recipes,
Filipino-first, stovetop only) and plans with plain rules.

Live: https://anomaly-gg.github.io/pantry/

- `js/data/` ingredient dictionary (aliases incl. Tagalog + brands) and the recipe book
- `js/core/` no-DOM logic: reading amounts, matching, week planner, storage, sync
- `js/ui/` one file per screen or sheet, `js/app.js` start-up
- Sync uses the `workout-sync` Worker (`workout-app/worker/`), a generic versioned document store

Dev: `node _dev/test_core.js` (tests) · `python -m http.server` then `_dev/phones.html` (phone previews)
Deploy: `python _dev/deploy.py "what changed"`
