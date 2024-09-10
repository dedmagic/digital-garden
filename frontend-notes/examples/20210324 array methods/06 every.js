var arr1 = [5, 5, 5, 6, 5, 5];
var result1 = arr1.every(el => el === 5);
console.log(result1); // false

var arr2 = [5, 5, 5, 5, 5, 5];
var result2 = arr2.every(el => el === 5);
console.log(result2); // true
