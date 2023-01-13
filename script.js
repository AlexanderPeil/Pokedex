let allPokemon = [];
let currentPokemon;
let pokemonName;
let pokemonImage;
let pokemonType;
let pokemonColor;
let limit = 50;


async function loadPokemon() {
    for (let i = 0; i < limit; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemon.push[currentPokemon];
    }
    pokemonInfo();
}


function pokemonInfo() {
    let container = document.getElementById('main-container');
    container.innerHTML = '';
    for (let i = 0; i < allPokemon.length; i++) {
        const pokemon = allPokemon[i];

        pokemonName = pokemon['name'];
        pokemonImage = pokemon[`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i++}.svg`];
        pokemonType = pokemon['types'][0]['type']['name'];
        container.innerHTML += renderPokemonInfo(pokemonName, pokemonImage, pokemonType);
    }
}

function renderPokemonInfo(pokemonName, pokemonImage, pokemonType) {
    return /*html*/ `
    <div id="pokedex-card">
         <div>
             <h2>${pokemonName}</h2>
         </div>
         <div>
             <img src="${pokemonImage}">
         </div>
         <div>
            <h2>${pokemonType}</h2>
         </div>
    </div>
    `;
}