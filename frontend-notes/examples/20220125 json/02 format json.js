const obj1 = {
    x: 1,
    y: {
        z: [false, null, ""]
    }
}

const json1 = JSON.stringify(obj1);
console.log(json1);

const json2 = JSON.stringify(obj1, null, '\t');
console.log(json2);

const json3 = JSON.stringify(obj1, null, '  ');
console.log(json3);

const json4 = JSON.stringify(obj1, null, 'hello');
console.log(json4);
