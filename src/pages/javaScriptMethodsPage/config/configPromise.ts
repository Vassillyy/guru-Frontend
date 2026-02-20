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
          description:
            'Необязательная функция, вызываемая при отклонении промиса',
        },
      ],
      description:
        'Метод объекта Promise, добавляет обработчики для случаев успешного завершения и/или ошибки промиса. Возвращает новый промис, который разрешается или отклоняется в зависимости от результата вызова обработчиков и их возвращаемых значений.',
      example:
        'const promise = new Promise((resolve) => resolve(42));\npromise.then((value) => {\n console.log(value); // 42\n return value * 2;\n}).then((result) => {\n console.log(result); // 84\n});',
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
        "const promise = new Promise((resolve, reject) => reject(new Error('Failed!')));\npromise.catch((error) => {\n console.log(error.message); // 'Failed!'\n});",
      specification:
        'https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.catch',
    },
    {
      name: 'finally()',
      syntax: 'promise.finally(onFinally)',
      parameters: [
        {
          name: 'onFinally',
          description:
            'Функция, вызываемая при завершении промиса (независимо от успеха или ошибки)',
        },
      ],
      description:
        'Метод объекта Promise, добавляет обработчик, вызываемый при завершении промиса (независимо от того, завершился он успешно или с ошибкой). Не получает никаких аргументов. Возвращает новый промис.',
      example:
        "const promise = new Promise((resolve) => resolve('Success'));\npromise.finally(() => {\n console.log('Cleanup'); // 'Cleanup'\n}).then((value) => {\n console.log(value); // 'Success'\n});",
      specification:
        'https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.finally',
    },
    {
      name: 'Promise.all()',
      syntax: 'Promise.all(iterable)',
      parameters: [
        {
          name: 'iterable',
          description: 'Итерируемый объект (обычно массив), содержащий промисы',
        },
      ],
      description:
        'Статический метод объекта Promise, принимает массив промисов и возвращает новый промис. Новый промис завершится, когда завершится весь переданный список промисов, и его результатом будет массив их результатов. Порядок элементов массива в точности соответствует порядку исходных промисов. Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.',
      example:
        'const p1 = Promise.resolve(1);\nconst p2 = Promise.resolve(2);\nconst p3 = Promise.resolve(3);\nPromise.all([p1, p2, p3]).then((values) => {\n console.log(values); // [1, 2, 3]\n});',
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
          description: 'Итерируемый объект (обычно массив), содержащий промисы',
        },
      ],
      description:
        "Статический метод объекта Promise, принимает массив промисов и возвращает новый промис. Метод всегда ждёт завершения всех промисов. В массиве результатов будет объект {status: 'fulfilled', value: результат} для успешных завершений, {status: 'rejected', reason: ошибка} для ошибок.",
      example:
        "const p1 = Promise.resolve(1);\nconst p2 = Promise.reject('error');\nPromise.allSettled([p1, p2]).then((results) => {\n console.log(results);\n}); // [{status:'fulfilled',value:1},{status:'rejected',reason:'error'}]",
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
          description: 'Итерируемый объект (обычно массив), содержащий промисы',
        },
      ],
      description:
        'Статический метод объекта Promise, принимает массив промисов и возвращает новый промис. Метод ждёт только первый выполненный промис, из которого берёт результат (или ошибку). После этого остальные промисы игнорируются.',
      example:
        "const p1 = new Promise(resolve => setTimeout(() => resolve('First'), 100));\nconst p2 = new Promise(resolve => setTimeout(() => resolve('Second'), 50));\nPromise.race([p1, p2]).then((result) => {\n console.log(result); // 'Second'\n});",
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
          description: 'Итерируемый объект (обычно массив), содержащий промисы',
        },
      ],
      description:
        'Статический метод объекта Promise, принимает массив промисов и возвращает новый промис. Метод ждёт только первый успешно выполненный промис, из которого берёт результат. Если ни один из переданных промисов не завершится успешно, тогда возвращённый объект Promise будет отклонён с помощью AggregateError – специального объекта ошибок, который хранит все ошибки промисов в своём свойстве errors.',
      example:
        "const p1 = new Promise((resolve, reject) => setTimeout(() => reject('Err'), 90));\nconst p2 = new Promise(resolve => setTimeout(() => resolve('Success'), 50));\nPromise.any([p1, p2]).then((result) => {\n console.log(result); // 'Success'\n});",
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
        'const promise = Promise.resolve(42);\npromise.then((value) => {\n console.log(value); // 42\n});',
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
        "const promise = Promise.reject('Some error');\npromise.catch((error) => {\n console.log(error); // 'Some error'\n});",
      specification:
        'https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.reject',
    },
  ],
};
