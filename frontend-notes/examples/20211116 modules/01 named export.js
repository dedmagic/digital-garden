import './math_addition.js';

console.clear();

const x = add(1, 2);
console.log(`x = ${x}`);

const y = sub(42, 12);
console.log(`y = ${y}`);

// const z = ZERO;

// ---------------------------------------------------------

console.clear();

import { mult, division, ONE } from './math_multiply.js';

const a = division(42, ONE);
console.log(`a = ${a}`);

// ---------------------------------------------------------

console.clear();

import * as mltply from './math_multiply.js';

const b = mltply.division(1024, 256);
console.log(`b = ${b}`);
