## Поиск элементов в DOM

#### 6 основных методов поиска элементов в DOM (см. далее ещё два):


| Метод | Ищет по... | Ищет внутри элемента? <sup>(1)</sup> | Возвращает живую коллекцию? |
|-|-|:-:|:-:|
| `querySelector` | CSS-selector | ✔ | – |
| `querySelectorAll` | CSS-selector | ✔ | – |
| `getElementById` | id | – | – |
| `getElementsByName` | name | – | ✔ |
| `getElementsByTagName` | tag or `*` | ✔ | ✔ |
| `getElementsByClassName` | class | ✔ | ✔ |

<sup>(1)</sup> `getElementById` и `getElementsByName` осуществляют поиск только по всему документу (см. примеры).

#### Примеры:

* `getElementById`
```
<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // получить элемент
  const elem = document.getElementById('elem'); // <–––

  // сделать его фон красным
  elem.style.background = 'red';
</script>
```

* `querySelectorAll`

`const elements = document.querySelectorAll('ul > li:last-child');`

* `getElementsByTagName`
```
// получить все элементы div в документе
const divs = document.getElementsByTagName('div');
```

* `getElementsByName` и `getElementsByClassName`
```
<form name="my-form">
  <div class="article">Article</div>
  <div class="long article">Long article</div>
</form>

<script>
  // ищем по имени атрибута
  let form = document.getElementsByName('my-form')[0];

  // ищем по классу внутри form
  let articles = form.getElementsByClassName('article');
  alert(articles.length); // 2, находим два элемента с классом article
</script>
```

#### Дополнительные методы

* `closest` – ближайший предок, соответствующий селектору:

```
<h1>Содержание</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">Глава 1</li>
    <li class="chapter">Глава 2</li>
  </ul>
</div>

<script>
  let chapter = document.querySelector('.chapter'); // LI

  alert(chapter.closest('.book')); // UL
  alert(chapter.closest('.contents')); // DIV

  alert(chapter.closest('h1')); // null (потому что h1 - не предок)
</script>
```

* matches – проверка на соответствие селектору:

```
<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>

<script>
  // может быть любая коллекция вместо document.body.children
  for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      alert("Ссылка на архив: " + elem.href );
    }
  }
</script>
```

----
Дополнительные материалы:
- селекторы на `learn.javascript.ru`: [урок](https://learn.javascript.ru/css-selectors)