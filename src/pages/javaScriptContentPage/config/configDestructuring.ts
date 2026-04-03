import { type ITopic } from '@/entities/topic';

export const configDestructuring: ITopic = {
  value: 'destructuring',
  name: 'Деструктурирующее присваивание',
  content: {
    introduction:
      'Деструктурирующее присваивание — специальный синтаксис для «распаковки» массивов или объектов в переменные. Исходные данные не изменяются.',
    sections: [
      {
        title: 'Деструктуризация массивов',
        content:
          'Синтаксис: let [firstName, surname] = arr;\n\n' +
          '• Пропуск элементов: let [a, , b] = arr;\n' +
          '• Остаточные параметры: let [a, ...rest] = arr;\n' +
          '• Значения по умолчанию: let [a = "Guest"] = [];\n' +
          '• Обмен переменных: [x, y] = [y, x];\n' +
          '• Работает с любыми итерируемыми объектами.',
        addition:
          'Ошибки не возникает, если значений меньше, чем переменных — недостающие становятся undefined.',
        examples:
          '// Базовый синтаксис\n' +
          'const [first, second] = [1, 2];\n' +
          'console.log(first); // 1\n' +
          'console.log(second); // 2\n\n' +
          '// Пропуск элементов\n' +
          'const [a, , b] = [1, 2, 3];\n' +
          'console.log(a); // 1\n' +
          'console.log(b); // 3\n\n' +
          '// Остаточные параметры\n' +
          'const [head, ...tail] = [1, 2, 3, 4];\n' +
          'console.log(head); // 1\n' +
          'console.log(tail); // [2, 3, 4]\n\n' +
          '// Значения по умолчанию\n' +
          'const [name = "Guest"] = [];\n' +
          'console.log(name); // "Guest"\n\n' +
          '// Обмен переменных\n' +
          'let x = 1, y = 2;\n' +
          '[x, y] = [y, x];\n' +
          'console.log(x, y); // 2, 1\n\n' +
          '// Строка — итерируемый объект\n' +
          'const [c1, c2] = "AB";\n' +
          'console.log(c1, c2); // "A" "B"',
      },
      {
        title: 'Деструктуризация объектов',
        content:
          'Синтаксис: let {title, width} = options;\n\n' +
          '• Порядок свойств не важен\n' +
          '• Переименование: let {width: w} = options;\n' +
          '• Остаток объекта: let {title, ...rest} = options;\n' +
          '• Значения по умолчанию: let {width = 100} = {};\n' +
          '• Для присваивания существующим переменным нужны скобки: ({prop} = obj);',
        addition:
          'Вложенная деструктуризация поддерживает сложные шаблоны для извлечения данных из вложенных структур.',
        examples:
          '// Базовый синтаксис (порядок не важен)\n' +
          'const {title, width} = {width: 100, title: "Menu"};\n' +
          'console.log(title); // "Menu"\n' +
          'console.log(width); // 100\n\n' +
          '// Переименование переменных\n' +
          'const {width: w} = {width: 100};\n' +
          'console.log(w); // 100\n\n' +
          '// Остаточные свойства\n' +
          'const {id, ...rest} = {id: 1, x: 10, y: 20};\n' +
          'console.log(id); // 1\n' +
          'console.log(rest); // {x: 10, y: 20}\n\n' +
          '// Значения по умолчанию\n' +
          'const {visible = true} = {};\n' +
          'console.log(visible); // true\n\n' +
          '// Присваивание существующим переменным\n' +
          'let prop;\n' +
          '({prop} = {prop: "value"});\n' +
          'console.log(prop); // "value"',
      },
    ],
  },
};
