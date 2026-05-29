import { Methods, type IMethod } from '@/entities/method';

export const configFunction: Record<Methods.FUNCTION, IMethod[]> = {
  [Methods.FUNCTION]: [
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
        'Метод объекта Function, позволяет вызывать исходную функцию, используя thisArg как её контекст this, а ...args – как её аргументы.',
      example:
        'function greet(name) {\n' +
        " console.log(`Hello, ${name}! I'm ${this.title}`);\n" +
        '}\n' +
        "const person = { title: 'Mr.' };\n" +
        "greet.call(person, 'John'); // 'Hello, John! I'm Mr.'",
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
        'Метод объекта Function, позволяет вызывать функцию, используя thisArg как её контекст this, а argsArray – как массив её аргументов. Единственное отличие от call() – передача аргументов массивом.',
      example:
        'function sum(a, b, c) {\n' +
        ' return a + b + c;\n' +
        '}\n' +
        'const numbers = [1, 2, 3];\n' +
        'const result = sum.apply(null, numbers);\n' +
        'console.log(result); // 6',
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
        'Метод объекта Function, создаёт новую функцию с фиксированным this и начальными аргументами. Возвращает функцию-обёртку, которая при вызове вызывает оригинальную функцию с thisArg и ...args, дополненными новыми аргументами при вызове.\n' +
        'Свойство name функции, возвращённой bind(), будет свойством name исходной функции с префиксом "bound ".\n' +
        'Привязанные функции не имеют собственного свойства prototype. При вызове такой функции в качестве конструктора (через new) используется прототип исходной функции.',
      example:
        'function greet(greeting, name) {\n' +
        '  console.log(`${greeting}, ${name}!`);\n' +
        '}\n' +
        "const sayHello = greet.bind(null, 'Hello');\n" +
        "sayHello('John'); // 'Hello, John!'\n\n" +
        'console.log(sayHello.name); // "bound greet"\n\n' +
        'function Animal(type) {\n' +
        '  this.type = type;\n' +
        '}\n' +
        'Animal.prototype.speak = function() {\n' +
        '  console.log(this.type);\n' +
        '};\n' +
        'const BoundAnimal = Animal.bind(null, "cat");\n' +
        'const cat = new BoundAnimal();\n' +
        'console.log(cat.type); // "cat"\n' +
        'console.log(cat instanceof Animal); // true\n' +
        'console.log(BoundAnimal.prototype); // undefined',
      specification:
        'https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function.prototype.bind',
      errors: 'TypeError — если this не является функцией.',
    },
    {
      name: 'name',
      syntax: 'function.name',
      description:
        'Свойство объекта Function, возвращает имя исходной функции. Для анонимных функций возвращает пустую строку или имя переменной. Свойство только для чтения (read-only).',
      example:
        'const myFunc = function() {};\n' +
        'const name = myFunc.name;\n' +
        "console.log(name); // 'myFunc'",
      specification:
        'https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function-instances-name',
      errors: 'TypeError — если this не является функцией.',
    },
    {
      name: 'length',
      syntax: 'function.length',
      description:
        'Свойство объекта Function, возвращает количество параметров исходной функции, указанных в объявлении. Не учитывает параметры по умолчанию и rest параметры. Свойство только для чтения (read-only).',
      example:
        'function sum(a, b) {};\n' +
        'const length = sum.length;\n' +
        'console.log(length); // 2',
      specification:
        'https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function-instances-length',
      errors: 'TypeError — если this не является функцией.',
    },
  ],
};
