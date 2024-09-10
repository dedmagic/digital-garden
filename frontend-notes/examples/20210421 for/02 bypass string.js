const str = 'Hello world!';

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

console.log('-'.repeat(10));
for (let char of str) {
    console.log(char);
}

console.log('-'.repeat(10));
for (let index in str) {
    console.log(`str[${index}] = ${str[index]}`);
}
