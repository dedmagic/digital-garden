const shakespeare = 'To be, or not to be, that is the question!'

//#region RegExp.prototype.test
// const regexp1 = /be/g;
// let res1 = regexp1.test(shakespeare)
// // console.log(res1)

// regexp1.lastIndex = 20;
// res1 = regexp1.test(shakespeare)
// console.log(res1)
//#endregion RegExp.prototype.test

const message = 'Write to me at superman@yandex.com. By!'

//#region RegExp.prototype.exec without `g` and without groups
// const atRegExp = /@/
// const res2 = atRegExp.exec(message)
// console.log(res2)
// console.log(res2[0])
//#endregion RegExp.prototype.exec without `g` and without groups

//#region RegExp.prototype.exec without `g` and with groups
// const emailRegExp = /(\w+)@(\w+)\.(\w+)/
// const res3 = emailRegExp.exec(message)
// console.log(res3[0])
// console.log(res3[1])
// console.log(res3[2])
// console.log(res3[3])

// // console.log(res3)
//#endregion RegExp.prototype.exec without `g` and with groups

//#region RegExp.prototype.exec without 'g' flag and with naming groups
// const emailRegExpNamingGroups = /(?<user>\w+)@(?<domain2>\w+)\.(?<domain1>\w+)/
// const res4 = emailRegExpNamingGroups.exec(message)
// console.log(res4.groups.user)
// console.log(res4.groups.domain2)
// console.log(res4.groups.domain1)
//#endregion RegExp.prototype.exec without 'g' flag and with naming groups

//#region RegExp.prototype.exec with 'g'
const regexp5 = /\w+/g;
// console.log({ lastIndex: regexp5.lastIndex })

// const res51 = regexp5.exec(shakespeare)
// console.log(res51)
// console.log({ lastIndex: regexp5.lastIndex })

// const res52 = regexp5.exec(shakespeare)
// console.log(res52)
// console.log({ lastIndex: regexp5.lastIndex })

let res53;
while ((res53 = regexp5.exec(shakespeare)) !== null) {
  // console.log({ word: res53[0] })
  console.log({ word: res53[0], lastIndex: regexp5.lastIndex })
}
//#endregion RegExp.prototype.exec with 'g'
