// конструирование массива из другого массива (других массивов)
// и значений
let firstArray = ["A", "B", "C"];
let secondArray = ["X", ...firstArray, "Y", "Z"];
console.log(secondArray);