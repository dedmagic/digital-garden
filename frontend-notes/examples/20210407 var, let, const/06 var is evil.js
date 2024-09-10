'use strict';
f();
console.log({ y });

function f() {
    var x = 1;
    y = 1;
    console.log({ x, y });
}
