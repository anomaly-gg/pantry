# Pantry Chef — standalone app (decided 2026-10-04)

He asked "why does it have to come from Claude, no other free way?" → chose MY recommendation:
standalone PWA with its OWN recipe book (no AI), week planner done in plain code, optional
"ask an AI" = copy-a-prompt button. The claude.ai artifact version is kept in `_artifact/` (not deployed).

## Settled decisions
- Host: GitHub Pages, repo `anomaly-gg/pantry` → https://anomaly-gg.github.io/pantry/ (mirror workout-app setup).
- Same origin as /workout → localStorage keys prefixed `pc_`, SW caches prefixed `pantry-v-` (workout's SW
  deletes caches starting `v-`!).
- Sync: REUSE the existing `workout-sync` Worker (generic versioned doc store, CORS already allows
  anomaly-gg.github.io). Own space/code; family can share a pantry by joining the same code.
- Classic `<script>` tags (no modules), structure like workout-app: `js/data/`, `js/core/` (no DOM), `js/ui/`, `css/`.
- Recipe book: ~150 recipes, Filipino-first + Asian + Western, base serves 4, no-oven.
- Ingredients: dictionary with aliases (English/Tagalog/brands). "Tracked" ingredients (proteins, canned, rice,
  noodles, main produce) have amounts that the planner rations; seasonings/aromatics are presence-only.
- Pantry items with no amount = "some" = enough for 2 uses.
- Tabs: Pantry · Cook · Week · List (shopping). Preferences behind a gear.
- Cook: rank by missing count (Ready / need 1 / need 2), mood filters, search, "buy X → unlocks N recipes".
- Week: greedy planner (perishables & use-soon early, variety, rations amounts, shopping list for gaps), Swap per meal.
- "Cooked it" deducts amounts from pantry (editable before applying).

## Build order
1. data: ingredients + recipes  2. core: units/pantry/match/planner/store/sync + node tests
3. ui + css  4. PWA (manifest, sw, icons, fonts)  5. local visual check in his Chrome  6. deploy

## Status
- [x] 1 data (149 recipes)  - [x] 2 core+tests (node _dev/test_core.js)  - [x] 3 ui  - [x] 4 pwa  - [ ] 5 check  - [ ] 6 deploy
