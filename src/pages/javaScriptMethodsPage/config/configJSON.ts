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
            'Функция преобразования или массив свойств для включения в результат',
        },
        {
          name: 'space',
          description:
            'Строка или число для форматирования выходной строки (отступы)',
        },
      ],
      description:
        'Статический метод объекта JSON, преобразует JavaScript значение в JSON (строку). JSON является независимым от языка форматом данных, поэтому метод пропускает некоторые специфические свойства JavaScript: методы (свойства-функции), символьные ключи и значения, свойства содержащие undefined. Если объект содержит циклические ссылки, будет выброшена ошибка. Если объект имеет метод toJSON(), он будет вызван, и его возвращаемое значение будет сериализовано вместо исходного объекта.',
      example:
        'const obj = { name: "John", age: 30, city: "Moscow" };\n' +
        'const json = JSON.stringify(obj, ["name", "city"]);\n' +
        'console.log(json); // "{"name":"John","city":"Moscow"}"',
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
          description: 'JSON для преобразования в JavaScript значение',
        },
        {
          name: 'reviver',
          description:
            'Функция, вызываемая для каждой пары ключ-значение для преобразования значений',
        },
      ],
      description:
        'Статический метод объекта JSON, преобразует строку JSON в JavaScript значение. Функция (reviver) вызывается для каждого свойства, включая вложенные, и позволяет преобразовывать значения перед их возвратом.',
      example:
        'const json = \'{"name":"John","age":30}\';\n' +
        'const obj = JSON.parse(json);\n' +
        'console.log(obj.name); // "John"\n\n' +
        'const jsonWithDate = \'{"name":"John","birth":"1980-01-01"}\';\n' +
        'const objWithDate = JSON.parse(jsonWithDate, (key, value) => {\n' +
        '  if (key === "birth") return new Date(value);\n' +
        '  return value;\n' +
        '});\n' +
        'console.log(objWithDate.birth.getFullYear()); // 1980',
      specification:
        'https://tc39.es/ecma262/multipage/structured-data.html#sec-json.parse',
      errors: 'SyntaxError — если строка не является валидным JSON.',
    },
  ],
};
