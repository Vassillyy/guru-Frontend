import { type ITopic } from '@/entities/topic';

export const configEventsChangeInput: ITopic = {
  value: 'events-change-input',
  name: 'События: change, input, cut, copy, paste',
  content: {
    introduction:
      'События change и input срабатывают при изменении содержимого полей формы. События cut, copy и paste связаны с работой буфера обмена (вырезание, копирование, вставка).',
    sections: [
      {
        title: 'Событие change',
        content:
          'Событие change срабатывает по окончании изменения элемента. Для текстовых <input> это означает, что событие происходит при потере фокуса.',
        addition:
          'Для select, input type=checkbox и input type=radio событие change запускается сразу после изменения значения.',
        examples:
          '<input type="text" id="textInput" placeholder="Введите текст и кликните вне поля">\n' +
          '<select id="selectInput">\n' +
          '  <option value="">Выберите опцию</option>\n' +
          '  <option value="1">Опция 1</option>\n' +
          '  <option value="2">Опция 2</option>\n' +
          '</select>\n' +
          '<input type="checkbox" id="checkInput"> Чекбокс\n\n' +
          '<script>\n' +
          '  const text = document.getElementById("textInput");\n' +
          '  const select = document.getElementById("selectInput");\n' +
          '  const check = document.getElementById("checkInput");\n\n' +
          '  text.onchange = () => console.log(`change (text): ${text.value}`);\n' +
          '  select.onchange = () => console.log(`change (select): ${select.value}`);\n' +
          '  check.onchange = () => console.log(`change (checkbox): ${check.checked}`);\n' +
          '  // При вводе текста и клике вне поля: change (text): ...\n' +
          '  // При выборе опции из select: change (select): ...\n' +
          '  // При клике на чекбокс: change (checkbox): true/false\n' +
          '</script>',
      },
      {
        title: 'Событие input',
        content:
          'Событие input срабатывает каждый раз при изменении значения элемента. В отличие от событий клавиатуры, оно работает при любых изменениях: вставка мышью, распознавание речи при диктовке текста и т.д.',
        addition:
          '• Событие input — лучший выбор для обработки каждого изменения в <input>.\n' +
          '• Событие не происходит при нажатии клавиш, не меняющих значение (например, стрелки влево/вправо).\n' +
          '• Нельзя предотвратить событие через event.preventDefault() — оно происходит уже после изменения значения.',
        examples:
          '<input type="text" id="textInput" placeholder="Начните печатать">\n\n' +
          '<script>\n' +
          '  const input = document.getElementById("textInput");\n\n' +
          '  input.oninput = () => console.log(`input: ${input.value}`);\n' +
          '  // При каждом вводе символа: input: текст\n' +
          '  // При вставке через Ctrl+V: input: вставленный текст\n' +
          '</script>',
      },
      {
        title: 'События: cut, copy, paste',
        content:
          'События cut, copy, paste происходят при вырезании, копировании и вставке данных соответственно. Они относятся к классу ClipboardEvent и обеспечивают доступ к буферу обмена через event.clipboardData.',
        addition:
          'Можно предотвратить действие по умолчанию через event.preventDefault().\n' +
          'Буфер обмена работает глобально (на уровне ОС). Большинство браузеров разрешают доступ к нему только в рамках действий пользователя (например, в onclick).\n' +
          'Генерировать «пользовательские» события буфера обмена через dispatchEvent нельзя во всех браузерах, кроме Firefox.',
        examples:
          '<input type="text" id="clipInput" value="Попробуй вырезать, скопировать или вставить текст">\n\n' +
          '<script>\n' +
          '  const input = document.getElementById("clipInput");\n\n' +
          '  input.oncut = () => console.log("cut");\n' +
          '  input.oncopy = () => console.log("copy");\n' +
          '  input.onpaste = () => console.log("paste");\n' +
          '  // При вырезании: cut\n' +
          '  // При копировании: copy\n' +
          '  // При вставке: paste\n' +
          '</script>',
      },
    ],
  },
};
