// flat
const array = [1,2,4,5,76,8, [1,36,9,43,8, [2,6,12,7,9,2]]];
console.log(array.flat(3));

// flatmap
const array2 = [2,5,78,2,6];
console.log(array2.flatMap(v => [v, v * 2]));