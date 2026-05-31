import { type ITopic } from '@/entities/topic';

export const configIntroductionBrowserEvents: ITopic = {
  value: 'introduction-browser-events',
  name: 'Браузерные события',
  content: {
    introduction:
      'Событие — это сигнал от браузера о том, что что-то произошло. Все DOM-узлы подают такие сигналы. Событию можно назначить обработчик — функцию, которая сработает, как только событие произошло.',
    sections: [
      {
        title: 'Способы назначения обработчиков',
        content:
          'Обработчик может быть назначен через HTML-атрибут on<событие>, либо через DOM-свойство. При назначении через атрибут браузер создаёт функцию из содержимого атрибута и записывает её в DOM-свойство.',
        addition:
          'Атрибуты HTML нечувствительны к регистру: ONCLICK = onClick = onclick.\n' +
          'В атрибуте нужны скобки: onclick="sayThanks()", а в свойстве — без скобок: elem.onclick = sayThanks.\n' +
          'Убрать обработчик: elem.onclick = null.',
        examples:
          '<!-- Через HTML-атрибут -->\n' +
          '<input type="button" onclick="console.log(\'Выведется при клике\')" value="Нажми меня">\n\n' +
          '<!-- Через DOM-свойство -->\n' +
          '<input type="button" id="elem" value="Нажми меня">\n\n' +
          '<script>\n' +
          '  elem.onclick = function() {\n' +
          "    console.log('Выведется при клике');\n" +
          '  };\n' +
          '</script>',
      },
      {
        title: 'Доступ к элементу через this',
        content:
          'Внутри обработчика события this ссылается на текущий элемент, на котором назначен обработчик.',
        addition:
          'Можно использовать this.innerHTML, this.style и другие свойства элемента.',
        examples:
          '<button onclick="console.log(this.innerHTML)">Нажми меня</button> // При клике выведет - Нажми меня',
      },
      {
        title: 'Методы: addEventListener, removeEventListener',
        content:
          'Метод addEventListener позволяет назначать несколько обработчиков на одно событие.\n' +
          'Синтаксис: element.addEventListener(event, handler, [options])\n' +
          '• event — имя события (строка)\n' +
          '• handler — функция-обработчик\n' +
          '• options — объект с настройками (once, capture, passive) или булево значение\n' +
          'options:\n' +
          '• once: если true, обработчик автоматически удалится после первого срабатывания\n' +
          '• capture: фаза, на которой сработает обработчик (true — перехват, false — всплытие)\n' +
          '• passive: если true, обработчик никогда не вызовет preventDefault()\n\n' +
          'Метод removeEventListener удаляет обработчик. Синтаксис тот же, нужно передать ту же функцию и те же опции, что были при добавлении. Иначе удаление не сработает.',
        addition:
          'Событие DOMContentLoaded можно назначить только через addEventListener, потому что у document нет DOM-свойства onDOMContentLoaded.',
        examples:
          '<button id="btn1">Несколько обработчиков</button>\n' +
          '<button id="btn2">Один раз (once)</button>\n' +
          '<button id="btn3">С удалением</button>\n\n' +
          '<script>\n' +
          '  // Пример 1: несколько обработчиков на одно событие\n' +
          '  let btn1 = document.getElementById("btn1");\n' +
          '  btn1.addEventListener("click", () => console.log("1-й обработчик"));\n' +
          '  btn1.addEventListener("click", () => console.log("2-й обработчик"));\n\n' +
          '  // Пример 2: once — сработает только один раз\n' +
          '  let btn2 = document.getElementById("btn2");\n' +
          '  btn2.addEventListener("click", () => console.log("Этот лог будет только один раз"), { once: true });\n\n' +
          '  // Пример 3: добавление и удаление обработчика\n' +
          '  let btn3 = document.getElementById("btn3");\n' +
          '  function handler() {\n' +
          '    console.log("Обработчик сработал");\n' +
          '  }\n' +
          '  btn3.addEventListener("click", handler);\n' +
          '  // Удаляем обработчик через 3 секунды\n' +
          '  setTimeout(() => {\n' +
          '    btn3.removeEventListener("click", handler);\n' +
          '    console.log("Обработчик удалён, клики не работают");\n' +
          '  }, 3000);\n' +
          '</script>',
      },
      {
        title: 'Объект события',
        content:
          'Когда происходит событие, браузер создаёт объект события, записывает в него детали и передаёт его в качестве аргумента функции-обработчику.\n' +
          'Свойства:\n' +
          '• event.type — тип события (строка)\n' +
          '• event.target — элемент, на котором произошло событие (самый глубокий)\n' +
          '• event.currentTarget — элемент, на котором сработал обработчик (обычно совпадает с this)\n' +
          '• event.clientX / event.clientY — координаты курсора относительно окна (для мыши)\n' +
          '• event.pageX / event.pageY — координаты курсора относительно документа (с учётом прокрутки)\n' +
          '• event.key — какая клавиша нажата (для клавиатуры)\n' +
          '• event.button — какая кнопка мыши нажата (0 — левая, 1 — средняя, 2 — правая)\n' +
          '• event.timeStamp — время создания события в миллисекундах\n' +
          'Методы:\n' +
          '• event.preventDefault() — отменяет действие браузера по умолчанию\n' +
          '• event.stopPropagation() — останавливает всплытие события\n' +
          '• event.stopImmediatePropagation() — останавливает всплытие и предотвращает вызов других обработчиков на этом же элементе',
        addition:
          'Объект события также доступен в HTML-атрибуте через переменную event.\n' +
          'event.currentTarget обычно совпадает с this, но не при стрелочных функциях или bind.',
        examples:
          '<button id="btn">Кликни</button>\n' +
          '<div id="parent" style="padding: 20px; background: lightgray; margin-top: 10px;">\n' +
          '  Родитель\n' +
          '  <button>Дочерний</button>\n' +
          '</div>\n\n' +
          '<script>\n' +
          '  let btn = document.getElementById("btn");\n' +
          '  let parent = document.getElementById("parent");\n\n' +
          '  parent.addEventListener("click", (event) => {\n' +
          '    console.log(event.type); // click\n' +
          '    console.log(event.target.tagName); // DIV или BUTTON (смотря по чему кликнули)\n' +
          '    console.log(event.currentTarget.tagName); // DIV\n' +
          '  });\n\n' +
          '  btn.addEventListener("click", (event) => {\n' +
          '    console.log(event.clientX, event.clientY); // Координаты клика (X,Y)\n' +
          '  });\n\n' +
          '  let link = document.createElement("a");\n' +
          '  link.href = "https:/example.com";\n' +
          '  link.textContent = "Ссылка (кликни, переход отменён)";\n' +
          '  link.addEventListener("click", (event) => {\n' +
          '    event.preventDefault();\n' +
          '    console.log("Переход отменён через preventDefault");\n' +
          '  });\n' +
          '  document.body.appendChild(link);\n' +
          '</script>',
      },
      {
        title: 'Объект-обработчик: handleEvent',
        content:
          'Через addEventListener можно назначить не только функцию, но и объект. В этом случае при событии вызывается метод объекта handleEvent(event).',
        addition: 'handleEvent получает объект события в качестве аргумента.',
        examples:
          '<button id="btn">Нажми</button>\n\n' +
          '<script>\n' +
          '   let handler = {\n' +
          '    count: 0,\n\n' +
          '    handleEvent(event) {\n' +
          '      this.count++;\n' +
          '      console.log("Событие:", event.type);\n' +
          '      console.log("Счётчик кликов:", this.count);\n' +
          '    }\n' +
          '  };\n\n' +
          '  let btn = document.getElementById("btn");\n' +
          '  btn.addEventListener("click", handler);\n' +
          '</script>',
      },
    ],
  },
};
