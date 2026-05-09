import { type ITopic } from '@/entities/topic';

export const configModifyingDocument: ITopic = {
  value: 'modifying-document',
  name: 'Изменение документа',
  content: {
    introduction:
      'Методы модификации DOM позволяют создавать элементы, вставлять их в документ, перемещать и удалять.',
    sections: [
      {
        title: 'Создание элемента и методы вставки',
        content:
          'DOM-узел можно создать двумя методами:\n' +
          'document.createElement(tag) создаёт новый элемент с заданным тегом\n' +
          'document.createTextNode(text) создаёт новый текстовый узел с заданным текстом.\n' +
          'Чтобы узел появился на странице, его нужно вставить с помощью методов append, prepend, before, after или replaceWith.',
        addition:
          '• node.append(...nodes or strings) – добавляет узлы или строки в конец node\n' +
          '• node.prepend(...nodes or strings) – вставляет узлы или строки в начало node\n' +
          '• node.before(...nodes or strings) – вставляет узлы или строки до node\n' +
          '• node.after(...nodes or strings) – вставляет узлы или строки после node\n' +
          '• node.replaceWith(...nodes or strings) – заменяет node заданными узлами или строками\n' +
          'Все методы вставки автоматически удаляют узлы со старых мест при перемещении.',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <ol id="ol">\n' +
          '      <li>Первый</li>\n' +
          '      <li>Второй</li>\n' +
          '    </ol>\n\n' +
          '    <script>\n' +
          '      // Создание элемента\n' +
          '      let div = document.createElement("div");\n' +
          '      div.className = "alert";\n' +
          '      div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";\n\n' +
          '      // Элемент пока в памяти, на странице его не видно\n' +
          '      console.log(div); // <div class="alert">...</div>\n\n' +
          '      // Вставка на страницу\n' +
          '      document.body.append(div); // элемент появился в конце body\n\n' +
          '      // Другие методы вставки\n' +
          '      let ol = document.getElementById("ol");\n\n' +
          '      // Вставка строки до ol\n' +
          '      ol.before("До списка");\n\n' +
          '      // Вставка строки после ol\n' +
          '      ol.after("После списка");\n\n' +
          '      // Вставка в начало ol\n' +
          '      ol.prepend("Первый пункт");\n\n' +
          '      // Вставка в конец ol\n' +
          '      ol.append("Последний пункт");\n\n' +
          '      // Можно вставлять несколько элементов сразу\n' +
          '      ol.append("Один", " ", "Два", " ", "Три");\n\n' +
          '      // Перемещение элемента\n' +
          '      let firstLi = document.querySelector("li");\n' +
          '      ol.append(firstLi); // элемент переместится в конец (автоматически удалился со старого места)\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title: 'insertAdjacentHTML/Text/Element',
        content:
          'Метод elem.insertAdjacentHTML(where, html) позволяет вставлять HTML-строку в определённое место относительно элемента.',
        addition:
          'Параметр where указывает место вставки:\n' +
          '• "beforebegin" – вставить html непосредственно перед elem\n' +
          '• "afterbegin" – вставить html в начало elem\n' +
          '• "beforeend" – вставить html в конец elem\n' +
          '• "afterend" – вставить html непосредственно после elem\n\n' +
          'Также существуют методы:\n' +
          '• elem.insertAdjacentText(where, text) – вставляет текст\n' +
          '• elem.insertAdjacentElement(where, elem) – вставляет элемент\n' +
          'Отличие от append/prepend:\n' +
          '• insertAdjacentHTML вставляет HTML-строку, парся теги\n' +
          '• append/prepend вставляют строки как текст',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <div id="div"></div>\n\n' +
          '    <script>\n' +
          '      let div = document.getElementById("div");\n\n' +
          '      div.insertAdjacentHTML("beforeend", "<b>Жирный текст</b>");\n\n' +
          '      div.insertAdjacentText("beforeend", "<i>это текст</i>");\n\n' +
          '      // insertAdjacentElement — вставляет элемент\n' +
          '      let span = document.createElement("span");\n' +
          '      span.textContent = "Вставленный элемент";\n' +
          '      div.insertAdjacentElement("beforeend", span);\n\n' +
          '      // Итоговый HTML:\n' +
          '      // <div id="div">\n' +
          '      //   <b>Жирный текст</b>\n' +
          '      //   <i>это текст</i>\n' +
          '      //   <span>Вставленный элемент</span>\n' +
          '      // </div>\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title: 'Удаление и клонирование узлов',
        content:
          'Удаление узлов выполняется методом remove()\n' +
          'Для создания копии элемента используется cloneNode().',
        addition:
          'Удаление:\n' +
          '• node.remove() — удаляет элемент из DOM\n' +
          '• При перемещении элемента методы remove не нужны (вставка автоматически удаляет со старого места)\n' +
          'Клонирование:\n' +
          '• elem.cloneNode(true) — глубокое клонирование (с дочерними элементами)\n' +
          '• elem.cloneNode(false) — поверхностное клонирование (без детей)',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <div id="first">Первый</div>\n' +
          '    <div id="second">Второй</div>\n' +
          '    <div class="alert" id="msg">\n' +
          '      <strong>Всем привет!</strong> Важное сообщение.\n' +
          '    </div>\n\n' +
          '    <script>\n' +
          '      // Клонирование\n' +
          '      let msg = document.getElementById("msg");\n' +
          '      let clone = msg.cloneNode(true); // глубокий клон\n' +
          '      clone.querySelector("strong").innerHTML = "Всем пока!"; // меняем текст в клоне\n' +
          '      msg.after(clone); // вставляем клон после оригинального\n\n' +
          '      // Удаление через секунду\n' +
          '      setTimeout(() => clone.remove(), 2000); // удаляем клон через 2 секунды\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title: 'DocumentFragment',
        content:
          'DocumentFragment — это специальный DOM-узел, который служит обёрткой для списка узлов. При вставке в документ он «исчезает», вместо него вставляется его содержимое.',
        addition:
          '• Создаётся через new DocumentFragment() или document.createDocumentFragment()\n' +
          '• Удобен для группировки узлов перед вставкой\n' +
          '• Используется редко — проще вставить узлы напрямую или вернуть массив',
        examples:
          '<ul id="ul"></ul>\n\n' +
          '<script>\n' +
          'function getListContent() {\n' +
          '  let fragment = new DocumentFragment();\n' +
          '  for(let i = 1; i <= 3; i++) {\n' +
          "    let li = document.createElement('li');\n" +
          '    li.append(i);\n' +
          '    fragment.append(li);\n' +
          '  }\n' +
          '  return fragment;\n' +
          '}\n\n' +
          'ul.append(getListContent());\n\n' +
          '// Результат:\n' +
          '// <ul>\n' +
          '//   <li>1</li>\n' +
          '//   <li>2</li>\n' +
          '//   <li>3</li>\n' +
          '// </ul>\n' +
          '</script>',
      },
      {
        title: 'document.write',
        content:
          'document.write(html) записывает html на страницу в момент выполнения. Это очень старый метод из эпохи до DOM.',
        addition:
          'Важные ограничения:\n' +
          '• Работает только во время загрузки страницы\n' +
          '• Если вызвать после загрузки — полностью затрёт существующее содержимое документа\n' +
          'Преимущество (историческое):\n' +
          '• Пишет прямо в текст страницы во время создания DOM — очень быстро',
        examples:
          '<p>Где-то на странице...</p>\n' +
          '<script>\n' +
          "  document.write('<b>Привет из JS</b>');\n" +
          '</script>\n' +
          '<p>Конец</p>\n\n' +
          '// Если вызвать после загрузки страницы:\n' +
          '<script>\n' +
          "  setTimeout(() => document.write('<b>Этим.</b>'), 1000);\n" +
          '  // Содержимое страницы будет заменено\n' +
          '</script>',
      },
    ],
  },
};
