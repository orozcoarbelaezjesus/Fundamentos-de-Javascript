class Persona {
    constructor(nombre){
        this.nombre = nombre
    }

    saludar(){
        console.log("Hola, mi nombre es " + this.nombre + " y soy " + this.profesion)
    }
}

class Profesional extends Persona{
    constructor(nombre, profesion){
        super(nombre)
        this.profesion = profesion
    }
}

var jesus = new Profesional("Jesús", "Programador")
jesus.saludar()