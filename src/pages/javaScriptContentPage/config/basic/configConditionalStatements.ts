import { type ITopic } from '@/entities/topic';

export const configConditionalStatements: ITopic = {
  value: 'conditional-statements',
  name: 'Условные конструкции',
  content: {
    introduction:
      'Условные конструкции позволяют выполнять различные блоки кода в зависимости от условий.',
    sections: [
      {
        title: 'Конструкция if',
        content:
          'Выполняет блок кода, если условие истинно.\n\n' +
          'if (условие) { тело }',
        addition:
          '• Условие приводится к boolean (falsy: false, 0, "", null, undefined, NaN)\n' +
          '• else if — для нескольких условий\n' +
          '• else — выполняется, если условие ложно\n' +
          '• Можно вкладывать друг в друга',
        examples:
          'const age = 18;\n\n' +
          'if (age >= 18) {\n' +
          '  console.log("Доступ разрешён"); // Доступ разрешён\n' +
          '}\n\n' +
          'if (age < 12) {\n' +
          '  console.log("Ребёнок");\n' +
          '} else if (age < 18) {\n' +
          '  console.log("Подросток");\n' +
          '} else {\n' +
          '  console.log("Взрослый"); // Взрослый\n' +
          '}',
      },
      {
        title: 'Конструкция switch',
        content:
          'Выполняет разные блоки кода в зависимости от значения выражения.\n\n' +
          'switch (выражение) {\n' +
          '- case значение1: код1; break;\n' +
          '- case значение2: код2; break;\n' +
          '- default: код;\n' +
          '}',
        addition:
          '• Использует строгое сравнение (===)\n' +
          '• break прерывает выполнение, без него код продолжается в следующий case\n' +
          '• default выполняется, если ни один case не совпал\n' +
          '• Можно группировать несколько case для одного кода',
        examples:
          'const userRole = 2;\n\n' +
          'switch (userRole) {\n' +
          '  case "2":\n' +
          '    console.log("Этот код не выполнится из-за строгого сравнения");\n' +
          '    break;\n\n' +
          '  case 2:\n' +
          '    console.log("Выполнится"); // Выполнится\n' +
          '    break;\n\n' +
          '  case 3:\n' +
          '  case 4:\n' +
          '    console.log("Числа 3 и 4");\n' +
          '    break;\n\n' +
          '  default:\n' +
          '    console.log("Если ни один case не подошел");\n' +
          '}',
      },
    ],
  },
};
