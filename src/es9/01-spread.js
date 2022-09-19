const user = { username: 'Sisa', age: 2222, country: 'V3'};
const { username, ...values } = user;
console.log(username);
console.log(values);