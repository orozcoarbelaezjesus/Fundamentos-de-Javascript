function Persona(nombre, profesion){
    this.nombre = nombre
    this.profesion = profesion
}

var jesus = new Persona("Jesús", "Profesión")

document.write(jesus.nombre + "<br>" + jesus.profesion)
