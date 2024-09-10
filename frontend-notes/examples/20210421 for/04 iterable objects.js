const set = new Set([1, 1, 2, 2, 3, 3]);
for (let item of set) {
    console.log(item);
}

console.log('-'.repeat(10));
const map = new Map([
    [1, 'one'],
    ['key2', 'two'],
    ['key3', 3]
]);
for (let [key, value] of map) {
    console.log(`map[${key}] = ${value}`);
}
