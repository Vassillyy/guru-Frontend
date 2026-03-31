import { type ITopic } from '@/entities/topic';

export const configObjectMethods: ITopic = {
  value: 'object-methods',
  name: 'Методы объектов и this',
  content: {
    introduction:
      'Метод — это функция, которая является свойством объекта. Методы позволяют объектам выполнять действия и взаимодействовать с их данными. Ключевое слово this предоставляет доступ к свойствам объекта внутри метода.',
    sections: [
      {
        title: 'Синтаксис объявления методов',
        content:
          'Существует два способа объявления методов:\n' +
          '1. Обычная запись: method: function() { ... }\n' +
          '2. Сокращённая запись (ES6): method() { ... } (предпочтителена)',
        addition:
          'Оба способа создают функцию со своим this, который определяется при вызове.',
        examples:
          '// Обычная запись\n' +
          'const user = {\n' +
          '  sayHi: function() {\n' +
          '    console.log("Привет");\n' +
          '  }\n' +
          '};\n\n' +
          '// Сокращённая запись\n' +
          'const user2 = {\n' +
          '  sayHi() {\n' +
          '    console.log("Привет");\n' +
          '  }\n' +
          '};\n\n' +
          'user.sayHi(); // "Привет"\n' +
          'user2.sayHi(); // "Привет"',
      },
      {
        title: 'Ключевое слово this',
        content:
          'this — это контекст вызова функции. Значение this определяется в момент вызова метода, а не объявления.\n\n' +
          'Основные правила:\n' +
          'this — это объект «перед точкой», через который вызван метод.\n' +
          'Вызов без объекта: this === undefined\n' +
          'Если обратиться к this в глобальной области видимости, оно будет привязано к объекту window в браузере. Однако если обратиться к this в строгом режиме, то в this будет записано undefined.',
        addition:
          'this не является фиксированным — одна и та же функция может быть методом разных объектов, и каждый раз this будет ссылаться на тот объект, через который вызван метод.',
        examples:
          '// Одна функция — разные this\n' +
          'const admin = { name: "Админ" };\n' +
          'const guest = { name: "Гость" };\n\n' +
          'function sayName() {\n' +
          '  console.log(this.name);\n' +
          '}\n\n' +
          'admin.f = sayName;\n' +
          'guest.f = sayName;\n\n' +
          'admin.f(); // "Админ" (this === admin)\n' +
          'guest.f(); // "Гость" (this === guest)\n\n' +
          '// Вызов без объекта — нестрогий режим\n' +
          'function showThis() {\n' +
          '  console.log(this); // window (в браузере)\n' +
          '}\n' +
          'showThis();\n\n' +
          '// Вызов без объекта — строгий режим\n' +
          '"use strict";\n' +
          'function showThisStrict() {\n' +
          '  console.log(this); // undefined\n' +
          '}\n' +
          'showThisStrict();',
      },
      {
        title: 'Потеря this при присваивании',
        content:
          'При присваивании метода переменной или передаче его как колбэка this теряется, так как функция вызывается без контекста.',
        addition:
          'Для сохранения this используются:\n' +
          '• bind() — создаёт функцию с зафиксированным this\n' +
          '• Стрелочные функции — наследуют this из внешнего контекста\n' +
          '• Явная передача контекста в колбэки',
        examples:
          'const user = {\n' +
          '  name: "Иван",\n' +
          '  getName() {\n' +
          '    return this.name;\n' +
          '  }\n' +
          '};\n\n' +
          '// Потеря this\n' +
          'const fn = user.getName;\n' +
          'console.log(fn()); // undefined (this потерян)\n\n' +
          '// Решение через bind\n' +
          'const boundFn = user.getName.bind(user);\n' +
          'console.log(boundFn()); // "Иван"\n\n' +
          '// Решение через стрелочную функцию\n' +
          'const arrowFn = () => user.getName();\n' +
          'console.log(arrowFn()); // "Иван"',
      },
      {
        title: 'This в стрелочных функциях',
        content:
          'Стрелочные функции не имеют собственного this. Они наследуют его из внешней (лексической) области видимости.\n\n' +
          'Это означает, что this в стрелочной функции берётся из того места, где она объявлена, а не где вызвана.',
        addition:
          'Стрелочные функции удобны для сохранения контекста в колбэках (forEach, map, setTimeout), но не подходят как методы объектов.',
        examples:
          '// Стрелочная функция как метод — this не работает\n' +
          'const user = {\n' +
          '  name: "Иван",\n' +
          '  regular: function() {\n' +
          '    console.log(this.name);\n' +
          '  },\n' +
          '  arrow: () => {\n' +
          '    console.log(this.name);\n' +
          '  }\n' +
          '};\n\n' +
          'user.regular(); // "Иван"\n' +
          'user.arrow(); // undefined\n\n' +
          '// Стрелочная функция внутри метода — наследует this метода\n' +
          'const user2 = {\n' +
          '  name: "Иван",\n' +
          '  sayHi() {\n' +
          '    const arrow = () => {\n' +
          '      console.log(this.name);\n' +
          '    };\n' +
          '    arrow();\n' +
          '  }\n' +
          '};\n' +
          'user2.sayHi(); // "Иван"',
      },
    ],
  },
};
