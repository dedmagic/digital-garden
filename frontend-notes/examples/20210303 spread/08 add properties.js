// добавление нескольких свойств
const partial = { id: 42, name: 'Howard Moon' };
const user = { ...partial, id: 96, password: 'Password!' };

console.log(user);
// !!! если есть одинаковые свойства, используется последнее