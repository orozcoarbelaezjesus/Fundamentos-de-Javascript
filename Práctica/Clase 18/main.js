const mayoresDe25 = ({edad}) => edad > 25

var juan = {
    nombre: "Juan",
    edad: 28
}

var pedro = {
    nombre: "Pedro",
    edad: 29
}

var estudiantes = [juan, pedro]

var estudiantesMayores25 = estudiantes.filter(mayoresDe25)

console.log(estudiantesMayores25)