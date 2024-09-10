const range = {
    from: 1,
    to: 5,

    next() {
        if (this.current <= this.to) {
            return { value: this.current++ }
        } else {
            return { done: true }
        }
    },

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    }
}

for (let item of range) {
    console.log(item);
}
