function search() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    let content = document.getElementById('main-container');
    content.innerHTML = '';

    getSearchResults(search, content);
    clearSearchInput();
}


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


function clearSearchInput() {
    if (search == '') {
        showAllPokemon();
    }
}