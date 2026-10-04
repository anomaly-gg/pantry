/* Recipe book, part 2: Filipino ulam with fresh meat, fish and vegetables. Format: see recipes-canned.js. */

/* ---- Chicken ---- */
recipe({
  id: "chicken-adobo", name: "Chicken adobo", style: "filipino", slots: "LD", min: 45, tags: "ulam comfort onepot",
  ing: ["chicken 1kg | cut into serving pieces", "soy-sauce | 1/2 cup", "vinegar | 1/3 cup", "garlic | 1 head, crushed", "bay-leaf? | 3", "pepper | 1 tsp", "sugar? | 1 tsp", "water | 1/2 cup", "oil | 1 tbsp"],
  steps: [
    "Put the chicken, soy sauce, garlic, bay leaves and pepper in a pot. Marinate 15 minutes if you have time.",
    "Add the water and bring to a boil. Pour in the vinegar and let it boil 2 minutes without stirring.",
    "Cover and simmer 25 to 30 minutes until the chicken is tender.",
    "For a richer finish, lift out the chicken, brown it in oil, then return it to the pot and reduce the sauce.",
  ],
  tip: "Adobo tastes better the next day, so it's a good one to cook double.",
});
recipe({
  id: "chicken-tinola", name: "Chicken tinola", style: "filipino", slots: "LD", min: 40, tags: "ulam soup healthy comfort",
  ing: ["chicken 800g | cut into pieces", "green-papaya 1 | wedges, or 2 sayote", "malunggay? | 1 cup, or pechay or chili leaves", "ginger | 2 thumbs, sliced", "onion | 1, sliced", "garlic | 4 cloves, minced", "fish-sauce | 2 tbsp", "water | 6 cups", "oil | 1 tbsp", "pepper"],
  steps: [
    "Sauté garlic, onion and ginger in oil until fragrant.",
    "Add the chicken and fish sauce and cook 5 minutes until the chicken turns opaque.",
    "Pour in the water, bring to a boil, then simmer 20 minutes.",
    "Add the papaya and cook 8 minutes until tender. Add the leaves, turn off the heat, and season.",
  ],
});
recipe({
  id: "chicken-tinola-sayote", name: "Chicken tinola with sayote", style: "filipino", slots: "LD", min: 40, tags: "ulam soup healthy comfort",
  ing: ["chicken 800g | cut into pieces", "sayote 2 | wedges", "pechay 1? | or malunggay", "ginger | 2 thumbs, sliced", "onion | 1, sliced", "garlic | 4 cloves, minced", "fish-sauce | 2 tbsp", "water | 6 cups", "oil | 1 tbsp", "pepper"],
  steps: [
    "Sauté garlic, onion and ginger in oil until fragrant.",
    "Add chicken and fish sauce and cook 5 minutes.",
    "Add water and simmer 20 minutes.",
    "Add sayote and cook 7 minutes, then the greens for 1 minute. Season to taste.",
  ],
});
recipe({
  id: "chicken-afritada", name: "Chicken afritada", style: "filipino", slots: "LD", min: 45, tags: "ulam kids comfort",
  ing: ["chicken 1kg | cut into pieces", "tomato-sauce 1 | 1 pack (250 g)", "potato 2 | quartered", "carrot 1 | chunks", "bell-pepper 1? | strips", "onion | 1, chopped", "garlic | 4 cloves, minced", "fish-sauce | 1 tbsp", "bay-leaf?", "water | 1 cup", "oil | 2 tbsp"],
  steps: [
    "Brown the potatoes and carrots in oil and set aside.",
    "Brown the chicken, then add garlic and onion and cook 2 minutes.",
    "Add tomato sauce, water, bay leaf and fish sauce. Cover and simmer 20 minutes.",
    "Add the potatoes and carrots and simmer 10 minutes. Add bell pepper for the last 3 minutes.",
  ],
});
recipe({
  id: "chicken-curry", name: "Filipino chicken curry", style: "filipino", slots: "LD", min: 45, tags: "ulam comfort",
  ing: ["chicken 1kg | cut into pieces", "coconut-milk 400 | 1 can (400 ml)", "potato 2 | cubed", "carrot 1 | cubed", "bell-pepper 1? | cubed", "curry-powder | 2 tbsp", "onion | 1, chopped", "garlic | 4 cloves, minced", "ginger? | 1 thumb, minced", "fish-sauce | 1 tbsp", "water | 1 cup", "oil | 2 tbsp"],
  steps: [
    "Fry the potatoes and carrots until lightly golden and set aside.",
    "Sauté garlic, onion and ginger, then brown the chicken.",
    "Stir in curry powder for 30 seconds, then add water and fish sauce. Simmer covered 20 minutes.",
    "Add coconut milk, potatoes and carrots. Simmer 10 minutes until thick. Add bell pepper at the end.",
  ],
});
recipe({
  id: "fried-chicken", name: "Pinoy fried chicken", style: "filipino", slots: "LD", min: 50, tags: "ulam kids comfort",
  ing: ["chicken 1kg | thighs and legs", "calamansi | 4, juiced", "soy-sauce | 2 tbsp", "garlic | 5 cloves, minced", "flour | 1 cup", "cornstarch? | 1/4 cup", "salt", "pepper", "oil | for frying"],
  steps: [
    "Marinate the chicken in calamansi, soy sauce, garlic and pepper for at least 30 minutes.",
    "Mix flour, cornstarch, 1 tsp salt and pepper. Coat each piece well.",
    "Fry in medium-hot oil, 12 to 15 minutes, turning, until deep golden and cooked through.",
    "Drain on paper and serve with rice and banana ketchup or gravy.",
  ],
});
recipe({
  id: "arroz-caldo", name: "Arroz caldo", style: "filipino", slots: "BLD", min: 45, tags: "soup comfort onepot cheap",
  ing: ["rice 180g | 1 cup uncooked (glutinous if you have it)", "chicken 500g | small pieces", "ginger | 2 thumbs, cut into strips", "garlic | 1 head, minced", "onion | 1, chopped", "fish-sauce | 3 tbsp", "eggs 4? | hard-boiled", "spring-onion? | chopped", "calamansi? | to serve", "water | 8 cups", "oil | 3 tbsp"],
  steps: [
    "Fry half the garlic until golden for topping. Set aside.",
    "In the same pot sauté the rest of the garlic, onion and ginger. Add chicken and fish sauce and cook 5 minutes.",
    "Add rice and stir 2 minutes, then pour in the water. Simmer 30 minutes, stirring often so it doesn't stick.",
    "Serve with fried garlic, spring onion, a halved egg and calamansi.",
  ],
});
recipe({
  id: "chicken-sopas", name: "Chicken sopas", style: "filipino", slots: "BLD", min: 35, tags: "soup comfort kids onepot",
  ing: ["macaroni 200g", "chicken 400g | boiled and shredded, broth saved", "evap-milk 370 | 1 can", "carrot 1 | small cubes", "cabbage 0.25 | shredded", "hotdog 3? | sliced", "onion | 1, chopped", "garlic | 4 cloves, minced", "butter? | 1 tbsp", "fish-sauce | 1 tbsp", "water | 6 cups"],
  steps: [
    "Boil the chicken in the water for 20 minutes. Shred the meat and keep the broth.",
    "In a pot, sauté garlic and onion in butter. Add hotdogs and carrot and cook 2 minutes.",
    "Add the broth, chicken and macaroni. Simmer until the macaroni is tender, about 10 minutes.",
    "Add cabbage and milk and heat through without boiling hard. Season with fish sauce.",
  ],
});
recipe({
  id: "chicken-pastel-mushroom", name: "Chicken with mushrooms and potatoes", style: "filipino", slots: "LD", min: 40, tags: "ulam comfort",
  ing: ["chicken 800g | cut into pieces", "mushroom-can 1", "potato 2 | cubed", "carrot 1 | cubed", "evap-milk 185 | 1/2 can", "soy-sauce | 2 tbsp", "calamansi? | 2", "onion | 1, chopped", "garlic | 4 cloves, minced", "butter? | 1 tbsp", "water | 1 cup"],
  steps: [
    "Marinate the chicken in soy sauce and calamansi for 15 minutes.",
    "Sauté garlic and onion in butter, then brown the chicken.",
    "Add water and simmer covered 15 minutes.",
    "Add potatoes, carrots and mushrooms and simmer 10 minutes. Stir in the milk and heat through.",
  ],
});
recipe({
  id: "chicken-binakol-lite", name: "Chicken ginger soup with pechay", style: "filipino", slots: "LD", min: 35, tags: "soup healthy",
  ing: ["chicken 600g | pieces", "pechay 1", "ginger | 2 thumbs, sliced", "onion | 1", "garlic | 3 cloves", "spring-onion?", "fish-sauce | 2 tbsp", "water | 6 cups", "oil | 1 tbsp", "pepper"],
  steps: [
    "Sauté ginger, garlic and onion in oil.",
    "Add chicken and fish sauce and cook 5 minutes.",
    "Add water and simmer 20 minutes, skimming any foam.",
    "Add pechay for the last minute, season with pepper and top with spring onion.",
  ],
});

