import { type ITopic } from '@/entities/topic';

export const configSizeAndScroll: ITopic = {
  value: 'size-and-scroll',
  name: 'Размеры и прокрутка элементов',
  content: {
    introduction:
      'Существует множество JavaScript-свойств, которые позволяют считывать информацию об элементе: ширину, высоту и другие геометрические характеристики.',
    sections: [
      {
        title: 'Свойства: offsetParent, offsetLeft и offsetTop',
        content:
          'Свойство offsetParent содержит предка элемента, используемого браузером для вычисления координат при рендеринге.\n' +
          'Свойства offsetLeft/offsetTop содержат координаты x/y относительно верхнего левого угла offsetParent.',
        addition:
          'offsetParent может быть:\n' +
          '• CSS-позиционированный предок (position: absolute, relative, sticky)\n' +
          '• <td>, <th>, <table>\n' +
          '• <body>\n' +
          'offsetParent равен null для:\n' +
          '• скрытых элементов (display:none)\n' +
          '• элементов <body> и <html>\n' +
          '• элементов с position:fixed',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <main style="position: relative; padding: 20px;" id="main">\n' +
          '      <article>\n' +
          '        <div id="example" style="position: absolute; left: 180px; top: 180px;"></div>\n' +
          '      </article>\n' +
          '    </main>\n\n' +
          '    <script>\n' +
          '      let example = document.getElementById("example");\n\n' +
          '      console.log(example.offsetParent.id); // "main" (ближайший позиционированный предок)\n' +
          '      console.log(example.offsetLeft); // 180 (позиция относительно main)\n' +
          '      console.log(example.offsetTop); // 180\n\n' +
          '      // Для body offsetParent === null\n' +
          '      console.log(document.body.offsetParent); // null\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title: 'Свойства: offsetWidth и offsetHeight',
        content:
          'Свойства offsetWidth и offsetHeight содержат полный размер элемента, включая рамки (border), отступы (padding) и полосы прокрутки (если есть).',
        addition:
          'offsetWidth = CSS-ширина + padding-left + padding-right + border-left + border-right + scroll\n' +
          'offsetHeight = CSS-высота + padding-top + padding-bottom + border-top + border-bottom + scroll\n\n' +
          'Метрики для невидимых элементов равны нулю.',
        examples:
          '<div id="example" style="width: 300px; height: 200px; border: 25px solid #E8C48F; padding: 20px; overflow: auto">\n' +
          '  Текст внутри элемента\n' +
          '</div>\n\n' +
          '<div id="hidden" style="display: none">Скрытый элемент</div>\n\n' +
          '<script>\n' +
          '  let elem = document.getElementById("example");\n\n' +
          '  console.log(elem.offsetWidth);  // 390\n' +
          '  console.log(elem.offsetHeight); // 290\n\n' +
          '  // Для скрытого элемента\n' +
          '  let hidden = document.getElementById("hidden");\n' +
          '  console.log(hidden.offsetWidth); // 0\n' +
          '  console.log(hidden.offsetHeight); // 0\n' +
          '</script>',
      },
      {
        title: 'Свойства: clientTop и clientLeft',
        content:
          'Свойства clientTop и clientLeft возвращают ширину верхней и левой рамки (border) элемента.',
        addition:
          'clientLeft = ширина левой рамки (для Right-to-Left — плюс полоса прокрутки)\n' +
          'clientTop = ширина верхней рамки',
        examples:
          '<div id="box" style="border: 25px solid #E8C48F; padding: 20px;">\n' +
          '  Текст внутри элемента\n' +
          '</div>\n\n' +
          '<div id="no-border" style="padding: 10px;">\n' +
          '  Без рамки\n' +
          '</div>\n\n' +
          '<script>\n' +
          '  let box = document.getElementById("box");\n\n' +
          '  console.log(box.clientLeft); // 25\n' +
          '  console.log(box.clientTop); // 25\n\n' +
          '  let noBorder = document.getElementById("no-border");\n' +
          '  console.log(noBorder.clientLeft); // 0\n' +
          '  console.log(noBorder.clientTop); // 0\n' +
          '</script>',
      },
      {
        title: 'Свойства: clientWidth и clientHeight',
        content:
          'Свойства clientWidth и clientHeight возвращают внутренний размер элемента (ширину и высоту области содержимого + padding) — без рамок и полосы прокрутки.',
        addition:
          'clientWidth = width + padding-left + padding-right - scrollbar-width\n' +
          'clientHeight = height + padding-top + padding-bottom - scrollbar-height',
        examples:
          '<!-- Элемент, в котором будет прокрутка -->\n' +
          '<div id="scrollBox" style="width: 100px; height: 50px; padding: 10px; border: 5px solid black; overflow: auto;">\n' +
          '  Строка текста для прокрутки.\n' +
          '</div>\n\n' +
          '<!-- Элемент, без прокрутки -->\n' +
          '<div id="noScrollBox" style="width: 100px; height: 50px; padding: 10px; border: 5px solid black; overflow: auto;">\n' +
          '  Короткий текст.\n' +
          '</div>\n\n' +
          '<div id="hidden" style="display: none">Скрытый элемент</div>\n\n' +
          '<script>\n' +
          '  let withScroll = document.getElementById("scrollBox");\n' +
          '  let noScroll = document.getElementById("noScrollBox");\n' +
          '  let hidden = document.getElementById("hidden");\n\n' +
          '  console.log(withScroll.clientWidth); // 105 (width + padding-right + padding-left - scroll-width)\n' +
          '  console.log(withScroll.clientHeight); // 70 (height + padding-top + padding-bottom - scroll-height)\n\n' +
          '  console.log(noScroll.clientWidth); // 120 (width + padding-left + padding-right - scroll-width)\n' +
          '  console.log(noScroll.clientHeight); // 70 (height + padding-top + padding-bottom - scroll-height)\n\n' +
          '  console.log(hidden.clientWidth); // 0\n' +
          '  console.log(hidden.clientHeight); // 0\n' +
          '</script>',
      },
      {
        title: 'Свойства: scrollWidth и scrollHeight',
        content:
          'Свойства scrollWidth и scrollHeight возвращают полный внутренний размер элемента (ширину и высоту области содержимого + padding), включая (невидимую) часть.',
        addition:
          'scrollWidth = общая ширина контента + padding\n' +
          'scrollHeight = общая высота контента + padding',
        examples:
          '<!-- Элемент с прокруткой по вертикали -->\n' +
          '<div id="scrollBox" style="width: 100px; height: 50px; padding: 10px; border: 5px solid black; overflow: auto;">\n' +
          '  Строка текста для прокрутки.\n' +
          '  Добавим ещё строк.\n' +
          '</div>\n\n' +
          '<!-- Элемент без прокрутки -->\n' +
          '<div id="noScrollBox" style="width: 100px; height: 50px; padding: 10px; border: 5px solid black; overflow: auto;">\n' +
          '  Короткий текст.\n' +
          '</div>\n\n' +
          '<div id="hidden" style="display: none">Скрытый элемент</div>\n\n' +
          '<script>\n' +
          '  let withScroll = document.getElementById("scrollBox");\n' +
          '  let noScroll = document.getElementById("noScrollBox");\n' +
          '  let hidden = document.getElementById("hidden");\n\n' +
          '  console.log(withScroll.scrollWidth); // 105 (полная ширина контента + padding-left + padding-right)\n' +
          '  console.log(withScroll.scrollHeight); // 112 (полная высота контента + padding)\n\n' +
          '  console.log(noScroll.scrollWidth); // 120 (полная ширина контента + padding-left + padding-right)\n' +
          '  console.log(noScroll.scrollHeight); // 70 (полная высота контента + padding-top + padding-bottom)\n\n' +
          '  console.log(hidden.scrollWidth); // 0\n' +
          '  console.log(hidden.scrollHeight); // 0\n' +
          '</script>',
      },
      {
        title: 'Свойства: scrollLeft и scrollTop',
        content:
          'Свойства scrollLeft и scrollTop возвращают ширину/высоту невидимой, прокрученной в данный момент, части элемента слева и сверху.',
        addition:
          'scrollLeft = сколько уже прокручено влево\n' +
          'scrollTop = сколько уже прокручено вверх\n\n' +
          'Эти свойства можно изменять — браузер выполнит прокрутку элемента.',
        examples:
          '<!-- Элемент с прокруткой -->\n' +
          '<div id="scrollBox" style="width: 100px; height: 50px; padding: 10px; border: 5px solid black; overflow: auto;">\n' +
          '  Строка текста для прокрутки.\n' +
          '  Добавим ещё строк.\n' +
          '  Чтобы появилась прокрутка.\n' +
          '  И ещё одну строку.\n' +
          '</div>\n\n' +
          '<!-- Элемент без прокрутки -->\n' +
          '<div id="noScrollBox" style="width: 100px; height: 50px; padding: 10px; border: 5px solid black; overflow: auto;">\n' +
          '  Короткий текст.\n' +
          '</div>\n\n' +
          '<div id="hidden" style="display: none">Скрытый элемент</div>\n\n' +
          '<script>\n' +
          '  let withScroll = document.getElementById("scrollBox");\n' +
          '  let noScroll = document.getElementById("noScrollBox");\n' +
          '  let hidden = document.getElementById("hidden");\n\n' +
          '  console.log(withScroll.scrollTop); // 0\n' +
          '  console.log(withScroll.scrollLeft); // 0\n\n' +
          '  // Прокрутим элемент\n' +
          '  withScroll.scrollTop = 50;\n' +
          '  console.log(withScroll.scrollTop); // 50 (сколько прокручено)\n\n' +
          '  console.log(noScroll.scrollTop); // 0 (нет прокрутки)\n' +
          '  console.log(noScroll.scrollLeft); // 0\n\n' +
          '  console.log(hidden.scrollTop); // 0\n' +
          '  console.log(hidden.scrollLeft); // 0\n\n' +
          '  // Прокрутка на самый низ\n' +
          '  withScroll.scrollTop = withScroll.scrollHeight;\n\n' +
          '  // Прокрутка на самый верх\n' +
          '  withScroll.scrollTop = 0;\n' +
          '</script>',
      },
      {
        title: 'Ширина полосы прокрутки',
        content:
          'Ширину стандартной полосы прокрутки можно получить, создав элемент с прокруткой без рамок и отступов. Разница между offsetWidth и clientWidth даст ширину scrollbar.',
        addition:
          'Для Windows ширина обычно колеблется от 12px до 20px.\n' +
          'В macOS (при настройке "показывать только при прокрутке") полоса прокрутки не занимает место — разница offsetWidth - clientWidth будет 0.',
        examples:
          '<script>\n' +
          '  function getScrollbarWidth() {\n' +
          '    let div = document.createElement("div");\n' +
          '    div.style.overflowY = "scroll";\n' +
          '    div.style.width = "50px";\n' +
          '    div.style.height = "50px";\n\n' +
          '    document.body.append(div);\n\n' +
          '    console.log(div.offsetWidth); // 50 (ширина + скролл)\n' +
          '    console.log(div.clientWidth); // 35 (ширина - скролл)\n\n' +
          '    let scrollWidth = div.offsetWidth - div.clientWidth;\n' +
          '    console.log(scrollWidth); // ширина скролла\n\n' +
          '    div.remove();\n' +
          '    return scrollWidth;\n' +
          '  }\n\n' +
          '  getScrollbarWidth();\n' +
          '</script>',
      },
    ],
  },
};
