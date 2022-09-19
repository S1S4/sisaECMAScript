function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['sisa', 'perez', 'ana', 'Genos', 'g2pepe']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