/* ---- Pork ---- */
recipe({
  id: "pork-adobo", name: "Pork adobo", style: "filipino", slots: "LD", min: 60, tags: "ulam comfort onepot",
  ing: ["pork 1kg | cubed (kasim or belly)", "soy-sauce | 1/2 cup", "vinegar | 1/3 cup", "garlic | 1 head, crushed", "bay-leaf? | 3", "pepper | 1 tsp", "sugar? | 1 tsp", "water | 1 cup", "oil | 1 tbsp"],
  steps: [
    "Brown the pork in a little oil, then add the garlic and cook until fragrant.",
    "Add soy sauce, water, bay leaves and pepper. Bring to a boil.",
    "Add the vinegar and let it boil 2 minutes without stirring.",
    "Cover and simmer 40 minutes until tender. Uncover and reduce the sauce to your liking.",
  ],
});
recipe({
  id: "sinigang-baboy", name: "Sinigang na baboy", style: "filipino", slots: "LD", min: 75, tags: "ulam soup comfort",
  ing: ["pork 800g | ribs or belly, cubed", "sinigang-mix | 1 pack (or fresh tamarind)", "radish 1? | sliced", "kangkong 1? | cut", "sitaw 1? | cut into 2-inch pieces", "eggplant 1? | sliced", "okra 4?", "tomato 2 | quartered", "onion | 1, quartered", "chili? | 2 long chilies", "fish-sauce | to taste", "water | 8 cups"],
  steps: [
    "Put pork, tomato, onion and water in a pot. Boil, skim the foam, then simmer 45 minutes until tender.",
    "Add the sinigang mix and radish and cook 5 minutes.",
    "Add sitaw, eggplant, okra and chilies and cook 5 minutes.",
    "Add kangkong last and turn off the heat. Season with fish sauce.",
  ],
});
recipe({
  id: "nilagang-baboy", name: "Nilagang baboy", style: "filipino", slots: "LD", min: 75, tags: "ulam soup comfort healthy",
  ing: ["pork 800g | ribs or kasim", "potato 2 | halved", "cabbage 0.5? | wedges", "pechay 1? | or bok choy", "saba 2? | halved", "onion | 1, quartered", "pepper | 1 tsp", "fish-sauce | 2 tbsp", "water | 8 cups"],
  steps: [
    "Boil pork with onion, pepper and water. Skim the foam, then simmer 50 minutes until tender.",
    "Add potatoes and saba and cook 10 minutes.",
    "Add cabbage and pechay and cook 2 minutes.",
    "Season with fish sauce. Serve with fish sauce and calamansi for dipping.",
  ],
});
recipe({
  id: "pork-menudo", name: "Pork menudo", style: "filipino", slots: "LD", min: 50, tags: "ulam comfort",
  ing: ["pork 600g | small cubes", "tomato-sauce 1 | 1 pack (250 g)", "liver-spread 1? | or chopped pork liver", "potato 2 | small cubes", "carrot 1 | small cubes", "bell-pepper 1? | diced", "chickpeas 1?", "soy-sauce | 2 tbsp", "onion | 1, chopped", "garlic | 4 cloves, minced", "water | 1 cup", "oil | 2 tbsp", "sugar? | 1 tsp"],
  steps: [
    "Fry the potatoes and carrots until lightly browned. Set aside.",
    "Sauté garlic and onion, then add pork and soy sauce and cook until browned.",
    "Add tomato sauce and water. Cover and simmer 25 minutes until the pork is tender.",
    "Stir in liver spread, potatoes, carrots, chickpeas and bell pepper. Simmer 5 minutes until thick.",
  ],
});
recipe({
  id: "pork-giniling", name: "Pork giniling", style: "filipino", slots: "LD", min: 30, tags: "ulam kids cheap",
  ing: ["ground-pork 500g", "potato 1 | small cubes", "carrot 1 | small cubes", "tomato-sauce 0.5? | 1/2 pack, or 2 chopped tomatoes", "onion | 1, chopped", "garlic | 4 cloves, minced", "soy-sauce | 1 tbsp", "fish-sauce? | 1 tsp", "eggs 4? | hard-boiled", "water | 1/2 cup", "oil | 1 tbsp", "pepper"],
  steps: [
    "Sauté garlic and onion, then add the pork and cook until browned.",
    "Add soy sauce, tomato sauce and water. Simmer 5 minutes.",
    "Add potato and carrot, cover, and cook 10 minutes until tender.",
    "Season and add halved boiled eggs if you have them.",
  ],
});
recipe({
  id: "tortang-giniling", name: "Tortang giniling", style: "filipino", slots: "BLD", min: 25, tags: "ulam kids",
  ing: ["ground-pork 300g", "eggs 4", "potato 1 | finely diced", "onion | 1, chopped", "garlic | 3 cloves, minced", "salt", "pepper", "oil | 3 tbsp"],
  steps: [
    "Sauté garlic, onion, potato and pork until the pork is cooked and the potato soft. Season and let cool a little.",
    "Beat the eggs and mix in the meat.",
    "Fry quarter portions in a small pan over medium-low heat, 3 minutes per side.",
    "Serve with ketchup and rice.",
  ],
});
recipe({
  id: "lechon-kawali", name: "Lechon kawali", style: "filipino", slots: "LD", min: 75, tags: "ulam comfort",
  ing: ["pork-belly 1kg | one slab", "bay-leaf? | 3", "pepper | 1 tsp", "salt | 1 tbsp", "garlic | 1 head", "vinegar | for dipping", "oil | for frying", "water"],
  steps: [
    "Boil the pork belly with salt, pepper, garlic and bay leaves for 40 minutes until tender.",
    "Drain and dry completely. Air-dry 30 minutes or overnight in the fridge for crispier skin.",
    "Deep-fry in hot oil with a lid half on (it spatters) until the skin blisters and turns golden.",
    "Chop and serve with vinegar with garlic and chili.",
  ],
});
recipe({
  id: "pork-sisig", name: "Pork sisig (pan version)", style: "filipino", slots: "LD", min: 50, tags: "ulam spicy",
  ing: ["pork-belly 600g", "onion | 2, chopped", "chili | 3, chopped", "calamansi | 5, juiced", "soy-sauce | 2 tbsp", "mayo? | 2 tbsp", "eggs 1?", "garlic | 4 cloves", "salt", "pepper", "oil | 1 tbsp"],
  steps: [
    "Boil the pork belly in salted water 30 minutes. Drain and pan-fry until crisp on all sides.",
    "Chop the pork finely.",
    "Sauté garlic, half the onion and the chili. Add the pork and soy sauce and fry until crisp.",
    "Off the heat, stir in calamansi, raw onion and mayonnaise. Top with an egg.",
  ],
});
recipe({
  id: "tokwat-baboy", name: "Tokwa't baboy", style: "filipino", slots: "LD", min: 50, tags: "ulam",
  ing: ["tofu 2 | blocks", "pork-belly 300g | or pork ears", "soy-sauce | 1/4 cup", "vinegar | 1/4 cup", "onion | 1, chopped", "chili? | 2", "sugar | 1 tsp", "salt", "oil | for frying", "water"],
  steps: [
    "Boil the pork in salted water 30 minutes. Drain, cool and cube.",
    "Fry the tofu until golden and cube it.",
    "Mix soy sauce, vinegar, sugar, onion and chili for the dressing.",
    "Toss pork and tofu with the dressing just before serving.",
  ],
});
recipe({
  id: "pork-binagoongan", name: "Pork binagoongan", style: "filipino", slots: "LD", min: 50, tags: "ulam spicy",
  ing: ["pork-belly 700g | cubed", "bagoong | 3 tbsp", "tomato 2 | chopped", "eggplant 2? | sliced", "chili? | 2", "onion | 1", "garlic | 5 cloves", "vinegar | 2 tbsp", "sugar | 1 tbsp", "water | 1 cup", "oil | 1 tbsp"],
  steps: [
    "Brown the pork in oil until the fat renders.",
    "Add garlic, onion and tomato and cook until soft.",
    "Stir in bagoong, vinegar, sugar and water. Simmer covered 30 minutes.",
    "Add the eggplant and chili and cook 5 minutes.",
  ],
});
recipe({
  id: "bicol-express", name: "Bicol express", style: "filipino", slots: "LD", min: 50, tags: "ulam spicy",
  ing: ["pork-belly 600g | strips", "coconut-milk 400 | 1 can", "bagoong | 2 tbsp", "chili | 6 long chilies, sliced", "onion | 1", "garlic | 5 cloves", "ginger? | 1 thumb", "oil | 1 tbsp"],
  steps: [
    "Brown the pork strips until the fat renders.",
    "Add garlic, onion and ginger and cook 2 minutes. Stir in bagoong.",
    "Pour in the coconut milk and simmer 30 minutes until the pork is tender and the sauce thick.",
    "Add the chilies and cook 5 minutes.",
  ],
});
recipe({
  id: "sweet-sour-pork", name: "Sweet and sour pork", style: "filipino", slots: "LD", min: 40, tags: "ulam kids",
  ing: ["pork 500g | bite-size", "eggs 1", "cornstarch | 1/2 cup", "bell-pepper 1? | cubed", "carrot 1? | sliced", "onion | 1, cubed", "ketchup | 1/2 cup", "vinegar | 3 tbsp", "sugar | 3 tbsp", "soy-sauce | 1 tbsp", "oil | for frying", "salt"],
  steps: [
    "Season pork with salt, coat in beaten egg, then cornstarch. Fry until golden and crisp. Drain.",
    "Sauté onion, carrot and bell pepper 2 minutes.",
    "Add ketchup, vinegar, sugar, soy sauce and 1/2 cup water. Boil, then thicken with 1 tbsp cornstarch mixed in water.",
    "Toss the pork in the sauce just before serving.",
  ],
});
recipe({
  id: "pork-bbq", name: "Pinoy pork barbecue (pan-grilled)", style: "filipino", slots: "LD", min: 40, tags: "ulam kids",
  ing: ["pork 700g | thin slices", "ketchup | 1/2 cup banana ketchup", "soy-sauce | 1/3 cup", "calamansi | 4", "sugar | 3 tbsp", "garlic | 1 head, minced", "pepper", "oil | 2 tbsp"],
  steps: [
    "Mix ketchup, soy sauce, calamansi, sugar, garlic and pepper. Marinate the pork at least 1 hour.",
    "Thread onto skewers if you have them.",
    "Pan-grill on medium heat, basting with leftover marinade mixed with oil, 4 to 5 minutes per side.",
    "Let it char a little at the edges, then serve with spiced vinegar.",
  ],
});
recipe({
  id: "fried-porkchop", name: "Fried pork chops", style: "filipino", slots: "LD", min: 30, tags: "ulam kids",
  ing: ["pork 700g | 4 pork chops", "calamansi | 3", "soy-sauce | 2 tbsp", "garlic | 4 cloves, minced", "salt", "pepper", "flour? | for dusting", "oil | for frying"],
  steps: [
    "Marinate chops in calamansi, soy sauce, garlic and pepper for 20 minutes.",
    "Pat dry and dust lightly with flour.",
    "Fry in hot oil 4 to 5 minutes per side until golden and cooked through.",
    "Serve with ketchup or a soy-calamansi dip.",
  ],
});
recipe({
  id: "pork-pochero", name: "Pork pochero", style: "filipino", slots: "LD", min: 70, tags: "ulam comfort",
  ing: ["pork 700g | cubed", "pork-and-beans 1", "saba 3 | halved", "potato 2 | quartered", "cabbage 0.5 | wedges", "pechay 1?", "tomato-sauce 1 | 1 pack", "chickpeas 1?", "onion | 1", "garlic | 5 cloves", "fish-sauce | 1 tbsp", "water | 4 cups", "oil | 2 tbsp"],
  steps: [
    "Sauté garlic and onion, then brown the pork. Add water and simmer 40 minutes.",
    "Fry the saba and potatoes in a separate pan until golden.",
    "Add tomato sauce, pork and beans and chickpeas to the pork. Simmer 10 minutes.",
    "Add saba, potatoes, cabbage and pechay and cook 5 minutes. Season with fish sauce.",
  ],
});
recipe({
  id: "lumpiang-shanghai", name: "Lumpiang shanghai", style: "filipino", slots: "LD", min: 50, tags: "ulam kids",
  ing: ["lumpia-wrapper 25", "ground-pork 500g", "carrot 1 | finely chopped", "onion | 1, finely chopped", "garlic | 4 cloves, minced", "eggs 1", "salt | 1 tsp", "pepper", "oil | for frying"],
  steps: [
    "Mix pork, carrot, onion, garlic, egg, salt and pepper.",
    "Put a thin line of filling on each wrapper, roll tightly and seal the edge with water.",
    "Cut each roll into 3. Fry in medium-hot oil 5 to 6 minutes until golden and the filling is cooked.",
    "Serve with sweet chili sauce or ketchup.",
  ],
  tip: "Rolled lumpia freeze well. Fry them straight from frozen.",
});

