const shakespeare = 'To be, or not to be, that is the question!'

//#region Escape backslashes
// const regexp1 = /\w+ /
// const res1 = shakespeare.match(regexp1)
// console.log(res1)

// const regexp2 = new RegExp('\w+ ')
// const res2 = shakespeare.match(regexp2)
// console.log(res2)

// const regexp3 = new RegExp('\\w+ ')
// const res3 = shakespeare.match(regexp3)
// console.log(res3)
//#endregion Escape backslashes

//#region Constructor second parameter
// const regexp4 = new RegExp('\\w+ ', 'gi')
// const res4 = shakespeare.match(regexp4)
// // console.log(res4)
// console.log(regexp4)
//#endregion Constructor second parameter

//#region RegExp from RegExp
const regexp6 = new RegExp('\\w+ ', 'i')
const regexp5 = new RegExp(regexp6, '')
//const res5 = shakespeare.match(regexp5)
//console.log(res5)
console.log(regexp6)
console.log(regexp5)

// console.log(regexp5) // --> /\w+ /g
// const regexp7 = new RegExp(regexp5)
// console.log(regexp7) // --> /\w+ /g
//#endregion RegExp from RegExp

