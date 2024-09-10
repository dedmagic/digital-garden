# Обработка ошибок в JavaScript

## Перехват ошибок

Для перехвата ошибок используется стандартная конструкция `try/catch/finally`:

```js
try {
    ...
} catch {
    ...
} finally {
    ...
}
```
Блоки `catch` и `finally` могут присутствовать оба или только один из них.

## Инструкция `throw`

Для выброса ошибки используется инструкция `throw`, которая в качестве единственного и обязательного параметра принимает значение любого типа.

```js
try {
    throw 'This is error'; // string
} catch (e) {
    console.log(e); // --> This is error
}

try {
    throw 42; // expresion of any type
} catch (e) {
    console.log(e); // --> 42
}

// object as error info
const customError = {
    message: 'Шеф, всё пропало!',
    severity: 100500
}

try {
    throw customError;
} catch (e) {
    console.log(e); // --> { message: 'Шеф, всё пропало!', severity: 100500 }
}
```

Но использовать значения произвольного типа для идентификации ошибки не стоит, т.к. для этих целей есть специальнный тип `Error`:

```js
try {
    throw new Error('This is error');
} catch (e) {
    console.log(e); // --> Error: This is error, затем stacktrace
}
```

Использование объектов этого типа предпочтительнее, потому что в них автоматически фиксируются место ошибки и stacktrace. Наиболее полезные свойства объекта-ошибки: `message`, `name`, `stack`:

```js
try {
    throw new Error('This is error');
} catch (e) {
    console.log(e.message); // --> This is error
    console.log(e.name); // --> ErrorError
    console.log(e.stack);  // --> выводится stacktrace
}
```

## Информация о месте ошибки

При работе с классом `Error` нужно учитывать, что в нём запоминается информация не о том месте, где ошибка была выброшена (`throw`), а о том, где был создан объект ошибки.

```js
try {
    throw new Error('Good place'); // line 2
} catch (e) {
    console.log(e); // --> line 2
}
```
В этом примере совпадают место создания ошибки (`new Error`) и место генерации ошибки (`throw`), поэтому выводимая информация корректна.

```js
const error = new Error('Bad place'); // line 1
try {
    throw error; // line 3
} catch (e) {
    console.log(e); // --> line 1
}
```

Несмотря на то, что ошибка возникла в строке 3, в выводе будет указана строка 1, т.к. именно там был создан объект ошибки.

В том числе этот нюанс использования объектов ошибки приводит к тому, что портится stacktrace, если создание объекта и возникновение ошибки происходит в разных функциях:

```js
function createError() {
    return new Error('Bad stack trace');
}

function generateError() {
    const error = createError();
    throw error;
}

try {
    generateError();
} catch (e) {
    console.log(e); // --> stacktrace: createError → generateError → ...
}
```

❗ **Правило:** объект ошибки должен создаваться в месте генерации ошибки.

## Предопределённые типы ошибок в JavaScript

Кроме типа `Error`, в JavaScript также имеются в налиичии следующие типы ошибок: `ReferenceError`, `RangeError`, `TypeError`, `InternalError`, `URIError`, `EvalError`, `SyntaxError` ([MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types "Типы ошибок")).

При обработке разных типов ошибок можно воспользоваться либо свойством `name` объекта ошибки или операцией `instanceof`:

```js
try {
    throw new RangeError('message');
} catch (e) {
    switch (e.name) {
        case 'URIError':
            console.log('URI');
            break;
        case 'RangeError':
            console.log('Range');
            break;
        case 'ReferenseError':
            console.log('Reference');
            break;
    }
}

try {
    throw new URIError('message');
} catch (e) {
    if (e instanceof URIError) {
        console.log('URI');
    } else if (e instanceof RangeError) {
        console.log('Range')
    } else if (e instanceof ReferenseError) {
        console.log('Reference');
    }
}
```

## Создание кастомных типов ошибок

Можно создавать собственные типы ошибок, наследуясь от типа `Error` (или любого другого предопределённого типа ошибки).

```js
class EntityNotFoundError extends Error {
    constructor(entityType, entityId) {
        const message = `Entity ${entityType} with ID = ${entityId} not found`;
        super(message);

        this.entityType = entityType;
        this.entityId = entityId;

        this.name = 'EntityNotFoundError';
    }

    // ...
}

// mock
function getPersonFromDatabase(id) {
    return null;
}

try {
    const person = getPersonFromDatabase(42);
    if (person === null) {
        throw new EntityNotFoundError('Person', 42);
    }
} catch (e) {
    console.log(e.message); // --> Entity Person with ID = 42 not found
}
```

**Важно:** необходимо обязательно переопределять наследуемое свойство `name`, иначе оно будет возвращать имя ошибки для базового типа:

```js
...
console.log(e.name); // --> Error (при отсутствии инструкции `this.name = 'EntityNotFoundError';`)
...
```

Поэтому надёжнее для определения типа ошибки использовать операцию `instanceof`:

```js
...
console.log(e instanceof EntityNotFoundError); // --> true
...
```

При этом нужно не забывать, что эта операция ищет соответствие типу по всей цепочке прототипов, т.е.

```js
...
console.log(e instanceof Error); // --> true
...
```

Поэтому при проверке типа (через `switch` или последовательность `if`) нужно начинать от более конкретных к более общим типам ошибок (от потомков к наследникам).