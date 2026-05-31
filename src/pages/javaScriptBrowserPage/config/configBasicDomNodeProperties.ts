import { type ITopic } from '@/entities/topic';

export const configBasicDomNodeProperties: ITopic = {
  value: 'basic-dom-node-properties',
  name: 'Свойства DOM-узлов: тип, тег, содержимое',
  content: {
    introduction:
      'У каждого DOM-узла есть свойства, которые содержат информацию о нём: тип узла, имя тега, содержимое и т.д. Эти свойства позволяют узнать, что из себя представляет узел, и управлять им.',
    sections: [
      {
        title: 'Иерархия классов DOM',
        content:
          'Каждый DOM-узел принадлежит определённому классу. Все классы образуют иерархию, где каждый следующий наследует от предыдущего.',
        addition:
          'Корневые классы:\n' +
          '• EventTarget — корень, обеспечивает поддержку событий\n' +
          '• Node — базовый класс для всех узлов\n' +
          '• Element — базовый класс для тегов\n' +
          '• HTMLElement — базовый класс для HTML-элементов\n' +
          'Проверка класса:\n' +
          '• elem.constructor.name — имя класса\n' +
          '• elem instanceof Класс — проверка принадлежности',
        examples:
          '<div id="myDiv"></div>\n' +
          '<input id="myInput" type="text">\n\n' +
          '<script>\n' +
          '  // Проверка для элемента div\n' +
          '  let div = document.getElementById("myDiv");\n' +
          '  console.log(div instanceof HTMLDivElement); // true\n' +
          '  console.log(div instanceof HTMLElement); // true\n' +
          '  console.log(div instanceof Element); // true\n' +
          '  console.log(div instanceof Node); // true\n' +
          '  console.log(div.constructor.name); // "HTMLDivElement"\n\n' +
          '  // Проверка для элемента input\n' +
          '  let input = document.getElementById("myInput");\n' +
          '  console.log(input instanceof HTMLInputElement); // true\n' +
          '  console.log(input.constructor.name); // "HTMLInputElement"\n' +
          '</script>',
      },
      {
        title: 'Свойство nodeType',
        content: 'Свойство nodeType содержит числовой код типа узла.',
        addition:
          'Основные значения:\n' +
          '• 1 — элемент (ELEMENT_NODE)\n' +
          '• 3 — текст (TEXT_NODE)\n' +
          '• 8 — комментарий (COMMENT_NODE)\n' +
          '• 9 — документ (DOCUMENT_NODE)\n' +
          '• 11 — фрагмент (DOCUMENT_FRAGMENT_NODE)',
        examples:
          '<div id="test">текст</div>\n' +
          '<!-- комментарий -->\n\n' +
          '<script>\n' +
          '  let div = document.getElementById("test");\n' +
          '  let comment = div.nextSibling;\n\n' +
          '  console.log(div.nodeType); // 1 (элемент)\n' +
          '  console.log(div.firstChild.nodeType); // 3 (текст)\n' +
          '  console.log(comment.nodeType); // 8 (комментарий)\n' +
          '  console.log(document.nodeType); // 9 (документ)\n' +
          '  console.log(document.createDocumentFragment().nodeType); // 11 (фрагмент)\n' +
          '</script>',
      },
      {
        title: 'Свойства: nodeName, tagName',
        content:
          'Свойства nodeName и tagName возвращают имя тега для элементов. Для других типов узлов nodeName возвращает специальное значение.',
        addition:
          'Различия:\n' +
          '• tagName есть только у узлов-элементов Element\n' +
          '• nodeName есть у всех узлов Node:\n' +
          '- для элементов: равно tagName\n' +
          '- для текстовых узлов: "#text"\n' +
          '- для комментариев: "#comment"\n' +
          '- для документа: "#document"\n\n' +
          'В HTML имена тегов возвращаются в верхнем регистре ("BODY", "DIV").',
        examples:
          '<div id="test">текст</div>\n' +
          '<!-- комментарий -->\n\n' +
          '<script>\n' +
          '  let div = document.getElementById("test");\n' +
          '  let comment = div.nextSibling;\n\n' +
          '  // Для элемента\n' +
          '  console.log(div.tagName); // "DIV"\n' +
          '  console.log(div.nodeName); // "DIV"\n\n' +
          '  // Для комментария\n' +
          '  console.log(comment.tagName); // undefined\n' +
          '  console.log(comment.nodeName); // "#comment"\n\n' +
          '  // Для документа\n' +
          '  console.log(document.tagName); // undefined\n' +
          '  console.log(document.nodeName); // "#document"\n' +
          '</script>',
      },
      {
        title: 'Свойства: data, nodeValue',
        content:
          'Свойства data и nodeValue используются для получения или изменения содержимого текстовых узлов и комментариев.',
        addition:
          '• data и nodeValue — практически идентичны, возвращают одно и то же\n' +
          '• Работают только для текстовых узлов (TEXT_NODE) и комментариев (COMMENT_NODE)\n' +
          '• Для элементов (ELEMENT_NODE) возвращают null',
        examples:
          '<div id="test">\n' +
          '  Привет<!-- комментарий -->\n' +
          '</div>\n' +
          '\n' +
          '<script>\n' +
          '  let div = document.getElementById("test");\n' +
          '  let textNode = div.firstChild;\n' +
          '  let commentNode = textNode.nextSibling;\n' +
          '\n' +
          '  // Для текстового узла\n' +
          '  console.log(textNode.data); // "Привет"\n' +
          '  console.log(textNode.nodeValue); // "Привет"\n' +
          '\n' +
          '  // Изменение текста\n' +
          '  textNode.data = "Пока";\n' +
          '  console.log(div.innerHTML); // "Пока<!-- комментарий -->"\n' +
          '\n' +
          '  // Для комментария\n' +
          '  console.log(commentNode.data); // " комментарий "\n' +
          '  console.log(commentNode.nodeValue); // " комментарий "\n' +
          '\n' +
          '  // Для элемента — возвращают null\n' +
          '  console.log(div.data); // undefined\n' +
          '  console.log(div.nodeValue); // null\n' +
          '</script>',
      },
      {
        title: 'Свойство innerHTML',
        content:
          'Свойство innerHTML позволяет получить или изменить HTML-содержимое элемента в виде строки.',
        addition:
          '• При чтении возвращает HTML внутри элемента\n' +
          '• При записи заменяет содержимое, браузер парсит HTML и исправляет ошибки\n' +
          '• Скрипты <script> вставляются, но НЕ выполняются\n' +
          '• Использование innerHTML+= вызывает перезапись всего содержимого',
        examples:
          '<div id="box">\n' +
          '  <p>Привет</p>\n' +
          '</div>\n\n' +
          '<script>\n' +
          '  let box = document.getElementById("box");\n\n' +
          '  // Чтение\n' +
          '  console.log(box.innerHTML); // "  <p>Привет</p>  "\n\n' +
          '  // Замена содержимого\n' +
          '  box.innerHTML = "<b>Жирный текст</b>";\n' +
          '  console.log(box.innerHTML); // "<b>Жирный текст</b>"\n\n' +
          '  // Браузер исправляет ошибки\n' +
          '  box.innerHTML = "<i>курсив"; // забыли закрыть\n' +
          '  console.log(box.innerHTML); // "<i>курсив</i>"\n\n' +
          '  // innerHTML += перезаписывает всё\n' +
          '  let oldContent = box.innerHTML;\n' +
          '  box.innerHTML += "<p>Ещё текст</p>";\n' +
          '  console.log(oldContent); // <i>курсив</i>\n' +
          '  console.log(box.innerHTML); // <i>курсив</i><p>Ещё текст</p>\n' +
          '</script>',
      },
      {
        title: 'Свойства: outerHTML, textContent',
        content:
          'outerHTML возвращает элемент целиком вместе с его содержимым в виде строки.\n' +
          'textContent возвращает только текст без HTML-тегов.',
        addition:
          'outerHTML:\n' +
          '• Возвращает HTML целиком (как innerHTML + сам элемент)\n' +
          '• Запись в outerHTML не изменяет сам элемент, а заменяет его во внешнем контексте (старая переменная будет содержать старое значение)\n' +
          'textContent:\n' +
          '• Возвращает текст со всех вложенных элементов\n' +
          '• Запись в textContent безопасна — HTML-теги трактуются как текст\n' +
          '• Используется для защиты от XSS (вставка пользовательского текста)',
        examples:
          '<div id="elem">Привет<b>Мир</b></div>\n\n' +
          '<script>\n' +
          '  let elem = document.getElementById("elem");\n\n' +
          '  console.log(elem.outerHTML); // "<div id="elem">Привет <b>Мир</b></div>"\n\n' +
          '  // Замена элемента через outerHTML\n' +
          '  elem.outerHTML = "<p>Новый элемент</p>";\n' +
          '  console.log(elem.outerHTML); // всё ещё "<div>..." — elem указывает на старый(!) элемент\n' +
          '  console.log(document.body.innerHTML); // "<p>Новый элемент</p>" — а в DOM новый\n' +
          '\n' +
          '  let div = document.createElement("div");\n' +
          '  div.textContent = "<b>Винни-пух!</b>";\n' +
          '  console.log(div.innerHTML); // "&lt;b&gt;Винни-пух!&lt;/b&gt;" (теги экранированы)\n' +
          '  console.log(div.textContent); // "<b>Винни-пух!</b>" (чистый текст)\n' +
          '</script>',
      },
    ],
  },
};
