scope_var();
console.log('-'.repeat(20));
scope_let();

function scope_var() {
    console.log({ a });
    {
        console.log({ a });
        var a = 8;
        console.log({ a });
    }
    console.log({ a });
}

function scope_let() {
    // console.log({ a });
    {
        // console.log({ a });
        let a = 9;
        console.log({ a }); // 9
    }
    console.log({ a });
}
