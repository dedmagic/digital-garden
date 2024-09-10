function func1(a, b) {
    console.log(`func1: ${a + b}`);
}

const func2 = function (a, b) {
    console.log(`func2: ${a + b}`);
}

const rec_func = function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const func3 = new Function('a', 'b', 'console.log(`func3: ${a + b}`)');

const func4 = (a, b) => {
    console.log(`func4: ${a + b}`);
}

function func5() {
    console.log(`func5: ${arguments.length}`);
}

const func6 = () => { console.log(`func6: ${arguments.length}`); }

// Количество ожидаемых аргументов
console.log(func1.length);
console.log(func4.length);
console.log(func5.length);
console.log(func6.length);
console.log(rec_func.length);

line();
// Свойство name
console.log(func1.name);
console.log(func2.name);
console.log(func3.name);
console.log(func4.name);
console.log(func5.name);
console.log(func6.name);
console.log(rec_func.name);

// Исходный текст функции
line();
console.log(func1.toString());
line();
console.log(func4.toString());
line();
console.log(func6.toString());

// helper
function line() {
    console.log(`${'-'.repeat(20)}\n`);
}
