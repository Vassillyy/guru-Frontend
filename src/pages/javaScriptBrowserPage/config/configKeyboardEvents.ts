import { type ITopic } from '@/entities/topic';

export const configKeyboardEvents: ITopic = {
  value: 'keyboard-events',
  name: 'Клавиатура: keydown и keyup',
  content: {
    introduction:
      'События клавиатуры позволяют реагировать на нажатие клавиш. Их следует использовать только для обработки взаимодействия с клавиатурой (горячие клавиши, стрелки).',
    sections: [
      {
        title: 'События: keydown, keyup',
        content:
          'keydown — происходит при нажатии клавиши.\n' +
          'keyup — происходит при отпускании клавиши.\n' +
          'Оба события срабатывают для любых клавиш: букв, цифр, специальных (Shift, Ctrl, Enter, Backspace, стрелки и т.д.).\n' +
          'Исключение — клавиша Fn (на ноутбуках), она работает на уровне OC и не генерирует событий.',
        addition:
          'События клавиатуры всплывают, поэтому можно повесить один обработчик на document.',
        examples:
          '<input id="keyInput" placeholder="Нажми любую клавишу">\n\n' +
          '<script>\n' +
          '  let input = document.getElementById("keyInput");\n\n' +
          '  // keydown срабатывает при нажатии клавиши\n' +
          '  input.addEventListener("keydown", () => {\n' +
          '    console.log("keydown");\n' +
          '  });\n\n' +
          '  // keyup срабатывает при отпускании клавиши\n' +
          '  input.addEventListener("keyup", () => {\n' +
          '    console.log("keyup");\n' +
          '  });\n\n' +
          '  // При нажатии и отпускании любой клавиши:\n' +
          '  // keydown\n' +
          '  // keyup\n' +
          '  // При долгом нажатии: несколько keydown → один keyup\n' +
          '</script>',
      },
      {
        title: 'Свойства: event.code/key',
        content:
          'event.key — символьное значение клавиши (строка). Для буквенных клавиш возвращает сам символ ("z", "Z", "й", "Й" и т.д.). Зависит от раскладки и регистра.\n' +
          'event.code — физический код клавиши, привязанный к её расположению на клавиатуре. Не зависит ни от раскладки, ни от регистра.',
        addition:
          'Регистр в event.code важен: "KeyZ", а не "keyZ".\n' +
          'Для горячих клавиш (Ctrl+S, Ctrl+Z) надёжнее использовать event.code, чтобы комбинация работала независимо от раскладки (но не всегда: например, в немецкой раскладке Y имеет код KeyZ).',
        examples:
          '<input id="keyCodeInput" placeholder="Нажми клавишу">\n\n' +
          '<script>\n' +
          '  let input = document.getElementById("keyCodeInput");\n\n' +
          '  input.addEventListener("keydown", (e) => {\n' +
          '    console.log(`key: "${e.key}" | code: "${e.code}"`);\n' +
          '    // Примеры вывода:\n' +
          '    // Русская раскладка, буква "й" → key: "й", code: "KeyQ"\n' +
          '    // Английская раскладка, "q" → key: "q", code: "KeyQ"\n' +
          '    // Английская с Shift, "Q" → key: "Q", code: "KeyQ"\n' +
          '    // Цифра "5" на основном блоке → key: "5", code: "Digit5"\n' +
          '    // Стрелка вверх → key: "ArrowUp", code: "ArrowUp"\n' +
          '    // Пробел → key: " ", code: "Space"\n' +
          '    // Enter → key: "Enter", code: "Enter"\n' +
          '  });\n' +
          '</script>',
      },
      {
        title: 'Автоповтор',
        content:
          'При долгом нажатии клавиши возникает автоповтор: keydown срабатывает многократно, а keyup — только один раз при отпускании.\n' +
          'Свойство event.repeat равно true для повторных keydown, вызванных автоповтором.',
        addition:
          'Автоповтор отсутствует на мобильных устройствах. Для keyup event.repeat всегда false.',
        examples:
          '<input id="repeatInput" placeholder="Зажми любую букву">\n\n' +
          '<script>\n' +
          '  let input = document.getElementById("repeatInput");\n\n' +
          '  input.addEventListener("keydown", (e) => {\n' +
          '    console.log(e.repeat ? "автоповтор" : "первое нажатие", e.key);\n' +
          '  });\n\n' +
          '  input.addEventListener("keyup", () => {\n' +
          '    console.log("keyup");\n' +
          '  });\n\n' +
          '  // При долгом нажатии на "A":\n' +
          '  // первое нажатие a\n' +
          '  // автоповтор a\n' +
          '  // автоповтор a\n' +
          '  // ...\n' +
          '  // keyup\n' +
          '</script>',
      },
    ],
  },
};
