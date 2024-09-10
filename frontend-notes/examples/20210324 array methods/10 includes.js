//let value = 'one';
let value = 'three';

// Обычная запись
if (value === 1 || value === 'one' || value === 2 || value === 'two') {
    console.log('do something');
}

// Короткая запись №1
if ([1, 'one', 2, 'two'].indexOf(value) >= 0) {
    console.log('do something');
}

// Короткая запись №2
if ([1, 'one', 2, 'two'].includes(value)) {
    console.log('do something');
}
