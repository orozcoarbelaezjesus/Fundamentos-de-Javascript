function cuantosDiasTendre(inicio, fin){
    const unDia = 1000 * 60 * 60 * 24;
    const diferencia = Math.abs(inicio, fin);

    return Math.floor(diferencia / unDia) / 365;
}

const fechaDeInicio = new Date(2021,8,22)
const fechaLimite = new Date(2021, 10, 31)

console.log(cuantosDiasTendre(fechaDeInicio, fechaLimite))