# Изменение структуры объекта

+ Удаление свойства из объекта

```javascript
const user = {
    id: 100,
    name: 'Mark Knopfler',
    password: 'Password!'
};

const deletePassword = ({ password, ...rest }) => rest;

const userWithoutPassword = deletePassword(user);
console.log(userWithoutPassword);  // { id: 100, name: 'Mark Knopfler' }
```

+ Динамическое удаление свойства

```javascript
let user1 = {
    id: 100,
    name: 'Mark Knopfler',
    password: 'Password!'
};

const removeProperty = prop => ({ [prop]: _, ...rest }) => rest;

const removePassword = removeProperty('password');
const removeId = removeProperty('id');

const user2 = removePassword(user1);
console.log(user2); // { id: 100, name: 'Mark Knopfler' }

const user3 = removeId(user1);
console.log(user3); // { name: 'Mark Knopfler', password: 'Password!' }
```

+ Добавление свойства

```javascript
const user = { id: 100, name: 'Mark Knopfler'};
const userWithPass = { ...user, password: 'Password!' };

console.log(user); // { id: 100, name: 'Mark Knopfler' }
console.log(userWithPass); // { id: 100, name: 'Mark Knopfler', password: 'Password!' }
```

+ Добавление нескольких свойств

```javascript
const partial = { id: 42, name: 'Mark Knopfler' };
const user = { ...partial, id: 96, password: 'Password!' };

console.log(user); // { id: 96, name: 'Mark Knopfler', password: 'Password!' }
```

Примечание: в случае наличия одинаковых свойств берётся значение последнего из них (в примере `id == 96`)

+ Добавление свойства, только если оно отсутствует у объекта (дефолтное свойство):

```javascript
let user1 = {
    id: 200,
    name: 'Mark Knopfler'
};

let user2 = {
    id: 400,
    name: 'Bollo',
    quotes: ["I've got a bad feeling about this..."]
};

const setDefaults = ({ quotes = [], ...object}) => ({ ...object, quotes });

user1 = setDefaults(user1);
console.log(user1);
// { id: 200, name: 'Mark Knopfler', quotes: [] }

user2 = setDefaults(user2);
console.log(user2);
// {
//    id: 400,
//    name: 'Mark Knopfler',
//    quotes: ["I've got a bad feeling about this..."]
// }
```

+ Добавление свойства по условию

Свойство будет добавлено в объект только в том случае, если `password` имеет значение.

```javascript
const user = { id: 100, name: 'Mark Knopfler' };
const password = 'Password!';
const userWithPassword = {
    ...user,
    id: 100,
    ...(password && { password })
};
console.log(userWithPassword); // { id: 100, name: 'Mark Knopfler', password: 'Password!' }
```

+ Переименование свойства:

```javascript
const user = {
    ID: 500,
    name: "Mark Knopfler"
};

const rename_id = ({ ID, ...object }) => ({ id: ID, ...object });

const user2 = rename_id(user);
console.log(user2); // { id: 500, name: 'Mark Knopfler' }
```

+ Перемещение свойства на первое место:

```javascript
const user = {
    password: 'Password!',
    name: 'Mark Knopfler',
    id: 300
};

const organize = object => ({ id: undefined, ...object });

// move id to the first property
const user2 = organize(user);
console.log(user2); // { id: 300, password: 'Password!', name: 'Mark Knopfler' }
```

+ Перемещение свойства на последнее место:

```javascript
const user = {
    password: 'Password!',
    name: 'Mark Knopfler',
    id: 300
};

const organize = ({ password, ...object }) =>
({ ...object, password });

// move id to the last property
const user2 = organize(user);
console.log(user2); // { name: 'Mark Knopfler', id: 300, password: 'Password!' }
```

+ Создание копии с изменением значения одного свойства:

```js
this.scenarioForView = {
   ...result,
   creationTimestamp: new Date(result.creationTimestamp),
};
```