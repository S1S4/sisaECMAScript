// arrays destructure

let fruits = ['Apple', 'banana'];
let [a, b] = fruits;
console.log(a, b);

// object destructuring

let user = { username: 'Sisa', age: 22};
let { username, age } = user;
console.log(username, age);


// spread operator = desestructura o deconstruye

let person = { name: 'sisa', age: 23498 };
let country = 'VE';

let data = { id: 1, ...person, country }; //con los ...person asignas todo lo que se encuentre en el objeto person
console.log(data);

// rest empaqueta o construye

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0]; //suma num + el primer valor del array dentro de values
}

sum(1, 1, 2, 3);