function crearSaludo(finalDeFrase){
    return function(nombre){
        console.log("Hola " + nombre + " " + finalDeFrase);
    }
}

const saludoArgentino = crearSaludo("Che")

const saludoMexicano = crearSaludo("Wey")

const saludoColombiano = crearSaludo("Parce")

saludoArgentino("Jesús");
saludoMexicano("Jesús");
saludoColombiano("Jesús");