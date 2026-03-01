import { Methods, type IMethod } from '@/entities/method';

export const configMap: Record<Methods.MAP, IMethod[]> = {
  [Methods.MAP]: [
    {
      name: 'size',
      syntax: 'map.size',
      description:
        'Свойство объекта Map, возвращает количество элементов. Свойство только для чтения (read-only).',
      example:
        "const map = new Map([['a', 1], ['b', 2]]);\n" +
        'const size = map.size;\n' +
        'console.log(size); // 2',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-get-map.prototype.size',
      errors:
        'TypeError — если this не является коллекцией (map) или множеством (set).',
    },
    {
      name: 'forEach()',
      syntax: 'map.forEach(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description:
            'Функция, которая будет вызвана для каждой пары ключ-значение. Принимает три аргумента:\n' +
            '• value - (значение текущего элемента)\n' +
            '• key - (ключ текущего элемента)\n' +
            '• map (сам объект Map, по которому производится итерация).',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Map, вызывает (callbackFn) для каждой пары (ключ/значение) коллекции. Возвращает undefined.',
      example:
        "const map = new Map([['a', 1], ['b', 2]]);\n\n" +
        'map.forEach((value, key) => {\n' +
        " console.log(key, value); // 'a' 1, 'b' 2\n" +
        '});',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.foreach',
      errors:
        'TypeError — если this не является множеством (set), массивом или коллекцией (map), или если аргумент (fn) не является функцией.',
    },
    {
      name: 'set()',
      syntax: 'map.set(key, value)',
      parameters: [
        {
          name: 'key',
          description: 'Ключ, по которому будет установлено значение',
        },
        {
          name: 'value',
          description: 'Значение, которое будет ассоциировано с ключом',
        },
      ],
      description:
        'Метод объекта Map, записывает (value) по (key). Каждый вызов set() возвращает объект Map, что позволяет использовать цепочки вызовов. Если ключ уже существует в Map, его значение обновляется.',
      example:
        'const map = new Map();\n\n' +
        "map.set('key', 'value');\n\n" +
        "const result = map.get('key');\n" +
        "console.log(result); // 'value'",
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.set',
      errors: 'TypeError — если this не является коллекцией (map или weakMap).',
    },
    {
      name: 'get()',
      syntax: 'map.get(key)',
      parameters: [
        {
          name: 'key',
          description: 'Ключ, значение по которому нужно получить',
        },
      ],
      description:
        'Метод объекта Map, возвращает значение по (key) или undefined если (key) отсутствует.',
      example:
        "const map = new Map([['a', 1], ['b', 2]]);\n" +
        "const value = map.get('a');\n" +
        'console.log(value); // 1',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.get',
      errors: 'TypeError — если this не является коллекцией (map или weakMap).',
    },
    {
      name: 'has()',
      syntax: 'map.has(key)',
      parameters: [
        {
          name: 'key',
          description: 'Ключ, наличие которого проверяется',
        },
      ],
      description:
        'Метод объекта Map, возвращает true, если (key), присутствует в коллекции, иначе false.',
      example:
        "const map = new Map([['a', 1], ['b', 2]]);\n" +
        "const hasKey = map.has('a');\n" +
        'console.log(hasKey); // true',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.has',
      errors: 'TypeError — если this не является коллекцией (map или weakMap).',
    },
    {
      name: 'delete()',
      syntax: 'map.delete(key)',
      parameters: [
        {
          name: 'key',
          description: 'Ключ элемента, который нужно удалить',
        },
      ],
      description:
        'Метод объекта Map, удаляет элемент (пару вида «ключ/значение») по (key) и возвращает true, если оно было в коллекции на момент вызова, иначе false.',
      example:
        "const map = new Map([['a', 1], ['b', 2]]);\n\n" +
        "const deleted = map.delete('a');\n\n" +
        'console.log(deleted); // true\n' +
        "console.log(map.has('a')); // false",
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.delete',
      errors: 'TypeError — если this не является коллекцией (map или weakMap).',
    },
    {
      name: 'clear()',
      syntax: 'map.clear()',
      description: 'Метод объекта Map, очищает коллекцию от всех элементов.',
      example:
        "const map = new Map([['a', 1], ['b', 2]]);\n\n" +
        'map.clear();\n\n' +
        'console.log(map.size); // 0',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.clear',
      errors:
        'TypeError — если this не является коллекцией (map) или множеством (set).',
    },
    {
      name: 'keys()',
      syntax: 'map.keys()',
      description:
        'Метод объекта Map, возвращает новый итератор, содержащий ключи коллекции в порядке вставки.',
      example:
        "const map = new Map([['a', 1], ['b', 2]]);\n" +
        'const keys = Array.from(map.keys());\n' +
        "console.log(keys); // ['a', 'b']",
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.keys',
      errors:
        'TypeError — если this не является коллекцией (map), массивом или множеством (set).',
    },
    {
      name: 'values()',
      syntax: 'map.values()',
      description:
        'Метод объекта Map, возвращает новый итератор, содержащий значения коллекции в порядке вставки.',
      example:
        "const map = new Map([['a', 1], ['b', 2]]);\n" +
        'const values = Array.from(map.values());\n' +
        'console.log(values); // [1, 2]',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.values',
      errors:
        'TypeError — если this не является коллекцией (map), массивом или множеством (set).',
    },
    {
      name: 'entries()',
      syntax: 'map.entries()',
      description:
        'Метод объекта Map, возвращает итерируемый объект по парам вида [ключ, значение] в порядке вставки. Этот вариант используется по умолчанию в for of.',
      example:
        "const map = new Map([['a', 1], ['b', 2]]);\n" +
        'const entries = Array.from(map.entries());\n' +
        "console.log(entries); // [['a', 1], ['b', 2]]",
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.entries',
      errors:
        'TypeError — если this не является коллекцией (map), массивом или множеством (set).',
    },
  ],
};
