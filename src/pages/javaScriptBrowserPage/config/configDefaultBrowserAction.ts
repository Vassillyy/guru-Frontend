import { type ITopic } from '@/entities/topic';

export const configDefaultBrowserAction: ITopic = {
  value: 'default-browser-action',
  name: 'Действия браузера по умолчанию',
  content: {
    introduction:
      'Многие события автоматически влекут за собой действие браузера по умолчанию. При обработке события в JavaScript такое действие часто не требуется — его можно отменить.',
    sections: [
      {
        title: 'Отмена действия браузера',
        content:
          'Есть два способа отменить действие браузера:\n' +
          '• Основной способ — использовать метод event.preventDefault()\n' +
          '• Если обработчик назначен через on<событие> (не через addEventListener), можно вернуть false из обработчика\n' +
          'Обычно возвращаемое значение обработчика игнорируется. Единственное исключение — это return false из обработчика, назначенного через on<событие>.',
        addition:
          '• event.preventDefault() работает в любых обработчиках (addEventListener, on<событие>)\n' +
          '• return false работает только при назначении через on<событие>\n' +
          '• return в других случаях (addEventListener) игнорируется и никак не обрабатывается',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <a href="https:/example.com" id="link1">Ссылка с return false (onclick)</a><br>\n' +
          '    <a href="https:/example.com" id="link2">Ссылка с preventDefault (onclick)</a><br>\n' +
          '    <a href="https:/example.com" id="link3">Ссылка с addEventListener</a><br>\n' +
          '    <input type="checkbox" id="checkbox" checked> Чекбокс (preventDefault отменяет изменение)\n\n' +
          '    <script>\n' +
          '      // Способ 1: return false в HTML-атрибуте\n' +
          '      document.getElementById("link1").setAttribute("onclick", "return false");\n\n' +
          '      // Способ 2: event.preventDefault() в HTML-атрибуте\n' +
          '      document.getElementById("link2").setAttribute("onclick", "event.preventDefault()");\n\n' +
          '      // Способ 3: addEventListener с preventDefault\n' +
          '      let link3 = document.getElementById("link3");\n' +
          '      link3.addEventListener("click", (event) => {\n' +
          '        event.preventDefault();\n' +
          '        console.log("Переход отменён через addEventListener");\n' +
          '      });\n\n' +
          '      // preventDefault на чекбоксе (отмена изменения состояния)\n' +
          '      let checkbox = document.getElementById("checkbox");\n' +
          '      checkbox.addEventListener("click", (event) => {\n' +
          '        event.preventDefault();\n' +
          '        console.log("Изменение чекбокса отменено");\n' +
          '      });\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title: 'События, вытекающие из других',
        content:
          'Некоторые события естественным образом вытекают из других. Если отменить первое событие (через preventDefault или return false), то последующие не возникнут.',
        addition:
          'Отмена mousedown предотвращает focus при клике мышью, но клавиатурная навигация (Tab) не затрагивается.',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <input value="Фокус работает" onfocus="this.value=\'\'">\n\n' +
          '    <input onmousedown="return false" onfocus="this.value=\'\'" value="Кликни меня">\n\n' +
          '    <script>\n' +
          '      // Первый input: при клике фокусируется и очищается через onfocus\n' +
          '      // Второй input: mousedown отменён, фокус через клик не сработает\n' +
          '      // Но Tab всё ещё переведёт фокус на второй input\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title: 'Опция passive для обработчика',
        content:
          'Опция passive: true для addEventListener сообщает браузеру, что обработчик не будет вызывать preventDefault(). Это позволяет браузеру немедленно выполнять действие по умолчанию (например, прокрутку) без ожидания завершения обработчика, что повышает плавность интерфейса.',
        addition:
          '• Особенно важно для событий touchmove на мобильных устройствах\n' +
          '• В Chrome и Firefox passive: true включён по умолчанию для touchstart и touchmove\n' +
          '• Если вызвать preventDefault() в passive-обработчике, он будет проигнорирован',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <div id="scrollable" style="height: 100px; overflow: auto; border: 1px solid #ccc;">\n' +
          '      <div style="height: 500px; background: linear-gradient(white, gray);">\n' +
          '        Прокручиваемый контент (на мобильных устройствах)\n' +
          '      </div>\n' +
          '    </div>\n\n' +
          '    <script>\n' +
          '      let div = document.getElementById("scrollable");\n\n' +
          '      // passive: true — браузер не ждёт выполнения обработчика\n' +
          '      div.addEventListener("touchmove", (event) => {\n' +
          '        // предотвращать прокрутку здесь нельзя — браузер уже начал её\n' +
          '        console.log("Прокрутка...");\n' +
          '      }, { passive: true });\n\n' +
          '      // Аналог для ПК: обработчик scroll с passive\n' +
          '      div.addEventListener("wheel", (event) => {\n' +
          '        console.log("Колёсико мыши");\n' +
          '      }, { passive: true });\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title: 'Свойство event.defaultPrevented',
        content:
          'Свойство event.defaultPrevented возвращает true, если действие по умолчанию было предотвращено (через preventDefault), и false, если нет. Это позволяет проверять, был ли уже обработан текущий сценарий выше по цепочке.',
        addition:
          'defaultPrevented — альтернатива stopPropagation() для координации обработчиков без блокировки всплытия',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <button id="btn">Правый клик на кнопке</button>\n' +
          '    <p>Правый клик на тексте</p>\n\n' +
          '    <script>\n' +
          '      let btn = document.getElementById("btn");\n\n' +
          '      btn.oncontextmenu = (event) => {\n' +
          '        event.preventDefault();\n' +
          '        console.log("Меню кнопки (событие отменено)");\n' +
          '      };\n\n' +
          '      document.oncontextmenu = (event) => {\n' +
          '        // Если событие уже отменено на кнопке — ничего не делаем\n' +
          '        if (event.defaultPrevented) return;\n\n' +
          '        event.preventDefault();\n' +
          '        console.log("Меню документа (событие отменено)");\n' +
          '      };\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
    ],
  },
};
