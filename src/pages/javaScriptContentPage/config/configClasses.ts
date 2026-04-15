import { type ITopic } from '@/entities/topic';

export const configClasses: ITopic = {
  value: 'classes',
  name: 'Классы',
  content: {
    introduction:
      'Классы в JavaScript — это синтаксический сахар для настройки цепочки прототипов и функции-конструктора. Это не новая ООП-модель, а просто более удобная запись старого прототипного механизма.',
    sections: [
      {
        title: 'Основной синтаксис класса',
        content:
          'Класс объявляется через ключевое слово class. Внутри определяется constructor() (инициализирует объект) и методы. Методы внутри класса не разделяются запятыми.\n' +
          'typeof класса возвращает "function".\n' +
          'Конструкция class создаёт именованную функцию, а все методы сохраняет в ClassName.prototype.\n' +
          'Конструктор класса обязательно вызывается с new. Попытка вызвать без new выбросит ошибку.\n' +
          'Класс создаёт именованную функцию с внутренним флагом [[IsClassConstructor]]: true.\n' +
          'Все методы в prototype класса автоматически получают enumerable: false\n' +
          'Внутри класса автоматически применяется строгий режим (use strict).\n' +
          'Свойства класса не устанавливаются в прототип (ClassName.prototype). Вместо этого оно создаётся оператором new перед запуском конструктора, это именно свойство объекта.\n' +
          'Классы поддерживают аксессоры (геттеры и сеттеры) через ключевые слова get и set.',
        addition:
          'Класс — это по сути функция-конструктор с дополнительными возможностями и ограничениями.',
        examples:
          'class User {\n' +
          '  // Свойство класса (создаётся на каждом экземпляре)\n' +
          "  role = 'user';\n\n" +
          '  constructor(name, age) {\n' +
          '    this.name = name;  // свойство, добавляемое вручную\n' +
          '    this._age = age;  // защищённое свойство для геттера/сеттера\n' +
          '  }\n\n' +
          '  // Обычный метод (лежит в прототипе)\n' +
          '  sayHi() {\n' +
          '    console.log(`Привет, ${this.name}!`);\n' +
          '  }\n' +
          '  // Методы не разделяются запятыми!\n\n' +
          '  // Геттер — вызывается как свойство, а не метод\n' +
          '  get age() {\n' +
          '    return this._age;\n' +
          '  }\n\n' +
          '  // Сеттер — позволяет выполнять логику при присвоении\n' +
          '  set age(value) {\n' +
          '    if (value < 0 || value > 120) {\n' +
          "      console.log('Некорректный возраст!');\n" +
          '      return;\n' +
          '    }\n' +
          '    this._age = value;\n' +
          '  }\n' +
          '}\n\n' +
          "const user = new User('Иван', 25);\n\n" +
          '// Проверяем обычные методы\n' +
          'user.sayHi();  // "Привет, Иван!"\n' +
          'console.log(typeof User);  // "function"\n\n' +
          '// Вызов без new — ошибка (раскомментировать для проверки)\n' +
          "User('Петр', 30);  // TypeError\n\n" +
          '// Методы неперечисляемы\n' +
          'console.log(Object.keys(user));  // ["role", "name", "_age"] (без sayHi, age)\n\n' +
          '// Проверяем свойства\n' +
          'console.log(user.role);  // "user" (свойство экземпляра)\n' +
          'console.log(user.name);  // "Иван"\n\n' +
          '// Проверяем геттер и сеттер\n' +
          'console.log(user.age);  // 25 (геттер)\n' +
          'user.age = 30;  // сеттер\n' +
          'console.log(user.age);  // 30\n' +
          'user.age = -5;  // "Некорректный возраст!"\n' +
          'console.log(user.age);  // 30 (не изменилось)\n\n' +
          '// Важно: свойства не лежат в прототипе\n' +
          'console.log(User.prototype.role);  // undefined\n' +
          "console.log(Object.getOwnPropertyNames(User.prototype));  // ['constructor', 'sayHi', 'age']",
      },
      {
        title: 'Class Expression',
        content:
          'Классы можно объявлять как выражения (Class Expression), аналогично Function Expression.\n\n' +
          'Именованное выражение: let User = class MyClass { ... }. Имя MyClass доступно только внутри тела класса, аналогично Named Function Expression.',
        addition:
          'Class Expression полезен для создания классов на лету, динамической генерации и передачи классов как аргументов.',
        examples:
          '// Class Expression\n' +
          'function createClass() {\n' +
          '  return class {\n' +
          '    sayHi() { console.log("Привет!"); }\n' +
          '  };\n' +
          '}\n\n' +
          'const MyClass = createClass();\n' +
          'new MyClass().sayHi(); // "Привет!"\n\n' +
          '// Именованное выражение класса\n' +
          'const Animal = class Mammal {\n' +
          '  breathe() {\n' +
          '    console.log(Mammal.name); // "Mammal" — доступно внутри\n' +
          '  }\n' +
          '};\n' +
          'console.log(Mammal); — Ошибка! Mammal не определён снаружи',
      },
      {
        title: 'Наследование классов: extends и super',
        content:
          'Синтаксис: class Child extends Parent. Внутренне устанавливается Child.prototype.[[Prototype]] = Parent.prototype.\n\n' +
          'После extends допустимо любое выражение (включая функцию, возвращающую класс).\n\n' +
          'Ключевое слово super:\n' +
          '• super(...) — вызывает конструктор родителя. В наследуемом классе вызов super() обязателен до первого обращения к this, так как конструктор потомка не создаёт this самостоятельно, а делегирует это родителю.\n' +
          '• super.method(...) — вызывает метод родительского класса.\n\n' +
          'При поиске метода движок проверяет: объект → Child.prototype → Parent.prototype.\n' +
          'Родительский конструктор всегда использует своё собственное значение поля, а не переопределённое в потомке. Это связано с тем, что на момент вызова super() поля потомка ещё не инициализированы.\n' +
          'Если в дочернем классе нет конструктора — JavaScript создаст его автоматически. Такой конструктор выглядит так: constructor(...args) { super(...args); }. То есть все аргументы просто передаются родителю.',
        addition:
          'Переопределение метода в дочернем классе заменяет родительский. Для расширения функционала (не полной замены) используется super.method().',
        examples:
          'class Animal {\n' +
          "  type = 'животное';\n\n" +
          '  constructor(name) {\n' +
          '    this.name = name;\n' +
          '    this.speed = 0;\n' +
          "    console.log('В конструкторе Animal: this.type =', this.type);\n" +
          '  }\n\n' +
          '  run(speed) {\n' +
          '    this.speed = speed;\n' +
          '    console.log(`${this.type} бежит со скоростью ${this.speed}`);\n' +
          '  }\n' +
          '}\n\n' +
          'class Rabbit extends Animal {\n' +
          "  type = 'кролик';\n\n" +
          '  constructor(name, earLength) {\n' +
          '    super(name);\n' +
          '    this.earLength = earLength;\n' +
          "    console.log('В конструкторе Rabbit: this.type =', this.type);\n" +
          '  }\n' +
          '}\n\n' +
          'const rabbit = new Rabbit("Бугс", 10);\n' +
          'rabbit.run(5);\n' +
          'console.log(rabbit.type);\n' +
          '// В конструкторе Animal: this.type = животное\n' +
          '// В конструкторе Rabbit: this.type = кролик\n' +
          '// кролик бежит со скоростью 5\n' +
          '// кролик',
      },
      {
        title: '[[HomeObject]] и super в стрелочных функциях',
        content:
          '[[HomeObject]] — внутреннее свойство функции, объявленной как метод класса. Навсегда хранит ссылку на объект, в котором метод был определён.\n' +
          'super использует [[HomeObject]] для поиска родительского прототипа. Это решает проблему бесконечной рекурсии при многоуровневом наследовании.\n' +
          'Методы (method() {}) автоматически получают [[HomeObject]] и работают с super.\n' +
          'Свойства-функции (method: function() {}) не получают [[HomeObject]] — super внутри них вызовет ошибку.\n' +
          'Стрелочные функции не имеют собственного super — они лексически берут его из внешней области.',
        addition:
          'Методы с super привязаны к исходному объекту через [[HomeObject]]. Копирование такого метода в другой объект нарушит логику super.',
        examples:
          'class Animal {\n' +
          '  constructor(name) {\n' +
          '    this.name = name;\n' +
          '  }\n\n' +
          '  speak() {\n' +
          '    console.log(`${this.name} говорит`);\n' +
          '  }\n' +
          '}\n\n' +
          'class Dog extends Animal {\n' +
          '  speak() {\n' +
          '    // super работает благодаря [[HomeObject]]\n' +
          '    super.speak();\n' +
          '    console.log(`${this.name} лает`);\n' +
          '  }\n' +
          '}\n\n' +
          'const dog = new Dog("Бобик");\n' +
          'dog.speak();\n' +
          '// "Бобик говорит"\n' +
          '// "Бобик лает"\n\n' +
          '// Стрелочная функция — super из внешней области\n' +
          'class Cat extends Animal {\n' +
          '  speakLater() {\n' +
          '    setTimeout(() => {\n' +
          '      super.speak(); // OK — стрелочная наследует super\n' +
          '      console.log(`${this.name} говорит позже`);\n' +
          '    }, 100);\n' +
          '  }\n' +
          '}\n\n' +
          '// Ошибка! Обычная функция не имеет super\n' +
          'class Broken extends Animal {\n' +
          '  speakLater() {\n' +
          '    setTimeout(function() {\n' +
          '      super.speak(); // SyntaxError: "super" keyword unexpected here\n' +
          '    }, 100);\n' +
          '  }\n' +
          '}',
      },
      {
        title: 'Статические поля',
        content:
          'Ключевое слово static объявляет свойства и методы, привязанные к самому классу (конструктору), а не к экземплярам.\n' +
          'Доступ через имя класса: ClassName.member. Вызов через экземпляр (new User().staticMethod) выбросит ошибку.\n' +
          'this в статическом методе ссылается на сам класс.',
        addition:
          'Статические члены полностью наследуются: Child.__proto__ === Parent. Если метод не найден в дочернем классе, JavaScript ищет его в родительском.\n' +
          'Встроенные классы не наследуют статические методы друг друга.',
        examples:
          'class Article {\n' +
          '  static version = "2.0";\n' +
          '  constructor(title, date = new Date()) {\n' +
          '    this.title = title;\n' +
          '    this.date = date;\n' +
          '  }\n\n' +
          '  // Статический метод — утилита\n' +
          '  static compare(a, b) {\n' +
          '    return a.date - b.date;\n' +
          '  }\n\n' +
          '  // Фабричный метод\n' +
          '  static createToday(title) {\n' +
          '    return new Article(title);\n' +
          '  }\n\n' +
          '  static factory() {\n' +
          '    return new this(); // this === Article (сам класс)\n' +
          '  }\n' +
          '}\n\n' +
          'const article1 = Article.createToday("Статья 1");\n' +
          'const article2 = new Article("Статья 2", new Date(2024, 0, 1));\n\n' +
          'console.log(Article.compare(article1, article2)); // 1 (article1 новее)\n' +
          'console.log(Article.version); // "2.0"\n\n' +
          '// Наследование статических членов\n' +
          'class BlogPost extends Article {}\n' +
          'console.log(BlogPost.version); // "2.0" (унаследовано)\n' +
          'const post = BlogPost.createToday("Пост"); // тоже работает',
      },
      {
        title: 'Приватные и защищённые поля',
        content:
          'Приватные поля объявляются с префиксом #. Это встроенный синтаксис языка, гарантирующий приватность на уровне движка.\n\n' +
          'Уровни доступа:\n' +
          '• Публичные — доступны отовсюду (по умолчанию)\n' +
          '• Защищённые — начинаются с _. Архитектурное соглашение, не проверяемое движком. Доступны в классе и наследниках.\n' +
          '• Приватные — начинаются с #. Доступны строго внутри объявляющего класса.  При вызове this.#parentPrivateField возникнет ошибка. Приватные поля не конфликтуют с публичными. Доступ через вычисляемые имена this["#name"] также невозможен.',
        addition:
          'В терминах ООП отделение внутреннего интерфейса от внешнего называется инкапсуляцией.',
        examples:
          'class CoffeeMachine {\n' +
          '  #waterAmount = 0;\n' +
          '  #pawer = 0;\n\n' +
          '  constructor(power) {\n' +
          '    this.#power = power;\n' +
          '  }\n\n' +
          '  // Приватный метод\n' +
          '  #heatWater() {\n' +
          '    console.log("Нагреваю воду...");\n' +
          '  }\n\n' +
          '  _checkWater() {\n' +
          '    if (this.#waterAmount < 100) {\n' +
          '      console.log("Мало воды");\n' +
          '    }\n' +
          '  }\n\n' +
          '  get waterAmount() {\n' +
          '    return this.#waterAmount;\n' +
          '  }\n\n' +
          '  set waterAmount(value) {\n' +
          '    if (value < 0) throw new Error("Отрицательное количество");\n' +
          '    this.#waterAmount = value;\n' +
          '  }\n\n' +
          '  brew() {\n' +
          '    this.#heatWater();\n' +
          '    console.log("Кофе готов!");\n' +
          '  }\n' +
          '}\n\n' +
          'const machine = new CoffeeMachine(150);\n' +
          'machine.waterAmount = 200;\n' +
          'machine.brew(); // "Нагреваю воду..." + "Кофе готов!"\n\n' +
          'machine.#waterAmount = 100; // SyntaxError: Private field\n' +
          'machine.#heatWater(); // SyntaxError\n\n' +
          '// Наследник не видит приватные поля родителя\n' +
          'class SuperMachine extends CoffeeMachine {\n' +
          '  superBrew() {\n' +
          '    console.log(this.#waterAmount); // SyntaxError!\n' +
          '    console.log(this.waterAmount); // OK — через геттер\n' +
          '    this._checkWater(); // OK — protected доступно\n' +
          '    this.brew(); // OK — публичный метод\n' +
          '  }\n' +
          '}',
      },
    ],
  },
};
