const añosDeExperiencia2020 = {
    años: 2
}

function isaiasAnoto(añosExperiencia, persona){
    return {
        ...persona,
        años: persona.años + añosExperiencia
    }
}

const añosDeExperiencia2021 = isaiasAnoto(1, añosDeExperiencia2020)

console.log(añosDeExperiencia2020)
console.log(añosDeExperiencia2021)