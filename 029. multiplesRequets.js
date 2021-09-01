const API_URL = "https://swapi.dev/api";
const PEOPLE_URL = "people/:id";

const opts = { crossDomain: true };

const onPeopleResponse = function (character) {
    console.log(`Hola yo soy, ${character.name}`);
}

function obtenerPersonaje (id){
    const url = `${API_URL}${PEOPLE_URL.replace(":id",id)}`;
    $.get(url, opts, onPeopleResponse);
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4);
obtenerPersonaje(5);