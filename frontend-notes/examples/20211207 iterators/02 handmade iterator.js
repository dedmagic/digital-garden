const range = {
    from: 1,
    to: 5,

    getIterator: function () {
        return { // begin iterator
            current: this.from,
            last: this.to,

            next() {
                if (this.current <= this.last) {
                    return { value: this.current++, done: false } // return { value: this.current++ }
                } else {
                    return { value: undefined, done: true } // return { done: true }
                }
            }
        } // end iterator
    }
}

// #region manually getting values
const iterator = range.getIterator();

let iteration_result = iterator.next();
console.log(iteration_result.value);

iteration_result = iterator.next();
console.log(iteration_result.value);

iteration_result = iterator.next();
console.log(iteration_result.value);

iteration_result = iterator.next();
console.log(iteration_result.value);

iteration_result = iterator.next();
console.log(iteration_result.value);

iteration_result = iterator.next();
console.log(iteration_result.value);
// #endregion manually getting values

// #region getting iteration results
// const iterator = range.getIterator();

// let iteration_result = iterator.next();
// console.log(iteration_result);

// iteration_result = iterator.next();
// console.log(iteration_result);

// iteration_result = iterator.next();
// console.log(iteration_result);

// iteration_result = iterator.next();
// console.log(iteration_result);

// iteration_result = iterator.next();
// console.log(iteration_result);

// iteration_result = iterator.next();
// console.log(iteration_result);
// #endregion getting iteration results

//#region getiing values in loop
// const iterator = range.getIterator();

// let iteration_result = iterator.next();
// while (!iteration_result.done) {
//     console.log(iteration_result.value);
//     iteration_result = iterator.next();
// }
//#endregion getiing values in loop
