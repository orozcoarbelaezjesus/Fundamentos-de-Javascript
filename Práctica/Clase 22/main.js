function Persona(nombre){
    this.nombre = nombre
}

Persona.prototype.presentarse = function () {
    document.write("Hola, soy " + this.nombre)
}

var jesus = new Persona("Jesús")

jesus.presentarse()