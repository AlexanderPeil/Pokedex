let allPokemon = [];
let currentPokemon;
let pokemonName;
let pokemonImage;
let pokemonType;
let pokemonColor;
let pokemonAmount = 100;
let startPokemon = 1;


async function loadPokemon() {
    for (let i = startPokemon; i < pokemonAmount; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemon.push(currentPokemon);
    }
    pokemonInfo();
}


function pokemonInfo() {
    let container = document.getElementById('main-container');
    container.innerHTML = '';
    for (let i = 0; i < allPokemon.length; i++) {
        const pokemon = allPokemon[i];

        pokemonName = pokemon['name'];
        pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`;
        pokemonType = pokemon['types'][0]['type']['name'];
        pokemonTypeColor();

        container.innerHTML += renderPokemonInfo();
    }
}

function renderPokemonInfo() {
    return /*html*/ `
    <div id="pokedex-card" style="background-color: ${pokemonColor};">
         <div>
             <h2>${pokemonName}</h2>
         </div>
         <div>
             <img id="pokemon-img" src="${pokemonImage}">
         </div>
         <div>
            <h2>${pokemonType}</h2>
         </div>
    </div>
    `;
}


function pokemonTypeColor() {
    if (pokemonType == 'grass') {
        return pokemonColor = '#9BCC50';
    }

    if (pokemonType == 'fire') {
        return pokemonColor = '#FD7D24';
    }

    if (pokemonType == 'water') {
        return pokemonColor = '#4592C4';
    }

    if (pokemonType == 'bug') {
        return pokemonColor = '#729F3F';
    }

    if (pokemonType == 'normal') {
        return pokemonColor = '#A4ACAF';
    }

    if (pokemonType == 'poison') {
        return pokemonColor = '#B87FC8';
    }

    if (pokemonType == 'electric') {
        return pokemonColor = 'rgb(247, 208, 44)';
    }

    if (pokemonType == 'fairy') {
        return pokemonColor = 'rgb(214, 133, 173)';
    }

    if (pokemonType == 'ground') {
        return pokemonColor = '#EED535';
    }

    if (pokemonType == 'fighting') {
        return pokemonColor = '#D56723';
    }

    if (pokemonType == 'psychic') {
        return pokemonColor = '#F366B9';
    }

    if (pokemonType == 'rock') {
        return pokemonColor = '#A38C21';
    }

    if (pokemonType == 'ghost') {
        return pokemonColor = '#7B62A3';
    }

    if (pokemonType == 'ice') {
        return pokemonColor = '#51C4E7';
    }

    if (pokemonType == 'dragon') {
        return pokemonColor = '#8CD8E3';
    }

    return pokemonColor;
}