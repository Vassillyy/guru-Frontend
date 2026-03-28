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
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US')",
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
        'Конструктор объектов для форматирования дат и времени с учётом локали. Возвращает объект с методом format().',
      example:
        "const date = new Date('2024-03-15T14:30:00');\n\n" +
        '// Русский формат\n' +
        "const ruFormat = new Intl.DateTimeFormat('ru-RU');\n" +
        "console.log(ruFormat.format(date)); // '15.3.2024'\n\n" +
        '// Американский формат\n' +
        "const usFormat = new Intl.DateTimeFormat('en-US');\n" +
        "console.log(usFormat.format(date)); // '3/15/2024'\n\n" +
        '// С настройками\n' +
        'const options = {\n' +
        "  year: 'numeric',\n" +
        "  month: 'long',\n" +
        "  day: 'numeric',\n" +
        "  hour: '2-digit',\n" +
        "  minute: '2-digit'\n" +
        '};\n' +
        "const detailed = new Intl.DateTimeFormat('ru-RU', options);\n" +
        "console.log(detailed.format(date)); // '15 марта 2024 г. в 14:30'",
      specification: 'https://tc39.es/ecma402/#intl.datetimeformat',
      errors: 'RangeError — если недопустимая лока или опции.',
    },
    {
      name: 'Intl.NumberFormat',
      syntax: 'new Intl.NumberFormat([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US')",
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
        'Конструктор объектов для форматирования чисел с учётом локали. Возвращает объект с методом format().',
      example:
        'const number = 1234567.89;\n\n' +
        '// Русский формат\n' +
        "const ruFormat = new Intl.NumberFormat('ru-RU');\n" +
        "console.log(ruFormat.format(number)); // '1 234 567,89'\n\n" +
        '// Американский формат\n' +
        "const usFormat = new Intl.NumberFormat('en-US');\n" +
        "console.log(usFormat.format(number)); // '1,234,567.89'\n\n" +
        '// Валюта\n' +
        "const currency = new Intl.NumberFormat('ru-RU', {\n" +
        "  style: 'currency',\n" +
        "  currency: 'RUB'\n" +
        '});\n' +
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
        "console.log(compact.format(1234567)); // '1.2M'",
      specification: 'https://tc39.es/ecma402/#intl.numberformat',
      errors: 'RangeError — если недопустимая лока или опции.',
    },
    {
      name: 'Intl.PluralRules',
      syntax: 'new Intl.PluralRules([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US')",
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
        'Конструктор объектов для определения множественной формы числа в соответствии с правилами локали. Возвращает объект с методом select().',
      example:
        '// Русский язык (3 формы)\n' +
        "const ruRules = new Intl.PluralRules('ru-RU');\n" +
        "console.log(ruRules.select(1)); // 'one' (1 файл)\n" +
        "console.log(ruRules.select(2)); // 'few' (2 файла)\n" +
        "console.log(ruRules.select(5)); // 'many' (5 файлов)\n" +
        "console.log(ruRules.select(0)); // 'many' (0 файлов)\n\n" +
        '// Английский язык (2 формы)\n' +
        "const enRules = new Intl.PluralRules('en-US');\n" +
        "console.log(enRules.select(1)); // 'one' (1 file)\n" +
        "console.log(enRules.select(2)); // 'other' (2 files)\n\n" +
        '// Порядковые числительные\n' +
        "const ordinal = new Intl.PluralRules('en-US', { type: 'ordinal' });\n" +
        "console.log(ordinal.select(1)); // 'one' (1st)\n" +
        "console.log(ordinal.select(2)); // 'two' (2nd)\n" +
        "console.log(ordinal.select(3)); // 'few' (3rd)\n" +
        "console.log(ordinal.select(4)); // 'other' (4th)",
      specification: 'https://tc39.es/ecma402/#intl.pluralrules',
      errors: 'RangeError — если недопустимая лока или опции.',
    },
    {
      name: 'Intl.Collator',
      syntax: 'new Intl.Collator([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US')",
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
        'Конструктор объектов для сравнения строк с учётом правил локали. Возвращает объект с методами compare() и resolvedOptions().',
      example:
        "const names = ['Анна', 'Борис', 'алексей', 'борис'];\n\n" +
        '// Сортировка по-русски\n' +
        "const ruCollator = new Intl.Collator('ru-RU');\n" +
        'console.log(names.sort(ruCollator.compare));\n' +
        "// ['алексей', 'Анна', 'Борис', 'борис']\n\n" +
        '// Сортировка с игнорированием регистра\n' +
        "const caseInsensitive = new Intl.Collator('ru-RU', {\n" +
        "  sensitivity: 'base'\n" +
        '});\n' +
        'console.log(names.sort(caseInsensitive.compare));\n' +
        "// ['Анна', 'алексей', 'Борис', 'борис']\n\n" +
        '// Числовое сравнение\n' +
        "const numbers = ['10', '2', '1', '20'];\n" +
        "const numericCollator = new Intl.Collator('ru-RU', {\n" +
        '  numeric: true\n' +
        '});\n' +
        'console.log(numbers.sort(numericCollator.compare));\n' +
        "// ['1', '2', '10', '20']",
      specification: 'https://tc39.es/ecma402/#intl.collator',
      errors: 'RangeError — если недопустимая лока или опции.',
    },
    {
      name: 'Intl.DisplayNames',
      syntax: 'new Intl.DisplayNames(locales[, options])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US')",
        },
        {
          name: 'options',
          description:
            'Объект с настройками:\n' +
            " • type: 'language' | 'region' | 'script' | 'calendar' | 'currency' | 'dateTimeField' | 'key' (по умолчанию 'language')\n" +
            " • languageDisplay: 'dialect' | 'standard' (по умолчанию 'dialect')",
        },
      ],
      description:
        'Конструктор объектов для получения локализованных названий языков, регионов, скриптов, валют и других элементов. Возвращает объект с методом of().',
      example:
        '// Названия языков\n' +
        "const ruLang = new Intl.DisplayNames('ru-RU', { type: 'language' });\n" +
        "console.log(ruLang.of('en')); // 'английский'\n" +
        "console.log(ruLang.of('de')); // 'немецкий'\n" +
        "console.log(ruLang.of('ja')); // 'японский'\n\n" +
        '// Названия стран\n' +
        "const ruRegion = new Intl.DisplayNames('ru-RU', { type: 'region' });\n" +
        "console.log(ruRegion.of('US')); // 'Соединенные Штаты'\n" +
        "console.log(ruRegion.of('DE')); // 'Германия'\n" +
        "console.log(ruRegion.of('JP')); // 'Япония'\n\n" +
        '// Названия валют\n' +
        "const ruCurrency = new Intl.DisplayNames('ru-RU', { type: 'currency' });\n" +
        "console.log(ruCurrency.of('USD')); // 'доллар США'\n" +
        "console.log(ruCurrency.of('EUR')); // 'евро'\n" +
        "console.log(ruCurrency.of('RUB')); // 'российский рубль'",
      specification: 'https://tc39.es/ecma402/#intl.displaynames',
      errors:
        'RangeError — если недопустимая лока или опции.\n' +
        'TypeError — если метод of() вызван с недопустимым кодом.',
    },
    {
      name: 'Intl.ListFormat',
      syntax: 'new Intl.ListFormat([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US')",
        },
        {
          name: 'options',
          description:
            'Объект с настройками:\n' +
            " • type: 'conjunction' (и) | 'disjunction' (или) | 'unit' (без разделителя)\n" +
            " • style: 'long' | 'short' | 'narrow'",
        },
      ],
      description:
        'Конструктор объектов для форматирования списков с учётом локали. Возвращает объект с методом format().',
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
        '// Короткий стиль\n' +
        "const shortFormat = new Intl.ListFormat('ru-RU', {\n" +
        "  style: 'short'\n" +
        '});\n' +
        'console.log(shortFormat.format(items));\n' +
        "// 'яблоки, бананы, апельсины'\n\n" +
        '// Английский формат\n' +
        "const enFormat = new Intl.ListFormat('en-US');\n" +
        'console.log(enFormat.format(items));\n' +
        "// 'яблоки, бананы и апельсины' (перевод зависит от входных данных)",
      specification: 'https://tc39.es/ecma402/#intl.listformat',
      errors: 'RangeError — если недопустимая лока или опции.',
    },
    {
      name: 'Intl.RelativeTimeFormat',
      syntax: 'new Intl.RelativeTimeFormat([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US')",
        },
        {
          name: 'options',
          description:
            'Объект с настройками:\n' +
            " • localeMatcher: 'best fit' | 'lookup'\n" +
            " • numeric: 'auto' | 'always'\n" +
            " • style: 'long' | 'short' | 'narrow'",
        },
      ],
      description:
        'Конструктор объектов для форматирования относительного времени (например, «вчера», «через 2 дня»). Возвращает объект с методом format().',
      example:
        "const rtf = new Intl.RelativeTimeFormat('ru-RU', {\n" +
        "  numeric: 'auto'\n" +
        '});\n\n' +
        "console.log(rtf.format(-1, 'day')); // 'вчера'\n" +
        "console.log(rtf.format(1, 'day')); // 'завтра'\n" +
        "console.log(rtf.format(-3, 'hour')); // '3 часа назад'\n" +
        "console.log(rtf.format(2, 'week')); // 'через 2 недели'\n" +
        "console.log(rtf.format(0, 'second')); // 'сейчас'\n\n" +
        '// Всегда показывать числа\n' +
        "const alwaysNumeric = new Intl.RelativeTimeFormat('ru-RU', {\n" +
        "  numeric: 'always'\n" +
        '});\n' +
        "console.log(alwaysNumeric.format(-1, 'day')); // '1 день назад'\n" +
        "console.log(alwaysNumeric.format(1, 'day')); // 'через 1 день'",
      specification: 'https://tc39.es/ecma402/#intl.relativetimeformat',
      errors: 'RangeError — если недопустимая лока или опции.',
    },
    {
      name: 'Intl.Segmenter',
      syntax: 'new Intl.Segmenter([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка или массив строк с кодом локали ('ru-RU', 'en-US')",
        },
        {
          name: 'options',
          description:
            'Объект с настройками:\n' +
            " • granularity: 'grapheme' | 'word' | 'sentence' (по умолчанию 'grapheme')",
        },
      ],
      description:
        'Конструктор объектов для сегментации текста на графемы, слова или предложения с учётом правил локали. Возвращает объект с методом segment().',
      example:
        '// Сегментация по графемам\n' +
        "const graphemeSegmenter = new Intl.Segmenter('ru-RU', {\n" +
        "  granularity: 'grapheme'\n" +
        '});\n' +
        "const text = 'Привет!';\n" +
        'const segments = graphemeSegmenter.segment(text);\n' +
        'for (const segment of segments) {\n' +
        '  console.log(segment.segment);\n' +
        '}\n' +
        "// 'П', 'р', 'и', 'в', 'е', 'т', '!'\n\n" +
        '// Сегментация по словам (английский)\n' +
        "const wordSegmenter = new Intl.Segmenter('en-US', {\n" +
        "  granularity: 'word'\n" +
        '});\n' +
        "const sentence = 'Hello world!';\n" +
        'const words = wordSegmenter.segment(sentence);\n' +
        'for (const word of words) {\n' +
        '  console.log(word.segment);\n' +
        '}\n' +
        "// 'Hello', ' ', 'world', '!'\n\n" +
        '// Сегментация по предложениям\n' +
        "const sentenceSegmenter = new Intl.Segmenter('en-US', {\n" +
        "  granularity: 'sentence'\n" +
        '});\n' +
        "const paragraph = 'First sentence. Second sentence!';\n" +
        'const sentences = sentenceSegmenter.segment(paragraph);\n' +
        'for (const sentence of sentences) {\n' +
        '  console.log(sentence.segment);\n' +
        '}\n' +
        "// 'First sentence.', ' ', 'Second sentence!'",
      specification: 'https://tc39.es/ecma402/#intl.segmenter',
      errors: 'RangeError — если недопустимая лока или опции.',
    },
    {
      name: 'Intl.Locale',
      syntax: 'new Intl.Locale(tag[, options])',
      parameters: [
        {
          name: 'tag',
          description: 'Строка с языковым тегом (например, "en-US")',
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
        'Конструктор объектов для работы с языковыми тегами. Предоставляет информацию о локали и методы для её модификакации. Возвращает объект со свойствами: baseName, calendar, caseFirst, collation, hourCycle, language, numberingSystem, numeric, region, script, toString().',
      example:
        '// Создание локали\n' +
        "const locale = new Intl.Locale('en-US');\n" +
        "console.log(locale.language); // 'en'\n" +
        "console.log(locale.region); // 'US'\n" +
        "console.log(locale.baseName); // 'en-US'\n\n" +
        '// Модификация локали\n' +
        "const modified = new Intl.Locale('en-US', {\n" +
        "  numberingSystem: 'latn',\n" +
        "  calendar: 'gregory'\n" +
        '});\n' +
        "console.log(modified.toString()); // 'en-US-u-ca-gregory-nu-latn'\n\n" +
        '// Русский язык\n' +
        "const ruLocale = new Intl.Locale('ru-RU');\n" +
        "console.log(ruLocale.language); // 'ru'\n" +
        "console.log(ruLocale.region); // 'RU'\n" +
        'console.log(ruLocale.script); // undefined (не указан)\n\n' +
        '// С указанием скрипта\n' +
        "const cyrlLocale = new Intl.Locale('sr-Cyrl-RS');\n" +
        "console.log(cyrlLocale.script); // 'Cyrl'\n" +
        "console.log(cyrlLocale.region); // 'RS'\n" +
        "console.log(cyrlLocale.language); // 'sr'",
      specification: 'https://tc39.es/ecma402/#intl.locale',
      errors: 'RangeError — если недопустимый языковой тег или опции.',
    },
    {
      name: 'Intl.getCanonicalLocales',
      syntax: 'Intl.getCanonicalLocales(locales)',
      parameters: [
        {
          name: 'locales',
          description:
            'Строка или массив строк с кодами локалей для канонизации',
        },
      ],
      description:
        'Статический метод, возвращает массив канонических кодов локалей. Приводит коды к стандартному виду (например, "en-us" → "en-US").',
      example:
        "console.log(Intl.getCanonicalLocales('en-us')); // ['en-US']\n" +
        "console.log(Intl.getCanonicalLocales(['ru', 'EN-gb']));\n" +
        "// ['ru', 'en-GB']\n" +
        "console.log(Intl.getCanonicalLocales('invalid-locale'));\n" +
        '// RangeError',
      specification: 'https://tc39.es/ecma402/#sec-intl.getcanonicallocales',
      errors: 'RangeError — если недопустимый код локали.',
    },
    {
      name: 'Intl.supportedValuesOf',
      syntax: 'Intl.supportedValuesOf(key)',
      parameters: [
        {
          name: 'key',
          description:
            "Тип значений: 'calendar' | 'collation' | 'currency' | 'key' | 'numberingSystem' | 'timeZone' | 'unit'",
        },
      ],
      description:
        'Статический метод, возвращает массив поддерживаемых значений для указанного ключа.',
      example:
        '// Поддерживаемые календари\n' +
        "console.log(Intl.supportedValuesOf('calendar'));\n" +
        "// ['buddhist', 'chinese', 'gregory', 'hebrew', ...]\n\n" +
        '// Поддерживаемые валюты\n' +
        "console.log(Intl.supportedValuesOf('currency'));\n" +
        "// ['ADP', 'AED', 'AFA', 'AFN', ...]\n\n" +
        '// Поддерживаемые часовые пояса\n' +
        "console.log(Intl.supportedValuesOf('timeZone'));\n" +
        "// ['Africa/Abidjan', 'Africa/Accra', ...]\n\n" +
        '// Поддерживаемые единицы измерения\n' +
        "console.log(Intl.supportedValuesOf('unit'));\n" +
        "// ['acre', 'bit', 'byte', 'celsius', ...]",
      specification: 'https://tc39.es/ecma402/#sec-intl.supportedvaluesof',
      errors: 'RangeError — если недопустимый ключ.',
    },
  ],
};
