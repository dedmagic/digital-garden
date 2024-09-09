### Выбор низкоуровневого фреймворка

```js
const app = await NestFactory.create<NestExpressApplication>(AppModule);
```

Возможные варианты:
- `NestExpressApplication`
- `NestFastifyApplication`

По умолчанию используется `express.js`:

```js
const app = await NestFactory.create(AppModule);
```
