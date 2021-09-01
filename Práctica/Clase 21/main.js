function Persona(nombre, profesion){
    this.nombre = nombre
    this.profesion = profesion
}

Persona.prototype.presentarse = function(){
    console.log("Hola, me llamo " + this.nombre + " y soy " + this.profesion)
}

var jesus = new Persona("Jesús", "Programador")

jesus.presentarse()