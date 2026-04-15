import { type ITopic } from '@/entities/topic';

export const configPropertyDescriptors: ITopic = {
  value: 'property-descriptors',
  name: 'Дескрипторы свойств и аксессоры',
  content: {
    introduction:
      'Каждое свойство объекта имеет не только значение, но и скрытые атрибуты (флаги), управляющие его поведением. Дескрипторы позволяют тонко настраивать свойства: делать их доступными только для чтения, скрывать от перебора или запрещать удаление. Есть два типа свойств объекта: cвойства-данные и свойства-аксессоры. Свойства-аксессоры (геттеры и сеттеры) предоставляют механизм автоматического выполнения кода при чтении и записи свойств.',
    sections: [
      {
        title: 'Флаги свойств-данных',
        content:
          'Каждое свойство объекта, помимо значения value, имеет три скрытых атрибута:\n' +
          '• writable — если true, значение можно изменять; если false — свойство только для чтения\n' +
          '• enumerable — если true, свойство отображается в циклах (for..in) и методах вроде Object.keys; если false — игнорируется\n' +
          '• configurable — если true, свойство можно удалить и изменять его флаги; если false — удаление и изменение флагов запрещено\n\n' +
          'При обычном создании свойства (obj.prop = val) все флаги автоматически равны true.\n' +
          'При создании через Object.defineProperty/Object.defineProperties без явного указания — флаги по умолчанию равны false.',
        addition:
          'Флаги хранятся вместе со значением в дескрипторе свойства. Просмотреть их можно через Object.getOwnPropertyDescriptor/Object.getOwnPropertyDescriptors.',
        examples:
          '// Обычное создание — все флаги true\n' +
          'const user = { name: "Иван" };\n' +
          'console.log(Object.getOwnPropertyDescriptor(user, "name"));\n' +
          '// { value: "Иван", writable: true, enumerable: true, configurable: true }\n\n' +
          '// Создание через defineProperty — флаги по умолчанию false\n' +
          'const user2 = {};\n' +
          'Object.defineProperty(user2, "name", {\n' +
          '  value: "Мария"\n' +
          '});\n' +
          'console.log(Object.getOwnPropertyDescriptor(user2, "name"));\n' +
          '// { value: "Мария", writable: false, enumerable: false, configurable: false }',
      },
      {
        title: 'Незаписываемые свойства (writable: false)',
        content:
          'Если writable: false, попытка изменения значения игнорируется в нестрогом режиме и вызывает TypeError в строгом режиме.\n' +
          'Флаг writable можно сбросить обратно в true только если configurable: true.',
        addition:
          'Это самый мягкий запрет — свойство можно читать, но нельзя изменять. Используется для создания констант на уровне объекта.',
        examples:
          'const config = {};\n' +
          'Object.defineProperty(config, "version", {\n' +
          '  value: "1.0.0",\n' +
          '  writable: false,\n' +
          '  enumerable: true,\n' +
          '  configurable: true\n' +
          '});\n\n' +
          'console.log(config.version); // "1.0.0"\n' +
          'config.version = "2.0.0";\n' +
          'console.log(config.version); // "1.0.0"\n\n' +
          '// Можно восстановить writable, т.к. configurable: true\n' +
          'Object.defineProperty(config, "version", {\n' +
          '  writable: true\n' +
          '});\n' +
          'config.version = "2.0.0";\n' +
          'console.log(config.version); // "2.0.0"',
      },
      {
        title: 'Неперечислимые свойства (enumerable: false)',
        content:
          'Если enumerable: false, свойство скрывается от:\n' +
          '• цикла for..in\n' +
          '• Object.keys(), Object.values(), Object.entries()\n' +
          '• оператора spread {...obj}',
        addition:
          'Свойство всё ещё доступно напрямую (obj.prop), просто не участвует в переборе.',
        examples:
          'const user = {\n' +
          '  name: "Иван",\n' +
          '  age: 30\n' +
          '};\n\n' +
          '// Скрытое свойство\n' +
          'Object.defineProperty(user, "_password", {\n' +
          '  value: "secret123",\n' +
          '  writable: true,\n' +
          '  enumerable: false,\n' +
          '  configurable: true\n' +
          '});\n\n' +
          '// Доступ напрямую — работает\n' +
          'console.log(user._password); // "secret123"\n\n' +
          '// Но скрыто от перебора\n' +
          'for (let key in user) {\n' +
          '  console.log(key); // только "name", "age"\n' +
          '}\n\n' +
          'console.log(Object.keys(user)); // ["name", "age"]\n' +
          'console.log({ ...user }); // { name: "Иван", age: 30 }',
      },
      {
        title: 'Неконфигурируемые свойства (configurable: false)',
        content:
          'Если configurable: false:\n' +
          '• Свойство нельзя удалить (delete)\n' +
          '• Его флаги нельзя изменить\n' +
          '• Обратно сделать configurable: true невозможно\n' +
          'Единственное исключение: для неконфигурируемого свойства разрешено менять writable: true → false, но не наоборот.\n' +
          'Если writable: true, значение свойства всё ещё можно менять, даже если configurable: false.\n' +
          'Установка обоих флагов в false превращает свойство в «вечную» константу (как Math.PI).',
        addition:
          'Это самый строгий запрет. Используется для создания настоящих констант и защиты критичных свойств от любых изменений.',
        examples:
          'const math = {};\n' +
          'Object.defineProperty(math, "PI", {\n' +
          '  value: 3.14159,\n' +
          '  writable: false,\n' +
          '  enumerable: true,\n' +
          '  configurable: false\n' +
          '});\n\n' +
          'console.log(math.PI); // 3.14159\n\n' +
          '// Нельзя изменить значение\n' +
          'math.PI = 3.14;\n\n' +
          '// Нельзя удалить\n' +
          'delete math.PI;\n\n' +
          '// Нельзя изменить флаги\n' +
          'Object.defineProperty(math, "PI", {\n' +
          '  configurable: true\n' +
          '});\n\n' +
          '// Исключение: можно изменить writable: true → false\n' +
          'const locked = {};\n' +
          'Object.defineProperty(locked, "value", {\n' +
          '  value: 42,\n' +
          '  writable: true,\n' +
          '  configurable: false\n' +
          '});\n' +
          'Object.defineProperty(locked, "value", { writable: false });',
      },
      {
        title: 'Свойства-аксессоры: геттеры и сеттеры',
        content:
          'Свойства-аксессоры внешне выглядят как обычные свойства, но на самом деле вызывают функции:\n' +
          '• get — выполняется при чтении свойства\n' +
          '• set — выполняется при записи свойства\n\n' +
          'Свойство не может одновременно быть и аксессором, и свойством-данным (иметь value/writable и get/set).\n' +
          'В литерале объекта используются ключевые слова get и set перед именем свойства.',
        addition:
          'Дескриптор свойства-аксессора: get, set, enumerable и configurable.',
        examples:
          'const user = {\n' +
          '  name: "Иван",\n' +
          '  surname: "Иванов",\n' +
          '\n' +
          '  get fullName() {\n' +
          '    return `${this.name} ${this.surname}`;\n' +
          '  },\n' +
          '\n' +
          '  set fullName(value) {\n' +
          '    [this.name, this.surname] = value.split(" ");\n' +
          '  }\n' +
          '};\n\n' +
          '// Чтение — вызывается get\n' +
          'console.log(user.fullName); // "Иван Иванов"\n\n' +
          '// Запись — вызывается set\n' +
          'user.fullName = "Пётр Петров";\n' +
          'console.log(user.name); // "Пётр"\n' +
          'console.log(user.surname); // "Петров"',
      },
    ],
  },
};
