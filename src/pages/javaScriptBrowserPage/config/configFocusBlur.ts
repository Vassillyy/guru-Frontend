import { type ITopic } from '@/entities/topic';

export const configFocusBlur: ITopic = {
  value: 'focus-blur',
  name: 'Фокусировка: focus/blur',
  content: {
    introduction:
      'Элемент получает фокус (focus), при клике по нему или использовании клавиши Tab. Потеря фокуса (blur) происходит при клике в другое место или при переключении на другой элемент.',
    sections: [
      {
        title: 'События: focus и blur',
        content:
          'Событие focus вызывается в момент фокусировки, а blur — когда элемент теряет фокус. Используются для валидации, подсказок, подсветки активного поля, скрытия ошибок и тд.',
        addition:
          'Фокус могут получать не только поля ввода, но и ссылки, кнопки и любые элементы с атрибутом tabindex.\n' +
          'HTML5-валидация (required, pattern) не требует JS, но focus/blur дают гибкость: динамическая проверка, сложные условия, отправка на сервер.',
        examples:
          '<input type="text" id="nameInput" placeholder="Введите имя">\n\n' +
          '<script>\n' +
          '  const input = document.getElementById("nameInput");\n\n' +
          '  input.onfocus = () => {\n' +
          '    console.log("focus — поле получило фокус");\n' +
          '  };\n\n' +
          '  input.onblur = () => {\n' +
          '    console.log("blur — поле потеряло фокус");\n' +
          '  };\n' +
          '  // При клике на поле: focus — поле получило фокус\n' +
          '  // При клике вне поля: blur — поле потеряло фокус\n' +
          '</script>',
      },
      {
        title: 'Методы: focus и blur',
        content:
          'Методы elem.focus() и elem.blur() программно устанавливают и снимают фокус с элемента.',
        addition:
          'Нельзя отменить потерю фокуса через event.preventDefault() в onblur — событие уже произошло.\n' +
          'Если элемент удалить из DOM, фокус теряется без возможности возврата.',
        examples:
          '<input type="text" id="emailInput" placeholder="Введите email (должен содержать @)">\n\n' +
          '<script>\n' +
          '  const input = document.getElementById("emailInput");\n\n' +
          '  input.onblur = () => {\n' +
          '    console.log("blur — поле потеряло фокус");\n' +
          '    if (!input.value.includes("@")) {\n' +
          '      console.log("Возвращаем фокус на поле: email должен содержать @");\n' +
          '      input.focus();\n' +
          '    }\n' +
          '  };\n\n' +
          '  input.onfocus = () => {\n' +
          '    console.log("focus — поле получило фокус");\n' +
          '  };\n' +
          '  // При потере фокуса с неверным email: focus → blur → Ошибка → focus\n' +
          '</script>',
      },
      {
        title: 'Включаем фокусировку на любом элементе: tabindex',
        content:
          'Многие элементы по умолчанию не поддерживают фокусировку. Метод elem.focus() не работает для них, и события focus/blur никогда не срабатывают. Это можно изменить HTML-атрибутом tabindex.\n' +
          'Порядок перебора Tab: сначала идут элементы с tabindex от 1 и выше в порядке возрастания, затем элементы без tabindex (обычные input, button). При совпадающих tabindex — в порядке появления в документе.',
        addition:
          'tabindex="0" — ставит элемент в один ряд с обычными элементами (после tabindex >= 1).\n' +
          'tabindex="-1" — фокус только программно через elem.focus(), клавиша Tab игнорирует.\n\n' +
          'Свойство elem.tabIndex тоже работает для установки tabindex через JavaScript.',
        examples:
          '<div tabindex="0" id="first">Элемент с tabindex="0" (нажми Tab)</div>\n' +
          '<div tabindex="1" id="second">Элемент с tabindex="1"</div>\n' +
          '<div tabindex="2" id="third">Элемент с tabindex="2"</div>\n' +
          '<div tabindex="-1" id="fourth">Элемент с tabindex="-1" (только программно)</div>\n\n' +
          '<script>\n' +
          '  // Программный фокус на элемент с tabindex="-1"\n' +
          '  const fourth = document.getElementById("fourth");\n' +
          '  fourth.focus();\n' +
          '  console.log("Фокус установлен на элемент с tabindex=-1");\n\n' +
          '  // Обработчики событий фокуса\n' +
          '  const elements = [first, second, third, fourth];\n' +
          '  elements.forEach(el => {\n' +
          '    el.onfocus = () => console.log(`focus на: ${el.id}`);\n' +
          '    el.onblur = () => console.log(`blur на: ${el.id}`);\n' +
          '  });\n' +
          '  // Порядок навигации Tab: second (1) → third (2) → first (0)\n' +
          '</script>',
      },
      {
        title: 'События: focusin и focusout',
        content:
          'События focus и blur не всплывают. Это значит, что обработчик на форме не сработает при фокусировке на вложенном елементе. Существует два решения:\n' +
          '1) Использовать фазу перехвата (третий аргумент addEventListener — true)\n' +
          '2) Использовать события focusin и focusout — они аналогичны focus и blur, но всплывают',
        addition:
          'focusin/focusout используются только с addEventListener, не с on<событие>.\n\n' +
          'Текущий элемент с фокусом можно получить из document.activeElement.',
        examples:
          '<form id="myForm">\n' +
          '  <input type="text" name="name" placeholder="Имя">\n' +
          '  <input type="text" name="surname" placeholder="Фамилия">\n' +
          '</form>\n\n' +
          '<script>\n' +
          '  const form = document.getElementById("myForm");\n\n' +
          '  // focusin и focusout всплывают, поэтому обработчик на форме сработает\n' +
          '  form.addEventListener("focusin", () => console.log("focusin: элемент внутри формы получил фокус"));\n' +
          '  form.addEventListener("focusout", () => console.log("focusout: элемент внутри формы потерял фокус"));\n\n' +
          '  // document.activeElement показывает текущий элемент с фокусом\n' +
          '  form.addEventListener("focusin", () => {\n' +
          '    console.log("Текущий элемент с фокусом:", document.activeElement.tagName, document.activeElement.name);\n' +
          '  });\n' +
          '  // При клике на поле "Имя": focusin → вывод активного элемента\n' +
          '</script>',
      },
    ],
  },
};
