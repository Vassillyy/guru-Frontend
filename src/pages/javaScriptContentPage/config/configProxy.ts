import { type ITopic } from '@/entities/topic';

export const configProxy: ITopic = {
  value: 'proxy',
  name: 'Proxy и Reflect',
  content: {
    introduction:
      'Proxy — это специальный объект, который «оборачивается» вокруг другого объекта и позволяет перехватывать любые операции с ним (чтение, запись свойств, вызов функций и т.д.), чтобы обработать их по своему усмотрению.',
    sections: [
      {
        title: 'Базовый синтаксис Proxy',
        content:
          'Синтаксис создания прокси: let proxy = new Proxy(target, handler), где target — объект для оборачивания, а handler — конфигурация с ловушками.\n' +
          'Без ловушек прокси является прозрачной обёрткой — все операции перенаправляются на target напрямую. Proxy не имеет собственных свойств.',
        addition:
          'Внутренний метод → Ловушка → Что вызывает:\n' +
          '[[Get]] → get → чтение свойства\n' +
          '[[Set]] → set → запись свойства\n' +
          '[[HasProperty]] → has → оператор in\n' +
          '[[Delete]] → deleteProperty → оператор delete\n' +
          '[[Call]] → apply → вызов функции\n' +
          '[[Construct]] → construct → оператор new\n' +
          '[[GetPrototypeOf]] → getPrototypeOf → Object.getPrototypeOf\n' +
          '[[SetPrototypeOf]] → setPrototypeOf → Object.setPrototypeOf\n' +
          '[[IsExtensible]] → isExtensible → Object.isExtensible\n' +
          '[[PreventExtensions]] → preventExtensions → Object.preventExtensions\n' +
          '[[DefineOwnProperty]] → defineProperty → Object.defineProperty\n' +
          '[[GetOwnProperty]] → getOwnPropertyDescriptor → Object.getOwnPropertyDescriptor\n' +
          '[[OwnPropertyKeys]] → ownKeys → Object.keys/values/entries',
        examples:
          'let target = {};\n' +
          'let proxy = new Proxy(target, {});\n\n' +
          'proxy.test = 5;\n' +
          'console.log(target.test); // 5\n\n' +
          'console.log(proxy.test); // 5\n\n' +
          'for(let key in proxy) console.log(key); // test',
      },
      {
        title: 'Reflect',
        content:
          'Reflect — встроенный объект, предоставляющий методы для выполнения стандартных операций над объектами.\n' +
          '• Reflect.get(target, prop, receiver) — чтение свойства\n' +
          '• Reflect.set(target, prop, value, receiver) — запись свойства\n' +
          '• Reflect.has(target, prop) — оператор in\n' +
          '• Reflect.deleteProperty(target, prop) — оператор delete\n' +
          '• Reflect.apply(target, thisArg, args) — вызов функции\n' +
          '• Reflect.construct(target, args, newTarget) — вызов с new\n' +
          '• Reflect.defineProperty(target, prop, descriptor) — Object.defineProperty\n' +
          '• Reflect.ownKeys(target) — Object.getOwnPropertyNames + getOwnPropertySymbols\n' +
          '• Reflect.getPrototypeOf / setPrototypeOf — работа с прототипом\n' +
          '• Reflect.isExtensible / preventExtensions — контроль расширяемости',
        addition:
          'Методы Reflect соответствуют внутренним методам JavaScript и ловушкам Proxy.\n\n' +
          '• Передаёт receiver в геттеры/сеттеры — корректный this\n' +
          '• Возвращает правильный результат (true/false для операций)\n' +
          '• Упрощает код: не нужно писать target[prop], проверять дескрипторы\n\n' +
          'Reflect нужен, когда вы хотите вызвать стандартное поведение внутри ловушки. Если вы полностью заменяете логику — Reflect не обязателен.',
        examples:
          'const obj = { name: "Вася" };\n\n' +
          'console.log(Reflect.get(obj, "name")); // Вася\n' +
          'Reflect.set(obj, "age", 30);\n' +
          'console.log(obj.age); // 30\n\n' +
          '// Reflect в Proxy\n' +
          'const user = { name: "Вася", _private: "секрет" };\n' +
          'const proxy = new Proxy(user, {\n' +
          '  get(target, prop, receiver) {\n' +
          '    if (prop.startsWith("_")) {\n' +
          '      return undefined;\n' +
          '    }\n' +
          '    return Reflect.get(target, prop, receiver);\n' +
          '  },\n' +
          '  set(target, prop, value, receiver) {\n' +
          '    if (prop === "age" && (value < 0 || value > 120)) {\n' +
          '      throw new Error("Недопустимый возраст");\n' +
          '    }\n' +
          '    return Reflect.set(target, prop, value, receiver);\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(proxy.name); // Вася\n' +
          'console.log(proxy._private); // undefined\n' +
          'proxy.age = 25;\n' +
          'proxy.age = 200; // Error: Недопустимый возраст',
      },
      {
        title: 'Ловушка get',
        content:
          'get(target, property, receiver) срабатывает при чтении свойства.\n' +
          '• target — оригинальный объект\n' +
          '• property — имя свойства\n' +
          '• receiver — контекст this для геттеров.',
        addition:
          'Важно использовать Reflect.get с третьим аргументом receiver при работе с наследованием, чтобы геттеры получали корректный контекст this.',
        examples:
          'let numbers = [0, 1, 2];\n\n' +
          'numbers = new Proxy(numbers, {\n' +
          '  get(target, prop) {\n' +
          '    if (prop in target) return target[prop];\n' +
          '    return 0;\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(numbers[1]); // 1\n' +
          'console.log(numbers[123]); // 0\n\n' +
          '// С Reflect.get\n' +
          'const user = {\n' +
          '  name: "Алексей",\n' +
          '  get fullName() {\n' +
          '    return this.name + " Смирнов";\n' +
          '  }\n' +
          '};\n\n' +
          'const proxyUser = new Proxy(user, {\n' +
          '  get(target, prop, receiver) {\n' +
          '    // receiver гарантирует корректный this для геттера\n' +
          '    return Reflect.get(target, prop, receiver);\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(proxyUser.fullName); // "Алексей Смирнов"',
      },
      {
        title: 'Ловушка set',
        content:
          'set(target, property, value, receiver) срабатывает при записи свойства.\n' +
          '• target — оригинальный объект\n' +
          '• property — имя свойства\n' +
          '• value — новое значение\n' +
          '• receiver — контекст this для сеттеров.',
        addition:
          'Ловушка set должна возвращать true, если операция записи прошла успешно. Если вернуть false (или любое ложное значение), то в строгом режиме возникнет ошибка TypeError.\n' +
          'Важно использовать Reflect.set с четвёртым аргументом receiver для корректной работы с наследованием, чтобы сеттеры получали корректный контекст this.',
        examples:
          'let numbers = [];\n\n' +
          'numbers = new Proxy(numbers, {\n' +
          '  set(target, prop, val) {\n' +
          '    if (typeof val == "number") {\n' +
          '      target[prop] = val;\n' +
          '      return true;\n' +
          '    }\n' +
          '    return false;\n' +
          '  }\n' +
          '});\n\n' +
          'numbers.push(1, 2);\n' +
          'console.log(numbers) // [1 , 2]\n' +
          'numbers.push("текст"); // Error\n\n' +
          '// С Reflect.set\n' +
          'const user = {\n' +
          '  name: "Алексей",\n' +
          '  set fullName(value) {\n' +
          '    const parts = value.split(" ");\n' +
          '    this.name = parts[0];\n' +
          '    this.surname = parts[1];\n' +
          '  }\n' +
          '};\n\n' +
          'const proxyUser = new Proxy(user, {\n' +
          '  set(target, prop, value, receiver) {\n' +
          '    // receiver гарантирует корректный this для сеттера\n' +
          '    return Reflect.set(target, prop, value, receiver);\n' +
          '  }\n' +
          '});\n\n' +
          'proxyUser.fullName = "Иван Петров";\n' +
          'console.log(proxyUser.name); // "Иван"\n' +
          'console.log(proxyUser.surname); // "Петров"',
      },
      {
        title: 'Ловушка has',
        content:
          'has(target, property) срабатывает при использовании оператора in.\n' +
          '• target — оригинальный объект\n' +
          '• property — имя свойства',
        addition:
          'Важно использовать Reflect.has для корректной проверки наличия свойства, включая свойства из прототипа.',
        examples:
          'let range = {\n' +
          '  start: 1,\n' +
          '  end: 10\n' +
          '};\n\n' +
          'range = new Proxy(range, {\n' +
          '  has(target, prop) {\n' +
          '    return prop >= target.start && prop <= target.end;\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(5 in range); // true\n' +
          'console.log(50 in range); // false\n\n' +
          '// С Reflect.has\n' +
          'const dictionary = {\n' +
          '  apple: "яблоко",\n' +
          '  car: "машина"\n' +
          '};\n\n' +
          'const proxyDict = new Proxy(dictionary, {\n' +
          '  has(target, prop) {\n' +
          '    return Reflect.has(target, prop);\n' +
          '  }\n' +
          '});\n\n' +
          'console.log("apple" in proxyDict); // true\n' +
          'console.log("toString" in proxyDict); // true (из прототипа)\n\n' +
          '// Без Reflect.has\n' +
          'const badProxy = new Proxy(dictionary, {\n' +
          '  has(target, prop) {\n' +
          '    return prop in target;\n' +
          '  }\n' +
          '});\n\n' +
          'console.log("toString" in badProxy); // false',
      },
      {
        title: 'Ловушка deleteProperty',
        content:
          'deleteProperty(target, property) срабатывает при использовании оператора delete.\n' +
          '• target — оригинальный объект\n' +
          '• property — имя свойства',
        addition:
          'Ловушка deleteProperty должна возвращать true, если удаление прошло успешно, и false — если нет.\n' +
          'Важно использовать Reflect.deleteProperty для выполнения реального удаления свойства. Reflect.deleteProperty возвращает true, если свойство удалено или его не существовало, и false — если свойство нельзя удалить.',
        examples:
          'let user = {\n' +
          '  name: "Вася",\n' +
          '  _password: "***"\n' +
          '};\n\n' +
          'user = new Proxy(user, {\n' +
          '  deleteProperty(target, prop) {\n' +
          '    if (prop.startsWith("_")) {\n' +
          '      throw new Error("Отказано в доступе");\n' +
          '    }\n' +
          '    delete target[prop];\n' +
          '    return true;\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(delete user.name); // true\n' +
          'console.log(user.name) // undefined\n' +
          'console.log(delete user._password); // Error: Отказано в доступе\n\n' +
          '// С Reflect.deleteProperty\n' +
          'const data = {\n' +
          '  public: "доступно",\n' +
          '  _private: "секрет"\n' +
          '};\n\n' +
          'const proxyData = new Proxy(data, {\n' +
          '  deleteProperty(target, prop) {\n' +
          '    if (prop.startsWith("_")) return false;\n' +
          '    return Reflect.deleteProperty(target, prop);\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(delete proxyData.public); // true\n' +
          'console.log(proxyData.public); // undefined\n' +
          'console.log(delete proxyData._private); // false\n' +
          'console.log(proxyData._private); // "секрет"\n\n' +
          '// Без Reflect.deleteProperty\n' +
          'const badProxy = new Proxy(data, {\n' +
          '  deleteProperty(target, prop) {\n' +
          '    delete target[prop];\n' +
          '    return true;\n' +
          '  }\n' +
          '});\n\n' +
          'Object.defineProperty(data, "fixed", {\n' +
          '  value: "неудаляемый",\n' +
          '  configurable: false\n' +
          '});\n\n' +
          'console.log(delete badProxy.fixed); // Error (нельзя удалить non-configurable свойство)\n' +
          'console.log(data.fixed); // "неудаляемый"',
      },
      {
        title: 'Ловушки ownKeys и getOwnPropertyDescriptor',
        content:
          'ownKeys(target) перехватывает получение списка ключей (Reflect.ownKeys, Object.keys, Object.getOwnPropertyNames, for..in).\n' +
          '• target — оригинальный объект\n\n' +
          'getOwnPropertyDescriptor(target, prop) перехватывает получение дескриптора свойства.\n' +
          '• target — оригинальный объект\n' +
          '• prop — имя свойства',
        addition:
          'ownKeys и getOwnPropertyDescriptor работают в паре. Если ownKeys возвращает ключи, которых нет в объекте, Object.keys их не покажет без перехвата getOwnPropertyDescriptor.\n' +
          'Важно использовать Reflect.ownKeys и Reflect.getOwnPropertyDescriptor для получения оригинальных ключей и дескрипторов.',
        examples:
          'let user = {\n' +
          '  name: "Вася",\n' +
          '  age: 30,\n' +
          '  _password: "***"\n' +
          '};\n\n' +
          'user = new Proxy(user, {\n' +
          '  ownKeys(target) {\n' +
          '    return Object.keys(target).filter(k => !k.startsWith("_"));\n' +
          '  },\n' +
          '});\n\n' +
          'for(let key in user) console.log(key); // name, age\n' +
          'console.log(Object.keys(user)); // ["name", "age"]\n\n' +
          '// С Reflect.ownKeys и Reflect.getOwnPropertyDescriptor\n' +
          'const data = {\n' +
          '  visible: "видно",\n' +
          '  _hidden: "скрыто",\n' +
          '  [Symbol("id")]: 123\n' +
          '};\n\n' +
          'const proxyData = new Proxy(data, {\n' +
          '  ownKeys(target) {\n' +
          '    const keys = Reflect.ownKeys(target);\n' +
          '    return keys.filter(key => !String(key).startsWith("_"));\n' +
          '  },\n' +
          '  getOwnPropertyDescriptor(target, prop) {\n' +
          '    if (Reflect.has(target, prop)) {\n' +
          '      return Reflect.getOwnPropertyDescriptor(target, prop);\n' +
          '    }\n' +
          '    return undefined;\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(Object.keys(proxyData)); // ["visible"]\n' +
          'console.log(Object.getOwnPropertyNames(proxyData)); // ["visible"]\n' +
          'console.log(Reflect.ownKeys(proxyData)); // ["visible", Symbol(id)]\n\n' +
          '// Без getOwnPropertyDescriptor\n' +
          'const badProxy = new Proxy(data, {\n' +
          '  ownKeys(target) {\n' +
          '    return ["virtualKey", ...Reflect.ownKeys(target)];\n' +
          '  }\n' +
          '  // getOwnPropertyDescriptor не перехвачен!\n' +
          '});\n\n' +
          '// Object.keys не покажет virtualKey, потому что нет дескриптора\n' +
          'console.log(Object.keys(badProxy)); // ["visible", "_hidden"]\n\n' +
          '// С правильным getOwnPropertyDescriptor\n' +
          'const goodProxy = new Proxy(data, {\n' +
          '  ownKeys(target) {\n' +
          '    return ["virtualKey", ...Reflect.ownKeys(target)];\n' +
          '  },\n' +
          '  getOwnPropertyDescriptor(target, prop) {\n' +
          '    if (prop === "virtualKey") {\n' +
          '      return {\n' +
          '        enumerable: true,\n' +
          '        configurable: true,\n' +
          '        value: "я виртуальный"\n' +
          '      };\n' +
          '    }\n' +
          '    return Reflect.getOwnPropertyDescriptor(target, prop);\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(Object.keys(goodProxy)); // ["virtualKey", "visible", "_hidden"]\n' +
          'console.log(goodProxy.virtualKey); // "я виртуальный"',
      },
      {
        title: 'Ловушка apply',
        content:
          'apply(target, thisArg, args) срабатывает при вызове прокси как функции.\n' +
          '• target — оригинальная функция\n' +
          '• thisArg — контекст this, переданный при вызове\n' +
          '• args — массив аргументов',
        addition:
          'Важно использовать Reflect.apply для корректного вызова оригинальной функции с правильным this и аргументами.\n' +
          'Прокси сохраняет свойства оригинальной функции (name, length), в отличие от обычной функции-обёртки.',
        examples:
          'function delay(f, ms) {\n' +
          '  return new Proxy(f, {\n' +
          '    apply(target, thisArg, args) {\n' +
          '      setTimeout(() => Reflect.apply(target, thisArg, args), ms);\n' +
          '    }\n' +
          '  });\n' +
          '}\n\n' +
          'function sayHi(user) {\n' +
          '  console.log(`Привет, ${user}!`);\n' +
          '}\n\n' +
          '// С Reflect.apply\n' +
          'const delayedSayHi = delay(sayHi, 3000);\n' +
          'console.log(delayedSayHi.length); // 1\n' +
          'delayedSayHi("Вася"); // Привет, Вася! (через 3 сек)\n\n' +
          'const obj = { value: 10 };\n\n' +
          'function multiply(x) {\n' +
          '  return this.value * x;\n' +
          '}\n\n' +
          'const goodMultiplyProxy = new Proxy(multiply, {\n' +
          '  apply(target, thisArg, args) {\n' +
          '    return Reflect.apply(target, thisArg, args);\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(goodMultiplyProxy.apply(obj, [5])); // 50\n\n' +
          '// Без Reflect.apply\n' +
          'const badMultiplyProxy = new Proxy(multiply, {\n' +
          '  apply(target, thisArg, args) {\n' +
          '    return target(args[0]); // this потерян\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(badMultiplyProxy.apply(obj, [5])); // NaN',
      },
      {
        title: 'Ловушка construct',
        content:
          'construct(target, args, newTarget) срабатывает при вызове прокси с оператором new.\n' +
          '• target — оригинальная функция-конструктор\n' +
          '• args — массив аргументов, переданных конструктору\n' +
          '• newTarget — исходный конструктор',
        addition:
          'Ловушка construct должна возвращать объект (результат вызова конструктора).\n' +
          'Важно использовать Reflect.construct(target, args, newTarget) для корректного создания экземпляра с правильной цепочкой прототипов.',
        examples:
          'function User(name) {\n' +
          '  this.name = name;\n' +
          '}\n\n' +
          '// С Reflect.construct\n' +
          'const GoodProxy = new Proxy(User, {\n' +
          '  construct(target, args, newTarget) {\n' +
          '    return Reflect.construct(target, args, newTarget);\n' +
          '  }\n' +
          '});\n\n' +
          'const goodUser = new GoodProxy("Олег");\n' +
          'console.log(goodUser.name); // Олег\n' +
          'console.log(goodUser instanceof User); // true\n\n' +
          '// Без Reflect.construct\n' +
          'const BadProxy = new Proxy(User, {\n' +
          '  construct(target, args) {\n' +
          '    return target(args[0]); // просто вызов функции, не через new\n' +
          '  }\n' +
          '});\n\n' +
          'const badUser = new BadProxy("Петя"); // Error',
      },
      {
        title: 'Ловушки getPrototypeOf и setPrototypeOf',
        content:
          'getPrototypeOf(target) срабатывает при получении прототипа объекта.\n' +
          '• target — оригинальный объект\n\n' +
          'setPrototypeOf(target, proto) срабатывает при установке прототипа.\n' +
          '• target — оригинальный объект\n' +
          '• proto — новый прототип',
        addition:
          'Важно использовать Reflect.getPrototypeOf и Reflect.setPrototypeOf внутри ловушек для корректной работы с прототипами.\n' +
          'Инвариант: прокси и target должны иметь одинаковый прототип. Если target нерасширяемый, то прототип нельзя менять.',
        examples:
          'const proto = { greeting: "Привет" };\n' +
          'const target = {};\n\n' +
          'const proxy = new Proxy(target, {\n' +
          '  getPrototypeOf(target) {\n' +
          '    return proto;\n' +
          '  },\n' +
          '  setPrototypeOf(target, newProto) {\n' +
          '    throw new Error("Изменение прототипа запрещено");\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(Object.getPrototypeOf(proxy) === proto); // true\n' +
          'Object.setPrototypeOf(proxy, {}); // Error: Изменение прототипа запрещено\n\n' +
          '// С Reflect.getPrototypeOf и Reflect.setPrototypeOf\n' +
          'const target2 = { a: 1 };\n' +
          'const proxy2 = new Proxy(target2, {\n' +
          '  getPrototypeOf(target) {\n' +
          '    return Reflect.getPrototypeOf(target);\n' +
          '  },\n' +
          '  setPrototypeOf(target, newProto) {\n' +
          '    return Reflect.setPrototypeOf(target, newProto);\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(Object.getPrototypeOf(proxy2) === Object.prototype); // true\n' +
          'Object.setPrototypeOf(proxy2, proto);\n' +
          'console.log(Object.getPrototypeOf(proxy2) === proto); // true\n\n' +
          '// Без Reflect\n' +
          'const badProxy = new Proxy({}, {\n' +
          '  getPrototypeOf(target) {\n' +
          '    return "не объект"; // возвращает строку, а нужно объект или null\n' +
          '  }\n' +
          '});\n\n' +
          'Object.getPrototypeOf(badProxy); // Error',
      },
      {
        title: 'Ловушки isExtensible и preventExtensions',
        content:
          'isExtensible(target) срабатывает при проверке возможности расширения объекта.\n' +
          '• target — оригинальный объект\n\n' +
          'preventExtensions(target) срабатывает при запрете расширения объекта.\n' +
          '• target — оригинальный объект',
        addition:
          'Ловушка preventExtensions должна возвращать true, если операция прошла успешно, и false — если нет.\n' +
          'Важно использовать Reflect.isExtensible и Reflect.preventExtensions внутри ловушек.\n' +
          'Инвариант: после вызова preventExtensions, isExtensible должна возвращать false.',
        examples:
          'const proxy = new Proxy({}, {\n' +
          '  isExtensible(target) {\n' +
          '    return true;\n' +
          '  },\n' +
          '  preventExtensions(target) {\n' +
          '    return true;\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(Object.isExtensible(proxy)); // true\n' +
          'Object.preventExtensions(proxy); // Error\n' +
          'console.log(Object.isExtensible(proxy)); // true (должно быть false, но ловушка врёт)\n\n' +
          '// С Reflect.isExtensible и Reflect.preventExtensions\n' +
          'const target = { a: 1 };\n' +
          'const proxy2 = new Proxy(target, {\n' +
          '  isExtensible(target) {\n' +
          '    return Reflect.isExtensible(target);\n' +
          '  },\n' +
          '  preventExtensions(target) {\n' +
          '    return Reflect.preventExtensions(target);\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(Object.isExtensible(proxy2)); // true\n' +
          'Object.preventExtensions(proxy2);\n' +
          'console.log(Object.isExtensible(proxy2)); // false\n\n' +
          '// Без Reflect\n' +
          'const badProxy = new Proxy({}, {\n' +
          '  isExtensible(target) {\n' +
          '    return false;\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(Object.isExtensible(badProxy)); // Error',
      },
      {
        title: 'Ловушка defineProperty',
        content:
          'defineProperty(target, property, descriptor) срабатывает при определении или изменении свойства через Object.defineProperty.\n' +
          '• target — оригинальный объект\n' +
          '• property — имя свойства\n' +
          '• descriptor — дескриптор свойства (value, writable, enumerable, configurable, get, set)',
        addition:
          'Ловушка defineProperty должна возвращать true, если операция прошла успешно, и false — если нет.\n' +
          'Используйте Reflect.defineProperty внутри ловушки для реального определения свойства на целевом объекте.\n' +
          'Важно: если свойство в target неконфигурируемое (configurable: false), то при попытке переопределить его через defineProperty будет ошибка.',
        examples:
          '// С Reflect.defineProperty\n' +
          'const target = {};\n' +
          'const proxy = new Proxy(target, {\n' +
          '  defineProperty(target, prop, descriptor) {\n' +
          '    return Reflect.defineProperty(target, prop, descriptor);\n' +
          '  }\n' +
          '});\n\n' +
          'Object.defineProperty(proxy, "name", { value: "Вася", enumerable: true });\n' +
          'console.log(proxy.name); // Вася\n\n' +
          'const proxy2 = new Proxy({}, {\n' +
          '  defineProperty(target, prop, descriptor) {\n' +
          '    if (prop.startsWith("_")) {\n' +
          '      throw new Error("Нельзя определить свойство с _");\n' +
          '    }\n' +
          '    if (descriptor.hasOwnProperty("value") && typeof descriptor.value !== "string") {\n' +
          '      throw new Error("Значение должно быть строкой");\n' +
          '    }\n' +
          '    return Reflect.defineProperty(target, prop, descriptor);\n' +
          '  }\n' +
          '});\n\n' +
          'Object.defineProperty(proxy2, "name", { value: "Вася" });\n' +
          'console.log(proxy2.name); // Вася\n' +
          'Object.defineProperty(proxy2, "_secret", { value: 42 }); // Error: Нельзя определить свойство с _\n' +
          'Object.defineProperty(proxy2, "age", { value: 42 }); // Error: Значение должно быть строкой\n\n' +
          '// Без Reflect\n' +
          'const badProxy = new Proxy({}, {\n' +
          '  defineProperty(target, prop, descriptor) {\n' +
          '    return true;\n' +
          '  }\n' +
          '});\n\n' +
          'Object.defineProperty(badProxy, "name", { value: "Вася" });\n' +
          'console.log(badProxy.name); // undefined',
      },
      {
        title: 'Ограничения Proxy',
        content:
          '1. Встроенные объекты и внутренние слоты — Map, Set, Date, Promise и другие используют внутренние слоты (например, [[MapData]]), к которым прокси не имеет доступа.\n' +
          '2. Приватные поля классов — поля #name также реализованы через внутренние слоты и недоступны из прокси.\n' +
          '3. Прокси ≠ оригинальный объект — при использовании оригинального объекта как ключа в Map/Set, прокси не будет найден.\n' +
          '4. Строгое равенство === — прокси нельзя перехватить, объект строго равен только сам себе.',
        addition:
          '• Для встроенных объектов и приватных полей — привязывайте методы к оригинальному объекту через .bind(target) или возвращайте связанную функцию в ловушке get.\n' +
          '• Для Map/Set — всегда используйте прокси, а не оригинальный объект, в качестве ключа.\n' +
          'Array — исключение, он не использует внутренние слоты, поэтому проксируются без проблем.',
        examples:
          '// Проблема с Map (внутренние слоты)\n' +
          'let map = new Map();\n' +
          'let proxy = new Proxy(map, {});\n' +
          'try {\n' +
          '  proxy.set("test", 1);\n' +
          '} catch(e) {\n' +
          '  console.log(e.message);  // Error\n' +
          '}\n\n' +
          '// Решение: привязываем методы к оригинальному объекту\n' +
          'let proxy2 = new Proxy(map, {\n' +
          '  get(target, prop, receiver) {\n' +
          '    let value = Reflect.get(target, prop, receiver);\n' +
          '    if (typeof value === "function") {\n' +
          '      return value.bind(target);\n' +
          '    }\n' +
          '    return value;\n' +
          '  }\n' +
          '});\n\n' +
          'proxy2.set("test", 1);\n' +
          'console.log(proxy2.get("test")); // 1\n\n' +
          '// Проблема с приватными полями класса\n' +
          'class User {\n' +
          '  #name = "Вася";\n' +
          '  getName() {\n' +
          '    return this.#name;\n' +
          '  }\n' +
          '}\n\n' +
          'let user = new User();\n' +
          'let userProxy = new Proxy(user, {});\n' +
          'try {\n' +
          '  userProxy.getName();\n' +
          '} catch(e) {\n' +
          '  console.log(e.message); // Error\n' +
          '}\n\n' +
          '// Решение: возвращаем метод, привязанный к оригинальному объекту\n' +
          'let userProxy2 = new Proxy(user, {\n' +
          '  get(target, prop) {\n' +
          '    let value = target[prop];\n' +
          '    if (typeof value === "function") {\n' +
          '      return value.bind(target);\n' +
          '    }\n' +
          '    return value;\n' +
          '  }\n' +
          '});\n\n' +
          'console.log(userProxy2.getName()); // "Вася"\n\n' +
          '// Проблема: прокси и оригинальный объект — разные\n' +
          'const usersSet = new Set();\n' +
          'const obj = { id: 1 };\n' +
          'const proxyObj = new Proxy(obj, {});\n\n' +
          'usersSet.add(obj);\n' +
          'console.log(usersSet.has(proxyObj)); // false (разные объекты)\n\n' +
          '// Решение: использовать прокси везде вместо оригинального объекта\n' +
          'usersSet.add(proxyObj);\n' +
          'console.log(usersSet.has(proxyObj)); // true\n\n' +
          '// Исключение: Array не имеет проблем с внутренними слотами\n' +
          'let arr = [1, 2, 3];\n' +
          'let arrProxy = new Proxy(arr, {});\n' +
          'arrProxy.push(4);\n' +
          'console.log(arrProxy.length); // 4',
      },
      {
        title: 'Отключаемые прокси (Proxy.revocable)',
        content:
          'Метод Proxy.revocable(target, handler) создаёт прокси, который можно отключить.\n' +
          'Возвращает объект: { proxy, revoke }.\n' +
          '• proxy — созданный прокси-объект\n' +
          '• revoke — функция, при вызове которой прокси отключается\n' +
          'После вызова revoke() любые операции с proxy вызывают ошибку.',
        addition:
          'revoke можно вызывать только один раз. После отключения связь с целевым объектом теряется, что позволяет сборщику мусора очистить target (если на него нет других ссылок).',
        examples:
          'const target = { message: "секрет" };\n' +
          'const { proxy, revoke } = Proxy.revocable(target, {});\n\n' +
          'console.log(proxy.message); // "секрет"\n\n' +
          'revoke(); // отключаем прокси\n\n' +
          'try {\n' +
          '  console.log(proxy.message);\n' +
          '} catch(e) {\n' +
          '  console.log(e.name); // Error\n' +
          '}\n\n' +
          '// Хранение revoke в WeakMap\n' +
          'const revokes = new WeakMap();\n\n' +
          'function createRevocable(obj, handler) {\n' +
          '  const { proxy, revoke } = Proxy.revocable(obj, handler);\n' +
          '  revokes.set(proxy, revoke);\n' +
          '  return proxy;\n' +
          '}\n\n' +
          'function disable(proxy) {\n' +
          '  const revoke = revokes.get(proxy);\n' +
          '  if (revoke) revoke();\n' +
          '}\n\n' +
          'const user = createRevocable({ name: "Алексей" }, {});\n' +
          'console.log(user.name); // "Алексей"\n' +
          'disable(user);\n' +
          'console.log(user.name); // Error',
      },
    ],
  },
};
