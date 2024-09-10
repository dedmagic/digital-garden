// // Текущее время
// const now = new Date();
// console.log(now);

// // Количество милисекунд от начала времён (эпоха UNIX), часто называют "отметкой времени"
// const timeBegin = new Date(0);
// console.log(timeBegin);
// const today0 = new Date(1637661600000);
// console.log(today0);

// Задание даты в ISO 8601 (строка)
// const today1 = new Date('2021-11-23T15:00:00+05:00');
// const today2 = new Date('2021-11-23T15:00:00');
// console.log(today1);
// console.log(today2);

// // Задание даты по частям
// // Локальное время
// const date1 = new Date(2023, 10, 23, 16, 0, 0, 0);
// console.log(date1);

// // UTC-время
// // Date.UTC() возращает отметку времени
// const date1utc = new Date(
//     Date.UTC(2023, 10, 23, 17, 0, 0, 0)
// );
// console.log(date1utc);

// // Минимальная форма
// const date2 = new Date(2023, 10, 23);
// console.log(date2);

// // Переполнение работает корректно
// const date3 = new Date(2023, 10, 23, 23, 59, 65);
// console.log(date3.toString());