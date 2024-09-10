const name = 'Mark Knopfler';
const wish1 = 'peace';
const wish2 = 'tranquillity'

// const message1 = `Hi ${name}! I wish you ${wish1} and ${wish2}!!!`;

// console.log(message1);

/////////////////////////////////////////

function logTag(literalParts, ...fillers) {
    console.log(literalParts);
    console.log(fillers);

    return literalParts.reduce(
        (result, part, i) => result + part + (fillers[i] ?? ''),
        ''
    );
}

const message2 = logTag`Hi ${name}! I wish you ${wish1} and ${wish2}!!!`;
console.log(message2);

/////////////////////////////////////////

function uppercaseFillers(literalParts, ...fillers) {
    const newFillers = fillers.map(filler => filler.toUpperCase());

    return newFillers.reduce(
        (result, filler, i) => result + filler + literalParts[i + 1],
        literalParts[0]
    );
}

const message3 = uppercaseFillers`Hi ${name}! I wish you ${wish1} and ${wish2}!!!`;
console.log(message3);

// /////////////////////////////////////////

function mainQuestonAnswer(literalParts, ...fillers) {
    return 42;
}

const message4 = mainQuestonAnswer`Hi ${name}! I wish you ${wish1} and ${wish2}!!!`;
console.log(message4);

/////////////////////////////////////////

const str1 = 'Ща будет TAB\t и перевод \nстроки';
console.log(str1);

const str2 = String.raw`Ща будет TAB\t и перевод \nстроки`;
console.log(str2);