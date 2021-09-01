const NUMERO_UNO = 1;
const NUMERO_DOS = 2;
const NUMERO_TRES = 3;
const NUMERO_CUATRO = 4;


function verificarNumero(numero) {
    switch (numero) {
        case 1:
            console.log("Uno");
            break;
        case 2:
            console.log("Dos");
            break;
        case 3:
            console.log("Tres");
            break;
        default:
            console.log(numero);
    }
}

verificarNumero(NUMERO_UNO);
verificarNumero(NUMERO_DOS);
verificarNumero(NUMERO_TRES);
verificarNumero(NUMERO_CUATRO);