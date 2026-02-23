import { Methods, type IMethod } from '@/entities/method';

export const configObject: Record<Methods.OBJECT, IMethod[]> = {
  [Methods.OBJECT]: [
    {
      name: 'toString()',
      syntax: 'obj.toString()',
      description:
        "Метод объекта Object, возвращает примитивное значение исходного объекта. По умолчанию обычный объект имеет метод toString, который возвращает строку '[object Object]'. Но метод можно переопределить. Если имеются другие методы преобразования, то данный метод имеет приоритет при строковом преобразовании.",
      example:
        "const obj = { x: 10, y: 20 };\nconsole.log(obj.toString()); // '[object Object]'\n\nconst customObj = {\n  toString() {\n    return 'Custom Object';\n  }\n};\nconsole.log(customObj.toString()); // 'Custom Object'",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.tostring',
      errors: 'TypeError — если this является null или undefined.',
    },
    {
      name: 'valueOf()',
      syntax: 'obj.valueOf()',
      description:
        'Метод объекта Object, возвращает примитивное значение исходного объекта. По умолчанию обычный объект имеет метод valueOf, который возвращает сам объект. Но метод можно переопределить. Если имеются другие методы преобразования, то данный метод имеет приоритет при математических операциях.',
      example:
        'const obj = { x: 5 };\nconsole.log(obj.valueOf() === obj); // true\n\nconst numberObj = {\n  value: 100,\n  valueOf() {\n    return this.value;\n  }\n};\nconsole.log(numberObj + 50); // 150',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.valueof',
      errors: 'TypeError — если this является null или undefined.',
    },
    {
      name: 'hasOwnProperty()',
      syntax: 'obj.hasOwnProperty(prop)',
      parameters: [
        {
          name: 'prop',
          description: 'Имя свойства',
        },
      ],
      description:
        'Метод объекта Object, возвращает true, если исходный объект содержит (prop) как собственное (а не унаследованное через цепочку прототипов), иначе false.',
      example:
        "const user = { id: 1, name: 'Alice' };\n\nconst hasName = user.hasOwnProperty('name');\nconsole.log(hasName); // true\n\nconst hasAge = user.hasOwnProperty('age');\nconsole.log(hasAge); // false",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.hasownproperty',
      errors: 'TypeError — если this является null или undefined.',
    },
    {
      name: 'isPrototypeOf()',
      syntax: 'objA.isPrototypeOf(objB)',
      parameters: [
        {
          name: 'objB',
          description:
            'Объект, в чьей цепочке прототипов нужно проверить наличие исходного объекта',
        },
      ],
      description:
        'Метод объекта Object, возвращает true, если исходный объект находится где-то в прототипной цепочке (objB ), иначе false.',
      example:
        'const base = { x: 1 };\nconst obj = Object.create(base);\nconst isProto = base.isPrototypeOf(obj);\nconsole.log(isProto); // true\nconsole.log(Object.prototype.isPrototypeOf([])); // true',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.isprototypeof',
      errors:
        'TypeError — если this или аргумент (objB) являются null или undefined.',
    },
    {
      name: 'Object.assign()',
      syntax: 'Object.assign(dest, source1, ..., sourceN)',
      parameters: [
        {
          name: 'dest',
          description: 'Целевой объект, в который будут скопированы свойства',
        },
        {
          name: 'source1, ..., sourceN',
          description: 'Исходные объекты, чьи свойства будут скопированы',
        },
      ],
      description:
        'Статический метод объекта Object, копирует собственные перечисляемые свойства всех (source1, ..., sourceN) в (dest). Происходит только поверхностное копирование — если свойство является объектом, то будет скопирована только ссылка. Копирует как строковые, так и символьные свойства. Возвращает целевой объект.',
      example:
        "const defaults = { theme: 'light', lang: 'en' };\nconst userSettings = { lang: 'ru' };\nconst settings = Object.assign({}, defaults, userSettings);\nconsole.log(settings); // { theme: 'light', lang: 'ru' }",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.assign',
      errors:
        'TypeError — если первый аргумент (dest) является null или undefined.',
    },
    {
      name: 'Object.is()',
      syntax: 'Object.is(value1, value2)',
      parameters: [
        {
          name: 'value1',
          description: 'Первое значение для сравнения',
        },
        {
          name: 'value2',
          description: 'Второе значение для сравнения',
        },
      ],
      description:
        'Статический метод объекта Object, сравнивает (value1 и value2) и определяет, являются ли они строго равными. Работает аналогично оператору строгого равенства, кроме двух случаев:\n • Object.is(NaN, NaN) === true\n • Object.is(0, -0) === false',
      example:
        "console.log(Object.is(NaN, NaN)); // true\nconsole.log(Object.is(0, -0)); // false\nconsole.log(Object.is('hello', 'hello')); // true\nconsole.log(Object.is([], [])); // false",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.is',
    },
    {
      name: 'Object.keys()',
      syntax: 'Object.keys(obj)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, ключи которого нужно получить',
        },
      ],
      description:
        'Статический метод объекта Object, возвращает массив строковых ключей из (obj). Игнорирует символьные свойства и перебирает только собственные.',
      example:
        "const user = { name: 'Alice', age: 30, city: 'Moscow' };\nconst keys = Object.keys(user);\nconsole.log(keys); // ['name', 'age', 'city']",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.keys',
      errors: 'TypeError — если аргумент (obj) является null или undefined.',
    },
    {
      name: 'Object.values()',
      syntax: 'Object.values(obj)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, значения свойств которого нужно получить',
        },
      ],
      description:
        'Статический метод объекта Object, возвращает массив значений из (obj). Игнорирует символьные свойства и перебирает только собственные.',
      example:
        "const config = { port: 3000, host: 'localhost', debug: true };\nconst values = Object.values(config);\nconsole.log(values); // [3000, 'localhost', true]",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.values',
      errors: 'TypeError — если аргумент (obj) является null или undefined.',
    },
    {
      name: 'Object.entries()',
      syntax: 'Object.entries(obj)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, пары ключ-значение которого нужно получить',
        },
      ],
      description:
        'Статический метод объекта Object, возвращает массив массивов, где каждый вложенный массив содержит пару вида [ключ, значение] из (obj). Игнорирует символьные свойства и перебирает только собственные.',
      example:
        "const product = { name: 'Laptop', price: 999 };\nconst entries = Object.entries(product);\nconsole.log(entries); // [['name', 'Laptop'], ['price', 999]]",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.entries',
      errors: 'TypeError — если аргумент (obj) является null или undefined.',
    },
    {
      name: 'Object.fromEntries()',
      syntax: 'Object.fromEntries(iterable)',
      parameters: [
        {
          name: 'iterable',
          description:
            'Итерируемый объект, содержащий пары вида [ключ, значение]',
        },
      ],
      description:
        'Статический метод объекта Object, создаёт объект из списка пар вида [ключ, значение] из (iterable). Является обратной операцией к Object.entries().',
      example:
        "const map = new Map([\n  ['name', 'Alice'],\n  ['age', 30],\n]);\nconst obj = Object.fromEntries(map);\nconsole.log(obj); // { name: 'Alice', age: 30 }",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.fromentries',
      errors:
        'TypeError — если аргумент (iterable) не является итерируемым объектом с парами вида [ключ, значение].',
    },
    {
      name: 'Object.getOwnPropertyDescriptor()',
      syntax: 'Object.getOwnPropertyDescriptor(obj, prop)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, из которого получаем информацию о свойстве',
        },
        {
          name: 'prop',
          description: 'Имя свойства, для которого нужно получить дескриптор',
        },
      ],
      description:
        'Статический метод объекта Object, возвращает объект-дескриптор, содержащий информацию о конфигурации (prop) в (obj): значение (value), а также флаги writable, enumerable, configurable.',
      example:
        "const obj = { name: 'Ann', age: 30 };\nconst descriptor = Object.getOwnPropertyDescriptor(obj, 'name');\nconsole.log(descriptor);\n// {\n//   value: 'Ann',\n//   writable: true,\n//   enumerable: true,\n//   configurable: true\n// }",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getownpropertydescriptor',
      errors:
        'TypeError — если первый аргумент (obj) равен null или undefined.',
    },
    {
      name: 'Object.defineProperty()',
      syntax: 'Object.defineProperty(obj, prop, descriptor)',
      parameters: [
        {
          name: 'obj',
          description:
            'Объект, в котором будет определено или изменено свойство',
        },
        {
          name: 'prop',
          description: 'Имя свойства, для которого нужно применить дескриптор',
        },
        {
          name: 'descriptor',
          description: 'Объект-дескриптор, описывающий свойство',
        },
      ],
      description:
        'Статический метод объекта Object, позволяет изменить или определить свойство в (obj). Если (prop) существует, метод обновит его значение и флаги. В противном случае метод создаёт новое свойство с указанным (descriptor); если какой-либо флаг не указан явно, ему присваивается значение false.',
      example:
        "const obj = {};\nObject.defineProperty(obj, 'readonlyProp', {\n  value: 42,\n  writable: false,\n  enumerable: true\n});\nconsole.log(obj.readonlyProp); // 42\nobj.readonlyProp = 100; // TypeError в strict mode",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.defineproperty',
      errors:
        'TypeError — если первый аргумент (obj) равен null или undefined.',
    },
    {
      name: 'Object.defineProperties()',
      syntax: 'Object.defineProperties(obj, properties)',
      parameters: [
        {
          name: 'obj',
          description:
            'Объект, в котором будут определены или изменены свойства',
        },
        {
          name: 'properties',
          description:
            'Объект, ключи которого являются именами свойств, а значения — дескрипторами этих свойств',
        },
      ],
      description:
        'Статический метод объекта Object, позволяет изменить или определить несколько свойств в (obj) одновременно. Для каждого ключа из (properties) применяется соответствующий дескриптор: если свойство с таким именем существует, оно обновляется; если нет — создаётся новое.',
      example:
        "const user = {};\nObject.defineProperties(user, {\n  name: {\n    value: 'Alice',\n    writable: true,\n    enumerable: true\n  },\n  age: {\n    value: 30,\n    writable: true,\n    enumerable: false\n  }\n});\nconsole.log(Object.keys(user)); // ['name']",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.defineproperties',
      errors:
        'TypeError — если первый аргумент (obj) равен null или undefined.',
    },
    {
      name: 'Object.getOwnPropertyDescriptors()',
      syntax: 'Object.getOwnPropertyDescriptors(obj)',
      parameters: [
        {
          name: 'obj',
          description:
            'Объект, для которого нужно получить дескрипторы всех собственных свойств',
        },
      ],
      description:
        'Статический метод объекта Object, возвращает объект, содержащий дескрипторы всех собственных свойств (obj). Вместе с Object.defineProperties() позволяет клонировать объект с сохранением всех флагов свойств.',
      example:
        'const obj = {};\nObject.defineProperties(obj, {\n  x: { value: 10, writable: false },\n  y: { value: 20, enumerable: false }\n});\nconst descriptors = Object.getOwnPropertyDescriptors(obj);\nconsole.log(descriptors.x.writable); // false\nconsole.log(descriptors.y.enumerable); // false',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getownpropertydescriptors',
      errors: 'TypeError — если аргумент (obj) является null или undefined.',
    },
    {
      name: 'Object.preventExtensions()',
      syntax: 'Object.preventExtensions(obj)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, который нужно сделать нерасширяемым',
        },
      ],
      description:
        "Статический метод объекта Object, запрещает добавление новых свойств в (obj). После вызова этого метода (obj) становится 'нерасширяемым' — нельзя добавлять новые свойства, но существующие можно изменять или удалять.",
      example:
        "const obj = { prop: 'value' };\nObject.preventExtensions(obj);\nobj.newProp = 'new'; // TypeError в strict mode\nconsole.log('newProp' in obj); // false",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.preventextensions',
      errors: 'TypeError — если аргумент (obj) является null или undefined.',
    },
    {
      name: 'Object.isExtensible()',
      syntax: 'Object.isExtensible(obj)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, который необходимо проверить на расширяемость',
        },
      ],
      description:
        'Статический метод объекта Object, проверяет, является ли (obj) расширяемым (можно ли добавлять к нему новые свойства). Возвращает true, если расширяемый, и false, если нет.',
      example:
        'const obj = { x: 10 };\nconsole.log(Object.isExtensible(obj)); // true\nObject.preventExtensions(obj);\nconsole.log(Object.isExtensible(obj)); // false',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.isextensible',
      errors: 'TypeError — если аргумент (obj) является null или undefined.',
    },
    {
      name: 'Object.seal()',
      syntax: 'Object.seal(obj)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, который нужно запечатать',
        },
      ],
      description:
        'Статический метод объекта Object, запрещает добавление и удаление свойств в (obj), а также изменение их дескрипторов. Устанавливает configurable: false для всех существующих свойств, но позволяет изменять их значения, если writable: true.',
      example:
        "const obj = { name: 'John', age: 25 };\nObject.seal(obj);\nobj.age = 30; // Изменение значения работает\nconsole.log(obj.age); // 30\ndelete obj.name; // Не работает в strict mode",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.seal',
      errors: 'TypeError — если аргумент (obj) является null или undefined.',
    },
    {
      name: 'Object.isSealed()',
      syntax: 'Object.isSealed(obj)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, который необходимо проверить на запечатанность',
        },
      ],
      description:
        'Статический метод объекта Object, проверяет, запечатан ли (obj). Возвращает true, если запечатан (нельзя добавлять/удалять свойства и изменять их дескрипторы), иначе возвращает false.',
      example:
        'const obj = { x: 10, y: 20 };\nconsole.log(Object.isSealed(obj)); // false\nObject.seal(obj);\nconsole.log(Object.isSealed(obj)); // true',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.issealed',
      errors: 'TypeError — если аргумент (obj) является null или undefined.',
    },
    {
      name: 'Object.freeze()',
      syntax: 'Object.freeze(obj)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, который нужно заморозить',
        },
      ],
      description:
        'Статический метод объекта Object, делает (obj) полностью неизменяемым. Запрещает добавление, удаление и изменение свойств, а также изменение их дескрипторов. Устанавливает configurable: false и writable: false для всех существующих свойств.',
      example:
        "const config = { version: '1.0', debug: false };\nObject.freeze(config);\nconsole.log(config.debug); // false\nconfig.debug = true;\nconsole.log(config.debug); // false (изменение не применилось)\nconsole.log('newProp' in config); // false\nconfig.newProp = 'test';\nconsole.log('newProp' in config); // false (свойство не добавилось)",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.freeze',
      errors: 'TypeError — если аргумент (obj) является null или undefined.',
    },
    {
      name: 'Object.isFrozen()',
      syntax: 'Object.isFrozen(obj)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, который необходимо проверить на замороженность',
        },
      ],
      description:
        'Статический метод объекта Object, проверяет, заморожен ли (obj). Возвращает true, если полностью неизменяем (нельзя добавлять/удалять/изменять свойства), иначе возвращает false.',
      example:
        'const obj = { value: 100 };\nconsole.log(Object.isFrozen(obj)); // false\nObject.freeze(obj);\nconsole.log(Object.isFrozen(obj)); // true',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.isfrozen',
      errors: 'TypeError — если аргумент (obj) является null или undefined.',
    },
    {
      name: 'Object.create()',
      syntax: 'Object.create(proto, [descriptors])',
      parameters: [
        {
          name: 'proto',
          description:
            'Объект, который будет использоваться как прототип создаваемого объекта',
        },
        {
          name: 'descriptors',
          description:
            'Объект-дескриптор для определения свойств нового объекта',
        },
      ],
      description:
        'Статический метод объекта Object, создаёт объект, используя (proto) в качестве прототипа. (descriptors) позволяет определять свойства нового объекта с помощью дескрипторов. Мы также можем использовать Object.create для «продвинутого» клонирования объекта с сохранением дескрипторов свойств.',
      example:
        "const proto = { greet() { return 'Hello'; } };\nconst obj = Object.create(proto, {\n  name: { value: 'Alice', enumerable: true }\n});\nconsole.log(obj.greet()); // 'Hello'\nconsole.log(obj.name); // 'Alice'",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.create',
      errors:
        'TypeError — если первый аргумент (proto) не является null или объектом, или если второй аргумент (descriptors) указан и не является объектом.',
    },
    {
      name: 'Object.getPrototypeOf()',
      syntax: 'Object.getPrototypeOf(obj)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, чей прототип нужно получить',
        },
      ],
      description:
        'Статический метод объекта Object, возвращает прототип (скрытое свойство [[Prototype]]) (obj). Это альтернатива использованию свойства __proto__.',
      example:
        'const proto = { base: true };\nconst obj = Object.create(proto);\nconst prototype = Object.getPrototypeOf(obj);\nconsole.log(prototype === proto); // true',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getprototypeof',
      errors: 'TypeError — если аргумент (obj) является null или undefined.',
    },
    {
      name: 'Object.setPrototypeOf()',
      syntax: 'Object.setPrototypeOf(obj, proto)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, чей прототип нужно установить',
        },
        {
          name: 'proto',
          description: 'Новый прототип объекта (объект или null)',
        },
      ],
      description:
        'Статический метод объекта Object, устанавливает прототип (скрытое свойство [[Prototype]]) для (obj) равным (proto). Это альтернатива использованию свойства __proto__.',
      example:
        'const animal = { eats: true };\nconst rabbit = { jumps: true };\nObject.setPrototypeOf(rabbit, animal);\nconsole.log(rabbit.eats); // true\nconsole.log(Object.getPrototypeOf(rabbit) === animal); // true',
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.setprototypeof',
      errors:
        'TypeError — если аргументы (obj, proto) являются null или undefined.',
    },
    {
      name: 'Object.getOwnPropertySymbols()',
      syntax: 'Object.getOwnPropertySymbols(obj)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, символьные ключи которого нужно получить',
        },
      ],
      description:
        'Статический метод объекта Object, возвращает массив всех собственных символьных ключей (obj).',
      example:
        "const id = Symbol('id');\nconst token = Symbol('token');\nconst obj = {\n  [id]: 123,\n  [token]: 'abc',\n  name: 'Test'\n};\nconst symbols = Object.getOwnPropertySymbols(obj);\nconsole.log(symbols); // [Symbol(id), Symbol(token)]",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getownpropertysymbols',
      errors: 'TypeError — если аргумент (obj) является null или undefined.',
    },
    {
      name: 'Object.getOwnPropertyNames()',
      syntax: 'Object.getOwnPropertyNames(obj)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, строковые ключи которого нужно получить',
        },
      ],
      description:
        'Статический метод объекта Object, возвращает массив всех собственных строковых ключей (obj).',
      example:
        "const obj = {};\nObject.defineProperties(obj, {\n  visible: { value: 1, enumerable: true },\n  hidden: { value: 2, enumerable: false }\n});\nconst keys = Object.keys(obj);\nconst names = Object.getOwnPropertyNames(obj);\nconsole.log(keys); // ['visible']\nconsole.log(names); // ['visible', 'hidden']",
      specification:
        'https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getownpropertynames',
      errors: 'TypeError — если аргумент (obj) является null или undefined.',
    },
  ],
};
