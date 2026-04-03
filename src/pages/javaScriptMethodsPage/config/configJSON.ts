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
        'Статический метод объекта JSON, преобразует (value) в JSON-строку, (replacer) позволяет фильтровать или преобразовывать свойства перед сериализацией, а (space) задаёт отступы для форматирования. JSON является независимым от языка форматом данных, поэтому метод пропускает некоторые специфические свойства JavaScript: методы (свойства-функции), символьные ключи и значения, свойства содержащие undefined. Если объект содержит циклические ссылки, будет выброшена ошибка. Если объект имеет метод toJSON(), он будет вызван, и его возвращаемое значение будет сериализовано вместо исходного объекта.',
      example:
        'const obj = { name: "John", age: 30, city: "Moscow" };\n' +
        'const json1 = JSON.stringify(obj);\n' +
        'console.log(json1); // "{"name":"John","age":30,"city":"Moscow"}"\n\n' +
        'const json2 = JSON.stringify(obj, ["name", "city"]);\n' +
        'console.log(json2); // "{"name":"John","city":"Moscow"}"\n\n' +
        'const json3 = JSON.stringify(obj, (key, value) => {\n' +
        '  if (key === "age") return value + 5;\n' +
        '  return value;\n' +
        '}, 2);\n' +
        'console.log(json3);\n' +
        '// {\n' +
        '//   "name": "John",\n' +
        '//   "age": 35,\n' +
        '//   "city": "Moscow"\n' +
        '// }',
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
        'Статический метод объекта JSON, преобразует (text) в JavaScript значение, (reviver) вызывается для каждого свойства (включая вложенные) и позволяет преобразовывать значения перед их возвратом.',
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
      errors: 'SyntaxError — если (text) не является валидным JSON.',
    },
  ],
};