/* ---- Beef ---- */
recipe({
  id: "bistek", name: "Bistek Tagalog", style: "filipino", slots: "LD", min: 40, tags: "ulam",
  ing: ["beef 600g | thin slices", "soy-sauce | 1/3 cup", "calamansi | 8, juiced", "onion | 2, in rings", "garlic | 4 cloves", "pepper", "water | 1/2 cup", "oil | 2 tbsp"],
  steps: [
    "Marinate the beef in soy sauce, calamansi, garlic and pepper for 30 minutes.",
    "Fry the onion rings briefly until just soft. Set aside.",
    "Sear the beef in batches. Add the marinade and water and simmer 15 minutes until tender.",
    "Top with the onion rings.",
  ],
});
recipe({
  id: "nilagang-baka", name: "Nilagang baka", style: "filipino", slots: "LD", min: 120, tags: "ulam soup comfort healthy",
  ing: ["beef 800g | shank or brisket", "potato 2 | halved", "cabbage 0.5 | wedges", "pechay 1?", "corn-can 1? | or 2 ears fresh corn", "onion | 1", "pepper | 1 tsp", "fish-sauce | 2 tbsp", "water | 10 cups"],
  steps: [
    "Boil the beef with onion and pepper. Skim the foam and simmer 1.5 hours until tender (30 to 40 minutes in a pressure cooker).",
    "Add the potatoes and corn and cook 10 minutes.",
    "Add cabbage and pechay for 2 minutes.",
    "Season with fish sauce.",
  ],
});
recipe({
  id: "beef-kaldereta", name: "Beef kaldereta", style: "filipino", slots: "LD", min: 110, tags: "ulam comfort spicy",
  ing: ["beef 800g | cubed", "tomato-sauce 1 | 1 pack", "liver-spread 1?", "potato 2 | cubed", "carrot 1 | cubed", "bell-pepper 1?", "cheese? | grated", "chili? | 2", "onion | 1", "garlic | 5 cloves", "soy-sauce | 1 tbsp", "water | 2 cups", "oil | 2 tbsp"],
  steps: [
    "Brown the beef, then add garlic and onion.",
    "Add tomato sauce, soy sauce and water. Simmer covered 1 hour until tender, adding water if needed.",
    "Add potatoes and carrots and cook 15 minutes.",
    "Stir in liver spread, cheese, bell pepper and chili. Simmer 5 minutes until thick.",
  ],
});
recipe({
  id: "picadillo", name: "Beef picadillo soup", style: "filipino", slots: "LD", min: 30, tags: "ulam soup cheap",
  ing: ["ground-beef 400g | or ground pork", "potato 2 | small cubes", "carrot 1? | small cubes", "tomato 2 | chopped", "onion | 1", "garlic | 4 cloves", "fish-sauce | 1 tbsp", "water | 4 cups", "oil | 1 tbsp", "pepper"],
  steps: [
    "Sauté garlic, onion and tomato.",
    "Add the meat and cook until browned. Season with fish sauce.",
    "Add potatoes, carrot and water and simmer 15 minutes.",
    "Season with pepper. It should be soupy.",
  ],
});

