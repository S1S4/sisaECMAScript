//metodo antiguo
function newUser(name, age, country) {
    var name = name || "Sisa";
    var age = age || 22;
    var country = country || 'VE';
    console.log(name, age, country);
}

newUser();
newUser('Cesar', '123', 'AA');

//metodo de es6
function newAdmin(name = 'Sisadmin', age = 22, country = 'VE') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Pepe', 43, '9asdf');
