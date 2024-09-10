let arr = [4, 3, 2, 9, 3, 45, 5, 2];
//console.log(arr);

arr.sort(); // (1) Изменение "по месту" (2) Строковое сравнение
console.log(arr);

arr.sort((a, b) => a - b); // Правильная сортировка числового массива
console.log(arr);
