//#region infinity loop - don't run!!! Run `node infinity.js`
// const shakespeare = 'To be, or not to be, that is the question!'

// let res6;
// while ((res6 = /\w+/g.exec(shakespeare)) !== null) {
//   console.log({ word: res6[0] })
// }
//#endregion infinity loop

//region Wrong reuse regexp
const words = ['apple', 'book', 'coffee']
const doubleLetters = /(\w)\1/g;
for (let word of words) {
  if (doubleLetters.test(word)) {
    // console.log(word)
    console.log({ word, lastIndex: doubleLetters.lastIndex })
  }
}
//endregion Wrong reuse regexp