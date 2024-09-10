const range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() {
        for (let i = this.from; i <= this.to; i++) {
            yield i;
        }
    }
}

for (let item of range) {
    console.log(item);
}
