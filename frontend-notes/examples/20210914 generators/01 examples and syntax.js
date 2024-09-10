function getSquaresArr(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i ** 2);
    }
    return result;
}

const squaresArr = getSquaresArr(9);
for (const square of squaresArr) {
    console.log(square);
}

console.log('-----------------------------');

function* getSquaresGen(n) {
    for (let i = 1; i <= n; i++) {
        yield i ** 2;
    }
}

const squaresGen = getSquaresGen(9);
for (const square of squaresGen) {
    console.log(square);
}

console.log('-----------------------------');

function* genDemo() {
    yield 1;
    yield 2;
    yield 3;
}

// что там внутри?
const arr0 = squaresArr[0];
console.log(arr0);

const gen0 = squaresGen[0];
console.log(gen0);
