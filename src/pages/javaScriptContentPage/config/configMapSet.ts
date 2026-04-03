import { type ITopic } from '@/entities/topic';

export const configMapSet: ITopic = {
  value: 'map-set-weakmap-weakset',
  name: 'Map, Set, WeakMap и WeakSet',
  content: {
    introduction:
      'Map и Set — это современные структуры данных для работы с коллекциями. WeakMap и WeakSet — их «слабые» версии, которые позволяют сборщику мусора очищать память.',
    sections: [
      {
        title: 'Map',
        content:
          'Map — это коллекция пар вида ключ-значение.\n' +
          '• Ключи могут быть любого типа\n' +
          '• Ключи уникальны\n' +
          '• Сохраняет порядок вставки элементов\n' +
          '• Имеет свойство size для получения количества элементов',
        addition:
          'Map предпочтительнее объектов, когда ключи неизвестны заранее или являются объектами.',
        examples:
          '// Создание Map\n' +
          'const map = new Map();\n\n' +
          '// Добавление элементов\n' +
          'map.set("name", "Иван");\n' +
          'map.set(1, "число");\n' +
          'const keyObj = {};\n' +
          'map.set(keyObj, "значение по объекту");\n\n' +
          '// Чтение\n' +
          'console.log(map.get("name")); // "Иван"\n' +
          'console.log(map.get(1)); // "число"\n' +
          'console.log(map.get(keyObj)); // "значение по объекту"\n\n' +
          '// Проверка наличия\n' +
          'console.log(map.has("name")); // true\n' +
          'console.log(map.has("age")); // false\n\n' +
          '// Удаление\n' +
          'map.delete(1);\n' +
          'console.log(map.size); // 2\n\n' +
          '// Очистка\n' +
          'map.clear();\n' +
          'console.log(map.size); // 0',
      },
      {
        title: 'Set',
        content:
          'Set — это коллекция уникальных значений.\n' +
          '• Хранит только уникальные значения\n' +
          '• Сохраняет порядок вставки элементов\n' +
          '• Значения могут быть любого типа\n' +
          '• Имеет свойство size для получения количества элементов',
        addition:
          'Set полезен для удаления дубликатов из массива и проверки наличия значений.',
        examples:
          '// Создание Set\n' +
          'const set = new Set();\n\n' +
          '// Добавление элементов\n' +
          'set.add(1);\n' +
          'set.add(2);\n' +
          'set.add(2); // не добавится (дубликат)\n' +
          'set.add("строка");\n\n' +
          '// Проверка наличия\n' +
          'console.log(set.has(1)); // true\n' +
          'console.log(set.has(3)); // false\n\n' +
          '// Удаление\n' +
          'set.delete(2);\n' +
          'console.log(set.size); // 2\n\n' +
          '// Очистка\n' +
          'set.clear();\n\n' +
          '// Удаление дубликатов из массива\n' +
          'const arr = [1, 2, 2, 3, 3, 3];\n' +
          'const unique = [...new Set(arr)];\n' +
          'console.log(unique); // [1, 2, 3]',
      },
      {
        title: 'WeakMap',
        content:
          'WeakMap — это Map-подобная коллекция пар вида ключ-значение, где ключами могут быть только объекты, и ссылки на ключи являются «слабыми».\n' +
          '• Ключами могут быть только объекты\n' +
          '• Ссылки на ключи слабые (не препятствуют сборке мусора)\n' +
          '• Не поддерживают методы и свойства, работающие со всем содержимым или возвращающие информацию о размере коллекции\n' +
          '• Возможны только операции на отдельном элементе коллекции\n' +
          '• Автоматическая очистка памяти при удалении ключей',
        addition:
          'WeakMap идеально подходит для кэширования данных, связанных с объектами, без утечек памяти.',
        examples:
          '// Создание WeakMap\n' +
          'const weakMap = new WeakMap();\n\n' +
          '// Ключ — объект\n' +
          'const user = { name: "Иван" };\n' +
          'weakMap.set(user, { age: 30 });\n\n' +
          '// Чтение\n' +
          'console.log(weakMap.get(user)); // { age: 30 }\n\n' +
          '// Проверка наличия\n' +
          'console.log(weakMap.has(user)); // true\n\n' +
          '// Удаление\n' +
          'weakMap.delete(user);\n' +
          'console.log(weakMap.has(user)); // false\n\n' +
          '// Автоматическая очистка памяти\n' +
          'let obj = {};\n' +
          'weakMap.set(obj, "данные");\n' +
          'obj = null; // объект будет удалён сборщиком мусора',
      },
      {
        title: 'WeakSet',
        content:
          'WeakSet — это Set-подобная коллекция уникальных объектов со слабыми ссылками.\n' +
          '• Хранит только объекты\n' +
          '• Ссылки на объекты слабые (не препятствуют сборке мусора)\n' +
          '• Не поддерживают методы и свойства, работающие со всем содержимым или возвращающие информацию о размере коллекции\n' +
          '• Возможны только операции на отдельном элементе коллекции\n' +
          '• Автоматическая очистка памяти при удалении объектов',
        addition:
          'WeakSet полезен для отслеживания объектов без предотвращения их сборки мусором.',
        examples:
          '// Создание WeakSet\n' +
          'const weakSet = new WeakSet();\n\n' +
          '// Добавление объектов\n' +
          'const obj1 = { id: 1 };\n' +
          'const obj2 = { id: 2 };\n' +
          'weakSet.add(obj1);\n' +
          'weakSet.add(obj2);\n\n' +
          '// Проверка наличия\n' +
          'console.log(weakSet.has(obj1)); // true\n' +
          'console.log(weakSet.has(obj2)); // true\n\n' +
          '// Удаление\n' +
          'weakSet.delete(obj1);\n' +
          'console.log(weakSet.has(obj1)); // false\n\n' +
          '// Автоматическая очистка памяти\n' +
          'let item = { data: "value" };\n' +
          'weakSet.add(item);\n' +
          'item = null; // объект будет удалён сборщиком мусора',
      },
    ],
  },
};
