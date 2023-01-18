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
         <div class="pokemon-type mt-3">
            <span class="pokemon-font-size fst-italic">${pokemonType}</span>
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
              <div class="pokemon-type fst-italic"> 
                <span class="pokemon-font-size">${pokemonType}</span>
             </div>
          </div>
           <div class="mt-5">
              <img class="pokemon-img" src="${pokemonImage}">
         </div>
      </div>
    </div>
    `;
}


function renderAboutPokemon(i, height, weight, baseXp, abilitiyFirst, abilitysSecond) {
    return /*html*/ `
    <ul>
        <li onclick="getToAboutPokemon()">About</li>
        <li onclick="getToPokemonStats()">Stats</li>
        <li onclick="getToPokemonMoves()">Moves</li>
    </ul>
    <div class="d-flex justify-content-between mb-1">
        <span>Height</span>
        <span>${height} m</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span>Weight</span>
        <span>${weight} kg</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span>Base XP</span>
        <span>${baseXp}&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span>Abilities</span>
        <span>${abilitiyFirst}, ${abilitysSecond}</span>
    </div>
    `;
}


function renderPokemonStats(i, hp, attack, defense, specialAttack, specialDefense, speed) {
    return /*html*/ `
    <ul>
        <li onclick="aboutPokemon()">About</li>
        <li onclick="pokemonStats()">Stats</li>
        <li onclick="pokemonMoves()">Moves</li>
    </ul>
    <div class="d-flex justify-content-between mb-1">
        <span>HP</span>
        <span>${hp}</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span>Attack</span>
        <span>${attack}</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span>Defense</span>
        <span>${defense}</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span>Special-Attack</span>
        <span>${specialAttack}</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span>Special-Defense</span>
        <span>${specialDefense}</span>
    </div>
    <div class="d-flex justify-content-between mb-1">
        <span>Speed</span>
        <span>${speed}</span>
    </div>
    `;
}