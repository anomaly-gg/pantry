/* Recipe book, part 3: noodles, pasta, rice dishes and breakfasts. Format: see recipes-canned.js. */

/* ---- Pancit & noodles ---- */
recipe({
  id: "pancit-canton", name: "Pancit canton", style: "filipino", slots: "LD", min: 35, tags: "onepot kids comfort",
  ing: ["canton-noodles 1 | 1 pack (250 g)", "chicken 250g? | or pork, sliced thin", "shrimp 150g?", "cabbage 0.25 | sliced", "carrot 1 | strips", "sitaw 1? | sliced", "onion | 1", "garlic | 4 cloves", "soy-sauce | 3 tbsp", "oyster-sauce? | 2 tbsp", "bouillon | 1", "water | 2 1/2 cups", "calamansi? | to serve", "oil | 2 tbsp"],
  steps: [
    "Sauté garlic and onion, then cook the meat and shrimp through. Scoop out half for topping.",
    "Add carrot and sitaw and cook 2 minutes.",
    "Add water, broth cube, soy sauce and oyster sauce and bring to a boil.",
    "Add the noodles and toss until they absorb the liquid, about 3 minutes. Add cabbage, toss, and top with the reserved meat.",
  ],
});
recipe({
  id: "pancit-bihon", name: "Pancit bihon", style: "filipino", slots: "LD", min: 35, tags: "onepot comfort",
  ing: ["bihon 1 | 1 pack (250 g), soaked 10 minutes", "chicken 250g? | boiled and shredded, broth saved", "cabbage 0.25 | sliced", "carrot 1 | strips", "sitaw 1? | sliced", "onion | 1", "garlic | 4 cloves", "soy-sauce | 3 tbsp", "fish-sauce? | 1 tbsp", "bouillon | 1", "water | 2 cups", "calamansi? | to serve", "oil | 2 tbsp"],
  steps: [
    "Soak the bihon in water 10 minutes and drain.",
    "Sauté garlic and onion, add the chicken and vegetables (not the cabbage) and cook 2 minutes.",
    "Add water, broth cube, soy sauce and fish sauce and bring to a boil.",
    "Add the noodles and toss until the liquid is absorbed. Add cabbage, toss 1 minute, and serve with calamansi.",
  ],
});
recipe({
  id: "chicken-sotanghon", name: "Chicken sotanghon soup", style: "filipino", slots: "LD", min: 35, tags: "soup comfort",
  ing: ["sotanghon 1 | 1 bundle, soaked", "chicken 400g | pieces", "carrot 1? | strips", "cabbage 0.25? | shredded", "spring-onion?", "onion | 1", "garlic | 5 cloves", "fish-sauce | 2 tbsp", "water | 6 cups", "oil | 1 tbsp"],
  steps: [
    "Sauté garlic and onion. Add chicken and fish sauce and cook 5 minutes.",
    "Add water and simmer 20 minutes. Shred the chicken if you like.",
    "Add carrot and cook 3 minutes, then add the noodles and cabbage for 2 minutes.",
    "Top with spring onion and toasted garlic.",
  ],
});
recipe({
  id: "misua-egg-soup", name: "Misua soup with egg", style: "filipino", slots: "BLD", min: 15, tags: "soup cheap comfort",
  ing: ["misua 1", "eggs 2 | beaten", "ground-pork 150g? | or chopped shrimp", "sayote 1? | or patola, sliced", "onion | 1", "garlic | 3 cloves", "fish-sauce | 1 tbsp", "water | 5 cups", "oil | 1 tbsp"],
  steps: [
    "Sauté garlic and onion. Add the pork if using and cook through.",
    "Add water and sayote and boil 5 minutes. Season with fish sauce.",
    "Stir in the misua and cook 1 minute.",
    "Drizzle in the eggs while stirring. Serve immediately.",
  ],
});
recipe({
  id: "upgraded-instant-noodles", name: "Instant noodle soup with egg and greens", style: "asian", slots: "BLD", min: 10, tags: "soup cheap quick",
  ing: ["instant-noodles 4", "eggs 4", "pechay 1? | or cabbage", "spring-onion?", "garlic? | 3 cloves, fried", "hotdog 2? | sliced", "water | 8 cups"],
  steps: [
    "Bring the water to a boil with the seasoning packets.",
    "Add the noodles and hotdog. After 1 minute crack in the eggs; don't stir.",
    "Add the greens for the last minute.",
    "Top with spring onion and fried garlic.",
  ],
});
recipe({
  id: "upgraded-canton", name: "Instant pancit canton with egg and veg", style: "filipino", slots: "BLD", min: 10, tags: "cheap kids",
  ing: ["instant-canton 4", "eggs 4", "cabbage 0.25? | shredded", "carrot 1? | grated", "hotdog 2? | sliced", "calamansi?", "water"],
  steps: [
    "Cook the noodles with the carrot and cabbage in boiling water 2 to 3 minutes. Drain.",
    "Mix with the seasoning packets in a pan over low heat.",
    "Fry the eggs and hotdog.",
    "Serve the noodles topped with egg and a squeeze of calamansi.",
  ],
});
recipe({
  id: "instant-noodle-stirfry", name: "Stir-fried instant noodles", style: "asian", slots: "LD", min: 15, tags: "cheap",
  ing: ["instant-noodles 4 | use 2 seasoning packets", "cabbage 0.25 | sliced", "carrot 1? | strips", "eggs 2", "luncheon-meat 0.5? | strips, or any leftover meat", "garlic | 3 cloves", "soy-sauce | 1 tbsp", "oyster-sauce? | 1 tbsp", "oil | 2 tbsp"],
  steps: [
    "Boil the noodles 2 minutes, drain and toss with a little oil.",
    "Fry garlic and the meat, then scramble in the eggs.",
    "Add vegetables and cook 2 minutes.",
    "Add the noodles, soy sauce, oyster sauce and 2 seasoning packets and stir-fry on high heat.",
  ],
});

