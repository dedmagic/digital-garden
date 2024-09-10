const bob = {
    name: 'Bob Dylan',
    hello() {
        console.log(`Hello ${this.name}!`);
    }
}

// bob.hello();
// setTimeout(bob.hello, 1000);
// //setInterval(bob.hello, 1000);

// setTimeout(bob.hello.bind(bob), 1000);


class Man {
    constructor(name) {
        this.name = name;
    }

    helloNormal() {
        console.log(`Hello ${this.name}!`);
    }

    helloArrow = () => {
        console.log(`Hello ${this.name}!`);
    }
}

const mark = new Man('Mark Knopfler');
mark.helloNormal();
mark.helloArrow();
setTimeout(mark.helloNormal, 1000);
setTimeout(mark.helloArrow, 1000);
