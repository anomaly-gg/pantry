/* Ingredient dictionary. Every recipe ingredient and every pantry item maps to one of these keys.

   ING[key] = {
     name   display name
     cat    pantry shelf (see CATEGORIES)
     unit   base unit amounts are stored in: g · ml · pc · can · pack · head · bunch
     track  true  = the amount matters (the week planner rations it, "cooked it" deducts it)
            false = presence only (seasonings, aromatics: you either have it or you don't)
     perish 2 = spoils in a few days (fresh meat, fish, leafy greens) · 1 = about a week · 0 = keeps
     conv   other units → base units, e.g. { kg: 1000, pc: 250 } for chicken in grams
     alias  extra names people type: Tagalog, brands, plurals (lower case)
   } */

const CATEGORIES = [
  ["meat", "Meat & fish"],
  ["canned", "Canned"],
  ["produce", "Fruit & vegetables"],
  ["dairy", "Eggs & dairy"],
  ["grains", "Rice, noodles & bread"],
  ["sauces", "Sauces & seasonings"],
  ["other", "Other"],
];

const ING = {};
function ing(key, name, cat, unit, track, perish, conv, alias) {
  ING[key] = { key, name, cat, unit, track, perish, conv: conv || {}, alias: alias || [] };
}

/* ---- Meat & fish ---- */
ing("chicken", "Chicken", "meat", "g", true, 2, { kg: 1000, pc: 220, whole: 1300 },
  ["manok", "chicken thigh", "chicken thighs", "chicken legs", "chicken leg", "drumstick", "drumsticks", "chicken wings", "wings", "chicken breast", "chicken breasts", "chicken cuts", "whole chicken", "leg quarter", "leg quarters", "pecho", "pakpak"]);
ing("pork", "Pork", "meat", "g", true, 2, { kg: 1000, pc: 200 },
  ["baboy", "pork chop", "pork chops", "porkchop", "kasim", "pigue", "pork shoulder", "pork cubes", "adobo cut", "pork ribs", "spare ribs", "ribs"]);
ing("pork-belly", "Pork belly (liempo)", "meat", "g", true, 2, { kg: 1000, pc: 250 },
  ["liempo", "pork belly", "belly", "lechon kawali cut"]);
ing("ground-pork", "Ground pork", "meat", "g", true, 2, { kg: 1000, pack: 500 },
  ["giniling", "giniling na baboy", "minced pork", "pork mince", "ground meat"]);
ing("beef", "Beef", "meat", "g", true, 2, { kg: 1000, pc: 200 },
  ["baka", "beef cubes", "beef brisket", "brisket", "beef shank", "kenchi", "sirloin", "beef sirloin", "stewing beef", "beef steak"]);
ing("ground-beef", "Ground beef", "meat", "g", true, 2, { kg: 1000, pack: 500 },
  ["giniling na baka", "minced beef", "beef mince"]);
ing("fish", "Fish", "meat", "g", true, 2, { kg: 1000, pc: 300 },
  ["isda", "tilapia", "bangus", "milkfish", "galunggong", "gg", "lapu-lapu", "maya-maya", "tanigue", "salmon", "fish fillet", "cream dory", "dory", "pompano", "tulingan", "dalagang bukid", "hasa-hasa", "alumahan", "sapsap"]);
ing("dried-fish", "Dried fish (tuyo/daing)", "meat", "pc", true, 0, { pack: 10 },
  ["tuyo", "daing", "dried fish", "danggit", "dilis", "pusit na tuyo", "dried squid"]);
ing("shrimp", "Shrimp", "meat", "g", true, 2, { kg: 1000 },
  ["hipon", "prawns", "prawn", "suahe"]);
ing("squid", "Squid", "meat", "g", true, 2, { kg: 1000 },
  ["pusit", "calamari", "squid rings"]);
ing("hotdog", "Hotdogs", "meat", "pc", true, 1, { pack: 8, kg: 30 },
  ["hotdog", "hot dog", "hot dogs", "frankfurter", "franks", "tender juicy", "purefoods hotdog", "cdo hotdog"]);
ing("longganisa", "Longganisa", "meat", "pc", true, 1, { pack: 8 },
  ["longganisa", "longanisa", "sausage", "sausages", "skinless longganisa"]);
ing("tocino", "Tocino", "meat", "g", true, 1, { pack: 250 },
  ["tocino", "pork tocino", "chicken tocino"]);
ing("tapa", "Beef tapa", "meat", "g", true, 1, { pack: 250 },
  ["tapa", "beef tapa"]);
