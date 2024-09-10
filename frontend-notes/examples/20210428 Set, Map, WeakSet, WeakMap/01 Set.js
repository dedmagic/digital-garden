let set = new Set();

// добавление элементов множества
let mark = { name: 'Mark' };
let knopfler = { name: 'Knopfler' };
let cheb = { name: 'Cheb' };
let mami = { name: 'Mami' };

set.add(mark);
set.add(mark);
set.add(knopfler);
set.add(cheb);
set.add(mami);
set.add(cheb);

// получение количества элементов множества
console.log(`items: ${set.size}`);

// перебор с помощью forEach
set.forEach(item => console.log(item));
line();

set.forEach((item1, item2, set) => console.log(item1 === item2, set.size));
line();

// удаление элементов
set.delete(mami);

// перебор с помощью for..of
for (let item of set) {
    console.log(item);
}
line();

// проверка вхождения элемента в множество
console.log(set.has(mark));
console.log(set.has(mami));
console.log('-'.repeat(20));

// удаление всех элементов множества
set.clear();
console.log(set.size);
line();

// создание множества из итерируемого объекта
const arr = [1, 2, 3, 4, 5, 3, 5, 1];
const set_from_arr = new Set(arr);
console.log(set_from_arr);
let arr2 = [...set_from_arr];
console.log(arr2);
line();

// другие способы обхода множества
console.log(set_from_arr.keys());
console.log(set_from_arr.values());
console.log(set_from_arr.entries());

// helper
function line() {
    console.log('-'.repeat(20));
}