/* ---- Fish & seafood ---- */
recipe({
  id: "pritong-isda", name: "Fried fish with tomato salsa", style: "filipino", slots: "LD", min: 25, tags: "ulam healthy",
  ing: ["fish 800g | whole tilapia or galunggong, cleaned", "salt", "tomato 2 | diced", "onion | 1/2, diced", "calamansi? | 2", "fish-sauce? | 1 tsp", "oil | for frying"],
  steps: [
    "Score the fish and rub with salt. Pat very dry.",
    "Fry in hot oil without moving it for 5 to 6 minutes per side until crisp.",
    "Mix tomato, onion, calamansi and fish sauce for the salsa.",
    "Serve with rice and the salsa or vinegar.",
  ],
});
recipe({
  id: "paksiw-isda", name: "Paksiw na isda", style: "filipino", slots: "LD", min: 30, tags: "ulam healthy cheap",
  ing: ["fish 800g | bangus or galunggong", "vinegar | 1/2 cup", "ginger | 1 thumb, sliced", "garlic | 4 cloves", "onion | 1", "eggplant 1? | sliced", "ampalaya 1? | sliced", "chili? | 2 long chilies", "salt", "pepper", "water | 1 cup"],
  steps: [
    "Line a pan with ginger, garlic and onion. Lay the fish and vegetables on top.",
    "Add vinegar, water, salt, pepper and chilies.",
    "Bring to a boil without stirring, then simmer covered 15 minutes.",
    "Serve with rice. It keeps well for a few days.",
  ],
});
recipe({
  id: "sinigang-isda", name: "Sinigang na isda", style: "filipino", slots: "LD", min: 35, tags: "ulam soup healthy",
  ing: ["fish 700g | bangus or salmon head, sliced", "sinigang-mix | 1 pack", "radish 1? | sliced", "kangkong 1?", "tomato 2 | quartered", "onion | 1", "chili? | 2", "okra 4?", "fish-sauce", "water | 6 cups"],
  steps: [
    "Boil water with tomato and onion for 5 minutes.",
    "Add radish and sinigang mix and cook 5 minutes.",
    "Add the fish and okra and simmer gently 8 minutes. Don't stir or the fish will break.",
    "Add kangkong and chilies, turn off the heat, and season with fish sauce.",
  ],
});
recipe({
  id: "sinigang-hipon", name: "Sinigang na hipon", style: "filipino", slots: "LD", min: 30, tags: "ulam soup healthy",
  ing: ["shrimp 500g", "sinigang-mix | 1 pack", "radish 1?", "kangkong 1?", "sitaw 1?", "tomato 2", "onion | 1", "chili? | 2", "fish-sauce", "water | 6 cups"],
  steps: [
    "Boil water with tomato and onion 5 minutes. Add radish and sinigang mix.",
    "Add sitaw and cook 3 minutes.",
    "Add the shrimp and cook 2 to 3 minutes until just pink.",
    "Add kangkong, season with fish sauce, and serve right away.",
  ],
});
recipe({
  id: "escabeche", name: "Fish escabeche (sweet and sour fish)", style: "filipino", slots: "LD", min: 35, tags: "ulam kids",
  ing: ["fish 800g | tilapia or lapu-lapu", "bell-pepper 1? | strips", "carrot 1 | strips", "ginger | 1 thumb, strips", "onion | 1", "garlic | 3 cloves", "vinegar | 1/3 cup", "sugar | 1/4 cup", "ketchup | 3 tbsp", "cornstarch | 1 tbsp", "salt", "oil | for frying", "water | 3/4 cup"],
  steps: [
    "Salt and fry the fish until crisp. Place on a platter.",
    "Sauté garlic, ginger, onion, carrot and bell pepper 2 minutes.",
    "Add vinegar, sugar, ketchup and water and let it boil. Thicken with cornstarch mixed in water.",
    "Pour the sauce over the fish.",
  ],
});
recipe({
  id: "ginataang-hipon", name: "Shrimp in coconut milk with squash", style: "filipino", slots: "LD", min: 30, tags: "ulam comfort",
  ing: ["shrimp 400g", "coconut-milk 400 | 1 can", "squash 400g | cubed", "sitaw 1? | cut", "onion | 1", "garlic | 4 cloves", "ginger? | 1 thumb", "chili? | 2", "fish-sauce | 1 tbsp", "oil | 1 tbsp"],
  steps: [
    "Sauté garlic, onion and ginger.",
    "Add coconut milk and squash and simmer 10 minutes until the squash is almost soft.",
    "Add sitaw and cook 3 minutes.",
    "Add shrimp and chilies and cook 3 minutes until the shrimp are pink. Season with fish sauce.",
  ],
});
recipe({
  id: "garlic-butter-shrimp", name: "Garlic butter shrimp", style: "filipino", slots: "LD", min: 20, tags: "ulam kids",
  ing: ["shrimp 500g", "butter | 3 tbsp", "garlic | 1 head, minced", "calamansi? | 3", "sugar? | 1 tsp, or lemon soda", "salt", "pepper", "spring-onion?"],
  steps: [
    "Melt butter and fry the garlic until just golden.",
    "Add the shrimp, salt, pepper and sugar and toss 3 to 4 minutes until pink.",
    "Squeeze in calamansi and toss.",
    "Top with spring onion.",
  ],
});
recipe({
  id: "adobong-pusit", name: "Adobong pusit", style: "filipino", slots: "LD", min: 30, tags: "ulam",
  ing: ["squid 600g | cleaned, sliced", "vinegar | 1/4 cup", "soy-sauce | 2 tbsp", "tomato 2 | chopped", "onion | 1", "garlic | 5 cloves", "sugar? | 1 tsp", "pepper", "oil | 1 tbsp"],
  steps: [
    "Sauté garlic, onion and tomato.",
    "Add squid, vinegar, soy sauce and pepper. Bring to a boil without stirring.",
    "Simmer 3 minutes only (squid turns rubbery if cooked longer, unless you go past 30 minutes).",
    "Season with sugar to balance and serve.",
  ],
});
recipe({
  id: "calamares", name: "Calamares", style: "filipino", slots: "LD", min: 25, tags: "kids",
  ing: ["squid 500g | rings", "flour | 1 cup", "eggs 1", "cornstarch? | 1/4 cup", "salt", "pepper", "calamansi? | for serving", "oil | for frying"],
  steps: [
    "Season squid with salt and pepper.",
    "Dip in beaten egg, then coat in flour mixed with cornstarch.",
    "Fry in very hot oil 1 to 2 minutes until golden. Don't overcrowd the pan.",
    "Serve with vinegar, mayo or calamansi.",
  ],
});
recipe({
  id: "tuyo-sinangag", name: "Tuyo with garlic rice and tomatoes", style: "filipino", slots: "B", min: 15, tags: "cheap",
  ing: ["dried-fish 8", "rice 240g | 4 cups cooked rice", "tomato 2 | sliced", "eggs 4?", "garlic | 1 head, minced", "vinegar | for dipping", "oil | 4 tbsp", "salt"],
  steps: [
    "Fry the dried fish in a little oil until crisp. Open a window; it smells strong.",
    "Fry garlic until golden, add the rice and a pinch of salt and stir-fry.",
    "Fry eggs if using.",
    "Serve with sliced tomatoes and vinegar.",
  ],
});

