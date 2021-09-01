const jesus = {
    nombre: "Jesús",
    edad: 28
}

const cumpleInmutable = persona => {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

const jesus29 = cumpleInmutable(jesus)

console.log(jesus.edad)
console.log(jesus29.edad)