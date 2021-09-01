function realizarPeticion(character) {
    let URL = `${API_URL.replace(":id", character)}`

    fetch(URL)
        .then(response => response.json())
        .then(character => {
            console.log(`Hola yo soy, ${character.name}`)
        })
        .catch(error => console.log(error))
}

const API_URL = "https://swapi.dev/api/people/:id"

realizarPeticion(1)
realizarPeticion(2)