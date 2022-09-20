const promise1 = new Promise((resolve, reject) => reject('Reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 2'));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


/* se puede usar tambien Promise.all(iterable) 
La diferencia con
Promise.allSettled()
Ejecuta todas las promesas sin importar si son rechazadas o no.*/