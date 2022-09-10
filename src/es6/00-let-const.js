//usa ctrl + alt + n para correr el codigo desde el vsCode
var lastName = 'Sisa';
lastName = 'Sisa';
console.log(lastName);

let fruit = 'apple';
fruit = 'kiwi';
console.log(fruit);

const animal = 'perro';
animal = 'gato';
console.log(animal);

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3) ;
}

fruits();