# Тип `number`

## Определение типа значения

Операция `typeof` возвращает строку `number`.

```js
const num = 1234.56;

console.log(typeof num); // number
console.log(typeof num == 'number'); // true
```

## Внутреннее представление чисел

Значения типа `number` хранятся в 64-битном формате IEEE-754 (числа с плавающей точкой двойной точности). Т.к. внутреннее представление является двоичным, не все десятичные значения могут быть представлены точно.

```js
console.log(0.1 + 0.2 == 0.3); // false 
console.log(0.1 + 0.2); // 0.30000000000000004
```

## Литералы типа `number`

```js
console.log(1_000_000); // 1000000
console.log(1.2e9); // 1200000000
console.log(1000.); // 1000
console.log(.999); // 0.999

console.log(0xFF); // 255
console.log(0b10101); // 21
console.log(0o765); // 501
```

## Способы отображения

С помощью метода `toString` число можно преобразовать в любую систему счисления от 2 до 36.

Внимание! Результатом является строка.

```js
console.log(num.toString()); // 1234.56
console.log(num.toString(10)); // 1234.56
console.log(num.toString(16)); // 4d2.8f5c28f5c28
console.log(num.toString(2)); // 10011010010.10001111010111000010100011110101110000101
```

Этот метод, как и остальные, можно вызывать прямо на числовом литерале.

```js
console.log(1234.56.toString(16)); // 4d2.8f5c28f5c28
console.log(1234.0.toString(16)); // 4d2
console.log(1234..toString(16)); // 4d2
```

С помощью метода `toFixed` можно округлить число до нужного количества знаков после запятой.

Внимание! Результатом является строка.

```js
console.log(1234.56789.toFixed(2)); // 1234.57
```

## Обёртки `Number`

Методы типа `number` можно вызывать прямо на числовых литералах, потому что в подобных ситуациях для числа создаётся временная объектная обёртка типа `Number`, которая уничтожается после вызова метода.

```js
num.prop = 'Hello world';
console.log(num.prop); // undefined
```

В этом примере для значения типа `number`, хранящегося в переменной `num`, создаётся объект типа `Number`, у которого создаётся свойство `prop`. После завершения инструкции объект уничтожается. В следующей строке будет создан новый объект, у которого свойство `prop` отсутствует.

Подобные объекты можно создавать явно:

```js
const obj96 = new Number(96);
console.log(typeof obj96); // object
```

Внимание! Если вызвать функцию `Number` без ключевого слова `new`, то объект создан не будет, произойдёт просто преобразование значения в тип `number`:

```js
const num96 = Number(96);
console.log(typeof num96); // number
```

## Особые значения

Числовой тип имеет некоторые особые значения:
* `Infinity` и `-Infinity` – бесконечность; возникает при переполнении.
* `NaN` – "не число" (not a number); возникает, если в процессе числовых вычислений (или преобразования типов) получилось не число.

```js
console.log(typeof Infinity); // number
console.log(typeof NaN); // number
```

Определять, является ли число конечным, можно или через сравнение со значением `Infinity`, или с помощью метода `Number.isFinity()`:

```js
console.log(Number.isFinite(num / 0)); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(42)); // true
```

Есть два разных `NaN` – свойство глобального объекта и свойство типа `Number`:

```js
console.log(global.NaN); // NaN
console.log(Number.NaN); // NaN
```

`NaN` не равен любому другому значению, включая другое значение `NaN`:

```js
console.log(NaN == NaN); // false
console.log(Number.NaN == Number.NaN); // false
```

Поэтому проверку на `NaN` можно осуществлять либо методом `Number.isNaN()`, либо одноименным методом глобального объекта:

```js
console.log(Number.isNaN(NaN)); // true
console.log(isNaN(NaN)); // true
console.log(Number.isNaN(42)); // false
console.log(isNaN(42)); // false

console.log(Number.isNaN("Hello world")); // false
console.log(isNaN("Hello world")); // true
```

Внимание! Методы `isNaN()` типа `Number` и глобального объекта работают по-разному: первый возвращает `true` только если значение _сейчас_ равно `NaN`, второй – если значение сейчас равно `NaN` или станет ему равно после приведения к числовому типу.

## Преобразование

Для преобразования значения в целое или вещественное число используются методы `Number.parseInt` и `Number.parseFloat`. Оба преобразуют в число начало строки до первого недопустимого символа:

```js
console.log(Number.parseInt("42")); // 42
console.log(Number.parseInt("42px")); // 42
console.log(Number.parseInt("42.42")); // 42
console.log(Number.parseInt("Hello world")); // NaN

console.log(Number.parseFloat("42.42")); // 42.42
console.log(Number.parseFloat("42.42px")); // 42.42
console.log(Number.parseFloat("42.42.42px")); // 42.42
console.log(Number.parseFloat("Hello world")); // NaN
```

У метода `Number.parseInt` может быть указан второй параметр – основание системы счисления:

```js
console.log(Number.parseInt("0xFF", 16));
console.log(Number.parseInt("FF", 16));
```

Определить, является ли число целым, можно с помощью метода `Number.isInteger`:

```js
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.42)); // false
```

## Округление

```js
console.log(Math.floor(3.3)); // 3
console.log(Math.floor(3.8)); // 3
console.log(Math.ceil(3.3)); // 4
console.log(Math.ceil(3.8)); // 4
console.log(Math.round(3.3)); // 3
console.log(Math.round(3.8)); // 4
console.log(Math.trunc(3.3)); // 3
console.log(Math.trunc(3.8)); // 3
```

## Другие методы и константы

```js
console.log(Math.random()); // какое-то число
console.log(Math.max(42, 96, -Infinity, 13)); // 96
console.log(Math.min(42, 96, -Infinity, 13)); // -Infinity
console.log(Number.EPSILON); // Наименьший интервал между двумя представимыми числами
console.log(Number.MAX_SAFE_INTEGER); // Максимальное целое число, которое можно безопасно использовать в JavaScript (2**53 - 1)
console.log(Number.MIN_SAFE_INTEGER); // Минимальное целое число, которое можно безопасно использовать (-(2**53 - 1))
console.log(Number.MAX_VALUE); // Наибольшее представимое положительное число
console.log(Number.MIN_VALUE); // Наименьшее представимое положительное число, т.е. самое близкое к нулю положительное число
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
```