import { Methods, type IMethod } from '@/entities/method';

export const configString: Record<Methods.STRING, IMethod[]> = {
  [Methods.STRING]: [
    {
      name: 'toUpperCase()',
      syntax: 'str.toUpperCase()',
      description:
        'Метод объекта String, возвращает копию исходной строки, приведённую в верхний регистр.',
      example:
        "const filename = 'readme.md';\n" +
        "console.log(filename.toUpperCase()); // 'README.MD'\n\n" +
        "const currency = 'eur/usd';\n" +
        "console.log(currency.toUpperCase()); // 'EUR/USD'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.touppercase',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'toLowerCase()',
      syntax: 'str.toLowerCase()',
      description:
        'Метод объекта String, возвращает копию исходной строки, приведённую в нижний регистр.',
      example:
        "const config = 'BACKGROUND_COLOR';\n" +
        "console.log(config.toLowerCase()); // 'background_color'\n\n" +
        "const domain = 'EXAMPLE.COM';\n" +
        "console.log(domain.toLowerCase()); // 'example.com'",
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
          description: 'Индекс с которого начинается поиск (по умолчанию 0)',
        },
      ],
      description:
        'Метод объекта String, проверяет, начинается ли исходная строка (searchString), начиная с (position), если да - возвращает true, иначе false.',
      example:
        "const path = '/home/user/documents';\n" +
        "console.log(path.startsWith('/home')); // true\n" +
        "console.log(path.startsWith('user')); // false\n" +
        "console.log(path.startsWith('user', 6)); // true",
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
            'Индекс, до которого выполняется поиск (по умолчанию — длина строки)',
        },
      ],
      description:
        'Метод объекта String, проверяет, заканчивается ли исходная строка (searchString), начиная с (position), если да - возвращает true, иначе false.',
      example:
        "const filename = 'document.pdf';\n" +
        "console.log(filename.endsWith('.pdf')); // true\n" +
        "console.log(filename.endsWith('.txt')); // false",
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
          description:
            'Строка или регулярное выражение. Если строка — заменяет только первое вхождение. Если RegExp с флагом /g — заменяет все вхождения.',
        },
        {
          name: 'replacement',
          description:
            "Строка или функция. Строка может содержать спецпоследовательности ($&, $1..$9, $`, $', $$). Функция вызывается для каждого совпадения.",
        },
      ],
      description:
        'Метод объекта String, возвращает новую строку с заменёнными совпадениями (pattern) на (replacement).',
      example:
        "const text = 'Удалить пробелы';\n" +
        "const result1 = text.replace('пробелы', 'запятые');\n" +
        "console.log(result1); // 'Удалить запятые'\n\n" +
        '// Замена всех вхождений с флагом g\n' +
        "const str = 'a1b2c3';\n" +
        "console.log(str.replace(/\\d/g, '#')); // 'a#b#c#'\n\n" +
        '// Использование спецсимволов в replacement\n' +
        "console.log('Hello'.replace(/l/g, '$&$&')); // 'Hellllo'\n\n" +
        '// Функция в качестве replacement\n' +
        "const str = 'a1b2c3';\n" +
        'const result = str.replace(/\\d/g, match => parseInt(match) * 2);\n' +
        "console.log(result); // 'a2b4c6'",
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
          description: 'Строка или регулярное выражение с флагом /g.',
        },
        {
          name: 'replacement',
          description:
            "Строка или функция для замены всех найденных совпадений. Строка может содержать спецпоследовательности ($&, $1..$9, $`, $', $$).",
        },
      ],
      description:
        'Метод объекта String, возвращает новую строку, заменяя все вхождения (pattern) на (replacement).',
      example:
        "const version = 'Node.js v18.17.0';\n" +
        "const res1 = version.replaceAll('v18', 'v20');\n" +
        "console.log(res1); // 'Node.js v20.17.0'\n\n" +
        "const email = 'user@example.com';\n" +
        "const res2 = email.replaceAll(/\\./g, '-');\n" +
        "console.log(res2); // 'user@example-com'\n\n" +
        '// Замена всех цифр\n' +
        "const str = 'a1b2c3';\n" +
        "const res3 = str.replaceAll(/\\d/g, '#');\n" +
        "console.log(res3); // 'a#b#c#'\n\n" +
        '// Функция в качестве replacement\n' +
        "const res4 = 'a1b2c3'.replaceAll(/\\d/g, match => parseInt(match) * 2);\n" +
        "console.log(res4); // 'a2b4c6'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.replaceall',
      errors:
        "TypeError — если this не является строкой или если (pattern) является регулярным выражением без флага 'g'.",
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
        'Метод объекта String, возвращает символ по (index). Если индекс выходит за границы строки, возвращает undefined.',
      example:
        "const filename = 'config.json';\n" +
        "console.log(filename.at(0)); // 'c'\n" +
        "console.log(filename.at(-5)); // 'j'\n" +
        'console.log(filename.at(20)); // undefined',
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
          description: 'Индекс символа',
        },
      ],
      description:
        'Метод объекта String, возвращает символ по (index). Если индекс выходит за границы строки - возвращает пустую строку.',
      example:
        "const domain = 'example.com';\n" +
        "console.log(domain.charAt(0)); // 'e'\n" +
        "console.log(domain.charAt(7)); // '.'\n" +
        "console.log(domain.charAt(20)); // ''",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.charat',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'charCodeAt()',
      syntax: 'str.charCodeAt(index)',
      parameters: [
        {
          name: 'index',
          description: 'Индекс символа, код которого нужно получить',
        },
      ],
      description:
        'Метод объекта String, возвращает код символа (UTF-16) по (index). Возвращает целое число от 0 до 65535 или NaN, если (index) выходит за границы исходной строки.',
      example:
        "const str = 'ABC';\n" +
        'console.log(str.charCodeAt(0)); // 65\n' +
        'console.log(str.charCodeAt(1)); // 66\n' +
        'console.log(str.charCodeAt(10)); // NaN',
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.charcodeat',
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
          description: 'Индекс начала поиска (по умолчанию 0)',
        },
      ],
      description:
        'Метод объекта String, выполняет поиск (searchValue) в исходной строке, начиная с (startIndex). Метод возвращает индекс первого совпадения или -1, если (searchValue) не найдена.',
      example:
        "const url = 'https:/site.com';\n" +
        "console.log(url.indexOf(':/')); // 5\n" +
        "console.log(url.indexOf('site')); // 7\n" +
        "console.log(url.indexOf('ftp')); // -1",
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
          description:
            'Индекс начала поиска в обратном направлении (по умолчанию равен длине строки)',
        },
      ],
      description:
        'Метод объекта String, выполняет поиск (searchValue) в исходной строке с её конца. Метод возвращает индекс первого совпадения или -1, если подстрока не найдена.',
      example:
        "const path = '/home/user/docs';\n" +
        "console.log(path.lastIndexOf('/')); // 11\n" +
        "console.log(path.lastIndexOf('docs')); // 12\n" +
        "console.log(path.lastIndexOf('user', 8)); // 6",
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
          description: 'Индекс начала поиска (по умолчанию 0)',
        },
      ],
      description:
        'Метод объекта String, проверяет, содержит ли исходная строка (searchString), начиная с (position). Возвращает true если содержит, иначе false.',
      example:
        "const file = 'document.pdf';\n" +
        "console.log(file.includes('.pdf')); // true\n" +
        "console.log(file.includes('.txt')); // false\n" +
        "console.log(file.includes('doc')); // true",
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
        'Метод объекта String, возвращает новую строку, содержащую символы исходной строки:\n' +
        '• С двумя аргументами: символы от (start) до (end);\n' +
        '• С одним аргументом: символы от (start) до конца строки;\n' +
        '• Без аргументов: полную копию исходной строки.',
      example:
        "const filename = 'document.pdf';\n" +
        "console.log(filename.slice(0, -4)); // 'document'\n" +
        "console.log(filename.slice(-4)); // '.pdf'",
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
        'Метод объекта String, возвращает новую строку, содержащую символы исходной строки:\n' +
        '• С двумя аргументами: символы от (start) до (end), аргументы автоматически меняются местами, если (start) > (end);\n' +
        '• С одним аргументом: символы от (start) до конца строки;\n' +
        '• Без аргументов: полную копию исходной строки.',
      example:
        "const filename = 'image.png';\n" +
        "console.log(filename.substring(0, 5)); // 'image'\n" +
        "console.log(filename.substring(5)); // '.png'",
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
        'Метод объекта String, возвращает код символа (Unicode) по (index). Возвращает целое число от 0 до 1114111 (0x10FFFF) или undefined, если (index) выходит за границы исходной строки. Корректно обрабатывает суррогатные пары.',
      example:
        "const emoji = '🚀火箭';\n" +
        'console.log(emoji.codePointAt(0)); // 128640\n' +
        'console.log(emoji.codePointAt(2)); // 28779\n' +
        'console.log(emoji.codePointAt(10)); // undefined',
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
            'Объект с настройками сравнения:\n' +
            " • sensitivity: 'base' — различает только базовые буквы (a ≠ b), 'accent' — различает диакритики (a ≠ á), 'case' — различает регистр (a ≠ A), 'variant' — различает всё (по умолчанию)\n" +
            ' • ignorePunctuation: true/false — игнорировать знаки пунктуации\n' +
            " • numeric: true/false — числовое сравнение ('2' > '10' при true)\n" +
            " • caseFirst: 'upper' — заглавные буквы первыми, 'lower' — строчные первыми, 'false' — порядок локали\n" +
            " • usage: 'sort' (по умолчанию) или 'search' — цель сравнения (поиск или сортировка)",
        },
      ],
      description:
        'Метод объекта String, сравнивает исходную строку со (compareString) с учётом правил языка. Возвращает число:\n' +
        ' • отрицательное, если исходная строка меньше (compareString);\n' +
        ' • положительное, если больше (compareString);\n' +
        ' • 0, если равны.',
      example:
        "const result1 = 'café'.localeCompare('cafe');\n" +
        'console.log(result1); // 1\n\n' +
        "const result2 = '10'.localeCompare('2', undefined, {\n" +
        '  numeric: true,\n' +
        '});\n' +
        'console.log(result2); // 1\n\n' +
        "const result3 = 'résumé'.localeCompare('resume', 'fr', {\n" +
        "  sensitivity: 'base'\n" +
        '});\n' +
        'console.log(result3); // 0\n\n' +
        "const result4 = 'ä'.localeCompare('z', 'de');\n" +
        'console.log(result4); // -1',
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.localecompare',
      errors:
        'TypeError — если this не является строкой.\n' +
        'RangeError — если (locales) содержит недопустимые значения языковых тегов.',
    },
    {
      name: 'toLocaleLowerCase()',
      syntax: 'str.toLocaleLowerCase([locale])',
      parameters: [
        {
          name: 'locale',
          description:
            "Строка или массив строк с кодом локали ('tr', 'az' и другие)",
        },
      ],
      description:
        'Метод объекта String, возвращает строку в нижнем регистре с учётом правил (locale).',
      example:
        "const str = 'İstanbul';\n" +
        "console.log(str.toLocaleLowerCase('tr')); // 'istanbul'\n" +
        "console.log(str.toLocaleLowerCase('en')); // 'i̇stanbul'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.tolocalelowercase',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'toLocaleUpperCase()',
      syntax: 'str.toLocaleUpperCase([locale])',
      parameters: [
        {
          name: 'locale',
          description:
            "Строка или массив строк с кодом локали ('tr', 'az' и другие)",
        },
      ],
      description:
        'Метод объекта String, возвращает строку в верхнем регистре с учётом правил (locale).',
      example:
        "const str = 'istanbul';\n" +
        "console.log(str.toLocaleUpperCase('tr')); // 'İSTANBUL'\n" +
        "console.log(str.toLocaleUpperCase('en')); // 'ISTANBUL'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.tolocaleuppercase',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'trim()',
      syntax: 'str.trim()',
      description:
        'Метод объекта String, возвращает новую строку на основе исходной строки, удаляя все пробельные символы (пробелы, табуляции, неразрывные пробелы) с её начала и конца.',
      example:
        "const input = '   user@example.com   ';\n" +
        'const cleaned = input.trim();\n' +
        "console.log(cleaned); // 'user@example.com'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trim',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'trimStart()',
      syntax: 'str.trimStart()',
      description:
        'Метод объекта String, возвращает новую строку с удалёнными пробельными символами в начале исходной строки.',
      example:
        "const str = '   Hello World!   ';\n" +
        "console.log(str.trimStart()); // 'Hello World!   '",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trimstart',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'trimEnd()',
      syntax: 'str.trimEnd()',
      description:
        'Метод объекта String, возвращает новую строку с удалёнными пробельными символами в конце исходной строки.',
      example:
        "const str = '   Hello World!   ';\n" +
        "console.log(str.trimEnd()); // '   Hello World!'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trimend',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'padStart()',
      syntax: 'str.padStart(targetLength[, padString])',
      parameters: [
        {
          name: 'targetLength',
          description: 'Целевая длина строки после дополнения',
        },
        {
          name: 'padString',
          description: 'Строка для дополнения (по умолчанию пробел)',
        },
      ],
      description:
        'Метод объекта String, возвращает новую строку, дополняя исходную строку символами (padString) слева до достижения (targetLength).',
      example:
        "const code = '42';\n" +
        "console.log(code.padStart(5, '0')); // '00042'\n" +
        "console.log(code.padStart(5)); // '   42'\n" +
        "console.log('abc'.padStart(10, '123')); // '1231231abc'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.padstart',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'padEnd()',
      syntax: 'str.padEnd(targetLength[, padString])',
      parameters: [
        {
          name: 'targetLength',
          description: 'Целевая длина строки после дополнения',
        },
        {
          name: 'padString',
          description: 'Строка для дополнения (по умолчанию пробел)',
        },
      ],
      description:
        'Метод объекта String, возвращает новую строку, дополняя исходную строку символами (padString) справа до достижения (targetLength).',
      example:
        "const code = '42';\n" +
        "console.log(code.padEnd(5, '0')); // '42000'\n" +
        "console.log(code.padEnd(5)); // '42   '\n" +
        "console.log('abc'.padEnd(10, '123')); // 'abc1231231'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.padend',
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
        'Метод объекта String, возвращает новую строку, представляющую собой исходную строку, повторённую (count) раз. Если (count) равен 0, возвращает пустую строку.',
      example:
        "const separator = '---';\n" +
        "console.log(separator.repeat(3)); // '------------'\n\n" +
        "const loading = '.';\n" +
        "console.log(loading.repeat(5)); // '.....'\n\n" +
        "const pattern = 'abc';\n" +
        "console.log(pattern.repeat(2)); // 'abcabc'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.repeat',
      errors:
        'TypeError — если this не является строкой.\n' +
        'RangeError — если (count) отрицательный или превышает максимально допустимое значение.',
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
        'Метод объекта String, возвращает новую строку, в которую копирует содержимое из исходной строки и (...strings).',
      example:
        "const firstName = 'John';\n" +
        "const lastName = 'Doe';\n" +
        "const fullName = firstName.concat(' ', lastName);\n" +
        "console.log(fullName); // 'John Doe'",
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
        'Метод объекта String, разбивает исходную строку на массив по (separator). (limit) отвечает за ограничение количества элементов в массиве, если их больше чем указано, то остаток будет отброшен.',
      example:
        "const date = '2024-12-25';\n" +
        "const parts = date.split('-');\n" +
        "console.log(parts); // ['2024', '12', '25']",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.split',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'isWellFormed()',
      syntax: 'str.isWellFormed()',
      description:
        'Метод объекта String, проверяет, является ли исходная строка корректной UTF-16 (не содержит одиночных суррогатов). Возвращает true, если все суррогаты образуют корректные пары или их нет, иначе false.',
      example:
        "const str = 'Hello';\n" +
        'console.log(str.isWellFormed()); // true\n' +
        "const invalid = '\\uD800';\n" +
        'console.log(invalid.isWellFormed()); // false',
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.iswellformed',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'toWellFormed()',
      syntax: 'str.toWellFormed()',
      description:
        'Метод объекта String, возвращает новую строку, заменяя все одиночные суррогаты в исходной строке на символ замены U+FFFD (�).',
      example:
        "const valid = 'Hello 😀';\n" +
        "console.log(valid.toWellFormed()); // 'Hello 😀'\n\n" +
        "const invalid = '\\uD800';\n" +
        "console.log(invalid.toWellFormed()); // '�'\n\n" +
        "const mixed = '\\uD800Hello\\uDC00';\n" +
        "console.log(mixed.toWellFormed()); // '�Hello�'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.towellformed',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'normalize()',
      syntax: 'str.normalize([form])',
      parameters: [
        {
          name: 'form',
          description: "Форма нормализации (по умолчанию 'NFC')",
        },
      ],
      description: 'Метод объекта String, возвращает строку в (form) Unicode.',
      example:
        "const str = 'café';\n" +
        "const str2 = 'cafe\\u0301';\n" +
        'console.log(str === str2); // false\n' +
        'console.log(str === str2.normalize()); // true',
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.normalize',
      errors:
        'TypeError — если this не является строкой.\n' +
        "RangeError — если (form) не 'NFC', 'NFD', 'NFKC' или 'NFKD'",
    },
    {
      name: 'match()',
      syntax: 'str.match(regexp)',
      parameters: [
        {
          name: 'regexp',
          description: 'Регулярное выражение для поиска совпадений',
        },
      ],
      description:
        'Метод объекта String, возвращает массив совпадений при поиске по (regexp). Без флага /g возвращает первый результат с группами захвата. С флагом /g возвращает массив всех совпадений.',
      example:
        "const str = 'The quick';\n" +
        "console.log(str.match(/[aeiou]/g)); // ['e', 'u', 'i']\n" +
        'console.log(str.match(/xyz/g)); // null\n\n' +
        'const result = str.match(/quick/);\n' +
        "console.log(result); // ['quick']\n" +
        'console.log(result.index);  // 4\n' +
        "console.log(result.input);  // 'The quick'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.match',
      errors: 'TypeError — если this не является строкой.',
    },
    {
      name: 'matchAll()',
      syntax: 'str.matchAll(regexp)',
      parameters: [
        {
          name: 'regexp',
          description: 'Регулярное выражение с флагом /g',
        },
      ],
      description:
        'Метод объекта String, возвращает итератор по всем совпадениям регулярного выражения с флагом /g, включая группы захвата.',
      example:
        "const str = 'The quick';\n" +
        'const matches = [...str.matchAll(/[aeiou]/g)];\n' +
        "console.log(matches[0]); // ['e']\n" +
        'console.log(matches[0].index); // 2\n' +
        "console.log(matches[0].input); // 'The quick'\n\n" +
        "const str2 = 'test1 test2';\n" +
        'const matches2 = [...str2.matchAll(/test(\\d)/g)];\n' +
        "console.log(matches2[0]); // ['test1', '1']\n" +
        'console.log(matches2[0].index); // 0\n' +
        "console.log(matches2[0].input); // 'test1 test2'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.matchall',
      errors:
        'TypeError — если this не является строкой или regexp не имеет флага /g.',
    },
    {
      name: 'search()',
      syntax: 'str.search(regexp)',
      parameters: [
        {
          name: 'regexp',
          description: 'Регулярное выражение для поиска',
        },
      ],
      description:
        'Метод объекта String, возвращает индекс первого совпадения с (regexp) или -1, если совпадение не найдено.  Флаг /g в регулярном выражении игнорируется.',
      example:
        "const str = 'The quick brown fox';\n" +
        'console.log(str.search(/quick/)); // 4\n' +
        'console.log(str.search(/brown/)); // 10\n' +
        'console.log(str.search(/xyz/)); // -1',
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.search',
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
        'Статический метод объекта String, создаёт символ по (...codePoints).',
      example:
        'const charA = String.fromCodePoint(65);\n' +
        "console.log(charA); // 'A'\n\n" +
        'const rocket = String.fromCodePoint(128640);\n' +
        "console.log(rocket); // '🚀'\n\n" +
        'const combined = String.fromCodePoint(72, 105, 33);\n' +
        "console.log(combined); // 'Hi!'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.fromcodepoint',
      errors:
        'RangeError — если (...codePoints) некорректен (менее 0 или более 0x10FFFF).',
    },
    {
      name: 'String.fromCharCode()',
      syntax: 'String.fromCharCode(...codeUnits)',
      parameters: [
        {
          name: '...codeUnits',
          description: 'Один или несколько кодовых единиц UTF-16 (0–65535)',
        },
      ],
      description:
        'Статический метод объекта String, возвращает строку из (...codeUnits).',
      example:
        "console.log(String.fromCharCode(65, 66, 67)); // 'ABC'\n" +
        "console.log(String.fromCharCode(0x4F60, 0x597D)); // '你好'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.fromcharcode',
    },
    {
      name: 'String.raw()',
      syntax: 'String.raw(template, ...substitutions)',
      parameters: [
        {
          name: 'template',
          description: 'Объект с raw-массивом шаблонных строк',
        },
        {
          name: '...substitutions',
          description: 'Значения для подстановки',
        },
      ],
      description:
        'Статический метод объекта String, используется как тег для шаблонных строк. Возвращает сырую строку, объединяя (template.raw) и (...substitutions), без интерпретации escape-последовательностей.',
      example:
        'const path = String.raw`C:\\Users\\name\\file.txt`;\n' +
        "console.log(path); // 'C:\\Users\\name\\file.txt'\n\n" +
        'const str = String.raw`Hello\nWorld`;\n' +
        "console.log(str); // 'Hello\nWorld'\n\n" +
        '// Вызов с двумя аргументами\n' +
        'const template = { raw: ["a", "b", "c"] };\n' +
        'const result = String.raw(template, "X", "Y");\n' +
        "console.log(result); // 'aXbYc'",
      specification:
        'https://tc39.es/ecma262/multipage/text-processing.html#sec-string.raw',
      errors: 'TypeError — если (template) не имеет свойства raw.',
    },
  ],
};
