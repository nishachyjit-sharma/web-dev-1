const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=4"

async function  GetData() {
  const res = await fetch(url);
  const data = await res.json();
  DoNothing(data);
  
}
function DoNothing(data){
  data.results.forEach(pokemon => {
    const pokemonElement = document.createElement('div')
    pokemonElement.innerHTML = pokemon.name;
    document.body.appendChild(pokemonElement);

    
  });
}

GetData();