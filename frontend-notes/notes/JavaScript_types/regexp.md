# Регулярные выражения в JavaScript

* [Способы создания регулярных выражений](#create-regexp)
* [Строковые методы, использующие регулярные выражения](#string-methods)
  * [String.prototype.search](#search)
  * [String.prototype.replace](#replace)
  * [String.prototype.match](#match)
    * [Использование метода `match` с флагом `g`](#with-flag-g)
    * [Метод `match` без флага `g`](#without-flag-g)
    * [Флаг `y` (sticky)](#flag-y)
    * [Стартовая позиция для поиска: `lastIndex`](#lastIndex)
    * [Метод `match` – совпадений не найдено](#no-matches-found)
  * [String.prototype.matchAll](#matchAll)
  * [String.prototype.split](#split)
* [Конструкторы типа `RegExp`](#regexp-constructors)
  * [Экранирование обратных слешей](#escaping-slashes)
  * [Флаги регулярного выражения в конструкторе](#flags-in-constructor)
  * [Создание регулярного выражения на основе регулярного выражения](#create-from-regexp)
* [Свойства объекта типа `RegExp`](#regexp-properties)
* [Методы типа RegExp](#regexp-methods)
  * [RegExp.prototype.test](#test)
  * [RegExp.prototype.exec](#exec)
    * [RegExp.prototype.exec – поиск всех вхождений](#exec-find-all)
* [RegExp.prototype.lastIndex – проблемы](#lastindex-problems)
---
<div id='create-regexp' />

## Способы создания регулярных выражений

Регулярные выражения в JavaScript можно создавать двумя способами: с помощью функции-конструктора и с помощью литерала

```js
const regexp1 = new RegExp('ol|lo');
console.log(regexp1); // --> /ol|lo/

const regexp2 = /ol|lo/;
console.log(regexp2); // --> /ol|lo/
```

Эти два способа равнозначны, т.е. будет создано одно и то же регулярное выражение.

При создании регулярного выражения могут использоваться флаги, задающие его режим работы:

```js
const regexp3 = new RegExp('ol|lo', 'gi');
console.log(regexp3); // --> /ol|lo/gi

const regexp4 = /ol|lo/gi;
console.log(regexp4); // --> /ol|lo/gi
```

Порядок указания флагов не важен:

```js
const regexp5 = /ol|lo/ig;
console.log(regexp4); // --> /ol|lo/gi
```

В отличие от регистра – флаги должны быть в нижнем:

```js
const regexp6 = /ol|lo/Gi; // --> SyntaxError: Invalid regular expression flags
```

Операция `typeof` возвращает для регулярных выражений значение `object`.

<div id='string-methods' />

## Строковые методы, использующие регулярные выражения

<div id='search' />

### String.prototype.search

Метод `search` осуществляет поиск подстроки и возвращает её позицию или значение -1, если подстрока не найдена. 

```js
const shakespeare = 'To be, or not to be, that is the question!'
const regexp = /on|no/gi

const res1 = shakespeare.search(regexp) // flag 'g' ignored
console.log(res1) //--> 10

const res2 = 'Hello world!'.search(regexp)
console.log(res2) //--> -1

const res3 = shakespeare.search(/to/i) // flag 'i' used
console.log(res3) //--> 0
```

Примечание 1. Флаг `g` игнорируется, то есть при нескольких совпадениях будет найдено только первое из них.

Примечание 2. Если аргументом является не регулярное выражение, то он будет преобразован в регулярное выражение путём передачи конструктору `RegExp`.

<div id='replace' />

### String.prototype.replace

Осуществляет замену найденной подстроки на указанную подстроку. Если указан флаг `g`, то будут заменены все найденные подстроки.

```js
const res4 = shakespeare.replace(regexp, '42')
console.log(res4) //--> To be, or 42t to be, that is the questi42!
```
В строке замены можно использовать группы из строки поиска. Например, код в следующем примере меняет слова `to` и `be` местами:

```js
const res5 = shakespeare.replace(/(to) (be)/gi, '$2 $1')
console.log(res5) //--> be To, or not be to, that is the question!
```

Примечание 1. Если строка поиска не является регулярным выражением, то она НЕ будет преобразована в регулярное выражение. 

Примечание 2. Если в регулярном выражении используются именованные группы, то строка замены может ссылаться на них по именам, а не номерам.

В качестве второго параметра метод `replace` вместо строки может принимать функцию. Эта функция принимает следующие параметры:
1. Найденную подстроку.
2. По одному параметру на каждую группу в найденной подстроке.
3. Позицию найденной подстроки.
4. Строку, в которой осуществляетя поиск.

Возвращает функция строку замены.

В следующем примере все найденные подстроки переводятся в верхний регистр.

```js
function replacer(match, group1, group2, index, sourceString) {
  console.log({
    match,
    group1,
    group2,
    index,
    sourceString
  })
  return match.toUpperCase()
}

const res98 = shakespeare.replace(/(to) (be)/gi, replacer)
console.log(res98) //--> TO BE, or not TO BE, that is the question!
```

При этом логирование вернёт следующий результат:

```js
{
  match: 'To be',
  group1: 'To',
  group2: 'be',
  index: 0,
  sourceString: 'To be, or not to be, that is the question!'
}
{
  match: 'to be',
  group1: 'to',
  group2: 'be',
  index: 14,
  sourceString: 'To be, or not to be, that is the question!'
}
```

<div id='match' />

### String.prototype.match

Метод `match` осуществляет поиск подстроки в строке. В отличие от `search`, возвращает не индекс, а массив результатов или объект с метаданными результата. 


<div id='with-flag-g' />

#### Использование метода `match` с флагом `g`

Вызов метода `match` с флагом `g` возвращает массив найденных совпадений или `null`, если они не найдены.

```js
const res6 = shakespeare.match(/\w+/g) // Разбиение на слова
console.log(res6) //--> ['To', 'be', 'or', 'not', 'to', 'be', 'that', 'is', 'the', 'question']
```

<div id='without-flag-g' />

#### Метод `match` без флага `g`

Вернёт объект, в котором в свойстве-индексе `[0]` будет найденная подстрока, в свойстве `index` – позиция найденной подстроки, в `input` – исходная строка.  

```js
const atRegExp = /@/
const res7 = message.match(atRegExp)
console.log(res7)
/* -->
[
  '@',
  index: 23,
  input: 'Write to me at superman@yandex.com. By!',
  groups: undefined // используется для обращения к именованным группам
]
*/
```

Если в поиске используются группы, то они раскладываются в индексируемые свойства `[1]`, `[2]`, `[3]` и т.д.

```js
const emailRegExp = /(\w+)@(\w+)\.(\w+)/
const res8 = message.match(emailRegExp)
console.log(res8[0]) //--> superman@yandex.com
console.log(res8[1]) //--> superman
console.log(res8[2]) //--> yandex
console.log(res8[3]) //--> com
```

Если при поиске используются именованные группы, к ним можно обращаться как по индексам, так и по именам через свойство `groups`.

```js
const emailRegExpNamingGroups = /(?<user>\w+)@(?<domain2>\w+)\.(?<domain1>\w+)/
const res9 = message.match(emailRegExpNamingGroups)
console.log(res9.groups.user) //--> superman
console.log(res9.groups.domain2) //--> yandex
console.log(res9.groups.domain1) //--> com
```

<div id='flag-y' />

#### Флаг `y` (sticky)

Обычно при поиске между найденными подстроками могут располагаться другие символы. Использование флага `y` приводит к тому, что результаты должны плотно прилегать друг к другу, т.е. каждый следующий должен начинаться сразу, как только закончился предыдущий. При этом первая найденная подстрока должна обязательно совпадать с началом строки (т.е. начинаться в позиции с индексом 0). 

```js
const res10 = shakespeare.match(/\w+ /gy) // Слово с пробелом в конце
console.log(res10) //--> ['To ']

const res11 = 'To be or not to be that is the question'.match(/\w+ /gy)
console.log(res11) //--> ['To ', 'be ', 'or ', 'not ', 'to ', 'be ', 'that ', 'is ', 'the ']
```

В первом примере была найдена только подстрока `To`, т.к. сразу за нею следует текст `be,` (запятая в конце).

Во втором примере обрати внимание, бро, на отсутствие последнего слова, т.к. после него не следует пробел.

<div id='lastIndex' />

#### Стартовая позиция для поиска: `lastIndex`

При использовании регулярного выражения без ключа `g` и с ключом `y` можно задать стартовую позицию для поиска.

```js
const wordWithSpaceRegExp = /\w+ /y
const res12 = shakespeare.match(wordWithSpaceRegExp)
console.log(res12[0]) //--> 'To'
wordWithSpaceRegExp.lastIndex = 7
const res13 = shakespeare.match(wordWithSpaceRegExp)
console.log(res13[0]) //--> 'or'
```

<div id='no-matches-found' />

#### Метод `match` – совпадений не найдено

В случае, если метод `match` не нашёл в строке совпадений, он возвращает значение `null`.

```js
const res97 = shakespeare.match('Billy Joel')
console.log(res97) // --> null
```

<div id='matchAll' />

### String.prototype.matchAll

Метод `matchAll` используется только с глобальными регулярными выражениями и возвращает итератор для прохода по результатам поиска.

```js
 // Слова, оканчивающиеся пробелом
for (let word of shakespeare.matchAll(/\w+ /g)) {
  console.log(word[0])
}
/* -->
To
or
not
to
that
is
the
*/
```

Если попытаться вызвать метод `matchAll` для неглобального регулярного выражения, то получим исключение.

```js
for (let word of shakespeare.matchAll(/\w+ /)) {
  console.log(word[0])
}

// --> TypeError: String.prototype.matchAll called with a non-global RegExp argument
```

<div id='split' />

### String.prototype.split

Метод `split` используется для разбиения строки на массив подстрок, используя указанный разделитель, причём разделителем может быть как строка, так и регулярное выражение.

```js
const res14 = shakespeare.split(/\s/)
console.log(res14)
/* -->
[
  'To',   'be,',
  'or',   'not',
  'to',   'be,',
  'that', 'is',
  'the',  'question!'
]
*/
```

Если разделитель содержит группы, то они тоже будут включены в результат разбиения.

```js
// Разбивать по запятым и восклицательным знакам
const res15 = shakespeare.split(/([,!])/)
console.log(res15)
/* -->
[
  'To be',
  ',',
  ' or not to be',
  ',',
  ' that is the question',
  '!',
  ''
]
*/
```

<div id='regexp-constructors' />

## Конструкторы типа `RegExp`

<div id='escaping-slashes' />

### Экранирование обратных слешей

Не всегда одно и то же регулярное выражение будет выглядеть одинаково при задании с помощью литерала и с помощью конструктора.

Пример:

```js
const shakespeare = 'To be, or not to be, that is the question!'

// Слово с последующим пробелом
const regexp1 = /\w+ /
const res1 = shakespeare.match(regexp1)
console.log(res1)
/* -->
[
  'To ',
  index: 0,
  input: 'To be, or not to be, that is the question!',
  groups: undefined
]
*/
```

Но если указать точно такое же регулярное выражение в конструкторе, то результать будет другим:

```js
const regexp2 = new RegExp('\w+ ')
const res2 = shakespeare.match(regexp2)
console.log(res2) // --> null
```

Причина в том, что в конструктор регулярное выражение передаётся как строка, а в строках обратный слеш имеет своё, особое значение – экранирование управляющих символов.  
Поэтому в конструкторах сам обратный слеш нужно экранировать:

```js
const regexp3 = new RegExp('\\w+ ')
const res3 = shakespeare.match(regexp3)
console.log(res3)

/* -->
[
  'To ',
  index: 0,
  input: 'To be, or not to be, that is the question!',
  groups: undefined
]
*/
```

<div id='flags-in-constructor' />

### Флаги регулярного выражения в конструкторе

В конструкторе типа `RegExp` может быть второй параметр-строка, в котором перечисляются флаги регулярного выражения. Так же, как и в литералах, порядок флагов не важен, регистр – важен.

```js
const regexp4 = new RegExp('\\w+ ', 'gi')
const res4 = shakespeare.match(regexp4)
console.log(res4) // -->['To ', 'or ', 'not ', 'to ', 'that ', 'is ', 'the ']
```

<div id='create-from-regexp' />

### Создание регулярного выражения на основе регулярного выражения

В качестве первого параметра конструктора вместо строки может использоваться другое регулярное выражение. Таким образом можно, например, создавать регулярное выражение, аналогичное уже существующему, но с добавлением к нему флагов.

```js
const regexp6 = new RegExp('\\w+ ')
const regexp5 = new RegExp(regexp6, 'g')
const res5 = shakespeare.match(regexp5)
console.log(res5) // -->['To ', 'or ', 'not ', 'to ', 'that ', 'is ', 'the ']
```

Указанные флаги заменяют флаги регулярки-источника. Если во втором конструкторе флаги не указать, то они будут скопированы из источника:

```js
console.log(regexp5) // --> /\w+ /g
const regexp7 = new RegExp(regexp5)
console.log(regexp7) // --> /\w+ /g
```

Для удаления флагов из регулярки нужно в качестве второго параметра передать пустую строку.

<div id='regexp-properties' />

## Свойства объекта типа `RegExp`

* Свойство только для чтений `source` содержит исходный код регулярного выражения, т.е. текст, который в литерале находится между слешами
* `lastIndex` – поддерживает как чтение, так и запись; задаёт позицию, начиная с которой будет производится поиск
* `flags` – содержит все флаги в виде строки; только для чтения
* `global`, `ignoreCase`, `multiline`, `dotAll`, `sticky`, `unicode`, `hasIndices` – булевские свойства, содержащие `true` или `false` в зависимости от того, включён соответствующий режим или нет (т.е. присутствует или отсутствует флаг); только для чтения

```js
const regexp = /\w+ /gi;

console.log(regexp.source) // --> \w+

//#region lastIndex: read & write
console.log(regexp.lastIndex) // --> 0
regexp.lastIndex = 10;
console.log(regexp.lastIndex) // --> 10
//#endregion lastIndex: read & write

//#region flags
console.log(regexp.flags) // --> gi

// flag 'g'
console.log(regexp.global) // --> true
// flag 'i'
console.log(regexp.ignoreCase) // --> true
// flag 'm'
console.log(regexp.multiline) // --> false
// flag 's'
console.log(regexp.dotAll) // --> false
// flag 'y'
console.log(regexp.sticky) // --> false
 // flag 'u'
console.log(regexp.unicode) // --> false
// flag 'd'
console.log(regexp.hasIndices) // --> false
//#endregion flags

const shakespeare = 'To be,\r\n or not to be,\r\n that is the question!'
console.log(shakespeare)
/* -->
To be,
 or not to be,
 that is the question!
*/

//#region flag 'm' - multiline
// запятая в конце строки 
const regexp1 = /,$/g
const res1 = shakespeare.match(regexp1)
console.log(res1) // --> null

const regexp2 = /,$/gm
const res2 = shakespeare.match(regexp2)
console.log(res2) // --> [ ',', ',' ]
//#endregion flag 'm' - multiline

//#region flag 's' - dotAll
// запятая и пробел с любыми символами между ними
const regexp3 = /,.+ /g
const res3 = shakespeare.match(regexp3)
console.log(res3) // --> null

const regexp4 = /,.+ /gs
const res4 = shakespeare.match(regexp4)
console.log(res4) // --> [ ',\r\n or not to be,\r\n that is the ' ]

// выключаем "жадность", включаем "ленивость"
const regexp5 = /,.+? /gs
const res5 = shakespeare.match(regexp5)
console.log(res5) // --> [ ',\r\n ', ',\r\n ' ]
//#endregion flag 's' - dotAll

//#region flag 'u' - unicode
const regexp6 = /./g
const res6 = '💘'.match(regexp6)
console.log(res6) // --> [ '�', '�' ]

const regexp7 = /./gu
const res7 = '💘'.match(regexp7)
console.log(res7) // --> [ '💘' ]
//#endregion flag 'u' - unicode
```

<div id='regexp-methods' />

## Методы типа RegExp

<div id='test' />

### RegExp.prototype.test

Метод `RegExp.prototype.test` осуществляет поиск шаблона в строке и возвращает `true` или `false`.

```js
const regexp1 = /be/g;
let res1 = regexp1.test(shakespeare)
console.log(res1) // --> true
```

Если в регулярном выражении используются флаги `g` или `y`, то результат зависит от значения свойства `lastIndex`.

```js
regexp1.lastIndex = 20;
res1 = regexp1.test(shakespeare)
console.log(res1) // --> false
```

<div id='exec' />

### RegExp.prototype.exec

При вызове метода `RegExp.prototype.exec` для регулярного выражения без флага `g` этот метод ведёт себя аналогично `String.prototype.match`.

```js
const message = 'Write to me at superman@yandex.com. By!'

//#region RegExp.prototype.exec without `g` and without groups
const atRegExp = /@/
const res2 = atRegExp.exec(message)
console.log(res2)
console.log(res2[0]) // --> @
/* -->
[
  '@',
  index: 23,
  input: 'Write to me at superman@yandex.com. By!',
  groups: undefined
]
*/
//#endregion RegExp.prototype.exec without `g` and without groups

//#region RegExp.prototype.exec without `g` and with groups
const emailRegExp = /(\w+)@(\w+)\.(\w+)/
const res3 = emailRegExp.exec(message)
console.log(res3[0]) //--> superman@yandex.com
console.log(res3[1]) //--> superman
console.log(res3[2]) //--> yandex
console.log(res3[3]) //--> com

console.log(res3)
/* -->
[
  'superman@yandex.com',
  'superman',
  'yandex',
  'com',
  index: 15,
  input: 'Write to me at superman@yandex.com. By!',
  groups: undefined
]
*/
//#endregion RegExp.prototype.exec without `g` and with groups

//#region RegExp.prototype.exec without 'g' flag and with naming groups
const emailRegExpNamingGroups = /(?<user>\w+)@(?<domain2>\w+)\.(?<domain1>\w+)/
const res4 = emailRegExpNamingGroups.exec(message)
console.log(res4.groups.user) //--> superman
console.log(res4.groups.domain2) //--> yandex
console.log(res4.groups.domain1) //--> com
//#endregion RegExp.prototype.exec without 'g' flag and with naming groups
```

<div id='exec-find-all' />

### RegExp.prototype.exec – поиск всех вхождений

При использовании в регулярном выражении флага `g` метод `RegExp.prototype.exec` всегда будет возвращать такой же объект, как и при отсутствии этого флага, но учитывает значение свойства `lastIndex`, которое изменяется после каждого поиска:

```js
const regexp5 = /\w+/g;
console.log({ lastIndex: regexp5.lastIndex })

const res51 = regexp5.exec(shakespeare)
console.log(res51)
console.log({ lastIndex: regexp5.lastIndex })

const res52 = regexp5.exec(shakespeare)
console.log(res52)
console.log({ lastIndex: regexp5.lastIndex })

/* -->
{ lastIndex: 0 }
[
  'To',
  index: 0,
  input: 'To be, or not to be, that is the question!',
  groups: undefined
]
{ lastIndex: 2 }
[
  'be',
  index: 3,
  input: 'To be, or not to be, that is the question!',
  groups: undefined
]
{ lastIndex: 5 }
*/
```

Соответственно, найти все вхождения можно при помощи цикла:

```js
let res53;
while ((res53 = regexp5.exec(shakespeare)) !== null) {
  console.log({ word: res53[0] })
}

/* -->
{ word: 'To' }
{ word: 'be' }
{ word: 'or' }
{ word: 'not' }
{ word: 'to' }
{ word: 'be' }
{ word: 'that' }
{ word: 'is' }
{ word: 'the' }
{ word: 'question' }
*/
```

Лог изменений свойства `lastIndex`:

```js
let res53;
while ((res53 = regexp5.exec(shakespeare)) !== null) {
  console.log({ word: res53[0], lastIndex: regexp5.lastIndex })
}

/* -->
{ word: 'To', lastIndex: 2 }
{ word: 'be', lastIndex: 5 }
{ word: 'or', lastIndex: 9 }
{ word: 'not', lastIndex: 13 }
{ word: 'to', lastIndex: 16 }
{ word: 'be', lastIndex: 19 }
{ word: 'that', lastIndex: 25 }
{ word: 'is', lastIndex: 28 }
{ word: 'the', lastIndex: 32 }
{ word: 'question', lastIndex: 41 }
*/
```

<div id='lastindex-problems' />

### RegExp.prototype.lastIndex – проблемы

Использование метода `RegExp.prototype.exec` для поиска всех вхождений чревато проблемами, поэтому вместо него лучше использовать новый метод `String.prototype.matchAll`.

#### Проблема №1: бесконечный цикл

```js
let res;
while ((res = /\w+/g.exec(shakespeare)) !== null) {
  console.log({ word: res[0], time: new Date() }) // Вывод времени для контроля того, что код продолжает выполняться
}
```

Этот пример отличается от предыдущего только одним – регулярное выражение не хранится в переменной, а задано прямо в цикле своим литералом. Если запустить этот код, то получим такой вывод:

```json
{ word: 'To', time: 2022-10-20T01:43:52.145Z }
{ word: 'To', time: 2022-10-20T01:43:52.145Z }
{ word: 'To', time: 2022-10-20T01:43:52.145Z }
{ word: 'To', time: 2022-10-20T01:43:52.146Z }
{ word: 'To', time: 2022-10-20T01:43:52.146Z }
{ word: 'To', time: 2022-10-20T01:43:52.146Z }
{ word: 'To', time: 2022-10-20T01:43:52.146Z }
{ word: 'To', time: 2022-10-20T01:43:52.147Z }
{ word: 'To', time: 2022-10-20T01:43:52.147Z }
{ word: 'To', time: 2022-10-20T01:43:52.147Z }
{ word: 'To', time: 2022-10-20T01:43:52.147Z }
{ word: 'To', time: 2022-10-20T01:43:52.148Z }
{ word: 'To', time: 2022-10-20T01:43:52.148Z }
{ word: 'To', time: 2022-10-20T01:43:52.148Z }
{ word: 'To', time: 2022-10-20T01:43:52.148Z }
{ word: 'To', time: 2022-10-20T01:43:52.149Z }
{ word: 'To', time: 2022-10-20T01:43:52.149Z }
```

Т.е. имеет место быть бесконечный цикл, который на каждой итерации находит первое слово.

Это происходит потому, что на каждой итерации объект регулярного выражения создаётся заново, и свойство `lastIndex` всегда имеет значение 0.

#### Проблема №2: ошибочное переиспользование регулярного выражения

Возможны ситуации, когда ошибкой является противоположный подход – переиспользование регулярки. Пример (бесстыдно украден у моего любимого Флэнагана):

```js
const words = ['apple', 'book', 'coffee']
const doubleLetters = /(\w)\1/g;
for (let word of words) {
  if (doubleLetters.test(word)) {
    console.log(word)
  }
}

/* -->
apple
coffee
*/
```

Выведены только первое и третье слово, второе пропало.

Чтобы понять, почему это произошло, добавим вывод значения свойства `lastIndex`:


```js
...
console.log({ word, lastIndex: doubleLetters.lastIndex })
...

/* -->
{ word: 'apple', lastIndex: 3 }
{ word: 'coffee', lastIndex: 4 }
*/
```

После первого поиска стартовая позиция для следующего сдвинулась так, что во втором слове нужный фрагмент уже не был учтён.

Примечание: в данном случае, т.к. мы просто определяем наличие в слове такого фрагмента, проблема решается удалением флага `g`:

```json
{ word: 'apple', lastIndex: 0 }
{ word: 'book', lastIndex: 0 }
{ word: 'coffee', lastIndex: 0 }
```

Однако очевидно, что этот способ не подойдёт в том случае, если нам нужно будет не просто определить наличие или отсутствие, а найти все вхождения и что-то с ними сделать (в слове "coffee" будет найдена только первая пара).
