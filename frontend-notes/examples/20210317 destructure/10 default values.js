// Значения по умолчанию (можно и для массивов)
let myObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

// let { b, d = 42, e = 96 } = myObject;
// console.log(b, d, e); // 2 4 96

let { b, d = 42, e } = myObject;
console.log(b, d, e); // 2 4 undefined
