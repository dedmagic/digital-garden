const range = {
    from: 1,
    to: 5,

    getIterator: function () {
    //#region hidden
    // [Symbol.iterator]: function () {
    //#endregion hidden
        return {
            current: this.from,
            last: this.to,

            next() {
                if (this.current <= this.last) {
                    return { value: this.current++ }
                } else {
                    return { done: true }
                }
            }
        }
    }
}

for (let item of range) {
    console.log(item);
}

// При каждом итерировании итератор получается заново
for (let item of range) {
    console.log(item);
}
