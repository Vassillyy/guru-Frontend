import { Methods, type IMethod } from '@/entities/method';

export const configJSON: Record<Methods.JSON, IMethod[]> = {
  [Methods.JSON]: [
    {
      name: 'JSON.stringify()',
      syntax: 'JSON.stringify(value[, replacer[, space]])',
      parameters: [
        {
          name: 'value',
          description: 'Значение, которое нужно преобразовать в JSON (строку)',
        },
        {
          name: 'replacer',
          description:
            'Необязательный параметр: функция преобразования или массив свойств для включения в результат',
        },
        {
          name: 'space',
          description:
            'Необязательный параметр: строка или число для форматирования выходной строки (отступы)',
        },
      ],
      description:
        'Статический метод объекта JSON, преобразует JavaScript значение в JSON (строку). JSON является независимым от языка форматом данных, поэтому метод пропускает некоторые специфические свойства JavaScript: методы (свойства-функции), символьные ключи и значения, свойства содержащие undefined. Если объект содержит циклические ссылки, будет выброшена ошибка. Если объект имеет метод toJSON(), он будет вызван, и его возвращаемое значение будет сериализовано вместо исходного объекта.',
      example: `const obj = { name: 'John', age: 30, city: 'Moscow' };\nconst json = JSON.stringify(obj, ['name', 'city']);\nconsole.log(json); // '{"name":"John","city":"Moscow"}'`,
      specification:
        'https://tc39.es/ecma262/multipage/structured-data.html#sec-json.stringify',
      errors: 'TypeError — если объект содержит циклическую ссылку.',
    },
    {
      name: 'JSON.parse()',
      syntax: 'JSON.parse(text[, reviver])',
      parameters: [
        {
          name: 'text',
          description: 'JSON (cтрока) для преобразования в JavaScript значение',
        },
        {
          name: 'reviver',
          description:
            'Необязательный параметр: функция, вызываемая для каждой пары ключ-значение для преобразования значений',
        },
      ],
      description:
        'Статический метод объекта JSON, преобразует строку JSON в JavaScript значение. Функция reviver (если указана) вызывается для каждого свойства, включая вложенные, и позволяет преобразовывать значения перед их возвратом.',
      example: `const json = '{"name":"John","age":30}';\nconst obj = JSON.parse(json);\nconsole.log(obj.name); // 'John'`,
      specification:
        'https://tc39.es/ecma262/multipage/structured-data.html#sec-json.parse',
      errors: 'SyntaxError — если строка не является валидным JSON.',
    },
  ],
};
