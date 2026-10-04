/* Recipe book, part 1: meals built on canned goods.
   Format (shared by every recipes-*.js file, read by js/core/recipes.js):
     id, name, style (filipino | asian | western), slots (B breakfast, L lunch, D dinner), min (total minutes),
     tags: ulam (served with rice) · soup · onepot · cheap · healthy · kids · comfort · spicy
     ing: "key [amount][unit][?] | note"  — amount is for 4 servings; "?" = optional;
          a note that starts with a number is the amount people read (e.g. "1/2 cup"), and scales with servings.
     steps, tip (optional) */

const RECIPES = [];
function recipe(r) { RECIPES.push(r); }

/* ---- Sardines ---- */
recipe({
  id: "ginisang-sardinas", name: "Ginisang sardinas", style: "filipino", slots: "BLD", min: 15, tags: "ulam cheap",
  ing: ["sardines 2", "onion | 1, sliced", "garlic | 3 cloves, minced", "tomato 2 | diced", "eggs 2? | beaten", "oil | 1 tbsp", "pepper"],
  steps: [
    "Heat oil in a pan. Sauté garlic until golden, then onion until soft, then tomato until it breaks down.",
    "Add the sardines with their sauce. Break them into chunks and simmer 3 minutes.",
    "If using eggs, pour them in and stir gently until just set.",
    "Season with pepper and serve hot with rice.",
  ],
  tip: "Add a splash of water if the sauce gets too thick.",
});
recipe({
  id: "sardinas-misua", name: "Sardines with misua", style: "filipino", slots: "LD", min: 20, tags: "ulam soup cheap comfort nokeep",
  ing: ["sardines 2", "misua 1 | 1 bundle (about 100 g)", "onion | 1, sliced", "garlic | 4 cloves, minced", "pechay 1? | or any leafy green", "fish-sauce | to taste", "water | 4 cups", "oil | 1 tbsp", "pepper"],
  steps: [
    "Sauté garlic and onion in oil until soft.",
    "Add the sardines and their sauce, mash them a little and cook 2 minutes.",
    "Pour in the water and bring to a boil. Season with fish sauce and pepper.",
    "Add the misua and the greens. Simmer 2 minutes until the noodles are soft, then serve right away.",
  ],
  tip: "Misua soaks up the soup fast. Add it just before eating.",
});
recipe({
  id: "tortang-sardinas", name: "Sardines omelette (tortang sardinas)", style: "filipino", slots: "BLD", min: 15, tags: "ulam cheap kids",
  ing: ["sardines 1 | drained, sauce saved", "eggs 4", "onion | 1/2, chopped", "tomato 1? | chopped", "salt", "pepper", "oil | 2 tbsp"],
  steps: [
    "Mash the drained sardines in a bowl. Add the eggs, onion and tomato, then season lightly with salt and pepper.",
    "Heat oil in a pan over medium heat. Pour in half the mixture to make one thick omelette.",
    "Cook until the bottom is set and golden, about 3 minutes, then flip and cook 2 more minutes. Repeat with the rest.",
    "Serve with rice and the warmed-up sardine sauce or ketchup.",
  ],
});
recipe({
  id: "sardinas-pechay", name: "Sardines with pechay", style: "filipino", slots: "LD", min: 15, tags: "ulam cheap healthy",
  ing: ["sardines 2", "pechay 1 | cut into 2-inch pieces", "onion | 1, sliced", "garlic | 3 cloves, minced", "tomato 1? | diced", "water | 1/2 cup", "oil | 1 tbsp", "pepper"],
  steps: [
    "Sauté garlic, onion and tomato in oil until soft.",
    "Add the sardines with their sauce and the water. Simmer 3 minutes.",
    "Add the pechay stems first, cook 1 minute, then the leaves until just wilted.",
    "Season with pepper and serve with rice.",
  ],
});
recipe({
  id: "ginataang-sardinas", name: "Sardines in coconut milk", style: "filipino", slots: "LD", min: 20, tags: "ulam comfort",
  ing: ["sardines 2", "coconut-milk 400 | 1 can (400 ml)", "onion | 1, sliced", "garlic | 3 cloves, minced", "ginger | thumb-size, sliced", "pechay 1? | or malunggay", "chili? | 2 long chilies", "fish-sauce | to taste", "oil | 1 tbsp"],
  steps: [
    "Sauté garlic, onion and ginger in oil until fragrant.",
    "Pour in the coconut milk and simmer, stirring, for 5 minutes until it thickens a little.",
    "Add the sardines and chilies. Simmer 5 more minutes without stirring too much so the fish stays in pieces.",
    "Add the greens, cook 1 minute, and season with fish sauce.",
  ],
});
recipe({
  id: "sardines-ampalaya", name: "Ampalaya with sardines and egg", style: "filipino", slots: "LD", min: 20, tags: "ulam healthy cheap",
  ing: ["sardines 1", "ampalaya 1 | sliced thin", "eggs 2 | beaten", "onion | 1, sliced", "garlic | 3 cloves, minced", "tomato 1 | diced", "salt", "oil | 1 tbsp"],
  steps: [
    "Rub the sliced ampalaya with 1 tsp salt, leave 10 minutes, then squeeze and rinse. This takes away most of the bitterness.",
    "Sauté garlic, onion and tomato in oil.",
    "Add the sardines and their sauce, then the ampalaya. Cook 4 minutes, stirring now and then.",
    "Pour in the eggs, let them set a little, then fold through. Serve with rice.",
  ],
});
recipe({
  id: "sardines-pasta", name: "Spicy sardines pasta", style: "western", slots: "LD", min: 20, tags: "onepot cheap spicy nokeep",
  ing: ["spaghetti 400g", "sardines 2 | in tomato sauce or oil", "garlic | 6 cloves, sliced", "chili-flakes? | 1 tsp", "calamansi? | 2, juiced", "cheese? | grated", "oil | 3 tbsp", "salt", "pepper"],
  steps: [
    "Cook the pasta in salted water until just tender. Save 1/2 cup of the pasta water, then drain.",
    "In a pan, warm the oil and gently fry the garlic and chili until the garlic is pale gold.",
    "Add the sardines, break them up, and cook 2 minutes.",
    "Toss in the pasta with a splash of pasta water until glossy. Finish with calamansi, pepper and cheese.",
  ],
});
recipe({
  id: "sardines-fried-rice", name: "Sardines fried rice", style: "filipino", slots: "BLD", min: 15, tags: "onepot cheap",
  ing: ["rice 300g | 5 cups cooked rice, day-old", "sardines 1 | drained", "eggs 2", "garlic | 5 cloves, minced", "onion | 1/2, chopped", "spring-onion? | chopped", "soy-sauce | 1 tbsp", "oil | 2 tbsp", "salt", "pepper"],
  steps: [
    "Break up any clumps in the cold rice with your hands.",
    "Fry the garlic in oil until golden, add onion, then the sardines. Mash and fry 2 minutes until a little crisp.",
    "Push everything to the side, scramble the eggs in the space, then mix.",
    "Add the rice and soy sauce and stir-fry on high heat 4 minutes. Season and top with spring onion.",
  ],
});
recipe({
  id: "sardinas-sotanghon", name: "Sardines sotanghon soup", style: "filipino", slots: "LD", min: 20, tags: "soup cheap comfort nokeep",
  ing: ["sardines 2", "sotanghon 1 | 1 bundle (about 100 g), soaked", "carrot 1? | cut into strips", "cabbage 0.25? | shredded", "onion | 1, sliced", "garlic | 4 cloves, minced", "fish-sauce | to taste", "water | 5 cups", "oil | 1 tbsp"],
  steps: [
    "Soak the sotanghon in water for 10 minutes, then drain.",
    "Sauté garlic and onion. Add the sardines with sauce and cook 2 minutes.",
    "Add water and carrot and boil 5 minutes. Season with fish sauce.",
    "Add the noodles and cabbage and cook 2 to 3 minutes until the noodles turn clear.",
  ],
});

