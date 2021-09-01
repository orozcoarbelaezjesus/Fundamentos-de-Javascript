var jesus = {
    nombre: "Jesús",
    profesion: "Programador"
}


function imprimirDatos(objeto){
    let { nombre, profesion } = objeto
    document.write(`Hola, me llamo ${nombre} y soy ${profesion} <br>`)
}

imprimirDatos(jesus)