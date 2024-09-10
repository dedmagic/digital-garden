const user1 = {
    name: 'Mark Knopfler',
    hello() {
        console.log(`Hello ${this.name}!`);
    }
}

user1.hello();

const user2 = {
    name: 'Mark Knopfler',

    hello() {
        function getGreeting() {
            return `Hello ${this.name}!`;
        }
        console.log(getGreeting());
    }

}

user2.hello();


const user3 = {
    name: 'Mark Knopfler',

    hello() {
        const getGreeting = () => `Hello ${this.name}!`;
        console.log(getGreeting());
    }

}

user3.hello();
