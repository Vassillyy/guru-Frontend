import { type ITopic } from '@/entities/topic';

export const configObjectToPrimitive: ITopic = {
  value: 'object-to-primitive',
  name: 'Преобразование объектов в примитивы',
  content: {
    introduction:
      'Объекты в JavaScript автоматически преобразуются в примитивные значения при определённых операциях.',
    sections: [
      {
        title: 'Автоматическое преобразование объектов',
        content:
          'JavaScript не позволяет выполнять операции над объектами напрямую. При попытке сложить, вычесть или сравнить объекты, они автоматически преобразуются в примитивы (строку или число).\n\n' +
          'Результат любой математической операции с объектами — всегда примитив, другой объект получить нельзя.\n\n' +
          'Важно: преобразования к boolean не существует! Все объекты в логическом контексте всегда true.',
        addition:
          'Преобразование происходит неявно — вы не вызываете методы вручную, JavaScript сам решает, какой метод вызвать.',
        examples:
          '// Сложение объектов\n' +
          'const obj1 = { value: 1 };\n' +
          'const obj2 = { value: 2 };\n' +
          'console.log(obj1 + obj2); // "[object Object][object Object]"\n\n' +
          '// Вычитание\n' +
          'console.log(obj1 - obj2); // NaN\n\n' +
          '// Умножение\n' +
          'console.log(obj1 * 2); // NaN\n\n' +
          '// Логический контекст — всегда true\n' +
          'if ({}) { console.log("true"); } // выполнится\n' +
          'if ({ value: 0 }) { console.log("true"); } // выполнится',
      },
      {
        title: 'Хинты (подсказки) преобразования',
        content:
          'JavaScript использует три типа подсказок (hints) для выбора способа преобразования:\n\n' +
          '1. "string" — когда ожидается строка:\n' +
          '   • alert(obj)\n' +
          '   • Шаблонные строки: `${obj}`\n' +
          '   • Конкатенация со строкой: obj + "text"\n\n' +
          '2. "number" — когда ожидается число:\n' +
          '   • Математические операции: obj - 5, obj * 2\n' +
          '   • Унарный плюс: +obj\n' +
          '   • Number(obj)\n' +
          '   • Сравнение: obj1 > obj2\n\n' +
          '3. "default" — когда допустимы оба типа:\n' +
          '   • Оператор ==: obj == 5\n' +
          '   • Оператор + с объектом и строкой\n' +
          '   • Операторы сравнения: >, <, >=, <=',
        addition:
          'Хинт определяется контекстом операции. JavaScript сам решает, какую подсказку использовать.',
        examples:
          '// Хинт "string"\n' +
          'const user = { name: "Alice" };\n' +
          'console.log(user); // "[object Object]" (ожидается строка)\n' +
          'console.log(`Hello ${user}`); // "Hello [object Object]"\n\n' +
          '// Хинт "number"\n' +
          'const num = { value: 10 };\n' +
          'console.log(+num); // 10 (унарный плюс)\n' +
          'console.log(num * 2); // 20\n' +
          'console.log(Number(num)); // 10\n\n' +
          '// Хинт "default"\n' +
          'const obj = { value: 5 };\n' +
          'console.log(obj == 5); // false (сначала в примитив, потом сравнение)\n' +
          'console.log(obj + 10); // 15',
      },
      {
        title: 'Symbol.toPrimitive — современный способ',
        content:
          'Symbol.toPrimitive — это встроенный символ, который позволяет настроить преобразование объекта в примитив. Если этот метод существует, он вызывается для всех хинтов и имеет наивысший приоритет.\n\n' +
          'Синтаксис: obj[Symbol.toPrimitive](hint)\n\n' +
          'Параметр hint — строка с подсказкой ("string", "number", "default").\n\n' +
          'Метод должен возвращать примитивное значение. Если вернуть объект, будет ошибка TypeError.',
        addition:
          'Это предпочтительный способ настройки преобразования в современном JavaScript. Если Symbol.toPrimitive не определён, используются toString() и valueOf().',
        examples:
          '// Кастомное преобразование с Symbol.toPrimitive\n' +
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
          'До появления Symbol.toPrimitive использовались методы toString() и valueOf(). Они всё ещё работают для совместимости.\n\n' +
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
      {
        title: 'Алгоритм преобразования',
        content:
          'Полный алгоритм преобразования объекта в примитив:\n\n' +
          '1. Если есть obj[Symbol.toPrimitive] — вызвать его с hint\n' +
          '2. Если нет Symbol.toPrimitive:\n' +
          '   • hint === "string":\n' +
          '     - toString() → если примитив, вернуть\n' +
          '     - valueOf() → если примитив, вернуть\n' +
          '   • hint === "number" или "default":\n' +
          '     - valueOf() → если примитив, вернуть\n' +
          '     - toString() → если примитив, вернуть\n' +
          '3. Если ни один метод не вернул примитив — TypeError',
        addition:
          'Двухэтапный процесс: сначала объект → примитив, затем примитив → нужный тип (если требуется).',
        examples:
          '// Полный пример с приоритетами\n' +
          'const obj = {\n' +
          '  [Symbol.toPrimitive](hint) {\n' +
          '    console.log(`toPrimitive: ${hint}`);\n' +
          '    return 42;\n' +
          '  },\n' +
          '  toString() {\n' +
          '    console.log("toString");\n' +
          '    return "str";\n' +
          '  },\n' +
          '  valueOf() {\n' +
          '    console.log("valueOf");\n' +
          '    return 100;\n' +
          '  }\n' +
          '};\n\n' +
          'console.log(+obj); // toPrimitive: number, 42\n' +
          'console.log(String(obj)); // toPrimitive: string, "42"\n' +
          'console.log(obj == 42); // toPrimitive: default, true\n\n' +
          '// Без Symbol.toPrimitive\n' +
          'const obj2 = {\n' +
          '  toString() { return "str"; },\n' +
          '  valueOf() { return 100; }\n' +
          '};\n' +
          'console.log(obj2 + 10); // 110 (valueOf)\n' +
          'console.log(String(obj2)); // "str" (toString)',
      },
    ],
  },
};
