// клонирование с добавлением свойства
const user = { id: 100, name: 'Howard Moon' };
const userWithPass = { ...user, password: 'Password!' };

console.log(user);
console.log(userWithPass);