import { Methods, type IMethod } from '@/entities/method';

export const configSet: Record<Methods.SET, IMethod[]> = {
  [Methods.SET]: [
    {
      name: 'size',
      syntax: 'set.size',
      description:
        'Свойство объекта Set, возвращает количество элементов. Свойство только для чтения (read-only).',
      example:
        'const set = new Set([1, 2, 3]);\n' +
        'const size = set.size;\n' +
        'console.log(size); // 3',
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
          description:
            'Функция, которая будет вызвана для каждого значения в множестве. Принимает три аргумента:\n' +
            '• value - (значение текущего элемента)\n' +
            '• key - (то же значение, для совместимости с Map)\n' +
            '• set - (сам объект Set, по которому производится итерация).',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Set, вызывает (callbackFn) для каждого значения коллекциив порядке их добавления. Возвращает undefined.',
      example:
        'const set = new Set([1, 2, 3]);\n\n' +
        'set.forEach((value) => {\n' +
        ' console.log(value); // 1, 2, 3\n' +
        '});',
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
        'Метод объекта Set, добавляет (value) (если оно уже есть во множестве, то ничего не делает), возвращает тот же объект Set.',
      example:
        'const set = new Set([1, 2]);\n\n' +
        'set.add(3);\n\n' +
        'const hasValue = set.has(3);\n' +
        'console.log(hasValue); // true',
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
        'Метод объекта Set, возвращает true, если (value) присутствует в множестве, иначе false.',
      example:
        'const set = new Set([1, 2, 3]);\n' +
        'const hasValue = set.has(2);\n' +
        'console.log(hasValue); // true',
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
        'Метод объекта Set, удаляет (value) и возвращает true, если оно было в множестве на момент вызова, иначе false.',
      example:
        'const set = new Set([1, 2, 3]);\n' +
        'const deleted = set.delete(2);\n' +
        'console.log(deleted); // true\n' +
        'console.log(set.has(2)); // false',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.delete',
      errors: 'TypeError — если this не является множеством (set или weakSet).',
    },
    {
      name: 'clear()',
      syntax: 'set.clear()',
      description: 'Метод объекта Set, очищает коллекцию от всех элементов.',
      example:
        'const set = new Set([1, 2, 3]);\n\n' +
        'set.clear();\n\n' +
        'console.log(set.size); // 0',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.clear',
      errors:
        'TypeError — если this не является множеством (set) или коллекцией (map).',
    },
    {
      name: 'keys()',
      syntax: 'set.keys()',
      description:
        'Метод объекта Set, возвращает новый итератор, содержащий значения множества в порядке их добавления. Для Set методы keys() и values() идентичны (значения являются и ключами).',
      example:
        'const set = new Set([1, 2, 3]);\n' +
        'const keys = Array.from(set.keys());\n' +
        'console.log(keys); // [1, 2, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.keys',
      errors:
        'TypeError — если this не является множеством (set), массивом или коллекцией (map).',
    },
    {
      name: 'values()',
      syntax: 'set.values()',
      description:
        'Метод объекта Set, возвращает новый итератор, содержащий значения множества в порядке их добавления. Для Set методы values() и keys() идентичны.',
      example:
        'const set = new Set([1, 2, 3]);\n' +
        'const values = Array.from(set.values());\n' +
        'console.log(values); // [1, 2, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.values',
      errors:
        'TypeError — если this не является множеством (set), массивом или коллекцией (map).',
    },
    {
      name: 'entries()',
      syntax: 'set.entries()',
      description:
        'Метод объекта Set, возвращает новый итератор, содержащий пары [значение, значение] для каждого элемента множества в порядке их добавления. Этот вариант используется по умолчанию в цикле for of.',
      example:
        'const set = new Set([1, 2, 3]);\n' +
        'const entries = Array.from(set.entries());\n' +
        'console.log(entries); // [[1, 1], [2, 2], [3, 3]]',
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
        'Метод объекта Set, возвращает новое множество, содержащее все элементы исходного множества и (otherSet).',
      example:
        'const set1 = new Set([1, 2]);\n' +
        'const set2 = new Set([2, 3]);\n' +
        'const unionSet = set1.union(set2);\n' +
        'const result = Array.from(unionSet);\n' +
        'console.log(result); // [1, 2, 3]',
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
        'Метод объекта Set, возвращает новое множество, содержащее только элементы, присутствующие в исходном множестве и в (otherSet).',
      example:
        'const set1 = new Set([1, 2, 3]);\n' +
        'const set2 = new Set([2, 3, 4]);\n' +
        'const intersectionSet = set1.intersection(set2);\n' +
        'const result = Array.from(intersectionSet);\n' +
        'console.log(result); // [2, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.intersection',
      errors:
        'TypeError — если this не является множеством (set) или если аргумент не является множеством (set).',
    },
    {
      name: 'difference()',
      syntax: 'set.difference(otherSet)',
      parameters: [
        {
          name: 'otherSet',
          description:
            'Другое множество, элементы которого нужно исключить из исходного множества',
        },
      ],
      description:
        'Метод объекта Set, возвращает новое множество, содержащее элементы исходного множества, которые отсутствуют в (otherSet).',
      example:
        'const set1 = new Set([1, 2, 3, 4]);\n' +
        'const set2 = new Set([2, 4]);\n' +
        'const differenceSet = set1.difference(set2);\n' +
        'const result = Array.from(differenceSet);\n' +
        'console.log(result); // [1, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.difference',
      errors:
        'TypeError — если this не является множеством (set) или если (otherSet) не является множеством (set).',
    },
    {
      name: 'isSubsetOf()',
      syntax: 'set.isSubsetOf(otherSet)',
      parameters: [
        {
          name: 'otherSet',
          description:
            'Другое множество, в котором проверяется наличие всех элементов исходного множества',
        },
      ],
      description:
        'Метод объекта Set, возвращает true, если все элементы исходного множества присутствуют в (otherSet), иначе false.',
      example:
        'const set1 = new Set([1, 2]);\n' +
        'const set2 = new Set([1, 2, 3, 4]);\n' +
        'const isSubset = set1.isSubsetOf(set2);\n' +
        'console.log(isSubset); // true\n\n' +
        'const set3 = new Set([1, 5]);\n' +
        'const isSubset2 = set3.isSubsetOf(set2);\n' +
        'console.log(isSubset2); // false',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.issubsetof',
      errors:
        'TypeError — если this не является множеством (set) или если (otherSet) не является множеством (set).',
    },
    {
      name: 'isSupersetOf()',
      syntax: 'set.isSupersetOf(otherSet)',
      parameters: [
        {
          name: 'otherSet',
          description:
            'Другое множество, которое проверяется на вхождение в исходное множество',
        },
      ],
      description:
        'Метод объекта Set, возвращает true, если исходное множество содержит все элементы (otherSet), иначе false.',
      example:
        'const set1 = new Set([1, 2, 3, 4]);\n' +
        'const set2 = new Set([1, 2]);\n' +
        'const isSuperset = set1.isSupersetOf(set2);\n' +
        'console.log(isSuperset); // true\n\n' +
        'const set3 = new Set([1, 5]);\n' +
        'const isSuperset2 = set1.isSupersetOf(set3);\n' +
        'console.log(isSuperset2); // false',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.issupersetof',
      errors:
        'TypeError — если this не является множеством (set) или если (otherSet) не является множеством (set).',
    },
    {
      name: 'isDisjointFrom()',
      syntax: 'set.isDisjointFrom(otherSet)',
      parameters: [
        {
          name: 'otherSet',
          description:
            'Другое множество, с которым проверяется отсутствие общих элементов',
        },
      ],
      description:
        'Метод объекта Set, возвращает true, если у исходного множества и (otherSet) нет общих элементов, иначе false.',
      example:
        'const set1 = new Set([1, 2]);\n' +
        'const set2 = new Set([3, 4]);\n' +
        'const isDisjoint = set1.isDisjointFrom(set2);\n' +
        'console.log(isDisjoint); // true\n\n' +
        'const set3 = new Set([2, 3]);\n' +
        'const isDisjoint2 = set1.isDisjointFrom(set3);\n' +
        'console.log(isDisjoint2); // false',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.isdisjointfrom',
      errors:
        'TypeError — если this не является множеством (set) или если (otherSet) не является множеством (set).',
    },
    {
      name: 'symmetricDifference()',
      syntax: 'set.symmetricDifference(otherSet)',
      parameters: [
        {
          name: 'otherSet',
          description:
            'Другое множество, с которым нужно найти симметрическую разность',
        },
      ],
      description:
        'Метод объекта Set, возвращает новое множество, содержащее элементы, которые присутствуют только в одном из множеств (исходном или otherSet), но не в обоих.',
      example:
        'const set1 = new Set([1, 2, 3]);\n' +
        'const set2 = new Set([2, 3, 4]);\n' +
        'const symmetricDiff = set1.symmetricDifference(set2);\n' +
        'const result = Array.from(symmetricDiff);\n' +
        'console.log(result); // [1, 4]',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.symmetricdifference',
      errors:
        'TypeError — если this не является множеством (set) или если (otherSet) не является множеством (set).',
    },
  ],
};
