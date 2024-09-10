try {
    throw new Error('Good place');
} catch (e) {
    console.log(e);
}

// const error = new Error('Bad place');
// try {
//     throw error;
// } catch (e) {
//     console.log(e);
// }

// function createError() {
//     return new Error('Bad stack trace');
// }

// function generateError() {
//     const error = createError();
//     throw error;
// }

// try {
//     generateError();
// } catch (e) {
//     console.log(e); // --> stacktrace: createError → generateError → ...
// }
