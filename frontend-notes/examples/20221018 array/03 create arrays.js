//#region array literal
const arr1 = [];
console.log(arr1);

const arr2 = [1, 2, 3, 4];
console.log(arr2);
//#endregion array literal


//#region new Array
const arr3 = new Array(1, 2, 3, 4);
// console.log(arr3);

// const arr4 = new Array(6);
// console.log(arr4);
//#endregion new Array

//#region Array.of
const arr5 = Array.of(1, 2, 3, 4);
console.log(arr5);

// const arr6 = Array.of(6);
// console.log(arr6);
//#endregion Array.of

//#region Array.from
const str = 'Hello world!';
// const arr7 = Array.from(str);
// console.log(arr7);

const set = new Set();
set.add(42);
set.add(96);
set.add(13);

// const arr8 = Array.from(set);
// console.log(arr8);

// const arr9_1 = Array.from(set, item => item * 2);
// console.log(arr9_1);
// const arr9_2 = Array.from(set).map(item => item * 2);
// console.log(arr9_2);

const arr10 = new Array(4);
// console.log(arr10);
// const arr11 = Array.from(arr10);
// console.log(arr11);
//#endregion Array.from

//#region spread
const arr12 = [...set];
console.log(arr12);

const arr13 = [...str];
console.log(arr13);

const arr14 = [...arr10];
console.log(arr14);
//#endregion spread
