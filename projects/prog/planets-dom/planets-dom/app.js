const planets = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune'
];

renderPlanets();

function renderPlanets() {
  const planet = document.getElementById("planets");
  for(i = 0; i < planets.length; i++) {
    const h3Maker = document.createElement("h3");
    planet.appendChild(h3Maker);
    h3Maker.textContent = planets[i];
    h3Maker.classList.add("planet");
  }
  /*
    Din uppgift är att skriva ut planeterna inuti #planets elementet.
    Varje planet skall skrivas ut enligt följande:
      <h3 class="planet">PLANETENS NAMN</h3>
    
    - Du får bara ändra på javascript koden inuti funktionen renderPlanets.
    - Du får inte ändra på index.html filen
    - Du skall styla sidan och skriva css-kod i style.css för att få sidan att se fin ut.
  */
}