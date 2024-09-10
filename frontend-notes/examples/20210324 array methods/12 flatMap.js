// Пример 1: дан массив строк, необходимо получить массив всех слов этих строк
let strings = ["it's Sunny in", "", "California", "Hello World"];

let result = strings.map(s => s.split(" "));
console.log(result); // [["it's","Sunny","in"],[""],["California"],["Hello","World"]]

let words = strings.flatMap(s => s.split(" "));
console.log(words); // ["it's","Sunny","in","","California","Hello","World"]

// Пример 2: дублирование всех элементов массива
let arr = [2, 3, 4].flatMap(el => [el, el]);
console.log(arr); // [2, 2, 3, 3, 4, 4]
