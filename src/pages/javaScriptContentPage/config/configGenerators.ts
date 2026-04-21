import { type ITopic } from '@/entities/topic';

export const configGenerators: ITopic = {
  value: 'generators',
  name: 'Генераторы',
  content: {
    introduction:
      'Генераторы — это функции, которые могут приостанавливать своё выполнение, возвращать промежуточный результат и продолжать работу позже. Они отлично работают с перебираемыми объектами. Асинхронные генераторы и итераторы позволяют работать с асинхронными потоками данных.',
    sections: [
      {
        title: 'Функция-генератор',
        content:
          'Генератор объявляется через function* (function со звёздочкой). При вызове он не выполняет код сразу, а возвращает объект-генератор.\n\n' +
          'Метод next() запускает выполнение до ближайшего yield и приостанавливает функцию. Возвращает объект {value, done}: value — значение из yield, done — true при завершении.',
        addition:
          'function* f() и function *f() — оба синтаксиса корректны. Предпочтителен первый вариант, так как звёздочка относится к типу функции.\n' +
          'Генератор можно перебирать через for..of, при этом последнее значение (где done: true) игнорируется.',
        examples:
          'function* generateSequence() {\n' +
          '  yield 1;\n' +
          '  yield 2;\n' +
          '  return 3;\n' +
          '}\n\n' +
          'const generator = generateSequence();\n' +
          'console.log(generator.next()); // {value: 1, done: false}\n' +
          'console.log(generator.next()); // {value: 2, done: false}\n' +
          'console.log(generator.next()); // {value: 3, done: true}\n\n' +
          '// Перебор через for..of\n' +
          'for (const value of generateSequence()) {\n' +
          '  console.log(value); // 1, 2 (3 не выведется!)\n' +
          '}\n\n' +
          '// Правильный перебор — без return\n' +
          'function* generateFull() {\n' +
          '  yield 1;\n' +
          '  yield 2;\n' +
          '  yield 3;\n' +
          '}\n' +
          'for (const v of generateFull()) console.log(v); // 1, 2, 3',
      },
      {
        title: 'Оператор yield',
        content:
          'yield не только возвращает значение наружу, но и может принимать значение извне через next(value). Первый вызов next() всегда без аргумента.\n\n' +
          'generator.next(value) передаёт value как результат текущего yield и возобновляет выполнение.',
        addition:
          'Можно передавать ошибки через generator.throw(err) — исключение возникнет на строке с yield.',
        examples:
          'function* ask() {\n' +
          '  const a = yield "2 + 2?";\n' +
          '  const b = yield "3 + 3?";\n' +
          '  return a + b;\n' +
          '}\n\n' +
          'const it = ask();\n' +
          'console.log(it.next().value); // "2 + 2?"\n' +
          'console.log(it.next(4).value); // "3 + 3?"\n' +
          'console.log(it.next(6).value); // 10\n\n' +
          '// Обработка ошибок через throw\n' +
          'function* errorExample() {\n' +
          '  try {\n' +
          '    const result = yield "введите число";\n' +
          '    console.log("Результат:", result);\n' +
          '  } catch (err) {\n' +
          '    console.log("Ошибка поймана:", err.message);\n' +
          '  }\n' +
          '}\n\n' +
          'const errGen = errorExample();\n' +
          'console.log(errGen.next().value); // "введите число"\n' +
          'errGen.throw(new Error("что-то пошло не так")); // Ошибка поймана: что-то пошло не так',
      },
      {
        title: 'Композиция генераторов',
        content:
          'yield* позволяет вкладывать генераторы друг в друга. Это «делегирует» выполнение другому генератору, прозрачно направляя его вывод наружу.\n\n' +
          'Композиция не использует дополнительную память для промежуточных результатов.',
        addition:
          'Можно комбинировать генераторы для создания сложных последовательностей. Результат такой же, как если бы код был встроен напрямую.',
        examples:
          'function* generateSequence(start, end) {\n' +
          '  for (let i = start; i <= end; i++) yield i;\n' +
          '}\n\n' +
          'function* generatePasswordChars() {\n' +
          '  yield* generateSequence(48, 57); // 0-9\n' +
          '  yield* generateSequence(65, 90); // A-Z\n' +
          '  yield* generateSequence(97, 122); // a-z\n' +
          '}\n\n' +
          'const str = [...generatePasswordChars()]\n' +
          '  .map(code => String.fromCharCode(code))\n' +
          '  .join("");\n' +
          'console.log(str); // "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"',
      },
      {
        title: 'Асинхронные итераторы',
        content:
          'Асинхронные итераторы используют Symbol.asyncIterator вместо Symbol.iterator. Метод next() должен возвращать промис.\n\n' +
          'Для перебора используется for await (let item of iterable).',
        addition:
          'Оператор расширения ... не работает с асинхронными итераторами. Функции, ожидающие синхронные итераторы, не работают с асинхронными.',
        examples:
          'const asyncRange = {\n' +
          '  from: 1,\n' +
          '  to: 3,\n' +
          '  [Symbol.asyncIterator]() {\n' +
          '    return {\n' +
          '      current: this.from,\n' +
          '      last: this.to,\n' +
          '      async next() {\n' +
          '        await new Promise(r => setTimeout(r, 1000));\n' +
          '        if (this.current <= this.last) {\n' +
          '          return { done: false, value: this.current++ };\n' +
          '        }\n' +
          '        return { done: true };\n' +
          '      }\n' +
          '    };\n' +
          '  }\n' +
          '};\n\n' +
          '(async () => {\n' +
          '  for await (const value of asyncRange) {\n' +
          '    console.log(value); // 1, 2, 3 с задержкой\n' +
          '  }\n' +
          '})();',
      },
      {
        title: 'Асинхронные генераторы',
        content:
          'Асинхронный генератор объявляется как async function*. Внутри можно использовать await.\n\n' +
          'Метод generator.next() теперь возвращает промис, поэтому нужно await generator.next().',
        addition:
          'async генераторы позволяют создавать асинхронно перебираемые объекты через Symbol.asyncIterator.',
        examples:
          'async function* asyncGenerate(start, end) {\n' +
          '  for (let i = start; i <= end; i++) {\n' +
          '    await new Promise(r => setTimeout(r, 1000));\n' +
          '    yield i;\n' +
          '  }\n' +
          '}\n\n' +
          '(async () => {\n' +
          '  for await (const value of asyncGenerate(1, 3)) {\n' +
          '    console.log(value); // 1, 2, 3 с задержкой\n' +
          '  }\n' +
          '})();\n\n' +
          '// Асинхронно перебираемый объект\n' +
          'const asyncRangeObj = {\n' +
          '  from: 1,\n' +
          '  to: 3,\n' +
          '  async *[Symbol.asyncIterator]() {\n' +
          '    for (let i = this.from; i <= this.to; i++) {\n' +
          '      await new Promise(r => setTimeout(r, 500));\n' +
          '      yield i;\n' +
          '    }\n' +
          '  }\n' +
          '};',
      },
    ],
  },
};
