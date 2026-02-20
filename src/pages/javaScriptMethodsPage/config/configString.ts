import { Methods, type IMethod } from '@/entities/method';

export const configString: Record<Methods.STRING, IMethod[]> = {
  [Methods.STRING]: [
    {
      name: 'toUpperCase()',
      syntax: 'str.toUpperCase()',
      description:
        'Метод объекта String, возвращает новую строку, приведённую в верхний регистр.',
      example:
        "const filename = 'readme.md';\nconsole.log(filename.toUpperCase()); // 'README.MD'\n\nconst currency = 'eur/usd';\nconsole.log(currency.toUpperCase()); // 'EUR/USD'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.touppercase',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'toLowerCase()',
      syntax: 'str.toLowerCase()',
      description:
        'Метод объекта String, возвращает новую строку, приведённую в нижний регистр.',
      example:
        "const config = 'BACKGROUND_COLOR';\nconsole.log(config.toLowerCase()); // 'background_color'\n\nconst domain = 'EXAMPLE.COM';\nconsole.log(domain.toLowerCase()); // 'example.com'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.tolowercase',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'startsWith()',
      syntax: 'str.startsWith(searchString[, position])',
      parameters: [
        {
          name: 'searchString',
          description: 'Подстрока для поиска',
        },
        {
          name: 'position',
          description: 'Индекс с которого начинается поиск',
        },
      ],
      description:
        'Метод объекта String, проверяет, начинается ли строка указанной подстрокой, если да - возвращает true, иначе false.',
      example:
        "const path = '/home/user/documents';\nconsole.log(path.startsWith('/home')); // true\nconsole.log(path.startsWith('user')); // false\nconsole.log(path.startsWith('user', 6)); // true",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.startswith',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'endsWith()',
      syntax: 'str.endsWith(searchString[, position])',
      parameters: [
        {
          name: 'searchString',
          description: 'Подстрока для поиска',
        },
        {
          name: 'position',
          description:
            'Индекс с которого начинается поиск (длина строки, если не указан)',
        },
      ],
      description:
        'Метод объекта String, проверяет, заканчивается ли строка указанной подстрокой, если да - возвращает true, иначе false.',
      example:
        "const filename = 'document.pdf';\nconsole.log(filename.endsWith('.pdf')); // true\nconsole.log(filename.endsWith('.txt')); // false",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.endswith',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'replace()',
      syntax: 'str.replace(pattern, replacement)',
      parameters: [
        {
          name: 'pattern',
          description: 'Подстрока или регулярное выражение для поиска',
        },
        {
          name: 'replacement',
          description: 'Подстрока или функция для замены найденного совпадения',
        },
      ],
      description:
        'Метод объекта String, позволяет заменить подстроку в исходной строке другой подстрокой. Возвращает новую строку.',
      example:
        "const text = 'Удалить пробелы';\nconst result1 = text.replace('пробелы', 'запятые');\nconsole.log(result1); // 'Удалить запятые'\n\nconst price = 'Цена: $100.50';\nconst result2 = price.replace(/\\$/, '€');\nconsole.log(result2); // 'Цена: €100.50'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.replace',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'replaceAll()',
      syntax: 'str.replaceAll(pattern, replacement)',
      parameters: [
        {
          name: 'pattern',
          description:
            "Подстрока или регулярное выражение с флагом 'g' для поиска",
        },
        {
          name: 'replacement',
          description:
            'Подстрока или функция для замены всех найденных совпадений',
        },
      ],
      description:
        'Метод объекта String, позволяет заменить все вхождения подстроки в исходной строке на другую подстроку. Возвращает новую строку.',
      example:
        "const version = 'Node.js v18.17.0';\nconst result1 = version.replace('v18', 'v20');\nconsole.log(result1); // 'Node.js v20.17.0'\n\nconst email = 'user@example.com';\nconst result2 = email.replace(/@.*$/, '@gmail.com');\nconsole.log(result2); // 'user@gmail.com'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.replaceall',
      errors:
        "TypeError — если this не является строкой или если первый аргумент (pattern) является регулярным выражением без флага 'g'.",
    },
    {
      name: 'at()',
      syntax: 'str.at(index)',
      parameters: [
        {
          name: 'index',
          description:
            'Индекс символа (может быть отрицательным - отсчёт с конца)',
        },
      ],
      description:
        'Метод объекта String, возвращает символ по указанному индексу. Если индекс выходит за границы строки, возвращает undefined.',
      example:
        "const filename = 'config.json';\nconsole.log(filename.at(0)); // 'c'\nconsole.log(filename.at(-5)); // 'j'\nconsole.log(filename.at(20)); // undefined",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.at',
      errors: 'TypeError — если this не является строкой или массивом.',
    },
    {
      name: 'charAt()',
      syntax: 'str.charAt(index)',
      parameters: [
        {
          name: 'index',
          description: 'Индекс символа (от 0 до length-1)',
        },
      ],
      description:
        'Метод объекта String, возвращает символ по указанному индексу. Если индекс выходит за границы строки - возвращает пустую строку.',
      example:
        "const domain = 'example.com';\nconsole.log(domain.charAt(0)); // 'e'\nconsole.log(domain.charAt(7)); // '.'\nconsole.log(domain.charAt(20)); // ''",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.charat',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'indexOf()',
      syntax: 'str.indexOf(searchValue[, startIndex])',
      parameters: [
        {
          name: 'searchValue',
          description: 'Подстрока для поиска',
        },
        {
          name: 'startIndex',
          description: 'Индекс начала поиска',
        },
      ],
      description:
        'Метод объекта String, выполняет поиск подстроки в исходной строке. Метод возвращает индекс первого совпадения или -1, если подстрока не найдена.',
      example:
        "const url = 'https:/site.com';\nconsole.log(url.indexOf(':/')); // 5\nconsole.log(url.indexOf('site')); // 7\nconsole.log(url.indexOf('ftp')); // -1",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.indexof',
      errors: 'TypeError — если this не является строкой или массивом.',
    },
    {
      name: 'lastIndexOf()',
      syntax: 'str.lastIndexOf(searchValue[, fromIndex])',
      parameters: [
        {
          name: 'searchValue',
          description: 'Подстрока для поиска',
        },
        {
          name: 'fromIndex',
          description: 'Индекс начала поиска в обратном направлении',
        },
      ],
      description:
        'Метод объекта String, выполняет поиск подстроки в исходной строке с конца. Метод возвращает индекс последнего совпадения или -1, если подстрока не найдена.',
      example:
        "const path = '/home/user/docs';\nconsole.log(path.lastIndexOf('/')); // 11\nconsole.log(path.lastIndexOf('docs')); // 12\nconsole.log(path.lastIndexOf('user', 8)); // 6",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.lastindexof',
      errors: 'TypeError — если this не является строкой или массивом.',
    },
    {
      name: 'includes()',
      syntax: 'str.includes(searchString[, position])',
      parameters: [
        {
          name: 'searchString',
          description: 'Подстрока для поиска',
        },
        {
          name: 'position',
          description: 'Индекс начала поиска',
        },
      ],
      description:
        'Метод объекта String, проверяет, содержит ли строка указанную подстроку. Возвращает true если содержит, иначе false.',
      example:
        "const file = 'document.pdf';\nconsole.log(file.includes('.pdf')); // true\nconsole.log(file.includes('.txt')); // false\nconsole.log(file.includes('doc')); // true",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.includes',
      errors: 'TypeError — если this не является строкой или массивом.',
    },
    {
      name: 'slice()',
      syntax: 'str.slice([start[, end]])',
      parameters: [
        {
          name: 'start',
          description: 'Индекс начала подстроки (может быть отрицательным)',
        },
        {
          name: 'end',
          description:
            'Индекс конца подстроки (не включая, может быть отрицательным)',
        },
      ],
      description:
        'Метод объекта String, возвращает подстроку от индекса, указанного в первом аргументе до индекса, указанного во втором аргументе. Если второй аргумент отсутствует, метод возвращает символы от указанного индекса и до конца строки. Если аргументы не переданы, то возвращает копию строки. Поддерживает отрицательные индексы (отсчёт с конца строки).',
      example:
        "const filename = 'document.pdf';\nconsole.log(filename.slice(0, -4)); // 'document'\nconsole.log(filename.slice(-4)); // '.pdf'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.slice',
      errors: 'TypeError — если this не является строкой или массивом.',
    },
    {
      name: 'substring()',
      syntax: 'str.substring(start[, end])',
      parameters: [
        {
          name: 'start',
          description: 'Индекс начала подстроки',
        },
        {
          name: 'end',
          description: 'Индекс конца подстроки (не включая)',
        },
      ],
      description:
        'Метод объекта String, возвращает подстроку от индекса, указанного в первом аргументе до индекса, указанного во втором аргументе. Если второй аргумент отсутствует, метод возвращает символы от указанного индекса и до конца строки. Если значение первого аргумента больше второго, то они автоматически меняются местами. Отрицательные значения интерпретируются как 0.',
      example:
        "const filename = 'image.png';\nconsole.log(filename.substring(0, 5)); // 'image'\nconsole.log(filename.substring(5)); // '.png'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.substring',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'codePointAt()',
      syntax: 'str.codePointAt(index)',
      parameters: [
        {
          name: 'index',
          description: 'Индекс символа, код которого нужно получить',
        },
      ],
      description:
        'Метод объекта String, возвращает код символа (Unicode) по указанному индексу. Возвращает целое число от 0 до 1114111 (0x10FFFF) или undefined, если индекс выходит за границы строки. Корректно обрабатывает суррогатные пары.',
      example:
        "const emoji = '🚀火箭';\nconsole.log(emoji.codePointAt(0)); // 128640\nconsole.log(emoji.codePointAt(2)); // 28779\nconsole.log(emoji.codePointAt(10)); // undefined",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.codepointat',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'localeCompare()',
      syntax: 'str.localeCompare(compareString[, locales[, options]])',
      parameters: [
        {
          name: 'compareString',
          description: 'Строка для сравнения с исходной строкой',
        },
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US')",
        },
        {
          name: 'options',
          description:
            "Объект с настройками сравнения:\n • sensitivity: 'base' — различает только базовые буквы (a ≠ b), 'accent' — различает диакритики (a ≠ á), 'case' — различает регистр (a ≠ A), 'variant' — различает всё (по умолчанию)\n • ignorePunctuation: true/false — игнорировать знаки пунктуации\n • numeric: true/false — числовое сравнение ('2' > '10' при true)\n • caseFirst: 'upper' — заглавные буквы первыми, 'lower' — строчные первыми, 'false' — порядок локали\n • usage: 'sort' (по умолчанию) или 'search' — цель сравнения (поиск или сортировка)",
        },
      ],
      description:
        'Метод объекта String, сравнивает две строки с учётом правил языка. Возвращает число:\n • отрицательное, если исходная строка меньше указанной строки;\n • положительное, если больше;\n • 0, если равны.',
      example:
        "const result1 = 'café'.localeCompare('cafe');\nconsole.log(result1); // 1\n\nconst result2 = '10'.localeCompare('2', undefined, {\n  numeric: true,\n});\nconsole.log(result2); // 1\n\nconst result3 = 'résumé'.localeCompare('resume', 'fr', {\n  sensitivity: 'base'\n});\nconsole.log(result3); // 0\n\nconst result4 = 'ä'.localeCompare('z', 'de');\nconsole.log(result4); // -1",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.localecompare',
      errors:
        'TypeError — если this не является строкой.\nRangeError — если аргумент (locales) содержит недопустимые значения языковых тегов.',
    },
    {
      name: 'trim()',
      syntax: 'str.trim()',
      description:
        'Метод объекта String, возвращает новую строку на основе исходной строки, удаляя все пробельные символы (пробелы, табуляции, неразрывные пробелы) с её начала и конца.',
      example:
        "const input = '   user@example.com   ';\nconst cleaned = input.trim();\nconsole.log(cleaned); // 'user@example.com'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trim',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'repeat()',
      syntax: 'str.repeat(count)',
      parameters: [
        {
          name: 'count',
          description: 'Количество повторений строки (целое число от 0)',
        },
      ],
      description:
        'Метод объекта String, возвращает новую строку, состоящую из повторений исходной строки заданное количество раз. Если аргумент равен 0, возвращает пустую строку.',
      example:
        "const separator = '---';\nconsole.log(separator.repeat(3)); // '------------'\n\nconst loading = '.';\nconsole.log(loading.repeat(5)); // '.....'\n\nconst pattern = 'abc';\nconsole.log(pattern.repeat(2)); // 'abcabc'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.repeat',
      errors:
        'TypeError — если this не является строкой.\nRangeError — если аргумент (count) отрицательный или превышает максимально допустимое значение.',
    },
    {
      name: 'concat()',
      syntax: 'str.concat(...strings)',
      parameters: [
        {
          name: '...strings',
          description:
            'Одна или несколько строк для объединения с исходной строкой',
        },
      ],
      description:
        'Метод объекта String возвращает новую строку, в которую копирует содержимое из исходной строки и аргументов.',
      example:
        "const firstName = 'John';\nconst lastName = 'Doe';\nconst fullName = firstName.concat(' ', lastName);\nconsole.log(fullName); // 'John Doe'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.concat',
      errors: 'TypeError — если this не является строкой или массивом.',
    },
    {
      name: 'split()',
      syntax: 'str.split([separator[, limit]])',
      parameters: [
        {
          name: 'separator',
          description:
            'Разделитель для разбиения строки (строка или регулярное выражение)',
        },
        {
          name: 'limit',
          description: 'Ограничение количества элементов в результате',
        },
      ],
      description:
        'Метод объекта String, разбивает строку на массив по указанному разделителю. Если значение второго аргумента меньше длинны строки, то остаток строки будет отброшен.',
      example:
        "const date = '2024-12-25';\nconst parts = date.split('-');\nconsole.log(parts); // ['2024', '12', '25']",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.split',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'String.fromCodePoint()',
      syntax: 'String.fromCodePoint(...codePoints)',
      parameters: [
        {
          name: '...codePoints',
          description:
            'Один или несколько кодов Unicode для преобразования в символы',
        },
      ],
      description:
        'Статический метод объекта String, создаёт символ по указанному коду.',
      example:
        "const charA = String.fromCodePoint(65);\nconsole.log(charA); // 'A'\n\nconst rocket = String.fromCodePoint(128640);\nconsole.log(rocket); // '🚀'\n\nconst combined = String.fromCodePoint(72, 105, 33);\nconsole.log(combined); // 'Hi!'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.fromcodepoint',
    },
  ],
};
