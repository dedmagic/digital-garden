### Nest.js CLI

##### Установка Nest.js CLI:

```bash
$ npm i -g @nestjs/cli
```

##### Создание нового проекта:

```bash
$ nest new project-name
```

##### Создание нового проекта с более строгим набором функций:
```bash
$ nest new project-name --strict
```

##### Альтернативный способ создания нового проекта (чтобы вместо `typescript` использовать `javascript`, надо задействовать `javascript-starter.git`):

```bash
$ git clone https://github.com/nestjs/typescript-starter.git project-name
$ cd project
$ npm install
$ npm run start
```

#### Создание "ресурса" (модуль + сервис + контроллер + entity + dto + тесты)
```bash
nest generate resource [name]
// или
nest g resource [name]
```