/* ---- Pasta ---- */
recipe({
  id: "filipino-spaghetti", name: "Filipino spaghetti", style: "filipino", slots: "LD", min: 40, tags: "kids comfort",
  ing: ["spaghetti 500g", "tomato-sauce 2 | 1 kg sweet-style spaghetti sauce, or 2 packs tomato sauce", "ground-pork 300g | or ground beef", "hotdog 4 | sliced", "ketchup | 1/2 cup banana ketchup", "sugar | 2 tbsp", "cheese | grated", "onion | 1", "garlic | 4 cloves", "oil | 1 tbsp", "salt"],
  steps: [
    "Cook the spaghetti in salted water and drain.",
    "Sauté garlic and onion, then brown the meat and hotdogs.",
    "Add spaghetti sauce, ketchup, sugar and 1/2 cup water. Simmer 15 minutes.",
    "Spoon over the pasta and top with plenty of cheese.",
  ],
});
recipe({
  id: "carbonara-pinoy", name: "Pinoy-style carbonara", style: "filipino", slots: "LD", min: 25, tags: "kids comfort",
  ing: ["spaghetti 500g", "evap-milk 370 | 1 can, or all-purpose cream", "bacon 200g | or ham, chopped", "mushroom-can 1?", "cheese | grated", "garlic | 4 cloves", "onion | 1", "butter? | 1 tbsp", "salt", "pepper"],
  steps: [
    "Cook pasta in salted water and drain.",
    "Fry the bacon until crisp, then add butter, garlic and onion. Add mushrooms.",
    "Pour in the milk and cheese and simmer gently 3 minutes.",
    "Toss with the pasta and season with lots of pepper.",
  ],
});
recipe({
  id: "aglio-olio", name: "Garlic and chili pasta (aglio olio)", style: "western", slots: "LD", min: 15, tags: "cheap quick onepot",
  ing: ["spaghetti 400g", "garlic | 1 head, sliced", "chili-flakes? | 1 tsp", "oil | 1/3 cup", "cheese? | grated", "salt", "pepper"],
  steps: [
    "Cook pasta in well-salted water. Save 1 cup of the water before draining.",
    "Warm the oil and gently fry the garlic and chili until pale gold. Don't let it brown.",
    "Add pasta and a big splash of pasta water and toss hard until glossy.",
    "Season and top with cheese.",
  ],
});
recipe({
  id: "meat-sauce-pasta", name: "Meat sauce pasta (not sweet)", style: "western", slots: "LD", min: 40, tags: "kids comfort",
  ing: ["spaghetti 500g", "ground-beef 400g | or ground pork", "tomato-sauce 2 | 2 packs, or 6 chopped tomatoes", "carrot 1? | grated", "onion | 1", "garlic | 5 cloves", "cheese? | grated", "sugar | 1 tsp", "oil | 1 tbsp", "salt", "pepper"],
  steps: [
    "Cook pasta and drain.",
    "Sauté onion, garlic and carrot until soft. Add the meat and brown well.",
    "Add tomato sauce, sugar and 1/2 cup water. Simmer 20 minutes, stirring now and then.",
    "Season and serve over the pasta with cheese.",
  ],
});
recipe({
  id: "mac-and-cheese", name: "Stovetop mac and cheese", style: "western", slots: "LD", min: 20, tags: "kids comfort",
  ing: ["macaroni 400g", "cheese | 1 bar (165 g), grated", "evap-milk 370 | 1 can, or 1 1/2 cups milk", "butter | 2 tbsp", "flour? | 1 tbsp", "hotdog 2? | sliced, or ham", "salt", "pepper"],
  steps: [
    "Cook the macaroni in salted water and drain.",
    "Melt butter, stir in flour for 1 minute, then whisk in the milk until smooth and thick.",
    "Off the heat, stir in the cheese until melted.",
    "Fold in the macaroni and hotdog and season.",
  ],
});
recipe({
  id: "garlic-noodles", name: "Garlic butter noodles", style: "asian", slots: "LD", min: 15, tags: "kids quick",
  ing: ["spaghetti 400g | or 4 packs instant noodles without seasoning", "butter | 4 tbsp", "garlic | 1 head, minced", "oyster-sauce | 2 tbsp", "soy-sauce | 1 tbsp", "sugar | 1 tsp", "cheese? | grated", "spring-onion?"],
  steps: [
    "Cook the noodles and drain.",
    "Melt butter and gently cook the garlic until fragrant.",
    "Stir in oyster sauce, soy sauce and sugar.",
    "Toss with the noodles, then top with cheese and spring onion.",
  ],
});
recipe({
  id: "veg-macaroni-soup", name: "Vegetable macaroni soup", style: "western", slots: "LD", min: 30, tags: "soup healthy cheap",
  ing: ["macaroni 150g", "tomato-sauce 1? | 1 pack, or 3 chopped tomatoes", "potato 1 | cubed", "carrot 1 | cubed", "cabbage 0.25 | sliced", "chickpeas 1?", "onion | 1", "garlic | 3 cloves", "bouillon | 1", "water | 6 cups", "oil | 1 tbsp", "salt", "pepper"],
  steps: [
    "Sauté onion and garlic. Add potato and carrot and cook 2 minutes.",
    "Add water, broth cube and tomato sauce and simmer 10 minutes.",
    "Add macaroni and chickpeas and cook 8 minutes.",
    "Add cabbage for the last 2 minutes and season.",
  ],
});

