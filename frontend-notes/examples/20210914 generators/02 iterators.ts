function getSquaresArr(n: number): number[] {
    let result: number[] = [];
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

//function* getSquaresGen(n: number): number[] {
function* getSquaresGen(n: number): IterableIterator<number> {
    for (let i = 1; i <= n; i++) {
        yield i ** 2;
    }
}

const squaresGen = getSquaresGen(9);
//const squaresGen: IterableIterator<number> = getSquaresGen(9);
for (const square of squaresGen) {
    console.log(square);
}

// console.log('-----------------------------');

//console.log(squaresArr[Symbol.iterator]);
const squaresArrIter: IterableIterator<number> = squaresArr[Symbol.iterator]();
for (const square of squaresArrIter) {
    console.log(square);
}

//function* getSquaresGen(n: number): IterableIterator<number> {
