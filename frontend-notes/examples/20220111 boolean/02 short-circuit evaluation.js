let x1 = 5;
let y1 = 42;

if (x1 > 4 && y1++ > 0) {
    { } // do nothing
}
console.log({ y1 });

let x2 = 3;
let y2 = 42;

if (x2 > 4 && y2++ > 0) {
    { } // do nothing
}
console.log({ y2 });
