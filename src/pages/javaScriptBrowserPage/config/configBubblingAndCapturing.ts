import { type ITopic } from '@/entities/topic';

export const configBubblingAndCapturing: ITopic = {
  value: 'bubbling-and-capturing',
  name: 'Всплытие и перехват событий',
  content: {
    introduction:
      'Стандарт DOM Events предусматривает три фазы распространения события: фаза перехвата, фаза цели и фаза всплытия. Событие сначала проходит от корня документа до целевого элемента (перехват), затем достигает цели, а после поднимается обратно (всплытие).',
    sections: [
      {
        title: 'Всплытие событий',
        content:
          'Когда событие происходит на элементе, оно сначала запускается на нём самом, а затем на его родителе, далее на родителе родителя и так далее до корня документа.\n' +
          'Большинство событий всплывают, но не все — например, focus не всплывает.',
        addition:
          '• event.target — это исходный элемент, на котором произошло событие (самый глубокий)\n' +
          '• event.currentTarget (this) — элемент, на котором сработал обработчик\n' +
          '• Если на одном уровне несколько обработчиков, они выполняются в порядке назначения',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <div id="parent" style="padding: 20px; background: lightgray;">\n' +
          '      Родитель (DIV)\n' +
          '      <button id="child">Кликни меня</button>\n' +
          '    </div>\n\n' +
          '    <script>\n' +
          '      let parent = document.getElementById("parent");\n' +
          '      let child = document.getElementById("child");\n\n' +
          '      child.addEventListener("click", () => console.log("Обработчик на кнопке (target)"));\n' +
          '      parent.addEventListener("click", () => console.log("Обработчик на DIV (всплытие)"));\n' +
          '      document.body.addEventListener("click", () => console.log("Обработчик на BODY"));\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title: 'Перехват событий',
        content:
          'Перехват — противоположная всплытию фаза. Событие сначала спускается от корня document к целевому элементу, проходя через всех предков. Обработчики, назначенные с опцией capture: true (или третьим аргументом true), срабатывают на фазе перехвата, а не на фазе всплытия.\n' +
          'Полный цикл распространения события:\n' +
          '1. Фаза перехвата — событие идёт от window к document, затем к html, body и далее вниз до target\n' +
          '2. Фаза цели — событие достигает целевого элемента\n' +
          '3. Фаза всплытия — событие поднимается обратно вверх от target до window',
        addition:
          'Два способа включить перехват:\n' +
          '• addEventListener(event, handler, true) — старый способ\n' +
          '• addEventListener(event, handler, { capture: true }) — современный способ',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <div id="parent" style="padding: 20px; background: lightgray;">\n' +
          '      Родитель\n' +
          '      <button id="btn">Кликни</button>\n' +
          '    </div>\n\n' +
          '    <script>\n' +
          '      let parent = document.getElementById("parent");\n' +
          '      let btn = document.getElementById("btn");\n\n' +
          '      // Перехват — сработает первым\n' +
          '      parent.addEventListener("click", () => console.log("1. Перехват на DIV"), true);\n\n' +
          '      // Цель\n' +
          '      btn.addEventListener("click", () => console.log("2. Цель — кнопка"));\n\n' +
          '      // Всплытие — сработает последним\n' +
          '      parent.addEventListener("click", () => console.log("3. Всплытие на DIV"));\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title: 'Методы: stopPropagation и stopImmediatePropagation',
        content:
          'Метод event.stopPropagation() прекращает дальнейшее распространение события — оно не будет всплывать или перехватываться на вышестоящих элементах. Однако другие обработчики на текущем элементе всё равно сработают.\n' +
          'Метод event.stopImmediatePropagation() не только останавливает всплытие, но и предотвращает вызов других обработчиков на том же самом элементе.',
        addition:
          '• stopPropagation() полезен, когда нужно изолировать обработку события от родительских элементов\n' +
          '• stopImmediatePropagation() нужен, когда требуется гарантировать, что никакой другой обработчик не сработает',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <div id="parent" style="padding: 20px; background: lightgray;">\n' +
          '      Родитель\n' +
          '      <button id="btn1">stopPropagation</button>\n' +
          '      <button id="btn2">stopImmediatePropagation</button>\n' +
          '    </div>\n\n' +
          '    <script>\n' +
          '      let parent = document.getElementById("parent");\n' +
          '      let btn1 = document.getElementById("btn1");\n' +
          '      let btn2 = document.getElementById("btn2");\n\n' +
          '      // stopPropagation — родитель не увидит, но второй обработчик на кнопке сработает\n' +
          '      btn1.addEventListener("click", (event) => {\n' +
          '        event.stopPropagation();\n' +
          '        console.log("btn1: 1-й обработчик (остановил всплытие)");\n' +
          '      });\n' +
          '      btn1.addEventListener("click", () => console.log("btn1: 2-й обработчик (сработал)"));\n\n' +
          '      // stopImmediatePropagation — второй обработчик на кнопке НЕ сработает\n' +
          '      btn2.addEventListener("click", (event) => {\n' +
          '        event.stopImmediatePropagation();\n' +
          '        console.log("btn2: 1-й обработчик (остановил всё)");\n' +
          '      });\n' +
          '      btn2.addEventListener("click", () => console.log("btn2: 2-й обработчик (НЕ сработает)"));\n\n' +
          '      parent.addEventListener("click", () => console.log("Родитель (НЕ сработает)"));\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title: 'Делегирование событий',
        content:
          'Делегирование событий — техника, основанная на всплытии. Вместо назначения обработчика каждому элементу, ставим один обработчик на общего предка и ловим события через event.target.\n\n' +
          'Алгоритм:\n' +
          '1. Вешаем обработчик на контейнер-родитель\n' +
          '2. В обработчике получаем event.target — элемент, на котором произошло событие\n' +
          '3. Проверяем, что target — это нужный нам элемент (или находится внутри него). Обычно используют: event.target.closest(селектор) или проверку tagName, classList, matches\n' +
          '4. Если проверка пройдена — выполняем нужное действие',
        addition:
          'Делегирование экономит память (один обработчик вместо многих), избавляет от необходимости назначать/снимать обработчики при добавлении/удалении элементов.\n' +
          'Ограничения: событие должно всплывать (не все события всплывают, например focus).\n' +
          'Можно ставить атрибут (data-***), обработчик вешается на document, при клике проверяется event.target.closest("[data-...]") и выполняется действие. Позволяет добавлять поведение элементам без написания JS-кода.',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <div id="menu">\n' +
          '      <button data-action="save">Сохранить</button>\n' +
          '      <button data-action="load">Загрузить</button>\n' +
          '      <button data-action="search">Поиск</button>\n' +
          '    </div>\n\n' +
          '    <script>\n' +
          '      class Menu {\n' +
          '        constructor(elem) {\n' +
          '          this._elem = elem;\n' +
          '          // .bind(this) нужен, чтобы внутри _onClick this указывал на объект Menu, а не на elem\n' +
          '          elem.addEventListener("click", this._onClick.bind(this));\n' +
          '        }\n\n' +
          '        save() { console.log("Сохраняем..."); }\n' +
          '        load() { console.log("Загружаем..."); }\n' +
          '        search() { console.log("Ищем..."); }\n\n' +
          '        _onClick(event) {\n' +
          '          let action = event.target.dataset.action;\n' +
          '          if (action && this[action]) {\n' +
          '            this[action](); // вызов save(), load() или search()\n' +
          '          }\n' +
          '        }\n' +
          '      }\n\n' +
          '      new Menu(document.getElementById("menu"));\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
    ],
  },
};
