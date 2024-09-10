const arr = [0, 1, 2, 3, 4];
for (let item of arr) {
    console.log(item);
}
console.log(...arr);

const str = 'Hello world';
for (let char of str) {
    console.log(char);
}
console.log(...str);

const set = new Set(arr);
console.log(...set);
