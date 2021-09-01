function realizarPeticion(character) {

    return new Promise((resolve, reject) => {
        const API_URL = "https://swapi.dev/api/people/:id"
        let URL = `${API_URL.replace(":id", character)}`

        fetch(URL)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
    })
}

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5];

    var promesas = ids.map(id => {
        return realizarPeticion(id)
    })

    try {
        const personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch(error){
        console.log("Error: " + error.message)
    }
}

obtenerPersonajes()