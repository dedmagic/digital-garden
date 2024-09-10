# Значения `null` и `undefined`

## Ситуации возникновения значения `undefined`

+ Кейс 1: объявленная, но не инициализированная переменная
```javascript
let x;
console.log(x); // undefined
```

+ Кейс 2: несуществующий элемент массива
```javascript
let arr = [1, 2];
console.log(arr[2]); // undefined
```

+ Кейс 3: несуществующее свойство объекта
```javascript
let obj = { prop1: 42 };
console.log(obj.prop2); // undefined
```

+ Кейс 4: не указанные при вызове функции значения параметров
```javascript
let func = function (a, b) {
    console.log(a, b);
    return;
}

func(42); // 42 undefined
func();   // undefined undefined
```

+ Кейс 5: значение, возвращаемое функцией без `return` или с `return` без выражения
```javascript
let func = function (a, b) {
    return; // или return нет вообще
}

let y = func(1, 2);
console.log(y); // undefined
```

## Проверка на null и undefined

При строгом сравнении `null` равен только `null`, `undefined` равен только `undefined`.

```javascript
const value_null = null;
const value_undefined = undefined;
const value = { prop: 42 };

console.log(value_null === null);      // true
console.log(value_undefined === null); // false
console.log(value === null);           // false

console.log(value_null === undefined);      // false
console.log(value_undefined === undefined); // true
console.log(value === undefined);           // false
```

При нестрогом сравнении `null` и `undefined` равны друг другу.

```javascript
console.log(value_null == value_undefined); // true
```

## Тип значений

Значение `null` является единственным значением одноимённого типа `null`. Аналогично, значение `undefined` является единственным значением одноимённого типа `undefined`.

```javascript
console.log(typeof undefined); // строка 'undefined'
console.log(typeof value_undefined === 'undefined'); // true
console.log(typeof null); // строка 'object' – ошибка в реализации JavaScript
```

Проверять, содержит ли переменная значение `undefined`, лучше через `typeof`, а не через равенство, т.к. при отсутствии переменной (ещё не объявлена) первая проверка сработает, а вторая вызовет исключение.

```javascript
// переменная `z` не объявлена
console.log(typeof z === 'undefined'); // true
console.log(z === undefined); // ReferenceError: z is not defined
```

## Автоматическое преобразование в логическое значение

Оба пустых значения являются _false_-значениями.

```javascript
if (value_null) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}
// => FALSE

if (value_undefined) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}
// => FALSE
```

## `??` – оператор нулевого слияния (nullish coalescing)

```javascript
console.log(value_null ?? 42);      // 42 
console.log(value_undefined ?? 42); // 42
```

От широко используемой раньше операции "_или_" отличается тем, что "_или_" сработает на любое _false_-значение, а оператор нулевого слияния – только на `null` и `undefined`.

```javascript
console.log(value_null || 42);      // 42 
console.log(value_undefined || 42); // 42
console.log("" || 42)               // 42
console.log(0 || 42)                // 42
```

## `?.` – оператор опциональной последовательности (optional chaining)

```javascript
console.log(value_null?.prop); // undefined
console.log(value_undefined?.prop); // undefined
console.log(value_null?.prop?.one_more_prop); // undefined
console.log(value_null?.prop ?? 42); // 42
console.log(value_undefined?.prop ?? 42); // 42
```

Другие формы использования оператора опциональной последовательности

```javascript
console.log(value_null?.['prop']); // undefined
arr = null;
console.log(arr?.[0]); // undefined
func = null;
console.log(func?.(2, 3));  // undefined

console.log(value_undefined?.['prop']);  // undefined
arr = undefined;
console.log(arr?.[0]);  // undefined
func = undefined;
console.log(func?.(2, 3));  // undefined
```

## Различие между `null` и `undefined` и их применение

> Значение `undefined` можно рассматривать как признак неожиданного или ошибочного отсутствия какого-либо значения, a `null` – как признак обычного или вполне ожидаемого отсутствия значения. Если в программе потребуется присвоить одно из этих значений переменной или свойству или передать одно из этих значений функции, практически всегда предпочтительнее использовать значение `null`.

Из книги Дэвида Флэнагана "_JavaScript. Подробное руководство_" (6-е издание, 2012 год)