// falsy values
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0)); // also -0
console.log(Boolean(NaN));
console.log(Boolean(''));

console.log('-'.repeat(30));

// truthy values
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean('false'));
console.log(Boolean([false]));

console.log('-'.repeat(30));

// Сокращённая запись логические выражения
let obj = { a: 42 };

if (obj !== null && obj !== undefined) {
    console.log('Объект существует');
} else {
    console.log('Объект не существует');
}

if (obj) {
    console.log('Объект существует');
} else {
    console.log('Объект не существует');
}

// безумие JS...
console.log([] == ![]);
