const obj1 = {
    x: 1,
    y: 2,
    z: 3
}

const json1 = JSON.stringify(obj1);
console.log(json1);

console.log('-'.repeat(20));
const json2 = JSON.stringify(obj1, ['z', 'y']);
console.log(json2);

function replacer(key, value) {
    console.log(`${key} --> ${value}`); // Логироввание

    if (key === '') {
        return value;
    }

    if (key === 'y') {
        return undefined;
    }
    return `>>> ${value} <<<`;
};

const json3 = JSON.stringify(obj1, replacer);
console.log('-'.repeat(20));
console.log(json3);
