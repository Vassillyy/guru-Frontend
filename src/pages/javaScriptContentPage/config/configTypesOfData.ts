import { type ITopic } from '@/entities/topic';

export const configTypesOfData: ITopic = {
  value: 'data-types',
  title: 'Типы данных',
  content: {
    introduction:
      'В JavaScript существует 8 типов данных. Из них 7 — примитивные, а один — ссылочный.',
    sections: [
      {
        title: 'Примитивные типы',
        content:
          'Number - числовой тип представляет как целочисленные значения, так и числа с плавающей точкой, так же Infinity, -Infinity и NaN.\nBigInt - числовой тип используется для работы с целыми числами произвольной длины. Обозначается добавлением суффикса n. BigInt нельзя смешивать с Number в арифметических операциях.\nString - последовательность символов, заключенная в кавычки.\nBoolean - логический тип, который содержит только два значения: true и false.\nNull - тип, который содержит только значение null и указывает на нулевое значение. При проверке через typeof возвращает "object" (историческая особенность JavaScript).\nUndefined - тип, который содержит только значение undefined, и означает, что «значение не было присвоено». Это значение присваивается переменным, которые были объявлены через let или var без инициализации (для const без значения возникает ошибка).\nSymbol - используется для создания уникальных идентификаторов.',
        addition:
          'При записи примитивного значения в переменную, значение сохраняется в статической памяти (стеке) в виде байтов. При присвоении одной переменной другой копируется само значение (байты). Создаются две независимые копии. Примитивные значения являются иммутабельными (неизменяемыми). При сравнении двух примитивных значений происходит побайтовое сравнение их содержимого.\nBoxing и Unboxing: Несмотря на отсутствие собственных методов и свойств, примитивы могут использовать методы через механизм автоматического оборачивания (Boxing). JavaScript неявно создает временные объекты-обертки (String, Number, Boolean, Symbol, BigInt) при обращении к методам, выполняя операцию и затем удаляя обертку (Unboxing). Null и undefined не имеют соответствующих оберток, что исключает возможность использования свойств и методов для них.',
        examples:
          'console.log(typeof 42) // "number"\nconsole.log(typeof 3.14) // "number"\nconsole.log(typeof Infinity) // "number"\nconsole.log(typeof -Infinity) // "number"\nconsole.log(typeof NaN) // "number"\n\nconsole.log(typeof 1234567890123456789012345678901234567890n) // "bigint"\n\nconsole.log(typeof \'Hello\') // "string"\nconsole.log(typeof "World") // "string"\nconsole.log(typeof `Hello ${"World"}`) // "string"\n\nconsole.log(typeof true) // "boolean"\nconsole.log(typeof false) // "boolean"\n\nconsole.log(typeof null) // "object" (историческая особенность)\n\nlet notDefined\nconsole.log(typeof notDefined) // "undefined"\nconsole.log(typeof undefined) // "undefined"\n\nconsole.log(typeof Symbol("id")) // "symbol"\n\n// Пример копирования примитивов\nlet a = 10\nlet b = a // копируется значение\nb = 20\nconsole.log(a) // 10 (не изменилось)\nconsole.log(b) // 20\n\n// Сравнение примитивов\nconst x = 5\nconst y = 5\nconsole.log(x === y) // true (одинаковые значения)',
      },
      {
        title: 'Ссылочный тип',
        content:
          'Object - хранит коллекции данных или более сложные структуры.',
        addition:
          'При записи ссылочного значения в переменную, в статической памяти (стеке) сохраняется только ссылка (адрес в памяти), а само значение размещается в динамической памяти (куче). При присвоении одной переменной другой копируется только ссылка, а не само значение. Создаются две переменные, указывающие на один и тот же объект. Ссылочные типы являются мутабельными (изменяемыми). При сравнении двух ссылочных значений происходит сравнение ссылок (адресов в памяти), а не содержимого объектов.',
        examples:
          'const user = { name: "John", age: 30, isAdmin: true }\nconst numbers = [1, 2, 3, 4, 5]\nconst sayHello = function() { return "Hello!" }\n\nconsole.log(typeof user) // "object"\nconsole.log(typeof numbers) // "object"\nconsole.log(typeof sayHello) // "function" (особенность языка, хотя функция тоже объект)\n\n// Пример работы ссылок\nconst obj1 = { x: 10 }\nconst obj2 = obj1 // копируется ссылка, не значение\nobj2.x = 20\nconsole.log(obj1.x) // 20 (изменилось!)\n\n// Сравнение объектов\nconst a = { x: 10 }\nconst b = { x: 10 }\nconsole.log(a === b) // false (разные объекты)\nconsole.log(obj1 === obj2) // true (одна ссылка)',
      },
    ],
  },
};
