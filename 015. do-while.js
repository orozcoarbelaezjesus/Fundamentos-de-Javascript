var jesus = {
    nombre: "Jesús",
    peso: 68
}

const CAMBIO_DE_PESO = 0.2;

console.log(jesus.peso);

const aumentarDePeso = persona => Math.round(persona.peso += CAMBIO_DE_PESO * 3) / 100;

const adelgazar = persona => Math.round(persona.peso -= CAMBIO_DE_PESO * 3) / 100;

var dias = 0;

do {
    var random = Math.random();

    if(random < 0.25){
        aumentarDePeso(jesus);
    } else if (random < 0.5){
        adelgazar(jesus);
    }

   dias++;

} while(dias < 365 );

console.log(jesus.peso.toFixed(1));