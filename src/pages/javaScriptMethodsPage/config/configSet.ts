import { Methods, type IMethod } from '@/entities/method';

export const configSet: Record<Methods.SET, IMethod[]> = {
  [Methods.SET]: [
    {
      name: 'size',
      syntax: 'set.size',
      description:
        'Свойство объекта Set, возвращает количество элементов. Свойство только для чтения (read-only).',
      example:
        'const set = new Set([1, 2, 3]);\nconst size = set.size;\nconsole.log(size); // 3',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-get-set.prototype.size',
      errors:
        'TypeError — если this не является множеством (set) или коллекцией (map).',
    },
    {
      name: 'forEach()',
      syntax: 'set.forEach(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description: 'Функция, вызываемая для каждого значения в множестве',
        },
        {
          name: 'thisArg',
          description:
            'Необязательное значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Set, вызывает указанную функцию для каждого значения коллекции. Эта функция может принимать до трёх аргументов: значение, снова значение (для совместимости с объектом Map), объект по которому производится итерация. Возвращает undefined.',
      example:
        'const set = new Set([1, 2, 3]);\nset.forEach((value) => {\n console.log(value); // 1, 2, 3\n});',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.foreach',
      errors:
        'TypeError — если this не является коллекцией (map), массивом или множеством (set), или если аргумент (fn) не является функцией.',
    },
    {
      name: 'add()',
      syntax: 'set.add(value)',
      parameters: [
        {
          name: 'value',
          description: 'Значение, которое нужно добавить в множество',
        },
      ],
      description:
        'Метод объекта Set, добавляет значение (если оно уже есть во множестве, то ничего не делает), возвращает тот же объект Set.',
      example:
        'const set = new Set([1, 2]);\nset.add(3);\nconst hasValue = set.has(3);\nconsole.log(hasValue); // true',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.add',
      errors: 'TypeError — если this не является множеством (set или weakSet).',
    },
    {
      name: 'has()',
      syntax: 'set.has(value)',
      parameters: [
        {
          name: 'value',
          description: 'Значение, наличие которого нужно проверить в множестве',
        },
      ],
      description:
        'Метод объекта Set, возвращает true, если значение присутствует в множестве, иначе false.',
      example:
        'const set = new Set([1, 2, 3]);\nconst hasValue = set.has(2);\nconsole.log(hasValue); // true',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.has',
      errors: 'TypeError — если this не является множеством (set или weakSet).',
    },
    {
      name: 'delete()',
      syntax: 'set.delete(value)',
      parameters: [
        {
          name: 'value',
          description: 'Значение, которое нужно удалить из множества',
        },
      ],
      description:
        'Метод объекта Set, удаляет значение и возвращает true, если оно было в множестве на момент вызова, иначе false.',
      example:
        'const set = new Set([1, 2, 3]);\nconst deleted = set.delete(2);\nconsole.log(deleted); // true\nconsole.log(set.has(2)); // false',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.delete',
      errors: 'TypeError — если this не является множеством (set или weakSet).',
    },
    {
      name: 'clear()',
      syntax: 'set.clear()',
      description: 'Метод объекта Set, очищает коллекцию от всех элементов.',
      example:
        'const set = new Set([1, 2, 3]);\nset.clear();\nconsole.log(set.size); // 0',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.clear',
      errors:
        'TypeError — если this не является множеством (set) или коллекцией (map).',
    },
    {
      name: 'keys()',
      syntax: 'set.keys()',
      description:
        'Метод объекта Set, возвращает итерируемый объект по ключам множества (ключами в Set являются значения). Для Set методы keys() и values() идентичны.',
      example:
        'const set = new Set([1, 2, 3]);\nconst keys = Array.from(set.keys());\nconsole.log(keys); // [1, 2, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.keys',
      errors:
        'TypeError — если this не является множеством (set), массивом или коллекцией (map).',
    },
    {
      name: 'values()',
      syntax: 'set.values()',
      description:
        'Метод объекта Set, возвращает итерируемый объект по значениям множества. Для Set методы values() и keys() идентичны.',
      example:
        'const set = new Set([1, 2, 3]);\nconst values = Array.from(set.values());\nconsole.log(values); // [1, 2, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.values',
      errors:
        'TypeError — если this не является множеством (set), массивом или коллекцией (map).',
    },
    {
      name: 'entries()',
      syntax: 'set.entries()',
      description:
        'Метод объекта Set, возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for of. В Set ключ и значение одинаковы.',
      example:
        'const set = new Set([1, 2, 3]);\nconst entries = Array.from(set.entries());\nconsole.log(entries); // [[1, 1], [2, 2], [3, 3]]',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.entries',
      errors:
        'TypeError — если this не является множеством (set), массивом или коллекцией (map).',
    },
    {
      name: 'union()',
      syntax: 'set.union(otherSet)',
      parameters: [
        {
          name: 'otherSet',
          description:
            'Другое множество, с которым нужно выполнить объединение',
        },
      ],
      description:
        'Метод объекта Set, возвращает новое множество, содержащее все элементы исходного множества и переданного множества.',
      example:
        'const set1 = new Set([1, 2]);\nconst set2 = new Set([2, 3]);\nconst unionSet = set1.union(set2);\nconst result = Array.from(unionSet);\nconsole.log(result); // [1, 2, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.union',
      errors:
        'TypeError — если this не является множеством (set) или если аргумент не является множеством (set).',
    },
    {
      name: 'intersection()',
      syntax: 'set.intersection(otherSet)',
      parameters: [
        {
          name: 'otherSet',
          description: 'Другое множество, с которым нужно найти пересечение',
        },
      ],
      description:
        'Метод объекта Set, возвращает новое множество, содержащее только элементы, присутствующие в исходном множестве и в переданном множестве.',
      example:
        'const set1 = new Set([1, 2, 3]);\nconst set2 = new Set([2, 3, 4]);\nconst intersectionSet = set1.intersection(set2);\nconst result = Array.from(intersectionSet);\nconsole.log(result); // [2, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.intersection',
      errors:
        'TypeError — если this не является множеством (set) или если аргумент не является множеством (set).',
    },
  ],
};
