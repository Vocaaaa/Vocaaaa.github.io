const pokemons = [
  {
    name: 'Pikachu',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    height: 40.64,
    weight: 5.98,
    type: 'Electric',
    description: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.'
  },
  {
    name: 'Charmander',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    height: 60.96,
    weight: 8.48,
    type: 'Fire',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.'
  },
  {
    name: 'Snorlax',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
    height: 210.82,
    weight: 460,
    type: 'Normal',
    description: 'It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.'
  }
];

renderPokemons();

function renderPokemons() {
  const pokemonElement = document.querySelector("#pokemons");
  for(i = 0; i < pokemons.length; i++) {
    let div1 = document.createElement("div");
    pokemonElement.appendChild(div1)
    let img = document.createElement("img");
    div1.appendChild(img);
    let div = document.createElement("div");
    div1.appendChild(div);
    let h2 = document.createElement("h2");
    div.appendChild(h2);
    let p = document.createElement("p");
    div.appendChild(p);
    let row = document.createElement("div");
    div.appendChild(row);
    let h3 = document.createElement("h3");
    row.appendChild(h3);
    let span = document.createElement("span");
    row.appendChild(span);
    let row2 = document.createElement("div");
    div.appendChild(row2);
    let row2h3 = document.createElement("h3");
    row2.appendChild(row2h3);
    let row2span = document.createElement("span");
    row2.appendChild(row2span);
    let row3 = document.createElement("div");
    div.appendChild(row3);
    let row3h3 = document.createElement("h3");
    row3.appendChild(row3h3);
    let row3span = document.createElement("span");
    row3.appendChild(row3span);

    img.src = pokemons[i].img;
    h2.textContent = pokemons[i].name;
    p.textContent = pokemons[i].description;
    h3.textContent = "Height";
    span.textContent = pokemons[i].height;
    row2h3.textContent = "Weight";
    row2span.textContent = pokemons[i].weight;
    row3h3.textContent = "Type";
    row3span.textContent = pokemons[i].type;

    div1.classList.add("pokemon");
    row.classList.add("row");
    row2.classList.add("row");
    row3.classList.add("row");
  }

  /*
    Din uppgift är att skriva ut alla pokemons inuti #pokemons elementet.

    Loopa igenom pokemons arrayn och skapa ett element för varje item ur arrayn enligt följande 
    (exemplet är pikachu men texten skall ju vara olika för varje item ur arrayn):

      <div class="pokemon">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="Pikachu">
        <div>
          <h2>Pikachu</h2>
          <p>Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.</p>
          <div class="row">
            <h3>Height</h3>
            <span>40.64 cm</span>
          </div>
          <div class="row">
            <h3>Weight</h3>
            <span>5.98 kg</span>
          </div>
          <div class="row">
            <h3>Type</h3>
            <span>Electric</span>
          </div>
        </div>
      </div>
    
    - Du får bara ändra på javascript koden inuti funktionen renderPokemons.
    - Du får inte ändra på index.html filen
    - Du skall styla sidan och skriva css-kod i style.css för att få sidan att se fin ut.
  */
}