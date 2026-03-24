import { type ITopic } from '@/entities/topic';

export const configConstructor: ITopic = {
  value: 'constructor-and-new',
  name: 'Функция-конструктор',
  content: {
    introduction:
      'Функции-конструкторы в JavaScript — это обычные функции, которые используются для многократного создания однотипных объектов.',
    sections: [
      {
        title: 'Соглашения при использовании конструкторов',
        content:
          'Два основных соглашения при работе с функциями-конструкторами:\n' +
          '• Имя функции-конструктора должно начинаться с большой буквы\n' +
          '• Функция-конструктор должна вызываться только с оператором new',
        addition:
          'Соблюдение этих соглашений делает код более читаемым и предсказуемым.',
        examples:
          '// Функция-конструктор User (имя с большой буквы)\n' +
          'function User(name) {\n' +
          '  this.name = name;\n' +
          '  this.isAdmin = false;\n' +
          '}\n\n' +
          '// Вызов ТОЛЬКО с оператором new\n' +
          'let user = new User("Jack");\n' +
          'console.log(user.name); // Jack\n' +
          'console.log(user.isAdmin); // false\n\n' +
          '// Можно создать множество объектов одного типа\n' +
          'let user2 = new User("Ann");\n' +
          'let user3 = new User("Alice");',
      },
      {
        title: 'Вызов конструктора с оператором new (и без него)',
        content:
          'При вызове функции-конструктора с использованием оператора new (new Имя(...)) происходит следующее:\n' +
          '1. Создаётся новый пустой объект (неявно this = {})\n' +
          '2. Выполняется тело функции, добавляются свойства к this\n' +
          '3. Возвращается this (неявно return this)\n\n' +
          'Если вызвать без new — функция выполнится как обычная, this будет undefined (в строгом режиме) или глобальный объект, и свойства не будут добавлены в новый объект.',
        addition:
          'Если конструктор не принимает аргументов, скобки можно опустить: new User — это то же самое, что new User().',
        examples:
          '// Что происходит внутри конструктора:\n' +
          'function User(name) {\n' +
          '  // 1. this = {}; (неявно создаётся новый пустой объект)\n' +
          '  // 2. Выполняется тело функции\n' +
          '  this.name = name;\n' +
          '  this.isAdmin = false;\n' +
          '  // 3. return this; (неявно возвращается this)\n' +
          '}\n\n' +
          '// Вызов с new — создаётся объект\n' +
          'let user = new User("Jack");\n' +
          'console.log(user.name); // Jack\n\n' +
          '// Вызов БЕЗ new — ошибка или неправильное поведение\n' +
          'let badUser = User("Jack");\n' +
          '// В строгом режиме: TypeError (this undefined)\n' +
          '// Без строгого режима: this = window (в браузере)',
      },
      {
        title: 'new.target — проверка режима вызова',
        content:
          'Специальное свойство new.target позволяет определить, вызвана ли функция с new:\n' +
          '• При вызове с new — содержит саму функцию\n' +
          '• При вызове без new — undefined',
        addition:
          'Это свойство полезно для создания универсальных функций, которые могут вызываться и с new, и без него.',
        examples:
          '// Проверка new.target\n' +
          'function CheckNewTarget() {\n' +
          '  console.log(new.target);\n' +
          '}\n\n' +
          'CheckNewTarget();  // undefined\n' +
          'new CheckNewTarget();  // function CheckNewTarget { ... }\n\n' +
          '// Гибкий вызов (с new и без)\n' +
          'function User(name) {\n' +
          '  if (!new.target) {\n' +
          '    return new User(name); // авто-добавление new\n' +
          '  }\n' +
          '  this.name = name;\n' +
          '}\n\n' +
          'let john = User("John"); // работает и так\n' +
          'console.log(john.name); // John',
      },
      {
        title: 'Возврат значения из конструктора',
        content:
          'Правила возврата из конструктора:\n' +
          '• Объект: возвращается этот объект (вместо this)\n' +
          '• Примитив: игнорируется, возвращается this',
        addition:
          'Это важно помнить: если конструктор возвращает объект, то все свойства, добавленные к this, будут потеряны.',
        examples:
          '// Возврат объекта (переопределяет this)\n' +
          'function BigUser() {\n' +
          '  this.name = "John";\n' +
          '  return { name: "Godzilla" };\n' +
          '}\n' +
          'console.log(new BigUser().name); // "Godzilla"\n\n' +
          '// Возврат примитива или пустой return (игнорируется)\n' +
          'function SmallUser() {\n' +
          '  this.name = "John";\n' +
          '  return;\n' +
          '}\n' +
          'console.log(new SmallUser().name); // "John"',
      },
    ],
  },
};
