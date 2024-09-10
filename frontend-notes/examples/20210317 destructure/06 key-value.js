// Деструктуризация пары "ключ - значение"
const fred = { name: 'Mark', age: 71 };
console.log(Object.entries(fred));
// [ [ 'name', 'Mark' ], [ 'age', 71 ] ]

for (let [key, value] of Object.entries(fred)) {
    console.log(`${key} = ${value}`);
}
// name = Mark
// age = 71
