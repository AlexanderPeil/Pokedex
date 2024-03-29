/**
 *  Displays information about a specific Pokémon when its corresponding card is clicked.
 * @param {number} i - The index of the Pokémon in the `allPokemon` array.
 */
function pokemonInfo(i) {
    document.getElementById('pokemon-info-container').classList.remove('d-none');
    let pokemonInfoContent = document.getElementById('pokemon-info-head');
    document.getElementById('bg-dark').classList.remove('d-none');

    fetchPokemonInfos(i);
    pokemonTypeColor();

    pokemonInfoContent.innerHTML = renderPokemonInfo(i);

    callSomeFunctions(i);
}


/**
 * This functions will be called in the function pokemonInfo() at the end.
 * @param {*} i - The index of the Pokémon in the `allPokemon` array. 
 */
function callSomeFunctions(i) {
    checkPokemonInfoTypeTwo(i);
    hidePrevButton(i);
    aboutPokemon(i);
    keyControl(i);
}


/**
 * Checks if the selected Pokemon has a second type, and if so, renders it in the Pokemon info container.
 * @param {*} i - The index of the Pokémon in the `allPokemon` array.  
 */
function checkPokemonInfoTypeTwo(i) {
    let types = allPokemon[i]['types'];
    let typeTwo = document.getElementById('info-pokemon-type');
    if (types.length > 1) {
        pokemonTypeTwo = allPokemon[i]['types'][1]['type']['name'];
        typeTwo.innerHTML += renderAllPokemonTypeTwo(i, pokemonTypeTwo);
    }
}


/**
 * Fetches pokemon infos from the API. This function is called in the script.js in the functuon
 * @param {*} i - The index of the Pokémon in the `allPokemon` array.   
 */
function fetchPokemonInfos(i) {
    pokemonName = allPokemon[i]['name'];
    pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`;
    pokemonId = allPokemon[i]['id'];
    pokemonType = allPokemon[i]['types'][0]['type']['name'];
    pokemonTypeTwo = '';
}

// This is the first info window (called "About") about the Pokemons. It contains the height, weight, base-experience and the abilities of the Pokemons.
function aboutPokemon(i) {
    let aboutPokemon = document.getElementById('about-pokemon');
    aboutPokemon.classList.remove('d-none');

    let height = allPokemon[i]['height'] / 10;
    let weight = allPokemon[i]['weight'] / 10;
    let baseXp = allPokemon[i]['base_experience'];
    let abilities = pokemonAbilities(i);

    aboutPokemon.innerHTML = renderAboutPokemon(i, height, weight, baseXp, abilities);
}

// For the last Pokemon info (called "Abilities") in the window "About" I use this function with a for loop to show the abilities of the Pokemons. 
function pokemonAbilities(i) {
    let abilityAmount = allPokemon[i]['abilities'].length;
    let abilities = '';

    for (let j = 0; j < abilityAmount; j++) {
        abilities += allPokemon[i]['abilities'][j]['ability']['name'];
        if (j < abilityAmount - 1) {
            abilities += ',';
        }
    }
    return abilities;
}

// This is the second info window (called "Stats") about the Pokemons. It contains HP, attack, defense, special-attack, special-defense and the speed of the Pokemon.
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

// And finally this is the third info window (called "Moves") about the Pokemons.
function pokemonMoves(i) {
    let pokemonMoves = document.getElementById('pokemon-moves');
    pokemonMoves.classList.remove('d-none');

    let movesAmount = allPokemon[i]['moves'].length;

    pokemonMoves.innerHTML = showButtonsInnerHtml(i);

    for (let j = 0; j < movesAmount; j++) {
        const moves = allPokemon[i]['moves'][j]['move']['name'];
        pokemonMoves.innerHTML += renderPokemonMoves(moves);
    }
}

// This is the bar with the buttons "About", "Stats" and "Moves" in the last info window "Moves"
function showButtonsInnerHtml(i) {
    return `
    <ul>
         <li onclick="getToAboutPokemon(${i})">About</li>
        <li onclick="getToPokemonStats(${i})">Stats</li>
        <li onclick="getToPokemonMoves(${i})">Moves</li>
    </ul>
`;
}


// Click on the button "About" to get to this info window of the Pokemon.
function getToAboutPokemon(i) {
    document.getElementById('pokemon-stats').classList.add('d-none');
    document.getElementById('pokemon-moves').classList.add('d-none');

    aboutPokemon(i);
}

// Click on the button "Stats" to get to this info window of the Pokemon.
function getToPokemonStats(i) {
    document.getElementById('about-pokemon').classList.add('d-none');
    document.getElementById('pokemon-moves').classList.add('d-none');

    pokemonStats(i);
}

// Click on the button "Moves" to get to this info window of the Pokemon.
function getToPokemonMoves(i) {
    document.getElementById('pokemon-stats').classList.add('d-none');
    document.getElementById('about-pokemon').classList.add('d-none');

    pokemonMoves(i);
}

// Help function for Closing the Pokemon info container. I use this one in two other functions down here.
function closeFunction() {
    document.getElementById('pokemon-info-container').classList.add('d-none');
    document.getElementById('about-pokemon').classList.add('d-none');
    document.getElementById('pokemon-stats').classList.add('d-none');
    document.getElementById('pokemon-moves').classList.add('d-none');
    document.body.classList.remove('hidden');
    document.getElementById('bg-dark').classList.add('d-none');
}

// Close the info card about the Pokemon.
function closePokemonInfo() {
    closeFunction();
}

// You can also click outside the Pokemon card to close it. But I added this function for the info card itself. So I prevend that the info card doesn't close if you click inside it.
function dontClose(event) {
    event.stopPropagation();
}

// This function delets the previous infos about the Pokemon if you click bewteen the Pokemon cards. 
function resetDisplay() {
    document.getElementById('pokemon-stats').classList.add('d-none');
    document.getElementById('pokemon-moves').classList.add('d-none');
}

// You can switch between the Pokemon cards with the keyboard buttons <- and -> . Also you can close the Pokemon card with the Esc button.
function keyControl(i) {
    document.onkeydown = (e) => {
        if (e.key === 'Escape') {
            closeFunction();
        }
        if (e.key === 'ArrowLeft') pokemonInfo(i - 1), resetDisplay();
        if (e.key === 'ArrowRight') pokemonInfo(i + 1), resetDisplay();
    }
    if (i == allPokemon.length - 1) {
        loadPokemon();
        pokemonInfo(i + 1);
        resetDisplay();
    }
}

// This function hides the previous button of the first Pokemon.
function hidePrevButton(i) {
    let prevPokemon = document.getElementById('prev');
    if (i == 0) {
        prevPokemon.classList.add('d-none');
    }
}

// Click on the previous button in the Pokemon card to switch to the previous Pokemon.
function prevPokemon(i) {
    pokemonInfo(i - 1);
    resetDisplay();
}

// Click on the next button in the Pokemon card to switch to the next Pokemon.
function nextPokemon(i) {
    if (i == allPokemon.length - 1) {
        loadPokemon();
        pokemonInfo(i + 1);
        resetDisplay();
    } else {
        pokemonInfo(i + 1);
        resetDisplay();
    }
}