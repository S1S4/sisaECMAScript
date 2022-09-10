// Object Literals
// Una de las mejoras agregadas en ECMA 6 al trabajar con objetos es la
// representación de la asignación.

// Enhanced object literals

// El siguiente ejemplo muestra dos formas para expresar 
// una asignación, la segunda, simplificada.

function newUser(user, age, country) { 
    return { user:user, age: age, country: country } 
}
// esto es lo mismo que decir

function newUser(user, age, country){ 
    return { user, age, country, } 
}