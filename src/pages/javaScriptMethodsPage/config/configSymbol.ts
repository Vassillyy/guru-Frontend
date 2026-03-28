import { Methods, type IMethod } from '@/entities/method';

export const configSymbol: Record<Methods.SYMBOL, IMethod[]> = {
  [Methods.SYMBOL]: [
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
        'Статический метод объекта Symbol, используется для поиска или создания символа в глобальном реестре. Если в реестре уже существует символ с (key), метод возвращает этот символ. Если такого символа нет, метод создаёт новый символ и записывает его в реестр.',
      example:
        "const sym1 = Symbol.for('app');\n" +
        "const sym2 = Symbol.for('app');\n" +
        'console.log(sym1 === sym2); // true',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.for',
      errors: 'TypeError — если (key) является символом.',
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
        'Статический метод объекта Symbol, используется для получения имени (sym). Метод возвращает имя символа или undefined, если (sym) не является глобальным.',
      example:
        "const globalSym = Symbol.for('appConfig');\n" +
        "console.log(Symbol.keyFor(globalSym)); // 'appConfig'\n\n" +
        "const localSym = Symbol('local');\n" +
        'console.log(Symbol.keyFor(localSym)); // undefined',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.keyfor',
      errors: 'TypeError - если (sym) не является символом',
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
        'const obj = {\n' +
        '  value: 100,\n' +
        '  [Symbol.toPrimitive](hint) {\n' +
        "    if (hint === 'number') return this.value;\n" +
        "    if (hint === 'string') return `Value: ${this.value}`;\n" +
        '    return this.value;\n' +
        '  }\n' +
        '};\n' +
        'console.log(Number(obj)); // 100\n' +
        "console.log(String(obj)); // 'Value: 100'\n" +
        'console.log(obj + 50); // 150',
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
        'const arrayLike = {\n' +
        "  0: 'a',\n" +
        "  1: 'b',\n" +
        '  length: 2,\n' +
        '  [Symbol.isConcatSpreadable]: true\n' +
        '};\n' +
        'const result1 = [1, 2].concat(arrayLike);\n' +
        "console.log(result1); // [1, 2, 'a', 'b']",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.isconcatspreadable',
    },
    {
      name: 'Symbol.iterator',
      syntax: 'obj[Symbol.iterator]',
      description:
        'Встроенный символ, который используется для определения метода, позволяющего объекту быть итерируемым. Если объект имеет свойство с ключом Symbol.iterator, то это свойство должно указывать на функцию, которая возвращает объект-итератор.\n' +
        'Объект-итератор — это объект, который должен содержать метод next(). Этот метод при каждом вызове возвращает объект с двумя свойствами:\n' +
        '• value — текущее значение элемента;\n' +
        '• done — булево значение, указывающее, завершен ли обход (true — итерация окончена, false — продолжаем).',
      example:
        'const range = {\n' +
        '  start: 1,\n' +
        '  end: 3,\n' +
        '  [Symbol.iterator]() {\n' +
        '    let current = this.start;\n' +
        '    return {\n' +
        '      next: () => {\n' +
        '        if (current <= this.end) {\n' +
        '          return { value: current++, done: false };\n' +
        '        }\n' +
        '        return { done: true };\n' +
        '      }\n' +
        '    };\n' +
        '  }\n' +
        '};\n' +
        'const numbers = [...range];\n' +
        'console.log(numbers); // [1, 2, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.iterator',
      errors: 'TypeError — если метод next() возвращает не объект.',
    },
    {
      name: 'Symbol.asyncIterator',
      syntax: 'obj[Symbol.asyncIterator]',
      description:
        'Встроенный символ, который используется для определения метода, позволяющего объекту быть асинхронно итерируемым. Если объект имеет свойство с ключом Symbol.asyncIterator, то это свойство должно указывать на функцию, которая возвращает асинхронный объект-итератор.\n' +
        'Асинхронный объект-итератор — это объект, который должен содержать метод next(), возвращающий Promise. Когда Promise разрешается (resolves), он возвращает объект с двумя свойствами:\n' +
        '• value — текущее значение элемента (может быть Promise);\n' +
        '• done — булево значение, указывающее, завершен ли обход (true — итерация окончена, false — продолжаем).\n' +
        'Если Promise завершится с ошибкой (reject), то итерация прервется.',
      example:
        'const asyncRange = {\n' +
        '  start: 1,\n' +
        '  end: 3,\n' +
        '  [Symbol.asyncIterator]() {\n' +
        '    let current = this.start;\n' +
        '    return {\n' +
        '      next: () => {\n' +
        '        if (current <= this.end) {\n' +
        '          return Promise.resolve({ value: current++, done: false });\n' +
        '        }\n' +
        '        return Promise.resolve({ done: true });\n' +
        '      }\n' +
        '    };\n' +
        '  }\n' +
        '};\n\n' +
        '(async () => {\n' +
        '  const result = [];\n' +
        '  for await (const num of asyncRange) {\n' +
        '    result.push(num);\n' +
        '  }\n' +
        '  console.log(result); // [1, 2, 3]\n' +
        '})();',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.asynciterator',
    },
    {
      name: 'Symbol.species',
      syntax: 'static get [Symbol.species]()',
      parameters: [],
      description:
        'Статический геттер, который позволяет дочерним классам (например, наследникам Array) контролировать тип объектов, возвращаемых унаследованными методами, которые создают новые экземпляры (map, filter, slice, then и т.д.). По умолчанию эти методы возвращают объекты того же класса, что и исходный. Переопределив Symbol.species и вернув конструктор родительского класса (например, Array), можно заставить эти методы возвращать экземпляры родительского класса.',
      example:
        'class MyArray extends Array {\n' +
        '  static get [Symbol.species]() {\n' +
        '    return Array;\n' +
        '  }\n' +
        '}\n\n' +
        'const myArr = new MyArray(1, 2, 3);\n' +
        'console.log(myArr instanceof MyArray); // true\n\n' +
        'const filtered = myArr.filter(x => x > 1);\n' +
        'console.log(filtered instanceof MyArray); // false\n' +
        'console.log(filtered instanceof Array); // true',
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
        'Статический метод, используется для определения того,  является ли (obj) экземпляром конструктора. Метод вызывается оператором instanceof. По умолчанию проверяет, находится ли (obj) в цепочке прототипов конструктора. Можно переопределить этот метод в классе, чтобы настроить поведение оператора instanceof и задать кастомную логику проверки принадлежности объектов к классу.',
      example:
        'class ArrayLike {\n' +
        '  static [Symbol.hasInstance](obj) {\n' +
        "    return obj && typeof obj === 'object' && 'length' in obj;\n" +
        '  }\n' +
        '}\n' +
        'console.log([1, 2] instanceof ArrayLike); // true\n' +
        'console.log({ length: 3 } instanceof ArrayLike); // true\n' +
        "console.log('string' instanceof ArrayLike); // false\n" +
        'console.log(123 instanceof ArrayLike); // false',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.hasinstance',
      errors: 'TypeError — если метод вызван на не-конструкторе',
    },
    {
      name: 'Symbol.toStringTag',
      syntax: 'get [Symbol.toStringTag]()',
      parameters: [],
      description:
        "Встроенный символ, который позволяет объектам определять собственное строковое представление их типа. Значение этого свойства используется методом Object.prototype.toString() для создания строки '[object Type]', где Type заменяется значением Symbol.toStringTag. Если свойство не определено, используется имя конструктора по умолчанию или 'Object'.",
      example:
        'class Collection {\n' +
        '  get [Symbol.toStringTag]() {\n' +
        "    return 'Collection';\n" +
        '  }\n' +
        '}\n' +
        'const coll = new Collection();\n' +
        'const result1 = Object.prototype.toString.call(coll);\n' +
        "console.log(result1); // '[object Collection]'\n\n" +
        'const customObj = {\n' +
        "  [Symbol.toStringTag]: 'CustomObject'\n" +
        '};\n' +
        'const result2 = String(customObj);\n' +
        "console.log(result2); // '[object CustomObject]'",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.tostringtag',
    },
    {
      name: 'Symbol.match',
      syntax: 'obj[Symbol.match]',
      description:
        'Встроенный символ, который определяет, может ли объект использоваться как регулярное выражение в методах объекта String: match(), matchAll(), replace(), search(), split().\n' +
        '• Если объект имеет свойство [Symbol.match], JavaScript считает его "регулярноподобным" (RegExp-like).\n' +
        '• Методы, такие как match(), будут использовать этот объект как регулярное выражение.\n' +
        '• По умолчанию все экземпляры RegExp имеют этот символ. Вы можете переопределить его, чтобы создать собственные классы, которые ведут себя как регулярные выражения.',
      example:
        'class SimplePattern {\n' +
        '  constructor(pattern) {\n' +
        '    this.pattern = pattern;\n' +
        '  }\n' +
        '  [Symbol.match](str) {\n' +
        '    // Возвращаем совпадения в формате, совместимом с match()\n' +
        '    return str.includes(this.pattern) ? [this.pattern] : null;\n' +
        '  }\n' +
        '}\n\n' +
        "const matcher = new SimplePattern('world');\n" +
        "const result = 'hello world'.match(matcher);\n" +
        "console.log(result); // ['world']\n\n" +
        'const obj = {\n' +
        '  [Symbol.match]: false  // объект НЕ будет считаться RegExp\n' +
        '};\n' +
        "console.log('test'.match(obj)); // TypeError: obj is not a regexp",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.match',
      errors:
        'TypeError — если объект имеет [Symbol.match] = true, но не является RegExp-подобным',
    },
    {
      name: 'Symbol.matchAll',
      syntax: 'obj[Symbol.matchAll]',
      description:
        'Встроенный символ, который определяет метод, возвращающий итератор для всех совпадений строки с объектом. Используется в matchAll().',
      example:
        'const customMatcher = {\n' +
        '  [Symbol.matchAll](str) {\n' +
        '    const matches = str.match(/\\d+/g);\n' +
        '    return matches[Symbol.iterator]();\n' +
        '  }\n' +
        '};\n' +
        "const result = [...'abc123def456'.matchAll(customMatcher)];\n" +
        "console.log(result); // ['123', '456']",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.matchall',
    },
    {
      name: 'Symbol.replace',
      syntax: 'obj[Symbol.replace](str, replacement)',
      parameters: [
        {
          name: 'str',
          description: 'Исходная строка, в которой выполняется замена',
        },
        {
          name: 'replacement',
          description: 'Строка или функция замены, переданная в replace()',
        },
      ],
      description:
        'Встроенный символ, который определяет метод замены в строке. Используется в replace() для кастомной логики замены.',
      example:
        'const customReplacer = {\n' +
        '  [Symbol.replace](str, replacement) {\n' +
        '    // Заменяем каждое слово на replacement\n' +
        '    return str.split(" ").map(() => replacement).join(" ");\n' +
        '  }\n' +
        '};\n' +
        "const res1 = 'hello world'.replace(customReplacer, '!!!');\n" +
        "console.log(res1); // '!!! !!!'\n\n" +
        'const logReplacer = {\n' +
        '  [Symbol.replace](str, replacement) {\n' +
        '    if (typeof replacement === "function") {\n' +
        '      return str.split(" ").map(word => replacement(word)).join(" ");\n' +
        '    }\n' +
        '    return str;\n' +
        '  }\n' +
        '};\n' +
        "const res2 = 'world'.replace(logReplacer, word => word.toUpperCase());\n" +
        "console.log(res2); // 'WORLD'",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.replace',
    },
    {
      name: 'Symbol.search',
      syntax: 'obj[Symbol.search](str)',
      parameters: [
        { name: 'str', description: 'Строка, в которой выполняется поиск' },
      ],
      description:
        'Встроенный символ, который определяет метод поиска в строке. Используется в search() для кастомной логики поиска.',
      example:
        'const customSearcher = {\n' +
        '  [Symbol.search](str) {\n' +
        "    return str.includes('world') ? 6 : -1;\n" +
        '  }\n' +
        '};\n' +
        "const result = 'hello world'.search(customSearcher);\n" +
        'console.log(result); // 6',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.search',
    },
    {
      name: 'Symbol.split',
      syntax: 'obj[Symbol.split](str, limit)',
      parameters: [
        { name: 'str', description: 'Строка, которую нужно разделить' },
        {
          name: 'limit',
          description: 'Ограничение на количество элементов в результате',
        },
      ],
      description:
        'Встроенный символ, который определяет метод разделения строки. Используется в split() для кастомной логики разделения.',
      example:
        'const customSplitter = {\n' +
        '  [Symbol.split](str, limit) {\n' +
        '    return [str.slice(0, limit), str.slice(limit)];\n' +
        '  }\n' +
        '};\n' +
        "const result = 'hello world'.split(customSplitter, 5);\n" +
        "console.log(result); // ['hello', ' world']",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.split',
    },
    {
      name: 'description',
      syntax: 'symbol.description',
      description:
        'Свойство объекта Symbol, возвращает имя символа. Для символов, созданных без описания, свойство возвращает undefined. Свойство только для чтения (read-only).',
      example:
        "const userId = Symbol('userId');\n" +
        "console.log(userId.description); // 'userId'\n\n" +
        'const unnamed = Symbol();\n' +
        'console.log(unnamed.description); // undefined',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.prototype.description',
    },
  ],
};
