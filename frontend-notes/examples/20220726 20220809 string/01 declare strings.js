const heart = '❤';
console.log(heart.length);

const love = '💘';
console.log(love.length);
console.log(love[0], love[1]);

let count = 1;
for (let char of love) {
    console.log(char, count);
    count++;
}

const publishing1 = "Издательство O'Reilly";
console.log(publishing1);
const publishing2 = 'Издательство O\'Reilly';
console.log(publishing2);
const publishing3 = `Издательство O'Reilly`;
console.log(publishing3);

const str1 = String('string');
console.log(typeof str1);
// str1.meta = 'Metadata';

const str2 = new String('string');
console.log(typeof str2);
str2.meta = 'Metadata';
console.log(str2.meta);

const str3 = 'Это всё \
одна строка, \
yeh bro!';
console.log(str3);
