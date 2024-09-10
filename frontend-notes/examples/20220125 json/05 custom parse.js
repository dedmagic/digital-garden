const obj1 = {
    x: 1,
    y: 2,
    z: 3
}

const json1 = JSON.stringify(obj1);

function reviver(key, value) {
    console.log(`${key} --> ${value}`);
    return value;
}

const obj2 = JSON.parse(json1, reviver);
console.log('-'.repeat(20));
console.log(obj2);