/* ---- Corned beef ---- */
recipe({
  id: "corned-beef-guisado", name: "Corned beef guisado", style: "filipino", slots: "BLD", min: 15, tags: "ulam kids",
  ing: ["corned-beef 1", "onion | 1, chopped", "garlic | 3 cloves, minced", "tomato 1? | diced", "oil | 1 tbsp", "pepper"],
  steps: [
    "Sauté garlic until golden, then onion and tomato until soft.",
    "Add the corned beef and break it up. Cook 5 minutes, stirring, until heated through and a little browned.",
    "Season with pepper. Serve with rice or pandesal.",
  ],
});
recipe({
  id: "corned-beef-potato", name: "Corned beef with potatoes", style: "filipino", slots: "BLD", min: 25, tags: "ulam kids comfort keeps",
  ing: ["corned-beef 1", "potato 2 | small cubes", "carrot 1? | small cubes", "onion | 1, chopped", "garlic | 3 cloves, minced", "water | 1/2 cup", "oil | 2 tbsp", "pepper"],
  steps: [
    "Fry the potato (and carrot) cubes in oil until lightly browned. Set aside.",
    "In the same pan sauté garlic and onion, then add the corned beef and break it up.",
    "Return the potatoes, add the water, cover and simmer 8 minutes until the potatoes are tender.",
    "Season with pepper and serve with rice.",
  ],
});
recipe({
  id: "corned-beef-cabbage", name: "Corned beef with cabbage", style: "filipino", slots: "LD", min: 15, tags: "ulam cheap",
  ing: ["corned-beef 1", "cabbage 0.5 | sliced", "onion | 1, sliced", "garlic | 3 cloves, minced", "tomato 1? | diced", "water | 1/4 cup", "oil | 1 tbsp", "pepper"],
  steps: [
    "Sauté garlic, onion and tomato in oil.",
    "Add the corned beef and cook 3 minutes, breaking it up.",
    "Add the cabbage and water. Cover and cook 4 minutes until the cabbage is tender but still bright.",
    "Season with pepper and serve.",
  ],
});
recipe({
  id: "cornsilog", name: "Cornsilog (corned beef, garlic rice, egg)", style: "filipino", slots: "B", min: 20, tags: "kids comfort",
  ing: ["corned-beef 1", "rice 240g | 4 cups cooked rice, day-old", "eggs 4", "garlic | 1 head, minced", "onion | 1/2, chopped", "oil | 3 tbsp", "salt", "vinegar? | for dipping"],
  steps: [
    "Garlic rice: fry half the garlic in 2 tbsp oil until golden, add the rice and a pinch of salt, and stir-fry until hot.",
    "Sauté the rest of the garlic and the onion, add corned beef, and cook 5 minutes until a bit crisp at the edges.",
    "Fry the eggs sunny side up.",
    "Plate rice, corned beef and an egg. Spiced vinegar on the side is classic.",
  ],
});
recipe({
  id: "tortang-corned-beef", name: "Corned beef omelette", style: "filipino", slots: "BLD", min: 15, tags: "ulam kids",
  ing: ["corned-beef 1", "eggs 4", "onion | 1/2, chopped", "potato 1? | grated or finely diced", "salt", "pepper", "oil | 2 tbsp"],
  steps: [
    "Mix corned beef, eggs, onion and potato in a bowl. Season lightly; corned beef is already salty.",
    "Heat oil in a pan over medium-low heat. Scoop in patties about the size of your palm.",
    "Fry 3 minutes per side until set and golden.",
    "Serve with rice and ketchup.",
  ],
});
recipe({
  id: "corned-beef-hash", name: "Corned beef hash", style: "western", slots: "B", min: 25, tags: "comfort",
  ing: ["corned-beef 1", "potato 3 | small cubes", "onion | 1, chopped", "eggs 4", "oil | 3 tbsp", "pepper"],
  steps: [
    "Boil the potato cubes 5 minutes, then drain well.",
    "Fry the potatoes in oil over medium-high heat until crisp on several sides, about 8 minutes.",
    "Add onion and corned beef and press down with a spatula. Let it crisp 3 minutes, then turn and repeat.",
    "Make four wells, crack an egg into each, cover and cook until the whites set.",
  ],
});
recipe({
  id: "corned-beef-pandesal", name: "Corned beef pandesal", style: "filipino", slots: "B", min: 10, tags: "kids",
  ing: ["corned-beef 1", "bread 8 | 8 pandesal or 8 slices", "onion | 1/2, chopped", "garlic | 2 cloves, minced", "cheese?", "oil | 1 tbsp"],
  steps: [
    "Sauté garlic and onion, then add corned beef and cook until heated through.",
    "Split the pandesal and toast them in the pan or a toaster if you like.",
    "Fill with corned beef, plus a slice of cheese if you have it.",
  ],
});

