import { type ITopic } from '@/entities/topic';

export const configScroll: ITopic = {
  value: 'scroll',
  name: 'Прокрутка',
  content: {
    introduction:
      'Событие прокрутки scroll позволяет реагировать на прокрутку страницы или элемента.',
    sections: [
      {
        title: 'Отслеживание прокрутки',
        content:
          'Событие scroll срабатывает как на window, так и на других элементах, на которых включена прокрутка. Для отслеживания текущей позиции прокрутки используется pageYOffset (или window.scrollY).',
        addition:
          'scroll срабатывает часто и может вызываться много раз в секунду, поэтому в обработчике не должно быть тяжёлых вычислений. Если они нужны — используйте throttle/debounce.\n' +
          'pageYOffset — это псевдоним для window.scrollY. Оба свойства хранят текущее смещение прокрутки в пикселях.',
        examples:
          '<div style="height: 2000px; background: linear-gradient(white, gray);">Прокрутите вниз</div>\n\n' +
          '<script>\n' +
          '  window.addEventListener("scroll", () => {\n' +
          '    console.log("Прокрутка: pageYOffset =", window.pageYOffset);\n' +
          '  });\n' +
          '  // При прокрутке в консоль выводится:\n' +
          '  // Прокрутка: pageYOffset = 0\n' +
          '  // Прокрутка: pageYOffset = 50\n' +
          '  // Прокрутка: pageYOffset = 100 ...\n' +
          '</script>',
      },
      {
        title: 'Предотвращение прокрутки',
        content:
          'Нельзя предотвратить прокрутку, используя event.preventDefault() в обработчике onscroll, потому что он срабатывает после того, как прокрутка уже произошла.',
        addition:
          'Более надёжный способ полностью заблокировать прокрутку — использовать CSS-свойство overflow:\n' +
          '• overflow: hidden — на элементе полностью отключает прокрутку\n' +
          '• overflow-y: hidden — отключает только вертикальную прокрутку\n' +
          '• overflow-x: hidden — отключает только горизонтальную прокрутку\n' +
          'Этот подход работает для всех возможных способов инициировать прокрутку (клавиши, мышь, скролл-бар, тач).',
        examples:
          '<!-- Предотвращение прокрутки через отмену keydown для PageUp/PageDown -->\n' +
          '<div id="scrollable" style="width: 200px; height: 100px; overflow: auto; border: 1px solid black;">\n' +
          '  <div style="height: 500px;">\n' +
          '    Строка 1<br>Строка 2<br>Строка 3<br>\n' +
          '    Строка 4<br>Строка 5<br>Строка 6<br>\n' +
          '    Строка 7<br>Строка 8<br>Строка 9<br>\n' +
          '  </div>\n' +
          '</div>\n\n' +
          '<script>\n' +
          '  // Отмена прокрутки клавишами PageUp/PageDown\n' +
          '  document.addEventListener("keydown", function(event) {\n' +
          '    if (event.key === "PageUp" || event.key === "PageDown") {\n' +
          '      event.preventDefault();\n' +
          '      console.log("Прокрутка клавишами отменена");\n' +
          '    }\n' +
          '  });\n\n' +
          '  // Блокировка прокрутки колёсиком мыши\n' +
          '  document.addEventListener("wheel", function(event) {\n' +
          '    event.preventDefault();\n' +
          '    console.log("Прокрутка колёсиком отменена");\n' +
          '  }, { passive: false });\n\n' +
          '  // Полное отключение прокрутки через CSS\n' +
          '  // document.body.style.overflow = "hidden";\n' +
          '</script>',
      },
    ],
  },
};
