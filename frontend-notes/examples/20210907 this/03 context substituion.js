function beginConversation(greeting, smile) {
    console.log(`${greeting} ${this.name}! ${smile}`);
}

// beginConversation('Hi', '8-0');

const mark = {
    name: 'Mark Knopfler'
};

const michael = {
    name: 'Michael Jackson'
};

// beginConversation.call(mark, 'Hello', '=D');
// beginConversation.apply(michael, ['Goodby', ':(']);

const helloMark1 = beginConversation.bind(mark);
// helloMark1('Hi', ':D');
// helloMark1.call(michael, 'Hello', '=D');

const helloMark2 = beginConversation.bind(mark, 'Hello', '=D');
// helloMark2();
// helloMark2('Hi', '');

const hello = () => { console.log(`Hello ${this.name}`) };
// hello();
// hello.call(mark);

const bob = {
    name: 'Bob Dylan',
    hello() {
        console.log(`Hello ${this.name}!`);
    }
}

bob.hello();
bob.hello.call(mark);
const helloMichael = bob.hello.bind(michael);
helloMichael();
