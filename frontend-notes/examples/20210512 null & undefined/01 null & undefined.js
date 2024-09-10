console.clear();

// Как получить undefined
let x;
console.log(x);

let arr = [1, 2];
console.log(arr[2]);

let obj = { prop1: 42 };
console.log(obj.prop2);

let func = function (a, b) {
    console.log(a, b);
    return;
}

let y = func();
console.log(y);
line();

// Проверка на null и undefined
const value_null = null;
const value_undefined = undefined;
const value = { prop: 42 };

console.log(value_null === null);
console.log(value_undefined === null);
console.log(value === null);
line();

console.log(value_null === undefined);
console.log(value_undefined === undefined);
console.log(value === undefined);
line();

// Нестрогое сравнение null и undefined
console.log(value_null == value_undefined);
line();

// Тип значений
console.log(typeof undefined);
console.log(typeof value_undefined === 'undefined');
console.log(typeof null);
line();

// Кейс для неопределённой ситуации
//console.log(z === undefined);
console.log(typeof z === 'undefined');
line();

// Автоматическое преобразование в bool
if (value_null) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

if (value_undefined) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}
line();

// ?? – оператор нулевого слияния (nullish coalescing)
console.log(value_null ?? 42);
console.log(value_undefined ?? 42);
console.log("" || 42);
line();

// ?. – оператор опциональной последовательности (optional chaining)
console.log(value_null?.prop);
console.log(value_undefined?.prop);
console.log(value_null?.prop?.one_more_prop);
console.log(value_null?.prop ?? 42);
console.log(value_undefined?.prop ?? 42);
line();

console.log(value_null?.['prop']);
arr = null;
console.log(arr?.[0]);
func = null;
console.log(func?.(2, 3));
line();

console.log(value_undefined?.['prop']);
arr = undefined;
console.log(arr?.[0]);
func = undefined;
console.log(func?.(2, 3));


///////////////////////////////////////////////////
// helpers
function line() {
    console.log(`${'-'.repeat(10)}\n`);
}
