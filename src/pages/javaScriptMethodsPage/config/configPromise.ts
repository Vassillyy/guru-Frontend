import { Methods, type IMethod } from '@/entities/method';

export const configPromise: Record<Methods.PROMISE, IMethod[]> = {
  [Methods.PROMISE]: [
    {
      name: 'then()',
      syntax: 'promise.then(onFulfilled[, onRejected])',
      parameters: [
        {
          name: 'onFulfilled',
          description: 'Функция, вызываемая при успешном завершении промиса',
        },
        {
          name: 'onRejected',
          description: 'Функция, вызываемая при отклонении промиса',
        },
      ],
      description:
        'Метод объекта Promise, добавляет обработчики для случаев успешного завершения и/или ошибки промиса. Возвращает новый промис.',
      example:
        'const promise = new Promise((resolve) => resolve(42));\n\n' +
        'promise.then((value) => {\n' +
        ' console.log(value); // 42\n' +
        ' return value * 2;\n' +
        '}).then((result) => {\n' +
        ' console.log(result); // 84\n' +
        '});',
      specification:
        'https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.then',
    },
    {
      name: 'catch()',
      syntax: 'promise.catch(onRejected)',
      parameters: [
        {
          name: 'onRejected',
          description: 'Функция, вызываемая при отклонении промиса',
        },
      ],
      description:
        'Метод объекта Promise, добавляет обработчик только для случая ошибки промиса. Является синтаксическим сахаром для promise.then(null, onRejected). Возвращает новый промис.',
      example:
        "const promise = new Promise((res, rej) => rej(new Error('Failed')));\n\n" +
        'promise.catch((error) => {\n' +
        " console.log(error.message); // 'Failed'\n" +
        '});',
      specification:
        'https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.catch',
    },
    {
      name: 'finally()',
      syntax: 'promise.finally(onFinally)',
      parameters: [
        {
          name: 'onFinally',
          description: 'Функция, вызываемая при завершении промиса',
        },
      ],
      description:
        'Метод объекта Promise, добавляет обработчик, вызываемый при завершении промиса (независимо от того, завершился он успешно или с ошибкой). Не получает никаких аргументов. Возвращает новый промис.',
      example:
        "const promise = new Promise((resolve) => resolve('Success'));\n\n" +
        'promise.finally(() => {\n' +
        " console.log('Cleanup'); // 'Cleanup'\n" +
        '}).then((value) => {\n' +
        " console.log(value); // 'Success'\n" +
        '});',
      specification:
        'https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.finally',
    },
    {
      name: 'Promise.all()',
      syntax: 'Promise.all(iterable)',
      parameters: [
        {
          name: 'iterable',
          description: 'Итерируемый объект, содержащий промисы',
        },
      ],
      description:
        'Статический метод объекта Promise, принимает массив промисов и возвращает новый промис. Новый промис завершится, когда завершится весь переданный список промисов, и его результатом будет массив их результатов. Порядок элементов массива в точности соответствует порядку исходных промисов. Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.',
      example:
        'const p1 = Promise.resolve(1);\n' +
        'const p2 = Promise.resolve(2);\n' +
        'const p3 = Promise.resolve(3);\n\n' +
        'Promise.all([p1, p2, p3]).then((values) => {\n' +
        ' console.log(values); // [1, 2, 3]\n' +
        '});',
      specification:
        'https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.all',
      errors:
        'TypeError — если аргумент (iterable) не является итерируемым объектом.\nPromise rejection — если любой из переданных промисов завершается с ошибкой.',
    },
    {
      name: 'Promise.allSettled()',
      syntax: 'Promise.allSettled(iterable)',
      parameters: [
        {
          name: 'iterable',
          description: 'Итерируемый объект, содержащий промисы',
        },
      ],
      description:
        "Статический метод объекта Promise, принимает массив промисов и возвращает новый промис. Метод всегда ждёт завершения всех промисов. В массиве результатов будет объект {status: 'fulfilled', value: результат} для успешных завершений, {status: 'rejected', reason: ошибка} для ошибок.",
      example:
        'const p1 = Promise.resolve(1);\n' +
        "const p2 = Promise.reject('error');\n\n" +
        'Promise.allSettled([p1, p2]).then((results) => {\n' +
        ' console.log(results);\n' +
        '});\n' +
        "// [{status:'fulfilled',value:1},{status:'rejected',reason:'error'}]",
      specification:
        'https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.allsettled',
      errors:
        'TypeError — если аргумент (iterable) не является итерируемым объектом.',
    },
    {
      name: 'Promise.race()',
      syntax: 'Promise.race(iterable)',
      parameters: [
        {
          name: 'iterable',
          description: 'Итерируемый объект, содержащий промисы',
        },
      ],
      description:
        'Статический метод объекта Promise, принимает массив промисов и возвращает новый промис. Метод ждёт только первый выполненный промис, из которого берёт результат (или ошибку). После этого остальные промисы игнорируются.',
      example:
        "const p1 = new Promise(res => setTimeout(() => res('First'), 100));\n" +
        "const p2 = new Promise(res => setTimeout(() => res('Second'), 50));\n\n" +
        'Promise.race([p1, p2]).then((result) => {\n' +
        " console.log(result); // 'Second'\n" +
        '});',
      specification:
        'https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.race',
      errors:
        'TypeError — если аргумент (iterable) не является итерируемым объектом.',
    },
    {
      name: 'Promise.any()',
      syntax: 'Promise.any(iterable)',
      parameters: [
        {
          name: 'iterable',
          description: 'Итерируемый объект, содержащий промисы',
        },
      ],
      description:
        'Статический метод объекта Promise, принимает массив промисов и возвращает новый промис. Метод ждёт только первый успешно выполненный промис, из которого берёт результат. Если ни один из переданных промисов не завершится успешно, тогда возвращённый объект Promise будет отклонён с помощью AggregateError – специального объекта ошибок, который хранит все ошибки промисов в своём свойстве errors.',
      example:
        "const p1 = new Promise((res, rej) => setTimeout(() => rej('Er'), 90));\n" +
        "const p2 = new Promise(res => setTimeout(() => res('Success'), 50));\n\n" +
        'Promise.any([p1, p2]).then((result) => {\n' +
        " console.log(result); // 'Success'\n" +
        '});',
      specification:
        'https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.any',
      errors:
        'TypeError — если аргумент (iterable) не является итерируемым объектом.\nAggregateError — если все промисы завершаются с ошибкой (содержит свойство errors с массивом всех ошибок).',
    },
    {
      name: 'Promise.resolve()',
      syntax: 'Promise.resolve(value)',
      parameters: [
        {
          name: 'value',
          description: 'Значение, которое будет обёрнуто в Promise',
        },
      ],
      description:
        'Статический метод объекта Promise, возвращает промис, завершённый успешно с переданным значением. Если значение само является промисом, метод вернёт этот промис. Если значение — thenable (объект с методом then), будет создан новый промис, который следует за этим значением (thenable).',
      example:
        '// Обычное значение\n' +
        'const promise1 = Promise.resolve(42);\n' +
        'promise1.then(value => console.log(value)); // 42\n\n' +
        '// Уже существующий промис\n' +
        'const original = new Promise(resolve => resolve("OK"));\n' +
        'const promise2 = Promise.resolve(original);\n' +
        'console.log(promise2 === original); // true (возвращает тот же промис)\n\n' +
        '// Thenable объект\n' +
        'const thenable = {\n' +
        '  then(onFulfilled) {\n' +
        '    onFulfilled("из thenable");\n' +
        '  }\n' +
        '};\n' +
        'const promise3 = Promise.resolve(thenable);\n' +
        'promise3.then(value => console.log(value)); // "из thenable"\n\n' +
        '// Цепочка вызовов\n' +
        'Promise.resolve(10)\n' +
        '  .then(x => x * 2)\n' +
        '  .then(x => console.log(x)); // 20',
      specification:
        'https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.resolve',
    },
    {
      name: 'Promise.reject()',
      syntax: 'Promise.reject(reason)',
      parameters: [
        {
          name: 'reason',
          description: 'Причина ошибки, с которой будет отклонён промис',
        },
      ],
      description:
        'Статический метод объекта Promise, возвращает промис, завершённый с ошибкой с переданной причиной.',
      example:
        '// Обычная ошибка\n' +
        'const promise1 = Promise.reject("Error");\n' +
        'promise1.catch(error => console.log(error)); // "Error"\n\n' +
        '// Объект Error\n' +
        'const promise2 = Promise.reject(new Error("Critical"));\n' +
        'promise2.catch(error => console.log(error.message)); // "Critical"\n\n' +
        '// Объект с данными\n' +
        'const promise4 = Promise.reject({ code: 500, message: "Error" });\n' +
        'promise4.catch(error => console.log(error.code)); // 500\n\n' +
        '// Thenable с ошибкой (передается как есть)\n' +
        'const thenable = {\n' +
        '  then(onFulfilled, onRejected) {\n' +
        '    onRejected("ошибка из thenable");\n' +
        '  }\n' +
        '};\n' +
        'const promise5 = Promise.reject(thenable);\n' +
        'promise5.catch(error => {\n' +
        '  error.then(null, e => console.log(e)); // "ошибка из thenable"\n' +
        '});',
      specification:
        'https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.reject',
    },
  ],
};
