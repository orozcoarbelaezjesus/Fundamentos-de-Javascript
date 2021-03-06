const convertirCms = persona => {
    return {   
        ...persona,
        altura: persona.altura * 100
    }
}

var sacha = {
    nombre: "Sacha",
    apellido: "Lifszyc",
    altura: 1.72
}

var alan = {
    nombre: "Alan",
    apellido: "Gomez",
    altura: 1.86
}

var martin = {
    nombre: "Martin",
    apellido: "Gomez",
    altura: 1.85
}

var dario = {
    nombre: "Dario",
    apellido: "Juarez",
    altura: 1.71
}

var vicky = {
    nombre: "Vicky",
    apellido: "Zapata",
    altura: 1.56
}

var paula = {
    nombre: "Paula",
    apellido: "Barros",
    altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula];

var personasAlturaEnCms = personas.map(convertirCms);

console.log(personasAlturaEnCms);
console.log(personas);