// преобразование итерируемых объектов в массив
// строка → массив символов
const str = 'Hello world!';
const chars = [...str];
console.log(chars);

// Set → массив
const mySet = new Set([1, 2, 3]);
const arr1 = [...mySet];
console.log(arr1);

// Map → массив
const myMap = new Map([[1, 'one'], [2, 'two']]);
const arr2 = [...myMap]
console.log(arr2);

// NodeList → массив
// const nodeList = document.querySelectorAll('div');
// const arr3 = [ ...document.querySelectorAll('div') ];
// console.log(arr3); // [ div, div, div]