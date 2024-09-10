// // Пример 1: сумма элементов массива
// let arr = [1, 2, 3, 4];

// let arrSum1 = arr.reduce((sum, current) => sum + current, 0);
//  console.log(arrSum1); // 10

// let arrSum2 = arr.reduce((sum, current) => sum + current);
// console.log(arrSum2); // 10

//Пример 2: пересечение массивов
const intersection = (...arrays) => {
    const selectOnlyCommonElements = (accumulator, currentArray) =>
        currentArray.filter(currentArrayItem => accumulator.includes(currentArrayItem));
    return arrays.reduce(selectOnlyCommonElements);
};

const intersect = intersection([1, 2, 3, 4], [2, 3, 4, 9], [3, 45, 5, 2], [3, 2, 1]);
console.log(intersect); // [3, 2]

// // Пример 3: объединение массивов с удалением дубликатов

// const distinctUnion = (...arrays) => {
//     const addUnique = (accumulator, currentArray) =>
//         accumulator.concat(
//             currentArray.filter(currentArrayItem => !accumulator.includes(currentArrayItem))
//         );
//     return arrays.reduce(addUnique);
// };

// const unionArrays = distinctUnion([1,2,3,4], [2,3,4,9], [3,45,5,2], [3,2,1]);
// console.log(unionArrays); // [1, 2, 3, 4, 9, 45, 5]
