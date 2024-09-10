// Переименование при импорте
import { add as plus, sub as minus } from './math_addition.js';

const x = plus(1, 2);
console.log(`x = ${x}`);

// ---------------------------------------------------------

import { multiply, devide, THE_ONE } from './math_multiply.js';

console.clear();

const a = devide(42, THE_ONE);
console.log(`a = ${a}`);
