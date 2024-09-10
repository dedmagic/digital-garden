# Контекст выполнения функции (this)

## Функция, объявленная глобально

```javascript
function func() {
  console.log(this);  
}

func();
```

В нестрогом режиме `this` ссылается на глобальный объект:

   + в браузере на объект `window`;
   + в **node.js** на объект `global`;
   + в **Worker**-ах на объект `WorkerGlobalScope`.

Примечание: в одном из последних стандартов JavaScript добавлен объект `globalThis`; в браузере он совпадает с `window`, в **node.js** – с `global`.

В строгом режиме всегда `undefined`.

## Методы объектов

В методе объекта `this` ссылается на сам объект:

```javascript
const user1 = {
  name: 'Mark Knopfler',
  hello() {
    console.log(`Hello ${this.name}!`);
  }
}

user1.hello(); // Hello Mark Knopfler! 
```

Однако в обычных функциях, вложенных в методы, контекст теряется:

```javascript
const user2 = {
  name: 'Mark Knopfler',
  hello() {
    function getGreeting() {
      return `Hello ${this.name}!`;
    }
    console.log(getGreeting());
  }
}

user2.hello(); // Hello undefined!
```

Такой проблемы нет для стрелочных функций:

```javascript
const user3 = {
  name: 'Mark Knopfler',
  hello() {
    const getGreeting = () => `Hello ${this.name}!`;
    console.log(getGreeting());
  }
}

user3.hello();  // Hello Mark Knopfler!
```

Для обычных функций контекст выполнения определяется динамически, т.е. зависит от того, как она была вызвана. Для стрелочных функций контекст выполнения определяется лексически, он всегда берётся из той функции или класса, внутри которой определена эта стрелочная функция.

Поэтому крайне рекомендуется придерживаться следующего правила: использовать `this` можно только в методах объектов (в т.ч. в конструкторах) и в стрелочных функциях внутри методов.

## Подмена контекста

Для примера возьмём глобально объявленную функцию. `this` ссылается на глобальный объект, соответственно, `this.name === undefined`:

```javascript
function beginConversation(greeting, smile) {
  console.log(`${greeting} ${this.name}! ${smile}`);
}

beginConversation('Hi', '8-0'); // Hi undefined! 8-0
```

Объявим два объекта, нас интересует только свойство `name`:

```javascript
const mark = {
  name: 'Mark Knopfler'
};

const michael = {
  name: 'Michael Jackson'
};
```

Функции JavaScript являются объектами, соответственно, у них есть свойства и методы. Один из этих методов – `call` – позволяет вызвать функции, при этом передав ей контекст исполнения:

```javascript
beginConversation.call(mark, 'Hello', '=D'); // Hello Mark Knopfler! =D
```

Ещё один метод, `apply`, аналогичен методу `call` с единственным отличием – параметры метода передаются не по отдельности, а в одном массиве:

```javascript
beginConversation.apply(michael, ['Goodby', ':(']); // Goodby Michael Jackson! :(
```

С помощью ещё одного метода – `bind` – можно на основе существующей функции создать новую, привязав при этом к ней контекст исполнения. При этом контекст привязывается намертво, подменить его с помощью `call`, `apply` или `bind` уже не получится.

```javascript
const helloMark1 = beginConversation.bind(mark);
helloMark1('Hi', ':D'); // Hi Mark Knopfler! :D
helloMark1.call(michael, 'Hello', '=D'); // Hello Mark Knopfler! =D
```

При этом можно привязать не только контекст, но и параметры:

```javascript
const helloMark2 = beginConversation.bind(mark, 'Hello', '=D');
helloMark2(); // Hello Mark Knopfler! =D
helloMark2('Hi', ''); // Hello Mark Knopfler! =D
```

На стрелочные функции подмена не действует, т.к. у них вообще нет своего контекста исполнения, он всегда берётся из внешнего скоупа.

```javascript
const hello = () => { console.log(`Hello ${this.name}`) };

hello(); // Hello undefined
hello.call(mark); // Hello undefined
```

Можно вызывать методы объекта в контексте другого объекта:

```javascript
const bob = {
  name: 'Bob Dylan',
  hello() {
    console.log(`Hello ${this.name}!`);
  }
}

bob.hello(); // Hello Bob Dylan!
bob.hello.call(mark); // Hello Mark Knopfler!
const helloMichael = bob.hello.bind(michael);
helloMichael(); // Hello Michael Jackson!
```

## `setTimeout`/`setInterval` и `this`

Если передать функцию в качестве коллбека в функцию `setTimeout`, то в момент вызова она будет отвязана от своего контекста и будет вызвана в глобальном контексте:

```javascript
bob.hello(); // Hello Bob Dylan!
setTimeout(bob.hello, 1000); // Hello undefined!
```

Решить эту проблему можно двумя способами. Первый – использовать `bind`:

```javascript
setTimeout(bob.hello.bind(bob), 1000); // Hello Bob Dylan!
```

Второй – при использовании классов объявить метод через стрелочную функцию, в этом случае контекст метода будет зафиксирован в момент определения метода, им будет являться класс и, соответственно, все созданные его экземпляры.

```javascript
class Man {
  constructor (name) {
    this.name = name;
  }

  helloNormal() {
    console.log(`Hello ${this.name}!`);
  }

  helloArrow = () => {
    console.log(`Hello ${this.name}!`);
  }
}

const mark = new Man('Mark Knopfler');
mark.helloNormal(); // Hello Mark Knopfler!
mark.helloArrow(); // Hello Mark Knopfler!
setTimeout(mark.helloNormal, 1000); // Hello undefined!
setTimeout(mark.helloArrow, 1000); // Hello Mark Knopfler!
```
