function doSomething(first, second, ...rest) {
    console.log(first); // Первый аргумент
    console.log(second); // Второй аргумент
    console.log(rest[0]); // Третий аргумент
    console.log(rest[1]); // Четвертый аргумент
    // etc.
    console.log(rest);
}

//doSomething(1, 2, 3, 4, 5, 6);
doSomething(1, 2);
