import { type ITopic } from '@/entities/topic';

export const configSearchingElementsDom: ITopic = {
  value: 'searching-elements-dom',
  name: 'Поиск элементов в DOM',
  content: {
    introduction:
      'Методы поиска позволяют получить любой элемент на странице: по id, CSS-селектору, тегу, классу или атрибуту name.',
    sections: [
      {
        title: 'getElementById',
        content:
          'Для получения элемента по атрибуту id используется метод document.getElementById(id).',
        addition:
          '• id должен быть уникальным в пределах документа\n' +
          '• Метод работает только на document\n' +
          '• Через id создаётся глобальная переменная, но не используйте это — возможны конфликты имён\n' +
          '• Если JS-переменная с таким же именем уже есть — она имеет приоритет',
        examples:
          '<div id="elem">\n' +
          '  <div id="elem-content">Element</div>\n' +
          '</div>\n\n' +
          '<script>\n' +
          '  // получить элемент\n' +
          '  let elem = document.getElementById("elem");\n' +
          '\n' +
          '  // сделать его фон синим\n' +
          '  elem.style.background = "blue";\n' +
          '\n' +
          '  // можно также обратиться через глобальную переменную\n' +
          '</script>',
      },
      {
        title: 'querySelectorAll',
        content:
          'Метод elem.querySelectorAll(css) возвращает коллекцию всех элементов внутри elem, соответствующих CSS-селектору.',
        addition:
          '• Поддерживаются любые CSS-селекторы (классы, ID, атрибуты, псевдоклассы)\n' +
          '• Псевдоклассы типа :hover, :active, :first-child тоже работают\n' +
          '• Возвращает статическую коллекцию — не обновляется при изменениях в DOM\n' +
          '• Для перебора можно использовать for..of или Array.from()',
        examples:
          '<ul>\n' +
          '  <li>один</li>\n' +
          '  <li>два</li>\n' +
          '</ul>\n' +
          '\n' +
          '<script>\n' +
          '  let items = document.querySelectorAll("li");\n' +
          '  \n' +
          '  for (let item of items) {\n' +
          '    console.log(item.innerHTML); // один, два\n' +
          '  }\n' +
          '</script>',
      },
      {
        title: 'querySelector',
        content:
          'Метод elem.querySelector(css) возвращает первый элемент, соответствующий данному CSS-селектору.',
        addition:
          'Результат такой же, как при вызове elem.querySelectorAll(css)[0]. Но работает быстрее, так как находит только первый элемент и останавливается.',
        examples:
          '<div class="container">\n' +
          '  <p class="item">Первый</p>\n' +
          '  <p class="item">Второй</p>\n' +
          '</div>\n' +
          '<script>\n' +
          '  let firstItem = document.querySelector(".item");\n' +
          '  console.log(firstItem.innerHTML); // "Первый"\n' +
          '\n' +
          '  // или внутри контейнера\n' +
          '  let container = document.querySelector(".container");\n' +
          '  let item = container.querySelector(".item");\n' +
          '  console.log(item.innerHTML); // "Первый"\n' +
          '</script>',
      },
      {
        title: 'matches',
        content:
          'Метод elem.matches(css) проверяет, удовлетворяет ли elem CSS-селектору.',
        addition: 'Возвращает true или false',
        examples:
          '<div class="item active">Активный</div>\n' +
          '<div class="item">Обычный</div>\n' +
          '<script>\n' +
          '  let items = document.querySelectorAll(".item");\n' +
          '  \n' +
          '  for (let elem of items) {\n' +
          '    if (elem.matches(".active")) {\n' +
          '      console.log(elem.innerHTML); // Активный\n' +
          '    }\n' +
          '  }\n' +
          '</script>',
      },
      {
        title: 'closest',
        content:
          'Метод elem.closest(css) ищет ближайшего предка, который соответствует CSS-селектору. Сам элемент также включается в поиск.',
        addition:
          '• Поднимается вверх по цепочке родителей\n' +
          '• Если подходит сам элемент — возвращает его\n' +
          '• Если ничего не найдено — возвращает null',
        examples:
          '<div class="wrapper">\n' +
          '  <div class="content">\n' +
          '    <p class="text">Привет</p>\n' +
          '  </div>\n' +
          '</div>\n' +
          '<script>\n' +
          '  let text = document.querySelector(".text");\n' +
          '  \n' +
          '  console.log(text.closest(".content")); // <div class="content">\n' +
          '  console.log(text.closest(".wrapper")); // <div class="wrapper">\n' +
          '  console.log(text.closest(".none"));    // null\n' +
          '</script>',
      },
      {
        title: 'getElementsBy*',
        content:
          'Методы `getElementsByTagName`, `getElementsByClassName`, `getElementsByName` ищут элементы и возвращают живую коллекцию (обновляется при изменении DOM).',
        addition:
          '• elem.getElementsByTagName(tag) — ищет по тегу ("*" — все элементы)\n' +
          '• elem.getElementsByClassName(className) — ищет по классу\n' +
          '• document.getElementsByName(name) — ищет по атрибуту name (только на document)',
        examples:
          '<div class="chapter">Глава 1</div>\n' +
          '<div class="chapter">Глава 2</div>\n' +
          '<div class="note">Примечание</div>\n' +
          '<input type="text" name="username" value="Иван">\n' +
          '<input type="text" name="username" value="Петр">\n' +
          '\n' +
          '<script>\n' +
          '  // Поиск по классу\n' +
          '  let chapters = document.getElementsByClassName("chapter");\n' +
          '  console.log(chapters.length); // 2\n' +
          '\n' +
          '  // Поиск по тегу\n' +
          '  let divs = document.getElementsByTagName("div");\n' +
          '  console.log(divs.length); // 3\n' +
          '\n' +
          '  // Поиск по атрибуту name\n' +
          '  let inputs = document.getElementsByName("username");\n' +
          '  console.log(inputs.length); // 2\n' +
          '  console.log(inputs[0].value); // "Иван"\n' +
          '</script>',
      },
      {
        title: 'contains',
        content:
          'Метод parent.contains(child) проверяет, является ли child потомком parent.',
        addition:
          '• Возвращает true, если child находится внутри parent\n' +
          '• Возвращает true, если parent === child\n' +
          '• Возвращает false в противном случае',
        examples:
          '<div id="parent">\n' +
          '  <div id="child">Дочерний элемент</div>\n' +
          '</div>\n' +
          '<div id="other">Другой элемент</div>\n' +
          '\n' +
          '<script>\n' +
          '  let parent = document.getElementById("parent");\n' +
          '  let child = document.getElementById("child");\n' +
          '  let other = document.getElementById("other");\n' +
          '\n' +
          '  console.log(parent.contains(child)); // true\n' +
          '  console.log(parent.contains(parent)); // true\n' +
          '  console.log(parent.contains(other)); // false\n' +
          '</script>',
      },
    ],
  },
};
