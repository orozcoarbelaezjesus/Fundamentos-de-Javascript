function resultado(frase){
    console.log(frase + " " + this.nombre)
}

const pedro = {
    nombre: "Pedro"
}

const juan = {
    nombre: "Juan"
}

const proyectoDePedro = resultado.bind(pedro)
const proyectoDeJuan = resultado.bind(juan)

console.log(proyectoDePedro("Proyecto de "))
console.log(proyectoDeJuan("Proyecto de "))

console.log(resultado.call(pedro, "Calificación de "));
console.log(resultado.call(juan, "Calificación de"));

console.log(resultado.apply(pedro, ["Retrospectiva de "]));
console.log(resultado.apply(juan, ["Retrospectiva de"]));