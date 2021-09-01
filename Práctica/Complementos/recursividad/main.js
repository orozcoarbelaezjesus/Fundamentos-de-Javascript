const divisionEntera = (dividendo, divisor) => {
    if(dividendo < divisor){
        return 0
    }

    return 1 + divisionEntera(dividendo - divisor, divisor)
}

console.log(divisionEntera(13,4));