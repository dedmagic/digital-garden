const amount = {
    bank: 'Kidalovo Bank Group',
    currensy: 'rub',
    total: 42,
    //#region
    // [Symbol.toPrimitive](type) {
    //     if (type === 'number')
    //     {
    //         return this.total
    //     }
    //     return this.valueOf();
    // }
    //#endregion
}

let tax = amount * 0.13;
console.log(tax);

console.log(+amount);
