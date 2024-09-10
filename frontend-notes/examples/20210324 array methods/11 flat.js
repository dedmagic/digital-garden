// Рекурсивное "поднятие" вложенных элементов
var arr1 = [1, 2, [3, 4]];
var result1 = arr1.flat();
console.log(result1); // [1, 2, 3, 4]

// По умолчанию -- на один уровень
var arr2 = [1, 2, [3, 4, [5, 6]]];
var result2 = arr2.flat();
console.log(result2); // [1, 2, 3, 4, [5, 6]]

// На два уровня
var arr3 = [1, 2, [3, 4, [5, 6]]];
var result3 = arr3.flat(2);
console.log(result3); // [1, 2, 3, 4, 5, 6]

// Со всех глубин :)
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
var result4 = arr4.flat(Infinity);
console.log(result4); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
