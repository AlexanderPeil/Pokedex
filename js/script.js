let allPokemon = [];
let currentPokemon;
let pokemonName;
let pokemonImage;
let pokemonType;
let pokemonId;
let pokemonColor;
let pokemonAmount = 49;
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
        pokemonId = pokemon['id'];
        pokemonTypeColor(pokemonColor);

        container.innerHTML += renderShowAllPokemon(i);
    }
}


function pokemonInfo(i) {
    document.getElementById('pokemon-info-container').classList.remove('d-none');
    let pokemonInfoContent = document.getElementById('pokemon-info-head');
    document.body.classList.add('hidden');
    document.getElementById('bg-dark').classList.remove('d-none');


    pokemonName = allPokemon[i]['name'];
    pokemonType = allPokemon[i]['types'][0]['type']['name'];
    pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`;
    pokemonId = allPokemon[i]['id'];
   
    pokemonTypeColor();

    pokemonInfoContent.innerHTML = renderPokemonInfo(i);
    aboutPokemon(i);
    keyControl(i);
}


function aboutPokemon(i) {
    let aboutPokemon = document.getElementById('about-pokemon');
    aboutPokemon.classList.remove('d-none');

    let height = allPokemon[i]['height'] / 10;
    let weight = allPokemon[i]['weight'] / 10;
    let baseXp = allPokemon[i]['base_experience'];

    let abilityAmount  = allPokemon[i]['abilities'].length;
    for (let j = 0; j < abilityAmount; j++) {
        const ability = allPokemon[i]['abilities'][j]['ability']['name'];
        aboutPokemon.innerHTML = renderAboutPokemon(i, height, weight, baseXp, ability);
    }

}


function pokemonStats(i) {
    let pokemonStats = document.getElementById('pokemon-stats');
    pokemonStats.classList.remove('d-none');

    let hp = allPokemon[i]['stats'][0]['base_stat'];
    let attack = allPokemon[i]['stats'][1]['base_stat'];
    let defense = allPokemon[i]['stats'][2]['base_stat'];
    let specialAttack = allPokemon[i]['stats'][3]['base_stat'];
    let specialDefense = allPokemon[i]['stats'][4]['base_stat'];
    let speed = allPokemon[i]['stats'][5]['base_stat'];

    pokemonStats.innerHTML = renderPokemonStats(i, hp, attack, defense, specialAttack, specialDefense, speed);
} 


function pokemonMoves(i) {
    let pokemonMoves = document.getElementById('pokemon-moves');
    pokemonMoves.classList.remove('d-none');

    let movesAmount = allPokemon[i]['moves'].length;

    for (let j = 0; j < movesAmount; j++) {
        const move = allPokemon[i]['moves'][j]['move']['name'];
        pokemonMoves.innerHTML += renderPokemonMoves(i, move);
    }
}



function getToAboutPokemon(i) {
    document.getElementById('pokemon-stats').classList.add('d-none');
    document.getElementById('pokemon-moves').classList.add('d-none');

    aboutPokemon(i);    
}


function getToPokemonStats(i) {
    document.getElementById('about-pokemon').classList.add('d-none');
    document.getElementById('pokemon-moves').classList.add('d-none');

    pokemonStats(i);
}


function getToPokemonMoves(i) {
    document.getElementById('pokemon-stats').classList.add('d-none');
    document.getElementById('about-pokemon').classList.add('d-none');

    pokemonMoves(i);
}

// Help function for Closing the pokemon info container. I use this one in two other functions down here.
function closeFunction() {
    document.getElementById('pokemon-info-container').classList.add('d-none');
    document.getElementById('about-pokemon').classList.add('d-none');
    document.getElementById('pokemon-stats').classList.add('d-none');
    document.getElementById('pokemon-moves').classList.add('d-none');
    document.body.classList.remove('hidden');
    document.getElementById('bg-dark').classList.add('d-none');
}


function closePokemonInfo() {
    closeFunction();
}


function dontClose(event) {
    event.stopPropagation();
}


function resetDisplay() {
    document.getElementById('pokemon-stats').classList.add('d-none');
    document.getElementById('pokemon-moves').classList.add('d-none');
}


function keyControl(i) {
    document.onkeydown = (e) => {
        if (e.key === 'Escape') {
            closeFunction();
        }
        if (e.key === 'ArrowLeft') pokemonInfo(i - 1), resetDisplay();
        if (e.key === 'ArrowRight') pokemonInfo(i + 1), resetDisplay()
    }
}


function search() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    let content = document.getElementById('main-container');
    content.innerHTML = '';

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
    
    if (search == '') {
        showAllPokemon();
    }
}