import { type ITopic } from '@/entities/topic';

export const configObjectToPrimitive: ITopic = {
  value: 'object-to-primitive',
  name: 'Преобразование объектов в примитивы',
  content: {
    introduction:
      'Объекты в JavaScript автоматически преобразуются в примитивные значения при определённых операциях.',
    sections: [
      {
        title: 'Автоматическое преобразование объектов (хинты)',
        content:
          'JavaScript не позволяет выполнять операции над объектами напрямую. При попытке выполнить операции, они автоматически преобразуются в примитивы (строку или число).\n' +
          'Преобразования к boolean не существует! Все объекты в логическом контексте всегда true.\n\n' +
          'JavaScript использует три типа хинтов (hints) для выбора способа преобразования:\n' +
          '1. string — когда ожидается строка:\n' +
          '• String(obj)\n' +
          '• alert(obj)\n' +
          '• Шаблонные строки: `${obj}`\n' +
          '• Использование объекта в качестве ключа: anotherObj[obj] = 123\n' +
          '• Конкатенация: obj + "text"\n' +
          '2. number — когда ожидается число:\n' +
          '• Number(obj)\n' +
          '• Математические операции: obj1 (-, *, /) obj2\n' +
          '• Унарный плюс: +obj\n' +
          '• Сравнения: obj1 (>, <, <=, >=) obj2\n' +
          '3. default — когда допустимы оба типа:\n' +
          '• Бинарный плюс: obj + obj2\n' +
          '• Нестрогое равенство/неравенство: obj (==, !=) 5',
        addition:
          'Хинт определяется контекстом операции. JavaScript сам решает, какую подсказку использовать.\n' +
          'По умолчанию у объекта нет методов для преобразования в число, поэтому математические операции возвращают NaN.',
        examples:
          '// Хинт "string"\n' +
          'const user = { name: "Alice" };\n' +
          'console.log(String(user)); // "[object Object]"\n' +
          'console.log(`Hello ${user}`); // "Hello [object Object]"\n' +
          'const key = { id: 1 };\n' +
          'const obj = {};\n' +
          'obj[key] = "value";\n' +
          'console.log(obj["[object Object]"]); // "value"\n\n' +
          '// Хинт "number"\n' +
          'const num = { value: 10 };\n' +
          'console.log(Number(num)); // NaN\n' +
          'console.log(+num); // NaN\n' +
          'console.log(num * 2); // NaN\n' +
          'console.log(num > 5); // false\n\n' +
          '// Хинт "default"\n' +
          'const obj2 = { value: 5 };\n' +
          'console.log(obj2 == 5); // false\n' +
          'console.log(obj2 + 10); // "[object Object]10"',
      },
      {
        title: 'Symbol.toPrimitive',
        content:
          'Symbol.toPrimitive — это встроенный символ, который позволяет настроить преобразование объекта в примитив. Если этот метод существует, он вызывается для всех хинтов и имеет наивысший приоритет.\n\n' +
          'obj[Symbol.toPrimitive](hint)\n\n' +
          'Параметр hint — строка с подсказкой ("string", "number", "default").\n\n' +
          'Метод должен возвращать примитивное значение. Если вернуть объект, будет ошибка TypeError.',
        addition:
          'Это предпочтительный способ настройки преобразования в современном JavaScript. Если Symbol.toPrimitive не определён, используются toString() и valueOf().',
        examples:
          'const user = {\n' +
          '  name: "Alice",\n' +
          '  money: 1000,\n' +
          '  [Symbol.toPrimitive](hint) {\n' +
          '    if (hint === "string") {\n' +
          '      return this.name;\n' +
          '    } else if (hint === "number") {\n' +
          '      return this.money;\n' +
          '    } else {\n' +
          '      // hint === "default"\n' +
          '      return this.money;\n' +
          '    }\n' +
          '  }\n' +
          '};\n\n' +
          'console.log(String(user)); // "Alice" (hint: "string")\n' +
          'console.log(+user); // 1000 (hint: "number")\n' +
          'console.log(user == 1000); // true (hint: "default")\n' +
          'console.log(user + 500); // 1500 (hint: "default")',
      },
      {
        title: 'toString() и valueOf() — устаревший способ',
        content:
          'До появления Symbol.toPrimitive использовались методы toString() и valueOf(). Они всё ещё работают для совместимости.\n' +
          'Приоритет вызова:\n' +
          '1. Если есть Symbol.toPrimitive — вызывается только он\n' +
          '2. Если нет Symbol.toPrimitive:\n' +
          '   • Хинт "string": toString() → valueOf()\n' +
          '   • Хинт "number"/"default": valueOf() → toString()\n\n' +
          'valueOf() должен возвращать примитив. Если возвращает объект — игнорируется и вызывается toString().',
        addition:
          'toString() по умолчанию возвращает "[object Object]". valueOf() по умолчанию возвращает сам объект.',
        examples:
          '// Переопределение toString()\n' +
          'const user = {\n' +
          '  name: "Alice",\n' +
          '  toString() {\n' +
          '    return this.name;\n' +
          '  }\n' +
          '};\n' +
          'console.log(String(user)); // "Alice"\n' +
          'console.log(user + " работает"); // "Alice работает"\n\n' +
          '// Переопределение valueOf()\n' +
          'const numberObj = {\n' +
          '  value: 100,\n' +
          '  valueOf() {\n' +
          '    return this.value;\n' +
          '  }\n' +
          '};\n' +
          'console.log(+numberObj); // 100\n' +
          'console.log(numberObj + 50); // 150\n\n' +
          '// Оба метода\n' +
          'const obj = {\n' +
          '  toString() { return "str"; },\n' +
          '  valueOf() { return 42; }\n' +
          '};\n' +
          'console.log(obj + 10); // 52 (valueOf имеет приоритет для "default")\n' +
          'console.log(String(obj)); // "str" (toString для "string")',
      },
    ],
  },
};
