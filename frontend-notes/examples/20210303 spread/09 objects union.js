// слияние объектов
const part1 = { id: 42, name: 'Howard Moon' };
const part2 = { id: 96, password: 'Password!' };

const user1 = { ...part1, ...part2 };
console.log(user1);