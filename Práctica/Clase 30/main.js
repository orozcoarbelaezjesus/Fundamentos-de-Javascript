function realizarPeticion(character, callback) {
    let URL = `${API_URL.replace(":id", character)}`

    fetch(URL)
        .then(response => response.json())
        .then(character => {
            console.log(`Hola yo soy, ${character.name}`)
            if(callback){
                callback()
            }
        })
        .catch(error => console.log(error))
}

const API_URL = "https://swapi.dev/api/people/:id"

realizarPeticion(1, function(){
    realizarPeticion(2, function(){
        realizarPeticion(3, function(){
            realizarPeticion(4, function(){
                realizarPeticion(5)
            })
        })
    })
})