function realizarPeticion(character) {

    return new Promise((resolve, reject) => {
        let URL = `${API_URL.replace(":id", character)}`

        fetch(URL)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(character))
    })
}

const API_URL = "https://swapi.dev/api/people/:id"

realizarPeticion(1)
    .then(function(personaje){
        console.log(`El personaje 1 es ${personaje.name}`)
        return realizarPeticion(2)
    })
    .then(function(personaje){
        console.log(`El personaje 2 es ${personaje.name}`)
        return realizarPeticion(3)
    })
    .then(function(personaje){
        console.log(`El personaje 3 es ${personaje.name}`)
        return realizarPeticion(4)
    })
    .then(function(personaje){
        console.log(`El personaje 4 es ${personaje.name}`)
        return realizarPeticion(5)
    })
    .then(function(personaje){
        console.log(`El personaje 5 es ${personaje.name}`)
    })
    .catch(function(id){
        console.log(`Sucedió un error al obtener el personaje ${id}`);
    })