function frasePara(fraseFinal){
    return function(persona){
        console.log("El es " + persona + " " +  fraseFinal);
    }
}

const juan = frasePara(" y es programador")
const pedro = frasePara(" y es programador")

juan("Juan")
pedro("Pedro")