var x = 4;
var y = "4";

// x == y true
// x === y false

var jesus = {
    nombre: "jesus"
}

var otraPersona = {
    nombre: "jesus"
}

// jesus == otraPersona false
// jesus === otraPersona false

var jesus2 = {
    nombre: "jesus"
}

var otraPersona2 = jesus2;

// jesus2 == otraPersona2 true
// jesus2 === otraPersona2 true

otraPersona3 = {
    ...jesus
}

// jesus2 == otraPersona3 false
// jesus2 === otraPersona3 false