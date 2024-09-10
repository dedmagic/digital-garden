# ASI (Automatic Semicondactor Insertion)

## Автоматическая вставка точки с запятой в конце строки

В JavaScript можно опускать точку с запятой в конце строки, т.к. она вставляется автоматически (не физически вставляется, а при синтаксическом анализе считается, что она там есть). Например, следующий код вполне валиден и выполняется:

```js
const a = 42
const b = 42 ** 2
console.log({ b }) // --> { b: 1764 }
```

## Случаи, когда точка с запятой не вставляется

Но! Точка с запятой вставляется не всегда, а только если объединение двух строк приводит к нарушению синтаксиса. Если такого нарушения нет, то точка с запятой вставляться не будет. Это в некоторых случаях может приводить к исключению или неверному выполнению кода:

```js
// 01 square brackets
const a = 42
[1, 2, 3].forEach(item => console.log(item))
// TypeError: Cannot read properties of undefined (reading 'forEach')

// 02 round brackets
const b = 42
(123 + 96).toString()
// TypeError: 42 is not a function

// 03 regexp literal
const c = 42
/.l/.test('Hello world')
// SyntaxError: Unexpected token '.'

// 04 unary plus
const d = 42
+'96'.toString()
console.log(d) // --> 4296

// 05 unary minus
const e = 42
-96;
console.log(e) // --> -54
```

## Случаи, когда точка с запятой вставляется без анализа следующей строки

+ Если после инструкции `return` следует завершение строки, то в этом месте вставляется точка с запятой независимо от того, что находится в следующей строке.

```js
function func() {
    return
        42;
}

console.log(func()) // --> undefined
```

Функция вернёт `undefined`, поскольку строка `return` интерпретируется как `return;`.

+ Аналогично с инструкцией `yield`:

```js
function* numbers() {
    yield
        42;
    yield
        96;
}

for(const num of numbers()) {
    console.log(num) 
}
/* -->
undefined
undefined
*/
```

+ Следущюй за `throw` конец строки вызовет ошибку:

```js
try {
    throw
        new Error('Error!')
} catch (error) {
    console.log(error)
}
// --> SyntaxError: Illegal newline after throw
```

+ `break`, `continue`

В следующем примере используется инструкция `break` с меткой, что позволяет выйти сразу за пределы помеченного этой меткой блока:

```js
block_label: {
    for (let i = 0; i < 10; i++) {
        console.log(i)
        if (i === 3) {
            break block_label
        }
    }
    console.log('Inside the block')
}
console.log('Outside the block')
/* -->
0
1
2
3
Outside the block
*/
```

Обрати внимание, бро, что сообщение "Inside the block" не вывелось.

Если после `break`/`continue` следует конец строки, то произойдёт автоматическая вставка точки с запятой:

```js
block_label: {
    for (let i = 0; i < 10; i++) {
        console.log(i)
        if (i === 3) {
            break
                block_label
        }
    }
    console.log('Inside the block')
}
console.log('Outside the block')
/* -->
0
1
2
3
Inside the block
Outside the block
*/
```

## Выводы: использовать ли точку с запятой?

+ Единственно правильного пути нет: правильно так, как решит команда
+ Наиболее безопасный путь: постоянное использование точки с запятой в конце строк
+ Нужно настроить инструмент автоформатирования таким образом, чтобы он автоматически вставлял точки с запятой в конце строк