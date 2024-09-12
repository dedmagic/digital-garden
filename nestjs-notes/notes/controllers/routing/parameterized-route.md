## Параметры маршрута

Маршруты с параметрами следует объявлять после статических путей. Это предотвращает перехват трафика, предназначенного для статических путей, параметризованными путями. 

#### Объект со всеми параметрами

```js
@Get(':id')
findOne(@Param() params: any): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}
```

#### Конкретный параметр

```js
@Get(':id')
findOne(@Param('id') id: string): string {
  return `This action returns a #${id} cat`;
}
```