ing("bacon", "Bacon", "meat", "g", true, 1, { pack: 200, pc: 20 },
  ["bacon", "bacon strips"]);
ing("ham", "Ham", "meat", "g", true, 1, { pack: 250, pc: 25 },
  ["ham", "sliced ham", "sweet ham", "chinese ham"]);
ing("tofu", "Tofu (tokwa)", "meat", "pc", true, 2, { pack: 2 },
  ["tokwa", "tofu", "firm tofu", "taho"]);

/* ---- Canned ---- */
ing("sardines", "Sardines", "canned", "can", true, 0, {},
  ["sardines", "sardinas", "sardine", "ligo", "mega sardines", "555 sardines", "family sardines", "hakone", "sardines in tomato sauce", "sardines in oil", "spanish sardines"]);
ing("tuna", "Tuna", "canned", "can", true, 0, {},
  ["tuna", "canned tuna", "tuna flakes", "century tuna", "555 tuna", "san marino", "tuna chunks", "tuna in oil", "tuna in water"]);
ing("corned-beef", "Corned beef", "canned", "can", true, 0, {},
  ["corned beef", "carne norte", "argentina corned beef", "purefoods corned beef", "cdo corned beef", "palm corned beef", "delimondo", "555 corned beef", "corned"]);
ing("luncheon-meat", "Luncheon meat", "canned", "can", true, 0, {},
  ["luncheon meat", "spam", "maling", "ma ling", "chinese luncheon meat", "purefoods luncheon", "tulip"]);
ing("meat-loaf", "Meat loaf", "canned", "can", true, 0, {},
  ["meat loaf", "meatloaf", "argentina meat loaf", "beef loaf", "pork loaf"]);
ing("vienna-sausage", "Vienna sausage", "canned", "can", true, 0, {},
  ["vienna sausage", "vienna sausages", "vienna", "libby's vienna"]);
ing("pork-and-beans", "Pork and beans", "canned", "can", true, 0, {},
  ["pork and beans", "pork & beans", "pork n beans", "baked beans", "hunt's pork and beans"]);
ing("liver-spread", "Liver spread", "canned", "can", true, 0, {},
  ["liver spread", "reno", "liver pate", "pate"]);
ing("coconut-milk", "Coconut milk (gata)", "canned", "ml", true, 0, { can: 400, pack: 200, cup: 240, l: 1000 },
  ["gata", "coconut milk", "coconut cream", "kakang gata", "kara", "jolly coconut milk", "coco milk"]);
ing("evap-milk", "Evaporated milk", "canned", "ml", true, 0, { can: 370, cup: 240, pack: 370 },
  ["evaporated milk", "evap", "evaporada", "alaska evap", "carnation", "evaporated filled milk", "all purpose cream", "all-purpose cream", "nestle cream", "cream"]);
ing("tomato-sauce", "Tomato sauce", "canned", "pack", true, 0, { g: 1 / 250, kg: 4, ml: 1 / 250, can: 1, cup: 1 },
  ["tomato sauce", "spaghetti sauce", "sarsa", "del monte tomato sauce", "hunt's tomato sauce", "tomato paste", "pasta sauce", "clara ole", "italian style sauce"]);
ing("corn-can", "Corn kernels", "canned", "can", true, 0, {},
  ["corn kernels", "whole kernel corn", "cream corn", "cream-style corn", "canned corn", "sweet corn", "corn"]);
ing("mushroom-can", "Mushrooms", "canned", "can", true, 0, {},
  ["mushrooms", "mushroom", "canned mushrooms", "button mushrooms", "pieces and stems", "kabute"]);
ing("cream-of-mushroom", "Cream of mushroom soup", "canned", "can", true, 0, {},
  ["cream of mushroom", "campbell's", "cream of mushroom soup"]);
ing("chickpeas", "Chickpeas (garbanzos)", "canned", "can", true, 0, {},
  ["garbanzos", "chickpeas", "chick peas", "garbanzo"]);

/* ---- Fruit & vegetables ---- */
ing("garlic", "Garlic", "produce", "head", false, 0, {},
  ["bawang", "garlic", "garlic cloves", "minced garlic"]);
ing("onion", "Onion", "produce", "pc", false, 0, {},
  ["sibuyas", "onion", "onions", "red onion", "white onion", "shallots", "lasona"]);
ing("ginger", "Ginger", "produce", "pc", false, 0, {},
  ["luya", "ginger"]);
ing("spring-onion", "Spring onions", "produce", "bunch", false, 2, {},
  ["dahon ng sibuyas", "spring onion", "spring onions", "scallions", "green onion", "green onions", "onion leeks", "leeks"]);
