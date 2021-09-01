const jesus = {
    nombre: "jesús"
}

const jose = {
    nombre: "jose"
}

function saludar(saludo = "Qué tal?"){
    console.log(saludo + ", mi nombre es " + this.nombre)
}

// bind(contexto, demás parámetros)
const saludarJesus = saludar.bind(jesus, "Hola")
const saludarJose = saludar.bind(jose, "Como estas?")

console.log(saludarJesus)
console.log(saludarJose)

// Bind no ejecuta la función, sino que devuelve otra función. Las funciones a continuación si
// ejecutan la función

console.log(saludar.call(jesus, "Hola"));
console.log(saludar.call(jose, "Hola"));

console.log(saludar.apply(jesus, ["Hola"]));
console.log(saludar.apply(jose, ["Hola"]));