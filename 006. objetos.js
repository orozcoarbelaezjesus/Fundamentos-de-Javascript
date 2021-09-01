var jesus = {
    nombre: "Jesús",
    apellidos: "Orozco Arbeláez",
    edad: 28
}

function imprimirNombreEnMayusculas({ nombre }){
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(jesus);