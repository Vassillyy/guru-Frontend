import { type ITopic } from '@/entities/topic';

export const configPromises: ITopic = {
  value: 'promises',
  name: 'Промисы',
  content: {
    introduction:
      'Promise — это объект, который содержит будущее значение асинхронной операции. Промис может находиться в одном из трёх состояний: pending (ожидание), fulfilled (выполнено) или rejected (отклонено).',
    sections: [
      {
        title: 'Создание промиса: new Promise',
        content:
          'Промис создаётся через конструктор new Promise(executor). Функция-исполнитель (executor) запускается автоматически при создании промиса.\n\n' +
          'Аргументы исполнителя:\n' +
          '• resolve(value) — вызывается при успехе, результат value\n' +
          '• reject(error) — вызывается при ошибке, error — объект ошибки\n\n' +
          'Внутренние свойства промиса:\n' +
          '• state — вначале "pending", меняется на "fulfilled" при resolve или "rejected" при reject\n' +
          '• result — вначале undefined, меняется на value при resolve или error при reject',
        addition:
          'Свойства state ([[PromiseState]]) и result ([[PromiseResult]]) — внутренние, напрямую недоступны.\n' +
          'Вызвать resolve или reject можно сразу, не только после асинхронной операции.\n' +
          'Вызов resolve/reject после первого вызова игнорируется — состояние меняется только один раз.',
        examples:
          '// Успешный промис\n' +
          'const promise = new Promise((resolve, reject) => {\n' +
          '  setTimeout(() => resolve("готово"), 1000);\n' +
          '});\n\n' +
          '// Промис с ошибкой\n' +
          'const failPromise = new Promise((resolve, reject) => {\n' +
          '  setTimeout(() => reject(new Error("Ошибка!")), 1000);\n' +
          '});\n\n' +
          '// Мгновенный результат\n' +
          'const instantPromise = new Promise((resolve) => {\n' +
          '  resolve(42); // сразу выполнится\n' +
          '});\n\n' +
          '// Игнорирование повторных вызовов\n' +
          'const ignored = new Promise((resolve, reject) => {\n' +
          '  resolve("первый");\n' +
          '  resolve("второй"); // игнорируется\n' +
          '  reject("ошибка"); // игнорируется\n' +
          '});\n' +
          'ignored.then(console.log); // "первый"',
      },
      {
        title: 'Обработка результата: then, catch, finally',
        content:
          'Методы then, catch и finally добавляют в промис функции-обработчики. Они ждут результата и сработают, когда промис завершится.\n\n' +
          'then(onFulfilled, [onRejected]) — основной метод:\n' +
          '• Первый аргумент — функция при успешном выполнении\n' +
          '• Второй аргумент — функция при ошибке\n\n' +
          'catch(onRejected) — обработка ошибок, аналог then(null, onRejected).\n\n' +
          'finally(onFinally) — выполняется всегда, независимо от результата.',
        addition:
          'Обработчики на завершённом промисе запускаются сразу.\n' +
          'then возвращает новый промис — это основа цепочек.\n' +
          'finally не имеет аргументов, результат передаётся дальше по цепочке. Также он не знает, как завершился промис и не должен ничего возвращать, иначе возвращаемое значение игнорируется. Единственным исключением из этого правила является случай, когда обработчик finally выдает ошибку. Затем эта ошибка передается следующему обработчику вместо любого предыдущего результата.',
        examples:
          'const promise = new Promise((resolve, reject) => {\n' +
          '  resolve("данные");\n' +
          '});\n\n' +
          '// then с двумя обработчиками\n' +
          'promise.then(\n' +
          '  (result) => console.log("Успех:", result),\n' +
          '  (error) => console.log("Ошибка:", error)\n' +
          ');\n\n' +
          '// then с одним обработчиком\n' +
          'promise.then((result) => console.log(result));\n\n' +
          '// catch для ошибок\n' +
          'const failPromise = new Promise((resolve, reject) => {\n' +
          '  reject(new Error("Не удалось"));\n' +
          '});\n' +
          'failPromise.catch((err) => console.log(err.message));\n\n' +
          '// finally — очистка\n' +
          'promise\n' +
          '  .finally(() => console.log("Очистка"))\n' +
          '  .then((r) => console.log(r));',
      },
      {
        title: 'Цепочка промисов',
        content:
          'Вызов promise.then() возвращает промис, поэтому можно строить цепочки. Результат каждого обработчика передаётся в следующий.\n\n' +
          'Если обработчик возвращает значение — оно становится результатом следующего промиса.\n' +
          'Если обработчик возвращает промис — следующий обработчик ждёт его выполнения.',
        addition:
          'thenable — объект с методом then, обрабатывается как промис.',
        examples:
          '// Простая цепочка\n' +
          'new Promise((r) => r(1))\n' +
          '  .then((x) => x * 2)     // 2\n' +
          '  .then((x) => x * 2)     // 4\n' +
          '  .then(console.log);      // 4\n\n' +
          '// Возвращение промисов в обработчиках\n' +
          'new Promise((r) => r(1))\n' +
          '  .then((x) => new Promise((res) => {\n' +
          '    setTimeout(() => res(x * 2), 1000);\n' +
          '  }))\n' +
          '  .then(console.log); // 2 через 1 секунду\n\n' +
          '// Несколько then на одном промисе — НЕ цепочка!\n' +
          'const p = Promise.resolve(1);\n' +
          'p.then((x) => console.log(x)); // 1\n' +
          'p.then((x) => console.log(x)); // 1 (тоже 1)\n' +
          'p.then((x) => console.log(x)); // 1 (тоже 1)\n\n' +
          '// Thenable объект\n' +
          'const thenable = {\n' +
          '  then(resolve) {\n' +
          '    resolve("значение");\n' +
          '  }\n' +
          '};\n' +
          'Promise.resolve(thenable).then(console.log);',
      },
      {
        title: 'Очередь микрозадач',
        content:
          'Методы then, catch и finally всегда выполняются асинхронно, даже если промис уже завершён. ' +
          'Код, расположенный ниже в синхронном потоке, всегда выполнится раньше, чем обработчики промиса.\n' +
          'Это происходит из-за специальной внутренней очереди, которая в спецификации называется PromiseReactionJob.',
        addition:
          'Когда промис завершается, его обработчики не вызываются сразу, а попадают в очередь микрозадач.\n' +
          'Движок JavaScript сначала выполняет весь текущий синхронный код.\n' +
          'Только после этого он берёт задачи из очереди микрозадач (по принципу FIFO: первым пришёл — первым ушёл) и выполняет их.\n\n' +
          'Ошибка считается необработанной, если к моменту, когда очередь микрозадач опустеет, промис находится в состоянии rejected, и к нему не был добавлен обработчик .catch. В этом случае движок генерирует событие unhandledrejection.',
        examples:
          '// Демонстрация асинхронности обработчиков\n' +
          'const resolvedPromise = Promise.resolve("промис выполнен");\n\n' +
          'resolvedPromise.then((value) => console.log(value));\n' +
          'console.log("код выполнен");\n\n' +
          '// Вывод:\n' +
          '// "код выполнен"\n' +
          '// "промис выполнен"\n\n' +
          '// Цепочка промисов и очередь\n' +
          'Promise.resolve("первый")\n' +
          '  .then((r) => console.log(r))\n' +
          '  .then(() => console.log("второй"));\n' +
          'console.log("синхронный код");\n\n' +
          '// Вывод:\n' +
          '// синхронный код\n' +
          '// первый\n' +
          '// второй',
      },
      {
        title: 'Async/await: асинхронные функции',
        content:
          'async перед функцией гарантирует возврат промиса. Любое значение автоматически оборачивается в успешный промис.\n\n' +
          'await можно использовать только внутри async-функций. Он ждёт выполнения промиса и возвращает его результат.\n' +
          'await приостанавливает выполнение функции, не блокируя основной поток.',
        addition:
          'await работает с thenable — если у объекта есть метод then, он будет обработан.',
        examples:
          '// async функция всегда возвращает промис\n' +
          'async function getData() {\n' +
          '  return 42;\n' +
          '}\n' +
          'getData().then(console.log); // 42\n\n' +
          '// await — ожидание результата\n' +
          'async function demo() {\n' +
          '  const promise = new Promise((r) => setTimeout(() => r("готово"), 1000));\n' +
          '  const result = await promise;\n' +
          '  console.log(result);\n' +
          '}\n' +
          'demo() // "готово"\n\n' +
          '// async метод класса\n' +
          'class Loader {\n' +
          '  async load() {\n' +
          '    return await fetch("/data");\n' +
          '  }\n' +
          '}\n\n' +
          '// await с thenable\n' +
          'const thenable = {\n' +
          '  then(resolve) { resolve("ok"); }\n' +
          '};\n' +
          'const result = await thenable;\n' +
          'console.log(result) // "ok"',
      },
    ],
  },
};
