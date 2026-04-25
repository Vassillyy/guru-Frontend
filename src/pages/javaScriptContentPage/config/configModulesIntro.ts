import { type ITopic } from '@/entities/topic';

export const configModulesIntro: ITopic = {
  value: 'modules-intro',
  name: 'Модули',
  content: {
    introduction:
      'Модуль – это файл с кодом, который может экспортировать и импортировать функции, классы и переменные. На уровне языка модули появились в ES2015.',
    sections: [
      {
        title: 'Основы модулей',
        content:
          'Модуль – это файл. Один скрипт – один модуль.\n' +
          'Модули используют директивы export и import для обмена функциональностью. Для работы в браузере нужен атрибут <script type="module">.',
        addition:
          '• export отмечает переменные и функции, доступные вне модуля\n' +
          '• import позволяет импортировать функциональность из других модулей\n' +
          '• В модулях всегда включён "use strict"\n' +
          '• Объект import.meta содержит информацию о текущем модуле\n' +
          '• Каждый модуль имеет свою область видимости\n' +
          '• Код выполняется один раз при первом импорте\n' +
          '• На верхнем уровне модуля this === undefined',
        examples:
          '// 📁 sayHi.js\n' +
          'export function sayHi(user) {\n' +
          '  return `Hello, ${user}!`;\n' +
          '}\n\n' +
          '// 📁 main.js\n' +
          "import {sayHi} from './sayHi.js';\n\n" +
          'console.log(sayHi("John")); // Hello, John!',
      },
      {
        title: 'Особенности в браузерах',
        content:
          'Модули в браузере имеют ряд особенностей: отложенное выполнение, поддержка async, требование CORS для внешних модулей.',
        addition:
          '• Выполняются в отложенном режиме (defer), не блокируют HTML\n' +
          '• Атрибут async работает даже для встроенных модулей (в отличие от обычных скриптов)\n' +
          '• Внешние модули с одинаковым src выполняются один раз\n' +
          '• Модули с другого домена требуют заголовки CORS\n' +
          '• Атрибут nomodule для резервных скриптов в старых браузерах',
        examples:
          '<!-- отложенное выполнение -->\n' +
          '<script type="module" src="my.js"></script>\n\n' +
          '<!-- async работает -->\n' +
          '<script async type="module">\n' +
          "  import {counter} from './analytics.js';\n" +
          '  counter.count();\n' +
          '</script>\n\n' +
          '<!-- требует CORS -->\n' +
          '<script type="module" src="http:/example.com/script.js"></script>\n\n' +
          '<!-- fallback для старых браузеров -->\n' +
          '<script nomodule src="fallback.js"></script>',
      },
      {
        title: 'Экспорт, импорт и реэкспорт',
        content:
          'Существуют именованные экспорты и экспорт по умолчанию. Реэкспорт позволяет импортировать и сразу экспортировать.',
        addition:
          'Именованный экспорт:\n' +
          '• export {x, y} или export const x = ...\n' +
          '• import {x, y} from "module"\n\n' +
          'Экспорт по умолчанию:\n' +
          '• export default value\n' +
          '• import x from "module" (без фигурных скобок)\n\n' +
          'Переименование:\n' +
          '• import {x as y} или export {x as y}\n\n' +
          'Реэкспорт:\n' +
          '• export {x} from "module" — реэкспорт именованного\n' +
          '• export * from "module" — реэкспорт всех именованных (default не реэкспортится!)\n' +
          '• export {default as User} from "module" — реэкспорт default',
        examples:
          '// 📁 auth/index.js — точка входа\n' +
          'import {login, logout} from "./helpers.js";\n' +
          'export {login, logout};\n\n' +
          'import User from "./user.js";\n' +
          'export {User};\n\n' +
          '// То же самое через реэкспорт:\n' +
          'export {login, logout} from "./helpers.js";\n' +
          'export {default as User} from "./user.js";\n\n' +
          '// export * не реэкспортирует default!\n' +
          'export * from "./user.js"; // только именованные\n' +
          'export {default} from "./user.js"; // только default',
      },
      {
        title: 'Динамические импорты',
        content:
          'Выражение import(module) загружает модуль динамически и возвращает промис с объектом модуля.',
        addition:
          '• Путь к модулю можно формировать динамически\n' +
          '• Работает в обычных скриптах (без type="module")\n' +
          '• Это не функция, а специальный синтаксис',
        examples:
          '// Динамический импорт\n' +
          "let modulePath = prompt('Какой модуль загружать?');\n" +
          'import(modulePath).then(obj => {\n' +
          '  obj.sayHi();\n' +
          '}).catch(err => console.error(err));\n\n' +
          '// С await\n' +
          'async function load() {\n' +
          "  let say = await import('./say.js');\n" +
          '  say.hi();\n' +
          '  say.bye();\n' +
          '  say.default(); // экспорт по умолчанию\n' +
          '}',
      },
    ],
  },
};
