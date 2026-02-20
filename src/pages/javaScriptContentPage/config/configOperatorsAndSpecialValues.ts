import { type ITopic } from '@/entities/topic';

export const configOperatorsAndSpecialValues: ITopic = {
  value: 'operators-special-values',
  title: 'Операторы и специальные значения',
  content: {
    introduction:
      'JavaScript предоставляет различные операторы для работы с данными и специальные значения, которые имеют уникальное поведение.',
    sections: [
      {
        title: 'Арифметические операторы',
        content:
          '+ — Сложение\n- — Вычитание\n* — Умножение\n/ — Деление\n% — Остаток от деления\n** — Возведение в степень\n++ — Инкремент\n-- — Декремент',
        addition:
          'Операторы делятся на унарные (работают с одним операндом) и бинарные (работают с двумя операндами). Инкремент и декремент существуют в двух формах:\nПрефиксная форма (++x, --x):\n• Оператор стоит перед переменной\n• Сначала изменяет значение переменной\n• Затем возвращает новое значение\nПостфиксная форма (x++, x--):\n• Оператор стоит после переменной\n• Сначала возвращает текущее значение переменной\nЗатем изменяет значение переменной\n',
        examples:
          '// Бинарный плюс - оператор сложения (+)\nconsole.log(10 + 5); // 15\nconsole.log("Hello" + " " + "Development"); // "Hello Development"\n// Унарный плюс - оператор преобразования в число (+)\nconsole.log(+"42"); // 42 (преобразование строки в число)\nconsole.log(+true); // 1 (преобразование булевого значения в число)\nconsole.log(+false); // 0\n\n// Бинарный минус - оператор вычитания (-)\nconsole.log(10 - 5); // 5\n// Унарный минус - оператор отрицания (-)\nconsole.log(-10); // -10\n\n// Умножение (*)\nconsole.log(10 * 5); // 50\nconsole.log(7.5 * 3.2); // 24.0\n\n// Деление (/)\nconsole.log(10 / 5); // 2\nconsole.log(7 / 2); // 3.5\n\n// Остаток от деления (%)\nconsole.log(10 % 3); // 1\n\n// Возведение в степень (**)\nconsole.log(2 ** 3); // 8\n\n// Инкремент (++)\nlet count = 5;\nconsole.log(count++); // 5 (постфиксная форма: возвращает старое значение)\nconsole.log(count);   // 6 (значение увеличено после возврата)\nconsole.log(++count) // 7 (префиксная форма: сначала увеличивает, потом возвращает)\n\n// Декремент (--)\nlet counter = 10;\nconsole.log(counter--); // 10 (постфиксная форма: возвращает старое значение)\nconsole.log(counter);   // 9 (значение уменьшено после возврата)\nconsole.log(--counter); // 8 (префиксная форма: сначала уменьшает, потом возвращает)',
      },
      {
        title: 'Арифметические операторы присваивания',
        content:
          '= — Простое присваивание\n+= — Сложение с присваиванием\n-= — Вычитание с присваиванием\n*= — Умножение с присваиванием\n/= — Деление с присваиванием\n%= — Остаток от деления с присваиванием\n**= — Возведение в степень с присваиванием',
        addition:
          'Составные арифметические операторы сокращают запись: a += b эквивалентно a = a + b и т.д.',
        examples:
          '// Простое присваивание (=)\nlet a = 10;\nconsole.log(a); // 10\n\n// Сложение с присваиванием (+=)\na += 5; // a = a + 5\nconsole.log(a); // 15\n\n// Вычитание с присваиванием (-=)\na -= 3; // a = a - 3\nconsole.log(a); // 12\n\n// Умножение с присваиванием (*=)\na *= 2; // a = a * 2\nconsole.log(a); // 24\n\n// Деление с присваиванием (/=)\na /= 4; // a = a / 4\nconsole.log(a); // 6\n\n// Остаток от деления с присваиванием (%=)\na %= 4; // a = a % 4\nconsole.log(a); // 2\n\n// Возведение в степень с присваиванием (**=)\na **= 3; // a = a ** 3\nconsole.log(a); // 8',
      },
      {
        title: 'Логические операторы присваивания',
        content:
          '&&= — Логическое присваивание И\n||= — Логическое присваивание ИЛИ\n??= — Нулевое присваивание',
        addition:
          'Оператор ||= принимает два аргумента, первый аргумент конвертируется в логическое значение и если оно является ложным, то первому аргументу присваивается значение второго аргумента.\nОператор &&= принимает два аргумента, первый аргумент конвертируется в логическое значение и если оно является истинным, то первому аргументу присваивается значение второго аргумента.\nОператор ??= присвоит первому аргументу значение второго аргумента только в том случае, если первый аргумент не определен (null/undefined).',
        examples:
          '// Логическое И с присваиванием (&&=)\nlet x = 5;\nx &&= 10; // x = x && 10\nconsole.log(x); // 10\n\nlet y = 0;\ny &&= 10; // y = y && 10\nconsole.log(y); // 0\n\n// Логическое ИЛИ с присваиванием (||=)\nlet w = 5;\nw ||= 10; // w = w || 10\nconsole.log(w); // 5\n\nlet userName = "";\nuserName ||= "Гость"; // "" || "Гость"\nconsole.log(userName); // "Гость"\n\n// Нулевое присваивание (??=)\nlet n = null;\nn ??= 100; // n = null ?? 100\nconsole.log(n); // 100\n\nlet m = 0;\nm ??= 100; // m = 0 ?? 100\nconsole.log(m); // 0',
      },
      {
        title: 'Операторы сравнения',
        content:
          '== — Равенство (с приведением типов)\n=== — Строгое равенство (без приведения типов)\n!= — Неравенство (с приведением типов)\n!== — Строгое неравенство (без приведения типов)\n> — Больше\n< — Меньше\n>= — Больше или равно\n<= — Меньше или равно',
        addition:
          '== выполняет приведение типов перед сравнением, === проверяет тип и значение без приведения.',
        examples:
          'console.log(5 == "5"); // true (приведение типов)\nconsole.log(5 === "5"); // false (разные типы)\nconsole.log(5 != "5"); // false\nconsole.log(5 !== "5"); // true\nconsole.log(10 > 5); // true\nconsole.log(10 < 5); // false\nconsole.log(10 >= 10); // true\nconsole.log(10 <= 9); // false',
      },
      {
        title: 'Логические операторы',
        content:
          '&& — И\n|| — ИЛИ\n! — НЕ\n!! — Двойное НЕ (приведение к boolean)\n?? — Оператор нулевого слияния',
        addition:
          'Оператор && возвращает первый ложный операнд или последний, если все истинные.\nОператор || возвращает первый истинный операнд или последний, если все ложные.\nОператор ?? возвращает первый операнд, если он определен (не null/undefined), иначе второй.\nОператор ! применяется к одному операнду, приводит его к логическому типу, после чего возвращает противоположное значение.\nПриоритет оператора ! является наивысшим из всех логических операторов.\nОператор !! (двойное НЕ) преобразует значение в boolean тип.',
        examples:
          '// И (&&)\nconsole.log(true && false); // false\nconsole.log(5 && 0 && 10); // 0 (первый ложный)\nconsole.log(5 && 10); // 10 (последний истинный)\n\n// ИЛИ (||)\nconsole.log(true || false); // true\nconsole.log(null || 0 || "Hello"); // "Hello" (первый истинный)\nconsole.log(null || undefined || false); // false (последний ложный)\n\n// НЕ (!)\nconsole.log(!true); // false\nconsole.log(!0); // true (0 приводится к false)\nconsole.log(!"text"); // false (непустая строка → true → !true = false)\nconsole.log(!""); // true (пустая строка → false → !false = true)\nconsole.log(!null); // true (null → false → !false = true)\n\n// Двойное НЕ (!!) — приведение к boolean типу\nconsole.log(!!"text"); // true\nconsole.log(!!""); // false\nconsole.log(!!0); // false\nconsole.log(!!1); // true\nconsole.log(!!null); // false\nconsole.log(!!{}); // true (любой объект)\n\n// Оператор нулевого слияния (??)\nconsole.log(undefined ?? "fallback"); // "fallback"\nconsole.log(0 ?? "default"); // 0 (0 — не null/undefined)\nconsole.log("значение" ?? "default"); // "значение"',
      },
      {
        title: 'Побитовые операторы',
        content:
          '& — Побитовое И\n| — Побитовое ИЛИ\n^ — Исключающее ИЛИ\n~ — Побитовое НЕ\n<< — Сдвиг влево\n>> — Сдвиг вправо с сохранением знака\n>>> — Беззнаковый сдвиг вправо',
        addition:
          'Работают с 32-битными целыми числами. Результат всегда число.\n& — Возвращает 1 в каждой битовой позиции, где оба соответствующих бита операндов равны 1\n| — Возвращает 1 в каждой битовой позиции, где хотя бы один из соответствующих битов операндов равен 1\n^ — Возвращает 1 в каждой битовой позиции, где только один из соответствующих битов операндов равен 1\n~ — Инвертирует все биты операнда (меняет 0 на 1 и 1 на 0)\n<< — Сдвигает биты первого операнда влево на количество позиций, указанное во втором операнде\n>> — Сдвигает биты первого операнда вправо с сохранением знака (левый бит заполняется значением знакового бита)\n>>> — Сдвигает биты первого операнда вправо, заполняя левые биты нулями (беззнаковый сдвиг)',
        examples:
          '// Побитовое И (&)\nconsole.log(5 & 1); // 1 (0101 & 0001 = 0001)\n\n// Побитовое ИЛИ (|)\nconsole.log(5 | 1); // 5 (0101 | 0001 = 0101)\n\n// Исключающее ИЛИ (^)\nconsole.log(5 ^ 1); // 4 (0101 ^ 0001 = 0100)\n\n// Побитовое НЕ (~)\nconsole.log(~5); // -6 (инверсия битов)\n\n// Сдвиг влево (<<)\nconsole.log(5 << 1); // 10 (сдвиг влево на 1 бит: 0101 → 1010)\n\n// Сдвиг вправо (>>)\nconsole.log(5 >> 1); // 2 (сдвиг вправо на 1 бит: 0101 → 0010)\n\n// Беззнаковый сдвиг вправо (>>>)\nconsole.log(-5 >>> 1); // 2147483645 (заполняет нулями)',
      },
      {
        title: 'Тернарный оператор',
        content:
          '? : — Единственный оператор с тремя операндами: условие ? значение1 : значение2',
        addition:
          'Возвращает значение1 если условие истинно, иначе значение2. Используется для компактной условной логики вместо if-else в выражениях.',
        examples:
          "const age = 18;\nconst status = age >= 18 ? 'взрослый' : 'ребенок';\nconsole.log(status); // 'взрослый'",
      },
      {
        title: 'Оператор опциональной цепочки',
        content: '?. — безопасно получает свойство или вызывает метод',
        addition:
          'Возвращает undefined если левая часть равна null или undefined, вместо выбрасывания ошибки. Работает с:\n• Свойствами объектов: obj?.prop\n• Вызовами методов: obj.method?.()\n• Элементами массивов: arr?.[index]\n• Динамическими свойствами: obj?.[expression]',
        examples:
          "const user = {\n  name: 'Иван',\n  address: {\n    city: 'Москва'\n  }\n};\n\n// Безопасное получение свойства\nconsole.log(user?.address?.city); // 'Москва'\nconsole.log(user?.contacts?.phone); // undefined (без ошибки)",
      },
      {
        title: 'Оператор typeof',
        content: 'typeof — определяет тип значения',
        addition:
          "Возвращает строку с типом операнда. Возможные значения: 'undefined', 'boolean', 'number', 'string', 'bigint', 'symbol', 'object', 'function'. Для null возвращает 'object' (историческая особенность).",
        examples:
          "console.log(typeof 42); // 'number'\nconsole.log(typeof 'hello'); // 'string'\nconsole.log(typeof true); // 'boolean'\nconsole.log(typeof undefined); // 'undefined'\nconsole.log(typeof null); // 'object' (особенность!)\nconsole.log(typeof {}); // 'object'\nconsole.log(typeof []); // 'object'\nconsole.log(typeof function() {}); // 'function'",
      },
      {
        title: 'Оператор instanceof',
        content: 'instanceof — проверяет принадлежность объекта к классу',
        addition:
          'Проверяет, есть ли в цепочке прототипов объекта прототип конструктора.',
        examples:
          "class Car {}\nconst myCar = new Car();\n\nconsole.log(myCar instanceof Car); // true\nconsole.log([] instanceof Array); // true\nconsole.log([] instanceof Object); // true\nconsole.log('hello' instanceof String); // false (примитив)\nconsole.log(new String('hello') instanceof String); // true",
      },
      {
        title: 'Оператор запятая',
        content:
          ', — выполняет несколько выражений, возвращает значение последнего',
        addition:
          'Используется для выполнения нескольких операций в одном выражении.',
        examples:
          'let a = (1, 2, 3, 4);\nconsole.log(a); // 4 (возвращает последнее значение)\n\nfor (let i = 0, j = 10; i < j; i++, j--) {\n  console.log(i, j); // 0 10, 1 9, 2 8, 3 7, 4 6\n}',
      },
      {
        title: 'Операторы spread и rest',
        content:
          '... — остаточные параметры (rest) и оператор расширения (spread)',
        addition:
          'Остаточные параметры — это оператор, который используется в определении функции для сбора всех неуказанных аргументов в массив и также в деструктуризации для получения неуказанных элементов.\nОператор расширения — это оператор, который используется для извлечения элементов из итерируемого объекта.',
        examples: `// Оператор расширения (spread) - объединение массивов\nconst firstPart = [1, 2, 3];\nconst secondPart = [4, 5, 6];\nconst combined = [...firstPart, ...secondPart];\nconsole.log(combined); // [1, 2, 3, 4, 5, 6]\n\n// Остаточные параметры (rest) - сбор аргументов в функцию\nfunction multiply(multiplier, ...numbers) {\n    return numbers.map(num => num * multiplier);\n}\nconst result = multiply(2, 1, 3, 5, 7);\nconsole.log(result); // [2, 6, 10, 14]`,
      },
      {
        title: 'Оператор void',
        content: 'void — вычисляет выражение и возвращает undefined',
        addition:
          'Используется для выполнения выражений, результат которых не нужен.',
        examples: `const result = void console.log('Сообщение') // 'Сообщение';\nconsole.log(result); // undefined`,
      },
      {
        title: 'Оператор delete',
        content: 'delete — удаляет свойство объекта',
        addition:
          'Удаляет свойство объекта или элемент массива. Возвращает true если удаление успешно, иначе false.',
        examples: `// Удаление пользовательского свойства объекта\nconst user = { name: 'Иван', age: 30 };\nconsole.log(delete user.age); // true\nconsole.log(user); // { name: 'Иван' }\n\n// Удаление элемента массива\nconst numbers = [1, 2, 3, 4, 5];\nconsole.log(delete numbers[2]); // true\nconsole.log(numbers); // [1, 2, null, 4, 5]\nconsole.log(numbers[2]); // undefined`,
      },
      {
        title: 'Оператор in',
        content: 'in — проверяет наличие свойства в объекте',
        addition:
          'Возвращает true, если свойство существует в объекте или его цепочке прототипов.',
        examples: `const car = { brand: 'Toyota', year: 2020 };\nconst hasBrand = 'brand' in car;\nconst hasColor = 'color' in car;\nconsole.log(hasBrand); // true\nconsole.log(hasColor); // false`,
      },
      {
        title: 'Оператор new',
        content: 'new — создает экземпляр объекта',
        addition:
          'Используется для создания экземпляров объектов на основе конструкторов.',
        examples: `function User(name) {\n    this.name = name;\n}\n\nconst admin = new User('Администратор');\nconsole.log(admin.name); // 'Администратор'`,
      },
      {
        title: 'Специальное значение NaN',
        content: 'NaN — Not-a-Number (не число)',
        addition:
          'Специальное значение, которое означает вычислительную ошибку. Возникает при недопустимых математических операциях:\n• Деление 0/0, Infinity/Infinity\n• Умножение Infinity на 0\n• Вычитание Infinity из Infinity\n• Приведение к числу нечисловых строк\n• Math.sqrt(-1) и другие недопустимые операции',
        examples:
          "console.log(0 / 0); // NaN\nconsole.log('hello' * 2); // NaN\nconsole.log(Math.sqrt(-1)); // NaN\nconsole.log(parseInt('abc')); // NaN\n\n// Особенности NaN\nconsole.log(NaN === NaN); // false (единственное значение, не равное себе)\nconsole.log(isNaN(NaN)); // true (проверка через isNaN)\nconsole.log(Number.isNaN(NaN)); // true (строгая проверка)\nconsole.log(NaN + 5); // NaN (любая операция с NaN)\nconsole.log(NaN ** 0); // 1 (исключение из правила)",
      },
      {
        title: 'Специальные значения Infinity и -Infinity',
        content:
          'Infinity — положительная бесконечность\n-Infinity — отрицательная бесконечность',
        addition:
          'Бесконечность, получается при делении на ноль или переполнении числового диапазона. Infinity больше любого числа, -Infinity меньше любого числа.',
        examples:
          'console.log(1 / 0); // Infinity\nconsole.log(-1 / 0); // -Infinity\n\n// Операции с бесконечностью\nconsole.log(Infinity * 2); // Infinity\nconsole.log(Infinity / Infinity); // NaN\nconsole.log(1 / Infinity); // 0',
      },
    ],
  },
};
