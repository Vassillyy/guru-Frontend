import { type ITopic } from '@/entities/topic';

export const configDispatchEvents: ITopic = {
  value: 'dispatch-events',
  name: 'Генерация пользовательских событий',
  content: {
    introduction:
      'События можно не только обрабатывать, но и создавать самостоятельно из JavaScript-кода, а затем запускать на любых элементах.',
    sections: [
      {
        title: 'Конструктор Event',
        content:
          'Встроенные классы для событий формируют иерархию, корнем которой является класс Event:\n' +
          'let event = new Event(type[, options]);\n' +
          '• type — тип события\n' +
          '• options — объект с тремя необязательными свойствами:\n' +
          '  • bubbles: true/false — если true, событие всплывает\n' +
          '  • cancelable: true/false — если true, можно отменить действие по умолчанию\n' +
          '  • composed: true/false — если true, событие всплывает за пределы Shadow DOM\n' +
          'По умолчанию все три свойства установлены в false.',
        addition:
          '• Конструктор Event — базовый, подходит для любых типов событий\n' +
          '• При создании встроенных событий лучше использовать специальные конструкторы (MouseEvent, KeyboardEvent и т.д.)\n' +
          '• Для пользовательских событий рекомендуется CustomEvent',
        examples:
          '<script>\n' +
          '  // Создание простого события\n' +
          '  let event = new Event("my-event", {\n' +
          '    bubbles: true,\n' +
          '    cancelable: true\n' +
          '  });\n' +
          '  console.log(event.type); // "my-event"\n' +
          '  console.log(event.bubbles); // true\n' +
          '</script>',
      },
      {
        title: 'Метод dispatchEvent',
        content:
          'После создания объекта события его нужно запустить на элементе, вызвав метод elem.dispatchEvent(event). Обработчики отреагируют на него, как на обычное браузерное событие. Если при создании указан флаг bubbles, то событие будет всплывать.\n' +
          'Свойство event.isTrusted позволяет отличить настоящее событие от сгенерированного кодом: оно true для реальных действий пользователя и false для созданных через dispatchEvent.',
        addition:
          'dispatchEvent синхронно запускает обработчики и возвращает false, если обработчик вызвал preventDefault() и событие было cancelable',
        examples:
          '<button id="btn">Кнопка</button>\n\n' +
          '<script>\n' +
          '  let btn = document.getElementById("btn");\n\n' +
          '  // Обработчик с preventDefault\n' +
          '  btn.addEventListener("click", (event) => {\n' +
          '    console.log("Клик!");\n' +
          '    console.log(event.isTrusted); // false\n' +
          '    event.preventDefault();\n' +
          '  });\n\n' +
          '  // Генерируем событие с cancelable: true\n' +
          '  let event = new Event("click", { bubbles: true, cancelable: true });\n' +
          '  let result = btn.dispatchEvent(event);\n' +
          '  console.log(result); // false\n' +
          '</script>',
      },
      {
        title: 'Всплытие пользовательских событий',
        content:
          'Пользовательские события могут всплывать. Для этого при создании нужно установить флаг bubbles: true. Механизм всплытия идентичен встроенным событиям.',
        addition:
          '• Без флага bubbles: true событие не всплывает\n' +
          '• Для своих событий используйте addEventListener — on<событие> не работает\n' +
          '• Фазы всплытия и погружения работают одинаково для любых событий',
        examples:
          '<div id="parent">\n' +
          '  <button id="btn">Нажми</button>\n' +
          '</div>\n\n' +
          '<script>\n' +
          '  let parent = document.getElementById("parent");\n' +
          '  let btn = document.getElementById("btn");\n\n' +
          '  // Обработчик на родителе\n' +
          '  parent.addEventListener("my-event", () => {\n' +
          '    console.log("Событие всплыло до родителя");\n' +
          '  });\n\n' +
          '  // Обработчик на кнопке\n' +
          '  btn.addEventListener("my-event", () => {\n' +
          '    console.log("Событие на кнопке");\n' +
          '  });\n\n' +
          '  // Запускаем событие с bubbles: true\n' +
          '  let event = new Event("my-event", { bubbles: true });\n' +
          '  btn.dispatchEvent(event);\n' +
          '  // Вывод: "Событие на кнопке" → "Событие всплыло до родителя"\n' +
          '</script>',
      },
      {
        title: 'Специальные конструкторы',
        content:
          'Для некоторых типов событий есть свои конструкторы: UIEvent, FocusEvent, MouseEvent, WheelEvent, KeyboardEvent и другие. Стоит использовать их вместо Event, если мы хотим создавать такие события. Такой конструктор позволяет указать стандартные свойства для данного типа. Обычный конструктор Event эти свойства проигнорирует.',
        addition:
          '• new MouseEvent("click") даёт доступ к clientX, clientY, button и т.д.\n' +
          '• new KeyboardEvent("keydown") — к key, code и т.д.\n' +
          '• С Event можно задать свойства вручную после создания (не рекомендуется)\n' +
          '• Браузерные события всегда имеют правильный тип',
        examples:
          '<button id="btn">Кнопка</button>\n\n' +
          '<script>\n' +
          '  let btn = document.getElementById("btn");\n\n' +
          '  // MouseEvent с координатами\n' +
          '  let clickEvent = new MouseEvent("click", {\n' +
          '    bubbles: true,\n' +
          '    clientX: 150,\n' +
          '    clientY: 30\n' +
          '  });\n\n' +
          '  // KeyboardEvent с клавишей\n' +
          '  let keyEvent = new KeyboardEvent("keydown", {\n' +
          '    bubbles: true,\n' +
          '    key: "Enter",\n' +
          '    code: "Enter"\n' +
          '  });\n\n' +
          '  btn.addEventListener("click", (event) => {\n' +
          '    console.log(event.clientX, event.clientY); // 150, 30\n' +
          '  });\n\n' +
          '  btn.addEventListener("keydown", (event) => {\n' +
          '    console.log(event.key, event.code); // Enter, Enter\n' +
          '  });\n\n' +
          '  // Запускаем события\n' +
          '  btn.dispatchEvent(clickEvent);\n' +
          '  btn.dispatchEvent(keyEvent);\n' +
          '</script>',
      },
      {
        title: 'Конструктор CustomEvent',
        content:
          'Для генерации пользовательских событий следует использовать конструктор CustomEvent. Технически он идентичен Event, но у второго аргумента есть дополнительное свойство detail. Это позволяет избежать конфликтов с другими свойствами события.',
        addition:
          '• detail может содержать любые данные\n' +
          '• Обработчики получают данные через event.detail\n' +
          '• В обычный Event тоже можно записать свои свойства, но это не по стандарту',
        examples:
          '<button id="btn">Отправить данные</button>\n\n' +
          '<script>\n' +
          '  let btn = document.getElementById("btn");\n\n' +
          '  // Обработчик получает данные из detail\n' +
          '  btn.addEventListener("user-login", (event) => {\n' +
          '    console.log(event.detail.name); // Вася\n' +
          '    console.log(event.detail.age); // 25\n' +
          '  });\n\n' +
          '  // Генерируем событие с данными\n' +
          '  btn.dispatchEvent(new CustomEvent("user-login", {\n' +
          '    detail: { name: "Вася", age: 25 }\n' +
          '  }));\n' +
          '</script>',
      },
      {
        title: 'Синхронная обработка вложенных событий',
        content:
          'Обычно события обрабатываются асинхронно: новое событие ждёт окончания обработки текущего. Но если событие инициировано из обработчика другого события через dispatchEvent, то вложенное событие обрабатывается синхронно — управление сначала переходит во вложенный обработчик, а потом возвращается обратно.',
        addition:
          '• dispatchEvent внутри обработчика запускает вложенное событие синхронно\n' +
          '• Порядок: внешний код → вложенное событие → продолжение внешнего кода\n' +
          '• Чтобы сделать обработку асинхронной, оберните dispatchEvent в setTimeout(() => ..., 0)',
        examples:
          '<button id="btn">Нажми</button>\n\n' +
          '<script>\n' +
          '  let btn = document.getElementById("btn");\n\n' +
          '  btn.onclick = function() {\n' +
          '    console.log("Внешний обработчик");\n\n' +
          '    // dispatchEvent срабатывает синхронно\n' +
          '    btn.dispatchEvent(new CustomEvent("my-event"));\n\n' +
          '    console.log("Продолжение внешнего обработчика");\n' +
          '  };\n\n' +
          '  btn.addEventListener("my-event", () => {\n' +
          '    console.log("Вложенный обработчик");\n' +
          '  });\n\n' +
          '  // Вывод: Внешний обработчик → Вложенный обработчик → Продолжение внешнего обработчика\n' +
          '</script>',
      },
    ],
  },
};
