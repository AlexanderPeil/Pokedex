/**
 * Renders the pokemons to teh HTML Content. 
 * @param {number} i - Representing the position of the Pokemon object in the allPokemon array.
 * @returns It returns an HTML string that represents a card-style display of a Pokemon's name, ID, image, and type.
 */
function renderShowAllPokemon(i) {
    return /*html*/ `
    <div id="pokedex-card" style="background-color: ${pokemonColor};" onclick="pokemonInfo(${i})">
         <div class="d-flex">
            <h2 class="pokemon-font-size me-3">#${pokemonId}</h2>
             <h2 class="pokemon-font-size">${pokemonName}</h2>
         </div>
         <div>
             <img id="pokemon-img" class="pokemon-img mt-1" src="${pokemonImage}">
         </div>
         <div id="pokemon-type" class="pokemon-type mt-3">
            <span class="pokemon-font-size me-2 fst-italic">${pokemonType}</span>
         </div>
    </div>
    `;
}


/**
 * Renders pokemon info by Clicking on the card. 
 * @param {number} i - Representing the position of the Pokemon object in the allPokemon array.
 * @returns HTML content. 
 */
function renderPokemonInfo(i) {
    return /*html*/ `
    <div id="info-container" style="background-color: ${pokemonTypeColor()};">
         <div class="close-icon">
              <img src="img/close-icon.png" onclick="closePokemonInfo()">
         </div>
          <div class="pokemon-name-type">
              <div class="d-flex align-items-center">
                 <h2 class="me-3">#${pokemonId}</h2>
                  <h2>${pokemonName}</h2>   
             </div>
              <div id="info-pokemon-type" class="pokemon-type fst-italic"> 
                    <span class="pokemon-font-size me-2">${pokemonType}</span>
             </div>
          </div>
           <div class="mt-5">
              <img id="prev" class="arrow-img" src="./img/prev.png" onclick="prevPokemon(${i})">
              <img class="pokemon-img ms-4 me-4" src="${pokemonImage}">
              <img id="next" class="arrow-img" src="./img/next.png" onclick="nextPokemon(${i})">
         </div>
      </div>
    </div>
    `;
}


/**
 * Renders informations about pokemon by Clicking on the button "about" on the pokemon card.
 * @param {number} i - Representing the position of the Pokemon object in the allPokemon array.
 * @param {object} height - Fetches the height value of the pokemon from API.
 * @param {object} weight  - Fetches the weight value of the pokemon from API.
 * @param {object} baseXp  - Fetches the baseXP value of the pokemon from API.
 * @param {object} ability  - Fetches the ability value of the pokemon from API.
 * @returns HTML content. 
 */
function renderAboutPokemon(i, height, weight, baseXp, ability) {
    return /*html*/ `
    <ul>
        <li onclick="getToAboutPokemon(${i})">About</li>
        <li onclick="getToPokemonStats(${i})">Stats</li>
        <li onclick="getToPokemonMoves(${i})">Moves</li>
    </ul>
    <div class="d-flex justify-content-between mb-1">
        <span style="font-weight: bold";>Height</span>
        <span>${height} m</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span style="font-weight: bold";>Weight</span>
        <span>${weight} kg</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span style="font-weight: bold";>Base XP</span>
        <span>${baseXp} xp;</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span style="font-weight: bold";>Abilities</span>
        <span>${ability}</span>
    </div>
    `;
}


/**
 * Renders informations about pokemon-stats by Clicking on the button "pokemon-stats" on the pokemon card.
 * @param {number} i - Representing the position of the Pokemon object in the allPokemon array. 
 * @param {object} hp - Fetches the hp value of the pokemon from API.
 * @param {object} attack - Fetches the attack value of the pokemon from API.
 * @param {object} defense  - Fetches the defense value of the pokemon from API.
 * @param {object} specialAttack  - Fetches the specialAttack value of the pokemon from API.
 * @param {object} specialDefense  - Fetches the specialDefense value of the pokemon from API.
 * @param {object} speed  - Fetches the speed value of the pokemon from API.
 * @returns HTML content.
 */
function renderPokemonStats(i, hp, attack, defense, specialAttack, specialDefense, speed) {
    return /*html*/ `
    <ul>
        <li onclick="getToAboutPokemon(${i})">About</li>
        <li onclick="getToPokemonStats(${i})">Stats</li>
        <li onclick="getToPokemonMoves(${i})">Moves</li>
    </ul>
    <div class="d-flex justify-content-between mb-1">
        <span style="font-weight: bold";>HP</span>
        <span>${hp}</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span style="font-weight: bold";>Attack</span>
        <span>${attack}</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span style="font-weight: bold";>Defense</span>
        <span>${defense}</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span style="font-weight: bold";>Special-Attack</span>
        <span>${specialAttack}</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span style="font-weight: bold";>Special-Defense</span>
        <span>${specialDefense}</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span style="font-weight: bold";>Speed</span>
        <span>${speed}</span>
    </div>
    `;
}


/**
 * Renders informations about pokemon-moves by Clicking on the button "moves" on the pokemon card.
 * @param {object} moves - Fetches the moves value of the pokemon from API.
 * @returns HTML content.
 */
function renderPokemonMoves(moves) {
    return /*html*/ `
        <div class="pokemon-moves">${moves}</div>
    `;
}


/**
 * Renders the second type of the pokemons. 
 * @param {number} i - Representing the position of the Pokemon object in the allPokemon array.
 * @param {object} pokemonTypeTwo - Fetches the information about the second type of the pokemon.
 * @returns HTML content.
 */
function renderAllPokemonTypeTwo(i, pokemonTypeTwo) {
    return /*html*/ `
        <span class="pokemon-font-size ms-2 fst-italic">${pokemonTypeTwo}</span>
    `;
}
