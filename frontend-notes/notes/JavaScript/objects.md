# Объекты в JavaScript

### Создание объектов. Способ №1: литерал

Литерал объекта заключается в фигурные скобки:

```js
const empty_object = {};
```

Для объектов операция `typeof` возвращает строку `object`:

```js
console.log(typeof empty_object); // => object
```

Все объекты наследуют от прототипа метод `toString()`, который без переопределения абсолютно бесполезен:

```js
console.log(empty_object.toString()); // => [object Object]
```

### Свойства объекта

Синтаксис задания свойств объекта:

```js
const musician = {
    firstName: 'Mark',
    secondName: 'Knopfler',
};

console.log(musician.toString()); // => [object Object]
```

К свойствам объекта можно обращаться двумя способами: стандартным для ООП через точку и как к элементу ассоциативного массива:

```js
console.log(musician.firstName);     // => Mark
console.log(musician["secondName"]); // => Knopfler
```

Аналогично происходит обращение к свойствам объекта для их изменения:

```js
musician.firstName = 'Michael';
musician["secondName"] = 'Jackson';

console.log(musician.firstName);     // => Michael
console.log(musician["secondName"]); // => Jackson
```

Для добавления нового свойства к объекту достаточно присвоить этому свойству значение:

```js
musician.job = 'singer';
console.log(musician["job"]); // => singer
```

Для перебора всех свойств объекта можно использовать цикл `for/in`:

```js
// Вспомогательная функция: вывод свойств объекта
function printObject(obj) {
    for (const key in obj) {
        const value = obj[key];
        console.log(`[${key}] = ${value}`);
    }
}

printObject(musician);
// =>
// [firstName] = Michael
// [secondName] = Jackson
// [job] = singer
```

Удаляются свойства объекта с помощью операции `delete`:

```js
delete musician.job;
console.log(musician.job); // undefined

printObject(musician);
// =>
// [firstName] = Michael
// [secondName] = Jackson
```

### Методы объекта

Методы объекта можно определять двумя способами: с помощью функционального выражения и с помощью сокращённого синтаксиса.

Внимание! Если метод определяется с помощью стрелочной функции, то в нём нельзя использовать ссылку на текущий объект `this`, т.к. стрелочные функции не имеют своего контекста и берут его из объемлющей функции, а для методов таковой нет.

```js
const person = {
    firstName: 'Mark',
    secondName: 'Knopfler',
    
    // Первый способ объявления метода: функциональное выражение
    printName: function () {
        console.log(this.firstName);
    },
    
    // Стрелочная функция как метод не может использовать `this`
    wrongPrintName: () => {
        console.log(this.firstName);
    },
    
    // Второй способ объявления функции: сокращённый синтаксис
    printSecondName() {
        console.log(this.secondName);
    }
}

person.printName();       // => Mark
person.wrongPrintName();  // => undefined
person.printSecondName(); // => Knopfler

printObject(person);
// =>
// [firstName] = Mark
// [secondName] = Knopfler
// [printName] = function () {
//     console.log(this.firstName);
//   }
// [wrongPrintName] = () => {
//     console.log(this.name)
//   }
// [printSecondName] = printSecondName() {
//     console.log(this.secondName)
//   }
```

Вызов метода как элемента словаря:

```js
person["printName"](); // => Mark
```

### Второй способ создания объекта: через конструктор

Любая функция в JS может быть использована как конструктор, т.е. быть вызвана через конструкцию `new`. Но имеет это для специально написанных для этого функций, в которых происходит инициализация свойств объекта. Функции-конструкции принято называть с заглавной буквы.

```js
function Person(name, secondName) {
    this.name = name;
    this.secondName = secondName;
    
    this.hello = () => `Hello, ${this.name}`; // В конструкторе можно `this` в стрелочной функции
}

const mark = new Person('Mark', 'Knopfler');
console.log(typeof mark);  // => object
console.log(mark.hello()); // => Hello, Mark

printObject(mark);
// =>
// [name] = Mark
// [secondName] = Knopfler
// [hello] = () => `Hello, ${this.name}`
```

Переопределение метода `toString()`:

```js
mark.toString = function() {
    return `${this.name} ${this.secondName}`;
}

console.log(mark.toString()); // => Mark Knopfler

printObject(mark);
// =>
// [name] = Mark
// [secondName] = Knopfler
// [hello] = () => `Hello, ${this.name}`
// [toString] = function() {
//   return `${this.name} ${this.secondName}`;
// }
```

Определить, создан ли объект с помощью определённой функции-конструктора, можно с помощью операции `instanceof`:

```js
console.log(mark instanceof Person);     // => true
console.log(musician instanceof Person); // => false
```

*****

```
// TODO: Другие способы перебора свойств объекта: после прототипного наследования и дескрипторов свойств
// TODO: Проверка свойств объекта: после прототипного наследования и дескрипторов свойств
// TODO: Создание объектов с помощью `Object.create()`: после прототипного наследования
// TODO: Копирование объектов с помощью `Object.assign()`: после прототипного наследования
// TODO: Сериализация объектов: после прототипного наследования и дескрипторов свойств
```