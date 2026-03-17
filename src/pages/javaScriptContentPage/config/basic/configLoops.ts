import { type ITopic } from '@/entities/topic';

export const configLoops: ITopic = {
  value: 'loops-and-iterations',
  name: 'Циклы и итерации',
  content: {
    introduction:
      'Циклы позволяют выполнять блок кода многократно. В JavaScript есть 6 видов циклов для разных задач.',
    sections: [
      {
        title: 'Цикл for',
        content:
          'Классический цикл с счётчиком. Используется, когда известно количество итераций.\n\n' +
          'for (инициализация; условие; шаг) { тело }',
        addition:
          '• Инициализация выполняется один раз перед стартом\n' +
          '• Условие проверяется перед каждой итерацией\n' +
          '• Шаг выполняется после каждой итерации\n' +
          '• Любая часть может быть пропущена: for(;;) — бесконечный цикл\n',
        examples:
          'for (let i = 0; i < 5; i++) console.log(i); // 0,1,2,3,4\n' +
          'for (let i = 0; i < 10; i+=2) console.log(i); // 0,2,4,6,8\n' +
          'for (let i = 5; i > 0; i--) console.log(i); // 5,4,3,2,1',
      },
      {
        title: 'Цикл while',
        content:
          'Выполняется пока условие истинно. Условие проверяется ДО каждой итерации.\n\n' +
          'while (условие) { тело }',
        addition:
          'Если условие ложно с самого начала — тело не выполнится ни разу.\n' +
          'Важно изменять переменные в условии, иначе цикл станет бесконечным.',
        examples:
          'let i = 0;\nwhile (i < 5) { console.log(i); i++; } // 0,1,2,3,4\n\n' +
          'let input = "";\nwhile (input !== "stop") { input = prompt("Команда:"); }',
      },
      {
        title: 'Цикл do...while',
        content:
          'Выполняется пока условие истинно. Условие проверяется ПОСЛЕ каждой итерации.\n\n' +
          'do { тело } while (условие);',
        addition:
          'Тело выполняется минимум один раз, даже если условие ложно.\n' +
          'Точка с запятой после условия обязательна.',
        examples:
          'let i = 0;\ndo { console.log(i); i++; } while (i < 5); // 0,1,2,3,4\n\n' +
          'let password;\ndo { password = prompt("Пароль:"); } while (password !== "secret");',
      },
      {
        title: 'Цикл for...in',
        content:
          'Перебирает ключи (имена свойств) объекта. Включая унаследованные перечисляемые свойства.\n\n' +
          'for (ключ in объект) { тело }',
        addition:
          '• Для массивов НЕ рекомендуется (индексы возвращаются как строки)\n' +
          '• Порядок перебора не гарантирован\n' +
          '• Проверка hasOwnProperty() отсеивает унаследованные свойства',
        examples:
          'const user = { name: "Иван", age: 30 };\n' +
          'for (const key in user) console.log(key, user[key]); // name Иван, age 30\n\n' +
          '// С проверкой на собственные свойства\n' +
          'for (const key in user) if (user.hasOwnProperty(key)) console.log(key); // name, age',
      },
      {
        title: 'Цикл for...of',
        content:
          'Перебирает значения итерируемых объектов.\n\n' +
          'for (значение of итерируемыйОбъект) { тело }',
        addition:
          '• Появился в ES6\n' +
          '• Не работает с обычными объектами по умолчанию (они не итерируемы)\n' +
          '• Объект можно сделать итерируемым, добавив метод [Symbol.iterator]\n' +
          '• В отличие от for...in — перебирает значения, а не ключи',
        examples:
          'const arr = [10, 20, 30];\nfor (const val of arr) console.log(val); // 10,20,30\n\n' +
          'const str = "Hello";\nfor (const char of str) console.log(char); // H,e,l,l,o\n\n' +
          'const map = new Map([["a",1], ["b",2]]);\nfor (const [k,v] of map) console.log(k, v); // a 1, b 2',
      },
      {
        title: 'Асинхронный цикл for await...of',
        content:
          'Специальная версия цикла for...of для работы с асинхронными итерируемыми объектами.\n\n' +
          'for await (переменная of асинхронныйИтерируемыйОбъект) { тело }',
        addition:
          '• Работает ТОЛЬКО внутри асинхронных функций (async function) или на верхнем уровне модулей\n' +
          '• Автоматически ожидает (await) каждый элемент перед выполнением тела цикла\n' +
          '• Поддерживает break, continue и метки как обычные циклы\n' +
          '• Может перебирать как асинхронные, так и синхронные итерируемые объекты',
        examples:
          '// Пример: получение данных с публичного API\n' +
          'async function fetchFirstPhotos(albumId, limit = 3) {\n' +
          '  const response = await fetch(`https:/jsonplaceholder.typicode.com/albums/${albumId}/photos`);\n' +
          '  const photos = await response.json();\n' +
          '  \n' +
          '  let count = 0;\n' +
          '  for await (const photo of photos) {\n' +
          '    if (count >= limit) break;\n' +
          '    console.log(`Фото ${count + 1}:`, photo.title);\n' +
          '    console.log(`  URL: ${photo.thumbnailUrl}\\n`);\n' +
          '    count++;\n' +
          '  }\n' +
          '}\n\n' +
          '// Запуск (в консоли браузера или Node.js с поддержкой fetch)\n' +
          'fetchFirstPhotos(1);',
      },
      {
        title: 'break — дериктива для прерывания цикла',
        content:
          'Немедленно завершает текущий цикл. Управление передаётся за тело цикла.',
        addition:
          'Может использоваться с метками для выхода из вложенных циклов.',
        examples:
          'for (let i = 0; i < 10; i++) {\n' +
          '  if (i === 5) break;\n' +
          '  console.log(i); // 0,1,2,3,4\n' +
          '}\n\n' +
          '// С меткой\n' +
          'outer: for (let i = 0; i < 3; i++) {\n' +
          '  for (let j = 0; j < 3; j++) {\n' +
          '    if (i === 1 && j === 1) break outer;\n' +
          '    console.log(i, j); // 0 0, 0 1, 0 2, 1 0\n' +
          '  }\n' +
          '}',
      },
      {
        title: 'continue — дериктива для пропуска итерации',
        content: 'Пропускает текущую итерацию и переходит к следующей.',
        addition:
          'В for сначала выполняется шаг, затем проверка условия.\n' +
          'Может использоваться с метками.',
        examples:
          'for (let i = 0; i < 5; i++) {\n' +
          '  if (i === 2) continue;\n' +
          '  console.log(i); // 0,1,3,4\n' +
          '}\n\n' +
          '// С меткой\n' +
          'outer: for (let i = 0; i < 3; i++) {\n' +
          '  for (let j = 0; j < 3; j++) {\n' +
          '    if (j === 1) continue outer;\n' +
          '    console.log(i, j); // 0 0, 1 0, 2 0\n' +
          '  }\n' +
          '}',
      },
      {
        title: 'Метки (Labels)',
        content:
          'Позволяют дать имя циклу или блоку для использования с break/continue.',
        addition:
          'Используются редко, но полезны для выхода из глубоко вложенных циклов.',
        examples:
          'myBlock: {\n' +
          '  console.log("До break");\n' +
          '  break myBlock;\n' +
          '  console.log("Не выполнится");\n' +
          '}\n\n' +
          'loop: for (let i = 0; i < 3; i++) {\n' +
          '  for (let j = 0; j < 3; j++) {\n' +
          '    if (j === 1) continue loop;\n' +
          '    console.log(i, j); // 0 0, 1 0, 2 0\n' +
          '  }\n' +
          '}',
      },
    ],
  },
};
