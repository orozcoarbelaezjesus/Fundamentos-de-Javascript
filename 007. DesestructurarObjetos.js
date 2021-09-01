var jesus = {
    nombre: "Jesús",
    apellido: "Orozco Arbeláez",
    edad: 28
}

function imprimirNombreEnMayusculas(persona){
    // var nombre = persona.nombre;
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad(persona){
    // Hola, me llamo nombre y tengo tantos años
    var { nombre, edad } = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} año/s`)
}

imprimirNombreEnMayusculas(jesus);
imprimirNombreYEdad(jesus);