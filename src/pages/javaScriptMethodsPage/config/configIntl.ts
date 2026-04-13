import { Methods, type IMethod } from '@/entities/method';

export const configIntl: Record<Methods.INTL, IMethod[]> = {
  [Methods.INTL]: [
    {
      name: 'Intl.DateTimeFormat',
      syntax: 'new Intl.DateTimeFormat([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US' и тд)",
        },
        {
          name: 'options',
          description:
            'Объект с настройками форматирования:\n' +
            " • dateStyle: 'full' | 'long' | 'medium' | 'short'\n" +
            " • timeStyle: 'full' | 'long' | 'medium' | 'short'\n" +
            " • calendar: 'buddhist' | 'chinese' | 'gregory' | 'hebrew' | 'indian' | 'islamic' | 'iso8601' | 'persian'\n" +
            " • day: 'numeric' | '2-digit'\n" +
            " • month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'\n" +
            " • year: 'numeric' | '2-digit'\n" +
            " • hour: 'numeric' | '2-digit' (12 или 24)\n" +
            " • minute: 'numeric' | '2-digit'\n" +
            " • second: 'numeric' | '2-digit'\n" +
            " • timeZone: название часового пояса ('Europe/Moscow')\n" +
            ' • hour12: true/false (12-часовой формат)\n' +
            " • weekday: 'long' | 'short' | 'narrow'\n" +
            " • era: 'long' | 'short' | 'narrow'\n" +
            " • timeZoneName: 'long' | 'short' | 'shortOffset' | 'longOffset'",
        },
      ],
      description:
        'Конструктор объектов для форматирования дат и времени с учётом локали.\n' +
        'Созданный объект предоставляет следующие методы:\n' +
        '• format(date) — принимает date и возвращает строку с отформатированной датой.\n' +
        '• formatToParts(date) — принимает date и возвращает массив объектов, содержащих отдельные части форматированной даты.\n' +
        '• resolvedOptions() — возвращает объект с разрешёнными настройками (локали, календарь, часовой пояс и тд).',
      example:
        "const date = new Date('2026-03-15T14:30:00');\n\n" +
        '// Русский формат\n' +
        "const ruFormat = new Intl.DateTimeFormat('ru-RU');\n" +
        "console.log(ruFormat.format(date)); // '15.3.2026'\n\n" +
        '// Американский формат\n' +
        "const usFormat = new Intl.DateTimeFormat('en-US');\n" +
        "console.log(usFormat.format(date)); // '3/15/2026'\n\n" +
        '// С настройками\n' +
        'const options = {\n' +
        "  year: 'numeric',\n" +
        "  month: 'long',\n" +
        "  day: 'numeric',\n" +
        "  hour: '2-digit',\n" +
        "  minute: '2-digit'\n" +
        '};\n' +
        "const detailed = new Intl.DateTimeFormat('ru-RU', options);\n" +
        "console.log(detailed.format(date)); // '15 марта 2026 г. в 14:30'\n\n" +
        '// formatToParts() - разбивка на компоненты\n' +
        'const parts = detailed.formatToParts(date);\n' +
        'console.log(parts);\n' +
        "// [{ type: 'day', value: '15' }, ..., { type: 'year', value: '2026' }, ...]\n\n" +
        '// resolvedOptions() - получение настроек\n' +
        'const resolved = detailed.resolvedOptions();\n' +
        'console.log(resolved.locale);   // "ru-RU"\n' +
        'console.log(resolved.timeZone); // "Europe/Moscow"',
      specification:
        'https://tc39.es/ecma402/#sec-intl-datetimeformat-constructor',
      errors:
        'RangeError — если недопустимые (locales) или (options).\n' +
        'TypeError — если (date) невалидный тип значения (не объект Date и не число).',
    },
    {
      name: 'Intl.NumberFormat',
      syntax: 'new Intl.NumberFormat([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US' и тд)",
        },
        {
          name: 'options',
          description:
            'Объект с настройками форматирования:\n' +
            " • style: 'decimal' | 'currency' | 'percent' | 'unit'\n" +
            " • currency: код валюты ('USD', 'EUR', 'RUB')\n" +
            " • currencyDisplay: 'symbol' | 'narrowSymbol' | 'code' | 'name'\n" +
            ' • useGrouping: true/false (разделители тысяч)\n' +
            ' • minimumIntegerDigits: минимальное количество цифр целой части\n' +
            ' • minimumFractionDigits: минимальное количество цифр дробной части\n' +
            ' • maximumFractionDigits: максимальное количество цифр дробной части\n' +
            ' • minimumSignificantDigits: минимальное количество значащих цифр\n' +
            ' • maximumSignificantDigits: максимальное количество значащих цифр\n' +
            " • notation: 'standard' | 'scientific' | 'engineering' | 'compact'\n" +
            " • unit: единица измерения ('meter', 'second', 'byte')\n" +
            " • unitDisplay: 'long' | 'short' | 'narrow'\n" +
            " • signDisplay: 'auto' | 'never' | 'always' | 'exceptZero' | 'negative'\n" +
            " • compactDisplay: 'short' | 'long'",
        },
      ],
      description:
        'Конструктор объектов для форматирования чисел с учётом локали.\n' +
        'Созданный объект предоставляет следующие методы:\n' +
        '• format(number) — принимает number и возвращает строку с отформатированным числом.\n' +
        '• formatToParts(number) — принимает number и возвращает массив объектов, содержащих отдельные части форматированного числа\n' +
        '• resolvedOptions() — возвращает объект с разрешёнными настройками (локаль, стиль, валюту, единицы измерения и тд).',
      example:
        'const number = 1234567.89;\n\n' +
        '// Русский формат\n' +
        "const ruFormat = new Intl.NumberFormat('ru-RU');\n" +
        "console.log(ruFormat.format(number)); // '1 234 567,89'\n\n" +
        "console.log(currency.format(1234.5)); // '1 234,50 ₽'\n\n" +
        '// Проценты\n' +
        "const percent = new Intl.NumberFormat('ru-RU', {\n" +
        "  style: 'percent',\n" +
        '  minimumFractionDigits: 1\n' +
        '});\n' +
        "console.log(percent.format(0.125)); // '12,5%'\n\n" +
        '// Компактный формат\n' +
        "const compact = new Intl.NumberFormat('en-US', {\n" +
        "  notation: 'compact',\n" +
        "  compactDisplay: 'short'\n" +
        '});\n' +
        "console.log(compact.format(1234567)); // '1.2M'\n\n" +
        '// formatToParts() - разбивка на компоненты\n' +
        'const parts = ruFormat.formatToParts(number);\n' +
        'console.log(parts);\n' +
        "// [{ type: 'integer', value: '1 234 567' }, ..., { type: 'fraction', value: '89' }]\n\n" +
        '// resolvedOptions() - получение настроек\n' +
        'const resolved = ruFormat.resolvedOptions();\n' +
        'console.log(resolved.locale);   // "ru-RU"\n' +
        'console.log(resolved.numberingSystem); // "latn"',
      specification:
        'https://tc39.es/ecma402/#sec-intl-numberformat-constructor',
      errors:
        'RangeError — если недопустимые (locales) или (options).\n' +
        'TypeError — если (number) невалидный тип значения (не число и не преобразуемый в число).',
    },
    {
      name: 'Intl.PluralRules',
      syntax: 'new Intl.PluralRules([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US' и тд)",
        },
        {
          name: 'options',
          description:
            'Объект с настройками:\n' +
            " • type: 'cardinal' (количество) | 'ordinal' (порядок)\n" +
            ' • minimumIntegerDigits: минимальное количество цифр целой части\n' +
            ' • minimumFractionDigits: минимальное количество цифр дробной части\n' +
            ' • maximumFractionDigits: максимальное количество цифр дробной части',
        },
      ],
      description:
        'Конструктор объектов для определения множественной формы числа в соответствии с правилами локали.\n' +
        'Созданный объект предоставляет следующие методы:\n' +
        '• select(number) — принимает number и возвращает строку с категорией множественной формы для этого числа.\n' +
        '• resolvedOptions() — возвращает объект с разрешёнными настройками (локаль, тип, минимальные/максимальные цифры и тд).',
      example:
        '// Русский язык (3 формы)\n' +
        "const ruRules = new Intl.PluralRules('ru-RU');\n" +
        "console.log(ruRules.select(1)); // 'one'\n" +
        "console.log(ruRules.select(2)); // 'few'\n" +
        "console.log(ruRules.select(5)); // 'many'\n" +
        "console.log(ruRules.select(0)); // 'many'\n\n" +
        '// Английский язык (2 формы)\n' +
        "const enRules = new Intl.PluralRules('en-US');\n" +
        "console.log(enRules.select(1)); // 'one'\n" +
        "console.log(enRules.select(2)); // 'other'\n\n" +
        '// Порядковые числительные\n' +
        "const ordinal = new Intl.PluralRules('en-US', { type: 'ordinal' });\n" +
        "console.log(ordinal.select(1)); // 'one'\n" +
        "console.log(ordinal.select(2)); // 'two'\n" +
        "console.log(ordinal.select(3)); // 'few'\n" +
        "console.log(ordinal.select(4)); // 'other'\n\n" +
        '// resolvedOptions() - получение настроек\n' +
        'const resolved = ruRules.resolvedOptions();\n' +
        'console.log(resolved.locale); // "ru-RU"\n' +
        'console.log(resolved.type);   // "cardinal"',
      specification:
        'https://tc39.es/ecma402/#sec-intl-pluralrules-constructor',
      errors:
        'RangeError — если недопустимые (locales) или (options).\n' +
        'TypeError — если (number) невалидный тип значения (не число и не преобразуемый в число).',
    },
    {
      name: 'Intl.Collator',
      syntax: 'new Intl.Collator([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US' и тд)",
        },
        {
          name: 'options',
          description:
            'Объект с настройками сравнения:\n' +
            " • usage: 'sort' | 'search'\n" +
            " • sensitivity: 'base' | 'accent' | 'case' | 'variant'\n" +
            ' • ignorePunctuation: true/false\n' +
            ' • numeric: true/false (числовое сравнение)\n' +
            " • caseFirst: 'upper' | 'lower' | 'false'\n" +
            " • collation: 'big5han' | 'compat' | 'dict' | 'direct' | 'ducet' | 'emoji' | 'eor' | 'gb2312han' | 'phonebk' | 'phonetic' | 'pinyin' | 'reformed' | 'searchjl' | 'stroke' | 'trad' | 'unihan' | 'zhuyin'",
        },
      ],
      description:
        'Конструктор объектов для сравнения строк с учётом правил локали.\n' +
        'Созданный объект предоставляет следующие методы:\n' +
        '• compare(string1, string2) — принимает две строки и возвращает число:\n' +
        '  - отрицательное, если string1 < string2\n' +
        '  - 0, если string1 === string2\n' +
        '  - положительное, если string1 > string2\n' +
        '• resolvedOptions() — возвращает объект с разрешёнными настройками (локаль, чувствительность, игнорирование пунктуации и тд).',
      example:
        "const names = ['Анна', 'Борис', 'алексей', 'борис'];\n\n" +
        '// Сортировка по-русски\n' +
        "const ruCollator = new Intl.Collator('ru-RU');\n" +
        'console.log(names.sort(ruCollator.compare));\n' +
        "// ['алексей', 'Анна', 'борис', 'Борис']\n\n" +
        '// Сортировка с игнорированием регистра\n' +
        "const caseInsensitive = new Intl.Collator('ru-RU', {\n" +
        "  sensitivity: 'base'\n" +
        '});\n' +
        'console.log(names.sort(caseInsensitive.compare));\n' +
        "// ['алексей', 'Анна', 'борис', 'Борис']\n\n" +
        '// Числовое сравнение\n' +
        "const numbers = ['10', '2', '1', '20'];\n" +
        "const numericCollator = new Intl.Collator('ru-RU', {\n" +
        '  numeric: true\n' +
        '});\n' +
        'console.log(numbers.sort(numericCollator.compare));\n' +
        "// ['1', '2', '10', '20']\n\n" +
        '// resolvedOptions() - получение настроек\n' +
        'const resolved = ruCollator.resolvedOptions();\n' +
        "console.log(resolved.locale);     // 'ru'\n" +
        "console.log(resolved.usage);      // 'sort'\n" +
        "console.log(resolved.sensitivity); // 'variant'",
      specification: 'https://tc39.es/ecma402/#sec-intl-collator-constructor',
      errors:
        'RangeError — если недопустимые (locales) или (options).\n' +
        'TypeError — если (string1) или (string2) не являются строками (или не преобразуются в строку).',
    },
    {
      name: 'Intl.DisplayNames',
      syntax: 'new Intl.DisplayNames(locales[, options])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US' и тд)",
        },
        {
          name: 'options',
          description:
            'Объект с настройками:\n' +
            " • type: 'language' | 'region' | 'script' | 'calendar' | 'currency' | 'dateTimeField' | 'key'\n" +
            " • languageDisplay: 'dialect' | 'standard' (только для type: 'language')\n" +
            " • style: 'long' | 'short' | 'narrow' (для некоторых типов)\n" +
            " • fallback: 'code' | 'none'",
        },
      ],
      description:
        'Конструктор объектов для получения локализованных названий языков, регионов, скриптов, валют и других элементов.\n' +
        'Созданный объект предоставляет следующие методы:\n' +
        '• of(code) — принимает code и возвращает локализованное название.\n' +
        '• resolvedOptions() — возвращает объект с разрешёнными настройками (локаль, тип и тд).',
      example:
        '// Названия языков\n' +
        "const ruLang = new Intl.DisplayNames('ru-RU', {\n" +
        " type: 'language'\n" +
        '});\n' +
        "console.log(ruLang.of('de')); // 'немецкий'\n" +
        "console.log(ruLang.of('ja')); // 'японский'\n\n" +
        '// Названия регионов (стран)\n' +
        "const ruRegion = new Intl.DisplayNames('ru-RU', {\n" +
        " type: 'region'\n" +
        '});\n' +
        "console.log(ruRegion.of('US')); // 'Соединённые Штаты'\n" +
        "console.log(ruRegion.of('DE')); // 'Германия'\n\n" +
        '// Названия валют\n' +
        "const ruCurrency = new Intl.DisplayNames('ru-RU', {\n" +
        "  type: 'currency'\n" +
        '});\n' +
        "console.log(ruCurrency.of('USD')); // 'доллар США'\n" +
        "console.log(ruCurrency.of('RUB')); // 'российский рубль'\n\n" +
        '// resolvedOptions() - получение настроек\n' +
        'const resolved = ruLang.resolvedOptions();\n' +
        'console.log(resolved.locale); // "ru-RU"\n' +
        'console.log(resolved.type);   // "language"',
      specification:
        'https://tc39.es/ecma402/#sec-intl-displaynames-constructor',
      errors:
        'RangeError — если недопустимые (locales) или (options).\n' +
        'TypeError — если (code) невалидный тип значения (не строка) или код не найден.',
    },
    {
      name: 'Intl.ListFormat',
      syntax: 'new Intl.ListFormat([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US' и тд)",
        },
        {
          name: 'options',
          description:
            'Объект с настройками:\n' +
            " • type: 'conjunction' | 'disjunction' | 'unit' (без разделителя)\n" +
            " • style: 'long' | 'short' | 'narrow'",
        },
      ],
      description:
        'Конструктор объектов для форматирования списков с учётом локали.\n' +
        'Созданный объект предоставляет следующие методы:\n' +
        '• format(list) — принимает list и возвращает отформатированную строку списка.\n' +
        '• formatToParts(list) — принимает list и возвращает массив объектов с частями форматированного списка.\n' +
        '• resolvedOptions() — возвращает объект с разрешёнными настройками (локаль, тип, стиль и тд).',
      example:
        "const items = ['яблоки', 'бананы', 'апельсины'];\n\n" +
        "// Союз 'и' (по умолчанию)\n" +
        "const ruConjunction = new Intl.ListFormat('ru-RU');\n" +
        'console.log(ruConjunction.format(items));\n' +
        "// 'яблоки, бананы и апельсины'\n\n" +
        "// Союз 'или'\n" +
        "const ruDisjunction = new Intl.ListFormat('ru-RU', {\n" +
        "  type: 'disjunction'\n" +
        '});\n' +
        'console.log(ruDisjunction.format(items));\n' +
        "// 'яблоки, бананы или апельсины'\n\n" +
        "// Стиль 'unit' (для отображения единиц измерения)\n" +
        "const ruUnit = new Intl.ListFormat('ru-RU', {\n" +
        "  type: 'unit'\n" +
        '});\n' +
        "console.log(ruUnit.format(['3', 'кг'])); // '3, кг'\n\n" +
        '// formatToParts() - разбивка на компоненты\n' +
        'const parts = ruConjunction.formatToParts(items);\n' +
        'console.log(parts);\n' +
        "// [{ type: 'element', value: 'яблоки' }, { type: 'literal', value: ', ' }, ...]\n\n" +
        '// resolvedOptions() - получение настроек\n' +
        'const resolved = ruConjunction.resolvedOptions();\n' +
        "console.log(resolved.locale); // 'ru-RU'\n" +
        "console.log(resolved.type);   // 'conjunction'\n" +
        "console.log(resolved.style);  // 'long'",
      specification: 'https://tc39.es/ecma402/#sec-intl-listformat-constructor',
      errors:
        'RangeError — если недопустимые (locales) или (options).\n' +
        'TypeError — если (list) не является массивом или содержит нестроковые элементы.',
    },
    {
      name: 'Intl.RelativeTimeFormat',
      syntax: 'new Intl.RelativeTimeFormat([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US' и тд)",
        },
        {
          name: 'options',
          description:
            'Объект с настройками:\n' +
            " • numeric: 'auto' | 'always'\n" +
            "   - 'auto': использовать специальные слова (вчера, завтра)\n" +
            "   - 'always': всегда показывать число (1 день назад)\n" +
            " • style: 'long' | 'short' | 'narrow'\n" +
            "   - 'long': 'через 2 дня'\n" +
            "   - 'short': 'через 2 дн.'\n" +
            "   - 'narrow': 'через 2 дн'",
        },
      ],
      description:
        'Конструктор объектов для форматирования относительного времени с учётом локали.\n' +
        'Созданный объект предоставляет следующие методы:\n' +
        '• format(value, unit) — принимает value и unit (day, hour, minute, second, month, year и тд), возвращает строку.\n' +
        '• formatToParts(value, unit) — принимает value и unit, возвращает массив объектов с частями отформатированной строки.\n' +
        '• resolvedOptions() — возвращает объект с разрешёнными настройками (локаль, numeric, style).',
      example:
        "const rtf = new Intl.RelativeTimeFormat('ru-RU', {\n" +
        " numeric: 'auto'\n" +
        '});\n\n' +
        "console.log(rtf.format(-1, 'day')); // 'вчера'\n" +
        "console.log(rtf.format(1, 'day')); // 'завтра'\n" +
        "console.log(rtf.format(-3, 'hour')); // '3 часа назад'\n" +
        "console.log(rtf.format(2, 'week')); // 'через 2 недели'\n" +
        "console.log(rtf.format(0, 'second')); // 'сейчас'\n\n" +
        '// Всегда показывать числа\n' +
        "const alwaysNumeric = new Intl.RelativeTimeFormat('ru-RU', {\n" +
        " numeric: 'always'\n" +
        '});\n' +
        "console.log(alwaysNumeric.format(-1, 'day')); // '1 день назад'\n" +
        "console.log(alwaysNumeric.format(1, 'day')); // 'через 1 день'\n\n" +
        '// Разные стили\n' +
        "const longStyle = new Intl.RelativeTimeFormat('ru-RU', {\n" +
        " numeric: 'auto',\n" +
        " style: 'long'\n" +
        '});\n' +
        "console.log(longStyle.format(2, 'day')); // 'послезавтра'\n\n" +
        "const shortStyle = new Intl.RelativeTimeFormat('ru-RU', {\n" +
        " numeric: 'auto',\n" +
        " style: 'short'\n" +
        '});\n' +
        "console.log(shortStyle.format(3, 'day')); // 'через 3 дн.'\n\n" +
        '// formatToParts() - разбивка на компоненты\n' +
        "const parts = rtf.formatToParts(-1, 'day');\n" +
        'console.log(parts);\n' +
        "// [{ type: 'literal', value: 'вчера' }]\n\n" +
        '// resolvedOptions() - получение настроек\n' +
        'const resolved = rtf.resolvedOptions();\n' +
        "console.log(resolved.numeric); // 'auto'\n" +
        "console.log(resolved.style); // 'long'",
      specification:
        'https://tc39.es/ecma402/#sec-intl-relativetimeformat-constructor',
      errors:
        'RangeError — если недопустимые (locales) или (options).\n' +
        'TypeError — если (value) не число или (unit) невалидная единица времени.',
    },
    {
      name: 'Intl.Segmenter',
      syntax: 'new Intl.Segmenter([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US' и тд)",
        },
        {
          name: 'options',
          description:
            'Объект с настройками:\n' +
            " • granularity: 'grapheme' | 'word' | 'sentence'\n" +
            "   - 'grapheme': сегментация по графемам (видимым символам)\n" +
            "   - 'word': сегментация по словам\n" +
            "   - 'sentence': сегментация по предложениям",
        },
      ],
      description:
        'Конструктор объектов для сегментации текста на графемы, слова или предложения с учётом правил локали.\n' +
        'Созданный объект предоставляет следующие методы:\n' +
        '• segment(string) — принимает string и возвращает итерируемый объект Segments с сегментами.\n' +
        '  Каждый сегмент содержит свойства: segment (текст сегмента), index (индекс начала), input (исходная строка).\n' +
        '• resolvedOptions() — возвращает объект с разрешёнными настройками (локаль, granularity).',
      example:
        '// Сегментация по графемам (видимым символам)\n' +
        "const graphemeSegmenter = new Intl.Segmenter('ru-RU', {\n" +
        " granularity: 'grapheme'\n" +
        '});\n' +
        "const text = 'Привет!';\n" +
        'const graphemeSegments = graphemeSegmenter.segment(text);\n' +
        'for (const segment of graphemeSegments) {\n' +
        '  console.log(segment.segment);\n' +
        '}\n' +
        "// 'П', 'р', 'и', 'в', 'е', 'т', '!'\n\n" +
        '// Сегментация по словам (с определением типа)\n' +
        "const wordSegmenter = new Intl.Segmenter('ru-RU', {\n" +
        " granularity: 'word'\n" +
        '});\n' +
        "const sentence = 'Hello world!';\n" +
        'const wordSegments = wordSegmenter.segment(sentence);\n' +
        'for (const segment of wordSegments) {\n' +
        "  console.log(`${segment.segment} (${segment.isWordLike ? 'слово' : 'не слово'})`);\n" +
        '}\n' +
        "// 'Hello (слово)', ' (не слово)', 'world (слово)', '! (не слово)'\n\n" +
        '// Сегментация по предложениям\n' +
        "const sentenceSegmenter = new Intl.Segmenter('ru-RU', {\n" +
        " granularity: 'sentence'\n" +
        '});\n' +
        "const paragraph = 'Первое предложение. Второе предложение!';\n" +
        'const sentenceSegments = sentenceSegmenter.segment(paragraph);\n' +
        'for (const segment of sentenceSegments) {\n' +
        '  console.log(segment.segment);\n' +
        '}\n' +
        "// 'Первое предложение. ', 'Второе предложение!'\n\n" +
        '// Доступ к индексу и исходной строке\n' +
        'const segments = graphemeSegmenter.segment(text);\n' +
        'for (const segment of segments) {\n' +
        "  console.log(`'${segment.segment}' на позиции ${segment.index}`);\n" +
        '}\n' +
        "// 'П' на позиции 0, 'р' на позиции 1, 'и' на позиции 2, ...\n\n" +
        '// resolvedOptions() - получение настроек\n' +
        'const resolved = graphemeSegmenter.resolvedOptions();\n' +
        "console.log(resolved.locale);      // 'ru-RU'\n" +
        "console.log(resolved.granularity); // 'grapheme'",
      specification: 'https://tc39.es/ecma402/#sec-intl-segmenter-constructor',
      errors:
        'RangeError — если недопустимые (locales) или (options).\n' +
        'TypeError — если (string) не является строкой.',
    },
    {
      name: 'Intl.Locale',
      syntax: 'new Intl.Locale(tag[, options])',
      parameters: [
        {
          name: 'tag',
          description:
            'Строка с языковым тегом ("en-US", "ru-RU", "sr-Cyrl-RS" и тд)',
        },
        {
          name: 'options',
          description:
            'Объект с настройками:\n' +
            " • language: код языка ('en', 'ru')\n" +
            " • script: код скрипта ('Latn', 'Cyrl')\n" +
            " • region: код региона ('US', 'RU')\n" +
            " • numberingSystem: система счисления ('latn', 'arab', 'hanidec')\n" +
            " • calendar: календарь ('gregory', 'islamic', 'hebrew')\n" +
            " • caseFirst: 'upper' | 'lower' | 'false'\n" +
            ' • collation: тип сортировки\n' +
            " • hourCycle: 'h11' | 'h12' | 'h23' | 'h24'\n" +
            " • languageDisplay: 'dialect' | 'standard'\n" +
            ' • numeric: true/false',
        },
      ],
      description:
        'Конструктор объектов для работы с языковыми тегами. Предоставляет информацию о локали и методы для её модификации.\n' +
        'Созданный объект предоставляет следующие свойства:\n' +
        '• language — код языка\n' +
        '• script — код скрипта (если указан)\n' +
        '• region — код региона (если указан)\n' +
        '• baseName — базовое имя локали (язык + регион/скрипт)\n' +
        '• calendar — календарь (если указан)\n' +
        '• numberingSystem — система счисления (если указана)\n' +
        '• collation — тип сортировки (если указан)\n' +
        '• hourCycle — цикл часов (если указан)\n' +
        '• caseFirst — порядок регистра (если указан)\n' +
        '• numeric — числовое сравнение (если указано)\n' +
        '• toString() — возвращает строковое представление локали',
      example:
        '// Создание базовой локали\n' +
        "const locale = new Intl.Locale('en-US');\n" +
        "console.log(locale.language); // 'en'\n" +
        "console.log(locale.region); // 'US'\n" +
        "console.log(locale.baseName); // 'en-US'\n" +
        "console.log(locale.toString()); // 'en-US'\n\n" +
        '// Русский язык\n' +
        "const ruLocale = new Intl.Locale('ru-RU');\n" +
        "console.log(ruLocale.language); // 'ru'\n" +
        "console.log(ruLocale.region); // 'RU'\n\n" +
        '// С указанием скрипта (сербский кириллицей)\n' +
        "const srLocale = new Intl.Locale('sr-Cyrl-RS');\n" +
        "console.log(srLocale.script); // 'Cyrl'\n" +
        "console.log(srLocale.region); // 'RS'\n\n" +
        '// Модификация через options\n' +
        "const modified = new Intl.Locale('en-US', {\n" +
        "  numberingSystem: 'latn',\n" +
        "  calendar: 'gregory'\n" +
        '});\n' +
        "console.log(modified.toString()); // 'en-US-u-ca-gregory-nu-latn'\n" +
        "console.log(modified.numberingSystem); // 'latn'\n\n" +
        '// Язык без региона\n' +
        "const simpleLocale = new Intl.Locale('ru');\n" +
        "console.log(simpleLocale.language); // 'ru'\n" +
        'console.log(simpleLocale.region); // undefined',
      specification: 'https://tc39.es/ecma402/#sec-intl-locale-constructor',
      errors: 'RangeError — если недопустимые (locales) или (options).',
    },
    {
      name: 'Intl.getCanonicalLocales',
      syntax: 'Intl.getCanonicalLocales(locales)',
      parameters: [
        {
          name: 'locales',
          description:
            'Строка или массив строк с кодами локалей для канонизации ("en-us", ["ru", "EN-gb"] и тд)',
        },
      ],
      description:
        'Статический метод, возвращающий массив канонических кодов локалей.\n' +
        'Приводит коды к стандартному виду: приводит регистр, заменяет устаревшие коды, удаляет некорректные расширения.\n' +
        'Возвращает массив строк с каноническими кодами локалей в том же порядке, что и входные данные.\n' +
        'Если входной параметр — строка, она преобразуется в массив с одним элементом.\n' +
        'При обнаружении некорректного кода локали выбрасывает исключение RangeError.',
      example:
        "console.log(Intl.getCanonicalLocales('en-us')); // ['en-US']\n" +
        "console.log(Intl.getCanonicalLocales(['ru', 'EN-gb'])); // ['ru', 'en-GB']\n" +
        "console.log(Intl.getCanonicalLocales('zh-Hant-CN')); // ['zh-Hant-CN']\n" +
        '// Попытка передать некорректный код\n' +
        'try {\n' +
        "  Intl.getCanonicalLocales('12');\n" +
        '} catch (e) {\n' +
        "  console.log(e.name); // 'RangeError'\n" +
        '}',
      specification: 'https://tc39.es/ecma402/#sec-intl.getcanonicallocales',
      errors: 'RangeError — если хотя бы один из (locales) невалиден.',
    },
    {
      name: 'Intl.supportedValuesOf',
      syntax: 'Intl.supportedValuesOf(key)',
      parameters: [
        {
          name: 'key',
          description:
            "Тип значений: 'calendar' | 'collation' | 'currency' | 'numberingSystem' | 'timeZone' | 'unit'",
        },
      ],
      description:
        'Статический метод, возвращающий массив поддерживаемых значений для указанного ключа.\n' +
        'Возвращает отсортированный массив уникальных строк, которые гарантированно поддерживаются реализацией.\n' +
        'Может использоваться для проверки доступности календарей, валют, часовых поясов и т.д. перед использованием в других Intl-конструкторах.',
      example:
        '// Поддерживаемые календари\n' +
        "console.log(Intl.supportedValuesOf('calendar'));\n" +
        "// ['buddhist', 'chinese', 'gregory', 'hebrew', ...]\n\n" +
        '// Поддерживаемые валюты\n' +
        "console.log(Intl.supportedValuesOf('currency'));\n" +
        "// ['AED', 'AFN', 'ALL', 'AMD', ...]\n\n" +
        '// Поддерживаемые часовые пояса\n' +
        "console.log(Intl.supportedValuesOf('timeZone'));\n" +
        "// ['Africa/Abidjan', 'Africa/Accra', ...]\n\n" +
        '// Поддерживаемые единицы измерения\n' +
        "console.log(Intl.supportedValuesOf('unit'));\n" +
        "// ['acre', 'bit', 'byte', 'celsius', ...]",
      specification: 'https://tc39.es/ecma402/#sec-intl.supportedvaluesof',
      errors: 'RangeError — если передан недопустимый ключ.',
    },
  ],
};
