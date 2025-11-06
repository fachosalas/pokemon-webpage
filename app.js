// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const kantoPokedexNames = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];


const kantoPokedexByType = {
    "Grass": ["Bulbasaur", "Ivysaur", "Venusaur", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Bellsprout", "Weepinbell", "Victreebel", "Exeggcute", "Exeggutor", "Tangela"],

    "Fire": ["Charmander", "Charmeleon", "Charizard", "Vulpix", "Ninetales", "Growlithe", "Arcanine", "Ponyta", "Rapidash", "Magmar", "Flareon", "Moltres"],

    "Water": ["Squirtle", "Wartortle", "Blastoise", "Psyduck", "Golduck", "Poliwag", "Poliwhirl", "Poliwrath", "Tentacool", "Tentacruel", "Slowpoke", "Slowbro", "Seel", "Dewgong", "Shellder", "Cloyster", "Krabby", "Kingler", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Magikarp", "Gyarados", "Lapras", "Vaporeon", "Omanyte", "Omastar", "Kabuto", "Kabutops"],

    "Electric": ["Pikachu", "Raichu", "Magnemite", "Magneton", "Voltorb", "Electrode", "Electabuzz", "Jolteon", "Zapdos"],

    "Rock": ["Geodude", "Graveler", "Golem", "Onix", "Rhyhorn", "Rhydon", "Aerodactyl"],

    "Ice": ["Jynx", "Articuno"],

    "Fighting": ["Mankey", "Primeape", "Machop", "Machoke", "Machamp", "Hitmonlee", "Hitmonchan"],

    "Ghost": ["Gastly", "Haunter", "Gengar"],

    "Bug": ["Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Venonat", "Venomoth", "Scyther", "Pinsir"],

    "Ground": ["Sandshrew", "Sandslash", "Diglett", "Dugtrio", "Cubone", "Marowak"],

    "Psychic": ["Abra", "Kadabra", "Alakazam", "Drowzee", "Hypno", "Mewtwo", "Mew"],

    "Poison": ["Ekans", "Arbok", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Grimer", "Muk", "Koffing", "Weezing", "Zubat", "Golbat",],

    "Normal": ["Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Meowth", "Persian", "Farfetch'd", "Doduo", "Dodrio", "Lickitung", "Chansey", "Kangaskhan", "Tauros", "Ditto", "Eevee", "Porygon", "Snorlax"],

    "Fairy": ["Clefairy", "Clefable", "Jigglypuff", "Wigglytuff", "Mr. Mime"],

    "Dragon": ["Dratini", "Dragonair", "Dragonite"],

    "Fairy": ["Clefairy", "Clefable", "Jigglypuff", "Wigglytuff", "Mr. Mime"]
};
const pokedex = document.getElementById("pokedex");

//kantoPokedexNames.length
for (let i = 1; i <= kantoPokedexNames.length; i++) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.classList.add('mx-3');
    cardDiv.classList.add('border-dark');
    cardDiv.classList.add('my-2');

    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;
    newImg.classList.add('card-img-top');
    newImg.classList.add('border-bottom');

    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('card-body');

    const pokemonName = document.createElement('h5');
    pokemonName.classList.add('card-title');
    pokemonName.innerText = kantoPokedexNames[i - 1];
    bodyDiv.appendChild(pokemonName);

    const pokemonNumber = document.createElement('p');
    pokemonNumber.classList.add('pokemonNumber');
    pokemonNumber.innerText = `# ${i}`;
    bodyDiv.appendChild(pokemonNumber);

    const pokemonType =pokemonTypeCheck(pokemonName.innerText);

    const pokemonTypeDisplay = document.createElement('div');
    pokemonTypeDisplay.classList.add('pokemonType');
    pokemonTypeDisplay.classList.add(`${pokemonType.toLowerCase()}`);
    pokemonTypeDisplay.innerText = `${pokemonType}`;
    bodyDiv.appendChild(pokemonTypeDisplay);

    cardDiv.append(newImg);
    cardDiv.append(bodyDiv);
    pokedex.append(cardDiv);
}

function pokemonTypeCheck(name) {
    for (const pokemonType in kantoPokedexByType) {
        for (let i = 0; i < kantoPokedexByType[pokemonType].length; i++) {
            if(kantoPokedexByType[pokemonType][i]===name){
                return pokemonType
            }
        }
    }
}
// document.getElementById('normal').onclick = function(){
//     filterByType('normal');
// }
// function filterByType(pokemonType){
//     console.log(pokemonType.innerText)
// }

