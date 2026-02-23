import { Methods, type IMethod } from '@/entities/method';

export const configArray: Record<Methods.ARRAY, IMethod[]> = {
  [Methods.ARRAY]: [
    {
      name: 'pop()',
      syntax: 'arr.pop()',
      description:
        'Метод объекта Array, удаляет последний элемент из массива и возвращает его.',
      example:
        'const numbers = [10, 20, 30];\nconst last = numbers.pop();\nconsole.log(last); // 30\nconsole.log(numbers); // [10, 20]',
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
          description: 'Элементы для добавления в конец массива',
        },
      ],
      description:
        'Метод объекта Array, добавляет один или несколько элементов в конец массива. Возвращает новую длину массива.',
      example:
        'const numbers = [];\nconst length = numbers.push(1, 2, 3);\nconsole.log(length); // 3\nconsole.log(numbers); // [1, 2, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.push',
      errors: 'TypeError — если this не является массивом.',
    },
    {
      name: 'shift()',
      syntax: 'arr.shift()',
      description:
        'Метод объекта Array, удаляет первый элемент из массива и возвращает его.',
      example:
        "const queue = ['first', 'second', 'third'];\nconst firstItem = queue.shift();\nconsole.log(firstItem); // 'first'\nconsole.log(queue); // ['second', 'third']",
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
          description: 'Элементы для добавления в начало массива',
        },
      ],
      description:
        'Метод объекта Array, добавляет один или несколько элементов в начало массива. Возвращает новую длину массива.',
      example:
        'const numbers = [3, 4];\nconst newLength = numbers.unshift(1, 2);\nconsole.log(newLength); // 4\nconsole.log(numbers); // [1, 2, 3, 4]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.unshift',
      errors: 'TypeError — если this не является массивом.',
    },
    {
      name: 'toString()',
      syntax: 'arr.toString()',
      description:
        'Метод объекта Array, возвращает строковое представление массива в виде списка элементов, разделённых запятыми.',
      example:
        "const data = ['apple', 'banana', 'orange'];\nconst str = data.toString();\nconsole.log(str); // 'apple,banana,orange'",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tostring',
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
        'Метод объекта Array, выполняет поиск элемента в массиве. Возвращает индекс первого совпадения или -1, если элемент не найден.',
      example:
        "const users = ['alice', 'bob', 'charlie', 'bob'];\nconst index = users.indexOf('bob');\nconsole.log(index); // 1\n\nconst secondIndex = users.indexOf('bob', 2);\nconsole.log(secondIndex); // 3",
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
          description: 'Индекс начала поиска в обратном направлении',
        },
      ],
      description:
        'Метод объекта Array, выполняет поиск элемента в массиве с конца. Возвращает индекс последнего совпадения или -1, если элемент не найден.',
      example:
        "const logEntries = ['error', 'info', 'warning', 'info', 'error'];\nconst lastInfoIndex = logEntries.lastIndexOf('info');\nconsole.log(lastInfoIndex); // 3\n\nconst lastErrorIndex = logEntries.lastIndexOf('error', 3);\nconsole.log(lastErrorIndex); // 0",
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
        'Метод объекта Array, возвращает элемент массива по указанному индексу. Если индекс выходит за границы массива, возвращает undefined.',
      example:
        "const colors = ['red', 'green', 'blue', 'yellow'];\nconst lastColor = colors.at(-1);\nconsole.log(lastColor); // 'yellow'\n\nconst secondColor = colors.at(1);\nconsole.log(secondColor); // 'green'",
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
          description: 'Необязательный индекс начала поиска',
        },
      ],
      description:
        'Метод объекта Array, проверяет, содержит ли массив указанный элемент, используя алгоритм SameValueZero (правильно обрабатывает NaN). Возвращает true если содержит, иначе false.',
      example:
        "const permissions = ['read', 'write', 'execute'];\nconst hasWrite = permissions.includes('write');\nconsole.log(hasWrite); // true\n\nconst hasDelete = permissions.includes('delete');\nconsole.log(hasDelete); // false",
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
        '• С двумя аргументами: элементы от индекса, указанного в первом аргументе, до индекса, указанного во втором аргументе;\n' +
        '• С одним аргументом: элементы от индекса, указанного аргументе, до конца массива;\n' +
        '• Без аргументов: поверхностную копию всего массива.',
      example:
        'const numbers = [10, 20, 30, 40, 50];\nconst middle = numbers.slice(1, 4);\nconsole.log(middle); // [20, 30, 40]\n\nconst lastTwo = numbers.slice(-2);\nconsole.log(lastTwo); // [40, 50]',
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
        'Метод объекта Array, изменяет массив начиная с индекса, указанного в первом аргументе, удаляет количество элементов, указанных во втором аргументе и затем вставляет элементы, указанные начиная с третьего аргумента на их место. Возвращает массив удалённых элементов.',
      example:
        "const items = ['apple', 'banana', 'cherry', 'date'];\nconst removed = items.splice(1, 2, 'blueberry', 'coconut');\nconsole.log(removed); // ['banana', 'cherry']\nconsole.log(items); // ['apple', 'blueberry', 'coconut', 'date']",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.splice',
      errors: 'TypeError — если this не является массивом.',
    },
    {
      name: 'toSpliced()',
      syntax: 'arr.toSpliced(start[, deleteCount[, ...items]])',
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
        'Метод объекта Array, возвращает новый массив на основе исходного, в котором начиная с индекса, указанного в первом аргументе: удаляет количество элементов, указанных во втором аргументе и затем вставляет элементы, указанные начиная с третьего аргумента на их место.',
      example:
        "const original = ['jan', 'feb', 'mar', 'apr'];\nconst newArray = original.toSpliced(2, 1, 'march');\nconsole.log(newArray); // ['jan', 'feb', 'march', 'apr']\nconsole.log(original); // ['jan', 'feb', 'mar', 'apr']",
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
          description:
            'Элементы или массивы для объединения с исходным массивом',
        },
      ],
      description:
        'Метод объекта Array, возвращает новый массив, состоящий из элементов исходного массива и аргументов.',
      example:
        "const firstHalf = ['a', 'b'];\nconst secondHalf = ['c', 'd'];\nconst combined = firstHalf.concat(secondHalf, 'e');\nconsole.log(combined); // ['a', 'b', 'c', 'd', 'e']",
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
          description: 'Функция, вызываемая для каждого элемента массива',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, вызывает переданную функцию для каждого элемента массива. Функция может принимать до 3 аргументов: элемент, его индекс и массив по которому производится итерация. Возвращает undefined.',
      example:
        'const scores = [85, 92, 78];\nscores.forEach((score, index) => {\n  console.log(`Student ${index + 1}: ${score}`);\n});\n// Student 1: 85\n// Student 2: 92\n// Student 3: 78',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.foreach',
      errors:
        'TypeError — если this не является массивом, множеством (set) или коллекцией (map), или если аргумент (fn) не является функцией.',
    },
    {
      name: 'find()',
      syntax: 'arr.find(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description: 'Функция, проверяющая каждый элемент массива',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, ищет первый элемент, удовлетворяющий условию, заданному в переданной функции. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация. Возвращает элемент или undefined если элемент не найден.',
      example:
        "const users = [\n  { id: 1, name: 'Alice' },\n  { id: 2, name: 'Bob' },\n  { id: 3, name: 'Charlie' }\n];\nconst user = users.find(u => u.id === 2);\nconsole.log(user); // { id: 2, name: 'Bob' }",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find',
      errors:
        'TypeError — если this не является массивом, или если аргумент (fn) не является функцией.',
    },
    {
      name: 'findLast()',
      syntax: 'arr.findLast(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description: 'Функция, проверяющая каждый элемент массива',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, ищет последний элемент, удовлетворяющий условию, заданному в переданной функции. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация. Возвращает элемент или undefined если элемент не найден.',
      example:
        "const logs = [\n  { level: 'info', message: 'Started' },\n  { level: 'error', message: 'Failed' },\n  { level: 'info', message: 'Completed' }\n];\nconst lastError = logs.findLast(log => log.level === 'error');\nconsole.log(lastError); // { level: 'error', message: 'Failed' }",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.findlast',
      errors:
        'TypeError — если this не является массивом, или если аргумент (fn) не является функцией.',
    },
    {
      name: 'findIndex()',
      syntax: 'arr.findIndex(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description: 'Функция, проверяющая каждый элемент массива',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, ищет индекс первого элемента, удовлетворяющего условию, заданному в переданной функции. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация. Возвращает индекс или -1 если элемент не найден.',
      example:
        'const temperatures = [22, 18, 25, 19, 30];\nconst hotDayIndex = temperatures.findIndex(temp => temp > 25);\nconsole.log(hotDayIndex); // 4',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.findindex',
      errors:
        'TypeError — если this не является массивом, или если аргумент (fn) не является функцией.',
    },
    {
      name: 'findLastIndex()',
      syntax: 'arr.findLastIndex(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description: 'Функция, проверяющая каждый элемент массива',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, ищет индекс последнего элемента, удовлетворяющего условию, заданному в переданной функции. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация. Возвращает индекс или -1 если элемент не найден.',
      example:
        'const sums = [100, -50, 200, -30, 150];\nconst lastIndex = sums.findLastIndex(amount => amount < 0);\nconsole.log(lastIndex); // 3',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.findlastindex',
      errors:
        'TypeError — если this не является массивом, или если аргумент (fn) не является функцией.',
    },
    {
      name: 'filter()',
      syntax: 'arr.filter(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description: 'Функция, проверяющая каждый элемент массива',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, возвращает новый массив с элементами, прошедшими проверку, заданную в переданной функции. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация.',
      example:
        'const numbers = [1, 2, 3, 4, 5, 6];\nconst evenNumbers = numbers.filter(n => n % 2 === 0);\nconsole.log(evenNumbers); // [2, 4, 6]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.filter',
      errors:
        'TypeError — если this не является массивом, или если аргумент (fn) не является функцией.',
    },
    {
      name: 'map()',
      syntax: 'arr.map(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description: 'Функция, преобразующая каждый элемент массива',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, возвращает новый массив,  где каждый элемент получен как результат вызова функции для каждого элемента исходного массива. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация.',
      example:
        'const prices = [100, 200, 300];\nconst discounted = prices.map(price => price * 0.9);\nconsole.log(discounted); // [90, 180, 270]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.map',
      errors:
        'TypeError — если this не является массивом, или если аргумент (fn) не является функцией.',
    },
    {
      name: 'sort()',
      syntax: 'arr.sort([compareFn])',
      parameters: [
        {
          name: 'compareFn',
          description:
            'Функция сравнения для определения порядка сортировки:\n • должна принимать два аргумента: a и b;\n • возвращать отрицательное число, если a < b;\n • возвращать положительное число, если a > b;\n • возвращать 0, если a = b.\nЕсли функция не передана, элементы сортируются по строковому представлению.',
        },
      ],
      description: 'Метод объекта Array, сортирует элементы массива на месте.',
      example:
        "const names = ['Charlie', 'Alice', 'Bob'];\nnames.sort();\nconsole.log(names); // ['Alice', 'Bob', 'Charlie']\n\nconst scores = [85, 92, 78];\nscores.sort((a, b) => b - a);\nconsole.log(scores); // [92, 85, 78]",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.sort',
      errors:
        'TypeError — если this не является массивом, или если аргумент (compareFn) не является функцией.',
    },
    {
      name: 'toSorted()',
      syntax: 'arr.toSorted([compareFn])',
      parameters: [
        {
          name: 'compareFn',
          description:
            'Функция сравнения для определения порядка сортировки:\n • должна принимать два аргумента: a и b;\n • возвращать отрицательное число, если a < b;\n • возвращать положительное число, если a > b;\n • возвращать 0, если a = b.\nЕсли функция не передана, элементы сортируются по строковому представлению.',
        },
      ],
      description:
        'Метод объекта Array, возвращает новый массив с отсортированными элементами исходного массива.',
      example:
        'const numbers = [3, 1, 4, 2];\nconst sorted = numbers.toSorted((a, b) => a - b);\nconsole.log(sorted); // [1, 2, 3, 4]\nconsole.log(numbers); // [3, 1, 4, 2]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tosorted',
      errors:
        'TypeError — если this не является массивом, или если аргумент (compareFn) не является функцией.',
    },
    {
      name: 'reverse()',
      syntax: 'arr.reverse()',
      description:
        'Метод объекта Array, изменяет порядок элементов массива на обратный.',
      example:
        "const letters = ['a', 'b', 'c'];\nletters.reverse();\nconsole.log(letters); // ['c', 'b', 'a']",
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
        'Метод объекта Array, возвращает строку, состоящую из элементов массива, разделённых указанным разделителем.',
      example:
        "const path = ['usr', 'local', 'bin'];\nconst fullPath = path.join('/');\nconsole.log(fullPath); // 'usr/local/bin'",
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
          description: 'Функция, вызываемая для каждого элемента массива',
        },
        {
          name: 'initialValue',
          description: 'Начальное значение аккумулятора',
        },
      ],
      description:
        'Метод объекта Array, применяет переданную функцию к аккумулятору и каждому элементу массива (слева направо), сводя массив к одному значению. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация.',
      example:
        'const cart = [\n  { price: 10, quantity: 2 },\n  { price: 25, quantity: 1 },\n  { price: 5, quantity: 3 }\n];\nconst total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);\nconsole.log(total); // 60',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reduce',
      errors:
        'TypeError — если this не является массивом или если аргумент (fn) не является функцией, или если массив пуст и не указано начальное значение.',
    },
    {
      name: 'reduceRight()',
      syntax: 'arr.reduceRight(callbackFn[, initialValue])',
      parameters: [
        {
          name: 'callbackFn',
          description: 'Функция, вызываемая для каждого элемента массива',
        },
        {
          name: 'initialValue',
          description: 'Начальное значение аккумулятора',
        },
      ],
      description:
        'Метод объекта Array, применяет переданную функцию к аккумулятору и каждому элементу массива (справа налево), сводя массив к одному значению. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация.',
      example:
        'const nums = [2, 3, 4];\nconst rightToLeftSum = nums.reduceRight((sum, num) => sum + num);\nconsole.log(rightToLeftSum); // 9',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reduceright',
      errors:
        'TypeError — если this не является массивом или если аргумент (fn) не является функцией, или если массив пуст и не указано начальное значение.',
    },
    {
      name: 'fill()',
      syntax: 'arr.fill(value[, start[, end]])',
      parameters: [
        {
          name: 'value',
          description: 'Значение для заполнения массива',
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
        'Метод объекта Array, заполняет массив повторяющимися значениями из первого аргумента:\n' +
        '• С тремя аргументами: заполняет элементы от индекса, указанного во втором аргументе, до индекса, указанного в третьем аргументе;\n' +
        '• С двумя аргументами: заполняет элементы от индекса, указанного во втором аргументе, до конца массива;\n' +
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
        'Метод объекта Array, копирует последовательность элементов внутри массива в другое место этого же массива:\n' +
        '• С тремя аргументами: копирует элементы от индекса, указанного во втором аргументе, до индекса, указанного в третьем аргументе, и вставляет на позицию, указанную в первом аргументе;\n' +
        '• С двумя аргументами: копирует элементы от индекса, указанного во втором аргументе, до конца массива и вставляет на позицию, указанную в первом аргументе;\n' +
        '• С одним аргументом: копирует элементы от начала массива до конца и вставляет на позицию, указанную в первом аргументе.\n' +
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
        'Метод объекта Array, возвращает новый массив, в котором все подмассивы рекурсивно подняты на указанную глубину.',
      example:
        'const nested = [1, [2, [3, [4]]]];\nconst flattened = nested.flat(2);\nconsole.log(flattened); // [1, 2, 3, [4]]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.flat',
      errors:
        'TypeError — если this не является массивом или если аргумент (depth) не является числом.',
    },
    {
      name: 'some()',
      syntax: 'arr.some(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description: 'Функция, проверяющая каждый элемент массива',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, проверяет, удовлетворяет ли хотя бы один элемент условию, заданному в переданной функции. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация. Возвращает true если удолетворяет, иначе false.',
      example:
        'const numbers = [1, 2, 3, 5];\nconst hasEven = numbers.some(n => n % 2 === 0);\nconsole.log(hasEven); // true',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.some',
      errors:
        'TypeError — если this не является массивом, или если аргумент (fn) не является функцией.',
    },
    {
      name: 'every()',
      syntax: 'arr.every(callbackFn[, thisArg])',
      parameters: [
        {
          name: 'callbackFn',
          description: 'Функция, проверяющая каждый элемент массива',
        },
        {
          name: 'thisArg',
          description: 'Значение, используемое как this при вызове callbackFn',
        },
      ],
      description:
        'Метод объекта Array, проверяет, удовлетворяют ли все элементы условию, заданному в переданной функции. Эта функция может принимать до 3 аргументов: элемент, его индекс, массив по которому производится итерация. Возвращает true если удолетворяет, иначе false.',
      example:
        'const ages = [18, 22, 25, 30];\nconst allAdult = ages.every(age => age >= 18);\nconsole.log(allAdult); // true',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.every',
      errors:
        'TypeError — если this не является массивом, или если аргумент (fn) не является функцией.',
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
        'Метод объекта Array, возвращает новый массив с изменённым элементом по указанному индексу.',
      example:
        "const original = ['a', 'b', 'c'];\nconst updated = original.with(1, 'B');\nconsole.log(updated); // ['a', 'B', 'c']\nconsole.log(original); // ['a', 'b', 'c']",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.with',
      errors:
        'TypeError — если this не является массивом.\nRangeError — если аргумент (index) выходит за границы массива.',
    },
    {
      name: 'keys()',
      syntax: 'arr.keys()',
      description:
        'Метод объекта Array, возвращает новый итератор, содержащий ключи (индексы) массива.',
      example:
        "const colors = ['red', 'green', 'blue'];\nconst indices = [...colors.keys()];\nconsole.log(indices); // [0, 1, 2]",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.keys',
      errors:
        'TypeError — если this не является массивом, коллекцией (map) или множеством (set).',
    },
    {
      name: 'values()',
      syntax: 'arr.values()',
      description:
        'Метод объекта Array, возвращает новый итератор, содержащий значения массива.',
      example:
        "const items = ['apple', 'banana', 'orange'];\nconst itemValues = [...items.values()];\nconsole.log(itemValues); // ['apple', 'banana', 'orange']",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.values',
      errors:
        'TypeError — если this не является массивом, коллекцией (map) или множеством (set).',
    },
    {
      name: 'entries()',
      syntax: 'arr.entries()',
      description:
        'Метод объекта Array, возвращает новый итератор, содержащий пары ([ключ, значение]) для каждого элемента массива.',
      example:
        "const fruits = ['apple', 'banana', 'orange'];\nconst fruitEntries = [...fruits.entries()];\nconsole.log(fruitEntries); // [[0, 'apple'], [1, 'banana'], [2, 'orange']]",
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.entries',
      errors:
        'TypeError — если this не является массивом, коллекцией (map) или множеством (set).',
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
        'Статический метод объекта Array, определяет, является ли переданное значение массивом. Возвращает true если является, иначе false.',
      example:
        'const arr = [1, 2, 3];\nconst isArr = Array.isArray(arr);\nconsole.log(isArr); // true\nconsole.log(Array.isArray({})); // false',
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
        'Статический метод объекта Array, создаёт новый массив из итерируемого объекта или псевдомассива.',
      example:
        'const set = new Set([1, 2, 3]);\nconst arrFromSet = Array.from(set);\nconsole.log(arrFromSet); // [1, 2, 3]',
      specification:
        'https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.from',
    },
  ],
};