/* ---- Vegetables ---- */
recipe({
  id: "pinakbet", name: "Pinakbet", style: "filipino", slots: "LD", min: 35, tags: "ulam healthy",
  ing: ["squash 300g | cubed", "eggplant 1 | sliced", "ampalaya 1? | sliced", "okra 6? | halved", "sitaw 1 | cut", "tomato 2 | chopped", "pork-belly 200g? | small pieces", "bagoong | 2 tbsp", "onion | 1", "garlic | 4 cloves", "water | 1/2 cup", "oil | 1 tbsp"],
  steps: [
    "Fry the pork until browned (skip if not using). Add garlic, onion and tomato.",
    "Stir in bagoong and cook 1 minute.",
    "Add squash and water, cover and cook 5 minutes.",
    "Add the rest of the vegetables, cover and steam 7 minutes. Toss gently and serve.",
  ],
});
recipe({
  id: "ginataang-kalabasa", name: "Squash and string beans in coconut milk", style: "filipino", slots: "LD", min: 30, tags: "ulam healthy cheap",
  ing: ["squash 500g | cubed", "sitaw 1 | cut", "coconut-milk 400 | 1 can", "shrimp 200g? | or ground pork", "onion | 1", "garlic | 4 cloves", "bagoong? | 1 tbsp, or fish sauce", "oil | 1 tbsp"],
  steps: [
    "Sauté garlic and onion. Add the shrimp or pork if using and cook 2 minutes.",
    "Add coconut milk and squash and simmer 10 minutes.",
    "Add sitaw and cook 4 minutes.",
    "Season with bagoong or fish sauce.",
  ],
});
recipe({
  id: "ampalaya-egg", name: "Ginisang ampalaya with egg", style: "filipino", slots: "LD", min: 20, tags: "ulam healthy cheap",
  ing: ["ampalaya 2 | sliced thin", "eggs 3 | beaten", "tomato 2 | chopped", "onion | 1", "garlic | 3 cloves", "ground-pork 150g?", "salt", "oil | 1 tbsp"],
  steps: [
    "Rub ampalaya with salt, rest 10 minutes, then squeeze and rinse.",
    "Sauté garlic, onion and tomato. Add pork if using and cook through.",
    "Add ampalaya and cook 3 minutes. Don't stir too much.",
    "Pour in the eggs and fold until set.",
  ],
});
recipe({
  id: "tortang-talong", name: "Tortang talong", style: "filipino", slots: "BLD", min: 25, tags: "ulam cheap kids",
  ing: ["eggplant 4", "eggs 3", "ground-pork 150g?", "salt", "pepper", "oil | 3 tbsp"],
  steps: [
    "Grill or broil the eggplants until the skin is charred and the flesh soft. Peel, keeping the stem on.",
    "Flatten each eggplant with a fork. Beat the eggs with salt and pepper (and cooked ground pork if using).",
    "Dip each eggplant in egg and fry 2 to 3 minutes per side, spooning extra egg on top.",
    "Serve with ketchup.",
  ],
});
recipe({
  id: "ginisang-monggo", name: "Ginisang monggo", style: "filipino", slots: "LD", min: 60, tags: "ulam soup cheap healthy comfort",
  ing: ["mung-beans 250g", "malunggay? | 1 cup, or ampalaya leaves or pechay", "tomato 2 | chopped", "pork-belly 150g? | or dried fish or chicharon", "onion | 1", "garlic | 5 cloves", "fish-sauce | 2 tbsp", "water | 6 cups", "oil | 1 tbsp"],
  steps: [
    "Boil the mung beans in the water for 40 minutes until soft and splitting.",
    "In another pan, fry the pork until crisp, then sauté garlic, onion and tomato.",
    "Add this to the beans and simmer 10 minutes. Season with fish sauce.",
    "Add the greens and turn off the heat.",
  ],
  tip: "Traditionally a Friday dish. Soak the beans overnight to save 20 minutes.",
});
recipe({
  id: "chopsuey", name: "Chopsuey", style: "filipino", slots: "LD", min: 30, tags: "ulam healthy",
  ing: ["cabbage 0.5 | sliced", "carrot 1 | sliced", "pechay 1? | cut", "bell-pepper 1? | sliced", "broccoli 1? | florets", "chicken 250g? | or pork or shrimp, sliced", "eggs 2? | hard-boiled, or 10 quail eggs", "onion | 1", "garlic | 4 cloves", "oyster-sauce | 2 tbsp", "cornstarch | 1 tbsp", "water | 1 cup", "oil | 1 tbsp"],
  steps: [
    "Sauté garlic and onion, then cook the meat until done.",
    "Add carrot and broccoli with half the water and cook 3 minutes.",
    "Add cabbage, pechay and bell pepper, oyster sauce and the rest of the water. Cook 3 minutes.",
    "Thicken with cornstarch mixed in water and add the eggs.",
  ],
});
recipe({
  id: "ginisang-repolyo", name: "Ginisang repolyo", style: "filipino", slots: "LD", min: 20, tags: "ulam cheap healthy",
  ing: ["cabbage 0.5 | sliced", "carrot 1? | strips", "ground-pork 200g? | or sardines or shrimp", "onion | 1", "garlic | 3 cloves", "fish-sauce | 1 tbsp", "water | 1/4 cup", "oil | 1 tbsp", "pepper"],
  steps: [
    "Sauté garlic and onion. Add the pork and cook through.",
    "Add carrot and cook 2 minutes.",
    "Add cabbage, fish sauce and water. Cook 3 to 4 minutes until just tender.",
    "Season with pepper.",
  ],
});
recipe({
  id: "ginisang-sayote", name: "Ginisang sayote", style: "filipino", slots: "LD", min: 20, tags: "ulam cheap healthy",
  ing: ["sayote 2 | strips", "ground-pork 200g? | or shrimp", "tomato 1? | chopped", "onion | 1", "garlic | 3 cloves", "fish-sauce | 1 tbsp", "water | 1/2 cup", "oil | 1 tbsp", "pepper"],
  steps: [
    "Sauté garlic, onion and tomato. Add pork and cook through.",
    "Add sayote and fish sauce and stir 1 minute.",
    "Add water, cover and cook 5 minutes until tender but still a bit crisp.",
    "Season with pepper.",
  ],
});
recipe({
  id: "adobong-kangkong", name: "Adobong kangkong", style: "filipino", slots: "LD", min: 15, tags: "ulam cheap healthy",
  ing: ["kangkong 2 | cut, stems and leaves separated", "garlic | 1 head, minced", "soy-sauce | 3 tbsp", "vinegar | 2 tbsp", "oyster-sauce? | 1 tbsp", "sugar? | 1 tsp", "pepper", "oil | 2 tbsp"],
  steps: [
    "Fry the garlic until golden. Scoop out half for topping.",
    "Add kangkong stems and cook 2 minutes.",
    "Add soy sauce, vinegar, oyster sauce and sugar and let it boil a moment.",
    "Add the leaves and toss until just wilted. Top with fried garlic.",
  ],
});
recipe({
  id: "adobong-sitaw", name: "Adobong sitaw", style: "filipino", slots: "LD", min: 25, tags: "ulam cheap",
  ing: ["sitaw 2 | cut into 2-inch pieces", "pork-belly 200g? | small pieces", "soy-sauce | 3 tbsp", "vinegar | 2 tbsp", "garlic | 5 cloves", "onion | 1", "pepper", "water | 1/2 cup", "oil | 1 tbsp"],
  steps: [
    "Brown the pork if using, then add garlic and onion.",
    "Add soy sauce, vinegar, water and pepper and boil 1 minute.",
    "Add sitaw, cover and cook 6 minutes until tender.",
    "Uncover and reduce the sauce a little.",
  ],
});
recipe({
  id: "ginisang-togue", name: "Ginisang togue", style: "filipino", slots: "LD", min: 15, tags: "ulam cheap healthy",
  ing: ["bean-sprouts 400g", "tofu 1? | cubed and fried", "carrot 1? | strips", "shrimp 150g? | or pork strips", "onion | 1", "garlic | 3 cloves", "fish-sauce | 1 tbsp", "oil | 1 tbsp", "pepper"],
  steps: [
    "Sauté garlic and onion. Cook the shrimp or pork through.",
    "Add carrot and cook 1 minute.",
    "Add bean sprouts, tofu and fish sauce and toss 2 minutes. The sprouts should stay crunchy.",
  ],
});
recipe({
  id: "lumpiang-togue", name: "Vegetable lumpia (lumpiang togue)", style: "filipino", slots: "LD", min: 45, tags: "ulam cheap",
  ing: ["lumpia-wrapper 15", "bean-sprouts 300g", "carrot 1 | strips", "sweet-potato 1? | strips", "sitaw 1? | sliced", "tofu 1? | cubed", "onion | 1", "garlic | 3 cloves", "fish-sauce | 1 tbsp", "vinegar | for dipping", "oil | for frying"],
  steps: [
    "Sauté garlic and onion, then the carrot, sweet potato and sitaw for 3 minutes. Add tofu, sprouts and fish sauce and cook 2 minutes. Cool.",
    "Wrap 2 tablespoons of filling in each wrapper and seal with water.",
    "Fry until golden and crisp.",
    "Serve with garlic vinegar.",
  ],
});
recipe({
  id: "tokwa-oyster", name: "Tofu in oyster sauce", style: "filipino", slots: "LD", min: 20, tags: "ulam cheap healthy",
  ing: ["tofu 3 | cubed", "oyster-sauce | 3 tbsp", "garlic | 4 cloves", "onion | 1/2", "spring-onion?", "pechay 1?", "sugar | 1 tsp", "water | 1/3 cup", "oil | for frying"],
  steps: [
    "Pat the tofu dry and fry until golden on all sides. Set aside.",
    "Sauté garlic and onion in a little oil.",
    "Add oyster sauce, sugar and water and simmer 1 minute. Add pechay if using.",
    "Toss the tofu in the sauce and top with spring onion.",
  ],
});
recipe({
  id: "ensaladang-talong", name: "Grilled eggplant salad", style: "filipino", slots: "LD", min: 20, tags: "healthy cheap side",
  ing: ["eggplant 3", "tomato 2 | diced", "onion | 1, diced", "vinegar | 3 tbsp", "fish-sauce? | 1 tsp, or bagoong", "salt", "pepper"],
  steps: [
    "Grill or broil the eggplants until charred and soft. Peel and slice.",
    "Mix with tomato and onion.",
    "Dress with vinegar, fish sauce, salt and pepper.",
    "Serve alongside fried fish or grilled meat.",
  ],
});
recipe({
  id: "ginisang-pechay", name: "Garlic pechay in oyster sauce", style: "filipino", slots: "LD", min: 10, tags: "healthy cheap",
  ing: ["pechay 2 | cut", "garlic | 6 cloves, minced", "oyster-sauce | 2 tbsp", "water | 2 tbsp", "oil | 1 tbsp"],
  steps: [
    "Fry the garlic in oil until golden.",
    "Add pechay stems first, then leaves, and toss on high heat.",
    "Add oyster sauce and water and toss 1 minute.",
  ],
});
recipe({
  id: "kamatis-itlog", name: "Ginisang itlog at kamatis", style: "filipino", slots: "BLD", min: 10, tags: "ulam cheap kids",
  ing: ["eggs 5 | beaten", "tomato 3 | chopped", "onion | 1, chopped", "garlic | 2 cloves", "fish-sauce? | 1 tsp", "oil | 1 tbsp", "salt"],
  steps: [
    "Sauté garlic, onion and tomato until the tomatoes are soft and saucy.",
    "Season with fish sauce or salt.",
    "Pour in the eggs and stir gently until just set.",
  ],
});
