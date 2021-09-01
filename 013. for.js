var jesus = {
    nombre: "Jesús",
    peso: 68
}

const CAMBIO_DE_PESO = 0.2;

console.log(jesus.peso);

const aumentarDePeso = persona => Math.round(persona.peso += CAMBIO_DE_PESO * 3) / 100;

const adelgazar = persona => Math.round(persona.peso -= CAMBIO_DE_PESO * 3) / 100;

for(var i = 0; i <= 365 ; i++){
    var random = Math.random();

    if(random < 0.25){
        aumentarDePeso(jesus);
    } else if (random < 0.5){
        adelgazar(jesus);
    }
}

console.log(jesus.peso.toFixed(1));