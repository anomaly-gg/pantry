/* Recipe book, part 4: Asian and Western home cooking (stovetop only, no oven). Format: see recipes-canned.js. */

/* ---- Asian ---- */
recipe({
  id: "tomato-egg-stirfry", name: "Tomato and egg stir-fry", style: "asian", slots: "BLD", min: 10, tags: "ulam cheap quick kids nokeep",
  ing: ["eggs 5", "tomato 4 | wedges", "spring-onion?", "sugar | 1 tsp", "soy-sauce? | 1 tsp", "salt", "oil | 2 tbsp", "water | 2 tbsp"],
  steps: [
    "Scramble the eggs in hot oil until just set, then set aside.",
    "Stir-fry the tomatoes until they soften and release juice.",
    "Add sugar, salt, soy sauce and water and cook into a light sauce.",
    "Return the eggs, toss, and top with spring onion.",
  ],
});
recipe({
  id: "chicken-teriyaki", name: "Chicken teriyaki", style: "asian", slots: "LD", min: 25, tags: "ulam kids",
  ing: ["chicken 700g | boneless thighs", "soy-sauce | 1/4 cup", "sugar | 3 tbsp", "garlic | 3 cloves", "ginger? | 1 thumb, grated", "cornstarch? | 1 tsp", "oil | 1 tbsp", "water | 1/4 cup"],
  steps: [
    "Mix soy sauce, sugar, water, garlic and ginger.",
    "Pan-fry the chicken skin-side down until crisp, then flip and cook through.",
    "Pour in the sauce and simmer, turning the chicken, until glossy and thick. Add cornstarch mixed in water if needed.",
    "Slice and spoon the sauce over.",
  ],
});
recipe({
  id: "chicken-veg-stirfry", name: "Chicken and vegetable stir-fry", style: "asian", slots: "LD", min: 25, tags: "ulam healthy",
  ing: ["chicken 500g | strips", "carrot 1 | sliced", "cabbage 0.25? | sliced", "bell-pepper 1? | strips", "broccoli 1? | florets", "onion | 1", "garlic | 4 cloves", "oyster-sauce | 2 tbsp", "soy-sauce | 1 tbsp", "cornstarch | 1 tbsp", "oil | 2 tbsp", "water | 1/4 cup"],
  steps: [
    "Toss the chicken with 1 tsp each of soy sauce and cornstarch.",
    "Stir-fry the chicken on high heat until cooked. Set aside.",
    "Stir-fry garlic, onion, carrot and broccoli 3 minutes, then the cabbage and pepper.",
    "Return the chicken, add the sauces and water, and toss until glossy.",
  ],
});
recipe({
  id: "beef-broccoli", name: "Beef with broccoli", style: "asian", slots: "LD", min: 30, tags: "ulam",
  ing: ["beef 500g | thin strips", "broccoli 1 | florets", "oyster-sauce | 3 tbsp", "soy-sauce | 1 tbsp", "sugar | 1 tsp", "garlic | 4 cloves", "ginger? | 1 thumb", "cornstarch | 1 tbsp", "oil | 2 tbsp", "water | 1/2 cup"],
  steps: [
    "Toss the beef with soy sauce and 2 tsp cornstarch. Rest 10 minutes.",
    "Blanch the broccoli 1 minute in boiling water.",
    "Sear the beef on very high heat in batches. Set aside.",
    "Fry garlic and ginger, add water, oyster sauce and sugar, then the broccoli and beef. Thicken with the remaining cornstarch.",
  ],
});
recipe({
  id: "spicy-garlic-pork", name: "Spicy garlic pork stir-fry", style: "asian", slots: "LD", min: 25, tags: "ulam spicy",
  ing: ["pork 500g | thin slices", "onion | 1", "cabbage 0.25? | or carrot", "garlic | 6 cloves", "chili-flakes | 1 to 2 tsp", "soy-sauce | 3 tbsp", "sugar | 2 tbsp", "sesame-oil? | 1 tsp", "spring-onion?", "oil | 1 tbsp"],
  steps: [
    "Mix soy sauce, sugar, garlic, chili and sesame oil. Marinate the pork 15 minutes.",
    "Stir-fry the pork on high heat until caramelised.",
    "Add onion and cabbage and cook 3 minutes.",
    "Top with spring onion.",
  ],
});
recipe({
  id: "tofu-ground-pork", name: "Tofu with ground pork sauce", style: "asian", slots: "LD", min: 20, tags: "ulam spicy",
  ing: ["tofu 2 | cubed", "ground-pork 200g", "garlic | 4 cloves", "ginger? | 1 thumb", "chili-flakes? | 1 tsp", "soy-sauce | 2 tbsp", "oyster-sauce? | 1 tbsp", "cornstarch | 1 tbsp", "spring-onion?", "oil | 1 tbsp", "water | 3/4 cup"],
  steps: [
    "Fry garlic, ginger and chili, then the pork until browned.",
    "Add soy sauce, oyster sauce and water and bring to a simmer.",
    "Slide in the tofu and simmer 5 minutes, spooning sauce over.",
    "Thicken with cornstarch mixed in water and top with spring onion.",
  ],
});
recipe({
  id: "egg-drop-soup", name: "Egg drop soup", style: "asian", slots: "BLD", min: 10, tags: "soup cheap quick nokeep",
  ing: ["eggs 3 | beaten", "bouillon | 2", "cornstarch | 2 tbsp in 1/4 cup water", "spring-onion?", "sesame-oil? | 1 tsp", "pepper", "water | 5 cups"],
  steps: [
    "Bring water and broth cubes to a boil.",
    "Stir in the cornstarch slurry until slightly thick.",
    "Pour the eggs in slowly while stirring to make ribbons.",
    "Finish with sesame oil, pepper and spring onion.",
  ],
});
recipe({
  id: "peanut-chicken", name: "Chicken in peanut sauce", style: "asian", slots: "LD", min: 30, tags: "ulam kids keeps",
  ing: ["chicken 600g | bite-size", "peanut-butter | 1/3 cup", "coconut-milk 200? | 1 pack, or water", "soy-sauce | 2 tbsp", "sugar | 1 tbsp", "calamansi? | 2", "garlic | 3 cloves", "onion | 1", "chili-flakes?", "oil | 1 tbsp", "water | 1/2 cup"],
  steps: [
    "Brown the chicken with garlic and onion.",
    "Whisk peanut butter, coconut milk, soy sauce, sugar and water until smooth.",
    "Pour over the chicken and simmer 12 minutes until thick.",
    "Finish with calamansi and chili.",
  ],
});
recipe({
  id: "pork-kare-kare-lite", name: "Pork and vegetables in peanut sauce", style: "filipino", slots: "LD", min: 70, tags: "ulam comfort keeps",
  ing: ["pork 600g | cubed", "peanut-butter | 1/2 cup", "eggplant 2 | sliced", "sitaw 1 | cut", "pechay 1 | cut", "onion | 1", "garlic | 4 cloves", "cornstarch? | 1 tbsp, or toasted rice flour", "bagoong | to serve", "water | 5 cups", "oil | 1 tbsp", "salt"],
  steps: [
    "Simmer the pork in the water 45 minutes until tender. Keep 3 cups of broth.",
    "Sauté garlic and onion, add pork and broth, and stir in peanut butter until smooth.",
    "Add eggplant and sitaw and cook 5 minutes, then the pechay. Thicken with cornstarch if needed.",
    "Season lightly; the bagoong on the side brings the salt.",
  ],
});
recipe({
  id: "korean-egg-roll", name: "Rolled vegetable omelette", style: "asian", slots: "BLD", min: 15, tags: "ulam kids cheap nokeep",
  ing: ["eggs 5", "carrot 1? | finely chopped", "spring-onion? | chopped", "onion | 1/4, finely chopped", "salt", "oil | 1 tbsp"],
  steps: [
    "Beat eggs with salt and the chopped vegetables.",
    "Pour a thin layer into an oiled pan on low heat. When almost set, roll it to one side.",
    "Pour in more egg, lift the roll so it flows under, and roll again. Repeat.",
    "Rest 2 minutes and slice.",
  ],
});
recipe({
  id: "ramen-style-soup", name: "Pork and egg noodle soup", style: "asian", slots: "LD", min: 30, tags: "soup comfort nokeep",
  ing: ["instant-noodles 4 | or 300 g fresh noodles", "pork-belly 300g | thin slices", "eggs 4 | soft-boiled", "pechay 1?", "bean-sprouts 150g?", "spring-onion?", "garlic | 4 cloves", "soy-sauce | 2 tbsp", "water | 8 cups", "oil | 1 tbsp"],
  steps: [
    "Boil the eggs 6 1/2 minutes, then cool in cold water and peel.",
    "Brown the pork slices with garlic and a splash of soy sauce.",
    "Boil the water with the noodle seasoning and soy sauce. Cook the noodles and greens.",
    "Top bowls with pork, halved eggs, sprouts and spring onion.",
  ],
});

