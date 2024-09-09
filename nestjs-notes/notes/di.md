### DI (dependency injection)

Провайдер – это то, что может быть инжектировано (внедрено).

##### Создание провайдера

Используется декоратор `Injectable`:
```js
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable() // ←---
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
```

##### Внедрение

Внедряться может через конструктор (предпочтительный способ):
```js
// cats.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {} // ←---

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
```

Необязательная зависимость задаётся декоратором @Optional (если отсутствует, то используется значение по умолчанию):
```js
import { Injectable, Optional, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
  constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {} // ←---
}
```

Второй способ внедрения – через свойство:
```js
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
  @Inject('HTTP_OPTIONS')
  private readonly httpClient: T;
}
```

##### Регистрация

Нужно указать в свойстве providers декоратора модуля:
```js
// app.module.ts
import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService], // ←---
})
export class AppModule {}
```
