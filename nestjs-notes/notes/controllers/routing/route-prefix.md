## Префикс маршрута для контроллера

```js
// cats.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('cats') // ←––
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}

// Маршрутизация поддомена (не работает в Fastify)
@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}

// Динамический поддомен
@Controller({ host: ':account.example.com' })
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}

```