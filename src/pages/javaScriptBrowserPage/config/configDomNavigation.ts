import { type ITopic } from '@/entities/topic';

export const configDomNavigation: ITopic = {
  value: 'dom-navigation',
  name: 'Навигация по DOM-элементам',
  content: {
    introduction:
      'Чтобы изменить элемент или его содержимое, сначала нужно получить ссылку на соответствующий DOM-узел. Все навигационные операции начинаются с объекта document — главной «точки входа».',
    sections: [
      {
        title: 'Навигация от корня документа: html, head, body',
        content:
          'Для доступа к корневым элементам страницы у объекта document есть специальные свойства.',
        addition:
          '• <html> = document.documentElement — ссылка на тег html\n' +
          '• <body> = document.body — ссылка на тег body\n' +
          '• <head> = document.head — ссылка на тег head\n' +
          '• document.body может быть равен null, если скрипт находится в <head>',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <script>\n' +
          '      console.log(document.documentElement); // <html>...</html>\n' +
          '      console.log(document.head); // <head>...</head>\n' +
          '      console.log(document.body); // <body>...</body>\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>\n' +
          '\n\n' +
          '<html>\n' +
          '  <head>\n' +
          '    <script>\n' +
          '      console.log(document.body); // null (тело документа ещё не создано)\n' +
          '    </script>\n' +
          '  </head>\n' +
          '  <body>\n' +
          '    <script>\n' +
          '      console.log(document.body); // <body>...</body> (тело уже существует)\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title: 'Навигация по дочерним узлам и элементам',
        content:
          'Свойства childNodes, firstChild, lastChild, previousSibling, nextSibling, parentNode возвращают все типы узлов.\n' +
          'Свойства children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling, parentElement возвращают только узлы-элементы.',
        addition:
          'Для всех узлов:\n' +
          '• childNodes — коллекция всех дочерних узлов\n' +
          '• firstChild, lastChild — первый и последний дочерний узел\n' +
          '• previousSibling, nextSibling — соседние узлы\n' +
          '• parentNode — родительский узел\n' +
          'Также есть функция hasChildNodes() — которая проверяет, есть ли дочерние узлы (возвращает true/false)\n' +
          'Только для узлов-элементов:\n' +
          '• children — коллекция дочерних элементов\n' +
          '• firstElementChild, lastElementChild — первый и последний дочерний элемент\n' +
          '• previousElementSibling, nextElementSibling — соседние элементы\n' +
          '• parentElement — родитель-элемент (может вернуть null для корневого <html>)\n\n' +
          'Все навигационные свойства доступны только для чтения.',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <div>Начало</div>\n' +
          '    Пробельный текст\n' +
          '    <!-- конец -->\n' +
          '    \n' +
          '    <script>\n' +
          '      // childNodes - коллекция всех дочерних узлов\n' +
          '      for (let node of document.body.childNodes) {\n' +
          '        console.log(node); // Text, DIV, Text, Comment, Text, Script\n' +
          '      }\n' +
          '      \n' +
          '      // firstChild, lastChild\n' +
          '      console.log("Первый узел:", document.body.firstChild); // Text\n' +
          '      console.log("Последний узел:", document.body.lastChild); // Script\n' +
          '      \n' +
          '      // hasChildNodes()\n' +
          '      console.log("Есть ли дети у body?", document.body.hasChildNodes()); // true\n' +
          '      \n' +
          '      // previousSibling, nextSibling\n' +
          '      const div = document.querySelector("div");\n' +
          '      console.log("Следующий сосед div:", div.nextSibling); // Text\n' +
          '      console.log("Предыдущий сосед div:", div.previousSibling); // Text\n' +
          '      \n' +
          '      // parentNode\n' +
          '      console.log("Родитель div:", div.parentNode); // BODY\n' +
          '      \n' +
          '      // children\n' +
          '      for (let elem of document.body.children) {\n' +
          '        console.log(elem.tagName); // DIV, SCRIPT\n' +
          '      }\n' +
          '      \n' +
          '      // firstElementChild, lastElementChild\n' +
          '      console.log("Первый элемент:", document.body.firstElementChild); // DIV\n' +
          '      console.log("Последний элемент:", document.body.lastElementChild); // SCRIPT\n' +
          '      \n' +
          '      // previousElementSibling, nextElementSibling\n' +
          '      console.log("Следующий элемент-сосед div:", div.nextElementSibling); // null (нет следующего элемента)\n' +
          '      console.log("Предыдущий элемент-сосед div:", div.previousElementSibling); // null\n' +
          '      \n' +
          '      // parentElement\n' +
          '      console.log("Родитель-элемент div:", div.parentElement); // BODY\n' +
          '      console.log("parentNode <html>:", document.documentElement.parentNode); // document\n' +
          '      console.log("parentElement <html>:", document.documentElement.parentElement); // null\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title: 'Навигация по таблицам',
        content:
          'Таблицы предоставляют дополнительные свойства, специфичные для их типа.',
        addition:
          'Элемент </table>:\n' +
          '• table.rows — коллекция всех строк <tr> (включая <thead>, <tbody>, <tfoot>)\n' +
          '• table.caption` — ссылка на <caption>\n' +
          '• table.tHead — ссылка на <thead>\n' +
          '• table.tFoot — ссылка на <tfoot>\n' +
          '• table.tBodies — коллекция всех <tbody> (по спецификации их может быть несколько)\n' +
          'Секции <thead>, <tfoot>, <tbody>:\n' +
          '• section.rows — коллекция строк <tr> внутри конкретной секции\n' +
          'Строка <tr>:\n' +
          '• tr.cells — коллекция всех ячеек в строке (и <td>, и <th>)\n' +
          '• tr.sectionRowIndex — номер строки внутри текущей секции (thead/tbody/tfoot)\n' +
          '• tr.rowIndex — номер строки во всей таблице\n' +
          'Ячейки <td> и <th>:\n' +
          '• td.cellIndex — номер ячейки в строке',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <table id="table" border="1">\n' +
          '      <thead>\n' +
          '        <tr>\n' +
          '          <th>Имя</th>\n' +
          '          <th>Возраст</th>\n' +
          '        </tr>\n' +
          '      </thead>\n' +
          '      <tbody>\n' +
          '        <tr>\n' +
          '          <td>Анна</td>\n' +
          '          <td>25</td>\n' +
          '        </td>\n' +
          '        <tr>\n' +
          '          <td>Петр</td>\n' +
          '          <td>30</td>\n' +
          '        </tr>\n' +
          '      </tbody>\n' +
          '      <tfoot>\n' +
          '        <tr>\n' +
          '          <td>Итого: 2</td>\n' +
          '        </tr>\n' +
          '      </tfoot>\n' +
          '    </table>\n\n' +
          '    <script>\n' +
          '      const table = document.getElementById("table");\n\n' +
          '      // Доступ к строкам таблицы\n' +
          '      console.log("Все строки:", table.rows.length); // 4\n' +
          '      console.log("Первая строка, вторая ячейка:", table.rows[0].cells[1].innerHTML); // "Возраст"\n\n' +
          '      // Доступ к секциям\n' +
          '      console.log("thead:", table.tHead); // <thead>...</thead>\n' +
          '      console.log("tbody:", table.tBodies[0]); // <tbody>...</tbody>\n' +
          '      console.log("tfoot:", table.tFoot); // <tfoot>...</tfoot>\n\n' +
          '      // Навигация по строкам внутри tbody\n' +
          '      const tbody = table.tBodies[0];\n' +
          '      console.log("Строк в tbody:", tbody.rows.length); // 2\n' +
          '      console.log("Первая строка tbody, ячейка Имя:", tbody.rows[0].cells[0].innerHTML); // "Анна"\n\n' +
          '      // Индексы строк\n' +
          '      const firstRow = tbody.rows[0];\n' +
          '      console.log("rowIndex (позиция в таблице):", firstRow.rowIndex); // 1 (0 - thead, 1 - первая строка tbody)\n' +
          '      console.log("sectionRowIndex (позиция в секции):", firstRow.sectionRowIndex); // 0\n\n' +
          '      // Индексы ячеек\n' +
          '      const firstCell = firstRow.cells[0];\n' +
          '      console.log("cellIndex (позиция в строке):", firstCell.cellIndex); // 0\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
    ],
  },
};