/* ---- Luncheon meat, meat loaf, Vienna sausage ---- */
recipe({
  id: "spamsilog", name: "Luncheon meat silog", style: "filipino", slots: "B", min: 20, tags: "kids comfort",
  ing: ["luncheon-meat 1 | sliced", "rice 240g | 4 cups cooked rice, day-old", "eggs 4", "garlic | 1 head, minced", "oil | 3 tbsp", "salt", "ketchup?"],
  steps: [
    "Pan-fry the luncheon meat slices without oil until browned on both sides.",
    "Garlic rice: fry the garlic in 2 tbsp oil until golden, add rice and a pinch of salt, and stir-fry until hot.",
    "Fry the eggs.",
    "Serve with ketchup.",
  ],
});
recipe({
  id: "spam-fried-rice", name: "Luncheon meat fried rice", style: "asian", slots: "BLD", min: 20, tags: "onepot kids",
  ing: ["luncheon-meat 1 | small cubes", "rice 300g | 5 cups cooked rice, day-old", "eggs 3", "carrot 1? | small dice", "garlic | 4 cloves, minced", "spring-onion? | chopped", "soy-sauce | 2 tbsp", "oil | 2 tbsp", "pepper"],
  steps: [
    "Fry the luncheon meat cubes until crisp. Push aside.",
    "Add oil, garlic and carrot and cook 2 minutes.",
    "Scramble the eggs in the pan, then add the rice and soy sauce.",
    "Stir-fry on high heat until everything is hot and slightly toasted. Finish with pepper and spring onion.",
  ],
});
recipe({
  id: "spam-veg-stirfry", name: "Luncheon meat and vegetable stir-fry", style: "asian", slots: "LD", min: 20, tags: "ulam",
  ing: ["luncheon-meat 1 | sliced into strips", "cabbage 0.5 | sliced", "carrot 1 | sliced thin", "bell-pepper 1? | sliced", "onion | 1, sliced", "garlic | 3 cloves, minced", "oyster-sauce | 2 tbsp", "water | 1/4 cup", "oil | 1 tbsp"],
  steps: [
    "Brown the luncheon meat strips in a pan and set aside.",
    "Sauté garlic and onion, then add carrot and cook 2 minutes.",
    "Add cabbage, bell pepper, oyster sauce and water. Toss on high heat 3 minutes.",
    "Return the meat, toss, and serve with rice.",
  ],
});
recipe({
  id: "spam-sweet-sour", name: "Sweet and sour luncheon meat", style: "filipino", slots: "LD", min: 20, tags: "ulam kids",
  ing: ["luncheon-meat 1 | cubed", "bell-pepper 1? | cubed", "onion | 1, cubed", "carrot 1? | sliced", "ketchup | 1/3 cup", "vinegar | 2 tbsp", "sugar | 2 tbsp", "cornstarch | 1 tbsp in 1/2 cup water", "oil | 1 tbsp"],
  steps: [
    "Fry the luncheon meat cubes until browned. Set aside.",
    "Sauté onion, carrot and bell pepper 2 minutes.",
    "Add ketchup, vinegar and sugar. Let the vinegar boil 1 minute before stirring.",
    "Stir in the cornstarch slurry until glossy, return the meat and toss.",
  ],
});
recipe({
  id: "meatloaf-silog", name: "Meat loaf silog", style: "filipino", slots: "B", min: 15, tags: "kids cheap",
  ing: ["meat-loaf 1 | sliced", "rice 240g | 4 cups cooked rice", "eggs 4", "garlic | 6 cloves, minced", "oil | 3 tbsp", "salt", "ketchup?"],
  steps: [
    "Dip meat loaf slices in a little beaten egg if you like, then pan-fry until browned.",
    "Fry garlic in oil until golden, add the rice with a pinch of salt and stir-fry.",
    "Fry the eggs and serve together with ketchup.",
  ],
});
recipe({
  id: "meatloaf-guisado", name: "Meat loaf guisado with potatoes", style: "filipino", slots: "LD", min: 20, tags: "ulam cheap keeps",
  ing: ["meat-loaf 1 | cubed", "potato 2 | cubed", "tomato 1 | diced", "onion | 1, chopped", "garlic | 3 cloves, minced", "water | 1/2 cup", "oil | 2 tbsp", "pepper"],
  steps: [
    "Fry the potatoes until lightly golden and set aside.",
    "Sauté garlic, onion and tomato.",
    "Add meat loaf, potatoes and water. Simmer 6 minutes until the potatoes are soft.",
    "Season with pepper and serve.",
  ],
});
recipe({
  id: "vienna-egg-scramble", name: "Vienna sausage and egg scramble", style: "filipino", slots: "B", min: 10, tags: "kids cheap",
  ing: ["vienna-sausage 1 | sliced", "eggs 4 | beaten", "onion | 1/2, chopped", "tomato 1? | diced", "oil | 1 tbsp", "salt", "pepper"],
  steps: [
    "Fry the sausage slices until lightly browned.",
    "Add onion and tomato and cook 2 minutes.",
    "Pour in the eggs, season, and stir gently until just set.",
    "Serve with rice or bread.",
  ],
});
recipe({
  id: "vienna-pasta", name: "Vienna sausage tomato pasta", style: "filipino", slots: "LD", min: 25, tags: "kids",
  ing: ["spaghetti 400g", "vienna-sausage 2 | sliced", "tomato-sauce 1 | 1 pack (250 g)", "onion | 1, chopped", "garlic | 4 cloves, minced", "ketchup? | 2 tbsp", "sugar | 1 tbsp", "cheese? | grated", "oil | 1 tbsp", "salt"],
  steps: [
    "Cook the pasta in salted water and drain.",
    "Sauté garlic and onion, then brown the sausages.",
    "Add tomato sauce, ketchup and sugar plus 1/4 cup water. Simmer 10 minutes.",
    "Toss with pasta or spoon the sauce on top, then add cheese.",
  ],
});
recipe({
  id: "pork-beans-hotdog", name: "Pork and beans with hotdog", style: "filipino", slots: "BLD", min: 15, tags: "ulam kids cheap",
  ing: ["pork-and-beans 1", "hotdog 4 | sliced", "onion | 1, chopped", "garlic | 3 cloves, minced", "tomato 1? | diced", "oil | 1 tbsp"],
  steps: [
    "Sauté garlic, onion and tomato in oil.",
    "Add the hotdogs and brown lightly.",
    "Pour in the pork and beans with a splash of water and simmer 5 minutes.",
  ],
});
recipe({
  id: "pork-beans-giniling", name: "Pork and beans with ground meat", style: "filipino", slots: "LD", min: 25, tags: "ulam kids comfort keeps",
  ing: ["pork-and-beans 2", "ground-pork 300g | or ground beef", "potato 1? | small cubes", "onion | 1, chopped", "garlic | 4 cloves, minced", "tomato-sauce 0.5? | 1/2 pack", "oil | 1 tbsp", "salt", "pepper"],
  steps: [
    "Sauté garlic and onion, then add the ground meat and cook until no longer pink.",
    "Add the potato and tomato sauce with 1/2 cup water. Simmer 8 minutes.",
    "Stir in the pork and beans and simmer 5 more minutes. Season to taste.",
  ],
});
recipe({
  id: "liver-spread-sandwich", name: "Liver spread sandwich", style: "filipino", slots: "B", min: 5, tags: "cheap",
  ing: ["liver-spread 1", "bread 8 | 8 slices or pandesal", "onion? | 2 tbsp finely chopped", "mayo? | 1 tbsp"],
  steps: [
    "Mix the liver spread with chopped onion and mayonnaise.",
    "Spread on bread or pandesal. Toast lightly if you like.",
  ],
});

