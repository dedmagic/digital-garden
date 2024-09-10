# Методы массивов

* [Выполнение функции (callback) для каждого элемента массива (`forEach`)](#foreach)
* [Объект контекста (`this`) в функциях `forEach`, `map`, `filter`, `flatMap`](#this)
* [Проекция данных (`map`)](#map)
* [Выборка элементов (`filter`)](#filter)
  * [Удаление всех `false`-значений (`filter`)](#remove-falsy)
* [Поиск элемента в массиве (`find`)](#find)
* [Проверка: все элементы соответствуют условию (`every`)](#every)
* [Проверка: хотя бы один элемент соответствует условию (`some`)](#some)
* [Сортировка массива (`sort`)](#sort)
  * [Использование сортировки в цепочках (`sort`)](#sort-in-pipe)
* [Проверка нескольких условий (`includes`)](#includes)
* [Спрямление вложенности (`flat`)](#flat)
* [Два в одном: `map` + `flat` (`flatMap`)](#flatMap)
* [Вычисление аггрегирующего значения (`reduce`)](#reduce)

<div id='foreach' />

### Выполнение функции (callback) для каждого элемента массива (`forEach`) 

```javascript
let array = [4, 3, 2, 9, 7, 5];

array.forEach(el => console.log(el));
console.log('----------------');
array.forEach((el, ind) => console.log({el, ind}));
console.log('----------------');
array.forEach((el, ind, arr) => console.log({el, ind, arr}));
```

<div id='this' />

### Объект контекста (`this`) в функциях `forEach`, `map`, `filter`, `flatMap` <div id='this' />
```javascript
class SpeakingMan {
    constructor (name) {
        this.name = name;
    }

    say(phrase) {
        console.log(`${this.name} says ${phrase}`);
    }

    speech(phrases) {
        phrases.forEach(function(phrase) {
            this.say(phrase);
        });
        // phrases.forEach(function(phrase) {
        //     this.say(phrase);
        // }, this);
        //phrases.forEach(phrase => this.say(phrase));        
    }
}

let mark = new SpeakingMan('Mark Knopfler');
mark.say('Hello!');

mark.speech(['Hello everybody!', 'Peace to all!', 'Sex, drugs and rock-n-roll!']);
```
<div id='map' />

### Проекция данных (`map`)
```javascript
var nums = [10, 20, 30, 40];
// Возведение числа в степень, соответствующую его индексу в массиве
var results = nums.map((num, index) => Math.pow(num, index));

// Исходный массив nums не изменяется
console.log(nums); // [10, 20, 30, 40]

// Результат выполнения map, записанный в переменную
console.log(results); // [1, 20, 900, 64000]
```

<div id='filter' />

### Выборка элементов (`filter`)

```javascript
let arr = [4, 3, 2, 9, 3, 45, 5, 2];

let choosen = arr.filter(el => el > 4);
console.log(choosen); // [ 9, 45, 5 ]
```

<div id='remove-falsy' />

### Удаление всех `false`-значений (`filter`)
```javascript
const arr = [0, null, 42, undefined, "", true, false, NaN, '', "foo bar"];
const trueOnly = arr.filter(Boolean);
console.log(trueOnly); // [42, true, "foo bar"]
```

<div id='find' />

### Поиск элемента в массиве (`find`)
```javascript
const arr = [
  { name: 'Den', weight: 70, iq: 130 },
  { name: 'Andrew', weight: 60, iq: 120 },
  { name: 'Korepanych', weight: 135, iq: -200 },
];

let dude = arr.find(el => el.name === 'Korepanych');
console.log(dude);

let smarts = arr.find(el => el.iq > 100); // Найдёт первого
console.log(smarts);
```

Примечание: если элементов, соответствующих условию, больше одного, то будет найден первый из них.

<div id='every' />

### Проверка: все элементы соответствуют условию (`every`)
```javascript
var arr1 = [5, 5, 5, 6, 5, 5];
var result1 = arr1.every(el => el === 5);
console.log(result1); // false

var arr2 = [5, 5, 5, 5, 5, 5];
var result2 = arr2.every(el => el === 5);
console.log(result2); // true
```

<div id='some' />

### Проверка: хотя бы один элемент соответствует условию (`some`)
```javascript
var arr = [1, 2, 3, 4, 5];
var result1 = arr.some(el => el > 3);
console.log(result1); // true

var result2 = arr.some(el => el > 7);
console.log(result2); // false
```

<div id='sort' />

### Сортировка массива (`sort`)
```javascript
let arr = [4, 3, 2, 9, 3, 45, 5, 2];
console.log(arr);

arr.sort(); // (1) Изменение "по месту" (2) Строковое сравнение
console.log(arr);

arr.sort((a,b) => a-b); // Правильная сортировка числового массива
console.log(arr);
```
Примечание 1. Сортировка происходит "по месту", т.е. изменяется исходный массив.

Примечание 2. По умолчанию перед сравнением элементы приводятся к строке.

<div id='sort-in-pipe' />

### Использование сортировки в цепочках (`sort`)
```javascript
const cities = [
    { name: 'Kaliningrad', population: 482443 },
    { name: 'Moscow', population: 12506468 },
    { name: 'Novosibirsk', population: 1612833 },
    { name: 'Saint Petersburg', population: 5351935 },
    { name: 'Kaluga', population: 336726 }
];

cities.filter(e => e.population < 1000000)
      .sort((a, b) => b.population - a.population)
      .forEach(e => console.log(e.name + ': ' + e.population));

console.log(cities);

cities.sort((a, b) => b.population - a.population)
      .filter(e => e.population < 1000000)      
      .forEach(e => console.log(e.name + ': ' + e.population));

console.log(cities);
```
В обеих обработках результат одинаковый, но первая не изменяет исходный массив, т.к. `sort` применяется к копии массива, которую возвращает метод `filter`. Во втором случае `sort` применяется к исходному массиву, поэтому он будет изменён.

<div id='includes' />

### Проверка нескольких условий (`includes`)
```javascript
let value = 'one';
//let value = 'three';

// Обычная запись
if (value === 1 || value === 'one' || value === 2 || value === 'two') {
    console.log('do something');
}

// Короткая запись №1
if ([1, 'one', 2, 'two'].indexOf(value) >= 0) {
    console.log('do something');
}

// Короткая запись №2
if ([1, 'one', 2, 'two'].includes(value)) { 
    console.log('do something');
}
```

<div id='flat' />

### Спрямление вложенности (`flat`)

Вложеные элементы "поднимаются" на несколько уровней вверх (по умолчанию – на один).

```javascript
// Рекурсивное "поднятие" вложенных элементов
var arr1 = [1, 2, [3, 4]];
var result1 = arr1.flat();
console.log(result1); // [1, 2, 3, 4]

// По умолчанию -- на один уровень
var arr2 = [1, 2, [3, 4, [5, 6]]];
var result2 = arr2.flat();
console.log(result2); // [1, 2, 3, 4, [5, 6]]

// На два уровня
var arr3 = [1, 2, [3, 4, [5, 6]]];
var result3 = arr3.flat(2);
console.log(result3); // [1, 2, 3, 4, 5, 6]

// Со всех глубин :)
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
var result4 = arr4.flat(Infinity);
console.log(result4); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

<div id='flatMap' />

### Два в одном: `map` + `flat` (`flatMap`)

Сначала к набору применяется `map` (возможно указание объекта контекста), затем `flat` на один уровень.

Пример 1: дан массив строк, необходимо получить массив всех слов этих строк
```javascript
let strings = ["it's Sunny in", "", "California", "Hello World"];

let result = strings.map(s => s.split(" "));
console.log(result); // [["it's","Sunny","in"],[""],["California"],["Hello","World"]]

let words = strings.flatMap(s => s.split(" "));
console.log(words); // ["it's","Sunny","in","","California","Hello","World"]
```

Пример 2: дублирование всех элементов массива
```javascript
let arr = [2, 3, 4].flatMap(el => [el, el]); 
console.log(arr); // [2, 2, 3, 3, 4, 4]
```

<div id='reduce' />

### Вычисление аггрегирующего значения (`reduce`)

Для всех элементов массива по очереди применяется операция с участием аккумулятора, при этом вычисленое значение становится новым значением аккумулятора.

Пример 1: сумма элементов массива
```javascript
let arr = [1, 2, 3, 4];

let arrSum1 = arr.reduce((sum, current) => sum + current, 0);
console.log(arrSum1); // 10

let arrSum2 = arr.reduce((sum, current) => sum + current);
console.log(arrSum2); // 10
```

Пример 2: пересечение массивов
```javascript
const intersection = (...arrays) => {
    const selectOnlyCommonElements = (accumulator, currentArray) =>
        currentArray.filter(currentArrayItem => accumulator.includes(currentArrayItem));
    return arrays.reduce(selectOnlyCommonElements);
};

const intersect = intersection([1,2,3,4], [2,3,4,9], [3,45,5,2], [3,2,1]);
console.log(intersect); // [3, 2]
```

Пример 3: объединение массивов с удалением дубликатов
```javascript
const distinctUnion = (...arrays) => {
    const addUnique = (accumulator, currentArray) =>
        accumulator.concat(
            currentArray.filter(currentArrayItem => !accumulator.includes(currentArrayItem))
        );
    return arrays.reduce(addUnique);
};

const unionArrays = distinctUnion([1,2,3,4], [2,3,4,9], [3,45,5,2], [3,2,1]);
console.log(unionArrays); // [1, 2, 3, 4, 9, 45, 5]
```
