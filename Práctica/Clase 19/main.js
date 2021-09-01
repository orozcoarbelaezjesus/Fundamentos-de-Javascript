function transformarProfesion(persona) {
    return {
        ...persona,
        profesion: "Programador"
    }
}

var jesus = {
    nombre: "Jesús",
    profesion: "Estudiante"
}

var personas = [jesus]

var personasModificadas = personas.map(transformarProfesion)

console.log(personasModificadas)