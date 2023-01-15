let allPokemon = [];
let currentPokemon;
let pokemonName;
let pokemonImage;
let pokemonType;
let pokemonColor;
let pokemonAmount = 50;
let startPokemon = 1;


async function loadPokemon() {
    for (let i = startPokemon; i < pokemonAmount; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemon.push(currentPokemon);
    }
    showAllPokemon();
}


function showAllPokemon() {
    let container = document.getElementById('main-container');
    container.innerHTML = '';
    for (let i = 0; i < allPokemon.length; i++) {
        const pokemon = allPokemon[i];

        pokemonName = pokemon['name'];
        pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`;
        pokemonType = pokemon['types'][0]['type']['name'];
        pokemonTypeColor();

        container.innerHTML += renderShowAllPokemon(i);
    }
}

function renderShowAllPokemon(i) {
    return /*html*/ `
    <div id="pokedex-card" style="background-color: ${pokemonColor};" onclick="pokemonInfo(${i})">
         <div>
             <h2>${pokemonName}</h2>
         </div>
         <div>
             <img id="pokemon-img" class="pokemon-img" src="${pokemonImage}">
         </div>
         <div>
            <h2>${pokemonType}</h2>
         </div>
    </div>
    `;
}


function pokemonInfo(i) {
    let pokemonInfoContent = document.getElementById('pokemon-info-container');
    pokemonInfoContent.classList.remove('d-none');
    document.body.classList.add('hidden');
    let name = allPokemon[i]['name'];
    let type = allPokemon[i]['types'][0]['type']['name'];
    let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`;
    pokemonTypeColor();
    pokemonInfoContent.innerHTML = '';
    pokemonInfoContent.innerHTML += renderPokemonInfo(i, name, type, img);
}


function renderPokemonInfo(i, name, type, img) {
    return /*html*/ `
    <div id="info-container" style="background-color: ${pokemonColor};">
    <div class="close-icon">
        <img src="img/close-icon.png" onclick="closePokemonInfo()">
    </div>
    <div class="pokemon-name-type">
        <h2>${name}</h2>    
        <h3>${type}</h3>
    </div>
        <img class="pokemon-img" src="${img}">
    </div>
    </div>
    `;
}


function closePokemonInfo() {
    document.getElementById('pokemon-info-container').classList.add('d-none');
    document.body.classList.remove('hidden');
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