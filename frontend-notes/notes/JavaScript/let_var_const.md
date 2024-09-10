# Объявление переменных и констант (let, const, var)

+ Hoisting ("поднятие")

Движок JavaScript исполняет код в два этапа. Первый этап называется **фазой создания**. На этом этапе парсер проходит весь код, находит определения переменных/констант и функций и размещает их в памяти.

Только затем наступает **фаза выполнения**, на которой движок построчно выполняет код. Получается, что при старте выполнения кода все переменные и функции уже существуют, независимо от того, в начале текущей области видимости они объявлены или где-то далее (может быть даже в самом конце). Выглядит это так, как будто все объявления "поднялись" в начало кода, отсюда и название этого эффекта – **hoisting** ("поднятие" или "всплытие").

Разница между `var` и `let` заключается в том, что при размещении переменных в памяти для `var` они инициализируются значением **`undefined`**, а при `let` инициализации не происходит.

```javascript
// var hoisting: allocate and initialize
function hoisting_var() {
    console.log({ a }); // undefined
    var a = 1;
    console.log({ a }); // 1
}

// let hoisting: allocate only
function hoisting_let() {
    // console.log({ a }); // ReferenceError: Cannot access 'a' before initialization
    let a = 2;
    console.log({ a }); // 2
}
```

+ Temporal Dead Zone

Из-за того, что обяъвленная с помощью `let` переменная от начала области видимости до места её объявления уже существует, но ни читать, ни устанавливать её значение никак невозможно, эту часть кода называют **временной мёртвой зоной** для этой переменной. (Очевидно, что в случае `var` этой зоны нет.)

```javascript
// var: no temporal dead zone
function tdz_var() {
    console.log({ a }); // undefined
    a = 3;
    console.log({ a }); // 3
    var a = 4;
    console.log({ a }); // 4
}

// let: temporal dead zone
function tdz_let() {
    // a = 5; // ReferenceError: Cannot access 'a' before initialization
    let a = 6;
    console.log({ a }); // 6
}
```

Однако, т.к. переменная уже существует, то использовать её можно, например, в замыканиях:
```javascript
function tdz_closure() {
    const func = () => { console.log({ a }); }
    let a = 7;
    func(); // 7
}
```

+ Области видимости

Второе отличие `var` и `let` заключается в том, у `var` областью видимости является вся функция, в которой определена переменная, а для `let` действует блочная область видимости.

```javascript
// var: scope == function
function scope_var() {
    console.log({ a }); // undefined
    {
        console.log({ a }); // undefined
        var a = 8;
        console.log({ a }); // 8
    }
    console.log({ a }); // 8
}

// let: scope == block
function scope_let() {
    // console.log({ a }); // ReferenceError: a is not defined
    {
        // console.log({ a }); // ReferenceError: Cannot access 'a' before initialization
        let a = 9;
        console.log({ a }); // 9
    }
    // console.log({ a }); // ReferenceError: a is not defined
}
```

В случае `let`-объявления переменной во вложенном блоке внутреннее объявление временно скрывает внешнее.

```javascript
let v = 42;
console.log({ v }); // 42
{
    let v = 96;
    console.log({ v }); // 96
}
console.log({ v }); // 42
```

+ Константы

Для констант (`const`) действуют те же правила, что и для `let`, за исключением того, что константа не может быть изменена: для примитивов это само значение, для объектов – ссылка на объект.

```javascript
const obj = {
    foo: 42
};

obj.foo = 96;
console.log(obj); // { foo: 96 }
```

+ Функции

До ES6 для функций область действия определялась так же, как в случае `var`, сейчас – так же, как для `let`.

+ Объявление переменных без `var`/`let`

В строгом режиме вызывает ошибку, в нестрогом – создаёт глобальную переменную.

```javascript
function f() {
    var x = y = 1; // x - объявляется локально, y - глобально!
}
```
