let myObject = { a: 1, b: 2, c: 3, d: 4 };
let { b, d, ...other } = myObject;
console.log(b); // 2
console.log(d); // 4
console.log(other); // { a: 1, c: 3 } 