ing("chili", "Chilies", "produce", "pc", false, 1, {},
  ["sili", "siling labuyo", "siling haba", "siling pang-sigang", "chili", "chilli", "chilies", "finger chili", "bird's eye chili", "green chili", "red chili"]);
ing("calamansi", "Calamansi or lemon", "produce", "pc", false, 1, {},
  ["calamansi", "kalamansi", "lemon", "lemons", "lime", "limes", "dayap"]);
ing("tomato", "Tomatoes", "produce", "pc", true, 1, { kg: 10 },
  ["kamatis", "tomato", "tomatoes", "cherry tomatoes"]);
ing("potato", "Potatoes", "produce", "pc", true, 0, { kg: 6 },
  ["patatas", "potato", "potatoes"]);
ing("carrot", "Carrots", "produce", "pc", true, 1, { kg: 7 },
  ["karot", "carrot", "carrots"]);
ing("cabbage", "Cabbage", "produce", "head", true, 1, { kg: 1, pc: 1 },
  ["repolyo", "cabbage", "baguio cabbage", "napa cabbage", "wombok", "chinese cabbage"]);
ing("pechay", "Pechay or bok choy", "produce", "bunch", true, 2, { pc: 1 },
  ["pechay", "petsay", "bok choy", "bokchoy", "pak choy", "pechay baguio", "chinese pechay", "mustasa", "spinach"]);
ing("kangkong", "Kangkong", "produce", "bunch", true, 2, { pc: 1 },
  ["kangkong", "water spinach", "swamp cabbage"]);
ing("malunggay", "Malunggay leaves", "produce", "bunch", false, 2, {},
  ["malunggay", "moringa", "dahon ng sili", "chili leaves"]);
ing("eggplant", "Eggplant (talong)", "produce", "pc", true, 1, { kg: 6 },
  ["talong", "eggplant", "eggplants", "aubergine"]);
ing("sitaw", "String beans (sitaw)", "produce", "bunch", true, 1, { pc: 1 },
  ["sitaw", "string beans", "long beans", "green beans", "baguio beans", "abitsuelas", "habichuelas"]);
ing("squash", "Squash (kalabasa)", "produce", "g", true, 0, { kg: 1000, pc: 1000, slice: 250 },
  ["kalabasa", "squash", "pumpkin", "butternut"]);
ing("sayote", "Chayote (sayote)", "produce", "pc", true, 1, { kg: 3 },
  ["sayote", "chayote", "upo", "bottle gourd", "patola", "sponge gourd", "luffa"]);
ing("ampalaya", "Bitter melon (ampalaya)", "produce", "pc", true, 1, { kg: 4 },
  ["ampalaya", "bitter gourd", "bitter melon", "amargoso"]);
ing("okra", "Okra", "produce", "pc", true, 1, { bunch: 10, kg: 40 },
  ["okra", "lady fingers", "lady's finger"]);
ing("bell-pepper", "Bell pepper", "produce", "pc", true, 1, {},
  ["bell pepper", "bell peppers", "capsicum", "red bell pepper", "green bell pepper"]);
ing("bean-sprouts", "Bean sprouts (togue)", "produce", "g", true, 2, { pack: 250, kg: 1000 },
  ["togue", "toge", "bean sprouts", "mung bean sprouts"]);
ing("radish", "Radish (labanos)", "produce", "pc", true, 1, {},
  ["labanos", "radish", "daikon", "white radish"]);
ing("green-papaya", "Green papaya", "produce", "pc", true, 1, {},
  ["green papaya", "hilaw na papaya", "papaya", "unripe papaya"]);
ing("saba", "Saba bananas", "produce", "pc", true, 1, { bunch: 12 },
  ["saba", "saging na saba", "plantain", "plantains", "cooking banana"]);
ing("banana", "Bananas", "produce", "pc", true, 1, { bunch: 8 },
  ["banana", "bananas", "lakatan", "latundan", "saging"]);
ing("gabi", "Taro (gabi)", "produce", "pc", true, 0, {},
  ["gabi", "taro"]);
ing("broccoli", "Broccoli", "produce", "head", true, 2, { pc: 1, kg: 3 },
  ["broccoli", "brocolli", "cauliflower"]);
ing("cucumber", "Cucumber", "produce", "pc", true, 1, {},
  ["pipino", "cucumber", "cucumbers"]);
ing("sweet-potato", "Sweet potato (kamote)", "produce", "pc", true, 0, { kg: 5 },
  ["kamote", "sweet potato", "sweet potatoes", "camote"]);

