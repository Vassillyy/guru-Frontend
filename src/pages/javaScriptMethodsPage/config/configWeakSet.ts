import { Methods, type IMethod } from '@/entities/method';

export const configWeakSet: Record<Methods.WEAK_SET, IMethod[]> = {
  [Methods.WEAK_SET]: [
    {
      name: 'add()',
      syntax: 'weakSet.add(value)',
      parameters: [
        {
          name: 'value',
          description: 'Объект, который нужно добавить в WeakSet',
        },
      ],
      description:
        'Метод объекта WeakSet, добавляет (value) во множество (если оно уже есть ,то ничего не делает), возвращает тот же объект WeakSet.',
      example:
        'const weakSet = new WeakSet();\n' +
        'const obj = {};\n\n' +
        'weakSet.add(obj);\n\n' +
        'const hasObj = weakSet.has(obj);\n' +
        'console.log(hasObj); // true',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakset.prototype.add',
      errors:
        'TypeError — если this не является множеством (weakSet или set) или если в качестве значения передаётся не объект.',
    },
    {
      name: 'has()',
      syntax: 'weakSet.has(value)',
      parameters: [
        {
          name: 'value',
          description: 'Объект, наличие которого нужно проверить в WeakSet',
        },
      ],
      description:
        'Метод объекта WeakSet, возвращает true, если (value) присутствует в множестве, иначе false.',
      example:
        'const obj = {};\n' +
        'const weakSet = new WeakSet([obj]);\n' +
        'const hasObj = weakSet.has(obj);\n' +
        'console.log(hasObj); // true',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakset.prototype.has',
      errors:
        'TypeError — если this не является множеством (weakSet или set) или если в качестве значения передаётся не объект.',
    },
    {
      name: 'delete()',
      syntax: 'weakSet.delete(value)',
      parameters: [
        {
          name: 'value',
          description: 'Объект, который нужно удалить из WeakSet',
        },
      ],
      description:
        'Метод объекта WeakSet, удаляет (value) и возвращает true, если оно было в множестве на момент вызова, иначе false.',
      example:
        'const obj = {};\n' +
        'const weakSet = new WeakSet([obj]);\n' +
        'const deleted = weakSet.delete(obj);\n' +
        'console.log(deleted); // true\n' +
        'console.log(weakSet.has(obj)); // false',
      specification:
        'https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakset.prototype.delete',
      errors:
        'TypeError — если this не является множеством (weakSet или set) или если в качестве значения передаётся не объект.',
    },
  ],
};
