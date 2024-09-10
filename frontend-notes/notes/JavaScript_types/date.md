# Тип `Date`

## Конструкторы

### Конструктор без параметров: текущее время

```js
const now = new Date();
console.log(now); // 2021-11-20T06:47:37.347Z - Z указывает на то, что дата выведена в UTC (Universal Coordinated Time, Всемирное Скоординированное Время)

// В браузере: Sat Nov 20 2021 11:47:47 GMT+0500 (Екатеринбург, стандартное время)
```

### Конструктор с параметром-числом: количество милисекунд от начала эпохи UNIX

```js
const timeBegin = new Date(0);
console.log(timeBegin); // 1970-01-01T00:00:00.000Z
const today0 = new Date(1637661600000);
console.log(today0); // 2021-11-23T10:00:00.000Z
```

Число может быть отрицательным, т.е. сдвиг будет от начала эры UNIX в прошлое.

### Конструктор с параметром-строкой: парсинг

```js
// Задание даты в ISO 8601 (строка)
const today1 = new Date('2021-11-23T15:00:00+05:00');
const today2 = new Date('2021-11-23T15:00:00');
console.log(today1); // 2021-11-23T10:00:00.000Z
console.log(today2); // 2021-11-23T10:00:00.000Z
```

Конструктор `Date` умеет декодировать строки в других форматах (но делать это не стоит).

### Конструктор с кучей параметров: части даты и времени

- Месяцы нумеруются с нуля, дни – с единицы.
- Время считается локальным.

#### Локальное время

```js
const date1 = new Date(2023, 10, 23, 16, 0, 0, 0);
console.log(date1); // 2023-11-23T11:00:00.000Z
```

#### UTC-время

Статический метод `Date.UTC` возвращает отметку времени.

```js
const date1utc = new Date(
    Date.UTC(2023, 10, 23, 17, 0, 0, 0)
);
console.log(date1utc); // 2023-11-23T17:00:00.000Z
```

#### Минимальная форма: год + месяц

```js
const date2 = new Date(2023, 10, 23); // Время -- полночь
console.log(date2);
```

#### Переполнение работает корректно, причём на всех частях даты/времени

```js
const date3 = new Date(2023, 10, 23, 23, 59, 65);
console.log(date3.toString()); // Fri Nov 24 2023 00:00:05 GMT+0500 (Екатеринбург, стандартное время)
```

## Вывод даты

```js
const date = new Date('2021-11-23T15:10:45');

console.log(date); // Tue Nov 23 2021 15:10:45 GMT+0500 (Екатеринбург, стандартное время)
console.log(date.toString()); // Tue Nov 23 2021 15:10:45 GMT+0500 (Екатеринбург, стандартное время)
console.log(date.toLocaleString()); // 23.11.2021, 15:10:45

console.log(date.toUTCString()); // Tue, 23 Nov 2021 10:10:45 GMT
console.log(date.toISOString()); // 2021-11-23T10:10:45.000Z

console.log(date.toDateString()); // Tue Nov 23 2021
console.log(date.toLocaleDateString()); // 23.11.2021

console.log(date.toTimeString()); // 15:10:45 GMT+0500 (Екатеринбург, стандартное время)
console.log(date.toLocaleTimeString()); // 15:10:45
```

Объект `Intl.DateTimeFormat` позволяет форматировать даты в соответствии с локалью (может быть указан список локалей):

```js
console.log(
    Intl.DateTimeFormat('ru-RU').format(date) // 23.11.2021
);

console.log(
    Intl.DateTimeFormat('en-US').format(date) // 11/23/2021
);
```

Кроме этого, в качестве второго параметра может быть передан объект, с помощью которого можно тонко настраивать формат даты

```js
const opts = { weekday: 'long', month: 'long', year: 'numeric', day: 'numeric' };
console.log(
    Intl.DateTimeFormat('ru-RU', opts).format(date) // вторник, 23 ноября 2021 г.
);
```

## Чтение и изменение отдельных частей даты

```js
const date = new Date('2021-11-23T15:10:45');

console.log(date.getHours()); // 15
console.log(date.getUTCHours()); // 10

date.setHours(16);

console.log(date.getHours()); // 16
console.log(date.getUTCHours()); // 11

date.setUTCHours(16);

console.log(date.getHours()); // 21
console.log(date.getUTCHours()); // 16
```

Дни недели нумеруются от 0 (воскресение) до 6 (суббота)


Методы `setX` в качестве параметров могут получать более мелкие части времени:

```js
// Добавить к дате 2 месяца и 3 недели
date.setMonth(date.getMonth() + 2, date.getDate() + 21);
console.log(date.toLocaleDateString()); // 13.02.2022
```

## Отметки времени

```js
const date = new Date('2021-11-23T15:10:45');

console.log(date.getTime()); // 1637662245000
console.log(date.valueOf()); // 1637662245000
// Сдвиг на 30 секунд
date.setTime(date.getTime() + 30000);
console.log(date.toISOString()); // 2021-11-23T10:11:15.000Z
```

Пример: замер производительности.

```js
const timeStamp = Date.now(); // либо `new Date().getTime()`

// Этот код не важен, просто тянем время
for (let i = 0; i < 1_000_000_000; i++) {
    const x = i ** 2;
}

// Время выполнения кода
console.log(Date.now() - timeStamp); // 12078

// В минутах, секундах, милисекундах
const duration = Date.now() - timeStamp;
const dateTime = new Date(duration);
console.log(dateTime.getMinutes(), dateTime.getSeconds(), dateTime.getMilliseconds());
```

## Операции над датами

### Сравнение дат:

```js
const date1 = new Date('2021-11-23T15:10:45');
const date2 = new Date('2021-11-24T15:10:45');

console.log(date1 < date2); // true
```

### Вычитание дат/сложение даты с числом

Вычитание дат даёт количество милисекунд между ними:

```js
console.log(date2 - date1); // 86400000
```
