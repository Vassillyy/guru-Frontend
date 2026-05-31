import { type ITopic } from '@/entities/topic';

export const configOnloadOnerror: ITopic = {
  value: 'onload-onerror',
  name: 'Загрузка ресурсов: события - load, error',
  content: {
    introduction:
      'Браузер позволяет отслеживать загрузку сторонних ресурсов. Для этого существуют два события: load — успешная загрузка, и error — во время загрузки произошла ошибка.',
    sections: [
      {
        title: 'Событие load',
        content:
          'Событие load на теге script срабатывает после того, как скрипт был загружен и выполнен. Это позволяет вызвать функцию из загруженного скрипта сразу после его готовности.',
        addition:
          'Обработчик onload отслеживает только сам процесс загрузки.\n' +
          'Большинство ресурсов начинают загружаться только после добавления в документ. Исключение — тег <img>: изображение начинает загружаться сразу при установке атрибута src, даже если ещё не добавлено в DOM.\n' +
          'Для тега <iframe> событие load срабатывает по окончании загрузки как при успехе, так и при ошибке.',
        examples:
          '<script>\n' +
          '  let script = document.createElement("script");\n' +
          '  script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js";\n' +
          '  document.head.append(script);\n' +
          '  script.onload = function() {\n' +
          '    console.log(_.VERSION); // версия библиотеки\n' +
          '  };\n' +
          '</script>',
      },
      {
        title: 'Событие error',
        content:
          'Событие error на теге script срабатывает, если загрузка скрипта провалилась: скрипт не найден (404), сервер недоступен или сетевые проблемы.',
        addition:
          'Обработчик onerror на теге script отслеживает только ошибки загрузки (404, сеть).\n' +
          'Глобальные ошибки выполнения можно поймать только через window.onerror.\n' +
          'Параметры window.onerror:\n' +
          '• message — сообщение об ошибке\n' +
          '• source — URL скрипта\n' +
          '• lineno — номер строки\n' +
          '• colno — номер колонки\n' +
          '• error — объект ошибки\n' +
          'Через onerror на теге script нельзя получить HTTP-статус.',
        examples:
          '<script>\n' +
          '  let script = document.createElement("script");\n' +
          '  script.src = "https://example.com/404.js"; // несуществующий скрипт\n' +
          '  document.head.append(script);\n' +
          '  // onerror сработает из-за ошибки загрузки (404)\n' +
          '  script.onerror = () => console.log("Ошибка загрузки:", script.src);\n' +
          '</script>\n\n' +
          '<script>\n' +
          '  // Глобальный обработчик для ошибок выполнения\n' +
          '  window.onerror = (message, source, lineno, colno, error) => {\n' +
          '    console.log("Ошибка выполнения:", message);\n' +
          '  };\n' +
          '</script>',
      },
      {
        title: 'Ошибка в скрипте с другого источника',
        content:
          'Из-за политики Same Origin Policy (одинакового источника), если в скрипте с другого домена возникает ошибка, браузер не показывает её детали. Это сделано в целях безопасности, чтобы скрипт не мог «выведать» информацию о другом сайте.',
        addition:
          'Чтобы получить полный отчёт об ошибке, нужно выполнить два условия:\n' +
          '1. На теге script — указать атрибут crossorigin.\n' +
          '2. На сервере — настроить CORS-заголовки.\n' +
          'У атрибута crossorigin есть три режима:\n' +
          '• anonymous — браузер отправит запрос без куки и авторизации. Сервер должен ответить с заголовком Access-Control-Allow-Origin: * (или указать конкретный ваш домен).\n' +
          '• use-credentials — браузер будет отправлять куки и авторизацию. Сервер должен ответить с заголовками Access-Control-Allow-Origin: <ваш домен> и Access-Control-Allow-Credentials: true.\n' +
          '• атрибут отсутствует — доступ к деталям ошибки запрещён.\n' +
          'Сам скрипт при этом всё равно загрузится и выполнится. Эти настройки влияют только на уровень доступа к отладочной информации и данным ответа.',
        examples:
          '<script>\n' +
          '  window.onerror = (message, url, line, col, errorObj) => {\n' +
          '    console.log("Ошибка:", message);\n' +
          '    console.log("URL:", url);\n' +
          '    console.log("Строка:", line, "Колонка:", col);\n' +
          '  };\n' +
          '</script>\n\n' +
          '<!-- 1. Без crossorigin: в логах будет только "Script error." -->\n' +
          '<script src="https://cors.javascript.info/article/onload-onerror/crossorigin/error.js"></script>\n\n' +
          '<!-- 2. С crossorigin="anonymous": увидим полный отчёт об ошибке (файл, номер строки, стек) -->\n' +
          '<script crossorigin="anonymous" src="https://cors.javascript.info/article/onload-onerror/crossorigin/error.js"></script>',
      },
    ],
  },
};
