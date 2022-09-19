// declarando
class User {};

// instancia de una clase
// const newUser = new User(); //instancia de un objeto

class user {
    //metodos
    greeting() {
        return 'Hola';
    }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());// 2 hola de instancias distintas pero de la misma clase

// constructor

class user {
    //constructor
    constructor() {
        console.log('nuevo usuario');
    }
    greeting() {
        return 'Hola';
    }
}

const cesar = new user();

// this: hace referencia al elemento padre que lo contiene

class user {
    constructor(name) {
        this.name = name
    }
    //metodo
    speak() {
        return 'hablame'
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

// setters & getters

class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    speak() {
        return 'hablame menolca'
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() { // el valor a obtener
        return this.age;
    }
    set uAge(n) { // el valor que voy a cambiar
        this.age = n;
    }
}

const kakaka = new user('Sisa', 22);
console.log(kakaka.uAge);
console.log(kakaka.uAge = 2020202);