import { Methods, type IMethod } from '@/entities/method';

export const configSymbol: Record<Methods.SYMBOL, IMethod[]> = {
  [Methods.SYMBOL]: [
    {
      name: 'description',
      syntax: 'symbol.description',
      description:
        'Свойство объекта Symbol, которое возвращает имя символа. Для символов, созданных без описания, свойство возвращает undefined. Свойство только для чтения (read-only).',
      example:
        "const userId = Symbol('userId');\nconsole.log(userId.description); // 'userId'\nconst unnamed = Symbol();\nconsole.log(unnamed.description); // undefined",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.prototype.description',
    },
    {
      name: 'Symbol.for()',
      syntax: 'Symbol.for(key)',
      parameters: [
        {
          name: 'key',
          description:
            'Имя символа для поиска или создания в глобальном реестре',
        },
      ],
      description:
        'Статический метод объекта Symbol, используется для поиска или создания символа в глобальном реестре. Если в реестре уже существует символ с указанным именем, метод возвращает этот символ. Если такого символа нет, метод создаёт новый символ и записывает его в реестр под указанным ключом.',
      example:
        "const sym1 = Symbol.for('app');\nconst sym2 = Symbol.for('app');\nconsole.log(sym1 === sym2); // true",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.for',
    },
    {
      name: 'Symbol.keyFor()',
      syntax: 'Symbol.keyFor(sym)',
      parameters: [
        {
          name: 'sym',
          description:
            'Глобальный символ, имя которого нужно получить из реестра',
        },
      ],
      description:
        'Статический метод объекта Symbol, используется для получения имени глобального символа из реестра. Метод возвращает имя символа (ключ из глобального реестра) или undefined, если символ не является глобальным.',
      example:
        "const globalSym = Symbol.for('appConfig');\nconsole.log(Symbol.keyFor(globalSym)); // 'appConfig'\nconst localSym = Symbol('local');\nconsole.log(Symbol.keyFor(localSym)); // undefined",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.keyfor',
    },
    {
      name: 'Symbol.toPrimitive',
      syntax: 'obj[Symbol.toPrimitive](hint)',
      parameters: [
        {
          name: 'hint',
          description: "Тип преобразования: 'number', 'string' или 'default'",
        },
      ],
      description:
        'Встроенный символ, используется как ключ для определения метода преобразования объекта в примитивное значение. Если метод определён для объекта с этим символом в качестве ключа, он будет использоваться для всех преобразований объекта в примитив.',
      example:
        "const obj = {\n  value: 100,\n  [Symbol.toPrimitive](hint) {\n    if (hint === 'number') return this.value;\n    if (hint === 'string') return `Value: ${this.value}`;\n    return this.value;\n  }\n};\nconsole.log(Number(obj)); // 100\nconsole.log(String(obj)); // 'Value: 100'\nconsole.log(obj + 50); // 150",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.toprimitive',
      errors: 'TypeError — если метод возвращает не примитивное значение.',
    },
    {
      name: 'Symbol.isConcatSpreadable',
      syntax: 'obj[Symbol.isConcatSpreadable]',
      description:
        'Встроенный символ, который определяет поведение объекта при вызове метода concat(). Если свойство установлено в true, элементы объекта будут добавлены по отдельности; если false или отсутствует, объект будет добавлен целиком как один элемент.',
      example:
        "const arrayLike = {\n  0: 'a',\n  1: 'b',\n  length: 2,\n  [Symbol.isConcatSpreadable]: true\n};\nconst result1 = [1, 2].concat(arrayLike);\nconsole.log(result1); // [1, 2, 'a', 'b']",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.isconcatspreadable',
    },
    {
      name: 'Symbol.iterator',
      syntax: 'obj[Symbol.iterator]',
      description:
        'Встроенный символ, который используется для определения метода, позволяющего объекту быть итерируемым. Если объект имеет свойство с ключом Symbol.iterator, то это свойство должно указывать на функцию, которая возвращает объект-итератор.',
      example:
        'const range = {\n  start: 1,\n  end: 3,\n  [Symbol.iterator]() {\n    let current = this.start;\n    return {\n      next: () => {\n        if (current <= this.end) {\n          return { value: current++, done: false };\n        }\n        return { done: true };\n      }\n    };\n  }\n};\nconst numbers = [...range];\nconsole.log(numbers); // [1, 2, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.iterator',
    },
    {
      name: 'Symbol.asyncIterator',
      syntax: 'obj[Symbol.asyncIterator]',
      description:
        'Встроенный символ, который используется для определения метода, позволяющего объекту быть асинхронно итерируемым. Если объект имеет свойство с ключом Symbol.asyncIterator, то это свойство должно указывать на функцию, которая возвращает объект-асинхронный итератор.',
      example:
        'const asyncRange = {\n  start: 1,\n  end: 3,\n  [Symbol.asyncIterator]() {\n    let current = this.start;\n    return {\n      next: () => {\n        if (current <= this.end) {\n          return Promise.resolve({ value: current++, done: false });\n        }\n        return Promise.resolve({ done: true });\n      }\n    };\n  }\n};\n\n(async () => {\n  const result = [];\n  for await (const num of asyncRange) {\n    result.push(num);\n  }\n  console.log(result); // [1, 2, 3]\n})();',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.asynciterator',
    },
    {
      name: 'Symbol.species',
      syntax: 'static get [Symbol.species]()',
      parameters: [],
      description:
        'Специальный статический геттер, позволяет указать, какой конструктор будет использоваться для создания новых объектов внутри класса. Он используется, когда объект класса передаётся в некоторые встроенные методы, такие как map, filter и slice, которые возвращают новый объект того же типа. Если бы мы хотели, чтобы методы map, filter и т. д. возвращали обычные массивы, мы могли бы вернуть Array в Symbol.species. По умолчанию Symbol.species возвращает this, то есть конструктор текущего класса.',
      example:
        'class MyArray extends Array {\n  static get [Symbol.species]() {\n    return Array;\n  }\n}\nconst myArr = new MyArray(1, 2, 3);\nconsole.log(myArr instanceof MyArray); // true\nconst filtered = myArr.filter(x => x > 1);\nconsole.log(filtered instanceof MyArray); // false\nconsole.log(filtered instanceof Array); // true',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.species',
    },
    {
      name: 'Symbol.hasInstance',
      syntax: 'static [Symbol.hasInstance](obj)',
      parameters: [
        {
          name: 'obj',
          description:
            'Объект, для которого проверяется принадлежность конструктору',
        },
      ],
      description:
        'Статический метод, используется для определения того, распознаёт ли конструктор заданный объект как свой экземпляр. Метод вызывается оператором instanceof. По умолчанию проверяет, находится ли объект в цепочке прототипов конструктора. Можно переопределить этот метод в классе, чтобы настроить поведение оператора instanceof и задать кастомную логику проверки принадлежности объектов к классу.',
      example:
        "class ArrayLike {\n  static [Symbol.hasInstance](obj) {\n    return obj && typeof obj === 'object' && 'length' in obj;\n  }\n}\nconsole.log([1, 2] instanceof ArrayLike); // true\nconsole.log({ length: 3 } instanceof ArrayLike); // true\nconsole.log('string' instanceof ArrayLike); // false\nconsole.log(123 instanceof ArrayLike); // false",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.hasinstance',
    },
    {
      name: 'Symbol.toStringTag',
      syntax: 'get [Symbol.toStringTag]()',
      parameters: [],
      description:
        "Встроенный символ, который позволяет объектам определять собственное строковое представление их типа. Значение этого свойства используется методом Object.prototype.toString() для создания строки '[object Type]', где Type заменяется значением Symbol.toStringTag. Если свойство не определено, используется имя конструктора по умолчанию или 'Object'.",
      example:
        "class Collection {\n  get [Symbol.toStringTag]() {\n    return 'Collection';\n  }\n}\nconst coll = new Collection();\nconst result1 = Object.prototype.toString.call(coll);\nconsole.log(result1); // '[object Collection]'\nconst customObj = {\n  [Symbol.toStringTag]: 'CustomObject'\n};\nconst result2 = Object.prototype.toString.call(customObj);\nconsole.log(result2); // '[object CustomObject]'",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.tostringtag',
    },
  ],
};
