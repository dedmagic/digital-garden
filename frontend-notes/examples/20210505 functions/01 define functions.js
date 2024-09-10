// Способы объявления функций

// Способ 1: инструкция function
func1(1, 1);
function func1(a, b) {
    console.log(`func1: ${a + b}`);
}
func1(1, 1);

// Способ 2: функциональное выражение
line();
//func2(2, 2);
const func2 = function (a, b) {
    console.log(`func2: ${a + b}`);
}
func2(2, 2);

// Именованное функциональное выражение
const rec_func = function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(rec_func(5));
//console.log(factorial(5));

// Способ 3: с помощью конструктора
// ! Функция всегда создаётся в глобальной области видимости
line();
//func3(3, 3);
const func3 = Function('a', 'b', 'console.log(`func3: ${a + b}`)');
func3(3, 3);

// Способ 4: стрелочная функция
line();
// func4(4, 4);
const func4 = (a, b) => { console.log(`func4: ${a + b}`); }
func4(4, 4);

line();
const func44 = (a, b) => { return a + b };
const func45 = (a, b) => a + b;
console.log(func44(1, 2), func45(1, 2));



// helper
function line() {
    console.log(`${'-'.repeat(20)}\n`);
}
