import { Methods, type IMethod } from '@/entities/method';

export const configDate: Record<Methods.DATE, IMethod[]> = {
  [Methods.DATE]: [
    {
      name: 'getFullYear()',
      syntax: 'date.getFullYear()',
      description:
        'Метод объекта Date, возвращает год (4 цифры) исходной даты по местному времени.',
      example:
        "const date = new Date('2023-12-15');\n" +
        'const year = date.getFullYear();\n' +
        'console.log(year); // год по местному времени (2023 по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getfullyear',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'setFullYear()',
      syntax: 'date.setFullYear(year[, month[, day]])',
      parameters: [
        {
          name: 'year',
          description: 'Год (4 цифры)',
        },
        {
          name: 'month',
          description: 'Месяц (0-11)',
        },
        {
          name: 'day',
          description: 'День месяца (1-31)',
        },
      ],
      description:
        'Метод объекта Date, устанавливает year исходной даты по местному времени. Дополнительно может установить month и day. Возвращает таймстамп обновлённой даты.',
      example:
        "const date = new Date('2023-01-15');\n" +
        'const timestamp = date.setFullYear(2024);\n' +
        'const year = date.getFullYear();\n' +
        'console.log(year); // год по местному времени (2024 по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setfullyear',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getUTCFullYear()',
      syntax: 'date.getUTCFullYear()',
      description:
        'Метод объекта Date, возвращает год (4 цифры) исходной даты по всемирному координированному времени (UTC), игнорируя часовой пояс.',
      example:
        "const date = new Date('2023-12-15T23:00:00Z');\n" +
        'const utcYear = date.getUTCFullYear();\n' +
        'const localYear = date.getFullYear();\n' +
        'console.log(utcYear); // 2023\n' +
        'console.log(localYear); // год по местному времени (2023 по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcfullyear',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'setUTCFullYear()',
      syntax: 'date.setUTCFullYear(year[, month[, day]])',
      parameters: [
        {
          name: 'year',
          description: 'Год (4 цифры)',
        },
        {
          name: 'month',
          description: 'Месяц (0-11)',
        },
        {
          name: 'day',
          description: 'День месяца (1-31)',
        },
      ],
      description:
        'Метод объекта Date, устанавливает year исходной даты по всемирному координированному времени (UTC). Дополнительно может установить month и day. Возвращает таймстамп обновлённой даты.',
      example:
        "const date = new Date('2023-01-15T00:00:00Z');\n" +
        'const timestamp = date.setUTCFullYear(2025);\n' +
        'const year = date.getUTCFullYear();\n' +
        'console.log(year); // 2025',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcfullyear',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getMonth()',
      syntax: 'date.getMonth()',
      description:
        'Метод объекта Date, возвращает месяц исходной даты по местному времени. Месяцы нумеруются с 0 (январь) до 11 (декабрь).',
      example:
        "const summer = new Date('2024-06-15');\n" +
        'const month = summer.getMonth();\n' +
        'console.log(month); // месяц по местному времени (5 - июнь по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getmonth',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'setMonth()',
      syntax: 'date.setMonth(month[, day])',
      parameters: [
        {
          name: 'month',
          description: 'Месяц (0-11)',
        },
        {
          name: 'day',
          description: 'День месяца (1-31)',
        },
      ],
      description:
        'Метод объекта Date, устанавливает month исходной даты по местному времени. Дополнительно может установить day. Возвращает таймстамп обновлённой даты.',
      example:
        "const date = new Date('2024-01-15');\n" +
        'const timestamp = date.setMonth(5);\n' +
        'const month = date.getMonth();\n' +
        'console.log(month); // месяц по местному времени (5 - июнь по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setmonth',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getUTCMonth()',
      syntax: 'date.getUTCMonth()',
      description:
        'Метод объекта Date, возвращает месяц исходной даты по всемирному координированному времени (UTC). Месяцы нумеруются с 0 (январь) до 11 (декабрь).',
      example:
        "const date = new Date('2024-01-01T00:00:00Z');\n" +
        'console.log(date.getUTCMonth()); // 0 - январь',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcmonth',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'setUTCMonth()',
      syntax: 'date.setUTCMonth(month[, day])',
      parameters: [
        {
          name: 'month',
          description: 'Месяц (0-11)',
        },
        {
          name: 'day',
          description: 'День месяца (1-31)',
        },
      ],
      description:
        'Метод объекта Date, устанавливает month исходной даты по всемирному координированному времени (UTC). Дополнительно может установить day. Возвращает таймстамп обновлённой даты.',
      example:
        "const date = new Date('2024-01-15T12:00:00Z');\n" +
        'const timestamp = date.setUTCMonth(8);\n' +
        'const month = date.getUTCMonth();\n' +
        'console.log(month); // 8 - сентябрь',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcmonth',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getDate()',
      syntax: 'date.getDate()',
      description:
        'Метод объекта Date, возвращает день месяца (от 1 до 31) исходной даты по местному времени.',
      example:
        "const birthday = new Date('2024-05-20');\n" +
        'const day = birthday.getDate();\n' +
        'console.log(day); // день по местному времени (20 по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getdate',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'setDate()',
      syntax: 'date.setDate(day)',
      parameters: [
        {
          name: 'day',
          description: 'День месяца (1-31)',
        },
      ],
      description:
        'Метод объекта Date, устанавливает day месяца исходной даты по местному времени. Возвращает таймстамп обновлённой даты.',
      example:
        "const date = new Date('2024-01-10');\n" +
        'const timestamp = date.setDate(25);\n' +
        'const day = date.getDate();\n' +
        'console.log(day); // день по местному времени (25 по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setdate',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getUTCDate()',
      syntax: 'date.getUTCDate()',
      description:
        'Метод объекта Date, возвращает день месяца (от 1 до 31) исходной даты по всемирному координированному времени (UTC).',
      example:
        "const date = new Date('2024-12-31T23:59:59Z');\n" +
        'console.log(date.getUTCDate()); // 31',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcdate',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'setUTCDate()',
      syntax: 'date.setUTCDate(day)',
      parameters: [
        {
          name: 'day',
          description: 'День месяца (1-31)',
        },
      ],
      description:
        'Метод объекта Date, устанавливает day месяца исходной даты по всемирному координированному времени (UTC). Возвращает таймстамп обновлённой даты.',
      example:
        "const date = new Date('2024-03-10T12:00:00Z');\n" +
        'const timestamp = date.setUTCDate(15);\n' +
        'const day = date.getUTCDate();\n' +
        'console.log(day); // 15',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcdate',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getHours()',
      syntax: 'date.getHours()',
      description:
        'Метод объекта Date, возвращает часы (0-23) исходной даты по местному времени.',
      example:
        "const morning = new Date('2024-05-20T09:15:00');\n" +
        'const hours = morning.getHours();\n' +
        'console.log(hours); // часы по местному времени (9 по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.gethours',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'setHours()',
      syntax: 'date.setHours(hours[, minutes[, seconds[, milliseconds]]])',
      parameters: [
        {
          name: 'hours',
          description: 'Часы (0-23)',
        },
        {
          name: 'minutes',
          description: 'Минуты (0-59)',
        },
        {
          name: 'seconds',
          description: 'Секунды (0-59)',
        },
        {
          name: 'milliseconds',
          description: 'Миллисекунды (0-999)',
        },
      ],
      description:
        'Метод объекта Date, устанавливает hours исходной даты по местному времени. Дополнительно может установить minutes, seconds и milliseconds. Возвращает таймстамп обновлённой даты.',
      example:
        "const date = new Date('2024-01-01T00:00:00');\n" +
        'const timestamp = date.setHours(14);\n' +
        'const hours = date.getHours();\n' +
        'console.log(hours); // часы по местному времени (14 по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.sethours',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getUTCHours()',
      syntax: 'date.getUTCHours()',
      description:
        'Метод объекта Date, возвращает часы (0-23) исходной даты по всемирному координированному времени (UTC).',
      example:
        "const date = new Date('2024-01-01T20:00:00Z');\n" +
        'const hours = date.getUTCHours();\n' +
        'console.log(hours); // 20',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutchours',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'setUTCHours()',
      syntax: 'date.setUTCHours(hours[, minutes[, seconds[, milliseconds]]])',
      parameters: [
        {
          name: 'hours',
          description: 'Часы (0-23)',
        },
        {
          name: 'minutes',
          description: 'Минуты (0-59)',
        },
        {
          name: 'seconds',
          description: 'Секунды (0-59)',
        },
        {
          name: 'milliseconds',
          description: 'Миллисекунды (0-999)',
        },
      ],
      description:
        'Метод объекта Date, устанавливает hours исходной даты по всемирному координированному времени (UTC). Дополнительно может установить minutes, seconds и milliseconds. Возвращает таймстамп обновлённой даты.',
      example:
        "const date = new Date('2024-01-01T00:00:00Z');\n" +
        'const timestamp = date.setUTCHours(15);\n' +
        'const hours = date.getUTCHours();\n' +
        'console.log(hours); // 15',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutchours',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getMinutes()',
      syntax: 'date.getMinutes()',
      description:
        'Метод объекта Date, возвращает минуты (0-59) исходной даты по местному времени.',
      example:
        "const date = new Date('2024-01-01T14:30:00');\n" +
        'const minutes = date.getMinutes();\n' +
        'console.log(minutes); // минуты по местному времени (30 по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getminutes',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'setMinutes()',
      syntax: 'date.setMinutes(minutes[, seconds[, milliseconds]])',
      parameters: [
        {
          name: 'minutes',
          description: 'Минуты (0-59)',
        },
        {
          name: 'seconds',
          description: 'Секунды (0-59)',
        },
        {
          name: 'milliseconds',
          description: 'Миллисекунды (0-999)',
        },
      ],
      description:
        'Метод объекта Date, устанавливает minutes исходной даты по местному времени. Дополнительно может установить seconds и milliseconds. Возвращает таймстамп обновлённой даты.',
      example:
        "const date = new Date('2024-03-10T12:00:00');\n" +
        'const timestamp = date.setMinutes(15);\n' +
        'const minutes = date.getMinutes();\n' +
        'console.log(minutes); // минуты по местному времени (15 по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setminutes',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getUTCMinutes()',
      syntax: 'date.getUTCMinutes()',
      description:
        'Метод объекта Date, возвращает минуты (0-59) исходной даты по всемирному координированному времени (UTC).',
      example:
        "const date = new Date('2024-01-01T14:30:00Z');\n" +
        'const minutes = date.getUTCMinutes();\n' +
        'console.log(minutes); // 30',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcminutes',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'setUTCMinutes()',
      syntax: 'date.setUTCMinutes(minutes[, seconds[, milliseconds]])',
      parameters: [
        {
          name: 'minutes',
          description: 'Минуты (0-59)',
        },
        {
          name: 'seconds',
          description: 'Секунды (0-59)',
        },
        {
          name: 'milliseconds',
          description: 'Миллисекунды (0-999)',
        },
      ],
      description:
        'Метод объекта Date, устанавливает minutes исходной даты по всемирному координированному времени (UTC). Дополнительно может установить seconds и milliseconds. Возвращает таймстамп обновлённой даты.',
      example:
        "const date = new Date('2024-01-01T12:00:00Z');\n" +
        'const timestamp = date.setUTCMinutes(45);\n' +
        'const minutes = date.getUTCMinutes();\nconsole.log(minutes); // 45',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcminutes',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getSeconds()',
      syntax: 'date.getSeconds()',
      description:
        'Метод объекта Date, возвращает секунды (0-59) исходной даты по местному времени.',
      example:
        "const date = new Date('2024-01-01T12:30:45');\n" +
        'const seconds = date.getSeconds();\n' +
        'console.log(seconds); // секунды по местному времени (45 по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getseconds',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'setSeconds()',
      syntax: 'date.setSeconds(seconds[, milliseconds])',
      parameters: [
        {
          name: 'seconds',
          description: 'Секунды (0-59)',
        },
        {
          name: 'milliseconds',
          description: 'Миллисекунды (0-999)',
        },
      ],
      description:
        'Метод объекта Date, устанавливает seconds исходной даты по местному времени. Дополнительно может установить milliseconds. Возвращает таймстамп обновлённой даты.',
      example:
        "const date = new Date('2024-01-01T12:30:00');\n" +
        'const timestamp = date.setSeconds(45);\n' +
        'const seconds = date.getSeconds();\n' +
        'console.log(seconds); // секунды по местному времени (45 по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setseconds',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getUTCSeconds()',
      syntax: 'date.getUTCSeconds()',
      description:
        'Метод объекта Date, возвращает секунды (0-59) исходной даты по всемирному координированному времени (UTC).',
      example:
        "const date = new Date('2024-01-01T12:30:45Z');\n" +
        'const seconds = date.getUTCSeconds();\n' +
        'console.log(seconds); // 45',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcseconds',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'setUTCSeconds()',
      syntax: 'date.setUTCSeconds(seconds[, milliseconds])',
      parameters: [
        {
          name: 'seconds',
          description: 'Секунды (0-59)',
        },
        {
          name: 'milliseconds',
          description: 'Миллисекунды (0-999)',
        },
      ],
      description:
        'Метод объекта Date, устанавливает seconds исходной даты по всемирному координированному времени (UTC). Дополнительно может установить milliseconds. Возвращает таймстамп обновлённой даты.',
      example:
        "const date = new Date('2024-01-01T12:30:00Z');\n" +
        'const timestamp = date.setUTCSeconds(45);\n' +
        'const seconds = date.getUTCSeconds();\n' +
        'console.log(seconds); // 45',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcseconds',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getMilliseconds()',
      syntax: 'date.getMilliseconds()',
      description:
        'Метод объекта Date, возвращает миллисекунды (0-999) исходной даты по местному времени.',
      example:
        "const date = new Date('2024-01-01T12:30:45.500');\n" +
        'const mils = date.getMilliseconds();\n' +
        'console.log(mils); // миллисекунды по местному времени (500 по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getmilliseconds',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'setMilliseconds()',
      syntax: 'date.setMilliseconds(milliseconds)',
      parameters: [
        {
          name: 'milliseconds',
          description: 'Миллисекунды (0-999)',
        },
      ],
      description:
        'Метод объекта Date, устанавливает milliseconds исходной даты по местному времени. Возвращает таймстамп обновлённой даты.',
      example:
        "const date = new Date('2024-01-01T12:30:45.000');\n" +
        'const timestamp = date.setMilliseconds(50);\n' +
        'const ms = date.getMilliseconds();\n' +
        'console.log(ms); // миллисекунды по местному времени (50 по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setmilliseconds',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getUTCMilliseconds()',
      syntax: 'date.getUTCMilliseconds()',
      description:
        'Метод объекта Date, возвращает миллисекунды (0-999) исходной даты по всемирному координированному времени (UTC).',
      example:
        "const date = new Date('2024-01-01T12:30:45.750Z');\n" +
        'const milliseconds = date.getUTCMilliseconds();\n' +
        'console.log(milliseconds); // 750',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcmilliseconds',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'setUTCMilliseconds()',
      syntax: 'date.setUTCMilliseconds(milliseconds)',
      parameters: [
        {
          name: 'milliseconds',
          description: 'Миллисекунды (0-999)',
        },
      ],
      description:
        'Метод объекта Date, устанавливает milliseconds исходной даты по всемирному координированному времени (UTC). Возвращает таймстамп обновлённой даты.',
      example:
        "const date = new Date('2024-01-01T12:30:45.000Z');\n" +
        'const timestamp = date.setUTCMilliseconds(50);\n' +
        'const ms = date.getUTCMilliseconds();\n' +
        'console.log(ms); // 50',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcmilliseconds',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getDay()',
      syntax: 'date.getDay()',
      description:
        'Метод объекта Date, возвращает день недели (0-6) исходной даты по местному времени, где 0 соответствует воскресенью.',
      example:
        "const date = new Date('2024-01-01');\n" +
        'const day = date.getDay();\n' +
        'console.log(day); // 1 (понедельник по Москве)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getday',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getUTCDay()',
      syntax: 'date.getUTCDay()',
      description:
        'Метод объекта Date, возвращает день недели (0-6) исходной даты по всемирному координированному времени (UTC), где 0 соответствует воскресенью.',
      example:
        "const date = new Date('2024-01-01T00:00:00Z');\n" +
        'const day = date.getUTCDay();\n' +
        'console.log(day); // 1 - понедельник',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcday',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getTime()',
      syntax: 'date.getTime()',
      description:
        'Метод объекта Date, возвращает таймстамп исходной даты (количество миллисекунд с 1 января 1970 года, 00:00:00 UTC).',
      example:
        "const date = new Date('2024-01-01');\n" +
        'const timestamp = date.getTime();\n' +
        'console.log(timestamp); // 1704067200000',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.gettime',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'setTime()',
      syntax: 'date.setTime(time)',
      parameters: [
        {
          name: 'time',
          description: 'Таймпстамп',
        },
      ],
      description:
        'Метод объекта Date, устанавливает дату и время с помощью time. Возвращает таймстамп обновлённой даты.',
      example:
        'const date = new Date();\n' +
        'const timestamp = date.setTime(1704067200000);\n' +
        'const newTime = date.getTime();\nconsole.log(newTime); // 1704067200000',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.settime',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'getTimezoneOffset()',
      syntax: 'date.getTimezoneOffset()',
      description:
        'Метод объекта Date, возвращает разницу в минутах между UTC и местным временем из исходной даты. Значение будет положительным, если местное время отстаёт от UTC, и отрицательным, если опережает.',
      example:
        "const date = new Date('2024-01-01T00:00:00Z');\n" +
        'const offset = date.getTimezoneOffset();\n' +
        'console.log(offset); // -180 (для Москвы, UTC+3)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.gettimezoneoffset',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'toString()',
      syntax: 'date.toString()',
      description:
        'Метод объекта Date, возвращает полное строковое представление исходной даты и времени по местному времени. Формат строки: "Day Mon DD YYYY HH:MM:SS GMT+HHMM (TimeZone)".',
      example:
        "const date = new Date('2024-01-15T14:30:45');\n" +
        'const string = date.toString();\n' +
        'console.log(string); // "Mon Jan 15 2024 17:30:45 GMT+0300 (Москва, стандартное время)"',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.tostring',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'toUTCString()',
      syntax: 'date.toUTCString()',
      description:
        'Метод объекта Date, возвращает полное строковое представление исходной даты и времени по всемирному координированному времени (UTC). Формат строки: "Day, DD Mon YYYY HH:MM:SS GMT".',
      example:
        "const date = new Date('2024-01-15T14:30:45');\n" +
        'const utcString = date.toUTCString();\n' +
        'console.log(utcString); // "Mon, 15 Jan 2024 11:30:45 GMT"',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.toutcstring',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'toISOString()',
      syntax: 'date.toISOString()',
      description:
        'Метод объекта Date, возвращает дату в виде строки в формате ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ) по всемирному координированному времени (UTC). Всегда содержит 24 символа (включая миллисекунды и букву Z).',
      example:
        "const date = new Date('2024-01-15T14:30:45.123Z');\n" +
        'const isoString = date.toISOString();\n' +
        'console.log(isoString); // "2024-01-15T14:30:45.123Z"',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.toisostring',
      errors: 'RangeError — если дата некорректна (Invalid Date).',
    },
    {
      name: 'toDateString()',
      syntax: 'date.toDateString()',
      description:
        'Метод объекта Date, возвращает дату в виде человеко-читаемой строки (без времени) по местному времени.',
      example:
        "const date = new Date('2024-01-15T14:30:45');\n" +
        'const dateString = date.toDateString();\n' +
        'console.log(dateString); // "Mon Jan 15 2024" (по местному времени)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.todatestring',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'toTimeString()',
      syntax: 'date.toTimeString()',
      description:
        'Метод объекта Date, возвращает время в виде человеко-читаемой строки (без даты) по местному времени.',
      example:
        "const date = new Date('2024-01-15T14:30:45');\n" +
        'const timeString = date.toTimeString();\n' +
        'console.log(timeString); // "14:30:45 GMT+0300 (MSK)" (по местному времени)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.totimestring',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'toLocaleString()',
      syntax: 'date.toLocaleString([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка с языковым кодом (например, 'ru-RU', 'en-US') или массив таких строк",
        },
        {
          name: 'options',
          description:
            'Объект с настройками форматирования даты и времени:\n' +
            " • weekday: 'long' — полное название дня ('понедельник'), 'short' — короткое ('пн'), 'narrow' — узкое ('п')\n" +
            " • year: 'numeric' — числовой формат ('2024'), '2-digit' — две цифры ('24')\n" +
            " • month: 'numeric' — числовой ('1'), '2-digit' — две цифры ('01'), 'long' — полное название ('январь'), 'short' — короткое ('янв.'), 'narrow' — узкое ('я')\n" +
            " • day: 'numeric' — числовой ('1'), '2-digit' — две цифры ('01')\n" +
            " • hour: 'numeric' — числовой час ('2'), '2-digit' — две цифры ('02')\n" +
            " • minute: 'numeric' — числовые минуты ('5'), '2-digit' — две цифры ('05')\n" +
            " • second: 'numeric' — числовые секунды ('9'), '2-digit' — две цифры ('09')\n" +
            ' • fractionalSecondDigits: 1, 2 или 3 — количество цифр в дробной части секунды\n' +
            " • era: 'long' — полное название эры ('нашей эры'), 'short' — короткое ('н.э.'), 'narrow' — узкое ('н')\n" +
            " • timeZone: строка с часовым поясом (например, 'Europe/Moscow', 'America/New_York')\n" +
            ' • hour12: true/false — 12-часовой (true) или 24-часовой (false) формат\n' +
            " • timeZoneName: 'long' — полное название ('Москва, стандартное время'), 'short' — короткое ('GMT+3'), 'shortOffset' — короткий офсет ('GMT+3'), 'longOffset' — длинный офсет ('GMT+03:00'), 'shortGeneric' — короткое общее ('MSK'), 'longGeneric' — длинное общее ('московское время')\n" +
            ' • formatMatcher: стратегия подбора формата — "basic" (базовая) или "best fit" (наилучшее соответствие)',
        },
      ],
      description:
        'Метод объекта Date, возвращает дату и время в виде строки с учётом locales и options. Без locales и options использует стандартные настройки операционной системы (язык, формат даты и времени). Объединяет возможности toLocaleDateString() и toLocaleTimeString(). Возвращает строку с отформатированной датой и временем по местному времени.',
      example:
        "const date = new Date('2024-01-15T14:30:45');\n" +
        'const defaultString = date.toLocaleString();\n' +
        "const ruString = date.toLocaleString('ru-RU');\n" +
        "const enString = date.toLocaleString('en-US');\n" +
        "const customString = date.toLocaleString('ru-RU', {\n" +
        "  weekday: 'long',\n" +
        "  year: 'numeric',\n" +
        "  month: 'long',\n" +
        "  day: 'numeric',\n" +
        "  hour: '2-digit',\n" +
        "  minute: '2-digit'\n" +
        '});\n' +
        "console.log(defaultString); // зависит от системы, например '15.01.2024, 14:30:45' (для России)\n" +
        "console.log(ruString); // '15.01.2024, 14:30:45'\n" +
        "console.log(enString); // '1/15/2024, 2:30:45 PM'\n" +
        "console.log(customString); // 'понедельник, 15 января 2024 г. в 14:30'",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.tolocalestring',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'toLocaleDateString()',
      syntax: 'date.toLocaleDateString([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка с языковым кодом (например, 'ru-RU', 'en-US') или массив таких строк",
        },
        {
          name: 'options',
          description:
            'Объект с настройками форматирования даты:\n' +
            " • weekday: 'long' — полное название дня ('понедельник'), 'short' — короткое ('пн'), 'narrow' — узкое ('п')\n" +
            " • year: 'numeric' — числовой формат ('2024'), '2-digit' — две цифры ('24')\n" +
            " • month: 'numeric' — числовой ('1'), '2-digit' — две цифры ('01'), 'long' — полное название ('январь'), 'short' — короткое ('янв.'), 'narrow' — узкое ('я')\n" +
            " • day: 'numeric' — числовой ('1'), '2-digit' — две цифры ('01')\n" +
            " • era: 'long' — полное название эры ('нашей эры'), 'short' — короткое ('н.э.'), 'narrow' — узкое ('н')\n" +
            " • timeZone: строка с часовым поясом (например, 'Europe/Moscow', 'America/New_York')\n" +
            ' • hour12: true/false — 12-часовой или 24-часовой формат\n' +
            ' • formatMatcher: стратегия подбора формата — "basic" (базовая) или "best fit" (наилучшее соответствие)',
        },
      ],
      description:
        'Метод объекта Date, возвращает дату в виде строки с учётом locales и options. Без locales и options использует стандартные настройки операционной системы (язык и формат даты). Позволяет гибко настраивать формат вывода (год, месяц, день и т.д.) по местному времени. Возвращает строку с отформатированной датой.',
      example:
        "const date = new Date('2024-01-15T14:30:45');\n" +
        'const defaultDate = date.toLocaleDateString();\n' +
        "const ruDate = date.toLocaleDateString('ru-RU');\n" +
        "const enDate = date.toLocaleDateString('en-US');\n" +
        "const customDate = date.toLocaleDateString('ru-RU', {\n" +
        "  weekday: 'long',\n" +
        "  year: 'numeric',\n" +
        "  month: 'long',\n" +
        "  day: 'numeric'\n" +
        '});\n' +
        "console.log(defaultDate); // зависит от системы, например '15.01.2024' (для России)\n" +
        "console.log(ruDate); // '15.01.2024' (по Москве)\n" +
        "console.log(enDate); // '1/15/2024' (по Москве)\n" +
        "console.log(customDate); // 'понедельник, 15 января 2024 г.'",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.tolocaledatestring',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'toLocaleTimeString()',
      syntax: 'date.toLocaleTimeString([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            "Строка с языковым кодом (например, 'ru-RU', 'en-US') или массив таких строк",
        },
        {
          name: 'options',
          description:
            'Объект с настройками форматирования времени:\n' +
            " • hour: 'numeric' — числовой час ('2'), '2-digit' — две цифры ('02')\n" +
            " • minute: 'numeric' — числовые минуты ('5'), '2-digit' — две цифры ('05')\n" +
            " • second: 'numeric' — числовые секунды ('9'), '2-digit' — две цифры ('09')\n" +
            ' • fractionalSecondDigits: 1, 2 или 3 — количество цифр в дробной части секунды\n' +
            ' • hour12: true/false — 12-часовой (true) или 24-часовой (false) формат\n' +
            " • timeZone: строка с часовым поясом (например, 'Europe/Moscow', 'America/New_York')\n" +
            " • timeZoneName: 'long' — полное название ('Москва, стандартное время'), 'short' — короткое ('GMT+3'), 'shortOffset' — короткий офсет ('GMT+3'), 'longOffset' — длинный офсет ('GMT+03:00'), 'shortGeneric' — короткое общее ('MSK'), 'longGeneric' — длинное общее ('московское время')\n" +
            ' • formatMatcher: стратегия подбора формата — "basic" (базовая) или "best fit" (наилучшее соответствие)',
        },
      ],
      description:
        'Метод объекта Date, возвращает время в виде строки с учётом locales и options. Без locales и options использует стандартные настройки операционной системы (язык и формат времени). Позволяет гибко настраивать формат вывода (час, минута, секунда, часовая система и т.д.) по местному времени. Возвращает строку с отформатированным временем.',
      example:
        "const date = new Date('2024-01-15T14:30:45');\n" +
        'const defaultTime = date.toLocaleTimeString();\n' +
        "const ruTime = date.toLocaleTimeString('ru-RU');\n" +
        "const enTime = date.toLocaleTimeString('en-US');\n" +
        "const customTime = date.toLocaleTimeString('ru-RU', {\n" +
        "  hour: '2-digit',\n" +
        "  minute: '2-digit',\n" +
        "  second: '2-digit',\n" +
        '  hour12: false\n' +
        '});\n' +
        "console.log(defaultTime); // зависит от системы, например '14:30:45' (для России)\n" +
        "console.log(ruTime); // '14:30:45' (по Москве)\n" +
        "console.log(enTime); // '2:30:45 PM' (по Москве)\n" +
        "console.log(customTime); // '14:30:45'",
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.tolocaletimestring',
      errors: 'TypeError — если this не является датой.',
    },
    {
      name: 'Date.now()',
      syntax: 'Date.now()',
      description:
        'Статический метод объекта Date, возвращает таймстамп текущей даты (количество миллисекунд с 1 января 1970 года, 00:00:00 UTC). Это то же самое, что и new Date().getTime(), однако метод не создаёт промежуточный объект Date, поэтому работает быстрее.',
      example:
        'const timestamp = Date.now();\n' +
        'console.log(timestamp); // таймстамп для текущей даты',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.now',
    },
    {
      name: 'Date.parse()',
      syntax: 'Date.parse(string)',
      parameters: [
        {
          name: 'string',
          description:
            'Строка, представляющая дату и время в формате ISO 8601 или других поддерживаемых форматах',
        },
      ],
      description:
        "Статический метод объекта Date, парсит string и возвращает таймстамп. Если формат неправильный, возвращается NaN. Предпочтительный формат: YYYY-MM-DDTHH:mm:ss.sssZ, где:\n • YYYY-MM-DD – дата: год-месяц-день;\n • 'T' – разделитель;\n • HH:mm:ss.sss – время: часы, минуты, секунды, миллисекунды;\n • 'Z' – часовой пояс в формате +-hh:mm (необязательно).",
      example:
        "const timestamp = Date.parse('2024-01-01T00:00:00Z');\n" +
        'console.log(timestamp); // 1704067200000',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.parse',
    },
    {
      name: 'Date.UTC()',
      syntax:
        'Date.UTC(year[, month[, day[, hour[, minute[, second[, millisecond]]]]]])',
      parameters: [
        {
          name: 'year',
          description: 'Год (4 цифры)',
        },
        {
          name: 'month',
          description: 'Месяц (0-11)',
        },
        {
          name: 'day',
          description: 'День месяца (1-31)',
        },
        {
          name: 'hour',
          description: 'Часы (0-23)',
        },
        {
          name: 'minute',
          description: 'Минуты (0-59)',
        },
        {
          name: 'second',
          description: 'Секунды (0-59)',
        },
        {
          name: 'millisecond',
          description: 'Миллисекунды (0-999)',
        },
      ],
      description:
        'Статический метод объекта Date, возвращает таймстамп для year, month, day и hour, minute, second, millisecond по UTC. В отличие от конструктора new Date(), параметры интерпретируются как UTC время, а не локальное время.',
      example:
        'const timestamp = Date.UTC(2024, 0, 1);\n' +
        'console.log(timestamp); // 1704067200000',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.utc',
    },
  ],
};
