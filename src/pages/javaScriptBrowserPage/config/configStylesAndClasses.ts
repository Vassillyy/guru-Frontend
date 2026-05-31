import { type ITopic } from '@/entities/topic';

export const configStylesAndClasses: ITopic = {
  value: 'styles-and-classes',
  name: 'Стили и классы',
  content: {
    introduction:
      'Существует два способа задания стилей для элемента: через классы в CSS и через атрибут style (инлайн-стили). Классы — предпочтительный вариант. Инлайн-стили лучше не использовать без необходимости: их сложно поддерживать, их нельзя переопределить без !important, они не работают с псевдоклассами и медиа-запросами, не переиспользуются и раздувают HTML.',
    sections: [
      {
        title: 'Свойства: className, classList',
        content:
          'Для изменения классов используются свойства className и classList.\n' +
          'className соответствует атрибуту class и содержит строку со всеми классами элемента.\n' +
          'classList — специальный объект с методами для управления отдельными классами.',
        addition:
          'Свойства classList:\n' +
          '• elem.classList.add("class") — добавить класс\n' +
          '• elem.classList.remove("class") — удалить класс\n' +
          '• elem.classList.toggle("class") — добавить класс, если его нет, иначе удалить\n' +
          '• elem.classList.contains("class") — проверка наличия класса, возвращает true/false\n' +
          '• classList является перебираемым (можно использовать for..of)\n\n' +
          'className заменяет всю строку классов. classList позволяет работать с отдельными классами.',
        examples:
          '<html>\n' +
          '  <body class="main page">\n' +
          '    <script>\n' +
          '      // className\n' +
          '      console.log(document.body.className); // "main page"\n' +
          '      document.body.className = "new"; // полностью заменили все классы\n' +
          '      console.log(document.body.className); // "new"\n\n' +
          '      // classList\n' +
          '      document.body.classList.add("article"); // добавляем, не удаляя старые\n' +
          '      console.log(document.body.className); // "new article"\n\n' +
          '      document.body.classList.remove("new"); // удаляем конкретный класс\n' +
          '      console.log(document.body.className); // "article"\n\n' +
          '      document.body.classList.toggle("visible"); // добавит, если нет\n' +
          '      console.log(document.body.classList.contains("visible")); // true\n' +
          '      document.body.classList.toggle("visible"); // удалит\n' +
          '      console.log(document.body.classList.contains("visible")); // false\n\n' +
          '      // Перебор классов\n' +
          '      document.body.classList.add("one", "two", "three");\n' +
          '      for (let name of document.body.classList) {\n' +
          '        console.log(name); // "article", "one", "two", "three"\n' +
          '      }\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title: 'Свойство style',
        content:
          'Свойство elem.style — это объект, соответствующий атрибуту style элемента.',
        addition:
          'Запись свойств:\n' +
          '• Одно слово: background → elem.style.background\n' +
          '• Несколько слов (camelCase): background-color → elem.style.backgroundColor\n' +
          'Префикс становится с заглавной буквы:\n' +
          '• -moz-border-radius → elem.style.MozBorderRadius\n' +
          'Свойство cssText:\n' +
          '• elem.style.cssText = "styles" — перезаписывает все существующие стили\n' +
          '• elem.style.cssText += "styles" — добавляет к существующим\n' +
          'Сброс стиля:\n' +
          '• elem.style.display = "" — удаляет свойство, возвращая стиль к CSS-правилам',
        examples:
          '<div id="box" style="color: red">Текст</div>\n\n' +
          '<script>\n' +
          '  let box = document.getElementById("box");\n\n' +
          '  // Одиночные стили (camelCase)\n' +
          '  box.style.backgroundColor = "green";\n' +
          '  box.style.fontSize = "20px";\n' +
          '  console.log(box.style.backgroundColor); // "green"\n\n' +
          '  // Множественные стили через cssText (перезапись)\n' +
          '  box.style.cssText = "position: fixed; top: 100px; left: 200px;";\n' +
          '  // Предыдущий стиль color: red — перезаписан!\n' +
          '  console.log(box.style.color); // "" (пусто)\n\n' +
          '  // Добавление стиля через cssText +=\n' +
          '  box.style.cssText += "border: 1px solid black;";' +
          '</script>',
      },
      {
        title: 'Сброс стилей',
        content:
          'Для удаления стиля нужно присвоить ему пустую строку, а не использовать delete.',
        addition:
          'Правильный способ сброса стиля:\n' +
          '• elem.style.display = "" — сбрасывает свойство\n' +
          '• Браузер применит CSS-классы и встроенные стили, как если бы свойства не было\n' +
          'Неправильный способ:\n' +
          '• delete elem.style.display',
        examples:
          '<body>\n' +
          '  <script>\n' +
          '    // Скрываем body\n' +
          '    document.body.style.display = "none";\n\n' +
          '    // Через секунду возвращаем к нормальному состоянию\n' +
          '    setTimeout(() => {\n' +
          '      document.body.style.display = ""; // сброс стиля\n' +
          '    }, 1000);\n' +
          '  </script>\n' +
          '</body>',
      },
      {
        title: 'Вычисленные стили: метод getComputedStyle',
        content:
          'Свойство style видит только инлайн-стили (атрибут style). Для чтения стилей с учётом всех CSS-правил (классов, каскада, наследования) используется метод getComputedStyle.',
        addition:
          'Синтаксис:\n' +
          '• getComputedStyle(element, [pseudo])\n' +
          '• element — элемент, стили которого нужно получить\n' +
          '• pseudo — псевдоэлемент (например, "::before"), по умолчанию null\n\n' +
          'Возвращает объект со стилями, похожий на elem.style, но с учётом всех CSS-классов.\n' +
          'Нужно обращаться к точным свойствам (paddingLeft, marginTop), а не к сокращённым\n' +
          'Стили :visited ссылок скрыты для безопасности',
        examples:
          '<html>\n' +
          '  <head>\n' +
          '    <style>\n' +
          '      body { color: red; margin: 5px; font-size: 16px; }\n\n' +
          '      .box { width: 100px; height: 50px; background: blue; }\n' +
          '    </style>\n' +
          '  </head>\n' +
          '  <body>\n' +
          '    <div class="box" style="width: 200px">Текст</div>\n\n' +
          '    <script>\n' +
          '      let box = document.querySelector(".box");\n\n' +
          '      // style — только инлайн-стили\n' +
          '      console.log(box.style.width); // "200px" (есть в инлайне)\n' +
          '      console.log(box.style.height); // "" (пусто, нет в инлайне)\n' +
          '      console.log(box.style.backgroundColor); // "" (пусто, стиль в CSS)\n\n' +
          '      // getComputedStyle — все стили (инлайн + CSS)\n' +
          '      let computed = getComputedStyle(box);\n' +
          '      console.log(computed.width); // "200px" (инлайн переопределил CSS)\n' +
          '      console.log(computed.height); // "50px" (из CSS)\n' +
          '      console.log(computed.backgroundColor); // "rgb(0, 0, 255)" (blue из CSS)\n\n' +
          '      // Для body: стили из CSS\n' +
          '      let bodyStyles = getComputedStyle(document.body);\n' +
          '      console.log(bodyStyles.color); // "rgb(255, 0, 0)" (red)\n' +
          '      console.log(bodyStyles.marginTop); // "5px"\n' +
          '      console.log(bodyStyles.fontSize); // "16px"\n\n' +
          '      // Псевдоэлементы\n' +
          '      let div = document.createElement("div");\n' +
          '      div.innerHTML = "Текст";\n' +
          '      document.body.append(div);\n\n' +
          '      // Добавим стиль для ::before\n' +
          '      let style = document.createElement("style");\n' +
          '      style.textContent = "div::before { content: \\"► \\"; color: red; }";\n' +
          '      document.head.append(style);\n\n' +
          '      let beforeWithStyle = getComputedStyle(div, "::before");\n' +
          '      console.log(beforeWithStyle.content); // "► "\n' +
          '      console.log(beforeWithStyle.color); // "rgb(255, 0, 0)"\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
    ],
  },
};
