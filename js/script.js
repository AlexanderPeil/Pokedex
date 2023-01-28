let allPokemon = [];
let currentPokemon;
let pokemonName;
let pokemonImage;
let pokemonType;
let pokemonTypeTwo;
let pokemonId;
let pokemonColor;
let loadMorePokemon = false;
let pokemonAmount = 25;
let startPokemon = 1;

// I have an addEventListener at the bottom of this code. When you scroll the Pokedex page at the bottom then 48 Pokemons more will be loaded.
async function loadPokemon() {
    for (let i = startPokemon; i < pokemonAmount; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemon.push(currentPokemon);
    }
    showAllPokemon();
    startPokemon += 24;
    pokemonAmount += 24;
}

// I use an if else condition for the Pokemon color. It's in a separate JS file called pokemon-color.js
function showAllPokemon() {
    let container = document.getElementById('main-container');
    container.innerHTML = '';
    for (let i = 0; i < allPokemon.length; i++) {
        const pokemon = allPokemon[i];

        infosToShowAllPokemons(i, pokemon, container);
    }
}

// I outsourced this function to have a better overview.
function infosToShowAllPokemons(i, pokemon, container) {
    pokemonName = pokemon['name'];
    pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`;
    pokemonType = pokemon['types'][0]['type']['name'];
    pokemonTypeTwo = '';
    pokemonId = pokemon['id'];
    pokemonTypeColor(pokemonColor);

    container.innerHTML += renderShowAllPokemon(i);
    // checkPokemonTypeTwo(i);
}


// function checkPokemonTypeTwo(i) {
//     let types = allPokemon[i]['types'];
//     let typeTwo = document.getElementById('pokemon-type');
//     if (types.length > 1) {
//         pokemonTypeTwo = allPokemon[i]['types'][1]['type']['name'];
//         typeTwo.innerHTML += renderAllPokemonTypeTwo(i, pokemonTypeTwo);
//     }
// }

// This addEventListener loads the next 48 Pokemons if you scroll to the buttom of the Pokedex page.
window.addEventListener('scroll', function () {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        if (!loadMorePokemon) {
            loadPokemon();
        }
    }
})

// This search function is for the names of the Pokemons.
function search() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    let content = document.getElementById('main-container');
    content.innerHTML = '';

    getSearchResults(search, content);
    clearSearchInput();
}

// I outsourced this function to have a better overview.
function getSearchResults(search, content) {
    for (let i = 0; i < allPokemon.length; i++) {
        pokemonName = allPokemon[i]['name'];
        pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`;
        pokemonId = allPokemon[i]['id'];
        pokemonType = allPokemon[i]['types'][0]['type']['name'];
        pokemonColor = pokemonTypeColor();

        if (pokemonName.toLowerCase().includes(search)) {
            content.innerHTML += renderShowAllPokemon(i, pokemonName, pokemonImage, pokemonId, pokemonType, pokemonColor);
        }
    }
}

// If you reset the search input field the pokedex page will load all Pokemons.
function clearSearchInput() {
    if (search == '') {
        showAllPokemon();
    }
}