/* ---- Eggs & dairy ---- */
ing("eggs", "Eggs", "dairy", "pc", true, 0, { dozen: 12, tray: 30 },
  ["itlog", "egg", "eggs", "duck eggs", "itlog na pula", "salted egg", "salted eggs", "quail eggs", "pugo"]);
ing("milk", "Fresh milk", "dairy", "ml", true, 1, { l: 1000, cup: 240, pack: 1000 },
  ["milk", "fresh milk", "gatas", "full cream milk", "powdered milk", "bear brand", "nido", "alaska powdered"]);
ing("cheese", "Cheese", "dairy", "g", false, 0, {},
  ["cheese", "eden", "eden cheese", "cheddar", "quickmelt", "quick melt", "parmesan", "keso", "mozzarella", "cheese slices"]);
ing("butter", "Butter or margarine", "dairy", "g", false, 0, {},
  ["butter", "margarine", "star margarine", "dari creme", "buttercup", "anchor butter"]);

/* ---- Rice, noodles & bread ---- */
ing("rice", "Rice", "grains", "g", true, 0, { kg: 1000, cup: 180, sack: 25000, ganta: 2250 },
  ["bigas", "rice", "jasmine rice", "white rice", "brown rice", "dinorado", "sinandomeng", "leftover rice", "kanin", "malagkit", "glutinous rice"]);
ing("instant-noodles", "Instant noodle soup", "grains", "pack", true, 0, { pc: 1 },
  ["instant noodles", "lucky me", "lucky me beef", "lucky me chicken", "nissin", "nissin ramen", "ramen", "mami", "batchoy", "cup noodles", "payless", "quickchow", "noodle soup", "maggi noodles", "indomie soup", "jjamppong"]);
ing("instant-canton", "Instant pancit canton", "grains", "pack", true, 0, { pc: 1 },
  ["pancit canton", "instant pancit canton", "lucky me pancit canton", "pancit canton instant", "instant canton", "indomie", "indomie mi goreng", "mi goreng", "payless xtra big", "quickchow canton"]);
ing("canton-noodles", "Canton noodles (dry)", "grains", "pack", true, 0, { g: 1 / 250, kg: 4 },
  ["canton noodles", "pancit canton noodles", "dry canton", "canton", "flour sticks", "egg noodles", "miki", "lomi noodles", "chow mein"]);
ing("bihon", "Bihon (rice noodles)", "grains", "pack", true, 0, { g: 1 / 250, kg: 4 },
  ["bihon", "rice noodles", "rice sticks", "vermicelli", "rice vermicelli", "pancit bihon"]);
ing("sotanghon", "Sotanghon (glass noodles)", "grains", "pack", true, 0, { g: 1 / 100 },
  ["sotanghon", "glass noodles", "cellophane noodles", "mung bean noodles", "vermicelli glass"]);
ing("misua", "Misua", "grains", "pack", true, 0, { g: 1 / 100 },
  ["misua", "miswa", "mee sua", "wheat vermicelli", "flour vermicelli"]);
ing("spaghetti", "Spaghetti or pasta", "grains", "g", true, 0, { kg: 1000, pack: 500 },
  ["spaghetti", "pasta", "linguine", "fettuccine", "penne", "angel hair", "spaghetti noodles", "royal spaghetti"]);
ing("macaroni", "Macaroni", "grains", "g", true, 0, { kg: 1000, pack: 400 },
  ["macaroni", "elbow macaroni", "salad macaroni", "shells", "fusilli"]);
ing("bread", "Bread or pandesal", "grains", "pc", true, 1, { loaf: 12, pack: 10, slice: 1 },
  ["bread", "tinapay", "pandesal", "pan de sal", "loaf bread", "sliced bread", "gardenia", "monay", "bread slices", "burger buns", "buns", "hotdog buns", "tasty"]);
ing("lumpia-wrapper", "Lumpia wrappers", "grains", "pc", true, 1, { pack: 25 },
  ["lumpia wrapper", "lumpia wrappers", "spring roll wrapper", "spring roll wrappers", "egg roll wrapper", "wonton wrapper"]);
ing("mung-beans", "Mung beans (monggo)", "grains", "g", true, 0, { kg: 1000, cup: 200, pack: 250 },
  ["monggo", "munggo", "mung beans", "mongo", "mung bean"]);
ing("oats", "Rolled oats", "grains", "g", true, 0, { kg: 1000, cup: 90, pack: 400 },
  ["oats", "oatmeal", "rolled oats", "quick oats", "quaker"]);
