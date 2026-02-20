import { Methods, type IMethod } from '@/entities/method';

export const configFunction: Record<Methods.FUNCTION, IMethod[]> = {
  [Methods.FUNCTION]: [
    {
      name: 'name',
      syntax: 'function.name',
      description:
        'Свойство объектов функции, которое возвращает имя функции. Для анонимных функций возвращает пустую строку или имя переменной. Свойство только для чтения (read-only).',
      example:
        "const myFunc = function() {};\nconst name = myFunc.name;\nconsole.log(name); // 'myFunc'",
      specification:
        'https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function-instances-name',
      errors: 'TypeError — если this не является функцией.',
    },
    {
      name: 'length',
      syntax: 'function.length',
      description:
        'Свойство объектов функции, которое возвращает количество параметров, указанных в объявлении функции. Не учитывает параметры по умолчанию и rest параметры. Свойство только для чтения (read-only).',
      example:
        'function sum(a, b) {};\nconst length = sum.length;\nconsole.log(length); // 2',
      specification:
        'https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function-instances-length',
      errors: 'TypeError — если this не является функцией.',
    },
    {
      name: 'call()',
      syntax: 'func.call(thisArg, ...args)',
      parameters: [
        {
          name: 'thisArg',
          description:
            'Значение, которое будет использоваться как this при вызове функции',
        },
        {
          name: '...args',
          description: 'Аргументы, которые будут переданы функции',
        },
      ],
      description:
        'Встроенный метод функции, который позволяет вызывать функцию, явно устанавливая this. Запускает функцию, используя первый аргумент как её контекст this, а последующие – как её аргументы.',
      example:
        "function greet(name) {\n console.log(`Hello, ${name}! I'm ${this.title}`);\n}\nconst person = { title: 'Mr.' };\ngreet.call(person, 'John'); // 'Hello, John! I'm Mr.'",
      specification:
        'https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function.prototype.call',
      errors: 'TypeError — если this не является функцией.',
    },
    {
      name: 'apply()',
      syntax: 'func.apply(thisArg, argsArray)',
      parameters: [
        {
          name: 'thisArg',
          description:
            'Значение, которое будет использоваться как this при вызове функции',
        },
        {
          name: 'argsArray',
          description:
            'Массив или псевдомассив аргументов, которые будут переданы функции',
        },
      ],
      description:
        'Встроенный метод функции, который позволяет вызывать функцию, явно устанавливая this. Запускает функцию, используя первый аргумент как её контекст this, а второй параметр – как массив её аргументов. Единственное отличие от call() – передача аргументов массивом.',
      example:
        'function sum(a, b, c) {\n return a + b + c;\n}\nconst numbers = [1, 2, 3];\nconst result = sum.apply(null, numbers);\nconsole.log(result); // 6',
      specification:
        'https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function.prototype.apply',
      errors: 'TypeError — если this не является функцией.',
    },
    {
      name: 'bind()',
      syntax: 'func.bind(thisArg, ...args)',
      parameters: [
        {
          name: 'thisArg',
          description:
            'Значение, которое будет использоваться как this в новой функции (или null/undefined для глобального контекста)',
        },
        {
          name: '...args',
          description:
            'Аргументы, которые будут частично применены к новой функции',
        },
      ],
      description:
        'Встроенный метод функции, который создаёт новую функцию с фиксированным this и начальными аргументами. Возвращает функцию-обёртку, которая при вызове вызывает оригинальную функцию с указанным контекстом и предустановленными аргументами, дополненными новыми аргументами при вызове.',
      example:
        "function greet(greeting, name) {\n console.log(`${greeting}, ${name}!`);\n}\nconst sayHello = greet.bind(null, 'Hello');\nsayHello('John'); // 'Hello, John!'",
      specification:
        'https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function.prototype.bind',
      errors: 'TypeError — если this не является функцией.',
    },
  ],
};
