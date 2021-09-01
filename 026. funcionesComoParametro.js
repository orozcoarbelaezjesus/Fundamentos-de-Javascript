class Persona {
    constructor(nombre, apellidos, edad, altura) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.altura = altura;
    }

    saludar(fn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellidos}`);
        if(fn){
            fn(this.nombre, this.apellidos, false );
        }
    }

    soyAlto(){
        return this.altura > 1.8;
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellidos, edad, altura){
        super(nombre, apellidos, edad, altura);
    }

    saludar(fn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellidos} y soy desarrollador`);
        if(fn){
            fn(this.nombre, this.apellidos, true );
        }
    }
}

function responderSaludo(nombre, apellidos, esDev){
    console.log(`Buen día ${nombre} ${apellidos}`);
    console.log("Ah mirá, no sabía que eras desarrollador/a");
}

var jesus = new Desarrollador("Jesús", "Orozco Arbeláez", 28, 1.72);
jesus.saludar(responderSaludo);
console.log("Soy alto: " + jesus.soyAlto());

console.log(jesus);