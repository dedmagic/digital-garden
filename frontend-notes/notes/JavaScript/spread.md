# Оператор расширения (spread)
*Может быть применён к любому итерируемому объекту*
## Массивы
+ Копия массива: `let arrCopy = [...arr]`
+ Слияние массивов: `let unionArr = [...arr1, ...arr2]`
+ Удаление повторяющихся элементов массива с использованием `Set`:
```javascript
const numbers = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7, 7];
const unique_numbers = [...new Set(numbers)];
console.log(unique_numbers); // [1, 2, 3, 4, 5, 6, 7]
```
+ Конструирование массива из другого массива (других массивов) и значений:
```javascript
let firstArray = ["A", "B", "C"];
let secondArray = ["X", ...firstArray, "Y", "Z"];
// вторым массивом будет [ "X", "A", "B", "C", "Y", "Z" ]
```
+ Разворачивание массива при передаче в функцию:
```javascript
let myArray = [1, 2, 3];
function doSomething(first, second, third) {
    // ...
}
// можно так:
doSomething(myArray[0], myArray[1], myArray[2]);
// но лучше так:
doSomething(...myArray);
```

+ Нахождение максимального элемента массива
```javascript
const arr = [13, 7, 42, 28];
const max_element = Math.max(...arr);
console.log(max_element); // 42
```

+ Добавление элемента в начало/конец массива
```javascript
const arr = [1, 2, 3, 4];
const arr1 = [...arr, 42]; // "push"
const arr2 = [42, ...arr]; // "unshift"

console.log(arr1); // [ 1, 2, 3, 4, 42 ]
console.log(arr2); // [ 42, 1, 2, 3, 4 ]
console.log(arr); // [ 1, 2, 3, 4 ]
```

## Объекты
+ Клонирование объекта: `let objCopy = { ...obj }` (примечание: копия поверхностная; прототип не копируется)

+ Клонирование с добавлением свойства:
```javascript
const user = { id: 100, name: 'Howard Moon'};
const userWithPass = { ...user, password: 'Password!' };

console.log(user); //=> { id: 100, name: 'Howard Moon' }
console.log(userWithPass); //=> { id: 100, name: 'Howard Moon', password: 'Password!' }
```

Пример 2. Добавление нескольких свойств:
```javascript
const partial = { id: 42, name: 'Howard Moon' };
const user = { ...partial, id: 96, password: 'Password!' };

console.log(user); //=> { id: 96, name: 'Howard Moon', password: 'Password!' }
```
Примечание: в случае наличия одинаковых свойств берётся значение последнего из них (в примере `id == 96`)

+ Слияние объектов:
```javascript
const part1 = { id: 42, name: 'Howard Moon' };
const part2 = { id: 96, password: 'Password!' };

const user1 = { ...part1, ...part2 };
console.log(user1); //=> { id: 96, name: 'Howard Moon', password: 'Password!' }
```

Пример. Этот приём можно использовать для задания настроек по умолчанию:
```javascript
const unsafeOptions = {
    fontSize: 18
};

const defaults = {
    fontSize: 16,
    color: 'black'
};

const options = {
    ...defaults,
    ...unsafeOptions
};

console.log(options.fontSize); // => 18
console.log(options.color);    // => 'black'
```

+ Изменение иммутабельных объектов путём создания изменённой копии
```javascript
let original = {
    someProperty: "oldValue",
    someOtherProperty: 42
};
let updated = {...original, someProperty: "newValue"};
console.log(updated); // => { someProperty: 'newValue', someOtherProperty: 42 }
```

## Преобразование итерируемых объектов в массив
Строка → массив символов
```javascript
const str = 'Hello world!';
let chars = [...str];
console.log(chars); // ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']
```
Set → массив
```javascript
const mySet = new Set([1, 2, 3]);
const arr = [...mySet];
console.log(arr); // [1, 2, 3]
```
Map → массив
```javascript
const myMap = new Map([[1, 'one'], [2, 'two']]);
const arr = [...myMap]
console.log(arr); // [ [ 1, 'one' ], [ 2, 'two' ] ]
```
NodeList → массив
```javascript
// const nodeList = document.querySelectorAll('div');
const arr = [...document.querySelectorAll('div')];
console.log(arr); // [ div, div, div]
```

## Разница между `Array.from` и `spread`
```javascript
Array.from('hi') // ['h', 'i']
Array.from(new Set([1,2,3])) // [1, 2, 3]
Array.from(new Map([[1, 'one']])) // [[1, 'one']]
Array.from(document.querySelectorAll('div')) // [ div, div, div]
```
`Array.from` работает для итерируемых и массивоподобных объектов, `spread` – только для итерируемых
