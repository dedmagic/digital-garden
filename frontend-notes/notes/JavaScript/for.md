# Циклы в JavaScript

Кроме стандартного цикла `for`, в JavaScript есть ещё цикл `for/in` – обход свойств объекта, и `for/of` – обход элементов итерируемого объекта.

## Обход массивов

```JavaScript
const arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let index in arr) {
    console.log(arr[index]);
}

for (let item of arr) {
    console.log(item);
}
```

## Обход строк
```JavaScript
const str = 'Hello world!';
for (let char of str) {
    console.log(char);
}

for (let index in str) {
    console.log(`str[${index}] = ${str[index]}`);
}
```

## Обход свойств объекта

```JavaScript
const obj = {
    name: 'Mark Knopfler',
    age: 71,
    profession: 'musician'
};

for (let key in obj) {
    console.log(`obj[${key}] = ${obj[key]}`);
}
// obj[name] = Mark Knopfler
// obj[age] = 71
// obj[profession] = musician

for (let key of Object.keys(obj)) {
    console.log(key);
}
// name
// age
// profession

for (let values of Object.values(obj)) {
    console.log(values);
}
// Mark Knopfler
// 71
// musician

for (let [key, value] of Object.entries(obj)) {
    console.log(`obj[${key}] = ${value}`);
}
// obj[name] = Mark Knopfler
// obj[age] = 71
// obj[profession] = musician
```

## Другие итерируемые коллекции

```JavaScript
const set = new Set([1, 1, 2, 2, 3, 3]);
for (let item of set) {
    console.log(item);
}
// 1
// 2
// 3

const map = new Map([
    [1, 'one'],
    ['key2', 'two'],
    ['key3', 3]
]);
for (let [key, value] of map) {
    console.log(`map[${key}] = ${value}`);
}
// map[1] = one
// map[key2] = two
// map[key3] = 3
```