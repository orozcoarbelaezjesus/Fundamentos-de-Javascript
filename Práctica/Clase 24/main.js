function herencia(prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn()
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre){
    this.nombre = nombre
}

Persona.prototype.saludar = function(){
    console.log("Hola, mi nombre es " + this.nombre + " y soy " + this.profesion)
}

function Profesional(nombre, profesion){
    Persona.call(this, nombre)
    this.profesion = profesion
}

herencia(Profesional, Persona)

var jesus = new Profesional("Jesús", "Profesor")

jesus.saludar()