/* ---- Rice ---- */
recipe({
  id: "sinangag", name: "Sinangag (garlic fried rice)", style: "filipino", slots: "B", min: 10, tags: "cheap quick side",
  ing: ["rice 300g | 5 cups cooked rice, day-old", "garlic | 1 head, minced", "oil | 3 tbsp", "salt"],
  steps: [
    "Break up the rice clumps.",
    "Fry the garlic in oil over medium-low heat until golden. Scoop out a spoonful for topping.",
    "Add rice and salt and stir-fry until hot and lightly toasted.",
    "Top with the reserved garlic. Pair with eggs and any fried meat.",
  ],
});
recipe({
  id: "egg-fried-rice", name: "Egg fried rice", style: "asian", slots: "BLD", min: 15, tags: "cheap kids onepot",
  ing: ["rice 300g | 5 cups cooked rice, day-old", "eggs 4", "carrot 1? | small dice", "spring-onion? | chopped", "garlic | 3 cloves", "soy-sauce | 2 tbsp", "sesame-oil? | 1 tsp", "oil | 2 tbsp", "salt", "pepper"],
  steps: [
    "Scramble the eggs softly in oil and set aside.",
    "Fry garlic and carrot 2 minutes.",
    "Add the rice and stir-fry on high heat 3 minutes.",
    "Add soy sauce, eggs, spring onion and sesame oil. Season and toss.",
  ],
});
recipe({
  id: "leftover-fried-rice", name: "Hotdog and vegetable fried rice", style: "filipino", slots: "BLD", min: 15, tags: "kids cheap onepot",
  ing: ["rice 300g | 5 cups cooked rice", "hotdog 4 | diced, or ham", "eggs 2", "carrot 1? | diced", "corn-can 1? | drained", "garlic | 4 cloves", "onion | 1/2", "soy-sauce | 1 tbsp", "oil | 2 tbsp", "salt", "pepper"],
  steps: [
    "Fry hotdog, garlic and onion until lightly browned.",
    "Add carrot and corn and cook 2 minutes.",
    "Scramble the eggs in, then add rice and soy sauce.",
    "Stir-fry on high heat until everything is hot. Season.",
  ],
});
recipe({
  id: "lugaw", name: "Lugaw with egg", style: "filipino", slots: "BLD", min: 40, tags: "soup cheap comfort",
  ing: ["rice 180g | 1 cup uncooked", "eggs 4 | hard-boiled", "ginger | 1 thumb, strips", "garlic | 1 head, minced", "onion | 1", "fish-sauce | 2 tbsp", "spring-onion?", "calamansi?", "water | 8 cups", "oil | 3 tbsp"],
  steps: [
    "Fry half the garlic until golden and set aside.",
    "Sauté the rest of the garlic, onion and ginger. Add rice and stir 2 minutes.",
    "Add water and simmer 30 minutes, stirring often, until thick. Season with fish sauce.",
    "Top with eggs, fried garlic, spring onion and calamansi.",
  ],
});
recipe({
  id: "champorado", name: "Champorado", style: "filipino", slots: "B", min: 30, tags: "kids comfort",
  ing: ["rice 180g | 1 cup (glutinous is best)", "cocoa | 4 tablea or 1/3 cup cocoa powder", "sugar | 1/2 cup", "evap-milk 185? | to drizzle", "dried-fish 4? | tuyo on the side", "water | 6 cups"],
  steps: [
    "Boil the water and dissolve the tablea or cocoa.",
    "Add rice and simmer 20 to 25 minutes, stirring often, until thick.",
    "Stir in sugar to taste.",
    "Drizzle with milk. Fried tuyo on the side is classic.",
  ],
});
recipe({
  id: "oyakodon", name: "Chicken and egg rice bowl (oyakodon)", style: "asian", slots: "LD", min: 25, tags: "onepot kids",
  ing: ["chicken 400g | bite-size", "eggs 5 | lightly beaten", "onion | 1, sliced", "soy-sauce | 3 tbsp", "sugar | 1 1/2 tbsp", "spring-onion?", "water | 3/4 cup", "rice 360g | 2 cups uncooked, cooked"],
  steps: [
    "Cook the rice.",
    "Simmer water, soy sauce and sugar with the onion 3 minutes.",
    "Add chicken and simmer 6 minutes until cooked.",
    "Pour the eggs over, cover, and cook 1 minute until just set. Slide over bowls of rice.",
  ],
});
recipe({
  id: "ginger-chicken-rice", name: "One-pot ginger chicken rice", style: "asian", slots: "LD", min: 45, tags: "onepot comfort",
  ing: ["chicken 600g | thighs", "rice 360g | 2 cups uncooked", "ginger | 2 thumbs", "garlic | 6 cloves", "spring-onion?", "soy-sauce | for serving", "bouillon | 1", "salt", "oil | 1 tbsp", "water | 3 cups"],
  steps: [
    "Season the chicken with salt and brown skin-side down. Set aside.",
    "In the fat, fry garlic and ginger, then add the washed rice and stir 1 minute.",
    "Add water and broth cube, lay the chicken on top, cover and cook on low 20 minutes (or use a rice cooker).",
    "Rest 10 minutes. Slice chicken and serve with soy sauce and ginger-chili dip.",
  ],
});

