
// Псевдомассив arguments (массивоподобный объект)
function func5() {
    console.log(`func5: ${arguments.length}`);
}

func5();
func5(2, 3);
func5([1, 2, 3, 4]);

const func6 = () => { console.log(`func6: ${arguments.length}`); }
//func6();
// func6(5, 7);

line();
// Сбор параметров в массив (rest)
function funcD(first, second, ...rest) {
    console.log(first); // Первый аргумент
    console.log(second); // Второй аргумент
    console.log(rest[0]); // Третий аргумент
    console.log(rest[1]); // Четвертый аргумент
    // etc.
    console.log(rest);
}

funcD(1, 2, 3, 4, 5, 6, 7);

line();
// Отсутствующие параметры
function funcA(a, b) {
    console.log(a, b);
}

funcA(1, 2);
funcA(1);

line();
// Передача параметров по значению
function func7(a, b) {
    a = 42;
    b.prop = 42;
}

let x = 96;
let y = { prop: 96 };

console.log({ x, y });
func7(x, y);
console.log({ x, y });



// helper
function line() {
    console.log(`${'-'.repeat(20)}\n`);
}