ing("flour", "Flour", "grains", "g", false, 0, {},
  ["flour", "harina", "all purpose flour", "all-purpose flour", "cake flour", "pancake mix", "maya pancake"]);
ing("cornstarch", "Cornstarch", "grains", "g", false, 0, {},
  ["cornstarch", "corn starch", "gawgaw", "cassava starch", "tapioca starch"]);
ing("breadcrumbs", "Breadcrumbs", "grains", "g", false, 0, {},
  ["breadcrumbs", "bread crumbs", "panko", "crackers"]);
ing("cocoa", "Tablea or cocoa", "grains", "g", false, 0, {},
  ["tablea", "cocoa", "cocoa powder", "chocolate", "milo"]);

/* ---- Sauces & seasonings ---- */
ing("salt", "Salt", "sauces", "g", false, 0, {}, ["asin", "salt", "rock salt", "iodized salt"]);
ing("pepper", "Pepper", "sauces", "g", false, 0, {}, ["paminta", "pepper", "black pepper", "peppercorns", "pamintang buo", "ground pepper"]);
ing("oil", "Cooking oil", "sauces", "ml", false, 0, {}, ["mantika", "oil", "cooking oil", "vegetable oil", "canola oil", "palm oil", "coconut oil", "olive oil", "minola", "baguio oil"]);
ing("sugar", "Sugar", "sauces", "g", false, 0, {}, ["asukal", "sugar", "brown sugar", "white sugar", "muscovado", "washed sugar", "honey"]);
ing("water", "Water", "sauces", "ml", false, 0, {}, ["water", "tubig"]);
ing("soy-sauce", "Soy sauce", "sauces", "ml", false, 0, {}, ["toyo", "soy sauce", "silver swan", "datu puti soy", "kikkoman", "marca pina"]);
ing("vinegar", "Vinegar", "sauces", "ml", false, 0, {}, ["suka", "vinegar", "cane vinegar", "datu puti", "datu puti vinegar", "coconut vinegar", "sukang iloko", "spiced vinegar", "pinakurat"]);
ing("fish-sauce", "Fish sauce (patis)", "sauces", "ml", false, 0, {}, ["patis", "fish sauce", "rufina"]);
ing("oyster-sauce", "Oyster sauce", "sauces", "ml", false, 0, {}, ["oyster sauce", "mama sita's oyster", "lee kum kee"]);
ing("ketchup", "Banana ketchup or ketchup", "sauces", "ml", false, 0, {}, ["ketchup", "banana ketchup", "catsup", "ufc", "jufran", "tomato ketchup"]);
ing("mayo", "Mayonnaise", "sauces", "ml", false, 0, {}, ["mayo", "mayonnaise", "lady's choice", "best foods", "sandwich spread"]);
ing("bagoong", "Shrimp paste (bagoong)", "sauces", "g", false, 0, {}, ["bagoong", "bagoong alamang", "shrimp paste", "guinamos", "alamang"]);
ing("bouillon", "Broth cubes", "sauces", "pc", false, 0, {}, ["chicken cube", "beef cube", "pork cube", "bouillon", "broth cube", "knorr cube", "maggi magic sarap", "magic sarap", "ajinomoto", "seasoning granules", "chicken powder", "broth", "stock"]);
ing("sinigang-mix", "Sinigang mix or sampalok", "sauces", "pack", false, 0, {}, ["sinigang mix", "sinigang sa sampalok", "knorr sinigang", "sampalok", "tamarind", "tamarind soup base", "sinigang"]);
ing("curry-powder", "Curry powder", "sauces", "g", false, 0, {}, ["curry", "curry powder", "curry mix", "golden curry", "curry cubes"]);
ing("bay-leaf", "Bay leaves (laurel)", "sauces", "pc", false, 0, {}, ["laurel", "bay leaf", "bay leaves"]);
ing("peanut-butter", "Peanut butter", "sauces", "g", false, 0, {}, ["peanut butter", "lily's", "skippy", "reese's peanut butter", "peanuts", "mani"]);
ing("sesame-oil", "Sesame oil", "sauces", "ml", false, 0, {}, ["sesame oil", "sesame"]);
ing("chili-flakes", "Chili flakes or chili garlic", "sauces", "g", false, 0, {}, ["chili flakes", "chilli flakes", "chili powder", "chili garlic", "chili garlic sauce", "chili oil", "paprika", "gochugaru", "gochujang", "sriracha", "hot sauce", "tabasco"]);
ing("baking-powder", "Baking powder", "sauces", "g", false, 0, {}, ["baking powder", "baking soda"]);
