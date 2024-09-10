let myArray = [1, 2, 3, 4, 5];
let [a, b, c, ...d] = myArray;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // [4, 5]
console.log(myArray); // [4, 5]
