# Set, Map, WeakSet, WeakMap

## Set
Множество, т.е. коллекция уникальных значений

+ объявление пустого множества
```javascript
let set = new Set();
```

+ добавление элементов множества
```javascript
let mark = { name: 'Mark' };
let knopfler = { name: 'Knopfler' };
let cheb = { name: 'Cheb' };
let mami = { name: 'Mami' };

set.add(mark);
set.add(mark);
set.add(knopfler);
set.add(cheb);
set.add(mami);
set.add(cheb);
```

+ получение количества элементов множества
```javascript
console.log(`items: ${set.size}`); // 4
```

+ перебор с помощью `forEach`
```javascript
set.forEach(item => console.log(item));
// { name: 'Mark' }
// { name: 'Knopfler' }
// { name: 'Cheb' }
// { name: 'Mami' }
```

На каждой итерации в коллбек передаётся три параметра: дважды текущий элемент (это сделано для совместимости с `Map`) и всё множество:
```javascript
set.forEach((item1, item2, set) => console.log(item1 === item2, set.size));
// true 4
// true 4
// true 4
// true 4
```

+ удаление элементов
```javascript
set.delete(mami);
```

+ перебор с помощью `for\of`
```javascript
for (let item of set) {
    console.log(item);
}
// { name: 'Mark' }
// { name: 'Knopfler' }
// { name: 'Cheb' }
```

+ проверка вхождения элемента в множество
```javascript
console.log(set.has(mark)); // true
console.log(set.has(mami)); // false
```

+ удаление всех элементов множества
```javascript
set.clear();
console.log(set.size); // 0
```

+ создание множества из итерируемого объекта
```javascript
const arr = [1, 2, 3, 4, 5, 3, 5, 1];
const set_from_arr = new Set(arr);
console.log(set_from_arr); // Set { 1, 2, 3, 4, 5 }
```

+ другие способы обхода множества
```javascript
console.log(set_from_arr.keys()); // [Set Iterator] { 1, 2, 3, 4, 5 }
console.log(set_from_arr.values()); // [Set Iterator] { 1, 2, 3, 4, 5 }
console.log(set_from_arr.entries()); // [Set Entries] { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 5, 5 ] }
```

## Map
Коллекция пар "ключ" – "значение". В отличие от объектов ключом может быть значение любого типа (в объектах – только строки).

+ создание словаря и добавление элементов
```javascript
let map = new Map();

map.set(1, 'number1');
map.set('1', 'string1');
map.set(true, 'bool1');

console.log(map); // Map { 1 => 'number1', '1' => 'string1', true => 'bool1' }
```

+ количество элементов
```javascript
console.log(map.size); // 3
```

+ перебор с помощью `forEach`
```javascript
map.forEach(value => console.log(value));
// number1
// string1
// bool1

map.forEach((value, key, map) => console.log(key, value, map.size));
// 1 number1 3
// 1 string1 3
// true bool1 3
```

+ перебор с помощью `for\of`
```javascript
for (let item of map) {
    console.log(item);
}
// [ 1, 'number1' ]
// [ '1', 'string1' ]
// [ true, 'bool1' ]

for (let [key, value] of map) {
    console.log(`${key} => ${value}`);
}
// 1 => number1
// 1 => string1
// true => bool1
```

+ очистка словаря
```javascript
map.clear();
console.log(map.size); // 0
```

+ цепочки `set`
```javascript
map.set(1, 'number1') 
   .set('1', 'string1')
   .set(true, 'bool1');
```

+ создание словаря из списка значений
```javascript
let map2 = new Map([
    [2, 'number2'],
    ['2', 'string2'],
    [false, 'bool2'],
]);
console.log(map2); // Map { 2 => 'number2', '2' => 'string2', false => 'bool2' }
```

+ чтение из словаря
```javascript
console.log(map.get(1)); // number1
console.log(map.get(`1`)); // string1
```

+ удаление элементов
```javascript
map.delete('1');
console.log(map); // Map { 1 => 'number1', true => 'bool1' }
```

+ проверка вхождения значения в словарь
```javascript
console.log(map.has(1)); // true
console.log(map.has('1')); // false
```

+ другие способы обхода словаря
```javascript
console.log(map2.keys()); // [Map Iterator] { 2, '2', false }
console.log(map2.values()); // [Map Iterator] { 'number2', 'string2', 'bool2' }
console.log(map2.entries());
//[Map Entries] {
//  [ 2, 'number2' ],
//  [ '2', 'string2' ],
//  [ false, 'bool2' ]
//}
```

## WeakMap и WeakSet
Хранят "слабые" ссылки (weak link) на объекты, т.е. не препятствуют сборщику мусора удалять эти объекты, если нет ни одной "сильной" (strong) ссылки.

* В качестве ключей могут использоваться только объекты
* Нет свойства `size`
* Нельзя перебрать с помощью `for..of` или `forEach`, нет методов `keys()`, `values()`, `entries()`
* Нет метода `clear()`

Т.е. есть только запись (`add`, `delete`) и чтение (`has`, `get`).