/* ---- Tuna ---- */
recipe({
  id: "tortang-tuna", name: "Tuna omelette (tortang tuna)", style: "filipino", slots: "BLD", min: 15, tags: "ulam kids cheap",
  ing: ["tuna 2 | drained", "eggs 4", "onion | 1/2, chopped", "carrot 1? | grated", "salt", "pepper", "oil | 3 tbsp"],
  steps: [
    "Mix tuna, eggs, onion and carrot. Season with salt and pepper.",
    "Heat oil over medium heat. Spoon in small patties and flatten slightly.",
    "Fry 2 to 3 minutes per side until golden.",
    "Serve with rice and ketchup.",
  ],
});
recipe({
  id: "tuna-sisig", name: "Tuna sisig", style: "filipino", slots: "LD", min: 15, tags: "ulam spicy",
  ing: ["tuna 2 | drained", "onion | 1, chopped", "chili | 2, chopped", "calamansi | 4, juiced", "soy-sauce | 1 tbsp", "mayo? | 2 tbsp", "eggs 1? | for topping", "oil | 1 tbsp", "pepper"],
  steps: [
    "Sauté half the onion and the chilies in oil.",
    "Add tuna and fry, stirring, until a little crisp, about 5 minutes.",
    "Add soy sauce and pepper. Turn off the heat and mix in calamansi and mayonnaise.",
    "Top with the raw onion and a fried egg if you like.",
  ],
});
recipe({
  id: "tuna-patties", name: "Tuna patties", style: "western", slots: "LD", min: 20, tags: "kids",
  ing: ["tuna 2 | drained", "eggs 1", "potato 1? | boiled and mashed", "breadcrumbs? | 1/2 cup, or flour", "onion | 1/2, chopped", "salt", "pepper", "oil | 3 tbsp"],
  steps: [
    "Mix tuna, egg, mashed potato, breadcrumbs and onion. Season.",
    "Shape into 8 small patties. If they feel soft, chill 10 minutes.",
    "Fry in oil over medium heat, 3 minutes per side, until golden.",
  ],
});
recipe({
  id: "creamy-tuna-pasta", name: "Creamy tuna pasta", style: "western", slots: "LD", min: 20, tags: "kids comfort",
  ing: ["spaghetti 400g", "tuna 2", "evap-milk 370 | 1 can", "garlic | 5 cloves, minced", "onion | 1/2, chopped", "cheese? | grated", "butter? | 1 tbsp", "salt", "pepper"],
  steps: [
    "Cook the pasta in salted water and drain.",
    "Sauté garlic and onion in butter or oil, then add tuna and cook 2 minutes.",
    "Pour in the milk and simmer gently 3 minutes. Do not boil hard or it can split.",
    "Toss with pasta, season, and top with cheese.",
  ],
});
recipe({
  id: "tuna-aglio", name: "Tuna aglio olio", style: "western", slots: "LD", min: 20, tags: "onepot nokeep",
  ing: ["spaghetti 400g", "tuna 1 | in oil", "garlic | 8 cloves, sliced", "chili-flakes? | 1 tsp", "calamansi? | 2", "oil | 3 tbsp", "salt", "pepper"],
  steps: [
    "Cook the pasta in salted water. Save 1/2 cup of the water before draining.",
    "Gently fry garlic and chili in the oil from the tuna plus more oil until pale gold.",
    "Add tuna, then the pasta and a splash of pasta water. Toss until glossy.",
    "Squeeze over calamansi and season.",
  ],
});
recipe({
  id: "tuna-sandwich", name: "Tuna sandwich", style: "western", slots: "B", min: 10, tags: "kids",
  ing: ["tuna 1 | drained", "bread 8", "mayo | 3 tbsp", "onion | 2 tbsp chopped", "carrot 1? | grated", "cheese?", "pepper"],
  steps: [
    "Mix tuna, mayonnaise, onion, carrot and pepper.",
    "Spread between slices of bread. Add cheese if you have it.",
    "Toast in a dry pan for a tuna melt.",
  ],
});
recipe({
  id: "tuna-macaroni-salad", name: "Tuna macaroni salad", style: "filipino", slots: "LD", min: 25, tags: "kids",
  ing: ["macaroni 250g", "tuna 1 | drained", "carrot 1 | small dice", "mayo | 1/2 cup", "onion | 1/4, chopped", "cheese? | cubed", "salt", "pepper"],
  steps: [
    "Boil the macaroni in salted water until tender. Add the carrot for the last 2 minutes. Drain and cool.",
    "Mix with tuna, onion, mayonnaise and cheese.",
    "Season and chill until serving.",
  ],
});

