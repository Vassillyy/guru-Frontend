import { type ITopic } from '@/entities/topic';

export const configAttributesAndProperties: ITopic = {
  value: 'attributes-and-properties',
  name: 'Атрибуты и свойства',
  content: {
    introduction:
      'Когда браузер парсит HTML, он создаёт DOM-объекты. Стандартные HTML-атрибуты становятся свойствами DOM, но это преобразование не всегда один-в-один.',
    sections: [
      {
        title: 'DOM-свойства',
        content:
          'DOM-узлы — это обычные объекты JavaScript. Мы можем добавлять свои свойства и методы, изменять встроенные и наследовать их.',
        addition:
          'Особенности DOM-свойств:\n' +
          '• Им можно присвоить любое значение\n' +
          '• Они регистрозависимы\n' +
          '• Поддерживают методы, как у обычных объектов\n' +
          '• Стандартные DOM-свойства типизированы (не всегда строки)\n' +
          'Примеры типизации:\n' +
          '• input.checked — логический тип (true/false)\n' +
          '• elem.style — объект (CSSStyleDeclaration), а не строка\n' +
          '• a.href — полный URL (даже если атрибут относительный)\n' +
          '• input.value — строка\n' +
          '• elem.tagName — строка в верхнем регистре',
        examples:
          '<body id="test">\n' +
          '<input id="checkbox" type="checkbox" checked>\n' +
          '<div id="div" style="color:red">Hello</div>\n' +
          '<a id="link" href="#hello">link</a>\n' +
          '<script>\n' +
          '  // Добавление своих свойств и методов\n' +
          '  document.body.myData = { name: "Caesar" };\n' +
          '  console.log(document.body.myData.name); // "Caesar"\n\n' +
          '  document.body.sayHi = function() {\n' +
          '    console.log(this.tagName);\n' +
          '  };\n' +
          '  document.body.sayHi(); // "BODY"\n\n' +
          '  // Наследование через прототип\n' +
          '  Element.prototype.sayHello = function() {\n' +
          '    console.log(`Hello from ${this.tagName}`);\n' +
          '  };\n' +
          '  document.body.sayHello(); // "Hello from BODY"\n\n' +
          '  // Типизация DOM-свойств\n' +
          '  let checkbox = document.getElementById("checkbox");\n' +
          '  let div = document.getElementById("div");\n' +
          '  let link = document.getElementById("link");\n\n' +
          '  // Логический тип (checked)\n' +
          '  console.log(checkbox.getAttribute("checked")); // "" (пустая строка)\n' +
          '  console.log(checkbox.checked); // true (boolean)\n\n' +
          '  // Объект style\n' +
          '  console.log(div.getAttribute("style")); // "color:red"\n' +
          '  console.log(div.style); // [object CSSStyleDeclaration]\n' +
          '  console.log(div.style.color); // "red"\n\n' +
          '  // Полный URL в href\n' +
          '  console.log(link.getAttribute("href")); // "#hello"\n' +
          '  console.log(link.href); // полный URL (например, "https://site.com/page#hello")\n' +
          '</script>',
      },
      {
        title: 'HTML-атрибуты',
        content:
          'В HTML у тегов могут быть атрибуты. Стандартные атрибуты преобразуются в DOM-свойства, но нестандартные — нет.',
        addition:
          'Методы для работы с атрибутами:\n' +
          '• elem.hasAttribute(name) — проверяет наличие атрибута\n' +
          '• elem.getAttribute(name) — получает значение атрибута\n' +
          '• elem.setAttribute(name, value) — устанавливает значение\n' +
          '• elem.removeAttribute(name) — удаляет атрибут\n\n' +
          'Особенности атрибутов:\n' +
          '• Имена регистронезависимы (id = ID)\n' +
          '• Значения всегда являются строками\n' +
          '• Все атрибуты доступны через elem.attributes',
        examples:
          '<body id="test" something="non-standard"></body>\n\n' +
          '<script>\n' +
          '  console.log(document.body.id); // "test"\n' +
          '  // Нестандартный атрибут не преобразуется в свойство\n' +
          '  console.log(document.body.something); // undefined\n\n' +
          '  // Чтение нестандартного атрибута\n' +
          '  console.log(document.body.getAttribute("something")); // "non-standard"\n\n' +
          '  // Работа с атрибутами\n' +
          '  let elem = document.body;\n' +
          '  elem.setAttribute("test", 123); // значение станет строкой "123"\n' +
          '  console.log(elem.getAttribute("test")); // "123"\n\n' +
          '  // Перебор всех атрибутов\n' +
          '  for (let attr of elem.attributes) {\n' +
          '    console.log(`${attr.name} = ${attr.value}`); // id = test, something = non-standard, test = 123\n' +
          '  }\n' +
          '</script>',
      },
      {
        title: 'Синхронизация между атрибутами и свойствами',
        content:
          'Когда стандартный атрибут изменяется, соответствующее свойство автоматически обновляется. Обычно это работает и в обратную сторону.',
        addition:
          'Синхронизация:\n' +
          '• Атрибут → Свойство: всегда работает\n' +
          '• Свойство → Атрибут: работает для большинства стандартных атрибутов\n' +
          'Исключения:\n' +
          '1. input.value — синхронизация только атрибут → свойство\n' +
          '2. input.checked — синхронизация только атрибут → свойство\n' +
          '3. a.href — свойство хранит полный URL, атрибут — исходный\n' +
          '4. input.type — изменение ограничено\n' +
          '5. style — атрибут — строка, свойство — объект',
        examples:
          '<input id="input" type="text">\n\n' +
          '<script>\n' +
          '  let input = document.querySelector("input");\n\n' +
          '  // Атрибут => свойство\n' +
          '  input.setAttribute("id", "newId");\n' +
          '  console.log(input.id); // "newId"\n\n' +
          '  // Свойство => атрибут\n' +
          '  input.id = "anotherId";\n' +
          '  console.log(input.getAttribute("id")); // "anotherId" (обновлено)\n\n' +
          '  // Исключение: input.value\n' +
          '  input.setAttribute("value", "text");\n' +
          '  console.log(input.value); // "text"\n\n' +
          '  input.value = "newValue";\n' +
          '  console.log(input.getAttribute("value")); // "text" (не обновилось!)\n' +
          '</script>',
      },
      {
        title: 'Нестандартные атрибуты, свойство dataset',
        content:
          'Нестандартные атрибуты полезны для передачи данных из HTML в JavaScript или для стилизации. Но чтобы избежать конфликтов с будущими стандартами, используются атрибуты data-*.',
        addition:
          'Атрибуты data-*:\n' +
          '• Зарезервированы для использования программистами — безопасно и валидно\n' +
          '• Доступны в свойстве dataset\n' +
          '• Имена с дефисом преобразуются в верблюжью нотацию (kebab-case → camelCase)',
        examples:
          '<body data-about="Elephants">\n' +
          '<div id="order" class="order" data-order-state="new">\n' +
          '  A new order.\n' +
          '</div>\n\n' +
          '<script>\n' +
          '  // Чтение data-атрибута\n' +
          '  console.log(document.body.dataset.about); // "Elephants"\n\n' +
          '  let order = document.getElementById("order");\n' +
          '  console.log(order.dataset.orderState); // "new"\n\n' +
          '  // Изменение через dataset\n' +
          '  order.dataset.orderState = "pending";\n' +
          '  console.log(order.dataset.orderState); // "pending"\n' +
          '  console.log(order.getAttribute("data-order-state")); // "pending"\n\n' +
          '  // Многословные атрибуты\n' +
          '  order.dataset.someLongName = "value";\n' +
          '  console.log(order.getAttribute("data-some-long-name")); // "value"\n' +
          '</script>\n\n' +
          '<style>\n' +
          '  .order[data-order-state="new"] { color: green; }\n' +
          '  .order[data-order-state="pending"] { color: blue; }\n' +
          '  .order[data-order-state="canceled"] { color: red; }\n' +
          '</style>',
      },
    ],
  },
};
