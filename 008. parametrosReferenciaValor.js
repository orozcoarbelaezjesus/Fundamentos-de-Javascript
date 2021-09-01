var jesus = {
    nombre: "Jesús",
    edad: 28
}

function cumple(persona){
    return {
        ...persona,
        edad: persona.edad+1
    }
}

cumple(jesus);

var jesusMayor = cumple(jesus);

console.log(jesus);
console.log(jesusMayor);