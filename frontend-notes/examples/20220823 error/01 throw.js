// string
try {
    throw 'This is error';
} catch (e) {
    console.log(e);
}

// // expresion of any type
// try {
//     throw 42;
// } catch (e) {
//     console.log(e);
// }

// object as error info
// const customError = {
//     message: 'Шеф, всё пропало!',
//     severity: 100500
// }

// try {
//     throw customError;
// } catch (e) {
//     console.log(e);
// }

// // class Error
// try {
//     throw new Error('This is error');
// } catch (e) {
//     console.log(e);
// }

// // class Error
// try {
//     throw new Error('This is error');
// } catch (e) {
//     console.log(e.message);
//     console.log(e.name);
//     console.log(e.stack);
// }
