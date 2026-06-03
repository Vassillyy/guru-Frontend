import { type ITopic } from '@/entities/topic';

export const configSelectionRange: ITopic = {
  value: 'selection-range',
  name: 'Объекты Selection и Range',
  content: {
    introduction:
      'JavaScript позволяет получать существующее выделение, выделять и снимать выделение как целиком, так и по частям, убирать выделенную часть из документа, оборачивать её в тег и так далее. В основе выделения лежит объект Range, а само выделение представлено объектом Selection.',
    sections: [
      {
        title: 'Range — создание и границы диапазона',
        content:
          'Объект Range представляет пару «граничных точек»: начало и конец диапазона. Каждая точка задаётся DOM-узлом и смещением от его начала. Для элемента смещение — номер дочернего узла, для текстового узла — позиция в тексте.\n' +
          'const range = new Range(); - конструктор без параметров\n' +
          'Установка границ:\n' +
          '• range.setStart(node, offset) — начало в позиции offset внутри node\n' +
          '• range.setEnd(node, offset) — конец в позиции offset внутри node',
        addition:
          'setStart и setEnd не обязаны использовать один и тот же элемент — диапазон может охватывать любые узлы, важно лишь чтобы конец шёл после начала.',
        examples:
          '<p id="p">Example: <i>italic</i> and <b>bold</b></p>\n\n' +
          '<script>\n' +
          '  const p = document.getElementById("p");\n\n' +
          '  // Диапазон: от 0-го до 2-го дочернего элемента p\n' +
          '  const range = new Range();\n' +
          '  range.setStart(p, 0); // начало: 0-й дочерний узел (текст "Example: ")\n' +
          '  range.setEnd(p, 2);   // конец: 2-й дочерний узел (текст " and "), не включая\n' +
          '  console.log(range.toString()); // "Example: italic"\n\n' +
          '  // Частичное выделение внутри текстовых узлов\n' +
          '  const range2 = new Range();\n' +
          '  // начало: с 3-го символа первого текстового узла (после "Ex")\n' +
          '  range2.setStart(p.firstChild, 2);\n' +
          '  // конец: первые 3 символа текста внутри <b>\n' +
          '  range2.setEnd(p.querySelector("b").firstChild, 3);\n' +
          '  console.log(range2.toString()); // "ample: italic and bol"\n' +
          '</script>',
      },
      {
        title: 'Свойства Range',
        content:
          'Объект Range имеет следующие свойства:\n' +
          '• startContainer — узел, в котором начинается диапазон\n' +
          '• startOffset — смещение внутри startContainer\n' +
          '• endContainer — узел, в котором заканчивается диапазон\n' +
          '• endOffset — смещение внутри endContainer\n' +
          '• collapsed — true, если начало и конец совпадают (диапазон пуст)\n' +
          '• commonAncestorContainer — ближайший общий предок всех узлов диапазона',
        addition:
          'Свойство collapsed полезно для проверки, есть ли выделение. Если collapsed === true, значит ничего не выбрано.',
        examples:
          '<p id="p">Example: <i>italic</i> and <b>bold</b></p>\n\n' +
          '<script>\n' +
          '  const p = document.getElementById("p");\n' +
          '  const range = new Range();\n' +
          '  range.setStart(p, 0);\n' +
          '  range.setEnd(p, 2);\n\n' +
          '  console.log("startContainer:", range.startContainer); // <p>...\n' +
          '  console.log("startOffset:", range.startOffset); // 0\n' +
          '  console.log("endContainer:", range.endContainer); // <p>...\n' +
          '  console.log("endOffset:", range.endOffset); // 2\n' +
          '  console.log("collapsed:", range.collapsed); // false (есть выделение)\n' +
          '  console.log("commonAncestorContainer:", range.commonAncestorContainer); // <p>...\n\n' +
          '  // Пример с пустым диапазоном\n' +
          '  const emptyRange = new Range();\n' +
          '  emptyRange.setStart(p, 1);\n' +
          '  emptyRange.setEnd(p, 1);\n' +
          '  console.log("emptyRange collapsed:", emptyRange.collapsed); // true\n' +
          '</script>',
      },
      {
        title: 'Методы Range — установка границ',
        content:
          'Дополнительные методы для установки начала и конца диапазона:\n' +
          'Установка начала:\n' +
          '• setStart(node, offset) — начало в позиции offset в node\n' +
          '• setStartBefore(node) — начало прямо перед node\n' +
          '• setStartAfter(node) — начало прямо после node\n' +
          'Установка конца:\n' +
          '• setEnd(node, offset) — конец в позиции offset в node\n' +
          '• setEndBefore(node) — конец прямо перед node\n' +
          '• setEndAfter(node) — конец прямо после node\n\n' +
          'Для текстовых узлов offset — количество символов, для элементов — количество дочерних узлов.',
        addition:
          'Дополнительные методы:\n' +
          '• selectNode(node) — выделить node вместе со всем его содержимым\n' +
          '• selectNodeContents(node) — выделить только содержимое node (без самого узла)\n' +
          '• collapse(toStart) — схлопнуть диапазон: true — к началу, false — к концу\n' +
          '• cloneRange() — создать точную копию диапазона (независимую от оригинала)',
        examples:
          '<p id="p">Example: <i>italic</i> and <b>bold</b></p>\n\n' +
          '<script>\n' +
          '  const p = document.getElementById("p");\n' +
          '  const italic = p.querySelector("i");\n' +
          '  const bold = p.querySelector("b");\n\n' +
          '  // 1. setStartBefore / setEndAfter\n' +
          '  const range1 = new Range();\n' +
          '  range1.setStartBefore(italic); // начало перед <i>\n' +
          '  range1.setEndAfter(bold); // конец после <b>\n' +
          '  console.log("setStartBefore/setEndAfter:", range1.toString()); // "italic and bold"\n\n' +
          '  // 2. setStartAfter / setEndBefore\n' +
          '  const range2 = new Range();\n' +
          '  range2.setStartAfter(italic); // начало после <i> (перед текстом " and ")\n' +
          '  range2.setEndBefore(bold); // конец перед <b>\n' +
          '  console.log("setStartAfter/setEndBefore:", range2.toString()); // " and "\n\n' +
          '  // 3. selectNode / selectNodeContents\n' +
          '  const range3 = new Range();\n' +
          '  range3.selectNode(italic);\n' +
          '  console.log("selectNode(italic):", range3.toString()); // "italic"\n' +
          '  const range4 = new Range();\n' +
          '  range4.selectNodeContents(italic);\n' +
          '  console.log("selectNodeContents(italic):", range4.toString()); // "italic"\n\n' +
          '  // 4. collapse\n' +
          '  const range5 = new Range();\n' +
          '  range5.selectNode(bold);\n' +
          '  console.log("До collapse:", range5.toString()); // "bold"\n' +
          '  range5.collapse(true); // схлопнуть к началу\n' +
          '  console.log("После collapse(true):", range5.toString()); // ""\n\n' +
          '  // 5. cloneRange\n' +
          '  const range6 = new Range();\n' +
          '  range6.selectNode(bold);\n' +
          '  const clonedRange = range6.cloneRange();\n' +
          '  console.log("Оригинал:", range6.toString()); // "bold"\n' +
          '  console.log("Клон:", clonedRange.toString()); // "bold"\n' +
          '  console.log("Диапазоны независимы:", range6 !== clonedRange); // true\n' +
          '</script>',
      },
      {
        title: 'Методы Range — манипуляции содержимым',
        content:
          'Методы для управления содержимым внутри диапазона:\n' +
          '• deleteContents() — удалить содержимое диапазона из документа\n' +
          '• extractContents() — удалить содержимое и вернуть как DocumentFragment\n' +
          '• cloneContents() — склонировать содержимое и вернуть как DocumentFragment\n' +
          '• insertNode(node) — вставить node в документ в начале диапазона\n' +
          '• surroundContents(node) — обернуть node вокруг содержимого диапазона (диапазон должен содержать целые теги)',
        addition:
          'surroundContents требует, чтобы диапазон содержал полные открывающие/закрывающие теги — частичные диапазоны вида <i>abc не допускаются.',
        examples:
          '<div id="demo">\n' +
          '  <p id="p">Example: <i>italic</i> and <b>bold</b></p>\n' +
          '</div>\n' +
          '<button id="cloneBtn">Клонировать содержимое</button>\n' +
          '<button id="extractBtn">Извлечь содержимое</button>\n' +
          '<button id="wrapBtn">Обернуть в <u></button>\n\n' +
          '<script>\n' +
          '  const p = document.getElementById("p");\n' +
          '  const demo = document.getElementById("demo");\n\n' +
          '  // cloneContents — копирование без удаления\n' +
          '  document.getElementById("cloneBtn").onclick = () => {\n' +
          '    const range = new Range();\n' +
          '    range.selectNodeContents(p);\n' +
          '    const fragment = range.cloneContents();\n' +
          '    demo.appendChild(fragment);\n' +
          '    console.log("cloneContents: содержимое скопировано вниз");\n' +
          '  };\n\n' +
          '  // extractContents — удаление с возвратом в DocumentFragment\n' +
          '  document.getElementById("extractBtn").onclick = () => {\n' +
          '    const range = new Range();\n' +
          '    range.selectNodeContents(p);\n' +
          '    const fragment = range.extractContents();\n' +
          '    console.log("extractContents: извлечено:", fragment);\n' +
          '    // p теперь пуст\n' +
          '  };\n\n' +
          '  // surroundContents — оборачивание\n' +
          '  document.getElementById("wrapBtn").onclick = () => {\n' +
          '    const range = new Range();\n' +
          '    range.selectNodeContents(p);\n' +
          '    const wrapper = document.createElement("u");\n' +
          '    range.surroundContents(wrapper);\n' +
          '    console.log("surroundContents: содержимое обёрнуто в <u>");\n' +
          '  };\n' +
          '</script>',
      },
      {
        title: 'Selection — свойства и события',
        content:
          'Выделение в документе представлено объектом Selection, который получается через window.getSelection() или document.getSelection().\n' +
          'Основные свойства:\n' +
          '• anchorNode — узел, с которого начинается выделение (якорь)\n' +
          '• anchorOffset — смещение в anchorNode\n' +
          '• focusNode — узел, на котором выделение заканчивается (фокус)\n' +
          '• focusOffset — смещение в focusNode\n' +
          '• isCollapsed — true, если выделение пусто или не существует\n' +
          '• rangeCount — количество диапазонов (максимум 1, кроме Firefox)\n\n' +
          'События для отслеживания выделения:\n' +
          '• elem.onselectstart — когда пользователь начинает выделение на elem (можно отменить через preventDefault())\n' +
          '• document.onselectionchange — когда выделение изменяется (только на document)',
        addition:
          'Выделение может быть «направлено вперёд» или «назад». Range всегда направлен вперёд. onselectionchange срабатывает при любом изменении выделения в документе.',
        examples:
          '<p id="p">Выдели меня: <i>курсив</i> и <b>жирный</b></p>\n\n' +
          '<script>\n' +
          '  document.onselectionchange = function() {\n' +
          '    const sel = document.getSelection();\n' +
          '    // При выделении "Выдели м"\n' +
          '    console.log(sel.anchorNode, sel.anchorOffset); // "Выдели меня: ", 0\n' +
          '    console.log(sel.focusNode, sel.focusOffset); // "Выдели меня: ", 8\n' +
          '    console.log(sel.toString()); // "Выдели м"\n' +
          '  };\n' +
          '</script>',
      },
      {
        title: 'Методы Selection',
        content:
          'Управление диапазонами выделения:\n' +
          '• getRangeAt(i) — получить i-й диапазон (0 — первый)\n' +
          '• addRange(range) — добавить диапазон в выделение\n' +
          '• removeRange(range) — удалить диапазон из выделения\n' +
          '• removeAllRanges() — удалить все диапазоны\n' +
          '• empty() — сокращение для removeAllRanges()\n\n' +
          'Управление без обращения к Range:\n' +
          '• collapse(node, offset) — заменить выделение новым, схлопнутым на node, offset\n' +
          '• setPosition(node, offset) — то же самое, что collapse\n' +
          '• collapseToStart() — схлопнуть (заменить на пустой диапазон) к началу выделения\n' +
          '• collapseToEnd() — схлопнуть диапазон к концу выделения\n' +
          '• extend(node, offset) — переместить фокус выделения к данному node, с позиции offset\n' +
          '• setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset) — заменить диапазон выделения на заданные начало anchorNode/anchorOffset и конец focusNode/focusOffset. Будет выделено всё содержимое между этими границами\n' +
          '• selectAllChildren(node) — выделить все дочерние узлы node\n' +
          '• deleteFromDocument() — удалить содержимое выделения из документа\n' +
          '• containsNode(node, allowPartial) — проверить, содержит ли выделение node',
        addition:
          'Перед добавлением нового диапазона через addRange() нужно очистить текущее выделение removeAllRanges(), иначе в браузерах, кроме Firefox, новый диапазон будет проигнорирован. Исключение — методы, которые сами заменяют выделение, например setBaseAndExtent.',
        examples:
          '<p id="p">Выдели меня: <i>курсив</i> и <b>жирный</b></p>\n\n' +
          '<button id="btn1">Выделить через setBaseAndExtent</button>\n' +
          '<button id="btn2">Выделить через Range</button>\n\n' +
          '<script>\n' +
          '  const p = document.getElementById("p");\n' +
          '  const sel = document.getSelection();\n\n' +
          '  // Способ 1: через setBaseAndExtent\n' +
          '  document.getElementById("btn1").onclick = () => {\n' +
          '    sel.setBaseAndExtent(p, 0, p, p.childNodes.length);\n' +
          '    console.log(sel.toString()); // "Выдели меня: курсив и жирный"\n' +
          '    console.log(sel.rangeCount); // 1\n' +
          '  };\n\n' +
          '  // Способ 2: через Range\n' +
          '  document.getElementById("btn2").onclick = () => {\n' +
          '    const range = new Range();\n' +
          '    range.selectNodeContents(p);\n' +
          '    sel.removeAllRanges();\n' +
          '    sel.addRange(range);\n' +
          '    console.log(sel.toString()); // "Выдели меня: курсив и жирный"\n' +
          '    console.log(sel.rangeCount); // 1\n' +
          '  };\n' +
          '</script>',
      },
      {
        title: 'Выделение в элементах форм (input/textarea)',
        content:
          'Элементы форм предоставляют отдельное упрощённое API для выделения, так как их содержимое — простой текст.\n' +
          'Свойства:\n' +
          '• input.selectionStart — позиция начала выделения (можно изменять)\n' +
          '• input.selectionEnd — позиция конца выделения (можно изменять)\n' +
          '• input.selectionDirection — направление: "forward", "backward" или "none"\n' +
          'Событие:\n' +
          '• input.onselect — срабатывает при завершении выделения\n' +
          'Методы:\n' +
          '• input.select() — выделить всё содержимое\n' +
          '• input.setSelectionRange(start, end, direction) — установить выделение от start до end\n' +
          '• input.setRangeText(replacement, start, end, selectionMode) — заменить выделенный текст',
        addition:
          'selectionMode в setRangeText: "select" — выделить вставленный текст, "start" — курсор перед текстом, "end" — курсор после текста, "preserve" — сохранить выделение (по умолчанию).',
        examples:
          '<input id="input" style="width:200px" value="Замените ЭТО в тексте">\n' +
          '<button id="button">Заменить ЭТО</button>\n\n' +
          '<script>\n' +
          '  // При выделении текста мышью\n' +
          '  input.onselect = () => {\n' +
          '    console.log("выделено:", input.value.substring(input.selectionStart, input.selectionEnd));\n' +
          '  };\n\n' +
          '  // При клике на кнопку заменяем "ЭТО" на "*ЭТО*"\n' +
          '  button.onclick = () => {\n' +
          '    let pos = input.value.indexOf("ЭТО");\n' +
          '    if (pos >= 0) {\n' +
          '      input.setRangeText("*ЭТО*", pos, pos + 3, "select");\n' +
          '      input.focus();\n' +
          '    }\n' +
          '  };\n' +
          '</script>',
      },
      {
        title: 'Как сделать элемент невыделяемым',
        content:
          'Три способа запретить выделение:\n' +
          '1. CSS: user-select: none — запрещает начало выделения на элементе, но элемент может быть включён в выделение, начатое с соседнего узла.\n' +
          '2. JavaScript: elem.onselectstart = () => false — отменяет начало выделения через preventDefault (не защищает от расширения выделения с соседних элементов).\n' +
          '3. Сброс выделения: document.getSelection().empty() — очищает выделение после его появления (вызывает мерцание).',
        addition:
          'user-select: none — самый простой и часто используемый способ. onselectstart удобен, когда на элементе есть собственный обработчик mousedown и выделение мешает.',
        examples:
          '<style>\n' +
          '  #no-select { user-select: none; }\n' +
          '</style>\n' +
          '<div>Можно выделить <div id="no-select">Нельзя выделить</div> Можно выделить</div>',
      },
    ],
  },
};
