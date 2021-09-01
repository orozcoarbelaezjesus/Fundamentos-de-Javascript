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

    const ids = [1,2,3,4,5]

    const promesas = ids.map(id => {
        return realizarPeticion(id)
    })

    Promise
    .all(promesas)
    .then(personajes => {
        console.log(personajes)
    })
    .catch(function (id) {
        console.log(`Sucedió un error al obtener el personaje ${id}`);
    })