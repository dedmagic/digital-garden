const shakespeare = 'To be, or not to be, that is the question!'
const regexp = /on|no/ig

//#region String.prototype.search
// const res1 = shakespeare.search(regexp)
// console.log(res1)

// const res2 = 'Hello world!'.search(regexp)
// console.log(res2)

// const res3 = shakespeare.search(/to/ig)
// console.log(res3)
//#endregion String.prototype.search

//#region String.prototype.replace
// const res4 = shakespeare.replace(regexp, '42')
// console.log(res4)

// const res5 = shakespeare.replace(/to be/gi, '$2 $1')
// console.log(res5)
//#endregion String.prototype.replace

//#region String.prototype.replace with function
// function replacer(match, group1, group2, index, sourceString) {
//   // console.log({
//   //   match,
//   //   group1,
//   //   group2,
//   //   index,
//   //   sourceString
//   // })
//   return match.toUpperCase()
// }

// const res98 = shakespeare.replace(/(to) (be)/gi, replacer)
// console.log(res98)
//#endregion String.prototype.replace with function

//#region String.prototype.match with 'g' flag
// const res6 = shakespeare.match(/\w+/g)
// console.log(res6)
//#endregion String.prototype.match with 'g' flag

const message = 'Write to me at superman@yandex.com. By!'

//#region String.prototype.match without 'g' flag and without groups
// const atRegExp = /@/
// const res7 = message.match(atRegExp)
// console.log(res7)
// console.log(res7[0])
//#endregion String.prototype.match without 'g' flag and without groups

//#region String.prototype.match without 'g' flag and with groups
// const emailRegExp = /(\w+)@(\w+)\.(\w+)/
// const res8 = message.match(emailRegExp)
// // console.log(res8[0])
// // console.log(res8[1])
// // console.log(res8[2])
// // console.log(res8[3])
// console.log(res8)
//#endregion String.prototype.match without 'g' flag and with groups

//#region String.prototype.match without 'g' flag and with naming groups
// const emailRegExpNamingGroups = /(?<user>\w+)@(?<domain2>\w+)\.(?<domain1>\w+)/
// const res9 = message.match(emailRegExpNamingGroups)
// console.log(res9.groups.user)
// console.log(res9.groups.domain2)
// console.log(res9.groups.domain1)
// console.log(res9)

//#endregion String.prototype.match without 'g' flag and with naming groups

//#region String.prototype.match with 'g' and 'y' (sticky) flags
// const res10 = shakespeare.match(/\w+ /gy)
// console.log(res10)

// const res11 = 'To be or not to be that is the question '.match(/\w+ /gy)
// console.log(res11)
//#endregion String.prototype.match with 'g' and 'y' (sticky) flags

//----------------------------------

//#region String.prototype.match without 'g' and with 'y' and 'lastIndex'
// const wordWithSpaceRegExp = /\w+ /y
// const res12 = shakespeare.match(wordWithSpaceRegExp)
// console.log(res12[0])
// wordWithSpaceRegExp.lastIndex = 7
// const res13 = shakespeare.match(wordWithSpaceRegExp)
// console.log(res13[0])
//#endregion String.prototype.match without 'g' and with 'y' and 'lastIndex'

//#region String.prototype.match - not found
// const res97 = shakespeare.match('Billy Joel')
// console.log(res97)
//#endregion String.prototype.match - not found

//#region String.prototype.matchAll
// for (let word of shakespeare.matchAll(/\w+ /g)) {
//   console.log(word)
// }

// for (let word of shakespeare.matchAll(/\w+ /)) {
//   console.log(word[0])
// }
//#endregion String.prototype.matchAll

//#region String.prototype.split
// const res14 = shakespeare.split(/(\s)/)
// console.log(res14)
//#endregion String.prototype.split

//#region String.prototype.split with groups
const res15 = shakespeare.split(/([,!])/)
console.log(res15)
//#endregion String.prototype.split with groups
