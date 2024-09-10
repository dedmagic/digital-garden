// double exclamation point: convert to boolean
let str = 'Hello world';
let empty_string = '';
let arr = [];
let obj = {};

console.log(!!str);
console.log(!!arr);
console.log(!!obj);
console.log(!!42);
console.log(!!Infinity);

console.log('-'.repeat(30));

console.log(!!empty_string);
console.log(!!0);
console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);

console.log('-'.repeat(30));

// проверка существования объекта (замена if)
let obj1 = { a: 42 };
let obj2 = null; // or undefined

//console.log(obj2.a);

console.log(obj1 && obj1.a);
console.log(obj2 && obj2.a);

console.log(obj1?.a);
console.log(obj2?.a);

console.log('-'.repeat(30));

// ещё одна замена if
for (let i = 0; i < 10; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

for (let i = 0; i < 10; i++) {
    (i % 2 == 1) && console.log(i);
}

for (let i = 0; i < 10; i++) {
    (i % 2) && console.log(i);
}

// значения по умолчанию
let options = { font: 'Verdana' };
// let options = null;

options = options || { width: 42 };
console.log(options);
