// tdz_var();
// console.log('-'.repeat(20));
// tdz_let();
// console.log('-'.repeat(20));
tdz_closure();


function tdz_var() {
    console.log({ a });
    a = 3;
    console.log({ a });
    var a;
    console.log({ a });
}

function tdz_let() {
    a = 5;
    let a = 6;
    console.log({ a });
}

function tdz_closure() {
    const print_a = () => { console.log({ a }); }
    let a = 7;
    print_a();
}
