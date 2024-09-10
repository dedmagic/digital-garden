const regexp = /\w+ /gi;

//console.log(regexp.source)

//#region lastIndex: read & write
// console.log(regexp.lastIndex)
// regexp.lastIndex = 10;
// console.log(regexp.lastIndex)
//#endregion lastIndex: read & write

//#region flags
//console.log(regexp.flags)

// console.log(regexp.global) // flag 'g'
// console.log(regexp.ignoreCase) // flag 'i'
// console.log(regexp.multiline) // flag 'm'
//console.log(regexp.dotAll) // flag 's'
// console.log(regexp.sticky) // flag 'y'
// console.log(regexp.unicode) // flag 'u'
// console.log(regexp.hasIndices) // flag 'd'
// //#endregion flags

const shakespeare = 'To be,\r\n or not to be,\r\n that is the question!'
// console.log(shakespeare)

//#region flag 'm' - multiline
// const regexp1 = /,$/g
// const res1 = shakespeare.match(regexp1)
// console.log(res1)

// const regexp2 = /,$/gm
// const res2 = shakespeare.match(regexp2)
// console.log(res2)
//#endregion flag 'm' - multiline

//#region flag 's' - dotAll
// const regexp3 = /,.+ /g
// const res3 = shakespeare.match(regexp3)
// console.log(res3)

// const regexp4 = /,.+ /gs
// const res4 = shakespeare.match(regexp4)
// console.log(res4)

// выключаем "жадность", включаем "ленивость"
// const regexp5 = /,.+? /gs
// const res5 = shakespeare.match(regexp5)
// console.log(res5)
//#endregion flag 's' - dotAll

//#region flag 'u' - unicode
// const regexp6 = /./g
// const res6 = '💘'.match(regexp6)
// console.log(res6)

// const regexp7 = /./gu
// const res7 = '💘'.match(regexp7)
// console.log(res7)
//#endregion flag 'u' - unicode
