import { type ITopic } from '@/entities/topic';

export const configErrorHandling: ITopic = {
  value: 'error-handling-try-catch',
  name: 'Обработка ошибок',
  content: {
    introduction:
      'Конструкция try/catch/finally перехватывает ошибки во время выполнения. Оператор throw генерирует исключения. JavaScript предоставляет встроенные классы ошибок (Error, SyntaxError, ReferenceError и др.) и позволяет создавать пользовательские ошибки через наследование от Error.',
    sections: [
      {
        title: 'Конструкция try..catch..finally',
        content:
          'Блок try содержит код, который может вызвать ошибку.\n' +
          'Блок catch перехватывает ошибку, если она возникла.\n' +
          'Блок finally выполняется всегда — была ошибка или нет.',
        addition:
          '• try..catch работает только для ошибок, возникающих во время выполнения.\n' +
          '• Синтаксические ошибки не могут быть обработаны внутри того же блока.\n' +
          '• Блок catch получает объект ошибки с деталями.\n' +
          '• Можно опустить переменную в catch: catch { ... } (если детали не нужны).\n' +
          '• finally выполняется даже если в try или catch есть return или throw.',
        examples:
          '// Пример без ошибок\n' +
          'try {\n' +
          '  console.log("Блок try");\n' +
          '} catch (error) {\n' +
          '  console.log("Эта строка не выполнится");\n' +
          '} finally {\n' +
          '  console.log("Finally выполнится всегда");\n' +
          '}\n\n' +
          '// Пример с ошибкой\n' +
          'try {\n' +
          '  console.log(x); // ReferenceError: x не определена\n' +
          '  console.log("Эта строка не выполнится");\n' +
          '} catch (err) {\n' +
          '  console.log("Ошибка: " + err.message);\n' +
          '} finally {\n' +
          '  console.log("Finally выполнится даже при ошибке");\n' +
          '}\n\n' +
          '// Пример с return\n' +
          'function test() {\n' +
          '  try {\n' +
          '    return 1;\n' +
          '  } finally {\n' +
          '    console.log("Finally выполнится до return");\n' +
          '  }\n' +
          '}\n' +
          'console.log(test()); // сначала "Finally...", потом 1',
      },
      {
        title: 'Объект ошибки',
        content:
          'Когда происходит ошибка, JavaScript генерирует объект с деталями. Он передаётся в блок catch.',
        addition:
          'Основные свойства объекта ошибки:\n' +
          '• name — имя ошибки (например, ReferenceError, TypeError).\n' +
          '• message — текстовое описание ошибки.\n' +
          '• stack — стек вызовов на момент ошибки (нестандартное, но широко поддерживается).',
        examples:
          'try {\n' +
          '  undefinedFunction();\n' +
          '} catch (err) {\n' +
          '  console.log(err.name);    // "ReferenceError"\n' +
          '  console.log(err.message); // "undefinedFunction is not defined"\n' +
          '  console.log(err.stack);   // стек вызовов (строка)\n' +
          '}',
      },
      {
        title: 'Встроенные ошибки JavaScript',
        content:
          'JavaScript предоставляет набор встроенных конструкторов для стандартных ошибок. Все они наследуют от базового класса Error.',
        addition:
          'Основные встроенные ошибки:\n' +
          '• Error — базовый класс для всех ошибок.\n' +
          '• SyntaxError — синтаксическая ошибка.\n' +
          '• ReferenceError — обращение к необъявленной переменной.\n' +
          '• TypeError — некорректный тип данных (например, вызов не-функции).\n' +
          '• RangeError — значение вне допустимого диапазона.\n' +
          '• URIError — ошибка в функциях работы с URI.\n' +
          '• EvalError — ошибка, связанная с eval (редко, в основном для совместимости).',
        examples:
          '// ReferenceError\n' +
          'try { console.log(unknownVar); }\n' +
          'catch (e) { console.log(e.name); } // "ReferenceError"\n\n' +
          '// TypeError\n' +
          'try { null.toString(); }\n' +
          'catch (e) { console.log(e.name); } // "TypeError"\n\n' +
          '// RangeError\n' +
          'try { new Array(-1); }\n' +
          'catch (e) { console.log(e.name); } // "RangeError"\n\n' +
          '// SyntaxError (нельзя поймать в том же try..catch, но можно создать)\n' +
          'const syntaxErr = new SyntaxError("Неправильная структура JSON");\n' +
          'console.log(syntaxErr.name);    // "SyntaxError"\n' +
          'console.log(syntaxErr.message); // "Неправильная структура JSON"',
      },
      {
        title: 'Генерация ошибок: throw',
        content:
          'Инструкция throw генерирует ошибку. Можно передать любой объект, но рекомендуется использовать встроенные или пользовательские классы ошибок.\n\n' +
          'throw объект ошибки',
        addition:
          '• При генерации ошибки выполнение текущего блока try или функции останавливается.\n' +
          '• Если ошибка не перехвачена, скрипт «падает».\n' +
          '• Лучше всего выбрасывать объекты, совместимые с Error (с полями name и message).',
        examples:
          'function divide(a, b) {\n' +
          '  if (b === 0) {\n' +
          '    throw new Error("Деление на ноль!");\n' +
          '  }\n' +
          '  return a / b;\n' +
          '}\n\n' +
          'try {\n' +
          '  divide(10, 0);\n' +
          '} catch (err) {\n' +
          '  console.log(err.message); // "Деление на ноль!"\n' +
          '}',
      },
      {
        title: 'Глобальный перехват ошибок (window.onerror)',
        content:
          'Специфичный для браузеров способ перехватить необработанные ошибки (которые не были пойманы ни одним try..catch).',
        addition:
          '• window.onerror срабатывает только для ошибок, которые «выпали» в глобальную область.\n' +
          '• Не может восстановить выполнение скрипта, но полезен для логирования.',
        examples:
          'window.onerror = function(message, url, line, col, error) {\n' +
          '  console.log("Глобальная ошибка:", { message, url, line, col });\n' +
          '  console.log("Объект ошибки:", error);\n' +
          '  return false; // чтобы браузер не выводил стандартное сообщение\n' +
          '};\n\n' +
          '// Теперь любая необработанная ошибка вызовет этот обработчик\n' +
          'setTimeout(() => {\n' +
          '  throw new Error("Ошибка в таймере");\n' +
          '}, 100);',
      },
    ],
  },
};
