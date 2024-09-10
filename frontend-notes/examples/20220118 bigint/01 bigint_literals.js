// Максимально допустимое целое значение типа `Number`
const maxInt = Number.MAX_SAFE_INTEGER;
// const maxInt = 2**53 - 1;
console.log(maxInt);
console.log(maxInt + 1);
console.log(maxInt + 2);
console.log('--------------------------------');

// Литералы типа BigInt
const bi = 9007199254740991n;
console.log(typeof bi);

console.log(bi);
console.log(bi + 1n);
console.log(bi + 2n);

console.log(bi * 2n);
console.log('--------------------------------');

// Двоичные, восьмеричные и шестнадцатиричные литералы
console.log(0b11111100101n); // 2021
console.log(0o743n); // 483
console.log(0xFA09n); // 64009

console.log('--------------------------------');

// Функция преобразования типа `BigInt()`
const c = BigInt(654);
console.log(c);

const d = BigInt("321");
console.log(d);

const e = BigInt("0x1fffffffffffff");
console.log(e);

const f = BigInt("0b11111111111111111111111111111111111111111111111111111");
console.log(f);
