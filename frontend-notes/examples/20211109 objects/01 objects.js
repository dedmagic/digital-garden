// Создание объектов
// Способ №1: литерал
const empty_object = {};

console.log(typeof empty_object);
console.log(empty_object.toString());
console.log('-'.repeat(30));

const musician = {
    firstName: 'Mark',
    secondName: 'Knopfler',
};

// Два способа обращения к свойствам объекта
console.log(musician.toString());
console.log(musician.firstName);
console.log(musician["secondName"]);
console.log('-'.repeat(30));

// Изменение свойств объекта
musician.firstName = 'Michael';
musician["secondName"] = 'Jackson';

// Добавление нового свойства
musician.job = 'singer';

console.log(musician.firstName);
console.log(musician["secondName"]);
console.log(musician["job"]);
console.log('-'.repeat(30));

printObject(musician);

// Удаление свойств объекта
delete musician.job;
console.log(musician.job);
console.log('-'.repeat(30));
printObject(musician);

// Создание методов объектов
const person = {
    firstName: 'Mark',
    secondName: 'Knopfler',

    // Первый способ объявления метода
    printName: function () {
        console.log(this.firstName);
    },

    // Стрелочная функция как метод не может использовать `this`
    wrongPrintName: () => {
        console.log(this.firstName);
    },

    // Второй способ объявления функции
    printSecondName() {
        console.log(this.secondName);
    }
}

person.printName();
person.wrongPrintName();
person.printSecondName();
console.log('-'.repeat(30));

printObject(person);

// Вызов метода как элемента словаря
person["printName"]();
console.log('-'.repeat(30));

// Второй способ создания объекта: через конструктор
// Принято называть с заглавной
function Person(name, secondName) {
    this.name = name;
    this.secondName = secondName;
    // В конструкторе можно `this` в стрелочной функции
    this.hello = () => `Hello, ${this.name}`;
}

const mark = new Person('Mark', 'Knopfler');
console.log(typeof mark);
console.log(mark.hello());
console.log('-'.repeat(30));

printObject(mark);

mark.toString = function () {
    return `${this.name} ${this.secondName}`;
}
console.log(mark.toString());
printObject(mark);
console.log('-'.repeat(30));

// Операция `instanceof`
console.log(mark instanceof Person);
console.log(musician instanceof Person);

// ----------------------------------------------
// Вспомогательная функция: вывод свойств объекта
function printObject(obj) {
    // Вывод свойств объекта с помощью цикла for/in
    for (const key in obj) {
        const value = obj[key];
        console.log(`[${key}] = ${value}`);
    }
    console.log('-'.repeat(30));
}
// ----------------------------------------------

// Другие способы перебора свойств объекта: после прототипного наследования и дескрипторов свойств
// Проверка свойств объекта: после прототипного наследования и дескрипторов свойств
// Создание объектов с помощью `Object.create()`: после прототипного наследования
// Копирование объектов с помощью `Object.assign()`: после прототипного наследования
// Сериализация объектов
