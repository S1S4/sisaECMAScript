/* Metodos privados: Agregando # los métodos se vuelven privados y 
solo pueden ser accedidos dentro de la misma clase. */

class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak() {
        return 'hablame menolca'
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() { // el valor a obtener
        return this.age;
    }
    set #uAge(n) { // el valor que voy a cambiar
        this.age = n;
    }
}

const kakaka = new user('Sisa', 22);
console.log(kakaka.uAge);
console.log(kakaka.uAge = 2020202);