var juan = {
    nombre: "Juan",
    edad: 25,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`);
    if(persona.ingeniero){
        console.log("Ingeniero");
    }

    if(persona.cocinero){
        console.log("Cocinero");
    }

    if(persona.cantante){
        console.log("Cantante");
    }

    if(persona.cantante){
        console.log("Cantante");
    }

    if(persona.dj){
        console.log("DJ");
    }

    if(persona.guitarrista){
        console.log("Guitarrista");
    }

    if(persona.drone){
        console.log("Piloto de Drone");
    }
}

function esMayorDeEdad(persona){
    var { edad } = persona;
    if(edad >= 18){
        console.log("Es mayor de edad");
    } else {
        console.log("No es mayor de edad");
    }
}

esMayorDeEdad(jesus);
imprimirProfesiones(jesus);