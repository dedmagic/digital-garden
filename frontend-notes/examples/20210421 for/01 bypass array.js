const arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log('-'.repeat(10));
for (let index in arr) {
    console.log(arr[index]);
}

console.log('-'.repeat(10));
for (let item of arr) {
    console.log(item);
}
