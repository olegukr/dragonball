const requestPlanetURL = 'https://dragonball-api.com/api/planets';
const requestCharactersURL = 'https://dragonball-api.com/api/characters?limit=5'

async function fetchPlanetsJson() {
    const response = await fetch(requestPlanetURL);
    const planets = await response.json();
    // console.log(planets)
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
    // let deletedAt = planet.deletedAt;

    planetSection.innerHTML += `
    
        <div class="card" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="...">

            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Status: ${isDestroyed}</p>                 
            </div>
            <div class="card-body">
                <h5 class="card-title">Description</h5>
                <p class="card-text">${description}</p>
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

        <div class="card" class="d-flex flex-wrap" style="width: 18rem;">
            <img src="${imageCharcter}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nameCharcter}</h5>
                <p class="card-text">${race} - ${gender}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Base KI:</li>
                <li class="list-group-item">${ki}</li>
                <li class="list-group-item">Total KI</li>
                <li class="list-group-item">${maxKi}</li>
                <li class="list-group-item">Affiliation:</li>
                <li class="list-group-item">${affiliation}</li>
            </ul>
        </div>
        `
    })

})