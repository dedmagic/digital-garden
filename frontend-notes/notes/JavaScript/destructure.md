# Деструктуризация

* [Массивы](#Массивы)
* [Key - Value (в цикле)](#key-value)
* [Объекты](#Объекты)

## Массивы
+ Деструктуризация всех элементов массива
```javascript
let myArray = [1, 2, 3];
let [a, b, c] = myArray;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

+ Деструктуризация начальных элементов массива
```javascript
let myArray = [1, 2, 3, 4, 5];
let [a, b, c] = myArray;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

+ Деструктуризация с пропуском элементов
```javascript
let myArray = [1, 2, 3, 4, 5];
let [, , c, , e] = myArray;
console.log(c); // 3
console.log(e); // 5
```

+ Обмен переменных значениями
```javascript
let a = 1, b = 2;
console.log(a, b); // 1 2

[b, a] = [a, b];
console.log(a, b); // 2 1
```

+ Присваивание значения нескольким переменным (ИМХО – отстой, не надо так)
```javascript
let [test1, test2, test3] = [1, 2, 3];
```

+ Разбиение строки на слова
```javascript
let [firstName, surname] = "Mark Knopfler".split(' ');
console.log(firstName);
console.log(surname);
```

+ Значение по умолчанию
```js
const colors = [];
const [firstColor = 'white'] = colors;
console.log(firstColor); // white
```

<div id="key-value"></div>

## Key - Value (в цикле)

+ Деструктуризация пары "ключ - значение"
```javascript
const mark = { name: 'Mark', age: 71 };
console.log(Object.entries(mark)); // [ [ 'name', 'Mark' ], [ 'age', 71 ] ]

for (let [key, value] of Object.entries(mark)) {
    console.log(`${key} = ${value}`);
}
// name = Mark
// age = 71
```

+ Деструктуризация пары "ключ - значение": массив
```javascript
const array = ['один', 'два', 'три', 'четыре'];

for(const [index, element] of array.entries()) {
    console.log(`array[${index}] = ${element}`)
}
```

+ Деструктуризация пары "ключ - значение": словарь
```javascript
let user = new Map();
user.set("name", "Mark");
user.set("age", "71");

for (let [key, value] of user) {
  alert(`${key} = ${value}`);
}
 // name = Mark
 // age = 71
```

## Объекты
+ Получение конкрентых свойств
```javascript
let myObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
let { b, d } = myObject;
console.log(b); // 2
console.log(d); // 4
```

+ Получение свойств с переименованием
```javascript
let myObject = {
   a: 1,
   b: 2,
   c: 3,
   d: 4
};
let { b, d: newName } = myObject;
console.log(b); // 2
console.log(newName); // 4
console.log(d); // ReferenceError: d is not defined
```

+ Значения по умолчанию (можно и для массивов)
```javascript
let myObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

let { b, d = 42, e = 96 } = myObject;
console.log(b, d, e); // 2 4 96

//let { b, d = 42, e } = myObject;
//console.log(b, d, e); // 2 4 undefined
```

+ В качестве значений по умолчанию могут быть любые выражения, даже вызовы функций
```javascript
// prompt запустится только для surname
let [name = prompt('name?'), surname = prompt('surname?')] = ["Mark"];

console.log(name);    // Mark (из массива)
console.log(surname); // результат prompt

```

+ Можно совмещать переименование и значения по умолчанию
```javascript
let myObject = {
    a: 1,   
    d: 4
};

let { a: newA = 1, b: newB = 42, c: newC = 96 } = myObject;
console.log(newA, newB, newC); // 1 42 96
```

+ Функции: именованные параметры и значения по умолчанию
```javascript
function print_person_bad (name, profession, age, weight) {
    console.log(name);
    console.log(profession);
    console.log(age);
    console.log(weight);
    console.log('-----------');
}

print_person_bad ('Smith', 'Baker', 50, 60);

function print_person_good ( { name, profession, age, weight }) {
    console.log(name);
    console.log(profession);
    console.log(age);
    console.log(weight);
    console.log('-----------');
}

print_person_good ( { name: 'Smith', profession: 'Baker', age: 50, weight: 60 });
print_person_good ( { name: 'Smith', age: 50, profession: 'Baker', weight: 60 });

function print_person_very_good ( { name, profession = 'Programmer', age = 18, weight }) {
    console.log(name);
    console.log(profession);
    console.log(age);
    console.log(weight);
    console.log('-----------');
}

print_person_very_good ( { name: 'Smith', age: 50, weight: 60 })
```

+ Вызов функции со всеми параметрами по умолчанию

Если у функции заданы значения по умолчанию для всех параметров
```javascript
function print_person_bad ( { name = 'Mark', profession = 'Musician', age = 71 }) {
    console.log(name);
    console.log(profession);
    console.log(age);
    console.log('-----------');
}
```
, то вызвать её совсем без параметров нельзя, вот такой вызов завершится с ошибкой:
```javascript
print_person_bad(); // Упадёт с ошибкой
```
Т.к. функция ждёт на входе объект,  вызов придётся делать следующим образом:
```javascript
print_person_bad({});
```
Чтобы избежать этой пробелемы, для единственного параметра функции – объекта – тоже можно задать значение по умолчанию:
```javascript
function print_person_good ( { name = 'Mark', profession = 'Musician', age = 71 } = {}) {
    console.log(name);
    console.log(profession);
    console.log(age);
    console.log('-----------');
}

print_person_good(); // Корректный вызов
```



+ Деструктуризация вложенных объектов (можно и для массивов)
```javascript
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};

function displaySummary({ name, scores: { maths = 0, english = 0, science = 0 } }){
    console.log(`Hello, ${name}`);
    console.log(`Your Maths score is ${maths}`);
    console.log(`Your English score is ${english}`);
    console.log(`Your Science score is ${science}`);
}

displaySummary(student);
```

+ Деструктуризация из массива в объект
```javascript
const { 3: x, 4: y } = [1, 2, 3, 4, 5];
console.log(x, y); // 4, 5
```

+ Деструктуризация в ранее объявленные переменные
```javascript
let a, b, c, x, y, z;

[a, b, c] = [1, 2, 3];
({x, y, z} = { x: 4, y: 5, z: 6 }); // Скобки обязательны!

console.log(a, b, c, x, y, z); // 1 2 3 4 5
```
При деструктуризации объекта в существующие переменные обязательно заключать всё присваивание в круглые скобки, иначе синтаксический анализатор примет фигурную скобку в начале за начало составного оператора.

+ Деструктурировать можно не только в переменные, подойдёт любое `l-value`, например, свойство объекта или элемент массива
```javascript
let user = {};
[user.name, user.surname] = "Mark Knopfler".split(' ');
alert(user.name); // Mark
```


