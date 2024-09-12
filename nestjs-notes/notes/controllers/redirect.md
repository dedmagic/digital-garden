## Перенаправление запроса (redirect)

```js
@Get()
@Redirect('https://nestjs.com', 301)
```

Возвращаемые значения переопределяют любые аргументы, переданные декоратору `@Redirect()`. Например:

```js
@Get('docs')
@Redirect('https://docs.nestjs.com', 302)
getDocs(@Query('version') version) {
  if (version && version === '5') {
    return { url: 'https://docs.nestjs.com/v5/' };
  }
}
```
