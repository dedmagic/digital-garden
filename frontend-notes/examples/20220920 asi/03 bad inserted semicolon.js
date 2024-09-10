// return
function func() {
    return;
    42;
}

console.log(func())

// throw
try {
    throw new Error('Error!')
} catch (error) {
    console.log(error)
}

// yeild
function* numbers() {
    yield 42;
    yield 96;
}

for(const num of numbers()) {
    console.log(num)
}

// break, continue
block_label: {
    for (let i = 0; i < 10; i++) {
        console.log(i);
        if (i === 3) {
            break block_label;
        }
    }
    console.log("Inside the block");
}
console.log("Outside the block");