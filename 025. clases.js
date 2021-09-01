class Persona {
    constructor(nombre, apellidos, edad, altura) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.altura = altura;
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellidos}`);
    }

    soyAlto(){
        return this.altura > 1.8;
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellidos, altura){
        super(nombre, apellidos, altura);
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellidos} y soy desarrollador`);
    }
}

var jesus = new Desarrollador("Jesús", "Orozco Arbeláez");
jesus.saludar();
console.log("Soy alto: " + jesus.soyAlto());

console.log(jesus);