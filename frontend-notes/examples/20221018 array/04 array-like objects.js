// const obj = {
//   '0': 42,
//   '1': 96,
//   '7': 123,
//   length: 5
// }

// const arr = Array.from(obj);
// console.log(arr);

// const arr2 = [...obj];

// Вызвать метод массива для массивоподобного объекта
const numbers = {
  '0': 42,
  '1': 96,
  '2': 13,
  '3': 123,
  length: 4
}

// const bigs = numbers.filter(item => item > 50); // --> TypeError: numbers.filter is not a function

// (a) call
const bigs1 = Array.prototype.filter.call(numbers, item => item > 50);
console.log(bigs1);

// (b) Array.from().filter()
const bigs2 = Array.from(numbers).filter(item => item > 50);
console.log(bigs2);

// (c) change type to Array
numbers.__proto__ = Array.prototype
const bigs3 = numbers.filter(item => item > 50);
console.log(bigs3)