/* ---- Other cans ---- */
recipe({
  id: "corn-egg-soup", name: "Corn and egg drop soup", style: "asian", slots: "LD", min: 15, tags: "soup cheap kids",
  ing: ["corn-can 1", "eggs 2 | beaten", "chicken 150g? | shredded or minced", "bouillon | 1", "cornstarch | 2 tbsp in 1/4 cup water", "spring-onion? | chopped", "water | 4 cups", "salt", "pepper"],
  steps: [
    "Bring the water, broth cube and corn to a boil. Add the chicken if using and simmer 5 minutes.",
    "Stir in the cornstarch slurry until the soup thickens.",
    "Slowly pour in the eggs while stirring in one direction to make ribbons.",
    "Season and top with spring onion.",
  ],
});
recipe({
  id: "cream-mushroom-chicken", name: "Chicken in creamy mushroom sauce", style: "western", slots: "LD", min: 35, tags: "ulam comfort kids keeps",
  ing: ["chicken 700g | bite-size pieces", "cream-of-mushroom 1", "mushroom-can 1?", "evap-milk 185? | 1/2 can", "onion | 1, chopped", "garlic | 4 cloves, minced", "butter? | 1 tbsp", "salt", "pepper"],
  steps: [
    "Season the chicken and brown it in butter or oil.",
    "Add onion and garlic and cook 2 minutes.",
    "Stir in the soup, mushrooms and milk with 1/2 cup water. Simmer covered 20 minutes until the chicken is tender.",
    "Season and serve with rice or pasta.",
  ],
});
recipe({
  id: "chickpea-tomato-stew", name: "Chickpea and tomato stew", style: "western", slots: "LD", min: 25, tags: "healthy cheap onepot keeps",
  ing: ["chickpeas 2 | drained", "tomato-sauce 1 | 1 pack, or 4 chopped tomatoes", "potato 1? | cubed", "onion | 1, chopped", "garlic | 4 cloves, minced", "pechay 1? | chopped", "curry-powder? | 1 tsp", "oil | 2 tbsp", "salt", "pepper"],
  steps: [
    "Sauté onion and garlic in oil. Add curry powder if using and stir 30 seconds.",
    "Add chickpeas, tomato sauce, potato and 1 cup water. Simmer 15 minutes.",
    "Stir in the greens until wilted and season.",
    "Serve with rice or bread.",
  ],
});
