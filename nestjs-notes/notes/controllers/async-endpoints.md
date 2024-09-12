## Асинхронные обработчики маршрутов (endpoints)

```js
// cats.controller.ts
@Get()
async findAll(): Promise<any[]> {
  return [];
}

// возврат наблюдаемых потоков (observable streams) RxJS
// cats.controller.ts
@Get()
findAll(): Observable<any[]> {
  return of([]);
}
```