# Функции в JavaScript

## Объявление функций

+ Способ 1: инструкция `function`

Т.к. для инструкций объявления действует поднятие (hoisting), то такую функцию можно вызывать _до_ её объявления.

```javascript
func1(1, 1); // --> func1: 2

function func1(a, b) {
    console.log(`func1: ${a + b}`);
}

func1(1, 1); // --> func1: 2
```

+ Способ 2: функциональное выражение

Т.к. поднятие действует только на определение переменной, но не на её инициализацию, то такую функцию можно вызвать _только после_ объявления.

```javascript
func2(2, 2); // --> ReferenceError: Cannot access 'func2' before initialization

const func2 = function (a, b) {
    console.log(`func2: ${a + b}`);
}

func2(2, 2); // --> func2: 4
```

Можно использовать _именованное функциональное выражение_; имя видно только в рамках самого объявления. Используется при объявлении рекурсивной функции и ещё вроде как при сериализации в JSON (но это неточно).

```javascript
const rec_func = function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n-1);
}

console.log(rec_func(5));  // --> 120
console.log(factorial(5)); // --> ReferenceError: factorial is not defined
```

+ Способ 3: с помощью конструктора

Функция всегда создаётся в глобальной области видимости.

Не рекомендуется: проблемы с безопасностью и производительностью.

```javascript
const func3 = new Function ('a', 'b', 'console.log(`func3: ${a + b}`)');
```

Можно так (без `new`):

```javascript
const func3 = Function ('a', 'b', 'console.log(`func3: ${a + b}`)');
```

+ Способ 4: стрелочная функция
```javascript
const func4 = (a, b) => {
    console.log(`func4: ${a + b}`);
}
```

Если стрелочная функция нужна для вычисления единственного выражения, то операторные скобки могут отсутствовать:

```javascript
const func4a = (a, b) => { return a + b };
const func4b = (a, b) => a + b;
console.log(func4a(1, 2), func4b(1, 2)); // --> 3 3
```

## Возвращаемое значение

Каждая функция всегда возвращает значение; если произошёл выход из функции без использования инструкции `return` или в данной инструкции не указано выражение, то функция возвращает значение `undefined`.

```javascript
console.log(func1(1, 1));
/* -->
func1: 2
undefined
*/
```

## Аргументы функций

+ Псевдомассив `arguments` (массивоподобный объект)

В обычных функциях содержит все параметры, переданные в функцию при её вызове; в стрелочных функциях отсутствует.  
В современном JavaScript вместо него необходимо использовать т.н. "оставшиеся параметры" (rest).

```javascript
function func5() {
    console.log(`func5: ${arguments.length}`);
}

const func6 = () => { console.log(`func6: ${arguments.length}`); }

func5();             // --> func5: 0
func5(2, 3);         // --> func5: 2
func5([1, 2, 3, 4]); // --> func5: 1
func6();     // --> ReferenceError: arguments is not defined
func6(5, 7); // --> ReferenceError: arguments is not defined
```

+ Сбор параметров в массив (rest)

В отличие от `arguments`, работает в стрелочных функциях

```javascript
function funcD(first, second, ...rest) {
    console.log(first); // Первый аргумент
    console.log(second); // Второй аргумент
    console.log(rest[0]); // Третий аргумент
    console.log(rest[1]); // Четвертый аргумент
    // etc.
}
```

+ Отсутствующие параметры

Принимают значение `undefined`.

```javascript
function funcA (a, b) {
    console.log(a, b);
}

funcA(1, 2); // --> 1 2
funcA(1); // --> 1 undefined
```

+ Параметры по умолчанию

```javascript
function func8(a, b = 7) {
    return a + b;
}

const func9 = (a, b = 7) => a + b;

console.log(func8(1, 2)); // --> 3
console.log(func8(1));    // --> 8
console.log(func9(1, 2)); // --> 3
console.log(func9(1));    // --> 8
```

+ Передача параметров по значению

```javascript
function func7(a, b) {
    a = 42;
    b.prop = 42;
}

let x = 96;
let y = { prop: 96 };

console.log(x, y); // --> 96 { prop: 96 }
func7(x, y);
console.log(x, y); // --> 96 { prop: 42 }
```

## Функция – это объект

Любая функция в JavaScript является объектом, соответственно, у неё могут быть свои свойства и методы:

```js
function func() {
    console.log('Function!')
}

func(); // --> Function!

func.description = 'This is function, dude :)'
console.log(func.description) // --> This is function, dude :)
console.log(func.toString())
/* -->
function func() {
    console.log('Function!')
}
*/
```

## Встроенные свойства и методы функций

+ Количество ожидаемых аргументов: `length`

```javascript
console.log(func1.length);    // --> 2
console.log(func4.length);    // --> 2
console.log(func5.length);    // --> 0
console.log(func6.length);    // --> 0
console.log(rec_func.length); // --> 1
```

+ Имя функции: `name`

```javascript
console.log(func1.name);    // --> func1
console.log(func2.name);    // --> func2
console.log(func3.name);    // --> anonymous
console.log(func4.name);    // --> func4
console.log(func5.name);    // --> func5
console.log(func6.name);    // --> func6
console.log(rec_func.name); // --> factorial
```

+ Исходный текст функции: `toString()`

```javascript
console.log(func1.toString());
/* -->
function func1(a, b) {
    console.log(`func1: ${a + b}`);
}
*/

console.log(func4.toString()); // --> (a, b) => { console.log(`func4: ${a + b}`); }
```

## Функции-конструкторы

Функции в JavaScript бывают двух видов: "обычные", предназначенные для каких-то вычислений или изменения состояния, и функции-конструкторы, которые используются для создания объектов. Вызываются функции-конструкторы с помощью конструкции `new`:

```js
const Person = function (name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person('Mark Knopfler', 72);
console.log(person); // --> Person { name: 'Mark Knopfler', age: 72 }
```

Внутри функций-конструкторов происходит заполнения свойств создаваемого объекта (конечно, можно там осуществлять и любые другие действия, но это бессмысленно). Если функция вызвана с помощью конструкции `new`, то любой явный возврат (инструкция `return`) игнорируется.

Функции-конструкторы прянято называть с заглавной буквы.

Фактически, с помощью функции-конструктора задаётся некий тип (класс?).

Все стандартные ссылочные типы в JavaScript имеют свои конструкторы:

```js
console.log(Object); // --> [Function: Object]
console.log(Array); // --> [Function: Array]
console.log(Date); // --> [Function: Date]
console.log(RegExp); // --> [Function: RegExp]
console.log(String); // --> [Function: String]
```
