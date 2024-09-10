# Строки в JavaScript

## Внутреннее представление строк

Строка в JavaScript – неизменяемая (immutable) последовательность 16-битных символов Unicode (UTF-16).

Некоторые символы Unicode не могут быть представлены одним 16-битным значением, поэтому для них используется два значения:

```js
const heart = '❤';
console.log(heart.length); // --> 1

const love = '💘';
console.log(love.length); // --> 2
```

При этом цикл `for/of` (обход итерируемого объекта) работает корректно, т.е. проходит именно по символам:

```js
let count = 1;
for (let char of love) {
  console.log(char, count);
  count++;
}
// --> 💘 1
```

**Примечание.** Символьный тип в JavaScript отсутствует.

---
## Строковые литералы и объявление строк

Строковые литералы могут быть заключены в кавычки ("), апострофы (') или обратные апострофы (`).

```js
const str1 = "String in quotes";
const str2 = 'String in apostrophe';
const str3 = `String in backtics (backquotes)`;
```

Первые два способа равнозначны, при этом часто используется такое соглашение: строки в HTML заключаются в кавычки, в JS - в апострофы.

Третий способ появился в ES6 и называется "шаблонные" строки/литералы (template literals).

Кавычки внутри кавычек: внутри строкового литерала, ограниченного одним видом кавычек, можно без проблем использовать другие виды кавычек. Если же нужно использовать такие же кавычки, как и ограничивающие, то в этом случае используется экранирование.

```js
const publishing1 = "Издательство O'Reilly";
console.log(publishing1); // --> Издательство O'Reilly
const publishing2 = 'Издательство O\'Reilly'
console.log(publishing2); // --> Издательство O'Reilly
```

**Примечание**. Внутри строковых литералов могут использоваться и другие управляющие последовательности, такие как `\n`, `\t`, задание символа по коду и т.д.

Строки можно создавать с помощью функции `String`, при этом созданные строки ничем не отличаются от созданных обычным образом (если в эту функцию передан строковый литерал, см. примечание ниже):

```js
const str1 = String('string');
console.log(typeof str1); // --> string
```

Примечание: в функцию `String` может быть передано значение любого типа, оно будет преобразовано в строку.

Ещё один вариант: создание объектной обёртки для строки. Т.к. получается объект, а не строка, то можно, например, создавать у него свойства:

```js
const str2 = new String('string');
console.log(typeof str2); // --> string
str2.meta = 'Metadata';
console.log(str2.meta); // --> Metadata
```

Примечание: в конструктор также можно передавать значения любого типа, они будут преобразовываться в строки.

Можно строковый литерал записывать в несколько строк, переносы маркируются символом "\\" (обратный слэш):

```js
const str3 = 'Это всё \
одна строка, \
yeh bro!';

console.log(str3); // --> Это всё одна строка, yeh bro!
```

**Внимание!** Все строки-продолжения должны записывать без отступа, иначе он попадёт в итоговую строку.

---
## Шаблонные строки (template strings)

Обычная и вполне привычная интерполяция:

```js
const a = 42;
const b = 96;

const templateString = `Сумма ${a} и ${b} равна ${a + b}`;

console.log(templateString); // --> Сумма 42 и 96 равна 138
```

Если внутри шаблонной строки есть символы перевода строки или табуляции, отступы, то они используются как есть:

```js
const multilines = `\
Этот текст
разбит
на несколько
строк
`;
console.log(multilines);

/* -->
Этот текст
разбит
на несколько
строк
*/
```

Обрати внимание, бро, на обратный слэш в первой строке – он экранирует перевод строки. Если его убрать, то результат будет состоять из пяти строк (первая – пустая).

Примечание: далее есть раздел "Тегированные шаблонные строки".

---
## Строки как массивы "read only"

```js
const str = 'Hello, world';
console.log(str[0]); // --> H
console.log(str[str.length - 1]); // --> d 
str[0] = 'Y'; // --> TypeError: Cannot assign to read only property '0' of string 'Hello, world'
```

Хотя результатом обращение по индексу фактически является один символ, но этот результат имеет тип `string`:

```js
console.log(typeof str[0]); // --> string
```

Для unicode-символов, которые представлены двумя 16-битными значениями, обращение по индексу бессмысленно:

```js
const love = '💘';
console.log(love.length); // --> 2
console.log(love[0], love[1]); // --> � �
```

Отсюда следует вывод, что разные циклы по одной и той же строке могут дать разный результат:

```js
for (let char of love) {
    console.log(char);
}
// --> 💘

for (let i = 0; i < love.length; i++) {
    console.log(love[i]);
}
// --> �
// --> �
```

---
## Операции над строками

1. Конкатенация
```js
const str1 = 'Just string';
const str2 = 'One more string';

console.log(str1 + str2); // --> Just stringOne more string
```

2. Сравнение (`==`, `===`, `<`, `<=`, `>`, `>=`) производится по внутренним 16-битным значениям, поэтому возможна ситуация, когда выглядящие одинаково символы оказываются не равны:

```js
console.log('µ' === 'μ'); // --> false
```

**Примечание:** сравнение строк с учётом особенностей национальных алфавитов осуществляется с помощью метода объекта `String` `localeCompare` или методов класса `Intl.Collator`.

---
## Строковые функции

### Подстроки

Методы `slice` и `substring` позволяют выделить подстроку указанием левого (входит) и правого (не входит) индексов:

```js
console.log(str.substring(2, 5)); // --> llo
console.log(str.slice(2, 5)); // --> llo
```

Отличия между `slice` и `substring`:
1. Если конечный индекс меньше начального, то `substring` меняет их местами, а `slice` возвращает пустую строку:

```js
console.log(str.substring(5, 2)); // --> llo
console.log(str.slice(5, 2)); // пустая строка
```

2. Отрицательные индексы `substring` интерпретирует как 0, `slice` отсчитывает от конца строки:

```js
console.log(str.substring(-2, 4)); // --> Hell
console.log(str.slice(3, -2)); // --> lo, wor
```

Метод `split` разбивает строку на подстроки по указанному разделителю:
```js
console.log(str.split(','));  // --> [ 'Hello', ' world' ]
console.log(str.split(', ')); // --> [ 'Hello', 'world' ]
```

Примечание. Ещё есть метод `substr`, который помечен как устаревший.

### Поиск в строке

```js
console.log(str.indexOf('l')); // --> 2
console.log(str.indexOf('l', 3)); // --> 3
console.log(str.indexOf('q')); // --> -1
console.log(str.lastIndexOf('l')); // --> 10

console.log(str.startsWith('He')); // --> true
console.log(str.endsWith('zu')); // --> false
console.log(str.includes('or')); // --> true
```

Примечание. Для поиска подстроки в строке можно использовать регулярные выражения.

### Дополнение строки до заданной длины

```js
console.log('z'.padStart(5)); // --> "    z"
console.log('z'.padStart(5, '-')); // --> "----z"
console.log('z'.padEnd(5)); // --> "z    "
console.log('z'.padEnd(5, '-')); // --> "z----"
```

### Модификация строк

```js
console.log(str.toLowerCase()); // --> hello, world
console.log(str.toUpperCase()); // --> HELLO, WORLD
console.log(str.toLocaleLowerCase()); // --> hello, world
console.log(str.toLocaleUpperCase()); // --> HELLO, WORLD
console.log(str.replace('ello', 'appy')); // --> Happy, world
console.log(str.replace('o', 'u')); // --> Hellu, world
console.log(str.replaceAll('o', 'u')); // --> Hellu, wurld
console.log(str.repeat(3));  // --> Hello, worldHello, worldHello, world
```

Метод `replace` производит замену только первого вхождения, метод `replaceAll` появился только в ES2021.

### Отсечение пробелов

```js
const spacesStr = '   Mark Knopfler       ';
console.log(`>>>${spacesStr}<<<`);  // --> >>>   Mark Knopfler       <<<
console.log(`>>>${spacesStr.trimStart()}<<<`);  // --> >>>Mark Knopfler       <<<
console.log(`>>>${spacesStr.trimEnd()}<<<`);  // --> >>>   Mark Knopfler<<<
console.log(`>>>${spacesStr.trim()}<<<`);  // --> >>>Mark Knopfler<<<
```

### Работа с отдельными символами

```js
console.log(str.charAt(0)); // Символ в указанной позиции (внутреннее представление, т.е. для суррогатной пары возвращается только часть символа)
console.log(str.charCodeAt(0)); // Код символа в указанной позиции (внутреннее представление)
console.log(str.codePointAt(0)); // UNICODE-символ в указанной позиции
```

## Тегированные шаблонные строки (tagged template literals)

Шаблонный литерал представляет из себя текстовую строку с заполнителями:

```js
const name = 'Mark Knopfler';
const wish1 = 'peace';
const wish2 = 'tranquillity'

const message1 = `Hi ${name}! I wish you ${wish1} and ${wish2}!!!`;

console.log(message1); // --> Hi Mark Knopfler! I wish you peace and tranquillity!!!
```

Шаблонные литералы позволяют использовать специальный синтаксис, называемый тегами:

```js
const message2 = logTag`Hi ${name}! I wish you ${wish1} and ${wish2}!!!`;
// --> [ 'Hi ', '! I wish you ', ' and ', '!!!' ]
// --> [ 'Mark Knopfler', 'peace', 'tranquillity' ]
```

Тег представляет из себя обычную функцию, которая получает на входе массив частей литерала, находящихся между заполнителями, и все заполнители как отдельные параметры этой функции:

```js
function logTag(literalParts, ...fillers) {
    console.log(literalParts);
    console.log(fillers);

    return literalParts.reduce(
        (result, part, i) => result + part + (fillers[i] ?? ''),
        ''
    );
}
```

Из примера видно, что обработка происходит в момент создания литерала.

Очевидно, что теги используются для некоторого преобразования строк. Пример (преобразование заполнителей в upper case):

```js
function uppercaseFillers(literalParts, ...fillers) {
    const newFillers = fillers.map(filler => filler.toUpperCase());

    return newFillers.reduce(
        (result, filler, i) => result + filler + literalParts[i + 1],
        literalParts[0]
    );
}

const message3 = uppercaseFillers`Hi ${name}! I wish you ${wish1} and ${wish2}!!!`;
console.log(message3); // --> Hi MARK KNOPFLER! I wish you PEACE and TRANQUILLITY!!!
```

Тег не обязан возвращать строку, это может быть результат любого типа:

```js
function mainQuestonAnswer(literalParts, ...fillers) {
    return 42;
}

const message4 = mainQuestonAnswer`Hi ${name}! I wish you ${wish1} and ${wish2}!!!`;
console.log(message4); // --> 42
```

Тегированные шаблонные литералы часто используются для создания DSL, например, как это делают библиотека [Emotion](https://emotion.sh/docs/introduction) (тег `css`) или [GraphQL](https://github.com/apollographql/graphql-tag) (тег `gql`):

```js
import { css, cx } from '@emotion/css'

const color = 'white'

render(
  <div
    className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
)
```

```js
import gql from 'graphql-tag';

const query = gql`
  {
    user(id: 5) {
      firstName
      lastName
    }
  }
`
```
### Встроенный тег `String.raw`

В JavaScript есть встроенный тег `String.raw`, который позволяет пропустить обработку в литерале управляющий последовательностей и получить этот литерал "как есть":

```js
const str1 = 'Ща будет TAB\t и перевод \nстроки';
console.log(str1);
// --> Ща будет TAB	 и перевод 
// --> строки

const str2 = String.raw`Ща будет TAB\t и перевод \nстроки`;
console.log(str2); // --> Ща будет TAB\t и перевод \nстроки
```

