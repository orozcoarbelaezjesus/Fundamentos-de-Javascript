function potencia(base, exponente, fn){
    let potenciacion = Math.pow(base, exponente)
    if(fn){
        fn(potenciacion)
    }

    return potenciacion
}

function mostrarResultado(resultado){
    console.log("Resultado: " + resultado)
}

const operacionUno = potencia(3,3,mostrarResultado)

const operacionDos = potencia(4,4)

console.log("Por consola: resultado: " + operacionDos)