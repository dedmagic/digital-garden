const str = 'Hello, world';

// Подстроки
console.log(str.substring(2, 5));
console.log(str.slice(2, 5));

console.log(str.substring(5, 2)); // "исправляет" (меняет местами)
console.log(str.slice(5, 2)); // пустая строка

console.log(str.substring(-2, 4)); // отрицательные индексы превращаются в 0
console.log(str.slice(3, -2)); // отрицательные индексы отсчитываются от конца строки

console.log(str.split(','));
console.log(str.split(', '));

// Поиск в строке
console.log(str.indexOf('l'));
console.log(str.indexOf('l', 3));
console.log(str.indexOf('q'));
console.log(str.lastIndexOf('l'));

console.log(str.startsWith('He'));
console.log(str.endsWith('zu'));
console.log(str.includes('or'));

// Дополнение строк до заданной ширины
console.log('z'.padStart(5));
console.log('z'.padStart(5, '-'));
console.log('z'.padEnd(5));
console.log('z'.padEnd(5, '-'));

// Модификация строк
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());
console.log(str.replace('ello', 'appy'));
console.log(str.replace('o', 'u'));
//console.log(str.replaceAll('o', 'u'));
console.log(str.repeat(3));
console.log('-'.repeat(33));

// Отсечение пробелов
const spacesStr = '   Mark Knopfler       ';
console.log(`>>>${spacesStr}<<<`);
console.log(`>>>${spacesStr.trimStart()}<<<`);
console.log(`>>>${spacesStr.trimEnd()}<<<`);
console.log(`>>>${spacesStr.trim()}<<<`);

// Работа с символами
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.codePointAt(0));
