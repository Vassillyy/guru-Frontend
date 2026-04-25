import { Methods, type IMethod } from '@/entities/method';

export const configReflect: Record<Methods.REFLECT, IMethod[]> = {
  [Methods.REFLECT]: [
    {
      name: 'Reflect.ownKeys()',
      syntax: 'Reflect.ownKeys(obj)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, все собственные ключи которого нужно получить',
        },
      ],
      description:
        'Статический метод объекта Reflect, возвращает массив всех собственных ключей obj, как перечисляемых, так и неперечисляемых.',
      example:
        "const sym = Symbol('id');\n" +
        'const obj = { a: 1, b: 2, [sym]: 3 };\n' +
        'const keys = Reflect.ownKeys(obj);\n' +
        "console.log(keys); // ['a', 'b', Symbol(id)]",
      specification:
        'https://tc39.es/ecma262/multipage/reflect-object.html#sec-reflect.ownkeys',
      errors: 'TypeError — если obj не является объектом.',
    },
    {
      name: 'Reflect.get()',
      syntax: 'Reflect.get(target, propertyKey, receiver?)',
      parameters: [
        {
          name: 'target',
          description:
            'Целевой объект, у которого нужно получить значение свойства',
        },
        {
          name: 'propertyKey',
          description: 'Имя свойства',
        },
        {
          name: 'receiver',
          description: 'Значение this для геттера',
        },
      ],
      description:
        'Статический метод объекта Reflect, возвращает значение свойства propertyKey из target. Аналог оператора доступа к свойству (target[propertyKey]).',
      example:
        'const obj = { a: 1, b: 2 };\n' +
        'const value = Reflect.get(obj, "a");\n' +
        'console.log(value); // 1',
      specification:
        'https://tc39.es/ecma262/multipage/reflect-object.html#sec-reflect.get',
      errors: 'TypeError — если target не является объектом.',
    },
    {
      name: 'Reflect.set()',
      syntax: 'Reflect.set(target, propertyKey, value, receiver?)',
      parameters: [
        {
          name: 'target',
          description:
            'Целевой объект, у которого нужно установить значение свойства',
        },
        {
          name: 'propertyKey',
          description: 'Имя свойства',
        },
        {
          name: 'value',
          description: 'Новое значение свойства',
        },
        {
          name: 'receiver',
          description: 'Значение this для сеттера',
        },
      ],
      description:
        'Статический метод объекта Reflect, устанавливает value свойства propertyKey в target. Аналог оператора присваивания (target[propertyKey] = value). Возвращает true, если установка прошла успешно, иначе false.',
      example:
        'const obj = { a: 1 };\n' +
        'Reflect.set(obj, "a", 42);\n' +
        'console.log(obj.a); // 42',
      specification:
        'https://tc39.es/ecma262/multipage/reflect-object.html#sec-reflect.set',
      errors: 'TypeError — если target не является объектом.',
    },
    {
      name: 'Reflect.has()',
      syntax: 'Reflect.has(target, propertyKey)',
      parameters: [
        {
          name: 'target',
          description: 'Целевой объект, в котором проверяется наличие свойства',
        },
        {
          name: 'propertyKey',
          description: 'Имя свойства',
        },
      ],
      description:
        'Статический метод объекта Reflect, проверяет наличие свойства propertyKey в target. Аналог оператора in (propertyKey in target). Возвращает true, если свойство propertyKey существует, иначе false.',
      example:
        'const obj = { a: 1 };\n' +
        'console.log(Reflect.has(obj, "a")); // true\n' +
        'console.log(Reflect.has(obj, "b")); // false',
      specification:
        'https://tc39.es/ecma262/multipage/reflect-object.html#sec-reflect.has',
      errors: 'TypeError — если target не является объектом.',
    },
    {
      name: 'Reflect.deleteProperty()',
      syntax: 'Reflect.deleteProperty(target, propertyKey)',
      parameters: [
        {
          name: 'target',
          description: 'Целевой объект, у которого нужно удалить свойство',
        },
        {
          name: 'propertyKey',
          description: 'Имя свойства',
        },
      ],
      description:
        'Статический метод объекта Reflect, удаляет свойство propertyKey из target. Аналог оператора delete (delete target[propertyKey]). Возвращает true, если удаление прошло успешно, иначе false.',
      example:
        'const obj = { a: 1, b: 2 };\n' +
        'Reflect.deleteProperty(obj, "a");\n' +
        'console.log(obj); // { b: 2 }',
      specification:
        'https://tc39.es/ecma262/multipage/reflect-object.html#sec-reflect.deleteproperty',
      errors: 'TypeError — если target не является объектом.',
    },
    {
      name: 'Reflect.construct()',
      syntax: 'Reflect.construct(target, argumentsList, newTarget?)',
      parameters: [
        {
          name: 'target',
          description: 'Функция-конструктор, которую нужно вызвать',
        },
        {
          name: 'argumentsList',
          description: 'Массив аргументов для конструктора',
        },
        {
          name: 'newTarget',
          description: 'Функция, которая будет использоваться как new.target',
        },
      ],
      description:
        'Статический метод объекта Reflect, вызывает target с argumentsList. Аналог оператора new (new (target(argumentsList)). Возвращает экземпляр созданного объекта.',
      example:
        'class Rectangle {\n' +
        '  constructor(width, height) {\n' +
        '    this.width = width;\n' +
        '    this.height = height;\n' +
        '  }\n' +
        '}\n' +
        'const rect = Reflect.construct(Rectangle, [10, 20]);\n' +
        'console.log(rect.width); // 10',
      specification:
        'https://tc39.es/ecma262/multipage/reflect-object.html#sec-reflect.construct',
      errors:
        'TypeError — если target не является конструктором или не функцией.',
    },
    {
      name: 'Reflect.apply()',
      syntax: 'Reflect.apply(target, thisArgument, argumentsList)',
      parameters: [
        {
          name: 'target',
          description: 'Функция, которую нужно вызвать',
        },
        {
          name: 'thisArgument',
          description: 'Значение this для вызова функции',
        },
        {
          name: 'argumentsList',
          description: 'Массив аргументов для функции',
        },
      ],
      description:
        'Статический метод объекта Reflect, вызывает target с thisArgument и argumentsList. Аналог Function.prototype.apply() (Function.prototype.apply.call(target, thisArgument, argumentsList)). Возвращает результат вызова функции.',
      example:
        'function sum(a, b) {\n' +
        '  return a + b;\n' +
        '}\n' +
        'const result = Reflect.apply(sum, null, [5, 3]);\n' +
        'console.log(result); // 8',
      specification:
        'https://tc39.es/ecma262/multipage/reflect-object.html#sec-reflect.apply',
      errors: 'TypeError — если target не является функцией.',
    },
    {
      name: 'Reflect.defineProperty()',
      syntax: 'Reflect.defineProperty(target, propertyKey, descriptor)',
      parameters: [
        {
          name: 'target',
          description: 'Целевой объект, на котором нужно определить свойство',
        },
        {
          name: 'propertyKey',
          description: 'Имя свойства',
        },
        {
          name: 'descriptor',
          description: 'Дескриптор свойства',
        },
      ],
      description:
        'Статический метод объекта Reflect, определяет новое или изменяет существующее свойство propertyKey в target с descriptor. Аналог Object.defineProperty() (Object.defineProperty(target, propertyKey, descriptor)). Возвращает true, если свойство propertyKey было определено успешно, иначе false.',
      example:
        'const obj = {};\n' +
        'Reflect.defineProperty(obj, "a", {\n' +
        '  value: 42,\n' +
        '  writable: false\n' +
        '});\n' +
        'console.log(obj.a); // 42',
      specification:
        'https://tc39.es/ecma262/multipage/reflect-object.html#sec-reflect.defineproperty',
      errors:
        'TypeError — если target не является объектом или descriptor не является объектом.',
    },
    {
      name: 'Reflect.getOwnPropertyDescriptor()',
      syntax: 'Reflect.getOwnPropertyDescriptor(target, propertyKey)',
      parameters: [
        {
          name: 'target',
          description:
            'Целевой объект, для которого нужно получить дескриптор свойства',
        },
        {
          name: 'propertyKey',
          description: 'Имя свойства',
        },
      ],
      description:
        'Статический метод объекта Reflect, возвращает дескриптор собственного свойства propertyKey из target. Аналог Object.getOwnPropertyDescriptor() (Object.getOwnPropertyDescriptor(target, propertyKey)). Возвращает дескриптор свойства propertyKey или undefined, если свойство propertyKey не существует.',
      example:
        'const obj = { a: 42 };\n' +
        'const descriptor = Reflect.getOwnPropertyDescriptor(obj, "a");\n' +
        'console.log(descriptor.value); // 42',
      specification:
        'https://tc39.es/ecma262/multipage/reflect-object.html#sec-reflect.getownpropertydescriptor',
      errors: 'TypeError — если target не является объектом.',
    },
    {
      name: 'Reflect.getPrototypeOf()',
      syntax: 'Reflect.getPrototypeOf(target)',
      parameters: [
        {
          name: 'target',
          description: 'Целевой объект, прототип которого нужно получить',
        },
      ],
      description:
        'Статический метод объекта Reflect, возвращает прототип target. Аналог Object.getPrototypeOf() (Object.getPrototypeOf(target)). Возвращает прототип target или null.',
      example:
        'const parent = { a: 1 };\n' +
        'const child = Object.create(parent);\n' +
        'const proto = Reflect.getPrototypeOf(child);\n' +
        'console.log(proto === parent); // true',
      specification:
        'https://tc39.es/ecma262/multipage/reflect-object.html#sec-reflect.getprototypeof',
      errors: 'TypeError — если target не является объектом.',
    },
    {
      name: 'Reflect.setPrototypeOf()',
      syntax: 'Reflect.setPrototypeOf(target, prototype)',
      parameters: [
        {
          name: 'target',
          description: 'Целевой объект, прототип которого нужно установить',
        },
        {
          name: 'prototype',
          description: 'Новый прототип (должен быть объектом или null)',
        },
      ],
      description:
        'Статический метод объекта Reflect, устанавливает prototype для target. Аналог Object.setPrototypeOf()  (Object.setPrototypeOf(target, prototype)). Возвращает true, если prototype был успешно установлен, иначе false.',
      example:
        'const obj = {};\n' +
        'const proto = { a: 1 };\n' +
        'Reflect.setPrototypeOf(obj, proto);\n' +
        'console.log(obj.a); // 1',
      specification:
        'https://tc39.es/ecma262/multipage/reflect-object.html#sec-reflect.setprototypeof',
      errors:
        'TypeError — если target не является объектом или prototype не является объектом или null.',
    },
    {
      name: 'Reflect.isExtensible()',
      syntax: 'Reflect.isExtensible(target)',
      parameters: [
        {
          name: 'target',
          description: 'Целевой объект, расширяемость которого нужно проверить',
        },
      ],
      description:
        'Статический метод объекта Reflect, проверяет, можно ли добавлять новые свойства в target. Аналог Object.isExtensible() (Object.isExtensible(target)). Возвращает true, если target расширяемый, иначе false.',
      example:
        'const obj = {};\n' +
        'console.log(Reflect.isExtensible(obj)); // true\n' +
        'Object.preventExtensions(obj);\n' +
        'console.log(Reflect.isExtensible(obj)); // false',
      specification:
        'https://tc39.es/ecma262/multipage/reflect-object.html#sec-reflect.isextensible',
      errors: 'TypeError — если target не является объектом.',
    },
    {
      name: 'Reflect.preventExtensions()',
      syntax: 'Reflect.preventExtensions(target)',
      parameters: [
        {
          name: 'target',
          description: 'Целевой объект, который нужно сделать нерасширяемым',
        },
      ],
      description:
        'Статический метод объекта Reflect, запрещает добавление новых свойств в target. Аналог Object.preventExtensions() (Object.preventExtensions(target)). Возвращает true, если операция прошла успешно, иначе false.',
      example:
        'const obj = { a: 1 };\n' +
        'Reflect.preventExtensions(obj);\n' +
        'obj.b = 2; // В строгом режиме вызовет ошибку\n' +
        'console.log(obj.b); // undefined',
      specification:
        'https://tc39.es/ecma262/multipage/reflect-object.html#sec-reflect.preventextensions',
      errors: 'TypeError — если target не является объектом.',
    },
  ],
};
