import { type ITopic } from '@/entities/topic';

export const configPageLoading: ITopic = {
  value: 'page-loading',
  name: 'Загрузка страницы: события - DOMContentLoaded, load, beforeunload, unload',
  content: {
    introduction:
      'У жизненного цикла HTML-страницы есть три важных события: DOMContentLoaded — браузер полностью загрузил HTML, было построено DOM-дерево, но внешние ресурсы ещё могут быть не загружены; load — браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.); beforeunload/unload — пользователь покидает страницу.',
    sections: [
      {
        title: 'Событие DOMContentLoaded',
        content:
          'Событие DOMContentLoaded срабатывает на объекте document, когда DOM-дерево полностью построено. Внешние ресурсы, такие как картинки и стили, могут быть ещё не загружены.\n' +
          'Назначается только через addEventListener, так как у document нет DOM-свойства onDOMContentLoaded.\n' +
          'Внешние таблицы стилей не блокируют DOM. Но если после стилей есть скрипт, то скрипт дожидается загрузки стилей, а DOMContentLoaded дожидается скрипта.',
        addition:
          'DOMContentLoaded дожидается выполнения всех синхронных скриптов. Скрипты с async и динамически созданные скрипты не блокируют DOMContentLoaded.',
        examples:
          '<link type="text/css" rel="stylesheet" href="style.css">\n' +
          '<script>\n' +
          '  // Этот скрипт выполнится только после загрузки style.css\n' +
          '  console.log("Скрипт после стилей");\n' +
          '</script>\n' +
          '<script>\n' +
          '  document.addEventListener("DOMContentLoaded", () => {\n' +
          '    console.log("DOMContentLoaded — DOM готов");\n' +
          '  });\n' +
          '</script>\n' +
          '<img src="image.jpg">\n' +
          '// Порядок: загрузка стилей → выполнение скриптов → DOMContentLoaded → загрузка картинки',
      },
      {
        title: 'Событие load',
        content:
          'Событие load на объекте window наступает, когда загрузилась вся страница, включая стили, картинки и другие ресурсы. Это событие доступно через свойство onload или addEventListener.',
        addition:
          'В отличие от DOMContentLoaded, window.onload дожидается всех изображений.',
        examples:
          '<script>\n' +
          '  window.onload = function() {\n' +
          "    console.log('Страница загружена');\n" +
          '    // К этому моменту все картинки загружены\n' +
          '  };\n' +
          '</script>\n\n' +
          '<img src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">',
      },
      {
        title: 'Событие unload',
        content:
          'Когда посетитель покидает страницу, на объекте window генерируется событие unload.\n' +
          'Для отправки данных существует метод navigator.sendBeacon(url, data), который посылает данные в фоне, не задерживая переход.',
        addition:
          'sendBeacon отправляет POST-запрос. Размер данных ограничен 64 Кб. Ответ сервера обработать не получится, так как браузер уже покинул страницу.',
        examples:
          '<script>\n' +
          '  window.addEventListener("unload", () => {\n' +
          '    console.log("unload — страница закрыта");\n' +
          '    navigator.sendBeacon("/analytics", JSON.stringify({ time: Date.now() }));\n' +
          '  });\n' +
          '  // При закрытии страницы в консоль выведется "unload — страница закрыта"\n' +
          '  // Данные отправятся на сервер, даже если страница уже закрывается\n' +
          '</script>',
      },
      {
        title: 'Событие beforeunload',
        content:
          'Если посетитель собирается уйти со страницы или закрыть окно, обработчик beforeunload попросит дополнительное подтверждение. Если отменить событие, браузер спросит пользователя, уверен ли он.',
        addition:
          'По историческим причинам возврат непустой строки тоже считался отменой события. Современные браузеры не показывают строку-сообщение — они показывают стандартное системное сообщение.',
        examples:
          '<script>\n' +
          '  window.addEventListener("beforeunload", (event) => {\n' +
          '    console.log("beforeunload — попытка уйти со страницы");\n' +
          '    event.preventDefault();\n' +
          '    // Браузер покажет сообщение: "Вы уверены, что хотите покинуть страницу?"\n' +
          '  });\n' +
          '</script>',
      },
      {
        title: 'Свойство readyState и порядок событий загрузки',
        content:
          'Свойство document.readyState показывает текущее состояние загрузки страницы. Доступно только для чтения.\n' +
          'Значения readyState:\n' +
          '• "loading" — страница загружается\n' +
          '• "interactive" — DOM построен (аналог DOMContentLoaded)\n' +
          '• "complete" — страница и все ресурсы загружены (аналог window.onload)\n' +
          'Событие readystatechange срабатывает при каждом изменении readyState.',
        addition:
          'Типичный порядок событий при загрузке документа:\n' +
          '1. readyState: loading (начальное состояние)\n' +
          '2. readyState: interactive (DOM построен)\n' +
          '3. DOMContentLoaded\n' +
          '4. iframe onload\n' +
          '5. img onload\n' +
          '6. readyState: complete (все ресурсы загружены)\n' +
          '7. window onload\n\n' +
          'readyState становится interactive прямо перед DOMContentLoaded. readyState становится complete одновременно с загрузкой последнего ресурса (но window.onload срабатывает после всех load-обработчиков).',
        examples:
          '<script>\n' +
          '  // Начальное состояние (ещё ничего не загружено)\n' +
          '  console.log(document.readyState); // loading\n\n' +
          '  // Срабатывает при каждом изменении readyState\n' +
          '  document.addEventListener("readystatechange", () => {\n' +
          '    console.log("readyState:", document.readyState);\n' +
          '  });\n\n' +
          '  // DOM построен, но ресурсы ещё грузятся\n' +
          '  document.addEventListener("DOMContentLoaded", () => {\n' +
          '    console.log("DOMContentLoaded");\n' +
          '  });\n\n' +
          '  // Всё загружено (картинки, стили, iframe)\n' +
          '  window.addEventListener("load", () => {\n' +
          '    console.log("window onload");\n' +
          '  });\n' +
          '</script>\n\n' +
          '<iframe src="about:blank" onload="console.log(\'iframe onload\')"></iframe>\n\n' +
          '<img src="https://en.jsx.cx/clipart/train.gif" id="img">\n\n' +
          '<script>\n' +
          '  // Картинка загрузится асинхронно\n' +
          '  document.getElementById("img").onload = () => console.log("img onload");\n' +
          '</script>',
      },
    ],
  },
};
