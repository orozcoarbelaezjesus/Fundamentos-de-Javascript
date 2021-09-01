var jesus = {
    nombre: "Jesús",
    peso: 68
}

const CAMBIO_DE_PESO = 0.2;

console.log(jesus.peso);

const aumentarDePeso = persona => Math.round(persona.peso += CAMBIO_DE_PESO);

const adelgazar = persona => Math.round(persona.peso -= CAMBIO_DE_PESO);

var i = 1;

while( i <= 365 ){
    var random = Math.random();

    if(random < 0.25){
        aumentarDePeso(jesus);
    } else if (random < 0.5){
        adelgazar(jesus);
    }

    i++;
}

console.log(jesus.peso.toFixed(1));