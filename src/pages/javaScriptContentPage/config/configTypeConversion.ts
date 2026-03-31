import { type ITopic } from '@/entities/topic';

export const configTypeConversion: ITopic = {
  value: 'type-conversion',
  name: 'Преобразование примитивных значений',
  content: {
    introduction:
      'JavaScript — язык с динамической типизацией, где значения могут автоматически или явно преобразовываться к другому типу.',
    sections: [
      {
        title:
          'Преобразование примитивов: Number, String, Boolean, BigInt, Symbol',
        content:
          'Преобразование к числу (Number)\n' +
          '• String → Number: строка парсится как число. Пустая строка → 0. Пробельные символы игнорируются. Не числовые строки → NaN.\n' +
          '• Boolean → Number: true → 1, false → 0.\n' +
          '• BigInt → Number: теряет точность для больших значений, может стать Infinity.\n' +
          '• Symbol → Number: невозможно, выбрасывает TypeError.\n\n' +
          'Преобразование к строке (String)\n' +
          '• Number → String: число записывается как строка. NaN → "NaN", Infinity → "Infinity", -0 → "0".\n' +
          '• Boolean → String: true → "true", false → "false".\n' +
          '• BigInt → String: аналогично Number, но без потери точности.\n' +
          '• Symbol → String: явное преобразование (String(Symbol)) всегда работает и возвращает "Symbol(...)". Неявное (конкатенация) вызывает TypeError.\n\n' +
          'Преобразование к boolean (Boolean)\n' +
          '• Number → Boolean: 0, -0, NaN → false, остальные → true.\n' +
          '• String → Boolean: пустая строка "" → false, остальные → true.\n' +
          '• BigInt → Boolean: 0n → false, остальные → true.\n' +
          '• Symbol → Boolean: все символы → true.\n\n' +
          'Преобразование к BigInt (BigInt)\n' +
          '• Number → BigInt: целые числа в безопасном диапазоне преобразуются точно. Дробные вызывают ошибку.\n' +
          '• String → BigInt: строка должна содержать только целое число, иначе ошибка.\n' +
          '• Boolean → BigInt: true → 1n, false → 0n.\n' +
          '• Symbol → BigInt: невозможно, TypeError.\n\n' +
          'Преобразование к Symbol (Symbol)\n' +
          '• Все типы → Symbol: создаётся новый уникальный символ с описанием из строкового представления значения.',
        addition:
          'Явное преобразование выполняется функциями-конструкторами: Number(), String(), Boolean(), BigInt().\n\n' +
          'Неявное (автоматическое) преобразование происходит в операциях:\n' +
          '• Арифметические операторы (-, *, /, %, **): аргументы приводятся к числу.\n' +
          '• Арифметический оператор (+):  если хотя бы один аргумент является строкой — оба приводятся к строке (конкатенация), иначе оба приводятся к числу.\n' +
          '• Операторы сравнения (>, <, >=, <=): если оба аргумента — строки, выполняется лексикографическое сравнение строк; иначе оба приводятся к числу.\n' +
          '• Операторы равенства (==, !=): аргументы приводятся к общему типу.\n' +
          '• Логические операторы (&&, ||): аргументы приводятся к boolean.\n' +
          '• Унарные логические операторы (!, !!): аргумент приводится к boolean.\n' +
          '• Тернарный оператор (? :): условие приводится к boolean.\n' +
          '• Конкатенация с строкой (+): если один аргумент строка, другой приводится к строке.\n\n' +
          'Унарный плюс (+) — самый быстрый способ преобразовать значение в число.\n' +
          'Двойное НЕ (!!) — компактный способ преобразовать значение в boolean.',
        examples:
          '// Number() — преобразование к числу\n' +
          'console.log(Number("42"));      // 42\n' +
          'console.log(Number("  3.14  ")); // 3.14 (пробелы игнорируются)\n' +
          'console.log(Number(""));        // 0 (пустая строка)\n' +
          'console.log(Number("hello"));   // NaN (не числовая строка)\n' +
          'console.log(Number("123abc"));  // NaN (символы после числа)\n' +
          'console.log(Number(true));      // 1\n' +
          'console.log(Number(false));     // 0\n' +
          'console.log(Number(null));      // 0 (особенность!)\n' +
          'console.log(Number(undefined)); // NaN\n' +
          'console.log(Number(Symbol("id"))); // TypeError\n\n' +
          '// Унарный плюс — компактное преобразование в число\n' +
          'console.log(+"42");   // 42\n' +
          'console.log(+true);   // 1\n' +
          'console.log(+"");     // 0\n\n' +
          '// String() — преобразование к строке\n' +
          'console.log(String(42));        // "42"\n' +
          'console.log(String(NaN));       // "NaN"\n' +
          'console.log(String(Infinity));  // "Infinity"\n' +
          'console.log(String(-0));        // "0"\n' +
          'console.log(String(false));     // "false"\n' +
          'console.log(String(Symbol("id"))); // "Symbol(id)" — явное преобразование работает\n' +
          'console.log(String(Symbol()));      // "Symbol()" — даже без описания\n\n' +
          '// Неявное преобразование Symbol к строке (конкатенация)\n' +
          'console.log("Символ: " + Symbol("id")); // TypeError\n' +
          '// Шаблонные строки — неявное преобразование\n' +
          'console.log(`Значение: ${42}`);      // "Значение: 42"\n' +
          'console.log(`Результат: ${true}`);   // "Результат: true"\n\n' +
          '// Boolean() — преобразование к boolean\n' +
          'console.log(Boolean(1));        // true\n' +
          'console.log(Boolean(0));        // false\n' +
          'console.log(Boolean(-0));       // false\n' +
          'console.log(Boolean(NaN));      // false\n' +
          'console.log(Boolean(42));       // true\n' +
          'console.log(Boolean("text"));   // true\n' +
          'console.log(Boolean(""));       // false\n' +
          'console.log(Boolean(" "));      // true (пробел — не пустая строка!)\n' +
          'console.log(Boolean(0n));       // false\n' +
          'console.log(Boolean(10n));      // true\n' +
          'console.log(Boolean(Symbol("id"))); // true\n\n' +
          '// Двойное НЕ (!!) — компактное преобразование в boolean\n' +
          'console.log(!!"text");  // true\n' +
          'console.log(!!"");      // false\n' +
          'console.log(!!0);       // false\n' +
          'console.log(!!42);      // true\n\n' +
          '// BigInt() — преобразование к BigInt\n' +
          'console.log(BigInt("42"));       // 42n\n' +
          'console.log(BigInt("0"));        // 0n\n' +
          'console.log(BigInt(true));       // 1n\n' +
          'console.log(BigInt(false));      // 0n\n' +
          'console.log(BigInt(100));        // 100n\n' +
          'console.log(BigInt(3.14));       // RangeError (дробные не допускаются)\n' +
          'console.log(BigInt("hello"));    // SyntaxError\n\n' +
          '// Symbol() — преобразование к символу\n' +
          'console.log(Symbol("id"));       // Symbol(id)\n' +
          'console.log(Symbol(42));         // Symbol(42)\n' +
          'console.log(Symbol(true));       // Symbol(true)\n' +
          'console.log(Symbol(null));       // Symbol(null)\n' +
          'console.log(Symbol({}));         // Symbol([object Object])\n\n' +
          '// Автоматическое преобразование в операциях\n' +
          'console.log("5" - 2);      // 3 (строка → число)\n' +
          'console.log("5" + 2);      // "52" (число → строка, конкатенация!)\n' +
          'console.log("10" * "2");   // 20 (обе строки → числа)\n' +
          'console.log("10" / "4");   // 2.5\n' +
          'console.log("5" > 2);      // true (строка → число)\n' +
          'console.log(true + 1);     // 2 (true → 1)\n' +
          'console.log(false * 5);    // 0 (false → 0)\n' +
          'console.log(5 && "hello"); // "hello" (логическое И)\n' +
          'console.log(0 || "default"); // "default" (логическое ИЛИ)',
      },
      {
        title: 'Преобразование undefined и null',
        content:
          'undefined и null — специальные значения, которые ведут себя уникально при преобразовании.\n\n' +
          'Преобразование undefined:\n' +
          '• К Number: undefined → NaN\n' +
          '• К String: undefined → "undefined"\n' +
          '• К Boolean: undefined → false\n' +
          '• К BigInt: undefined → TypeError\n\n' +
          'Преобразование null:\n' +
          '• К Number: null → 0 (особенность!)\n' +
          '• К String: null → "null"\n' +
          '• К Boolean: null → false\n' +
          '• К BigInt: null → TypeError',
        addition:
          'Важная особенность: null и undefined при сравнении через == равны друг другу, но не равны никаким другим значениям.\n\n' +
          'null при преобразовании к числу даёт 0 — это историческая особенность JavaScript, которая часто вызывает путаницу.\n' +
          'Также: null > 0 && null == 0 – false, null >= 0 - true',
        examples:
          '// undefined\n' +
          'console.log(Number(undefined));    // NaN\n' +
          'console.log(+undefined);           // NaN\n' +
          'console.log(String(undefined));    // "undefined"\n' +
          'console.log(`${undefined}`);       // "undefined"\n' +
          'console.log(Boolean(undefined));   // false\n' +
          'console.log(!!undefined);          // false\n' +
          'console.log(BigInt(undefined));    // TypeError\n\n' +
          '// null\n' +
          'console.log(Number(null));         // 0 (особенность!)\n' +
          'console.log(+null);                // 0\n' +
          'console.log(String(null));         // "null"\n' +
          'console.log(`${null}`);            // "null"\n' +
          'console.log(Boolean(null));        // false\n' +
          'console.log(!!null);               // false\n' +
          'console.log(BigInt(null));         // TypeError\n\n' +
          '// Сравнение null и undefined\n' +
          'console.log(null == undefined);    // true (равны)\n' +
          'console.log(null === undefined);   // false (строгое сравнение)\n' +
          'console.log(null == 0);            // false (null не равно 0!)\n' +
          'console.log(undefined == 0);       // false\n' +
          'console.log(null > 0);             // false\n' +
          'console.log(null >= 0);            // true (null → 0, поэтому 0 >= 0)\n' +
          'console.log(undefined > 0);        // false (undefined → NaN)\n' +
          'console.log(undefined >= 0);       // false (NaN >= 0 всегда false)',
      },
    ],
  },
};
