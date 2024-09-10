const obj = {
    x: 1,
    y: {
        z: [false, null, '']
    }
}
console.log(obj);

const json1 = JSON.stringify(obj);
console.log(json1);

const obj2 = JSON.parse(json1);
console.log(obj2);

const obj3 = {
    nullProp: null,
    undefinedProp: undefined,
    nanProp: NaN,
    infinityProp: Infinity,
    minusInfinityProp: -Infinity,
    dateProp: new Date(),
    functionProp: function () { return 42; }
}
console.log('--------------------------------');

const json3 = JSON.stringify(obj3);
console.log(json3);

const obj4 = JSON.parse(json3);
console.log(obj4);
