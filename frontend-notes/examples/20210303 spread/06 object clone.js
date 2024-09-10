// клонирование объекта
const fred = { name: 'Fred', age: 42 };
const objCopy = { ...fred };
console.log(objCopy);
// !!!
// копия поверхностная
// прототип не копируется