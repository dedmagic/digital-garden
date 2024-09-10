var arr = [1, 2, 3, 4, 5];
var result1 = arr.some(el => el > 3);
console.log(result1); // true

var result2 = arr.some(el => el > 7);
console.log(result2); // false
