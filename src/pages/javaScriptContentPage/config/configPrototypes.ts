import { type ITopic } from '@/entities/topic';

export const configPrototypes: ITopic = {
  value: 'prototypes',
  name: 'Прототипы и наследование',
  content: {
    introduction:
      'Прототипное наследование — это механизм, который позволяет объектам наследовать свойства и методы от других объектов.',
    sections: [
      {
        title: '__proto__ и [[Prototype]]',
        content:
          'Внутреннее свойство [[Prototype]] хранит ссылку на объект-прототип. При чтении отсутствующего свойства JavaScript автоматически поднимается по цепочке прототипов, пока не найдёт свойство или не достигнет null.\n\n' +
          'Свойство __proto__ — исторический геттер/сеттер для [[Prototype]]. Объект может иметь только один [[Prototype]]. Допустимые значения: объект или null. Циклические ссылки запрещены.\n\n' +
          'Запись в объект не влияет на прототип: операции записи и удаления выполняются напрямую над самим объектом. Прототип используется исключительно для чтения. Исключение — свойства-аксессоры (сеттеры).',
        addition:
          'Современный стандарт рекомендует использовать Object.getPrototypeOf/setPrototypeOf вместо __proto__, но __proto__ остаётся широко поддерживаемым.',
        examples:
          'const animal = {\n' +
          '  eats: true,\n' +
          '  walk() {\n' +
          '    console.log("Животное ходит");\n' +
          '  }\n' +
          '};\n\n' +
          'const rabbit = {\n' +
          '  jumps: true,\n' +
          '  __proto__: animal\n' +
          '};\n\n' +
          '// Чтение унаследованного свойства\n' +
          'console.log(rabbit.eats); // true (из animal)\n' +
          'rabbit.walk(); // "Животное ходит" (из animal)\n\n' +
          '// Запись создаёт собственное свойство\n' +
          'rabbit.eats = false;\n' +
          'console.log(rabbit.eats); // false (собственное)\n' +
          'console.log(animal.eats); // true (прототип не изменился)\n\n' +
          '// Удаление собственного свойства\n' +
          'delete rabbit.eats;\n' +
          'console.log(rabbit.eats); // true (снова из прототипа)',
      },
      {
        title: 'Контекст this в методах прототипа',
        content:
          'this всегда определяется объектом перед точкой в момент вызова, неважно, где метод найден — в самом объекте или в прототипе.\n' +
          'Метод прототипа работает с вызывающим объектом, а не с прототипом. Это позволяет использовать общие методы для множества объектов, экономя память и избегая дублирования кода.',
        addition:
          'Благодаря динамической природе прототипов, методы можно добавлять в прототип в любой момент, и они сразу становятся доступны всем объектам, наследующим от него. Это позволяет расширять функциональность существующих объектов без изменения их собственных свойств.',
        examples:
          'const animal = {\n' +
          '  walk() {\n' +
          '    console.log(`${this.name} ходит`);\n' +
          '  }\n' +
          '};\n\n' +
          'const rabbit = {\n' +
          '  name: "Кролик",\n' +
          '  __proto__: animal\n' +
          '};\n\n' +
          'const bird = {\n' +
          '  name: "Птица",\n' +
          '  __proto__: animal\n' +
          '};\n\n' +
          '// this определяется вызывающим объектом\n' +
          'rabbit.walk(); // "Кролик ходит" (this === rabbit)\n' +
          'bird.walk(); // "Птица ходит" (this === bird)\n\n' +
          '// Добавление нового метода в прототип\n' +
          'animal.run = function() {\n' +
          '  console.log(`${this.name} бежит`);\n' +
          '};\n\n' +
          'rabbit.run(); // "Кролик бежит"\n' +
          'bird.run(); // "Птица бежит"',
      },
      {
        title: 'Прототип для конструкторов (свойство prototype)',
        content:
          'При вызове new F() JavaScript берёт объект из F.prototype и автоматически назначает его в качестве [[Prototype]] для нового объекта. Значение F.prototype должно быть либо объектом, либо null.\n\n' +
          'Свойство F.prototype используется только в момент вызова new F() (оно является особым, только когда оно назначено функции-конструктору).\n\n' +
          'По умолчанию F.prototype равно { constructor: F }, где constructor ссылается на саму функцию. Это позволяет получить конструктор экземпляра через obj.constructor.\n\n' +
          'Замена F.prototype на новый объект (F.prototype = {}) влияет только на объекты, созданные после присваивания. Уже существующие объекты сохраняют ссылку на старый прототип.\n' +
          'Изменение свойств внутри текущего прототипа (F.prototype.eats = false) затрагивает все унаследованные объекты (и старые, и новые), так как они ссылаются на один и тот же объект в памяти.',
        addition:
          'Рекомендуется не перезаписывать F.prototype целиком, а добавлять свойства к существующему объекту. Если перезапись необходима, свойство constructor следует добавить вручную.\n' +
          'JavaScript сам по себе не гарантирует правильное значение свойства constructor: если мы заменим прототип по умолчанию на другой объект, то свойства constructor в нём не будет.\n' +
          'Не меняйте [[Prototype]] существующих объектов, если важна скорость: это очень медленная операция, которая ломает внутренние оптимизации для операций доступа к свойствам объекта.',
        examples:
          'function Rabbit(name) {\n' +
          '  this.name = name;\n' +
          '}\n\n' +
          '// Добавление методов в прототип (рекомендуется)\n' +
          'Rabbit.prototype.speak = function() {\n' +
          '  console.log(`${this.name} говорит`);\n' +
          '};\n\n' +
          'const rabbit1 = new Rabbit("Кролик 1");\n' +
          'rabbit1.speak(); // "Кролик 1 говорит"\n\n' +
          '// Проверка constructor\n' +
          'console.log(rabbit1.constructor === Rabbit); // true\n\n' +
          '// Перезапись prototype (влияет только на новые объекты)\n' +
          'Rabbit.prototype = {\n' +
          '  jump() {\n' +
          '    console.log(`${this.name} прыгает`);\n' +
          '  },\n' +
          '  constructor: Rabbit\n' +
          '};\n\n' +
          'const rabbit2 = new Rabbit("Кролик 2");\n' +
          'rabbit2.jump(); // "Кролик 2 прыгает"\n\n' +
          '// Старый объект — старый прототип\n' +
          'console.log(rabbit1.jump); // undefined\n' +
          'console.log(rabbit1.speak); // function (есть)\n\n' +
          '// Изменение свойств внутри прототипа (влияет на все объекты)\n' +
          'function Cat(name) {\n' +
          '  this.name = name;\n' +
          '}\n' +
          'Cat.prototype.sleeps = true;\n\n' +
          'const cat1 = new Cat("Кот 1");\n' +
          'Cat.prototype.sleeps = false; // изменение внутри прототипа\n' +
          'const cat2 = new Cat("Кот 2");\n\n' +
          'console.log(cat1.sleeps); // false (изменилось!)\n' +
          'console.log(cat2.sleeps); // false',
      },
      {
        title: 'Нативные прототипы',
        content:
          'Встроенные конструкторы (Object, Array, Date, Function и др.) не хранят методы в самих экземплярах. Все методы вынесены в соответствующие прототипы.\n\n' +
          'Иерархия наследования:\n' +
          '• массив → Array.prototype → Object.prototype → null\n' +
          '• функция → Function.prototype → Object.prototype → null\n' +
          '• объект Date → Date.prototype → Object.prototype → null\n\n' +
          'Object.prototype находится на вершине иерархии, поэтому «всё наследует от объектов».\n\n' +
          'Примитивы (строки, числа, булевы значения) при обращении к свойствам временно оборачиваются в объекты-обёртки, чьи методы берутся из String.prototype, Number.prototype, Boolean.prototype. null и undefined не имеют обёрток и прототипов.',
        addition:
          'При вызове метода JavaScript сначала ищет его в ближайшем прототипе, а при отсутствии поднимается вверх до Object.prototype.',
        examples:
          '// Методы массивов — из Array.prototype\n' +
          'const arr = [1, 2, 3];\n' +
          'console.log(arr.__proto__ === Array.prototype); // true\n' +
          'arr.push(4); // push из Array.prototype\n\n' +
          '// toString из Object.prototype (переопределён в Array.prototype)\n' +
          'console.log(arr.toString()); // "1,2,3,4"\n\n' +
          '// Цепочка прототипов массива\n' +
          'console.log(arr.__proto__.__proto__ === Object.prototype); // true\n' +
          'console.log(arr.__proto__.__proto__.__proto__); // null\n\n' +
          '// Примитивы — временные обёртки\n' +
          'const str = "hello";\n' +
          'console.log(str.toUpperCase()); // "HELLO"\n' +
          '// При вызове создаётся String-объект, вызывается метод, объект уничтожается',
      },
    ],
  },
};
