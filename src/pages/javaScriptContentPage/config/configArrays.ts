import { type ITopic } from '@/entities/topic';

export const configArrays: ITopic = {
  value: 'arrays',
  name: 'Итерируемые объекты',
  content: {
    introduction:
      'Итерируемые объекты — это объекты, которые можно использовать в цикле for..of. Массивы, строки и многие другие коллекции являются итерируемыми.',
    sections: [
      {
        title: 'Протокол итерации',
        content:
          'Чтобы сделать объект итерируемым, нужно добавить в него метод с именем Symbol.iterator.\n' +
          'Как работает for..of:\n' +
          '1. Вызывает Symbol.iterator один раз (или выдаёт ошибку, если метод не найден)\n' +
          '2. Метод должен вернуть итератор — объект с методом next\n' +
          '3. for..of работает только с этим возвращённым объектом\n' +
          '4. Для получения следующего значения вызывается next()\n' +
          '5. Результат next() должен иметь вид {done: Boolean, value: any}\n' +
          'Где done=true означает завершение цикла, а value содержит очередное значение.\n\n' +
          'Итерируемые объекты — это объекты, которые реализуют метод Symbol.iterator.',
        addition:
          'Строки также являются итерируемыми объектами и корректно обрабатывают суррогатные пары.',
        examples:
          '// Строка — итерируемый объект\n' +
          'for (let letter of "JS") {\n' +
          '  console.log(letter); // "J", "S"\n' +
          '}\n\n' +
          '// Кастомный итерируемый объект\n' +
          'const weekDays = {\n' +
          '  days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],\n' +
          '  [Symbol.iterator]() {\n' +
          '    let index = 0;\n' +
          '    const days = this.days;\n' +
          '    return {\n' +
          '      next() {\n' +
          '        if (index < days.length) {\n' +
          '          return { done: false, value: days[index++] };\n' +
          '        } else {\n' +
          '          return { done: true };\n' +
          '        }\n' +
          '      }\n' +
          '    };\n' +
          '  }\n' +
          '};\n\n' +
          'for (let day of weekDays) {\n' +
          '  console.log(day); // "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"\n' +
          '}',
      },
      {
        title: 'Псевдомассивы',
        content:
          'Псевдомассивы — это объекты, которые имеют только числовые ключи (0, 1, 2, ...) и свойство length.\n' +
          'Пример псевдомассива: объект arguments внутри функции.',
        addition:
          'Псевдомассив не обязательно является итерируемым, и наоборот. Для использования for..of с псевдомассивом нужно добавить Symbol.iterator или преобразовать через Array.from().',
        examples:
          '// Псевдомассив (список покупок)\n' +
          'const shoppingList = {\n' +
          '  0: "Молоко",\n' +
          '  1: "Хлеб",\n' +
          '  length: 2\n' +
          '};\n' +
          'console.log(shoppingList[0]); // "Молоко"\n' +
          'console.log(shoppingList.length); // 2\n\n' +
          '// arguments — псевдомассив\n' +
          'function sumPrices() {\n' +
          '  let total = 0;\n' +
          '  for (let i = 0; i < arguments.length; i++) {\n' +
          '    total += arguments[i];\n' +
          '  }\n' +
          '  return total;\n' +
          '}\n' +
          'console.log(sumPrices(100, 250, 75)); // 425',
      },
      {
        title: 'Создание массивов',
        content:
          'Массив – это особый тип объекта, предназначенный для работы с упорядоченным набором элементов.\n' +
          'Существует несколько способов создания массивов:\n' +
          '1. Литерал массива (рекомендуется): []\n' +
          '2. Конструктор: new Array()',
        addition:
          'Важная особенность: new Array(number) создаёт пустой (разряженный) массив заданной длины.\n' +
          'Элементы такого массива имеют значение undefined, но они не существуют физически — это "дыры" в массиве.',
        examples:
          '// Литерал массива\n' +
          'const arr1 = [];\n' +
          'const arr2 = [1, 2, 3];\n' +
          'const arr3 = ["яблоко", "апельсин", "груша"];\n\n' +
          '// Конструктор Array\n' +
          'const arr4 = new Array();\n' +
          'console.log(arr4); // []\n\n' +
          'const arr5 = new Array(5);\n' +
          'console.log(arr5); // [empty × 5] (пустой массив длины 5)\n\n' +
          'const arr6 = new Array(1, 2, 3);\n' +
          'console.log(arr6); // [1, 2, 3]\n\n' +
          '// Разница!\n' +
          'console.log(new Array(3)); // [empty × 3]\n' +
          'console.log([3]); // [3]\n\n' +
          '// Проверка на пустые элементы\n' +
          'const empty = new Array(3);\n' +
          'console.log(empty[0]); // undefined\n' +
          'console.log(0 in empty); // false (элемента нет)',
      },
      {
        title: 'Свойство length',
        content:
          'length — специальное свойство, которое возвращает длину массива (больший числовой индекс + 1). Оно обновляется автоматически при добавлении/удалении элементов.',
        addition: 'Уменьшение length обрезает массив безвозвратно.',
        examples:
          'const fruits = ["Яблоко", "Апельсин", "Груша"];\n' +
          'console.log(fruits.length); // 3\n\n' +
          '// Добавление элемента\n' +
          'fruits[3] = "Лимон";\n' +
          'console.log(fruits.length); // 4\n\n' +
          '// Уменьшение length обрезает массив\n' +
          'fruits.length = 2;\n' +
          'console.log(fruits); // ["Яблоко", "Апельсин"]\n' +
          'console.log(fruits[2]); // undefined',
      },
      {
        title: 'Методы массива: стек и очередь',
        content:
          'Массив в JavaScript может работать как структура данных:\n' +
          '• Стек (LIFO — Last In First Out): push/pop\n' +
          '• Очередь (FIFO — First In First Out): unshift/shift\n\n' +
          'Операции с конца массива (push/pop) работают быстро, а с начала (unshift/shift) — медленнее из-за перенумерации элементов.',
        addition:
          'Все 4 метода изменяют исходный массив и возвращают новое значение.',
        examples:
          '// Стек: push/pop (работаем с концом)\n' +
          'const stack = [];\n' +
          'stack.push(1); // [1]\n' +
          'stack.push(2); // [1, 2]\n' +
          'stack.push(3); // [1, 2, 3]\n' +
          'console.log(stack.pop()); // 3, stack = [1, 2]\n' +
          'console.log(stack.pop()); // 2, stack = [1]\n\n' +
          '// Очередь: unshift/shift (работаем с началом)\n' +
          'const queue = [];\n' +
          'queue.unshift(1); // [1]\n' +
          'queue.unshift(2); // [2, 1]\n' +
          'queue.unshift(3); // [3, 2, 1]\n' +
          'console.log(queue.shift()); // 3, queue = [2, 1]\n' +
          'console.log(queue.shift()); // 2, queue = [1]\n\n' +
          '// push/unshift принимают несколько аргументов\n' +
          'const arr = [1];\n' +
          'arr.push(2, 3); // [1, 2, 3]\n' +
          'arr.unshift(0, -1); // [-1, 0, 1, 2, 3]',
      },
      {
        title: 'Производительность и оптимизация',
        content:
          'Движки JavaScript оптимизируют хранение массивов в непрерывной области памяти.\n' +
          'Чтобы сохранить оптимизацию, следует избегать:\n' +
          '• Добавления нечисловых свойств (arr.test = 5)\n' +
          '• Создания «дыр» (arr[0] = 1; arr[1000] = 2)\n' +
          '• Заполнения в обратном порядке',
        addition:
          'Нарушение этих правил может замедлить работу массива в разы.',
        examples:
          '// Хорошо — непрерывный массив\n' +
          'const good = [1, 2, 3, 4, 5];\n\n' +
          '// Плохо — нечисловое свойство\n' +
          'const bad1 = [1, 2, 3];\n' +
          'bad1.test = 5;\n\n' +
          '// Плохо — «дыры» в массиве\n' +
          'const bad2 = [];\n' +
          'bad2[0] = 1;\n' +
          'bad2[1000] = 2;\n\n' +
          '// Плохо — заполнение в обратном порядке\n' +
          'const bad3 = [];\n' +
          'bad3[100] = 1;\n' +
          'bad3[99] = 2;\n' +
          '// ... и так до 0',
      },
      {
        title: 'Сравнение и преобразование массивов',
        content:
          'Массивы — это объекты, поэтому сравниваются по ссылке, а не по содержимому.\n' +
          'При преобразовании в строку элементы соединяются запятыми.\n' +
          'При преобразовании в число массив сначала превращается в строку, а затем в число.',
        addition:
          'Для сравнения содержимого нужно сравнивать элементы попарно.',
        examples:
          '// Сравнение по ссылке\n' +
          'console.log([] == []); // false\n' +
          'console.log([1, 2] == [1, 2]); // false\n' +
          'const a = [1, 2];\n' +
          'const b = a;\n' +
          'console.log(a == b); // true (одна ссылка)\n\n' +
          '// Преобразование в строку\n' +
          'console.log(String([1, 2, 3])); // "1,2,3"\n' +
          'console.log([1, 2, 3].toString()); // "1,2,3"\n\n' +
          '// Преобразование в число\n' +
          'console.log(Number([1])); // 1\n' +
          'console.log(+[1]); // 1\n' +
          'console.log(Number([1, 2])); // NaN (строка "1,2" не является числом)\n' +
          'console.log(Number([])); // 0 (пустая строка -> 0)\n' +
          'console.log(Number([""])); // 0\n' +
          'console.log(Number(["10"])); // 10\n\n' +
          '// Правильное сравнение содержимого\n' +
          'function arraysEqual(a, b) {\n' +
          '  if (a.length !== b.length) return false;\n' +
          '  for (let i = 0; i < a.length; i++) {\n' +
          '    if (a[i] !== b[i]) return false;\n' +
          '  }\n' +
          '  return true;\n' +
          '}\n' +
          'console.log(arraysEqual([1, 2], [1, 2])); // true',
      },
    ],
  },
};
