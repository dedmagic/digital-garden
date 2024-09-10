let map = new Map();

map.set(1, 'number1');
map.set('1', 'string1');
map.set(true, 'bool1');

console.log(map);
console.log(map.size);
line();

// перебор с помощью forEach
map.forEach(value => console.log(value));
console.log('-'.repeat(20));
map.forEach((value, key, map) => console.log(key, value, map.size));
line();

// перебор с помощью for..of
for (let item of map) {
    console.log(item);
}
console.log('-'.repeat(20));
for (let [key, value] of map) {
    console.log(`${key} => ${value}`);
}
line();

// clear
map.clear();
console.log(map.size);

// method set chaining
map.set(1, 'number1')
    .set('1', 'string1')
    .set(true, 'bool1');

console.log(map);
line();

// create from values
let map2 = new Map([
    [2, 'number2'],
    ['2', 'string2'],
    [false, 'bool2'],
]);
console.log(map2);
line();

// reading
console.log(map.get(1));
console.log(map.get(`1`));
line();

// delete item
map.delete('1');
console.log(map);
line();

// check existing
console.log(map.has(1));
console.log(map.has('1'));
line();

// другие способы обхода словаря
console.log(map2.keys());
console.log(map2.values());
console.log(map2.entries());

// helper
function line() {
    console.log('-'.repeat(20));
}
