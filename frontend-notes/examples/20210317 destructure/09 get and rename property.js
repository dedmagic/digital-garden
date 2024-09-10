// Получение свойств с переименованием
let myObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
let { b, d: newName } = myObject;
console.log(b); // 2
console.log(newName); // 4
// console.log(d); // ReferenceError: d is not defined
