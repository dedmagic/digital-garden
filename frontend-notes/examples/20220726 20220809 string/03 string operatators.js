const str1 = 'Just string';
const str2 = 'One more string';

console.log(str1 + str2);

console.log('µ' === 'μ');

const str = 'Hello, world';
console.log(str[0]);
console.log(str[str.length - 1]);
// str[0] = 'Y';

console.log(typeof str[0]);

const love = '💘';
console.log(love.length);
console.log(love[0], love[1]);

for (let char of love) {
    console.log(char);
}

for (let i = 0; i < love.length; i++) {
    console.log(love[i]);
}
