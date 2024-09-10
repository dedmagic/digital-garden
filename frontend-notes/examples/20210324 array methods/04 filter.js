// let arr = [4, 3, 2, 9, 3, 45, 5, 2];

// let choosen = arr.filter(el => el > 4);
// console.log(choosen); // [ 9, 45, 5 ]

const arr = [0, null, 42, undefined, "", true, false, NaN, '', "foo bar"];
const trueOnly = arr.filter(Boolean);
console.log(trueOnly); // [42, true, "foo bar"]
