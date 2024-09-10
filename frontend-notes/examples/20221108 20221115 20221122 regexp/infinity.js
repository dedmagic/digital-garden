const shakespeare = 'To be, or not to be, that is the question!'

let res;
while ((res = /\w+/g.exec(shakespeare)) !== null) {
  console.log({ word: res[0], time: new Date() })
}
