function cambiarEdadNumero(persona){
    return persona.edad = Number(persona.edad)
}

var jesus = {
    nombre: "Jesús",
    edad: "28"
}

cambiarEdadNumero(jesus)

console.log(typeof(jesus.edad))