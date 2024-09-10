const obj = {
    name: 'Mark Knopfler',
    age: 71,
    profession: 'musician'
};

for (let key in obj) {
    console.log(`obj[${key}] = ${obj[key]}`);
}

console.log('-'.repeat(10));
for (let key of Object.keys(obj)) {
    console.log(key);
}

console.log('-'.repeat(10));
for (let values of Object.values(obj)) {
    console.log(values);
}

console.log('-'.repeat(10));
for (let [key, value] of Object.entries(obj)) {
    console.log(`obj[${key}] = ${value}`);
}
