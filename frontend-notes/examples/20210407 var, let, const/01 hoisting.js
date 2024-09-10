hoisting_var();
console.log('-'.repeat(20));
hoisting_let();

function hoisting_var() {
    console.log({ a });
    var a = 1;
    console.log({ a });
}

function hoisting_let() {
    // console.log({ a });
    let a = 2;
    console.log({ a });
}
