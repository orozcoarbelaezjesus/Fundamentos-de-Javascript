const URL = "https://swapi.dev/api/people/1"

fetch(URL)
        .then(response => response.json())
        .then(character => {
            console.log(`Hola yo soy, ${character.name}`)
        })
        .catch(error => console.log(error))