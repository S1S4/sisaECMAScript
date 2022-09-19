const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-09-19');
console.table(matchers);