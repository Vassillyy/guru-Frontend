import { type ITopic } from '@/entities/topic';

export const configCurrying: ITopic = {
  value: 'currying',
  name: 'Каррирование',
  content: {
    introduction:
      'Каррирование — это преобразование функции, которое позволяет вызывать её с аргументами по частям, возвращая новую функцию для каждого частичного применения, пока не будут переданы все необходимые аргументы.',
    sections: [
      {
        title: 'Основы каррирования',
        content:
          'Каррирование трансформирует вызов f(a, b, c) в f(a)(b)(c). Это не вызывает функцию, а лишь преобразует её.\n' +
          'Арность — количество аргументов функции.\n' +
          'Чистое каррирование — каждый шаг принимает ровно один аргумент: f(a)(b)(c).',
        addition:
          '• Каждая функция возвращает следующую функцию\n' +
          '• Предыдущие аргументы сохраняются в замыкании\n' +
          '• Работает только с фиксированным числом аргументов\n' +
          '• Функции с rest-параметрами (...args) не каррируются',
        examples:
          'function multiply(a, b, c) {\n' +
          '  return a * b * c;\n' +
          '}\n' +
          'const result = multiply(1, 2, 3);\n' +
          'console.log(result); // 6\n\n' +
          '// Чистое каррирование\n' +
          'function multiply(a) {\n' +
          '  return (b) => {\n' +
          '    return (c) => {\n' +
          '      return a * b * c;\n' +
          '    };\n' +
          '  };\n' +
          '}\n' +
          'multiply(1)(2)(3); // 6\n\n' +
          '// Разбитый вызов\n' +
          'const mul1 = multiply(1);\n' +
          'const mul2 = mul1(2);\n' +
          'const result = mul2(3);\n' +
          'console.log(result); // 6',
      },
      {
        title: 'Универсальная функция каррирования',
        content:
          'Функция curry(func) преобразует любую функцию в каррированную версию, которая поддерживает оба варианта вызова. В отличие от чистого каррирования, здесь можно передавать несколько аргументов за раз.',
        addition:
          '• Если аргументов достаточно — функция выполняется сразу\n' +
          '• Если аргументов недостаточно — возвращает частично применённую функцию',
        examples:
          'function curry(func) {\n' +
          '  return function curried(...args) {\n' +
          '    if (args.length >= func.length) {\n' +
          '      return func.apply(this, args);\n' +
          '    } else {\n' +
          '      return function(...args2) {\n' +
          '        return curried.apply(this, args.concat(args2));\n' +
          '      };\n' +
          '    }\n' +
          '  };\n' +
          '}\n\n' +
          '// Использование\n' +
          'function sum(a, b, c) {\n' +
          '  return a + b + c;\n' +
          '}\n' +
          'const curriedSum = curry(sum);\n\n' +
          'curriedSum(1, 2, 3); // обычный вызов\n' +
          'curriedSum(1)(2, 3); // частичное применение\n' +
          'curriedSum(1)(2)(3); // чистое каррирование',
      },
      {
        title: 'Частичное применение',
        content:
          'Частичное применение — это процесс привязки (фиксации) части аргументов к функции, в результате чего получается новая функция с меньшим количеством аргументов (меньшей арностью).',
        addition:
          '• В отличие от каррирования, можно фиксировать любое количество аргументов за раз\n' +
          '• Некоторые аргументы получают значения по умолчанию, остальные остаются открытыми\n' +
          '• При использовании bind может иметь более высокую производительность, так как напрямую привязывает аргументы без создания множественных замыканий',
        examples:
          '// Частичное применение через bind\n' +
          'function greet(greeting, punctuation, name) {\n' +
          '  return `${greeting}, ${name}${punctuation}`;\n' +
          '}\n\n' +
          'const greetHello = greet.bind(null, "Привет", "!");\n' +
          'console.log(greetHello("Алиса")); // Привет, Алиса!\n\n' +
          '// Универсальная функция partial\n' +
          'function partial(fn, ...fixed) {\n' +
          '  return (...rest) => fn(...fixed, ...rest);\n' +
          '}\n\n' +
          'function discount(price, rate) {\n' +
          '  return price * rate;\n' +
          '}\n\n' +
          'const tenPercent = partial(discount, 0.1);\n' +
          'console.log(tenPercent(500)); // 50\n' +
          'console.log(tenPercent(1000)); // 100',
      },
    ],
  },
};
