function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn()
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellidos, edad, altura) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.altura = altura;
    // return this;
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellidos}`);
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
}

function Desarrollador(nombre, apellidos){
    this.nombre = nombre;
    this.apellidos = apellidos;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellidos} y soy desarrollador`);
}

var jesus = new Desarrollador("Jesús", "Orozco Arbeláez");
jesus.saludar();
console.log("Soy alto: " + jesus.soyAlto());

console.log(jesus);