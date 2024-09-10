// удаление повторяющихся элементов массива
const numbers = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7, 7];
const unique_numbers = [...new Set(numbers)];
console.log(unique_numbers); // [1, 2, 3, 4, 5, 6, 7]