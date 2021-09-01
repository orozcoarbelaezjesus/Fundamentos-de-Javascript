function Persona(nombre, apellidos, edad, altura) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.altura = altura;
    // return this;
}

Persona.prototype.saludar = function () {
    console.log( `Hola me llamo ${this.nombre} ${this.apellidos}`);
}

var jesus = new Persona("Jesús", "Orozco Arbeláez", 28, 1.72);
jesus.saludar();

console.log(jesus);