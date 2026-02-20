import { Methods, type IMethod } from '@/entities/method';

export const configWeakMap: Record<Methods.WEAK_MAP, IMethod[]> = {
  [Methods.WEAK_MAP]: [
    {
      name: 'set()',
      syntax: 'weakMap.set(key, value)',
      parameters: [
        {
          name: 'key',
          description: 'Объект-ключ, по которому будет установлено значение',
        },
        {
          name: 'value',
          description: 'Значение, которое будет ассоциировано с ключом',
        },
      ],
      description:
        'Метод объекта WeakMap, записывает значение по ключу. Каждый вызов set() возвращает объект WeakMap, что позволяет использовать цепочки вызовов. Ключами в WeakMap могут быть только объекты.',
      example:
        "const weakMap = new WeakMap();\nconst key = {};\nweakMap.set(key, 'value');\nconst result = weakMap.get(key);\nconsole.log(result); // 'value'",
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakmap.prototype.set',
      errors:
        'TypeError — если this не является коллекцией (weakMap или map) или если в качестве ключа передаётся не объект.',
    },
    {
      name: 'get()',
      syntax: 'weakMap.get(key)',
      parameters: [
        {
          name: 'key',
          description:
            'Объект-ключ, для которого нужно получить связанное значение',
        },
      ],
      description:
        'Метод объекта WeakMap, возвращает значение по ключу или undefined если ключ отсутствует.',
      example:
        "const weakMap = new WeakMap();\nconst key = {};\nweakMap.set(key, 'data');\nconst value = weakMap.get(key);\nconsole.log(value); // 'data'",
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakmap.prototype.get',
      errors:
        'TypeError — если this не является коллекцией (weakMap или map) или если в качестве ключа передаётся не объект.',
    },
    {
      name: 'has()',
      syntax: 'weakMap.has(key)',
      parameters: [
        {
          name: 'key',
          description: 'Объект-ключ, наличие которого проверяется',
        },
      ],
      description:
        'Метод объекта WeakMap, возвращает true, если ключ присутствует в коллекции, иначе false.',
      example:
        "const weakMap = new WeakMap();\nconst key = {};\nweakMap.set(key, 'value');\nconst hasKey = weakMap.has(key);\nconsole.log(hasKey); // true",
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakmap.prototype.has',
      errors:
        'TypeError — если this не является коллекцией (weakMap или map) или если в качестве ключа передаётся не объект.',
    },
    {
      name: 'delete()',
      syntax: 'weakMap.delete(key)',
      parameters: [
        {
          name: 'key',
          description: 'Объект-ключ элемента, который нужно удалить',
        },
      ],
      description:
        'Метод объекта WeakMap, удаляет элемент (пару вида «ключ/значение») по ключу и возвращает true, если оно было в коллекции на момент вызова, иначе false.',
      example:
        "const weakMap = new WeakMap();\nconst key = {};\nweakMap.set(key, 'value');\nconst deleted = weakMap.delete(key);\nconsole.log(deleted); // true",
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakmap.prototype.delete',
      errors:
        'TypeError — если this не является коллекцией (weakMap или map) или если в качестве ключа передаётся не объект.',
    },
  ],
};
