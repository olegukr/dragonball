const requestPlanetURL = 'https://dragonball-api.com/api/planets';
const requestCharactersURL = 'https://dragonball-api.com/api/characters?page=1&limit=100'

async function fetchPlanetsJson() {
    const response = await fetch(requestPlanetURL);
    const planets = await response.json();
    return planets.items
}

async function fetchCharactersJson() {
    const response = await fetch(requestCharactersURL);
    const characters = await response.json();
    return characters.items
}

fetchPlanetsJson().then( planets => {
    planets.forEach(planet =>  {

    let id = planet.id;
    let name = planet.name;
    let isDestroyed = planet.isDestroyed;
    let description = planet.description;
    let image = planet.image;

    planetSection.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
            <div class="card" style="width: 280px; height: 740px;">
                <img src="${image}" class="card-img-top" style="height: 280px; object-fit: cover;" alt="Planet image">

                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">is destoyed: ${isDestroyed}</p>                 
  
                    <h5 class="card-title">Description</h5>
                    <p class="card-text">${description}</p>
                </div>
            </div>
        </div>
    `
    })
})


fetchCharactersJson().then( characters => {
    characters.forEach(character => {
    
    let idCharcter = character.id;
    let nameCharcter = character.name;
    let ki = character.ki;
    let maxKi = character.maxKi;
    let race = character.race;
    let gender = character.gender;
    let descriptionCharcter = character.description;
    let imageCharcter = character.image;
    let affiliation = character.affiliation;
    let deletedAtCharcter = character.deletedAt;

    characterSection.innerHTML += `

        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
            <div class="card" style="width: 280px; height: 740px;">
                <img src="${imageCharcter}" 
                    class="card-img-top" 
                        style="height: 400px;
                        object-fit: contain;" 
                        alt="character image"
                 >
                <div class="card-body">
                    <h5 class="card-title">${nameCharcter}</h5>
                    <p class="card-text">${race} - ${gender}</p>
                
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Base KI:</li>
                        <li class="list-group-item2">${ki}</li>
                        <li class="list-group-item">Total KI</li>
                        <li class="list-group-item2">${maxKi}</li>
                        <li class="list-group-item">Affiliation:</li>
                        <li class="list-group-item2>${affiliation}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    })

})

/*** 
.container — a wrapper for all content that ensures responsiveness and adds side padding.
.row — used to create rows in the grid layout.
.col-12, .col-md-6, .col-lg-4, .col-xl-3 — classes used for adaptive column widths:
    col-12: on small screens (up to 576px), each card takes 100% width (1 card per row).
    col-md-6: on medium screens (up to 768px), each card takes 50% width (2 cards per row).
    col-lg-4: on large screens (up to 992px), each card takes 33.33% width (3 cards per row).
    col-xl-3: on extra-large screens (1200px and up), each card takes 25% width (4 cards per row).
.mb-3 — this class adds bottom margin to each card to create space between them.
.card — a Bootstrap class for styling cards.
.p-3 — adds padding inside the cards to prevent content from sticking to the edges.
***/