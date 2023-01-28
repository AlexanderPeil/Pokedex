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


function renderPokemonMoves(moves) {
    return /*html*/ `
        <div class="pokemon-moves">${moves}</div>
    `;
}


function renderAllPokemonTypeTwo(i, pokemonTypeTwo) {
    return /*html*/ `
        <span class="pokemon-font-size ms-2 fst-italic">${pokemonTypeTwo}</span>
    `;
}
