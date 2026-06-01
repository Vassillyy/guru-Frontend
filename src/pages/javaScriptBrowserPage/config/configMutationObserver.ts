import { type ITopic } from '@/entities/topic';

export const configMutationObserver: ITopic = {
  value: 'mutation-observer',
  name: 'MutationObserver: наблюдатель за изменениями',
  content: {
    introduction:
      'MutationObserver — это встроенный объект, наблюдающий за DOM-элементом и запускающий колбэк при изменениях. Позволяет реагировать на любые изменения в DOM-поддереве: появление/удаление узлов, изменение атрибутов и текстового содержимого.',
    sections: [
      {
        title: 'MutationObserver',
        content:
          'Создание наблюдателя: new MutationObserver(callback). После создания его нужно прикрепить к DOM-узлу вызовом observer.observe(node, config).\n' +
          'Колбэк получает два параметра:\n' +
          '1. mutations — массив объектов MutationRecord (записи об изменениях)\n' +
          '2. observer — сам наблюдатель (экземпляр MutationObserver)\n' +
          'Параметры config (булевы):\n' +
          '• childList — изменения в непосредственных детях node\n' +
          '• subtree — во всех потомках node\n' +
          '• attributes — в атрибутах node\n' +
          '• attributeFilter — массив имён атрибутов для наблюдения только за выбранными\n' +
          '• characterData — наблюдать за node.data (текстовое содержимое)\n' +
          '• characterDataOldValue — передавать и старое, и новое значение node.data\n' +
          '• attributeOldValue — передавать и старое, и новое значение атрибута',
        addition:
          'Колбэк выполняется после изменений в DOM. Объекты MutationRecord содержат детали каждого изменения (type, target, addedNodes, removedNodes, attributeName, oldValue и т.д.)',
        examples:
          '<div id="target">Текст</div>\n' +
          '<button id="changeBtn">Изменить текст</button>\n\n' +
          '<script>\n' +
          '  const target = document.getElementById("target");\n\n' +
          '  // Создаём наблюдатель\n' +
          '  const observer = new MutationObserver((mutations) => {\n' +
          '    mutations.forEach(record => {\n' +
          '      console.log(record.type); // "childList"\n' +
          '    });\n' +
          '  });\n\n' +
          '  // Настраиваем наблюдение за добавлением/удалением дочерних узлов\n' +
          '  observer.observe(target, {\n' +
          '    childList: true, // следим за добавлением/удалением дочерних узлов\n' +
          '    subtree: true, // следим за всеми потомками\n' +
          '    characterData: true // следим за изменением текстовых узлов\n' +
          '  });\n\n' +
          '  // При клике меняем текст — сработает childList (замена текстового узла)\n' +
          '  document.getElementById("changeBtn").onclick = () => {\n' +
          '    target.innerText = "Новый текст " + Date.now();\n' +
          '  };\n' +
          '</script>',
      },
      {
        title: 'MutationRecord',
        content:
          'Объекты MutationRecord имеют следующие свойства:\n' +
          '• type — тип изменения: "attributes", "characterData" или "childList"\n' +
          '• target — где произошло изменение: элемент для "attributes", текстовый узел для "characterData", элемент для "childList"\n' +
          '• addedNodes / removedNodes — добавленные / удалённые узлы\n' +
          '• previousSibling / nextSibling — соседние узлы для добавленных / удалённых\n' +
          '• attributeName / attributeNamespace — имя / пространство имён изменённого атрибута\n' +
          '• oldValue — предыдущее значение (только для атрибутов или текста, если включены соответствующие опции)',
        addition:
          'При удалении элемента браузер может соединить соседние текстовые узлы в один — поэтому количество записей может отличаться от ожидаемого.',
        examples:
          '<div id="elem">Привет, <b>меня</b> зовут Вася</div>\n' +
          '<button id="changeBtn">Изменить текст внутри b</button>\n' +
          '<button id="deleteBtn">Удалить b</button>\n\n' +
          '<script>\n' +
          '  const elem = document.getElementById("elem");\n' +
          '  const bold = elem.querySelector("b");\n\n' +
          '  const observer = new MutationObserver((mutations) => {\n' +
          '    mutations.forEach(record => {\n' +
          '      console.log("type:", record.type);\n' +
          '      if (record.type === "characterData") {\n' +
          '        // Изменение текста внутри текстового узла\n' +
          '        console.log("Старое значение:", record.oldValue);\n' +
          '        console.log("Новое значение:", record.target.nodeValue);\n' +
          '      }\n' +
          '      if (record.type === "childList") {\n' +
          '        // Добавление или удаление дочерних элементов\n' +
          '        if (record.removedNodes.length) {\n' +
          '          console.log("Удалённые узлы:", record.removedNodes[0]?.tagName);\n' +
          '        }\n' +
          '      }\n' +
          '    });\n' +
          '  });\n\n' +
          '  // Настраиваем наблюдение\n' +
          '  observer.observe(elem, {\n' +
          '    childList: true, // следить за добавлением/удалением детей\n' +
          '    subtree: true, // следить за всеми потомками\n' +
          '    characterData: true, // следить за изменением текстовых узлов\n' +
          '    characterDataOldValue: true // запоминать старое значение текста\n' +
          '  });\n\n' +
          '  // При клике меняем текст внутри b\n' +
          '  document.getElementById("changeBtn").onclick = () => {\n' +
          '    bold.innerText = "тебя"; // изменится текстовый узел внутри b\n' +
          '  };\n\n' +
          '  // При клике удаляем b\n' +
          '  document.getElementById("deleteBtn").onclick = () => {\n' +
          '    bold.remove(); // удалится элемент b (дочерний элемент div)\n' +
          '  };\n' +
          '</script>',
      },
      {
        title: 'Дополнительные методы и сборка мусора',
        content:
          '• observer.disconnect() — останавливает наблюдение\n' +
          '• observer.takeRecords() — получает список необработанных записей изменений, которые произошли, но колбэк для них ещё не выполнился\n\n' +
          'Объекты MutationObserver используют слабые ссылки на узлы, за которыми наблюдают. Если узел удалён из DOM и больше не достижим, он будет удалён из памяти независимо от наличия наблюдателя.',
        addition:
          'Метод takeRecords полезен перед вызовом disconnect, чтобы не потерять последние изменения.',
        examples:
          '<script>\n' +
          '  // Останавливаем наблюдение\n' +
          '  observer.disconnect();\n' +
          '  // Получаем все неприменённые записи об изменениях\n' +
          '  const mutationRecords = observer.takeRecords();\n' +
          '  // Обрабатываем оставшиеся записи\n' +
          '  mutationRecords.forEach(record => console.log(record));\n' +
          '</script>',
      },
    ],
  },
};
