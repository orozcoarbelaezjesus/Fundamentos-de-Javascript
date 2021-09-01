function saludar(nombre, profesion){
    document.write(`Hola, mi nombre es ${nombre} y soy ${profesion}`)
}

function registro(){
    let nombre = prompt("Ingrese su nombre")
    let profesion = prompt("Ingrese su profesión")

    saludar(nombre, profesion)
}

registro()