/* ---- Western ---- */
recipe({
  id: "chicken-veg-soup", name: "Chicken and vegetable soup", style: "western", slots: "LD", min: 40, tags: "soup healthy comfort",
  ing: ["chicken 500g", "potato 2 | cubed", "carrot 2 | sliced", "cabbage 0.25? | or pechay", "onion | 1", "garlic | 3 cloves", "bouillon | 1", "bay-leaf?", "water | 8 cups", "oil | 1 tbsp", "salt", "pepper"],
  steps: [
    "Sauté onion and garlic, then add chicken and brown lightly.",
    "Add water, broth cube and bay leaf and simmer 20 minutes.",
    "Add potatoes and carrots and cook 12 minutes.",
    "Add greens for 2 minutes and season.",
  ],
});
recipe({
  id: "potato-soup", name: "Creamy potato soup", style: "western", slots: "LD", min: 35, tags: "soup comfort cheap",
  ing: ["potato 5 | cubed", "onion | 1", "garlic | 3 cloves", "evap-milk 370 | 1 can", "butter | 2 tbsp", "bacon 100g? | or ham", "cheese?", "bouillon | 1", "water | 4 cups", "salt", "pepper"],
  steps: [
    "Fry bacon if using, then soften onion and garlic in butter.",
    "Add potatoes, water and broth cube and simmer 15 minutes until very soft.",
    "Mash about half the potatoes in the pot to thicken it.",
    "Stir in milk, heat through, season, and top with cheese and bacon.",
  ],
});
recipe({
  id: "garlic-butter-chicken", name: "Garlic butter chicken", style: "western", slots: "LD", min: 30, tags: "ulam kids",
  ing: ["chicken 700g | thighs or breast", "butter | 3 tbsp", "garlic | 8 cloves", "calamansi? | 2", "salt", "pepper", "oil | 1 tbsp"],
  steps: [
    "Season chicken well with salt and pepper.",
    "Pan-fry in oil over medium heat until golden and cooked through, 6 to 7 minutes per side.",
    "Lower the heat, add butter and garlic, and spoon the butter over the chicken for 2 minutes.",
    "Finish with calamansi.",
  ],
});
recipe({
  id: "porkchop-onion-gravy", name: "Pork chops with onion gravy", style: "western", slots: "LD", min: 35, tags: "ulam comfort",
  ing: ["pork 700g | 4 chops", "onion | 2, sliced", "flour | 2 tbsp", "butter | 1 tbsp", "bouillon | 1", "soy-sauce? | 1 tsp", "water | 1 1/2 cups", "salt", "pepper", "oil | 1 tbsp"],
  steps: [
    "Season chops and fry until golden and cooked. Set aside.",
    "In the same pan, cook the onions in butter until soft and golden, about 8 minutes.",
    "Stir in flour for 1 minute, then whisk in water, broth cube and soy sauce until thick.",
    "Return the chops and simmer 3 minutes.",
  ],
});
recipe({
  id: "mashed-potatoes", name: "Garlic mashed potatoes", style: "western", slots: "LD", min: 25, tags: "kids cheap side",
  ing: ["potato 6 | peeled", "butter | 3 tbsp", "evap-milk 185 | 1/2 can, or milk", "garlic | 3 cloves", "salt", "pepper"],
  steps: [
    "Boil potatoes with the garlic in salted water 15 minutes until very soft.",
    "Drain and mash with butter.",
    "Beat in warm milk until creamy and season.",
  ],
});
recipe({
  id: "coleslaw", name: "Coleslaw", style: "western", slots: "LD", min: 10, tags: "healthy kids cheap side nokeep",
  ing: ["cabbage 0.5 | shredded", "carrot 1 | grated", "mayo | 1/2 cup", "vinegar | 1 tbsp", "sugar | 1 tbsp", "salt", "pepper"],
  steps: [
    "Mix mayonnaise, vinegar, sugar, salt and pepper.",
    "Toss with cabbage and carrot.",
    "Chill 15 minutes before serving with fried chicken or fish.",
  ],
});
recipe({
  id: "cucumber-salad", name: "Cucumber and tomato salad", style: "western", slots: "LD", min: 10, tags: "healthy cheap quick side nokeep",
  ing: ["cucumber 2 | sliced", "tomato 2 | wedges", "onion | 1/2, sliced", "vinegar | 3 tbsp", "sugar | 1 tsp", "salt", "pepper"],
  steps: [
    "Combine cucumber, tomato and onion.",
    "Dress with vinegar, sugar, salt and pepper.",
    "Rest 10 minutes so the flavors mix.",
  ],
});
recipe({
  id: "chicken-pasta-tomato", name: "Chicken tomato pasta", style: "western", slots: "LD", min: 30, tags: "kids",
  ing: ["spaghetti 400g", "chicken 400g | bite-size", "tomato-sauce 1 | 1 pack", "onion | 1", "garlic | 4 cloves", "bell-pepper 1?", "cheese?", "sugar | 1 tsp", "oil | 1 tbsp", "salt", "pepper"],
  steps: [
    "Cook pasta and drain.",
    "Brown the chicken, then add onion, garlic and bell pepper.",
    "Add tomato sauce, sugar and 1/4 cup water. Simmer 10 minutes.",
    "Toss with the pasta and top with cheese.",
  ],
});
recipe({
  id: "fried-rice-omelette", name: "Omurice (omelette over fried rice)", style: "asian", slots: "LD", min: 25, tags: "kids nokeep",
  ing: ["rice 300g | 5 cups cooked rice", "chicken 200g? | diced, or hotdog", "eggs 6", "onion | 1", "ketchup | 1/3 cup", "butter | 2 tbsp", "salt", "pepper"],
  steps: [
    "Fry onion and chicken in butter. Add rice and ketchup and stir-fry until red and hot.",
    "Beat 1 1/2 eggs per person. Cook each in a buttered pan until just set on top.",
    "Slide each omelette over a mound of rice.",
    "Draw ketchup on top.",
  ],
});
recipe({
  id: "turon", name: "Turon (banana spring rolls)", style: "filipino", slots: "B", min: 25, tags: "kids",
  ing: ["saba 6 | halved lengthwise", "lumpia-wrapper 12", "sugar | 1/2 cup brown sugar", "oil | for frying"],
  steps: [
    "Roll each saba piece in sugar and wrap tightly in a wrapper. Seal with water.",
    "Fry in medium oil, sprinkling a little sugar into the oil so it coats the rolls in caramel.",
    "Turn until golden and glossy, about 5 minutes.",
    "Drain on a rack, not paper, so the caramel doesn't stick.",
  ],
});
recipe({
  id: "ginataang-bilo-bilo-lite", name: "Saba and sweet potato in coconut milk", style: "filipino", slots: "B", min: 30, tags: "comfort",
  ing: ["saba 4 | sliced", "sweet-potato 2 | cubed", "coconut-milk 400 | 1 can", "sugar | 1/3 cup", "gabi 2? | cubed", "water | 2 cups"],
  steps: [
    "Boil water and sweet potato (and gabi) 8 minutes.",
    "Add saba and coconut milk and simmer 10 minutes.",
    "Stir in sugar and cook until creamy.",
    "Serve warm or cold as a sweet merienda.",
  ],
});
