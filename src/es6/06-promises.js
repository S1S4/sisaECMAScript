const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('hey!!');
        }else {
            reject('upslkjlkj');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error));


//////////////////////////////////////////////
const doTask = (iterations, callback) => {
const numbers = [];
    for (let i = 0; i < iterations; i++) {
        const number = 1 + Math.floor(Math.random() * 6);
        numbers.push(number);
        if (number === 6) {
        /* Error, se ha sacado un 6 */
        callback({
            error: true,
            message: "Se ha sacado un 6"
        });
        return;
        }
    }
    /* Termina bucle y no se ha sacado 6 */
    return callback(null, {
        error: false,
        value: numbers
    });
    }

    doTask(10, function(err, result) {
        if (err) {
          console.error("Se ha sacado un ", err.message);
          return;
        }
        console.log("Tiradas correctas: ", result.value);
      });