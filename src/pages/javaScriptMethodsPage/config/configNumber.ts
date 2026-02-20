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
        'Метод объекта Number, округляет число до указанного количества знаков после запятой. Возвращает строку.',
      example:
        "const num = 123.123;\nconsole.log(num.toFixed(2)); // '123.12'\n\n// Округление до ближайшего целого:\nconst num2 = 123.567;\nconsole.log(num2.toFixed(0)); // '124'",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tofixed',
      errors:
        'RangeError — если аргумент (digits) не в диапазоне от 0 до 100.\nTypeError — если this не является числом.',
    },
    {
      name: 'toString()',
      syntax: 'num.toString([radix])',
      parameters: [
        {
          name: 'radix',
          description:
            'Основание системы счисления (от 2 до 36), по умолчанию 10',
        },
      ],
      description:
        'Метод объекта Number, возвращает строковое представление числа в указанной системе счисления.',
      example:
        "const num = 123;\nconsole.log(num.toString()); // '123'\nconsole.log(num.toString(2)); // '1111011'\nconsole.log(num.toString(16)); // '7b'\nconsole.log(num.toString(36)); // '3f'",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tostring',
      errors:
        'RangeError — если основание (radix) не в диапазоне от 2 до 36.\nTypeError — если this является null или undefined.',
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
        'Метод объекта Number, возвращает строковое представление числа в экспоненциальной записи.',
      example:
        "// Большие числа:\nconst bigNumber = 123456.789;\nconsole.log(bigNumber.toExponential(4)); // '1.2346e+5'\n\n// Маленькие числа:\nconst smallNumber = 0.000123456;\nconsole.log(smallNumber.toExponential(3)); // '1.235e-4'\n\n// Целые числа:\nconst integer = 42;\nconsole.log(integer.toExponential(0)); // '4e+1'",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.toexponential',
      errors:
        'RangeError — если аргумент (fractionDigits) не в диапазоне от 0 до 100.\nTypeError — если this не является числом.',
    },
    {
      name: 'toPrecision()',
      syntax: 'num.toPrecision([precision])',
      parameters: [
        {
          name: 'precision',
          description: 'Количество значащих цифр в результате (от 1 до 100)',
        },
      ],
      description:
        'Метод объекта Number, возвращает строковое представление числа в формате с фиксированным количеством значащих цифр. Если аргумент не передан, то будет возращено исходное число. Если указанное количество знаков не достижимо обрезанием десятичной части - переводит число в экспоненциальную форму.',
      example:
        "const num = 123.456;\nconsole.log(num.toPrecision()); // '123.456'\nconsole.log(num.toPrecision(4)); // '123.5'\nconsole.log(num.toPrecision(2)); // '1.2e+2'\nconsole.log(num.toPrecision(1)); // '1e+2'",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.toprecision',
      errors:
        'RangeError — если аргумент (precision) не в диапазоне от 1 до 100.\nTypeError — если this не является числом.',
    },
    {
      name: 'toLocaleString()',
      syntax: 'num.toLocaleString([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка с кодом локали или массив таких строк (например, 'ru-RU', 'en-US')",
        },
        {
          name: 'options',
          description:
            "Объект с настройками форматирования:\n • style: 'decimal' (по умолчанию), 'currency', 'percent', 'unit'\n • currency: код валюты (например, 'USD', 'EUR', 'RUB') - обязателен при style: 'currency'\n • currencyDisplay: 'symbol' (по умолчанию), 'code', 'name'\n • useGrouping: true/false - использовать ли разделители групп разрядов\n • minimumIntegerDigits: минимальное количество целых цифр (1-21)\n • minimumFractionDigits: минимальное количество дробных цифр (0-20)\n • maximumFractionDigits: максимальное количество дробных цифр (0-20)\n • minimumSignificantDigits: минимальное количество значащих цифр (1-21)\n • maximumSignificantDigits: максимальное количество значащих цифр (1-21)\n • unit: единица измерения ('liter', 'meter', 'kilogram', и т.д.) - для style: 'unit'\n • unitDisplay: 'short', 'long', 'narrow' - для style: 'unit'",
        },
      ],
      description:
        'Метод объекта Number, преобразует число в строку с учётом локали (языка и региона). Поддерживает различные стили форматирования: десятичные числа, валюту, проценты, единицы измерения. Позволяет настраивать количество цифр, разделители и другие параметры отображения. Игнорирует невалидные значения.',
      example:
        "const num = 123456.789;\nconst result1 = num.toLocaleString('ru-RU');\nconsole.log(result1); // '123 456,789'\n\nconst result2 = num.toLocaleString('en-US');\nconsole.log(result2); // '123,456.789'\n\nconst result3 = num.toLocaleString('de-DE', {\n  style: 'currency',\n  currency: 'EUR',\n});\nconsole.log(result3); // '123.456,79 €'\n\nconst result4 = num.toLocaleString('ja-JP', {\n  style: 'currency',\n  currency: 'JPY',\n});\nconsole.log(result4); // '¥123,457'\n\nconst result5 = num.toLocaleString('ru-RU', {\n  style: 'percent',\n});\n\nconsole.log(result5); // '12 345 679 %'",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tolocalestring',
      errors:
        'RangeError — если аргумент (locales) содержит недопустимые значения языковых тегов.\nTypeError — если this не является числом или если аргумент (options) содержит недопустимые свойства.',
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
        'Статический метод объекта Number, проверяет, является ли указанное значение целым числом. Возвращает true, если является целым числом, иначе false.',
      example:
        "console.log(Number.isInteger(42)); // true\nconsole.log(Number.isInteger(42.0)); // true\nconsole.log(Number.isInteger(42.5)); // false\nconsole.log(Number.isInteger('42')); // false\nconsole.log(Number.isInteger(NaN)); // false\nconsole.log(Number.isInteger(Infinity)); // false",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.isinteger',
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
        'Статический метод объекта Number, возвращает true только если указанное значение имеет тип number и является NaN. Во всех остальных случаях возвращает false.',
      example:
        "console.log(Number.isNaN(NaN)); // true\nconsole.log(Number.isNaN('NaN')); // false\nconsole.log(Number.isNaN('123')); // false\nconsole.log(Number.isNaN(undefined)); // false\nconsole.log(Number.isNaN({})); // false\nconsole.log(Number.isNaN(123)); // false\nconsole.log(Number.isNaN('abc')); // false",
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
        'Статический метод объекта Number, возвращает true только в том случае, если указанное значение принадлежит к типу number и не является NaN/Infinity/-Infinity. Во всех остальных случаях возвращает false.',
      example:
        "console.log(Number.isFinite(42)); // true\nconsole.log(Number.isFinite(42.5)); // true\nconsole.log(Number.isFinite('42')); // false\nconsole.log(Number.isFinite(Infinity)); // false\nconsole.log(Number.isFinite(-Infinity)); // false\nconsole.log(Number.isFinite(NaN)); // false\nconsole.log(Number.isFinite(null)); // false",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.isfinite',
    },
  ],
};
