// Получение конкрентных свойств
let myObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
let { b, d } = myObject;

// let b = myObject.b;
// let d = myObject.d;

console.log(b); // 2
console.log(d); // 4
