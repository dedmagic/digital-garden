# Прочие параметры (rest)

*Конструкция **rest** может встречаться в двух местах: в списке параметров функции (строго на последнем месте) и в левой части деструктуризации*

+ Функция с переменным числом параметров
```javascript
function doSomething(first, second, ...rest) {
    console.log(first); // Первый аргумент
    console.log(second); // Второй аргумент
    console.log(rest[0]); // Третий аргумент
    console.log(rest[1]); // Четвертый аргумент
    // etc.
}
``` 
Примечание 1: если передать меньше трёх параметров, то `rest` будет пустым массивом  
Примечание 2: в отличие от `arguments`, работает в стрелочных функциях

+ "Shift" нескольких значений (извлечение из массива первых нескольких элементов с одновременным их удалением из массива)
```javascript
let myArray = [1, 2, 3, 4, 5];
let [a, b, c, ...d] = myArray;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // [4, 5]
```

+ Получение конкрентых свойств и сбор оставшихся в новый объект
```javascript
let myObject = { a: 1, b: 2, c: 3, d: 4};
let { b, d, ...other } = myObject;
console.log(b); // 2
console.log(d); // 4
console.log(other); // { a: 1, c: 3 }
```

