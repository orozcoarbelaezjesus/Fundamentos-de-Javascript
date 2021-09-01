function construirNuevoObjeto(objeto){
    return {
        ...objeto,
        nombre: "Isaías"
    }
}

var jesus = {
    nombre: "Jesús",
    profesion: "Programador"
}

var isaias = construirNuevoObjeto(jesus)

console.log(isaias)