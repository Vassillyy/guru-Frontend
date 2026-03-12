import { Methods, type IMethod } from '@/entities/method';

export const configUtil: Record<Methods.UTIL, IMethod[]> = {
  [Methods.UTIL]: [
    {
      name: 'structuredClone()',
      syntax: 'structuredClone(value[, options])',
      parameters: [
        {
          name: 'value',
          description: 'Значение, которое нужно глубоко скопировать',
        },
        {
          name: 'options',
          description:
            'Необязательный объект с параметрами клонирования:\n' +
            ' • transfer - массив Transferable объектов (ArrayBuffer, MessagePort, ImageBitmap) для передачи владения без копирования\n' +
            ' • shared - boolean, если true, то SharedArrayBuffer клонируется без копирования (по ссылке)',
        },
      ],
      description:
        'Встроенная функция, возвращает глубокую копию обьекта (value).',
      example:
        'const obj = { a: 1, b: { c: 2 } };\n' +
        'const cloned = structuredClone(obj);\n' +
        'console.log(cloned); // { a: 1, b: { c: 2 } }',
      specification:
        'https://tc39.es/ecma262/multipage/structured-data.html#sec-structuredclone',
      errors:
        'DataCloneError — возникает при клонировании функций или DOM-элементов.',
    },
    {
      name: 'Symbol()',
      syntax: 'Symbol([description])',
      parameters: [
        {
          name: 'description',
          description: 'Строковое описание символа',
        },
      ],
      description:
        'Встроенная функция, позволяющая создавать уникальные символы. Не является конструктором.',
      example:
        "const sym = Symbol('id');\n" + 'console.log(sym); // Symbol(id)',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol-description',
      errors: "TypeError — если вызывается как конструктор с оператором 'new'.",
    },
    {
      name: 'isNaN()',
      syntax: 'isNaN(value)',
      parameters: [
        {
          name: 'value',
          description: 'Значение, которое нужно проверить на NaN',
        },
      ],
      description:
        'Встроенная функция, которая преобразует (value) в число и проверяет является ли он NaN. Возвращает true, если является, и false, если является числом.',
      example:
        "console.log(isNaN('abc')); // true\n" +
        'console.log(isNaN(123)); // false\n' +
        'console.log(isNaN(NaN)); // true\n' +
        "console.log(isNaN('123')); // false",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-isnan-number',
    },
    {
      name: 'isFinite()',
      syntax: 'isFinite(value)',
      parameters: [
        {
          name: 'value',
          description: 'Значение, которое нужно проверить на конечность',
        },
      ],
      description:
        'Встроенная функция, которая преобразует (value) в число и возвращает true, если оно является обычным числом, т.е. не NaN/Infinity/-Infinity, иначе false.',
      example:
        "console.log(isFinite('123')); // true\n" +
        "console.log(isFinite('abc')); // false\n" +
        'console.log(isFinite(Infinity)); // false\n' +
        'console.log(isFinite(42)); // true',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-isfinite-number',
    },
    {
      name: 'parseInt()',
      syntax: 'parseInt(string[, radix])',
      parameters: [
        {
          name: 'string',
          description: 'Строка, которую нужно преобразовать в целое число',
        },
        {
          name: 'radix',
          description:
            'Основание системы счисления от 2 до 36 (по умолчанию 10)',
        },
      ],
      description:
        "Встроенная функция, преобразует (string) в целое число по (radix). Функция 'читает' число из строки. Если в процессе чтения возникает ошибка, возвращает полученное до ошибки число. Вернёт NaN, если не смогла прочитать ни одну цифру.",
      example:
        "console.log(parseInt('123px')); // 123\n" +
        "console.log(parseInt('101', 2)); // 5\n" +
        "console.log(parseInt('0xFF')); // 255\n" +
        "console.log(parseInt('abc')); // NaN",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-parseint-string-radix',
    },
    {
      name: 'parseFloat()',
      syntax: 'parseFloat(string)',
      parameters: [
        {
          name: 'string',
          description:
            'Строка, которую нужно преобразовать в число с плавающей точкой',
        },
      ],
      description:
        "Встроенная функция, преобразует (string) в число с плавающей точкой. Функция 'читает' число из строки. Если в процессе чтения возникает ошибка, возвращает полученное до ошибки число. Вернёт NaN, если не смогла прочитать ни одну цифру.",
      example:
        "console.log(parseFloat('12.34px')); // 12.34\n" +
        "console.log(parseFloat('12.3.4')); // 12.3\n" +
        "console.log(parseFloat('3.14')); // 3.14\n" +
        "console.log(parseFloat('abc')); // NaN",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-parsefloat-string',
    },
    {
      name: 'setTimeout()',
      syntax: 'setTimeout(func[, delay[, ...args]])',
      parameters: [
        {
          name: 'func',
          description: 'Функция, которую нужно вызвать после задержки',
        },
        {
          name: 'delay',
          description:
            'Задержка в миллисекундах перед вызовом функции (по умолчанию 0)',
        },
        {
          name: '...args',
          description:
            'Дополнительные аргументы, которые будут переданы функции',
        },
      ],
      description:
        'Функция, позволяющая вызвать (func) один раз через (delay). Вызов setTimeout возвращает «идентификатор таймера» timerId, который можно использовать для отмены дальнейшего выполнения. Дополнительные аргументы (после delay) будут переданы в (func) при вызове. В браузере устанавливает this=window.',
      example:
        'setTimeout(() => {\n' +
        " console.log('Выполнится через 1 секунду');\n" +
        '}, 1000);',
      specification:
        'https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-setTimeout',
      errors: 'TypeError — если первый аргумент (func) не является функцией.',
    },
    {
      name: 'clearTimeout()',
      syntax: 'clearTimeout(timeoutID)',
      parameters: [
        {
          name: 'timeoutID',
          description: 'Идентификатор таймера, полученный из setTimeout()',
        },
      ],
      description:
        'Функция, которая отменяет таймер, установленный ранее с помощью setTimeout(), предотвращая выполнение запланированной функции. Если передан неверный или уже сработавший (timeoutID), ничего не происходит (ошибки не возникает).',
      example:
        'const timerId = setTimeout(() => {\n' +
        " console.log('Не выполнится');\n" +
        '}, 1000);\n\n' +
        'clearTimeout(timerId);',
      specification:
        'https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-clearTimeout',
      errors:
        'TypeError — если аргумент (timeoutID) не является числовым идентификатором таймера.',
    },
    {
      name: 'setInterval()',
      syntax: 'setInterval(func[, delay[, ...args]])',
      parameters: [
        {
          name: 'func',
          description: 'Функция, которую нужно вызывать повторно',
        },
        {
          name: 'delay',
          description:
            'Интервал в миллисекундах между вызовами функции (по умолчанию 0)',
        },
        {
          name: '...args',
          description:
            'Дополнительные аргументы, которые будут переданы функции',
        },
      ],
      description:
        'Функция, позволяющая вызывать (func) регулярно, повторяя вызов через (delay). Вызов setInterval возвращает «идентификатор таймера» timerId, который можно использовать для отмены дальнейшего выполнения. Дополнительные аргументы (после delay) будут переданы в (func) при каждом вызове. В браузере устанавливает this=window.',
      example:
        'let counter = 0;\n\n' +
        'const intervalId = setInterval(() => {\n' +
        " console.log(\"Выведется 3 раза: 'Tick', 'Tick', 'Tick'\");\n" +
        ' counter++;\n' +
        ' if (counter === 3) {\n' +
        ' clearInterval(intervalId);\n' +
        ' }\n' +
        '}, 1000);',
      specification:
        'https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-setInterval',
      errors: 'TypeError — если первый аргумент (func) не является функцией.',
    },
    {
      name: 'clearInterval()',
      syntax: 'clearInterval(intervalID)',
      parameters: [
        {
          name: 'intervalID',
          description: 'Идентификатор таймера, полученный из setInterval()',
        },
      ],
      description:
        'Функция, которая отменяет повторное выполнение, установленное с помощью setInterval(), предотвращая дальнейшие вызовы функции. Если передан неверный или уже остановленный (intervalID), ничего не происходит (ошибки не возникает).',
      example:
        'let count = 0;\n' +
        'const intervalId = setInterval(() => {\n' +
        " console.log('Выполнится 3 раза');\n" +
        ' count++;\n' +
        ' if (count === 3) {\n' +
        ' clearInterval(intervalId); // Остановка после 3 выполнений\n' +
        ' }\n' +
        '}, 1000);',
      specification:
        'https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-clearInterval',
      errors:
        'TypeError — если аргумент (intervalID) не является числовым идентификатором таймера.',
    },
    {
      name: 'fetch()',
      syntax: 'fetch(url[, options])',
      parameters: [
        {
          name: 'url',
          description: 'URL-адрес для отправки запроса (строка или объект URL)',
        },
        {
          name: 'options',
          description:
            'Необязательный объект с параметрами запроса. Без него выполняется простой GET-запрос.\n' +
            'Свойства options:\n' +
            "• method – HTTP метод, например 'GET', 'POST', 'PUT', 'DELETE', 'PATCH'\n" +
            "• headers – объект с HTTP-заголовками (например, {'Content-Type': 'application/json'})\n" +
            '• body – тело запроса (для POST, PUT, PATCH):\n' +
            '  - строка (например, JSON)\n' +
            '  - объект FormData для form/multipart\n' +
            '  - Blob/BufferSource для бинарных данных\n' +
            '  - URLSearchParams для x-www-form-urlencoded\n' +
            "• mode – режим CORS: 'cors', 'no-cors', 'same-origin'\n" +
            "• credentials – отправка кук: 'same-origin', 'include', 'omit'\n" +
            "• cache – режим кэширования: 'default', 'no-store', 'reload', 'no-cache', 'force-cache', 'only-if-cached'\n" +
            "• redirect – обработка редиректов: 'follow', 'error', 'manual'\n" +
            "• referrer – URL реферера или 'about:client'\n" +
            '• referrerPolicy – политика реферера\n' +
            '• integrity – хэш для проверки целостности\n' +
            '• keepalive – разрешает запросу "пережить" страницу\n' +
            '• signal – объект AbortSignal для отмены запроса\n\n' +
            'Запрещённые HTTP-заголовки:\n' +
            'Accept-Charset, Accept-Encoding, Access-Control-Request-Headers, Access-Control-Request-Method, Connection, Content-Length, Cookie, Cookie2, Date, DNT, Expect, Host, Keep-Alive, Origin, Referer, TE, Trailer, Transfer-Encoding, Upgrade, Via, Proxy-*, Sec-*',
        },
      ],
      description:
        'Встроенная функция для отправки сетевых запросов и получения данных с сервера. Возвращает промис.\n' +
        'Процесс получения ответа происходит в два этапа:\n' +
        '1. Промис выполняется с объектом Response, как только сервер пришлёт заголовки ответа. Можно проверить статус HTTP и заголовки, но без тела ответа.\n' +
        '2. Для получения тела ответа используется дополнительный вызов методов Response (text(), json() и др.).\n' +
        'Промис завершается с ошибкой только при проблемах сети или несуществующем домене. HTTP-статусы 404 и 500 НЕ вызывают ошибку fetch.\n' +
        'Свойства Response:\n' +
        '• status – код статуса HTTP-запроса (например, 200, 404, 500)\n' +
        '• ok – true, если код статуса в диапазоне 200-299\n' +
        '• headers – объект, похожий на Map, содержащий заголовки ответа\n' +
        'Методы Response для получения тела ответа:\n' +
        '• response.text() – возвращает ответ как текст\n' +
        '• response.json() – декодирует ответ в JSON\n' +
        '• response.formData() – возвращает как объект FormData\n' +
        '• response.blob() – возвращает как Blob (бинарные данные)\n' +
        '• response.arrayBuffer() – возвращает как ArrayBuffer\n' +
        '• response.body – ReadableStream для чтения по частям.',
      example:
        "fetch('https:/api.example.com/posts', {\n" +
        "  method: 'POST',\n" +
        "  headers: { 'Content-Type': 'application/json' },\n" +
        "  body: JSON.stringify({ title: 'Post', body: 'Content' })\n" +
        '})\n' +
        ' .then(response => response.json())\n' +
        " .then(data => console.log(data)); // {title: 'Post', body: 'Content'}",
      specification: 'https://fetch.spec.whatwg.org/#fetch-method',
      errors:
        'TypeError — если URL не является валидным URL или если указаны недопустимые параметры запроса.\n' +
        'AbortError — если запрос был отменён через AbortSignal.\n' +
        'Сетевая ошибка — при проблемах сети или недоступности ресурса.',
    },
  ],
};
