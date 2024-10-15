const requestPlanetURL = 'https://dragonball-api.com/api/planets';
const requestCharactersURL = 'https://dragonball-api.com/api/characters?limit=5'

async function fetchPlanetsJson() {
    const response = await fetch(requestPlanetURL);
    const planets = await response.json();
    return planets
}

async function fetchCharactersJson() {
    const response = await fetch(requestCharactersURL);
    const characters = await response.json();
    return characters
}

fetchPlanetsJson().then(planet => {
    for (let index=0; planet.planets; index++) {
        
        let id = planet.planets[index].id;
        let name = planet.planets[index].name;
        let ki = planet.planets[index].ki;
        let maxKi = planet.planets[index].maxKi;
        let race = planet.planets[index].race;
        let gender = planet.planets[index].gender;
        let description = planet.planets[index].description;
        let image = planet.planets[index].image;
        let affiliation = planet.planets[index].affiliation;
        let deletedAt = planet.planets[index].deletedAt;

        planetSection.innerHTML += `
        
            <div class="cardsPlanets" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${id}. ${name} ${ki}€</h5>
                <p class="card-text">${description}</p>
            </div>
        
        
        `
        
        console.log(id);
        console.log(name);
    }
})

    fetchCharactersJson().then(character => {
        for (let index=0; character.characters; index++) {

            let idChar = character.characters[index].id;
            let nameChar = character.characters[index].name;
            let kiChar = character.characters[index].ki;
            let maxKiChar = character.characters[index].maxKi;
            let raceChar = character.characters[index].gender;
            let descriptionChar = character.characters[index].description;
            let imageChar = character.characters[index].image;
            let affiliationChar = character.characters[index].affiliation;
            let deletedAtChar = character.characters[index].deletedAt;

            console.log(nameChar);

            // characterSection.innerHTML += `
        
            // <div class="cardsCharacters" style="width: 18rem;">
            // <img src="${imageChar}" class="card-img-top" alt="...">
            // <div class="card-body">
            //     <h5 class="card-title">${idChar}. ${nameChar} ${kiChar}€</h5>
            //     <p class="card-text">${descriptionChar}</p>
            // </div>
            // `
        }

})