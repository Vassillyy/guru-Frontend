import { type ITopic } from '@/entities/topic';

export const configLinkedList: ITopic = {
  value: 'linked-list',
  name: 'Связный список',
  content: {
    introduction:
      'Связный список — это структура данных, состоящая из узлов, где каждый узел содержит данные и ссылку на следующий узел или null если узел последний.',
    sections: [
      {
        title: 'Структура и создание',
        content:
          'Каждый элемент связного списка представляет собой объект с двумя свойствами:\n' +
          '• value — значение элемента\n' +
          '• next — ссылка на следующий элемент списка или null (если это последний элемент)\n\n' +
          'list = { value, next → { value, next → ... }}\n' +
          'Переменная list хранит ссылку на первый элемент. Перемещение по списку происходит последовательным чтением свойства next.',
        addition:
          'В отличие от массивов, связный список не имеет индексов — доступ к элементу осуществляется последовательным проходом от начала.',
        examples:
          '// Способ 1: Вложенная инициализация\n' +
          'let list = {\n' +
          '  value: 1,\n' +
          '  next: {\n' +
          '    value: 2,\n' +
          '    next: {\n' +
          '      value: 3,\n' +
          '      next: {\n' +
          '        value: 4,\n' +
          '        next: null\n' +
          '      }\n' +
          '    }\n' +
          '  }\n' +
          '};\n\n' +
          '// Способ 2: Пошаговое присваивание\n' +
          'let list2 = { value: 1 };\n' +
          'list2.next = { value: 2 };\n' +
          'list2.next.next = { value: 3 };\n' +
          'list2.next.next.next = { value: 4 };\n' +
          'list2.next.next.next.next = null;\n\n' +
          '// Перемещение по списку\n' +
          'console.log(list.value); // 1\n' +
          'console.log(list.next.value); // 2\n' +
          'console.log(list.next.next.value); // 3',
      },
      {
        title: 'Вставка и удаление',
        content:
          'Вставка в начало:\n' +
          'Создаётся новый узел (newNode), его свойство next указывает на текущий список (list).\n' +
          'После этого переменная list переназначается на новый узел, который становится головой списка.\n' +
          'list = { value: newNode, next: list }; // newValue - новый узел, list - старый список\n\n' +
          'Вставка в середину или конец:\n' +
          'Сначала находим узел (currentNode), после которого хотим вставить новый элемент (newNode).\n' +
          'Затем (newNode) своим next ссылается на узел, который раньше был следующим за currentNode.\n' +
          'После этого currentNode.next перенаправляется на newNode.\n' +
          'newNode.next = currentNode.next; // newNode ссылается на следующий узел после currentNode\n' +
          'currentNode.next = newNode;      // currentNode теперь ссылается на newNode\n\n' +
          'Удаление элемента:\n' +
          'Находим узел (previousNode), который стоит непосредственно перед удаляемым узлом.\n' +
          'Меняем ссылку previousNode.next так, чтобы она указывала на узел, который идёт после удаляемого.\n' +
          'Таким образом удаляемый узел исключается из цепочки ссылок и сборщик мусора его удаляет.\n' +
          'previousNode.next = previousNode.next.next; // previousNode.next.next - узел после удаляемого',
        addition:
          'Вставка и удаление не требуют переиндексации остальных элементов — это главное преимущество перед массивами.',
        examples:
          '// Создаём исходный список: 1 → 2 → 3 → null\n' +
          'let list = {\n' +
          '  value: 1,\n' +
          '  next: {\n' +
          '    value: 2,\n' +
          '    next: {\n' +
          '      value: 3,\n' +
          '      next: null\n' +
          '    }\n' +
          '  }\n' +
          '};\n\n' +
          '// Выводим список в консоль\n' +
          'function printList(list) {\n' +
          '  let arr = [];\n' +
          '  let current = list;\n' +
          '  while (current) {\n' +
          '    arr.push(current.value);\n' +
          '    current = current.next;\n' +
          '  }\n' +
          '  console.log(arr.join(" → "));\n' +
          '}\n\n' +
          'console.log("Исходный список:");\n' +
          'printList(list); // 1 → 2 → 3\n\n' +
          '// Вставка в начало\n' +
          'list = { value: "new", next: list };\n' +
          'console.log("После вставки в начало:");\n' +
          'printList(list); // new → 1 → 2 → 3\n\n' +
          '// Вставка в середину (после элемента со значением 1)\n' +
          'let newNode = { value: "inserted", next: list.next.next };\n' +
          'list.next.next = newNode;\n' +
          'console.log("После вставки после 1:");\n' +
          'printList(list); // new → 1 → inserted → 2 → 3\n\n' +
          '// Удаление элемента (удаляем "inserted")\n' +
          'list.next.next = list.next.next.next;\n' +
          'console.log("После удаления inserted:");\n' +
          'printList(list); // new → 1 → 2 → 3',
      },
      {
        title: 'Обход списка',
        content:
          'Обход связного списка можно реализовать двумя способами:\n' +
          '• Итеративный — через цикл while с временной переменной\n' +
          '• Рекурсивный — через вызов функции самой себя\n\n' +
          'Прямой порядок: вывод значений от начала к концу.\n' +
          'Обратный порядок: при рекурсии сначала вызываем функцию до конца, затем выводим значения.',
        addition:
          'Рекурсивный код обхода часто короче и читаемее, но при больших списках может привести к переполнению стека.',
        examples:
          '// Итеративный обход (прямой порядок)\n' +
          'function printListIterative(list) {\n' +
          '  let tmp = list;\n' +
          '  while (tmp) {\n' +
          '    console.log(tmp.value);\n' +
          '    tmp = tmp.next;\n' +
          '  }\n' +
          '}\n\n' +
          '// Рекурсивный обход (прямой порядок)\n' +
          'function printListRecursive(list) {\n' +
          '  console.log(list.value);\n' +
          '  if (list.next) printListRecursive(list.next);\n' +
          '}\n\n' +
          '// Рекурсивный обход (обратный порядок)\n' +
          'function printReverseList(list) {\n' +
          '  if (list.next) printReverseList(list.next);\n' +
          '  console.log(list.value);\n' +
          '}',
      },
      {
        title: 'Плюсы, минусы и улучшения',
        content:
          'Плюсы:\n' +
          '• Быстрая вставка/удаление в любом месте без переиндексации\n' +
          '• Лёгкое разделение и слияние частей списка изменением пары ссылок\n' +
          '• Идеален для очередей/деков, где операции происходят только с концов\n\n' +
          'Минусы:\n' +
          '• Нет доступа по индексу — нужно пройти N шагов от начала (O(n) вместо O(1) у массивов)\n' +
          '• Накладные расходы на память: каждый узел хранит дополнительное свойство next\n' +
          '• Сложнее обратный обход без дополнительных структур или рекурсии\n\n' +
          'Возможные улучшения:\n' +
          '• Двусвязный список — добавить свойство (prev) для ссылки на предыдущий элемент. Позволяет перемещаться по списку в обе стороны и удалять узел зная только его самого.\n' +
          '{ value: значение, prev: предыдущийУзел, next: следующийУзел }\n' +
          '• Хвостовой указатель (tail) — переменная, хранящая ссылку на последний элемент (newNode). Позволяет добавлять элементы в конец за O(1) вместо O(n).\n' +
          'tail.next = newNode;\n' +
          'tail = newNode;',
        addition:
          'Связные списки не заменяют массивы полностью, а дополняют их. Если нужны частые вставки/удаления — список эффективнее; если нужен быстрый доступ по индексу — массив предпочтительнее.',
        examples:
          '// Двусвязный список (свойство prev)\n' +
          'let node1 = { value: 1, prev: null, next: null };\n' +
          'let node2 = { value: 2, prev: null, next: null };\n' +
          'let node3 = { value: 3, prev: null, next: null };\n\n' +
          '// Устанавливаем связи\n' +
          'node1.next = node2;\n' +
          'node2.prev = node1;\n' +
          'node2.next = node3;\n' +
          'node3.prev = node2;\n\n' +
          '// Прямой обход (через next)\n' +
          'let current = node1;\n' +
          'while (current) {\n' +
          '  console.log(current.value); // 1, 2, 3\n' +
          '  current = current.next;\n' +
          '}\n\n' +
          '// Обратный обход (через prev)\n' +
          'current = node3;\n' +
          'while (current) {\n' +
          '  console.log(current.value); // 3, 2, 1\n' +
          '  current = current.prev;\n' +
          '}\n\n' +
          '// Удаление узла (достаточно знать только его)\n' +
          'if (node2.prev) node2.prev.next = node2.next;\n' +
          'if (node2.next) node2.next.prev = node2.prev;\n' +
          'console.log(node1.next.value); // 3 (узел 2 удалён)\n\n' +
          '// Хвостовой указатель (tail) для быстрой вставки в конец\n' +
          'let head = null; // храним первый элемент (для доступа к началу)\n' +
          'let tail = null; // храним последний элемент (для быстрой вставки)\n\n' +
          'function addToEnd(value) {\n' +
          '  let newNode = { value: value, next: null };\n' +
          '  if (!head) {\n' +
          '    // Если список пуст, новый узел становится и головой, и хвостом\n' +
          '    head = newNode;\n' +
          '    tail = newNode;\n' +
          '  } else {\n' +
          '    // Если список не пуст, добавляем в конец\n' +
          '    tail.next = newNode; // старый хвост ссылается на новый узел\n' +
          '    tail = newNode;      // новый узел становится хвостом\n' +
          '  }\n' +
          '}\n\n' +
          'addToEnd(1);\n' +
          'addToEnd(2);\n' +
          'addToEnd(3);\n\n' +
          'console.log(head.value); // 1 — первый элемент\n' +
          'console.log(head.next.value); // 2 — второй элемент\n' +
          'console.log(head.next.next.value); // 3 — третий элемент\n' +
          'console.log(tail.value); // 3 — последний элемент',
      },
    ],
  },
};
