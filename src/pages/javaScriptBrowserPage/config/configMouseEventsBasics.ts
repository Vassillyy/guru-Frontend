import { type ITopic } from '@/entities/topic';

export const configMouseEventsBasics: ITopic = {
  value: 'mouse-events-basics',
  name: 'События мыши',
  content: {
    introduction:
      'События мыши — основа взаимодействия с интерфейсом. Они генерируются не только мышью, но и эмулируются на сенсорных экранах для совместимости.',
    sections: [
      {
        title: 'Типы событий мыши и порядок срабатывания',
        content:
          'Основные события мыши:\n' +
          '• mousedown/mouseup — кнопка нажата/отпущена над элементом\n' +
          '• mouseover/mouseout — курсор появился над элементом / ушёл с него\n' +
          '• mousemove — каждое движение мыши над элементом\n' +
          '• click — mousedown + mouseup левой кнопкой на одном элементе\n' +
          '• dblclick — двойной клик (после click)\n' +
          '• contextmenu — попытка открыть контекстное меню (правая кнопка)\n' +
          'Порядок срабатывания фиксирован:\n' +
          '• Одиночный клик: mousedown → mouseup → click\n' +
          '• Двойной клик: mousedown → mouseup → click → mousedown → mouseup → click → dblclick',
        addition:
          'contextmenu не совсем событие мыши — может вызываться спецклавишей на клавиатуре.\n' +
          'Если между событиями прошло больше 1 секунды, dblclick может не сработать.',
        examples:
          '<button id="demoBtn">Кликни меня</button>\n\n' +
          '<script>\n' +
          '  const btn = document.getElementById("demoBtn");\n\n' +
          '  // Левый клик: mousedown → mouseup → click\n' +
          '  btn.addEventListener("mousedown", () => console.log("mousedown"));\n' +
          '  btn.addEventListener("mouseup", () => console.log("mouseup"));\n' +
          '  btn.addEventListener("click", () => console.log("click"));\n\n' +
          '  // Двойной левый клик: mousedown → mouseup → click → mousedown → mouseup → click → dblclick\n' +
          '  btn.addEventListener("dblclick", () => console.log("dblclick"));\n\n' +
          '  // Правый клик: mousedown → mouseup → contextmenu\n' +
          '  btn.addEventListener("contextmenu", () => console.log("contextmenu"));\n' +
          '</script>',
      },
      {
        title: 'Кнопки мыши',
        content:
          'События клика имеют свойство event.button, которое позволяет определить, какая кнопка мыши нажата.\n' +
          'Значения event.button:\n' +
          '• 0 — левая кнопка (основная)\n' +
          '• 1 — средняя кнопка (вспомогательная)\n' +
          '• 2 — правая кнопка (вторичная)\n' +
          '• 3 — кнопка X1 (назад)\n' +
          '• 4 — кнопка X2 (вперёд)',
        addition:
          'Существует также event.buttons — битовая маска всех нажатых в данный момент кнопок.\n' +
          'Свойство event.which устарело и не должно использоваться (1 — левая, 2 — средняя, 3 — правая).',
        examples:
          '<button id="btn">Нажми любую кнопку мыши</button>\n\n' +
          '<script>\n' +
          '  const btn = document.getElementById("btn");\n\n' +
          '  btn.addEventListener("mousedown", (event) => {\n' +
          '    // Отменяем стандартное поведение браузера (например, автопрокрутку для колесика)\n' +
          '    event.preventDefault();\n' +
          '    // event.button: 0 — левая, 1 — средняя (колесико), 2 — правая, 3 — X1 (назад), 4 — X2 (вперёд)\n' +
          '    const buttons = { 0: "левая", 1: "средняя (колесико)", 2: "правая", 3: "X1 (назад)", 4: "X2 (вперёд)" };\n' +
          '    console.log(buttons[event.button], " - ", event.button);\n' +
          '    // При левой кнопке: "левая - 0"\n' +
          '    // При средней (колесико): "средняя (колесико) - 1"\n' +
          '    // При правой: "правая - 2"\n' +
          '    // При X1 (назад): "X1 (назад) - 3"\n' +
          '    // При X2 (вперёд): "X2 (вперёд) - 4"\n' +
          '  });\n' +
          '</script>',
      },
      {
        title: 'Модификаторы: shift, alt, ctrl, meta',
        content:
          'Все события мыши содержат информацию о нажатых клавишах-модификаторах:\n' +
          '• event.shiftKey — Shift\n' +
          '• event.altKey — Alt (Opt для Mac)\n' +
          '• event.ctrlKey — Ctrl\n' +
          '• event.metaKey — Cmd для Mac\n' +
          'Свойства равны true, если во время события была нажата соответствующая клавиша.',
        addition:
          'На Mac вместо Ctrl обычно используется Cmd. Поэтому для кроссплатформенности проверяйте if (event.ctrlKey || event.metaKey).\n' +
          'На MacOS Ctrl+клик интерпретируется как правый клик (contextmenu), а не click.',
        examples:
          '<button id="btn">Кликни с Shift, Alt, Ctrl или Cmd</button>\n\n' +
          '<script>\n' +
          '  const btn = document.getElementById("btn");\n\n' +
          '  btn.addEventListener("click", (event) => {\n' +
          '    let modifiers = [];\n' +
          '    if (event.shiftKey) modifiers.push("Shift");\n' +
          '    if (event.altKey) modifiers.push("Alt");\n' +
          '    if (event.ctrlKey) modifiers.push("Ctrl");\n' +
          '    if (event.metaKey) modifiers.push("Meta (Cmd)");\n\n' +
          '    if (modifiers.length === 0) {\n' +
          '      console.log("Клик без модификаторов");\n' +
          '    } else {\n' +
          '      console.log(`Клик с модификаторами: ${modifiers.join(" + ")}`);\n' +
          '    }\n' +
          '  });\n' +
          '</script>',
      },
      {
        title: 'Координаты: clientX/Y, pageX/Y',
        content:
          'Все события мыши имеют координаты двух видов:\n' +
          '• clientX/clientY — относительно окна (как position: fixed)\n' +
          '• pageX/pageY — относительно документа (учитывают прокрутку)\n' +
          'Когда страница прокручивается, clientX/Y меняются, а pageX/Y остаются неизменными.',
        addition:
          'При скролле clientX/Y отсчитываются от левого верхнего угла текущего окна, pageX/Y — от левого верхнего угла документа.',
        examples:
          '<button id="coordBtn">Наведи на меня мышь</button>\n\n' +
          '<script>\n' +
          '  let btn = document.getElementById("coordBtn");\n\n' +
          '  btn.addEventListener("mousemove", (event) => {\n' +
          '    console.log(`client: ${event.clientX}, ${event.clientY} | page: ${event.pageX}, ${event.pageY}`);\n' +
          '  });\n' +
          '</script>',
      },
      {
        title: 'Отключаем выделение',
        content:
          'Двойной клик и перетаскивание с зажатой кнопкой выделяют текст. Чтобы отменить это, нужно предотвратить действие браузера по умолчанию для mousedown.\n' +
          'Самый надёжный способ — вернуть false из обработчика onmousedown, что отменяет выделение.',
        addition:
          'Если нужно запретить копирование, используйте событие oncopy с return false.',
        examples:
          '<b id="noSelect" ondblclick="console.log(\'Двойной клик!\')">\n' +
          '  Сделай двойной клик или веди мышкой с зажатой кнопкой\n' +
          '</b>\n\n' +
          '<script>\n' +
          '  let el = document.getElementById("noSelect");\n' +
          '  el.addEventListener("mousedown", (e) => {\n' +
          '    e.preventDefault();\n' +
          '    console.log("mousedown — выделение отменено");\n' +
          '  });\n' +
          '  el.addEventListener("dblclick", () => console.log("dblclick"));\n' +
          '  // При зажатии и движении мыши: "mousedown — выделение отменено" (один раз)\n' +
          '  // При двойном клике: "mousedown — выделение отменено" (дважды) → "dblclick" → "Двойной клик!"\n' +
          '</script>',
      },
      {
        title: 'События: mouseover, mouseout и свойство relatedTarget',
        content:
          'События mouseover и mouseout возникают, когда курсор заходит на элемент или покидает его. У них есть свойство relatedTarget — элемент, с которого курсор пришёл (для mouseover) или на который ушёл (для mouseout). Свойство relatedTarget может быть null, если курсор пришёл из-за пределов окна браузера или ушёл за окно.',
        addition:
          '• События mousemove генерируются не для каждого пикселя, а с некоторой периодичностью. Если пользователь двигает мышь очень быстро, некоторые промежуточные элементы могут быть пропущены — события mouseover/mouseout на них не сработают.\n' +
          '• Если mouseover на элементе был, то mouseout обязательно последует.\n' +
          '• Событие mouseout на родителе происходит также, когда курсор переходит с родителя на его потомка. С точки зрения браузера курсор покидает родителя, переходя на дочерний элемент (хотя визуально он всё ещё внутри родительской области).',
        examples:
          '<div id="parent" style="padding: 20px; background: lightgray; display: inline-block;">\n' +
          '  Родитель\n' +
          '  <button id="child">Дочерний элемент</button>\n' +
          '</div>\n\n' +
          '<script>\n' +
          '  let parent = document.getElementById("parent");\n\n' +
          '  parent.addEventListener("mouseover", (event) => {\n' +
          '    console.log(`mouseover: target = ${event.target.tagName}, relatedTarget = ${event.relatedTarget?.tagName || "null"}`);\n' +
          '  });\n' +
          '  parent.addEventListener("mouseout", (event) => {\n' +
          '    console.log(`mouseout: target = ${event.target.tagName}, relatedTarget = ${event.relatedTarget?.tagName || "null"}`);\n' +
          '  });\n' +
          '  // При переходе с родителя (DIV) на кнопку (BUTTON):\n' +
          '  // mouseout: target = DIV, relatedTarget = BUTTON\n' +
          '  // mouseover: target = BUTTON, relatedTarget = DIV\n' +
          '  // При переходе с кнопки (BUTTON) на родителя (DIV):\n' +
          '  // mouseout: target = BUTTON, relatedTarget = DIV\n' +
          '  // mouseover: target = DIV, relatedTarget = BUTTON\n' +
          '</script>',
      },
      {
        title: 'События: mouseenter, mouseleave',
        content:
          'События mouseenter и mouseleave похожи на mouseover и mouseout, но не имеют двух ключевых особенностей: они не всплывают и не срабатывают при переходах на потомков. mouseenter — курсор зашёл на элемент (включая его детей), mouseleave — полностью покинул элемент.',
        addition:
          'Так как mouseenter и mouseleave не всплывают, их нельзя использовать для делегирования. Если нужно обрабатывать переходы между множеством дочерних элементов (например, ячейками таблицы), используют всплывающие mouseover и mouseout с дополнительной проверкой, что мы действительно перешли между интересующими элементами (через relatedTarget и closest).',
        examples:
          '<div id="enterArea" style="padding: 20px; background: lightyellow;">\n' +
          '  Родитель\n' +
          '  <button id="innerBtn">Потомок</button>\n' +
          '</div>\n\n' +
          '<script>\n' +
          '  let area = document.getElementById("enterArea");\n\n' +
          '  area.addEventListener("mouseenter", () => console.log("mouseenter (зашёл на родителя)"));\n' +
          '  area.addEventListener("mouseleave", () => console.log("mouseleave (ушёл с родителя)"));\n' +
          '  // При переходе на кнопку: mouseenter не сработает повторно\n' +
          '</script>',
      },
      {
        title: 'Drag’n’Drop с событиями мыши',
        content:
          'Drag’n’Drop (перетаскивание) реализуется с помощью событий мыши: mousedown → mousemove → mouseup. Базовый алгоритм:\n' +
          '1. При mousedown — запомнить сдвиг курсора относительно элемента, сделать его абсолютно позиционированным\n' +
          '2. При mousemove на document — перемещать элемент, меняя left/top\n' +
          '3. При mouseup — остановить перенос и убрать обработчики\n' +
          'Для определения цели переноса используют document.elementFromPoint(x, y), предварительно скрыв перетаскиваемый элемент.',
        addition:
          '• mousemove нужно отслеживать на document, а не на элементе, чтобы не потерять курсор при быстром движении\n' +
          '• Отключить встроенный браузерный Drag’n’Drop: elem.ondragstart = () => false\n' +
          '• Сдвиг курсора (shiftX/shiftY) — разница между координатами курсора и левым верхним углом элемента — позволяет сохранить относительное положение захвата\n' +
          '• Для поиска цели под курсором: временно скрыть перетаскиваемый элемент, вызвать elementFromPoint, затем снова показать',
        examples:
          '<div id="gate" style="width: 100px; height: 60px; background: lightgreen;">Ворота</div>\n' +
          '<div id="ball" style="width: 40px; height: 40px; background: red; border-radius: 50%;"></div>\n\n' +
          '<script>\n' +
          '  const ball = document.getElementById("ball");\n' +
          '  let currentDroppable = null;\n\n' +
          '  // 1. Начинаем перетаскивание при нажатии на мяч\n' +
          '  ball.onmousedown = (e) => {\n' +
          '    // Запоминаем, за какую часть мяча взяли (сдвиг курсора относительно левого верхнего угла)\n' +
          '    const shiftX = e.clientX - ball.getBoundingClientRect().left;\n' +
          '    const shiftY = e.clientY - ball.getBoundingClientRect().top;\n\n' +
          '    // Делаем мяч абсолютно позиционированным и поднимаем над остальным\n' +
          '    ball.style.position = "absolute";\n' +
          '    ball.style.zIndex = 1000;\n\n' +
          '    // Перемещаем мяч под курсор с учётом сдвига\n' +
          '    function moveAt(pageX, pageY) {\n' +
          '      ball.style.left = pageX - shiftX + "px";\n' +
          '      ball.style.top = pageY - shiftY + "px";\n' +
          '    }\n\n' +
          '    moveAt(e.pageX, e.pageY);\n\n' +
          '    // 2. Следим за движением мыши на document (чтобы не потерять курсор)\n' +
          '    function onMouseMove(e) {\n' +
          '      moveAt(e.pageX, e.pageY);\n\n' +
          '      // Определяем, над каким элементом сейчас курсор\n' +
          '      ball.hidden = true; // временно прячем мяч, чтобы он не заслонял цели\n' +
          '      let elemBelow = document.elementFromPoint(e.clientX, e.clientY);\n' +
          '      ball.hidden = false;\n\n' +
          '      if (!elemBelow) return;\n\n' +
          '      // Проверяем, является ли элемент (или его родитель) целью\n' +
          '      let droppableBelow = elemBelow.closest("#gate");\n\n' +
          '      // Если цель сменилась — обновляем подсветку\n' +
          '      if (currentDroppable != droppableBelow) {\n' +
          '        if (currentDroppable) currentDroppable.style.background = "lightgreen";\n' +
          '        currentDroppable = droppableBelow;\n' +
          '        if (currentDroppable) currentDroppable.style.background = "lightcoral";\n' +
          '      }\n' +
          '    }\n\n' +
          '    document.addEventListener("mousemove", onMouseMove);\n\n' +
          '    // 3. Завершаем перетаскивание при отпускании кнопки\n' +
          '    ball.onmouseup = () => {\n' +
          '      document.removeEventListener("mousemove", onMouseMove);\n' +
          '      ball.onmouseup = null;\n' +
          '      if (currentDroppable) console.log("Попадание!");\n' +
          '      currentDroppable = null;\n' +
          '    };\n' +
          '  };\n\n' +
          '  // Отключаем встроенный браузерный Drag’n’Drop, чтобы не мешал\n' +
          '  ball.ondragstart = () => false;\n' +
          '</script>',
      },
    ],
  },
};
