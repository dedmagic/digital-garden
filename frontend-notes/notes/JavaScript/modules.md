# Модули в JavaScript

## Именованный экспорт

### Экспортирующий модуль

```js
// Файл math_addition.js

// "Приватная" функция
function debug(msg) {
  console.log(msg);
}

// "Публичные" функции и константа
export function add(a, b) {
  debug('Addition');
  return a + b;
}

export function sub(a, b) {
  debug('Substration');
  return a - b;
}

export const ZERO = 0;
```

* Экспортировать можно всё, что угодно: функции, классы, объекты, константы и т.д.

### Импорт в случае именованного экспорта

```js
// Файл index.js
import { add, sub } from './math_addition.js';

const x = add(1, 2); // Addition
console.log(`x = ${x}`); // x = 3

const y = sub(42, 12); // Substration
console.log(`y = ${y}`); // y = 30

const z = ZERO; // ReferenceError: ZERO is not defined
```

* Имя импортируемого модуля обязательно должно начинаться с "/", "./", "../", иначе считается, что это библиотечный модуль (установленный с помощью npm). Однако некоторые сборщики, например webpack, умеют обходить это ограничение
* Имя экспортируемого файла может быть заключено в кавычки или апострофы, обратные апострофы нельзя
* Директива `import` допустима только на верхнем уровне модуля, нельзя её использовать внутри функций
* Директива `import` может находится в любом месте кода, происходит автоматический hoisting. Но принято все директивы `import` записывать в начале
* Код из всех импортируемых модулей выполняется ДО кода импортирующего модуля
* Не обязательно импортировать из модуля всё, можно только необходимое

### Централизованный именованный экспорт

```js
// Файл math_multiply.js

function debug(msg) {
  console.log(msg);
}

function mult(a, b) {
  debug('Multiply');
  return a * b;
}

function division(a, b) {
  debug('Division');
  return a / b;
}

const ONE = 1;

export { mult, division, ONE };
```

Все экспортируемые элементы указываются в одном месте. Импорт в этом случае ничем не отличается от рассмотренного выше:

```js
import { mult, division, ONE } from './math_multiply.js';

const a = division(42, ONE); // Division
console.log(`a = ${a}`); // a = 42

```

### Импорт из модуля всего экспортируемого

```js
// Файл index.js

import * as other_module from './math_multiply.js';

const b = other_module.division(1024, 256); // Division
console.log(`b = ${b}`); // b = 4
```

* Импорт со звёздочкой создаёт объект с константными свойствами
* С помощью звёздочки не импортируются экспорты по умолчанию

## Экспорт по умолчанию

```js
// Файл main_answer.js

const MAIN_ANSWER = 42;

export default function getMainAnswer() {
  return MAIN_ANSWER;
}
```

* Директива `export default` может быть в модуле только одна
* Экспортировать по умолчанию можно неименованные объекты (в отличии от именованного экспорта), например, объектный литерал

```js
// Файл index.js
import getMainAnswer from './main_answer.js';

console.log(getMainAnswer()); // 42
```

* Имя импортируемого объекта задаётся при импорте, т.е. может отличаться от того имени, которое задано в экспортирующем модуле
* С помощью "звёздочки" нельзя импортировать экспорт по умолчанию
* В одном модуле может быть и именованные экспортируемые элементы, и один экспортируемый по умолчанию, но так делать не принято

## Переименование при импорте/экспорте

### Переименование при импорте
При импорте именованных элементов их можно переименовать:

```js
// Файл math_addition.js

function debug(msg) {
  console.log(msg);
}

export function add(a, b) {
  debug('Addition');
  return a + b;
}

export function sub(a, b) {
  debug('Substration');
  return a - b;
}

export const ZERO = 0;

// Файл index.js

import { add as plus, sub as minus } from './math_addition.js';

const x = plus(1, 2);
console.log(`x = ${x}`);
```

### Переименование при экспорте

Можно экспортировать элементы под именами, отличными от данных "при рождении". С точки зрения импортирующего кода ничего не меняется.

```js
// Файл math_multiply.js

function debug(msg) {
  console.log(msg);
}

function mult(a, b) {
  debug('Multiply');
  return a * b;
}

function division(a, b) {
  debug('Division');
  return a / b;
}

const ONE = 1;

export { mult as multiply, division as devide, ONE as THE_ONE };

// Файл index.js

import { multiply, divide, THE_ONE } from './math_multiply.js';

const a = divide(42, ONE); // Division
console.log(`a = ${a}`); // a = 42
```

---------

Стоит упомянуть о таких вещах, как

* Реэкспорт
* CommonJS в Node.js
* Динамический импорт (ES2020)
