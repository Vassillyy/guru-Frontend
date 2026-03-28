import { Methods, type IMethod } from '@/entities/method';

export const configNumber: Record<Methods.NUMBER, IMethod[]> = {
  [Methods.NUMBER]: [
    {
      name: 'toFixed()',
      syntax: 'num.toFixed([digits])',
      parameters: [
        {
          name: 'digits',
          description: 'Количество цифр после десятичной точки (от 0 до 100)',
        },
      ],
      description:
        'Метод объекта Number, округляет исходное число до (digits) и возвращает результат в виде строки.',
      example:
        'const num = 123.123;\n' +
        "console.log(num.toFixed(2)); // '123.12'\n\n" +
        '// Округление до ближайшего целого:\n' +
        'const num2 = 123.567;\n' +
        "console.log(num2.toFixed(0)); // '124'",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tofixed',
      errors:
        'RangeError — если (digits) не в диапазоне от 0 до 100.\n' +
        'TypeError — если this не является числом.',
    },
    {
      name: 'toString()',
      syntax: 'num.toString([radix])',
      parameters: [
        {
          name: 'radix',
          description:
            'Основание системы счисления от 2 до 36 (по умолчанию 10)',
        },
      ],
      description:
        'Метод объекта Number, возвращает строковое представление исходного числа в системе счисления с (radix).',
      example:
        'const num = 123;\n' +
        "console.log(num.toString()); // '123'\n" +
        "console.log(num.toString(2)); // '1111011'\n" +
        "console.log(num.toString(16)); // '7b'\n" +
        "console.log(num.toString(36)); // '3f'",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tostring',
      errors:
        'RangeError — если (radix) не в диапазоне от 2 до 36.\n' +
        'TypeError — если this является null или undefined.',
    },
    {
      name: 'toExponential()',
      syntax: 'num.toExponential([fractionDigits])',
      parameters: [
        {
          name: 'fractionDigits',
          description: 'Количество цифр после десятичной точки (от 0 до 100)',
        },
      ],
      description:
        'Метод объекта Number, возвращает строковое представление исходного числа в экспоненциальной записи, округлённое до (fractionDigits).',
      example:
        '// Большие числа:\n' +
        'const bigNumber = 123456.789;\n' +
        "console.log(bigNumber.toExponential(4)); // '1.2346e+5'\n\n" +
        '// Маленькие числа:\n' +
        'const smallNumber = 0.000123456;\n' +
        "console.log(smallNumber.toExponential(3)); // '1.235e-4'\n\n" +
        '// Целые числа:\n' +
        'const integer = 42;\n' +
        "console.log(integer.toExponential(0)); // '4e+1'",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.toexponential',
      errors:
        'RangeError — если (fractionDigits) не в диапазоне от 0 до 100.\n' +
        'TypeError — если this не является числом.',
    },
    {
      name: 'toPrecision()',
      syntax: 'num.toPrecision([precision])',
      parameters: [
        {
          name: 'precision',
          description: 'Количество значащих цифр (от 1 до 100)',
        },
      ],
      description:
        'Метод объекта Number, возвращает строковое представление исходного числа в формате с фиксированным (precision), округляя при необходимости. Если аргумент не передан, то будет возвращено исходное число. Если указанное количество знаков не достижимо обрезанием десятичной части - переводит число в экспоненциальную форму.',
      example:
        'const num = 123.456;\n' +
        "console.log(num.toPrecision()); // '123.456'\n" +
        "console.log(num.toPrecision(4)); // '123.5'\n" +
        "console.log(num.toPrecision(2)); // '1.2e+2'\n" +
        "console.log(num.toPrecision(1)); // '1e+2'",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.toprecision',
      errors:
        'RangeError — если (precision) не в диапазоне от 1 до 100.\n' +
        'TypeError — если this не является числом.',
    },
    {
      name: 'toLocaleString()',
      syntax: 'num.toLocaleString([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка с кодом локали или массив таких строк ('ru-RU', 'en-US' и другие)",
        },
        {
          name: 'options',
          description:
            'Объект с настройками форматирования:\n' +
            'Основные стили (style):\n' +
            " • style: 'decimal' — десятичное число (по умолчанию)\n" +
            " • style: 'currency' — формат валюты (требует указания currency)\n" +
            " • style: 'percent' — формат процентов (число умножается на 100)\n" +
            " • style: 'unit' — формат с единицей измерения (требует указания unit)\n" +
            'Настройки валюты (при style: "currency"):\n' +
            " • currency — код валюты (например, 'USD', 'EUR', 'RUB')\n" +
            " • currencyDisplay: 'symbol' — символ валюты (по умолчанию, например '€')\n" +
            " • currencyDisplay: 'code' — буквенный код (например, 'EUR')\n" +
            " • currencyDisplay: 'name' — полное название (например, 'euro')\n" +
            'Настройки единиц измерения (при style: "unit"):\n' +
            " • unit — единица измерения ('liter', 'meter', 'kilogram', 'celsius' и др.)\n" +
            " • unitDisplay: 'short' — сокращённое обозначение (по умолчанию, 'l', 'km/h')\n" +
            " • unitDisplay: 'long' — полное название ('liters', 'kilometers per hour')\n" +
            " • unitDisplay: 'narrow' — узкое сокращение ('l', 'km/h' — может отличаться от short)\n" +
            'Форматирование чисел:\n' +
            ' • useGrouping — использовать разделители групп разрядов (true/false)\n' +
            ' • minimumIntegerDigits — минимальное количество целых цифр (1-21)\n' +
            ' • minimumFractionDigits — минимальное количество дробных цифр (0-20)\n' +
            ' • maximumFractionDigits — максимальное количество дробных цифр (0-20)\n' +
            ' • minimumSignificantDigits — минимальное количество значащих цифр (1-21)\n' +
            ' • maximumSignificantDigits — максимальное количество значащих цифр (1-21)',
        },
      ],
      description:
        'Метод объекта Number, преобразует исходное число в строку с учётом локали (языка и региона). Поддерживает различные стили форматирования: десятичные числа, валюту, проценты, единицы измерения. Позволяет настраивать количество цифр, разделители и другие параметры отображения. Игнорирует невалидные значения.',
      example:
        'const num = 123456.789;\n' +
        "const result1 = num.toLocaleString('ru-RU');\n" +
        "console.log(result1); // '123 456,789'\n\n" +
        "const result2 = num.toLocaleString('en-US');\n" +
        "console.log(result2); // '123,456.789'\n\n" +
        "const result3 = num.toLocaleString('de-DE', {\n" +
        "  style: 'currency',\n" +
        "  currency: 'EUR',\n" +
        '});\n' +
        "console.log(result3); // '123.456,79 €'\n\n" +
        "const result4 = num.toLocaleString('ja-JP', {\n" +
        "  style: 'currency',\n" +
        "  currency: 'JPY',\n" +
        '});\n' +
        "console.log(result4); // '¥123,457'\n\n" +
        "const result5 = num.toLocaleString('ru-RU', {\n" +
        "  style: 'percent',\n" +
        '});\n\n' +
        "console.log(result5); // '12 345 679 %'",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tolocalestring',
      errors:
        'TypeError — если this не является числом.\n' +
        'RangeError — если (locales) содержит недопустимые языковые теги.',
    },
    {
      name: 'Number.isInteger()',
      syntax: 'Number.isInteger(value)',
      parameters: [
        {
          name: 'value',
          description: 'Значение, которое нужно проверить на целочисленность',
        },
      ],
      description:
        'Статический метод объекта Number, проверяет, является ли (value) целым числом. Возвращает true, если является целым числом, иначе false.',
      example:
        'console.log(Number.isInteger(42)); // true\n' +
        'console.log(Number.isInteger(42.0)); // true\n' +
        'console.log(Number.isInteger(42.5)); // false\n' +
        "console.log(Number.isInteger('42')); // false\n" +
        'console.log(Number.isInteger(NaN)); // false\n' +
        'console.log(Number.isInteger(Infinity)); // false',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.isinteger',
    },
    {
      name: 'Number.isSafeInteger()',
      syntax: 'Number.isSafeInteger(value)',
      parameters: [
        {
          name: 'value',
          description: 'Значение для проверки',
        },
      ],
      description:
        'Статический метод объекта Number, возвращает true, если (value) является целым числом (тип number) и находится в безопасном диапазоне от -(2⁵³ - 1) до 2⁵³ - 1.',
      example:
        'console.log(Number.isSafeInteger(42)); // true\n' +
        'console.log(Number.isSafeInteger(9007199254740991)); // true\n' +
        'console.log(Number.isSafeInteger(9007199254740992)); // false\n' +
        'console.log(Number.isSafeInteger(42.5)); // false',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.issafeinteger',
    },
    {
      name: 'Number.isNaN()',
      syntax: 'Number.isNaN(value)',
      parameters: [
        {
          name: 'value',
          description: 'Значение, которое нужно проверить на NaN',
        },
      ],
      description:
        'Статический метод объекта Number, возвращает true только если (value) имеет тип number и является NaN. Во всех остальных случаях возвращает false.',
      example:
        'console.log(Number.isNaN(NaN)); // true\n' +
        "console.log(Number.isNaN('NaN')); // false\n" +
        "console.log(Number.isNaN('123')); // false\n" +
        'console.log(Number.isNaN(undefined)); // false\n' +
        'console.log(Number.isNaN({})); // false\n' +
        'console.log(Number.isNaN(123)); // false\n' +
        "console.log(Number.isNaN('abc')); // false",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.isnan',
    },
    {
      name: 'Number.isFinite()',
      syntax: 'Number.isFinite(value)',
      parameters: [
        {
          name: 'value',
          description: 'Значение, которое нужно проверить на конечность',
        },
      ],
      description:
        'Статический метод объекта Number, возвращает true только в том случае, если (value) принадлежит к типу number и не является NaN/Infinity/-Infinity. Во всех остальных случаях возвращает false.',
      example:
        'console.log(Number.isFinite(42)); // true\n' +
        'console.log(Number.isFinite(42.5)); // true\n' +
        "console.log(Number.isFinite('42')); // false\n" +
        'console.log(Number.isFinite(Infinity)); // false\n' +
        'console.log(Number.isFinite(-Infinity)); // false\n' +
        'console.log(Number.isFinite(NaN)); // false\n' +
        'console.log(Number.isFinite(null)); // false',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.isfinite',
    },
    {
      name: 'Number.EPSILON',
      syntax: 'Number.EPSILON',
      parameters: [],
      description:
        'Статическое свойство объекта Number, представляет собой разницу между 1 и наименьшим числом, которое больше 1. Используется для проверки точности вычислений с плавающей точкой.',
      example:
        'console.log(0.1 + 0.2 === 0.3); // false\n' +
        'console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true\n' +
        'console.log(Number.EPSILON); // 2.220446049250313e-16',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.epsilon',
    },
    {
      name: 'Number.MAX_SAFE_INTEGER',
      syntax: 'Number.MAX_SAFE_INTEGER',
      parameters: [],
      description:
        'Статическое свойство объекта Number, представляет собой максимальное безопасное целое число (2⁵³ - 1 = 9007199254740991).',
      example: 'console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.max_safe_integer',
    },
    {
      name: 'Number.MAX_SAFE_INTEGER',
      syntax: 'Number.MAX_SAFE_INTEGER',
      parameters: [],
      description:
        'Статическое свойство объекта Number, представляет собой максимальное безопасное целое число (2⁵³ - 1 = 9007199254740991).',
      example: 'console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.max_safe_integer',
    },
    {
      name: 'Number.MIN_SAFE_INTEGER',
      syntax: 'Number.MIN_SAFE_INTEGER',
      parameters: [],
      description:
        'Статическое свойство объекта Number, представляет собой минимальное безопасное целое число (-(2⁵³ - 1) = -9007199254740991).',
      example: 'console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.min_safe_integer',
    },
    {
      name: 'Number.MAX_VALUE',
      syntax: 'Number.MAX_VALUE',
      parameters: [],
      description:
        'Статическое свойство объекта Number, представляет собой максимальное положительное число, которое можно представить (примерно 1.79e+308).',
      example: 'console.log(Number.MAX_VALUE); // 1.7976931348623157e+308',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.max_value',
    },
    {
      name: 'Number.MIN_VALUE',
      syntax: 'Number.MIN_VALUE',
      parameters: [],
      description:
        'Статическое свойство объекта Number, представляет собой минимальное положительное число, которое можно представить (примерно 5e-324).',
      example:
        'console.log(Number.MIN_VALUE); // 5e-324\n' +
        'console.log(Number.MIN_VALUE > 0); // true',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.min_value',
    },
    {
      name: 'Number.NaN',
      syntax: 'Number.NaN',
      parameters: [],
      description:
        'Статическое свойство объекта Number, представляет собой специальное значение "Not-a-Number".',
      example:
        'console.log(Number.NaN); // NaN\n' +
        'console.log(isNaN(Number.NaN)); // true\n' +
        'console.log(Number.NaN === NaN); // false (NaN не равно самому себе)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.nan',
    },
    {
      name: 'Number.POSITIVE_INFINITY',
      syntax: 'Number.POSITIVE_INFINITY',
      parameters: [],
      description:
        'Статическое свойство объекта Number, представляет собой положительную бесконечность.',
      example: 'console.log(Number.POSITIVE_INFINITY); // Infinity',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.positive_infinity',
    },
    {
      name: 'Number.NEGATIVE_INFINITY',
      syntax: 'Number.NEGATIVE_INFINITY',
      parameters: [],
      description:
        'Статическое свойство объекта Number, представляет собой отрицательную бесконечность.',
      example: 'console.log(Number.NEGATIVE_INFINITY); // -Infinity',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.negative_infinity',
    },
  ],
};