/* ---- Breakfast ---- */
recipe({
  id: "hotsilog", name: "Hotsilog", style: "filipino", slots: "B", min: 15, tags: "kids cheap",
  ing: ["hotdog 6 | scored", "rice 240g | 4 cups cooked rice", "eggs 4", "garlic | 6 cloves", "oil | 3 tbsp", "salt", "ketchup?"],
  steps: [
    "Pan-fry the hotdogs until blistered.",
    "Fry garlic until golden, add rice and salt and stir-fry.",
    "Fry the eggs and serve together with ketchup.",
  ],
});
recipe({
  id: "longsilog", name: "Longsilog", style: "filipino", slots: "B", min: 20, tags: "comfort",
  ing: ["longganisa 8", "rice 240g | 4 cups cooked rice", "eggs 4", "garlic | 6 cloves", "vinegar | for dipping", "oil | 3 tbsp", "salt", "water | 1/2 cup"],
  steps: [
    "Put the longganisa in a pan with the water. Simmer until the water is gone, then fry in their own fat until browned.",
    "Make garlic rice in another pan.",
    "Fry the eggs and serve with vinegar.",
  ],
});
recipe({
  id: "tocilog", name: "Tocilog", style: "filipino", slots: "B", min: 20, tags: "kids comfort",
  ing: ["tocino 400g", "rice 240g | 4 cups cooked rice", "eggs 4", "garlic | 6 cloves", "oil | 3 tbsp", "salt", "water | 1/2 cup"],
  steps: [
    "Simmer the tocino in the water until it evaporates, then fry until caramelised. Watch it; the sugar burns fast.",
    "Make garlic rice.",
    "Fry the eggs and serve.",
  ],
});
recipe({
  id: "tapsilog", name: "Tapsilog", style: "filipino", slots: "B", min: 20, tags: "comfort",
  ing: ["tapa 400g | or thin beef slices marinated in soy, garlic and sugar", "rice 240g | 4 cups cooked rice", "eggs 4", "garlic | 6 cloves", "vinegar | for dipping", "oil | 3 tbsp", "salt"],
  steps: [
    "Fry the tapa in a little oil until browned and slightly crisp at the edges.",
    "Make garlic rice.",
    "Fry the eggs and serve with spiced vinegar.",
  ],
});
recipe({
  id: "pandesal-egg", name: "Pandesal with egg and cheese", style: "filipino", slots: "B", min: 10, tags: "kids quick",
  ing: ["bread 8 | pandesal", "eggs 4", "cheese?", "butter? | for spreading", "salt", "pepper", "oil | 1 tbsp"],
  steps: [
    "Fry or scramble the eggs with salt and pepper.",
    "Split and toast the pandesal, buttering if you like.",
    "Fill with egg and cheese.",
  ],
});
recipe({
  id: "french-toast", name: "French toast", style: "western", slots: "B", min: 15, tags: "kids",
  ing: ["bread 8 | slices", "eggs 3", "milk 120? | 1/2 cup, or evaporated milk", "sugar | 2 tbsp", "butter | 2 tbsp", "banana 2? | sliced, to serve"],
  steps: [
    "Beat eggs, milk and 1 tbsp sugar in a shallow dish.",
    "Soak each bread slice a few seconds per side.",
    "Fry in butter 2 minutes per side until golden.",
    "Sprinkle with sugar and serve with banana.",
  ],
});
recipe({
  id: "pancakes", name: "Pancakes", style: "western", slots: "B", min: 25, tags: "kids",
  ing: ["flour | 1 1/2 cups", "eggs 1", "milk 300 | 1 1/4 cups, or evap mixed with water", "baking-powder | 1 tbsp", "sugar | 2 tbsp", "butter | 2 tbsp melted", "salt | 1/4 tsp", "banana 2?"],
  steps: [
    "Whisk flour, baking powder, sugar and salt.",
    "Whisk egg, milk and melted butter, then stir into the dry mix. A few lumps are fine.",
    "Cook 1/4 cup per pancake on a lightly oiled pan over medium heat until bubbles appear, then flip.",
    "Serve with butter, sugar syrup or banana.",
  ],
});
recipe({
  id: "oatmeal-banana", name: "Banana oatmeal", style: "western", slots: "B", min: 10, tags: "healthy quick",
  ing: ["oats 160g | 2 cups", "milk 480 | 2 cups, or water", "banana 2 | sliced", "sugar? | to taste", "peanut-butter? | 1 tbsp per bowl", "salt | pinch", "water | 2 cups"],
  steps: [
    "Bring milk and water to a simmer with a pinch of salt.",
    "Stir in the oats and cook 3 to 5 minutes until creamy.",
    "Top with banana, sugar and peanut butter.",
  ],
});
recipe({
  id: "ham-cheese-omelette", name: "Ham and cheese omelette", style: "western", slots: "B", min: 10, tags: "kids quick",
  ing: ["eggs 6", "ham 100g | chopped", "cheese | grated", "onion? | 2 tbsp chopped", "tomato 1? | diced", "butter | 1 tbsp", "salt", "pepper"],
  steps: [
    "Beat the eggs with salt and pepper.",
    "Melt butter, sauté onion and ham 1 minute.",
    "Pour in the eggs, tilt the pan and pull the edges in until mostly set.",
    "Add cheese and tomato on one half, fold, and serve.",
  ],
});
recipe({
  id: "egg-sandwich", name: "Egg sandwich", style: "western", slots: "B", min: 15, tags: "kids cheap",
  ing: ["eggs 4 | hard-boiled", "bread 8", "mayo | 3 tbsp", "onion? | 1 tbsp chopped", "salt", "pepper"],
  steps: [
    "Mash the boiled eggs with mayonnaise, onion, salt and pepper.",
    "Spread on bread.",
  ],
});
recipe({
  id: "potato-egg-hash", name: "Potato and egg hash", style: "western", slots: "B", min: 25, tags: "cheap",
  ing: ["potato 3 | small cubes", "eggs 4", "onion | 1", "bell-pepper 1?", "hotdog 2? | or bacon", "oil | 3 tbsp", "salt", "pepper"],
  steps: [
    "Fry the potatoes in oil over medium heat, covered for 5 minutes, then uncovered until crisp.",
    "Add onion, bell pepper and meat and cook 3 minutes.",
    "Make four wells and crack in the eggs. Cover until the whites set.",
    "Season and serve.",
  ],
});
recipe({
  id: "tuna-melt", name: "Tuna melt", style: "western", slots: "BLD", min: 15, tags: "kids",
  ing: ["tuna 1", "bread 8", "cheese | slices or grated", "mayo | 2 tbsp", "onion | 2 tbsp chopped", "butter | for the pan"],
  steps: [
    "Mix tuna, mayonnaise and onion.",
    "Make sandwiches with tuna and cheese.",
    "Toast in a buttered pan over medium-low heat, pressing down, until golden and melted.",
  ],
});
recipe({
  id: "steamed-egg", name: "Chinese steamed egg", style: "asian", slots: "BLD", min: 20, tags: "ulam cheap healthy kids",
  ing: ["eggs 4", "water | 1 1/2 cups warm", "soy-sauce | 1 tbsp", "sesame-oil? | 1 tsp", "spring-onion?", "salt | 1/2 tsp"],
  steps: [
    "Beat the eggs with salt, then stir in the warm water. Strain for a silky texture.",
    "Pour into a bowl, cover with a plate, and steam on low heat 12 minutes until just set.",
    "Drizzle with soy sauce and sesame oil and top with spring onion.",
  ],
});
