console.time();
delay();
console.timeEnd();

// console.time('first');
// delay();
// console.time('second');
// delay();
// delay();
// console.timeEnd('first');
// delay();
// delay();
// console.timeEnd('second');

function delay() {
    for (let i = 0; i < 100000; i++) {
        let x = i ** 2;
    }
}
