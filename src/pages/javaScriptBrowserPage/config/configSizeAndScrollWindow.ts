import { type ITopic } from '@/entities/topic';

export const configSizeAndScrollWindow: ITopic = {
  value: 'size-and-scroll-window',
  name: 'Размеры и прокрутка окна',
  content: {
    introduction:
      'Браузер предоставляет свойства и методы для определения размеров видимой области окна, полных размеров документа, текущей позиции прокрутки, а также управления прокруткой страницы.',
    sections: [
      {
        title: 'Свойства: window.innerWidth/innerHeight',
        content:
          'Свойства window.innerWidth и window.innerHeight возвращают ширину и высоту окна браузера, включая полосу прокрутки.',
        addition:
          'В отличие от clientWidth/clientHeight, эти свойства учитывают полосу прокрутки.',
        examples:
          '<script>\n' +
          '  console.log(window.innerWidth);  // ширина окна включая скроллбар\n' +
          '  console.log(window.innerHeight); // высота окна включая скроллбар\n' +
          '</script>',
      },
      {
        title: 'Полная высота документа',
        content:
          'Для получения полной высоты документа, включая прокрученную часть, нужно взять максимум из нескольких свойств — из-за исторических браузерных несовместимостей.',
        addition:
          'Ни document.documentElement.scrollHeight, ни document.body.scrollHeight сами по себе не дают надёжного результата во всех браузерах.\n' +
          'Надёжное решение — взять максимум из шести значений.',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <div style="height: 2000px;">Прокрути меня</div>\n' +
          '    <script>\n' +
          '      let scrollHeight = Math.max(\n' +
          '        document.body.scrollHeight,\n' +
          '        document.documentElement.scrollHeight,\n' +
          '        document.body.offsetHeight,\n' +
          '        document.documentElement.offsetHeight,\n' +
          '        document.body.clientHeight,\n' +
          '        document.documentElement.clientHeight\n' +
          '      );\n\n' +
          '      console.log(scrollHeight); // полная высота документа (2000+)\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title:
          'Свойства: window.pageXOffset/scrollX, window.pageYOffset/scrollY',
        content:
          'Свойства window.pageXOffset и window.pageYOffset (алиасы: window.scrollX и window.scrollY) содержат текущее смещение прокрутки документа по горизонтали и вертикали.',
        addition:
          'Свойства доступны только для чтения.\n' +
          '• window.pageXOffset === window.scrollX\n' +
          '• window.pageYOffset === window.scrollY',
        examples:
          '<script>\n' +
          '  // Читаем текущую позицию прокрутки\n' +
          '  console.log(window.pageYOffset); // сколько прокручено вертикально (px)\n' +
          '  console.log(window.pageXOffset); // сколько прокручено горизонтально (px)\n\n' +
          '  // Алиасы (то же самое)\n' +
          '  console.log(window.scrollY); // === pageYOffset\n' +
          '  console.log(window.scrollX); // === pageXOffset\n' +
          '</script>',
      },
      {
        title: 'Метод window.scrollBy()',
        content:
          'Метод window.scrollBy(...) прокручивает страницу на заданное количество пикселей относительно текущей позиции. Метод поддерживает два способа вызова: два числа или объект с опциями.',
        addition:
          'Способы вызова:\n' +
          '1. scrollBy(x, y) — где x и y числа (горизонтальное и вертикальное смещение)\n' +
          '2. scrollBy(options) — объект со свойствами top, left, behavior\n' +
          'Значение behavior:\n' +
          '• "auto" — определяется браузером (зависит от CSS-свойства scroll-behavior)\n' +
          '• "smooth" — плавно (не поддерживается в IE и в старых версиях Safari)\n' +
          '• "instant" — мгновенно\n\n' +
          'Метод проверяет тип первого аргумента — если число, работает как scrollBy(x, y); если объект — как scrollBy(options).',
        examples:
          '<script>\n' +
          '  // Способ 1: два числа (x, y)\n' +
          '  window.scrollBy(0, 100); // вниз на 100px\n' +
          '  window.scrollBy(0, -100); // вверх на 100px\n' +
          '  window.scrollBy(50, 0); // вправо на 50px\n\n' +
          '  // Способ 2: объект с опциями\n' +
          '  window.scrollBy({ top: 200, left: 0, behavior: "smooth" }); // плавно вниз\n' +
          '  window.scrollBy({ top: -100, left: 0, behavior: "smooth" }); // плавно вверх\n' +
          '  window.scrollBy({ top: 0, left: 100, behavior: "instant" }); // мгновенно вправо\n' +
          '</script>',
      },
      {
        title: 'Метод window.scrollTo()',
        content:
          'Метод window.scrollTo(...) прокручивает страницу до указанных абсолютных координат. Метод поддерживает два способа вызова: два числа или объект с опциями.',
        addition:
          'Способы вызова:\n' +
          '1. scrollTo(x, y) — где x и y абсолютные координаты (горизонталь и вертикаль)\n' +
          '2. scrollTo(options) — объект со свойствами top, left, behavior\n' +
          'Значение behavior:\n' +
          '• "auto" — определяется браузером (зависит от CSS-свойства scroll-behavior)\n' +
          '• "smooth" — плавно\n' +
          '• "instant" — мгновенно\n\n' +
          'Метод проверяет тип первого аргумента — если число, работает как scrollTo(x, y); если объект — как scrollTo(options).',
        examples:
          '<script>\n' +
          '  // Способ 1: два числа (x, y) — абсолютные координаты\n' +
          '  window.scrollTo(0, 500);   // прокрутить к 500px от верха\n' +
          '  window.scrollTo(0, 1000);  // прокрутить к 1000px от верха\n\n' +
          '  // Способ 2: объект с опциями\n' +
          '  window.scrollTo({ top: 500, left: 0, behavior: "smooth" });   // плавно к 500px\n' +
          '  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });     // плавно в начало\n\n' +
          '  // Прокрутить в начало страницы\n' +
          '  window.scrollTo(0, 0);\n' +
          '  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });\n' +
          '</script>',
      },
      {
        title: 'Метод scrollIntoView()',
        content:
          'Метод elem.scrollIntoView() прокручивает страницу так, чтобы элемент стал видимым. Метод поддерживает два способа вызова: булево значение или объект с опциями.',
        addition:
          'Способы вызова:\n' +
          '1. scrollIntoView(alignToTop) — где true (по умолчанию) выравнивает по верхнему краю, false — по нижнему\n' +
          '2. scrollIntoView(options) — объект со свойствами behavior, block, inline\n' +
          'Значение behavior:\n' +
          '• "auto" — определяется браузером (зависит от CSS-свойства scroll-behavior)\n' +
          '• "smooth" — плавно\n' +
          '• "instant" — мгновенно\n' +
          'Значение block (вертикаль): "start" (по умолчанию), "center", "end", "nearest"\n' +
          'Значение inline (горизонталь): "nearest" (по умолчанию), "start", "center", "end"\n\n' +
          'Метод проверяет тип первого аргумента — если boolean, работает как scrollIntoView(alignToTop); если объект — как scrollIntoView(options).',
        examples:
          '<body style="height: 2000px; width: 3000px;">\n' +
          '  <div id="target" style="margin-top: 1500px; margin-left: 1500px; padding: 20px; background: yellow; width: 200px;">\n' +
          '    Целевой элемент\n' +
          '  </div>\n' +
          '  <script>\n' +
          '    let target = document.getElementById("target");\n\n' +
          '    // Способ 1: булево значение\n' +
          '    target.scrollIntoView();  // элемент по верхнему краю\n' +
          '    target.scrollIntoView(false); // элемент по нижнему краю\n\n' +
          '    // Способ 2: объект с опциями\n' +
          '    target.scrollIntoView({ behavior: "smooth", block: "center" }); // плавно в центр\n' +
          '    target.scrollIntoView({ behavior: "smooth", block: "start" }); // плавно наверх\n' +
          '    target.scrollIntoView({ behavior: "smooth", block: "end" }); // плавно вниз\n' +
          '    target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" }); // минимальная прокрутка\n' +
          '  </script>\n' +
          '</body>',
      },
    ],
  },
};
