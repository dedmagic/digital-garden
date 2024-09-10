const obj1 = {
    x: 1,
    y: new Date(),
    toJSON: function () {
        return `${this.y.toLocaleDateString()} ${this.x}`;
    }
}

const json1 = JSON.stringify(obj1);
console.log(json1);
