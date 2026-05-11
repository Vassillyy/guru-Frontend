import { type ITopic } from '@/entities/topic';

export const configCoordinates: ITopic = {
  value: 'coordinates',
  name: 'Координаты',
  content: {
    introduction:
      'Большинство методов JavaScript работают в одной из двух систем координат: относительно окна браузера (clientX/clientY) и относительно документа (pageX/pageY).',
    sections: [
      {
        title: 'Координаты относительно окна: метод getBoundingClientRect()',
        content:
          'Метод elem.getBoundingClientRect() возвращает координаты в контексте окна для минимального по размеру прямоугольника, который заключает в себе элемент elem, в виде объекта встроенного класса DOMRect.\n' +
          'Основные свойства:\n' +
          '• x — X-координата левого верхнего угла прямоугольника относительно окна\n' +
          '• y — Y-координата левого верхнего угла прямоугольника относительно окна\n' +
          '• width — ширина прямоугольника (включает padding и border)\n' +
          '• height — высота прямоугольника (включает padding и border)\n' +
          'Дополнительные свойства:\n' +
          '• left — левая граница (равно x)\n' +
          '• top — верхняя граница (равно y)\n' +
          '• right — правая граница (x + width)\n' +
          '• bottom — нижняя граница (y + height)',
        addition:
          'left = x, top = y, right = x + width, bottom = y + height\n' +
          'Координаты могут быть отрицательными, если элемент за пределами окна.\n' +
          'Internet Explorer и Edge не поддерживают x/y — используйте top/left.',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <div id="example" style="position: absolute; left: 100px; top: 50px; width: 200px; height: 150px; background: #E8C48F; padding: 20px;">\n' +
          '      Пример элемента\n' +
          '    </div>\n\n' +
          '    <script>\n' +
          '      let elem = document.getElementById("example");\n' +
          '      let rect = elem.getBoundingClientRect();\n\n' +
          '      console.log(rect.x); // 100\n' +
          '      console.log(rect.y); // 50\n' +
          '      console.log(rect.width); // 240 (200 + 20 + 20)\n' +
          '      console.log(rect.height); // 190 (150 + 20 + 20)\n\n' +
          '      // Дополнительные свойства\n' +
          '      console.log(rect.left); // 100 (равно x)\n' +
          '      console.log(rect.top); // 50  (равно y)\n' +
          '      console.log(rect.right); // 340 (100 + 240)\n' +
          '      console.log(rect.bottom); // 240 (50 + 190)\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title: 'Метод elementFromPoint()',
        content:
          'Вызов document.elementFromPoint(x, y) возвращает самый глубоко вложенный элемент в окне, находящийся по координатам (x, y).',
        addition:
          'Координаты должны быть в пределах видимой части окна.\n' +
          'Если любая из координат отрицательна или превышает размер окна, возвращается null.',
        examples:
          '<html>\n' +
          '  <body>\n' +
          '    <div id="box" style="width: 300px; height: 200px; background: lightblue;">\n' +
          '      Блок в центре\n' +
          '    </div>\n\n' +
          '    <script>\n' +
          '      let centerX = document.documentElement.clientWidth / 2;\n' +
          '      let centerY = document.documentElement.clientHeight / 2;\n\n' +
          '      let elem = document.elementFromPoint(centerX, centerY);\n' +
          '      console.log(elem.tagName); // Элемент в центре\n\n' +
          '      // Координаты за пределами окна\n' +
          '      let outside = document.elementFromPoint(-10, -10);\n' +
          '      console.log(outside); // null\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
      {
        title: 'Координаты относительно документа',
        content:
          'В этой системе координат отсчёт ведётся от левого верхнего угла документа, а не окна. ' +
          'В CSS это соответствует position:absolute на верхнем уровне вложенности.\n' +
          'Стандартного метода для получения координат относительно документа нет, но можно написать свою функцию:\n' +
          'pageY = clientY + высота прокрученной части документа\n' +
          'pageX = clientX + ширина прокрученной части документа',
        addition:
          'Координаты относительно документа подходят для position:absolute.',
        examples:
          '<html>\n' +
          '  <body style="height: 2000px;">\n' +
          '    <div id="box" style="margin-top: 500px; padding: 20px; background: yellow; display: inline-block;">\n' +
          '      Целевой элемент\n' +
          '    </div>\n' +
          '    <div style="position: fixed; top: 10px; left: 10px; background: white; border: 1px solid black;">\n' +
          '      <button onclick="showCoords()">Показать координаты</button>\n' +
          '    </div>\n\n' +
          '    <script>\n' +
          '      // Функция получения координат относительно документа\n' +
          '      function getCoords(elem) {\n' +
          '        let box = elem.getBoundingClientRect(); // координаты относительно окна\n' +
          '        return {\n' +
          '          top: box.top + window.pageYOffset, // прибавляем прокрутку\n' +
          '          left: box.left + window.pageXOffset // прибавляем прокрутку\n' +
          '        };\n' +
          '      }\n\n' +
          '      let box = document.getElementById("box");\n\n' +
          '      function showCoords() {\n' +
          '        let rect = box.getBoundingClientRect(); // координаты относительно окна\n' +
          '        let docCoords = getCoords(box); // координаты относительно документа\n\n' +
          '        console.log("Относительно окна (top):", rect.top); // меняется при прокрутке\n' +
          '        console.log("Относительно документа (top):", docCoords.top); // не меняется\n' +
          '      }\n' +
          '    </script>\n' +
          '  </body>\n' +
          '</html>',
      },
    ],
  },
};
