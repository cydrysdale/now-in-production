/* Pokémon-related words for the Bananagrams assistant: types, regions,
   towns & cities, trainers, villain teams, moves, and items/terms.
   Each entry: { name, cat, gen } — gen is the generation of debut. */
const POKEMON_EXTRAS = [];
(function () {
  const add = (cat, gen, names) => {
    for (const n of names) {
      const it = { name: n, cat, gen };
      if (cat === "Type") it.types = [n];
      POKEMON_EXTRAS.push(it);
    }
  };

  /* --- Types --- */
  add("Type", 1, ["Normal", "Fire", "Water", "Electric", "Grass", "Ice",
    "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock",
    "Ghost", "Dragon"]);
  add("Type", 2, ["Dark", "Steel"]);
  add("Type", 6, ["Fairy"]);

  /* --- Regions --- */
  add("Region", 1, ["Kanto"]);
  add("Region", 2, ["Johto"]);
  add("Region", 3, ["Hoenn", "Orre"]);
  add("Region", 4, ["Sinnoh"]);
  add("Region", 5, ["Unova"]);
  add("Region", 6, ["Kalos"]);
  add("Region", 7, ["Alola"]);
  add("Region", 8, ["Galar", "Hisui"]);
  add("Region", 9, ["Paldea"]);

  /* --- Towns & cities --- */
  add("Town & City", 1, ["Pallet Town", "Viridian City", "Pewter City",
    "Cerulean City", "Vermilion City", "Lavender Town", "Celadon City",
    "Fuchsia City", "Saffron City", "Cinnabar Island", "Indigo Plateau"]);
  add("Town & City", 2, ["New Bark Town", "Cherrygrove City", "Violet City",
    "Azalea Town", "Goldenrod City", "Ecruteak City", "Olivine City",
    "Cianwood City", "Mahogany Town", "Blackthorn City"]);
  add("Town & City", 3, ["Littleroot Town", "Oldale Town", "Petalburg City",
    "Rustboro City", "Dewford Town", "Slateport City", "Mauville City",
    "Verdanturf Town", "Fallarbor Town", "Lavaridge Town", "Fortree City",
    "Lilycove City", "Mossdeep City", "Sootopolis City", "Pacifidlog Town",
    "Ever Grande City"]);
  add("Town & City", 4, ["Twinleaf Town", "Sandgem Town", "Jubilife City",
    "Oreburgh City", "Floaroma Town", "Eterna City", "Hearthome City",
    "Solaceon Town", "Veilstone City", "Pastoria City", "Celestic Town",
    "Canalave City", "Snowpoint City", "Sunyshore City"]);
  add("Town & City", 5, ["Nuvema Town", "Accumula Town", "Striaton City",
    "Nacrene City", "Castelia City", "Nimbasa City", "Driftveil City",
    "Mistralton City", "Icirrus City", "Opelucid City", "Aspertia City",
    "Virbank City", "Humilau City", "Lacunosa Town", "Undella Town"]);
  add("Town & City", 6, ["Vaniville Town", "Aquacorde Town", "Santalune City",
    "Lumiose City", "Camphrier Town", "Ambrette Town", "Cyllage City",
    "Geosenge Town", "Shalour City", "Coumarine City", "Laverre City",
    "Dendemille Town", "Anistar City", "Couriway Town", "Snowbelle City",
    "Kiloude City"]);
  add("Town & City", 7, ["Iki Town", "Hau'oli City", "Heahea City",
    "Paniola Town", "Konikoni City", "Malie City", "Tapu Village", "Po Town",
    "Seafolk Village"]);
  add("Town & City", 8, ["Postwick", "Wedgehurst", "Motostoke", "Turffield",
    "Hulbury", "Hammerlocke", "Stow-on-Side", "Ballonlea", "Circhester",
    "Spikemuth", "Wyndon", "Jubilife Village"]);
  add("Town & City", 9, ["Cabo Poco", "Mesagoza", "Cortondo", "Artazon",
    "Levincia", "Cascarrafa", "Medali", "Montenevera", "Alfornada",
    "Zapapico", "Porto Marinada"]);

  /* --- Trainers & characters --- */
  add("Trainer", 1, ["Red", "Blue", "Leaf", "Brock", "Misty", "Lt. Surge",
    "Erika", "Koga", "Sabrina", "Blaine", "Giovanni", "Lorelei", "Bruno",
    "Agatha", "Lance", "Ash Ketchum", "Gary Oak", "Professor Oak", "Jessie",
    "James"]);
  add("Trainer", 2, ["Ethan", "Kris", "Lyra", "Silver", "Falkner", "Bugsy",
    "Whitney", "Morty", "Chuck", "Jasmine", "Pryce", "Clair", "Will",
    "Karen", "Professor Elm"]);
  add("Trainer", 3, ["Brendan", "May", "Wally", "Roxanne", "Brawly",
    "Wattson", "Flannery", "Norman", "Winona", "Tate", "Liza", "Wallace",
    "Juan", "Sidney", "Phoebe", "Glacia", "Drake", "Steven", "Maxie",
    "Archie", "Professor Birch"]);
  add("Trainer", 4, ["Lucas", "Dawn", "Barry", "Roark", "Gardenia",
    "Maylene", "Fantina", "Byron", "Candice", "Volkner", "Aaron", "Bertha",
    "Flint", "Lucian", "Cynthia", "Cyrus", "Professor Rowan"]);
  add("Trainer", 5, ["Hilbert", "Hilda", "Cheren", "Bianca", "Nate", "Rosa",
    "Hugh", "Cilan", "Chili", "Cress", "Lenora", "Burgh", "Elesa", "Clay",
    "Skyla", "Brycen", "Drayden", "Marlon", "Iris", "Alder", "N", "Ghetsis",
    "Colress", "Professor Juniper"]);
  add("Trainer", 6, ["Calem", "Serena", "Shauna", "Viola", "Grant",
    "Korrina", "Ramos", "Clemont", "Valerie", "Olympia", "Wulfric",
    "Diantha", "Lysandre", "Professor Sycamore"]);
  add("Trainer", 7, ["Elio", "Selene", "Hau", "Lillie", "Gladion", "Ilima",
    "Lana", "Kiawe", "Mallow", "Sophocles", "Acerola", "Mina", "Hala",
    "Olivia", "Nanu", "Hapu", "Guzma", "Lusamine", "Professor Kukui"]);
  add("Trainer", 8, ["Victor", "Gloria", "Hop", "Bede", "Marnie", "Milo",
    "Nessa", "Kabu", "Bea", "Allister", "Opal", "Gordie", "Melony", "Piers",
    "Raihan", "Leon", "Sonia", "Rose", "Professor Magnolia",
    "Professor Laventon"]);
  add("Trainer", 9, ["Florian", "Juliana", "Nemona", "Arven", "Penny",
    "Katy", "Brassius", "Iono", "Kofu", "Larry", "Ryme", "Tulip", "Grusha",
    "Geeta", "Clavell", "Professor Sada", "Professor Turo"]);

  /* --- Villain teams --- */
  add("Team", 1, ["Team Rocket"]);
  add("Team", 3, ["Team Aqua", "Team Magma"]);
  add("Team", 4, ["Team Galactic"]);
  add("Team", 5, ["Team Plasma"]);
  add("Team", 6, ["Team Flare"]);
  add("Team", 7, ["Team Skull"]);
  add("Team", 8, ["Team Yell"]);
  add("Team", 9, ["Team Star"]);

  /* --- Moves --- */
  add("Move", 1, ["Tackle", "Growl", "Ember", "Water Gun", "Vine Whip",
    "Thunderbolt", "Thunder Shock", "Thunder", "Quick Attack", "Hyper Beam",
    "Solar Beam", "Flamethrower", "Fire Blast", "Hydro Pump", "Surf",
    "Ice Beam", "Blizzard", "Earthquake", "Rock Slide", "Splash", "Swift",
    "Toxic", "Rest", "Bite", "Dream Eater", "Explosion", "Metronome",
    "Transform", "Fly", "Cut", "Strength", "Dig", "Flash", "Waterfall",
    "Body Slam", "Double Team", "Agility", "Recover"]);
  add("Move", 2, ["Crunch", "Shadow Ball", "Protect", "Curse"]);
  add("Move", 3, ["Dragon Claw", "Aerial Ace"]);
  add("Move", 4, ["Close Combat"]);
  add("Move", 6, ["Moonblast", "Dazzling Gleam"]);

  /* --- Items & terms --- */
  add("Item & Term", 1, ["Pokédex", "Pokémon Center", "Poké Ball",
    "Great Ball", "Ultra Ball", "Master Ball", "Safari Ball", "Potion",
    "Super Potion", "Hyper Potion", "Max Potion", "Full Restore", "Revive",
    "Rare Candy", "Escape Rope", "Repel", "Bicycle", "Old Rod", "Good Rod",
    "Super Rod", "Gym Badge", "Gym Leader", "Elite Four", "Champion",
    "Trainer", "Rival", "Starter", "Legendary", "Mythical", "Evolution"]);
  add("Item & Term", 2, ["Premier Ball", "Shiny", "Everstone",
    "Moomoo Milk"]);
  add("Item & Term", 3, ["Luxury Ball", "Oran Berry", "Sitrus Berry",
    "Pokéblock"]);
  add("Item & Term", 4, ["Quick Ball", "Poffin"]);
  add("Item & Term", 5, ["Eviolite"]);
  add("Item & Term", 6, ["Mega Evolution"]);
  add("Item & Term", 7, ["Z-Move"]);
  add("Item & Term", 8, ["Dynamax", "Gigantamax"]);
  add("Item & Term", 9, ["Terastallize"]);
})();
