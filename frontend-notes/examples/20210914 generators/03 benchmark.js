function getSquaresArr(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i ** 2);
    }
    return result;
}

function* getSquaresGen(n) {
    for (let i = 1; i <= n; i++) {
        yield i ** 2;
    }
}

console.time('Array');
for (let i = 0; i < 10_000; i++) {
    const tmp = getSquaresArr(999);
}
console.timeEnd('Array');

console.time('Generator');
for (let i = 0; i < 10_000; i++) {
    const tmp = getSquaresGen(999);
}
console.timeEnd('Generator');

console.time('Array');
for (let i = 0; i < 10_000; i++) {
    const tmp = getSquaresArr(999);
}
console.timeEnd('Array');
