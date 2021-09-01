var jesus = {
    nombre: "Jesús",
    edad: 28
}

const MAYORIA_DE_EDAD = 18;

const verificacionDeEdad = ({nombre, edad}) => edad >= MAYORIA_DE_EDAD;

function verificacionDeAcceso(persona){
    if(verificacionDeEdad(persona)){
        console.log("Permitir acceso");
    } else {
        console.log("Acceso denegado");
    }
}

verificacionDeAcceso(jesus);