import { type ITopic } from '@/entities/topic';

export const configFunctions: ITopic = {
  value: 'functions',
  name: 'Функции',
  content: {
    introduction:
      'Функция — это объект с типом Function, который позволяет инкапсулировать код для многократного использования.',
    sections: [
      {
        title: 'Параметры vs Аргументы',
        content:
          'Параметры — это переменные, указанные в определении функции.\n' +
          'Аргументы — это конкретные значения, переданные при вызове функции.',
        addition:
          '• Параметры получают значения аргументов при вызове\n' +
          '• Если аргумент не передан, параметр получает undefined\n' +
          '• Можно задать значения по умолчанию (ES6): param = defaultValue\n' +
          '• Rest-параметры (...rest) собирают оставшиеся аргументы в массив',
        examples:
          '// Параметры: a и b\n' +
          'function sum(a, b) {\n' +
          '  return a + b;\n' +
          '}\n' +
          '// Аргументы: 5 и 3\n' +
          'console.log(sum(5, 3)); // 8\n\n' +
          '// Значения по умолчанию\n' +
          'function greet(name = "Гость") {\n' +
          '    return `Привет, ${name}!`;\n' +
          '}\n' +
          'console.log(greet()); // "Привет, Гость!"\n' +
          'console.log(greet("Иван")); // "Привет, Иван!"\n\n' +
          '// Rest-параметры\n' +
          'function logAll(first, ...rest) {\n' +
          '    console.log("Первый:", first); // Первый: 1\n' +
          '    console.log("Остальные:", rest); // Остальные: [2, 3, 4]\n' +
          '}\n' +
          'logAll(1, 2, 3, 4);',
      },
      {
        title: 'Директива return',
        content:
          'return — директива, которая возвращает значение из функции и завершает её выполнение.',
        addition:
          '• Может возвращать любое выражение или значение\n' +
          '• Если return вызван без значения, функция возвращает undefined\n' +
          '• Если return отсутствует, функция возвращает undefined\n' +
          '• После return код не выполняется\n' +
          '• Нельзя вставлять перенос строки между return и значением (ставится автозапятая)',
        examples:
          '// Возврат значения\n' +
          'function multiply(a, b) {\n' +
          '    return a * b;\n' +
          '    console.log("Это не выполнится");\n' +
          '}\n' +
          'console.log(multiply(3, 4)); // 12\n\n' +
          '// return без значения\n' +
          'function logMessage(msg) {\n' +
          '    if (!msg) return; // досрочный выход, вернет undefined\n' +
          '    console.log(msg);\n' +
          '}\n' +
          'console.log(logMessage("")); // undefined\n\n' +
          '// Функция без return\n' +
          'function noReturn() {\n' +
          '    let x = 10;\n' +
          '}\n' +
          'console.log(noReturn()); // undefined\n\n' +
          '// Важно! Нельзя переносить строку после return\n' +
          'function wrong() {\n' +
          '    return\n' +
          '    { value: 42 }; // Этот объект не вернется!\n' +
          '}\n' +
          'console.log(wrong()); // undefined (из-за автозапятой)\n\n' +
          '// Правильно:\n' +
          'function right() {\n' +
          '    return { value: 42 };\n' +
          '}\n' +
          'console.log(right()); // { value: 42 }',
      },
      {
        title: 'Function Declaration',
        content:
          'Функция, объявленная как отдельная инструкция с ключевым словом function.\n\n ' +
          'function имяФункции(списокПараметров) { тело }',
        addition:
          '• Поднимается (hoisting) — можно вызвать до объявления\n' +
          '• В строгом режиме, если Function Declaration находится внутри блока {...}, функция доступна везде внутри этого блока, но не снаружи\n' +
          '• Имеет собственный this\n' +
          '• Можно использовать как конструктор с new\n' +
          '• Имеет псевдомассив arguments (содержит все переданные аргументы, даже если параметры не объявлены)',
        examples:
          '// Вызов до объявления сработает\n' +
          'console.log(greet("Иван")); // "Привет, Иван!"\n' +
          'function greet(name) {\n' +
          '    return `Привет, ${name}!`;\n' +
          '}\n\n' +
          '// Пример с arguments\n' +
          'function sumAll() {\n' +
          '    let sum = 0;\n' +
          '    // arguments содержит все переданные аргументы\n' +
          '    for (let i = 0; i < arguments.length; i++) {\n' +
          '        sum += arguments[i];\n' +
          '    }\n' +
          '    return sum;\n' +
          '}\n' +
          'console.log(sumAll(1, 2, 3, 4)); // 10\n\n' +
          '// arguments работает даже если параметры объявлены\n' +
          'function showArgs(first, second) {\n' +
          '    console.log(first); // 1\n' +
          '    console.log(second); // 2\n' +
          '    console.log(arguments[2]); // 3 (доступ к "лишнему" аргументу)\n' +
          '    console.log(arguments.length); // 3 (количество переданных аргументов)\n' +
          '}\n' +
          'showArgs(1, 2, 3);\n\n' +
          '// Использование с new (функция-конструктор)\n' +
          'function User(name) {\n' +
          '    this.name = name;\n' +
          '    this.isAdmin = false;\n' +
          '}\n' +
          'const user = new User("Анна");\n' +
          'console.log(user); // User { name: "Анна", isAdmin: false }',
      },
      {
        title: 'Function Expression',
        content:
          'Функция, созданная внутри другого выражения или синтаксической конструкции.\n\n' +
          'const/let/var имяПеременной = function(параметры) { тело }',
        addition:
          '• Не поднимается — доступна только после объявления\n' +
          '• Имеет собственный this\n' +
          '• Можно использовать как конструктор с new\n' +
          '• Имеет объект arguments',
        examples:
          'const greet = function(name) {\n' +
          '    return `Привет, ${name}!`;\n' +
          '};\n' +
          'console.log(greet("Мария")); // "Привет, Мария!"\n\n' +
          '// Использование с new\n' +
          'const Car = function(model, year) {\n' +
          '    this.model = model;\n' +
          '    this.year = year;\n' +
          '    this.isNew = year > 2020;\n' +
          '};\n' +
          'const myCar = new Car("Tesla", 2023);\n' +
          'console.log(myCar); // Car { model: "Tesla", year: 2023, isNew: true }',
      },
      {
        title: 'Named Function Expression',
        content:
          'Function Expression, у которой есть имя.\n\n ' +
          'const/let/var имяПеременной = function имяФункции(параметры) { тело }',
        addition:
          '• Обладает всеми свойствами Function Expression\n' +
          '• Имя доступно только внутри области видимости функции\n' +
          '• Позволяет организовывать рекурсивные вызовы',
        examples:
          'const factorial = function calc(n) {\n' +
          '    return n <= 1 ? 1 : n * calc(n - 1);\n' +
          '};\n' +
          'console.log(factorial(5)); // 120\n' +
          'console.log(calc(5)); // Ошибка! calc не определена\n\n' +
          '// Использование с new\n' +
          'const Person = function PersonConstructor(name, age) {\n' +
          '    this.name = name;\n' +
          '    this.age = age;\n' +
          '    this.canVote = age >= 18;\n' +
          '    // внутри доступно имя PersonConstructor\n' +
          '};\n' +
          'const person = new Person("Иван", 25);\n' +
          'console.log(person); // Person { name: "Иван", age: 25, canVote: true }',
      },
      {
        title: 'Immediately Invoked Function Expressions',
        content:
          'Функция, выполняющаяся сразу после объявления.\n\n' +
          '(function(параметры) { тело })(аргументы); / ((параметры) => { тело })(аргументы);',
        addition:
          '• Создают изолированную область видимости\n' +
          '• Используются для избежания загрязнения глобальной области\n' +
          '• Выполняются один раз',
        examples:
          '(function() {\n' +
          '    const privateVar = "Это приватно";\n' +
          '    console.log("Функция выполнилась сразу");\n' +
          '})();\n\n' +
          '(() => {\n' +
          '    console.log("Функция выполнилась сразу");\n' +
          '})();\n\n' +
          '// С параметрами\n' +
          '(function(global) {\n' +
          '    global.message = "Доступно глобально";\n' +
          '})(window);',
      },
      {
        title: 'Arrow Functions Expression (Стрелочные функции)',
        content:
          'Современный синтаксис с использованием =>, появился в ES6.\n\n' +
          'const/let/var имяПеременной = (параметры) => { тело }',
        addition:
          '• Не имеют собственного this (наследуют от внешнего контекста)\n' +
          '• Не имеют объекта arguments (наследуют от внешнего контекста)\n' +
          '• Не имеют собственного super\n' +
          '• Не имеют свойства prototype (не могут быть конструкторами, не работают с new)\n' +
          '• Компактный синтаксис с неявным return при отсутствии фигурных скобок',
        examples:
          '// Один параметр и неявный return\n' +
          'const double = x => x * 2;\n' +
          'console.log(double(5)); // 10\n\n' +
          '// Возврат объекта требует круглых скобок\n' +
          'const createUser = (name, age) => ({ name, age });\n' +
          'console.log(createUser("Анна", 25)); // { name: "Анна", age: 25 }\n\n' +
          '// Нет своего this\n' +
          'const obj = {\n' +
          '    name: "Объект",\n' +
          '    regular: function() { console.log(this.name); },\n' +
          '    arrow: () => console.log(this.name)\n' +
          '};\n' +
          'obj.regular(); // "Объект"\n' +
          'obj.arrow(); // undefined (this взят из внешнего контекста)\n\n' +
          '// Нет arguments\n' +
          'const arrowArgs = () => console.log(arguments);\n' +
          'arrowArgs(1, 2, 3); // Ошибка - ReferenceError: arguments is not defined\n\n' +
          '// Отсутствие prototype\n' +
          'const arrowFunc = () => {};\n' +
          'console.log(arrowFunc.prototype); // undefined',
      },
    ],
  },
};
