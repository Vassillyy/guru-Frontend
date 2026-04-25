import { Methods, type IMethod } from '@/entities/method';

export const configArray: Record<Methods.ARRAY, IMethod[]> = {
  [Methods.ARRAY]: [
    {
      name: 'pop()',
      syntax: 'arr.pop()',
      description:
        'Метод объекта Array, удаляет последний элемент из исходного массива и возвращает его.',
      example:
        'const numbers = [10, 20, 30];\n' +
        'const last = numbers.pop();\n' +
        'console.log(last); // 30\n' +
        'console.log(numbers); // [10, 20]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.pop',
      errors: 'TypeError — если this не является массивом.',
    },
    {
      name: 'push()',
      syntax: 'arr.push(...items)',
      parameters: [
        {
          name: '...items',
          description: 'Элементы для добавления',
        },
      ],
      description:
        'Метод объекта Array, добавляет ...items в конец исходного массива. Возвращает новую длину массива.',
      example:
        'const numbers = [];\n' +
        'const length = numbers.push(1, 2, 3);\n' +
        'console.log(length); // 3\n' +
        'console.log(numbers); // [1, 2, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.push',
      errors: 'TypeError — если this не является массивом.',
    },
    {
      name: 'shift()',
      syntax: 'arr.shift()',
      description:
        'Метод объекта Array, удаляет первый элемент из исходного массива и возвращает его.',
      example:
        "const queue = ['first', 'second', 'third'];\n" +
        'const firstItem = queue.shift();\n' +
        "console.log(firstItem); // 'first'\n" +
        "console.log(queue); // ['second', 'third']",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.shift',
      errors: 'TypeError — если this не является массивом.',
    },
    {
      name: 'unshift()',
      syntax: 'arr.unshift(...items)',
      parameters: [
        {
          name: '...items',
          description: 'Элементы для добавления',
        },
      ],
      description:
        'Метод объекта Array, добавляет ...items в начало исходного массива. Возвращает новую длину массива.',
      example:
        'const numbers = [3, 4];\n' +
        'const newLength = numbers.unshift(1, 2);\n' +
        'console.log(newLength); // 4\n' +
        'console.log(numbers); // [1, 2, 3, 4]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.unshift',
      errors: 'TypeError — если this не является массивом.',
    },
    {
      name: 'toString()',
      syntax: 'arr.toString()',
      description:
        'Метод объекта Array, возвращает строковое представление исходного массива в виде списка элементов, разделённых запятыми.',
      example:
        "const data = ['apple', 'banana', 'orange'];\n" +
        'const str = data.toString();\n' +
        "console.log(str); // 'apple,banana,orange'",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tostring',
      errors: 'TypeError — если this является null или undefined.',
    },
    {
      name: 'toLocaleString()',
      syntax: 'arr.toLocaleString([locales[, options]])',
      parameters: [
        {
          name: 'locales',
          description:
            'Строка с языковой меткой (например, "ru-RU") или массив таких строк.',
        },
        {
          name: 'options',
          description: 'Объект с настройками форматирования.',
        },
      ],
      description:
        'Метод объекта Array, возвращает локализованное строковое представление исходного массива. Для каждого элемента вызывается его собственный метод toLocaleString(), после чего результаты объединяются через запятую.',
      example:
        'const prices = [1234.56, 7890.12];\n' +
        'const ruPrices = prices.toLocaleString("ru-RU", {\n' +
        '  style: "currency",\n' +
        '  currency: "RUB"\n' +
        '});\n' +
        "console.log(ruPrices); // '1 234,56 ₽,7 890,12 ₽'\n\n" +
        'const dates = [new Date(2024, 0, 1), new Date(2024, 11, 31)];\n' +
        'const ruDates = dates.toLocaleString("ru-RU", {\n' +
        ' dateStyle: "short"\n' +
        '});\n' +
        "console.log(ruDates); // '01.01.2024, 31.12.2024'",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tolocalestring',
      errors: 'TypeError — если this является null или undefined.',
    },
    {
      name: 'indexOf()',
      syntax: 'arr.indexOf(searchElement[, fromIndex])',
      parameters: [
        {
          name: 'searchElement',
          description: 'Элемент для поиска в массиве',
        },
        {
          name: 'fromIndex',
          description: 'Индекс начала поиска',
        },
      ],
      description:
        'Метод объекта Array, выполняет поиск searchElement в исходном массиве, начиная с fromIndex. Возвращает индекс первого совпадения или -1, если элемент не найден.',
      example:
        "const users = ['alice', 'bob', 'charlie', 'bob'];\n" +
        "const index = users.indexOf('bob');\n" +
        'console.log(index); // 1\n\n' +
        "const secondIndex = users.indexOf('bob', 2);\n" +
        'console.log(secondIndex); // 3',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.indexof',
      errors: 'TypeError — если this не является массивом или строкой.',
    },
    {
      name: 'lastIndexOf()',
      syntax: 'arr.lastIndexOf(searchElement[, fromIndex])',
      parameters: [
        {
          name: 'searchElement',
          description: 'Элемент для поиска в массиве',
        },
        {
          name: 'fromIndex',
          description:
            'Индекс начала поиска (по умолчанию равен длине массива)',
        },
      ],
      description:
        'Метод объекта Array, выполняет поиск searchElement в исходном массиве с конца, начиная с fromIndex. Возвращает индекс последнего совпадения или -1, если элемент не найден.',
      example:
        "const logEntries = ['error', 'info', 'warning', 'info', 'error'];\n" +
        "const lastInfoIndex = logEntries.lastIndexOf('info');\n" +
        'console.log(lastInfoIndex); // 3\n\n' +
        "const lastErrorIndex = logEntries.lastIndexOf('error', 3);\n" +
        'console.log(lastErrorIndex); // 0',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.lastindexof',
      errors: 'TypeError — если this не является массивом или строкой.',
    },
    {
      name: 'at()',
      syntax: 'arr.at(index)',
      parameters: [
        {
          name: 'index',
          description:
            'Индекс элемента (может быть отрицательным для отсчёта с конца)',
        },
      ],
      description:
        'Метод объекта Array, возвращает элемент исходного массива по index. Если index выходит за границы массива, возвращает undefined.',
      example:
        "const colors = ['red', 'green', 'blue', 'yellow'];\n" +
        'const lastColor = colors.at(-1);\n' +
        "console.log(lastColor); // 'yellow'\n\n" +
        'const secondColor = colors.at(1);\n' +
        "console.log(secondColor); // 'green'",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.at',
      errors: 'TypeError — если this не является массивом или строкой.',
    },
    {
      name: 'includes()',
      syntax: 'arr.includes(searchElement[, fromIndex])',
      parameters: [
        {
          name: 'searchElement',
          description: 'Элемент для поиска в массиве',
        },
        {
          name: 'fromIndex',
          description: 'Индекс начала поиска',
        },
      ],
      description:
        'Метод объекта Array, проверяет, содержит ли исходный массив searchElement, начиная с fromIndex. Возвращает true если содержит, иначе false.\n' +
        'Использует алгоритм SameValueZero (правильно обрабатывает NaN)',
      example:
        "const permissions = ['read', 'write', 'execute'];\n" +
        "const hasWrite = permissions.includes('write');\n" +
        'console.log(hasWrite); // true\n\n' +
        "const hasDelete = permissions.includes('delete');\n" +
        'console.log(hasDelete); // false',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.includes',
      errors: 'TypeError — если this не является массивом или строкой.',
    },
    {
      name: 'slice()',
      syntax: 'arr.slice([start[, end]])',
      parameters: [
        {
          name: 'start',
          description: 'Индекс начала подмассива (может быть отрицательным)',
        },
        {
          name: 'end',
          description:
            'Индекс конца подмассива (не включая, может быть отрицательным)',
        },
      ],
      description:
        'Метод объекта Array, возвращает новый массив, содержащий элементы исходного массива:\n' +
        '• С двумя аргументами: элементы от start до end;\n' +
        '• С одним аргументом: элементы от start до конца массива;\n' +
        '• Без аргументов: поверхностную копию исходного массива.',
      example:
        'const numbers = [10, 20, 30, 40, 50];\n' +
        'const middle = numbers.slice(1, 4);\n' +
        'console.log(middle); // [20, 30, 40]\n\n' +
        'const lastTwo = numbers.slice(-2);\n' +
        'console.log(lastTwo); // [40, 50]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.slice',
      errors: 'TypeError — если this не является массивом или строкой.',
    },
    {
      name: 'splice()',
      syntax: 'arr.splice(start[, deleteCount[, ...items]])',
      parameters: [
        {
          name: 'start',
          description: 'Индекс, с которого начинается изменение массива',
        },
        {
          name: 'deleteCount',
          description: 'Количество удаляемых элементов',
        },
        {
          name: '...items',
          description: 'Элементы для вставки на место удалённых',
        },
      ],
      description:
        'Метод объекта Array, изменяет исходный массив начиная с start, удаляет deleteCount и затем вставляет ...items на их место. Возвращает массив удалённых элементов.\n' +
        '• Если deleteCount не указан — удаляются все элементы от start до конца массива\n' +
        '• Если start отрицательный — отсчёт с конца (-1 — последний элемент)\n' +
        '• Если start больше длины массива — ничего не удаляется, ...items добавляются в конец\n' +
        '• Если deleteCount = 0 — элементы не удаляются, только вставляются',
      example:
        "const items = ['apple', 'banana', 'cherry', 'date'];\n" +
        "const removed = items.splice(1, 2, 'blueberry', 'coconut');\n" +
        "console.log(removed); // ['banana', 'cherry']\n" +
        "console.log(items); // ['apple', 'blueberry', 'coconut', 'date']\n\n" +
        "const arr1 = ['a', 'b', 'c', 'd'];\n" +
        'const removed1 = arr1.splice(1);\n' +
        "console.log(removed1); // ['b', 'c', 'd']\n" +
        "console.log(arr1); // ['a']\n\n" +
        "const arr2 = ['a', 'b', 'c'];\n" +
        "arr2.splice(1, 0, 'x', 'y');\n" +
        "console.log(arr2); // ['a', 'x', 'y', 'b', 'c']\n\n" +
        "const arr3 = ['a', 'b', 'c', 'd', 'e'];\n" +
        'const removed3 = arr3.splice(-2, 1);\n' +
        "console.log(removed3); // ['d']\n" +
        "console.log(arr3); // ['a', 'b', 'c', 'e']\n\n" +
        "const arr4 = ['a', 'b'];\n" +
        "arr4.splice(10, 0, 'x');\n" +
        "console.log(arr4); // ['a', 'b', 'x']",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.splice',
      errors: 'TypeError — если this не является массивом.',
    },
    {
      name: 'toSpliced()',
      syntax: 'arr.toSpliced([start[, deleteCount[, ...items]]])',
      parameters: [
        {
          name: 'start',
          description: 'Индекс, с которого начинается изменение массива',
        },
        {
          name: 'deleteCount',
          description: 'Количество удаляемых элементов',
        },
        {
          name: '...items',
          description: 'Элементы для вставки на место удалённых',
        },
      ],
      description:
        'Метод объекта Array, возвращает новый массив на основе исходного, в котором начиная start, удаляет deleteCount и затем вставляет ...items на их место.\n' +
        '• Не изменяет исходный массив (в отличие от splice())\n' +
        '• Если deleteCount не указан — удаляются все элементы от start до конца массива\n' +
        '• Если start отрицательный — отсчёт с конца (-1 — последний элемент)\n' +
        '• Если start больше длины массива — ничего не удаляется, ...items добавляются в конец\n' +
        '• Если deleteCount = 0 — элементы не удаляются, только вставляются\n' +
        '• Если start и deleteCount не указаны — возвращает поверхностную копию массива (эквивалентно slice())',
      example:
        "const original = ['jan', 'feb', 'mar', 'apr'];\n" +
        "const newArray = original.toSpliced(2, 1, 'march');\n" +
        "console.log(newArray); // ['jan', 'feb', 'march', 'apr']\n" +
        "console.log(original); // ['jan', 'feb', 'mar', 'apr'] (не изменился)\n\n" +
        "const arr1 = ['a', 'b', 'c', 'd'];\n" +
        'const removed1 = arr1.toSpliced(1);\n' +
        "console.log(removed1); // ['a']\n\n" +
        "const arr2 = ['a', 'b', 'c'];\n" +
        "const result2 = arr2.toSpliced(1, 0, 'x', 'y');\n" +
        "console.log(result2); // ['a', 'x', 'y', 'b', 'c']\n\n" +
        "const arr3 = ['a', 'b', 'c', 'd', 'e'];\n" +
        'const result3 = arr3.toSpliced(-2, 1);\n' +
        "console.log(result3); // ['a', 'b', 'c', 'e']\n\n" +
        "const arr4 = ['a', 'b'];\n" +
        "const result4 = arr4.toSpliced(10, 0, 'x');\n" +
        "console.log(result4); // ['a', 'b', 'x']\n\n" +
        'const original2 = [1, 2, 3];\n' +
        'const copy = original2.toSpliced();\n' +
        'console.log(copy === original2); // false (разные массивы)\n' +
        'console.log(copy); // [1, 2, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tospliced',
      errors: 'TypeError — если this не является массивом.',
    },
    {
      name: 'concat()',
      syntax: 'arr.concat(...items)',
      parameters: [
        {
          name: '...items',
          description: 'Элементы или массивы для объединения',
        },
      ],
      description:
        'Метод объекта Array, возвращает новый массив, состоящий из элементов исходного массива и ...items.',
      example:
        "const firstHalf = ['a', 'b'];\n" +
        "const secondHalf = ['c', 'd'];\n" +
        "const combined = firstHalf.concat(secondHalf, 'e');\n" +
        "console.log(combined); // ['a', 'b', 'c', 'd', 'e']",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.concat',
      errors: 'TypeError — если this не является массивом или строкой.',
    },
    {
      name: 'forEach()',
      syntax: 'arr.forEach(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description:
            'Функция, вызываемая для каждого элемента массива, может принимать до 3 аргументов:\n' +
            '• element (текущий элемент)\n' +
            '• index (индекс элемента)\n' +
            '• array (массив, по которому выполняется итерация)',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, вызывает callbackFn для каждого элемента исходного массива. Возвращает undefined.',
      example:
        'const scores = [85, 92, 78];\n' +
        'scores.forEach((score, index) => {\n' +
        '  console.log(`Student ${index + 1}: ${score}`);\n' +
        '});\n' +
        '// Student 1: 85\n' +
        '// Student 2: 92\n' +
        '// Student 3: 78',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.foreach',
      errors:
        'TypeError — если this не является массивом, множеством (set) или коллекцией (map), или fn не является функцией',
    },
    {
      name: 'find()',
      syntax: 'arr.find(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description:
            'Функция, проверяющая каждый элемент массива, может принимать до 3 аргументов:\n' +
            '• element (текущий элемент)\n' +
            '• index (индекс элемента)\n' +
            '• array (массив, по которому выполняется итерация)',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, ищет первый элемент в исходном массиве, удовлетворяющий условию, заданному в callbackFn. Возвращает элемент или undefined если элемент не найден.',
      example:
        'const users = [\n' +
        "  { id: 1, name: 'Alice' },\n" +
        "  { id: 2, name: 'Bob' },\n" +
        "  { id: 3, name: 'Charlie' }\n" +
        '];\n' +
        'const user = users.find(u => u.id === 2);\n' +
        "console.log(user); // { id: 2, name: 'Bob' }",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find',
      errors:
        'TypeError — если this не является массивом или fn не является функцией.',
    },
    {
      name: 'findLast()',
      syntax: 'arr.findLast(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description:
            'Функция, проверяющая каждый элемент массива, может принимать до 3 аргументов:\n' +
            '• element (текущий элемент)\n' +
            '• index (индекс элемента)\n' +
            '• array (массив, по которому выполняется итерация)',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, ищет элемент в исходном массиве, удовлетворяющий условию, заданному в callbackFn с конца массива. Возвращает элемент или undefined если элемент не найден.',
      example:
        'const logs = [\n' +
        "  { level: 'info', message: 'Started' },\n" +
        "  { level: 'error', message: 'Failed' },\n" +
        "  { level: 'info', message: 'Completed' }\n" +
        '];\n' +
        "const lastError = logs.findLast(log => log.level === 'error');\n" +
        "console.log(lastError); // { level: 'error', message: 'Failed' }",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.findlast',
      errors:
        'TypeError — если this не является массивом или fn не является функцией.',
    },
    {
      name: 'findIndex()',
      syntax: 'arr.findIndex(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description:
            'Функция, проверяющая каждый элемент массива, может принимать до 3 аргументов:\n' +
            '• element (текущий элемент)\n' +
            '• index (индекс элемента)\n' +
            '• array (массив, по которому выполняется итерация)',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, ищет индекс первого элемента в исходном массиве, удовлетворяющего условию, заданному в callbackFn. Возвращает индекс или -1 если элемент не найден.',
      example:
        'const temperatures = [22, 18, 25, 19, 30];\n' +
        'const hotDayIndex = temperatures.findIndex(temp => temp > 25);\n' +
        'console.log(hotDayIndex); // 4',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.findindex',
      errors:
        'TypeError — если this не является массивом или fn не является функцией.',
    },
    {
      name: 'findLastIndex()',
      syntax: 'arr.findLastIndex(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description:
            'Функция, проверяющая каждый элемент массива, может принимать до 3 аргументов:\n' +
            '• element (текущий элемент)\n' +
            '• index (индекс элемента)\n' +
            '• array (массив, по которому выполняется итерация)',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, ищет индекс последнего элемента в исходном массиве, удовлетворяющего условию, заданному в callbackFn. Возвращает индекс или -1 если элемент не найден.',
      example:
        'const sums = [100, -50, 200, -30, 150];\n' +
        'const lastIndex = sums.findLastIndex(amount => amount < 0);\n' +
        'console.log(lastIndex); // 3',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.findlastindex',
      errors:
        'TypeError — если this не является массивом или fn не является функцией.',
    },
    {
      name: 'filter()',
      syntax: 'arr.filter(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description:
            'Функция, проверяющая каждый элемент массива, может принимать до 3 аргументов:\n' +
            '• element (текущий элемент)\n' +
            '• index (индекс элемента)\n' +
            '• array (массив, по которому выполняется итерация)',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, возвращает новый массив с элементами исходного массива, прошедшими проверку, заданную в callbackFn.',
      example:
        'const numbers = [1, 2, 3, 4, 5, 6];\n' +
        'const evenNumbers = numbers.filter(n => n % 2 === 0);\n' +
        'console.log(evenNumbers); // [2, 4, 6]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.filter',
      errors:
        'TypeError — если this не является массивом или fn не является функцией.',
    },
    {
      name: 'map()',
      syntax: 'arr.map(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description:
            'Функция, преобразующая каждый элемент массива, может принимать до 3 аргументов:\n' +
            '• element (текущий элемент)\n' +
            '• index (индекс элемента)\n' +
            '• array (массив, по которому выполняется итерация)',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, возвращает новый массив, где каждый элемент получен как результат вызова callbackFn для каждого элемента исходного массива.',
      example:
        'const prices = [100, 200, 300];\n' +
        'const discounted = prices.map(price => price * 0.9);\n' +
        'console.log(discounted); // [90, 180, 270]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.map',
      errors:
        'TypeError — если this не является массивом или fn не является функцией.',
    },
    {
      name: 'sort()',
      syntax: 'arr.sort([compareFn])',
      parameters: [
        {
          name: 'compareFn',
          description:
            'Функция сравнения для определения порядка сортировки:\n' +
            '• должна принимать два аргумента: a и b;\n' +
            '• возвращать отрицательное число, если a < b;\n' +
            '• возвращать положительное число, если a > b;\n' +
            '• возвращать 0, если a = b.\n' +
            'Если функция не передана, элементы сортируются по строковому представлению.',
        },
      ],
      description: 'Метод объекта Array, сортирует элементы исходного массива.',
      example:
        "const names = ['Charlie', 'Alice', 'Bob'];\n" +
        'names.sort();\n' +
        "console.log(names); // ['Alice', 'Bob', 'Charlie']\n\n" +
        'const scores = [85, 92, 78];\n' +
        'scores.sort((a, b) => b - a);\n' +
        'console.log(scores); // [92, 85, 78]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.sort',
      errors:
        'TypeError — если this не является массивом или compareFn не является функцией.',
    },
    {
      name: 'toSorted()',
      syntax: 'arr.toSorted([compareFn])',
      parameters: [
        {
          name: 'compareFn',
          description:
            'Функция сравнения для определения порядка сортировки:\n' +
            ' • должна принимать два аргумента: a и b;\n' +
            ' • возвращать отрицательное число, если a < b;\n' +
            ' • возвращать положительное число, если a > b;\n' +
            ' • возвращать 0, если a = b.\n' +
            'Если функция не передана, элементы сортируются по строковому представлению.',
        },
      ],
      description:
        'Метод объекта Array, возвращает новый массив с отсортированными элементами исходного массива.',
      example:
        'const numbers = [3, 1, 4, 2];\n' +
        'const sorted = numbers.toSorted((a, b) => a - b);\n' +
        'console.log(sorted); // [1, 2, 3, 4]\n' +
        'console.log(numbers); // [3, 1, 4, 2]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tosorted',
      errors:
        'TypeError — если this не является массивом или compareFn не является функцией.',
    },
    {
      name: 'reverse()',
      syntax: 'arr.reverse()',
      description:
        'Метод объекта Array, изменяет порядок элементов исходного массива на обратный.',
      example:
        "const letters = ['a', 'b', 'c'];\n" +
        'letters.reverse();\n' +
        "console.log(letters); // ['c', 'b', 'a']",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reverse',
      errors: 'TypeError — если this не является массивом.',
    },
    {
      name: 'toReversed()',
      syntax: 'arr.toReversed()',
      description:
        'Метод объекта Array, возвращает новый массив с элементами исходного массива в обратном порядке.',
      example:
        "const items = ['first', 'second', 'third'];\nconst reversed = items.toReversed();\nconsole.log(reversed); // ['third', 'second', 'first']\nconsole.log(items); // ['first', 'second', 'third']",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.toreversed',
      errors: 'TypeError — если this не является массивом.',
    },
    {
      name: 'join()',
      syntax: 'arr.join([separator])',
      parameters: [
        {
          name: 'separator',
          description: "Строка-разделитель (по умолчанию ',')",
        },
      ],
      description:
        'Метод объекта Array, возвращает строку, состоящую из элементов массива, разделённых (separator).',
      example:
        "const path = ['usr', 'local', 'bin'];\n" +
        "const fullPath = path.join('/');\n" +
        "console.log(fullPath); // 'usr/local/bin'",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.join',
      errors: 'TypeError — если this не является массивом.',
    },
    {
      name: 'reduce()',
      syntax: 'arr.reduce(callbackFn[, initialValue])',
      parameters: [
        {
          name: 'callbackFn',
          description:
            'Функция, вызываемая для каждого элемента массива, может принимать до 4 аргументов:\n' +
            '• accumulator (аккумулятор) — значение, накопленное на предыдущем шаге\n' +
            '• element (текущий элемент)\n' +
            '• index (индекс элемента)\n' +
            '• array (массив, по которому выполняется итерация)',
        },
        {
          name: 'initialValue',
          description:
            'Начальное значение аккумулятора (по умолчанию первый элемент исходного массива)',
        },
      ],
      description:
        'Метод объекта Array, применяет callbackFn к accumulator и каждому элементу массива (слева направо), сводя массив к одному значению.',
      example:
        'const cart = [\n' +
        '  { price: 10, quantity: 2 },\n' +
        '  { price: 25, quantity: 1 },\n' +
        '  { price: 5, quantity: 3 }\n' +
        '];\n' +
        'const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);\n' +
        'console.log(total); // 60',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reduce',
      errors:
        'TypeError — если this не является массивом или fn не является функцией, или массив пуст и не указано начальное значение.',
    },
    {
      name: 'reduceRight()',
      syntax: 'arr.reduceRight(callbackFn[, initialValue])',
      parameters: [
        {
          name: 'callbackFn',
          description:
            'Функция, вызываемая для каждого элемента массива, может принимать до 4 аргументов:\n' +
            '• accumulator (аккумулятор) — значение, накопленное на предыдущем шаге\n' +
            '• element (текущий элемент)\n' +
            '• index (индекс элемента)\n' +
            '• array (массив, по которому выполняется итерация)',
        },
        {
          name: 'initialValue',
          description: 'Начальное значение аккумулятора',
        },
      ],
      description:
        'Метод объекта Array, применяет callbackFn к accumulator и каждому элементу массива (справа налево), сводя массив к одному значению.',
      example:
        'const nums = [2, 3, 4];\n' +
        'const rightToLeftSum = nums.reduceRight((sum, num) => sum + num);\n' +
        'console.log(rightToLeftSum); // 9',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reduceright',
      errors:
        'TypeError — если this не является массивом или fn не является функцией, или если массив пуст и не указано начальное значение.',
    },
    {
      name: 'fill()',
      syntax: 'arr.fill(value[, start[, end]])',
      parameters: [
        {
          name: 'value',
          description: 'Значение для заполнения',
        },
        {
          name: 'start',
          description: 'Индекс начала заполнения',
        },
        {
          name: 'end',
          description: 'Индекс конца заполнения (не включая)',
        },
      ],
      description:
        'Метод объекта Array, заполняет исходный массив повторяющимися значениями value:\n' +
        '• С тремя аргументами: заполняет элементы от start до end;\n' +
        '• С двумя аргументами: заполняет элементы от start до конца массива;\n' +
        '• С одним аргументом: заполняет все элементы массива целиком.\n' +
        'Возвращает изменённый массив.',
      example:
        'const arr1 = new Array(5);\n' +
        'arr1.fill("x");\n' +
        'console.log(arr1); // ["x", "x", "x", "x", "x"]\n\n' +
        'const arr2 = [1, 2, 3, 4, 5];\n' +
        'arr2.fill(0, 2);\n' +
        'console.log(arr2); // [1, 2, 0, 0, 0]\n\n' +
        'const arr3 = [1, 2, 3, 4, 5];\n' +
        'arr3.fill(9, 1, 3);\n' +
        'console.log(arr3); // [1, 9, 9, 4, 5]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.fill',
      errors: 'TypeError — если this не является массивом.',
    },
    {
      name: 'copyWithin()',
      syntax: 'arr.copyWithin(target[, start[, end]])',
      parameters: [
        {
          name: 'target',
          description: 'Индекс, в который копируются элементы',
        },
        {
          name: 'start',
          description: 'Индекс начала копирования',
        },
        {
          name: 'end',
          description: 'Индекс конца копирования (не включая)',
        },
      ],
      description:
        'Метод объекта Array, копирует последовательность элементов внутри исходного массива в другое место этого же массива:\n' +
        '• С тремя аргументами: копирует элементы от start до end и вставляет на позицию target;\n' +
        '• С двумя аргументами: копирует элементы от start до конца массива и вставляет на позицию target;\n' +
        '• С одним аргументом: копирует элементы от начала массива до конца и вставляет на позицию target.\n' +
        'Возвращает изменённый массив.',
      example:
        'const arr1 = [1, 2, 3, 4, 5];\n' +
        'arr1.copyWithin(3);\n' +
        'console.log(arr1); // [1, 2, 3, 1, 2]\n\n' +
        'const arr2 = [1, 2, 3, 4, 5];\n' +
        'arr2.copyWithin(0, 3);\n' +
        'console.log(arr2); // [4, 5, 3, 4, 5]\n\n' +
        'const arr3 = [1, 2, 3, 4, 5];\n' +
        'arr3.copyWithin(1, 2, 4);\n' +
        'console.log(arr3); // [1, 3, 4, 4, 5]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.copywithin',
      errors: 'TypeError — если this не является массивом.',
    },
    {
      name: 'flat()',
      syntax: 'arr.flat([depth])',
      parameters: [
        {
          name: 'depth',
          description: 'Глубина выравнивания (по умолчанию 1)',
        },
      ],
      description:
        'Метод объекта Array, возвращает новый массив, в котором все подмассивы исходного массива рекурсивно подняты на depth.',
      example:
        'const nested = [1, [2, [3, [4]]]];\n' +
        'const flattened = nested.flat(2);\n' +
        'console.log(flattened); // [1, 2, 3, [4]]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.flat',
      errors:
        'TypeError — если this не является массивом или depth не является числом.',
    },
    {
      name: 'flatMap()',
      syntax: 'arr.flatMap(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description:
            'Функция, преобразующая каждый элемент массива, может принимать до 3 аргументов:\n' +
            '• element (текущий элемент)\n' +
            '• index (индекс элемента)\n' +
            '• array (массив, по которому выполняется итерация)\n' +
            'Должна возвращать массив или значение, которое будет выровнено на глубину 1.',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, сначала применяет callbackFn к каждому элементу исходного массива, а затем выравнивает результат на глубину 1. Эквивалентен map(callbackFn).flat(1).',
      example:
        'const orders = [\n' +
        '  { items: ["apple", "banana"] },\n' +
        '  { items: ["orange"] },\n' +
        '];\n' +
        'const allItems = orders.flatMap(order => order.items);\n' +
        'console.log(allItems); // ["apple", "banana", "orange"]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.flatmap',
      errors:
        'TypeError — если this не является массивом или callbackFn не является функцией.',
    },
    {
      name: 'some()',
      syntax: 'arr.some(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description:
            'Функция, проверяющая каждый элемент массива, может принимать до 3 аргументов:\n' +
            '• element (текущий элемент)\n' +
            '• index (индекс элемента)\n' +
            '• array (массив, по которому выполняется итерация)',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, проверяет, удовлетворяет ли хотя бы один элемент условию, заданному в callbackFn. Возвращает true если удовлетворяет, иначе false.\n' +
        'При вызове на пустом массиве возвращает false.',
      example:
        'const numbers = [1, 2, 3, 5];\n' +
        'const hasEven = numbers.some(n => n % 2 === 0);\n' +
        'console.log(hasEven); // true',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.some',
      errors:
        'TypeError — если this не является массивом или fn не является функцией.',
    },
    {
      name: 'every()',
      syntax: 'arr.every(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description:
            'Функция, проверяющая каждый элемент массива, может принимать до 3 аргументов:\n' +
            '• element (текущий элемент)\n' +
            '• index (индекс элемента)\n' +
            '• array (массив, по которому выполняется итерация)',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, проверяет, удовлетворяют ли все элементы условию, заданному в callbackFn. Возвращает true если удовлетворяет, иначе false.\n' +
        'При вызове на пустом массиве возвращает true.',
      example:
        'const ages = [18, 22, 25, 30];\n' +
        'const allAdult = ages.every(age => age >= 18);\n' +
        'console.log(allAdult); // true',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.every',
      errors:
        'TypeError — если this не является массивом или fn не является функцией.',
    },
    {
      name: 'with()',
      syntax: 'arr.with(index, value)',
      parameters: [
        {
          name: 'index',
          description: 'Индекс изменяемого элемента',
        },
        {
          name: 'value',
          description: 'Новое значение элемента',
        },
      ],
      description:
        'Метод объекта Array, возвращает новый массив на основе исходного массива с изменённым элементом на value по index.',
      example:
        "const original = ['a', 'b', 'c'];\n" +
        "const updated = original.with(1, 'B');\n" +
        "console.log(updated); // ['a', 'B', 'c']\n" +
        "console.log(original); // ['a', 'b', 'c']",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.with',
      errors:
        'TypeError — если this не является массивом.\n' +
        'RangeError — если index выходит за границы массива.',
    },
    {
      name: 'keys()',
      syntax: 'arr.keys()',
      description:
        'Метод объекта Array, возвращает итератор, содержащий ключи (индексы) исходного массива.',
      example:
        "const colors = ['red', 'green', 'blue'];\n" +
        'const indices = [...colors.keys()];\n' +
        'console.log(indices); // [0, 1, 2]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.keys',
      errors:
        'TypeError — если this не является массивом, коллекцией (map) или множеством (set).',
    },
    {
      name: 'values()',
      syntax: 'arr.values()',
      description:
        'Метод объекта Array, возвращает итератор, содержащий значения исходного массива.',
      example:
        "const items = ['apple', 'banana', 'orange'];\n" +
        'const itemValues = [...items.values()];\n' +
        "console.log(itemValues); // ['apple', 'banana', 'orange']",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.values',
      errors:
        'TypeError — если this не является массивом, коллекцией (map) или множеством (set).',
    },
    {
      name: 'entries()',
      syntax: 'arr.entries()',
      description:
        'Метод объекта Array, возвращает итератор, содержащий пары ([ключ, значение]) для каждого элемента исходного массива.',
      example:
        "const fruits = ['apple', 'banana', 'orange'];\n" +
        'const fruitEntries = [...fruits.entries()];\n' +
        "console.log(fruitEntries); // [[0, 'apple'], [1, 'banana'], [2, 'orange']]",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.entries',
      errors:
        'TypeError — если this не является массивом, коллекцией (map), или множеством (set).',
    },
    {
      name: 'Array.isArray()',
      syntax: 'Array.isArray(value)',
      parameters: [
        {
          name: 'value',
          description: 'Значение для проверки',
        },
      ],
      description:
        'Статический метод объекта Array, определяет, является ли value массивом. Возвращает true если является, иначе false.',
      example:
        'const arr = [1, 2, 3];\n' +
        'const isArr = Array.isArray(arr);\n' +
        'console.log(isArr); // true\nconsole.log(Array.isArray({})); // false',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.isarray',
    },
    {
      name: 'Array.from()',
      syntax: 'Array.from(arrayLike[, mapFn[, thisArg]])',
      parameters: [
        {
          name: 'arrayLike',
          description: 'Итерируемый объект или псевдомассив',
        },
        {
          name: 'mapFn',
          description: 'Функция преобразования для каждого элемента',
        },
        {
          name: 'thisArg',
          description: 'Значение this для mapFn',
        },
      ],
      description:
        'Статический метод объекта Array, создаёт новый массив из arrayLike.',
      example:
        'const set = new Set([1, 2, 3]);\n' +
        'const arrFromSet = Array.from(set);\n' +
        'console.log(arrFromSet); // [1, 2, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.from',
    },
    {
      name: 'Array.of()',
      syntax: 'Array.of(...items)',
      parameters: [
        {
          name: '...items',
          description: 'Элементы для включения в новый массив',
        },
      ],
      description:
        'Статический метод объекта Array, создаёт новый массив из ...items. Отличается от конструктора Array() тем, что при одном числовом аргументе создаёт массив с этим значением, а не массив указанной длины.',
      example:
        'const arr1 = Array.of(7);\n' +
        'console.log(arr1); // [7]\n' +
        'console.log(arr1.length); // 1\n\n' +
        'const arr2 = Array(7);\n' +
        'console.log(arr2); // [,,,,,,] (пустой массив длины 7)\n' +
        'console.log(arr2.length); // 7\n\n' +
        'const arr3 = Array.of(1, 2, 3);\n' +
        'console.log(arr3); // [1, 2, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.of',
    },
    {
      name: 'Array.fromAsync()',
      syntax: 'Array.fromAsync(asyncItems[, mapFn[, thisArg]])',
      parameters: [
        {
          name: 'asyncItems',
          description:
            'Асинхронно итерируемый объект (с Symbol.asyncIterator), синхронно итерируемый объект (с Symbol.iterator) или псевдомассив',
        },
        {
          name: 'mapFn',
          description:
            'Функция преобразования для каждого элемента (выполняется асинхронно)',
        },
        {
          name: 'thisArg',
          description: 'Значение this для mapFn',
        },
      ],
      description:
        'Статический метод объекта Array, создаёт новый массив из asyncItems. Возвращает Promise, который разрешается с новым массивом.',
      example:
        'const asyncIterable = {\n' +
        '  async *[Symbol.asyncIterator]() {\n' +
        '    yield 1;\n' +
        '    yield 2;\n' +
        '    yield 3;\n' +
        '  }\n' +
        '};\n' +
        'Array.fromAsync(asyncIterable).then(arr => {\n' +
        '  console.log(arr); // [1, 2, 3]\n' +
        '});\n\n' +
        'Array.fromAsync([1, 2, 3], async x => x * 2).then(arr => {\n' +
        '  console.log(arr); // [2, 4, 6]\n' +
        '});',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.fromasync',
      errors:
        'TypeError — если asyncItems не является итерируемым или mapFn передан, но не является функцией.',
    },
  ],
};
