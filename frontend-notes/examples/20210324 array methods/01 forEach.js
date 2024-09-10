let array = [4, 3, 2, 9, 7, 5];

array.forEach(el => console.log(el));
console.log('----------------');
array.forEach((el, ind) => console.log({ el, ind }));
console.log('----------------');
array.forEach((el, ind, arr) => console.log({ el, ind, arr }));
