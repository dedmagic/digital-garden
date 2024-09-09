### DTO

DTO должны быть классами, а не интерфейсами, т.к. используются в runtime (интерфейсы пропадают при компиляции)
```js
export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}
```

Использование в контроллере:
```js
// cats.controller.ts

@Post()
async create(@Body() createCatDto: CreateCatDto) {
  return 'This action adds a new cat';
}
```
