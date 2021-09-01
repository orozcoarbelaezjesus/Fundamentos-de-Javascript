var jesus = {
    edad: 28
}

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(edad){
    return edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona){
    var { edad } = persona;
    if(esMayorDeEdad(edad)){
        console.log("Es mayor de edad")
    } else {
        console.log("No es mayor de edad")
    }
}

imprimirSiEsMayorDeEdad(jesus);