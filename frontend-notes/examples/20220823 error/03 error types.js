try {
    throw new RangeError('message');
} catch (e) {
    switch (e.name) {
        case 'URIError':
            console.log('URI');
            break;
        case 'RangeError':
            console.log('Range');
            break;
        case 'ReferenceError':
            console.log('Reference');
            break;
    }
}

// try {
//     throw new URIError('message');
// } catch (e) {
//     if (e instanceof URIError) {
//         console.log('URI');
//     } else if (e instanceof RangeError) {
//         console.log('Range')
//     } else if (e instanceof ReferenceError) {
//         console.log('Reference');
//     }
// }