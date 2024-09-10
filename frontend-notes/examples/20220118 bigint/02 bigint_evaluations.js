// console.log(1n + 1);

// const f = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(+f);

// Округление
// console.log(20 / 3);
// console.log(20n / 3n);
// console.log('--------------------------------');

// Сравнение `BigInt` и `number`
// console.log(3n < 2.5);
// console.log(42n == 42);
// console.log(42n === 42);
// console.log('--------------------------------');

// Логические операции
// if (0n) {
//     console.log('then')
// } else {
//     console.log('else');
// }
// console.log('--------------------------------');

// console.log(!!42n);
// console.log(!!0n);
// console.log('--------------------------------');

// console.log(Boolean(42n));
// console.log(Boolean(0n));
// console.log('--------------------------------');

// console.log(0n || 42n);
// console.log(0n && 42n);
// console.log('--------------------------------');

// Побитовые операции
// console.log(456n >> 2n);

// Функции библиотеки `Math` НЕ могут работать с данными типа`BigInt`.
console.log(Math.max(1n, 2n));
