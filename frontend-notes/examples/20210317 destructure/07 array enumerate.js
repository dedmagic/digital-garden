// Деструктуризация пары "ключ - значение": массив
const array = ['один', 'два', 'три', 'четыре'];

for (const [index, element] of array.entries()) {
    console.log(`array[${index}] = ${element}`)
}
