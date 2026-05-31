import { type ITopic } from '@/entities/topic';

export const configPointerEvents: ITopic = {
  value: 'pointer-events',
  name: 'События указателя',
  content: {
    introduction:
      'События указателя (Pointer Events) — современный способ обработки ввода с различных устройств: мыши, пера, сенсорного экрана. Они предоставляют единый набор событий для всех типов указывающих устройств.',
    sections: [
      {
        title: 'Типы событий указателя',
        content:
          'Схема именования событий указателя повторяет события мыши. Для каждого mouse<события> есть соответствующее pointer<событие>:\n' +
          '• pointerdown (mousedown) — указатель нажат\n' +
          '• pointerup (mouseup) — указатель отпущен\n' +
          '• pointermove (mousemove) — движение указателя\n' +
          '• pointerover (mouseover) — указатель зашёл на элемент\n' +
          '• pointerout (mouseout) — указатель покинул элемент\n' +
          '• pointerenter (mouseenter) — указатель вошёл в элемент\n' +
          '• pointerleave (mouseleave) — указатель покинул элемент\n' +
          '• pointercancel — действие прервано браузером\n' +
          '• gotpointercapture — элемент получил захват указателя\n' +
          '• lostpointercapture — элемент потерял захват указателя\n' +
          'Можно заменить mouse<события> на pointer<события> в коде — с мышью всё продолжит работать, а поддержка сенсорных устройств улучшится.',
        addition:
          'Для старых браузеров (IE10, Safari 12 и ниже) может понадобиться полифил. В современных браузерах Pointer Events Level 2 поддерживаются полностью.',
        examples:
          '<button id="btn">Нажми или коснись</button>\n\n' +
          '<script>\n' +
          '  const btn = document.getElementById("btn");\n\n' +
          '  // pointerdown срабатывает при нажатии (мышь, палец, перо)\n' +
          '  btn.addEventListener("pointerdown", () => console.log("pointerdown"));\n' +
          '  // pointerup — при отпускании\n' +
          '  btn.addEventListener("pointerup", () => console.log("pointerup"));\n' +
          '  // click — по-прежнему работает и срабатывает после pointerup\n' +
          '  btn.addEventListener("click", () => console.log("click"));\n' +
          '  // Порядок: pointerdown → pointerup → click\n' +
          '</script>',
      },
      {
        title: 'Свойства событий указателя',
        content:
          'События указателя содержат все свойства событий мыши и несколько дополнительных:\n' +
          '• pointerId — уникальный идентификатор указателя, позволяет обрабатывать мульти-тач\n' +
          '• pointerType — тип устройства: "mouse", "pen" или "touch"\n' +
          '• isPrimary — true для основного указателя (первый палец в мульти-тач)\n' +
          '• width / height — ширина и высота области соприкосновения (для пальца). Для мыши — 1\n' +
          '• pressure — степень давления от 0 до 1. Для устройств без поддержки — 0.5 (нажато) или 0\n' +
          '• tangentialPressure — нормализованное тангенциальное давление\n' +
          '• tiltX, tiltY, twist — свойства пера (наклон и поворот)',
        addition:
          'Свойства width, height, pressure, tangentialPressure, tiltX, tiltY, twist поддерживаются не всеми устройствами и редко используются.',
        examples:
          '<button id="infoBtn">Наведи или нажми</button>\n\n' +
          '<script>\n' +
          '  const btn = document.getElementById("infoBtn");\n\n' +
          '  btn.addEventListener("pointerdown", (event) => {\n' +
          '    const info = [\n' +
          '      `pointerId: ${event.pointerId}`,\n' +
          '      `pointerType: ${event.pointerType}`,\n' +
          '      `isPrimary: ${event.isPrimary}`,\n' +
          '      `pressure: ${event.pressure}`,\n' +
          '      `width: ${event.width}, height: ${event.height}`,\n' +
          '    ];\n' +
          '    console.log(info.join(" | "));\n' +
          '    // Для мыши: pointerId: 1 | pointerType: mouse | isPrimary: true | pressure: 0.5 | width: 1, height: 1\n' +
          '    // Для касания пальцем: pointerType: touch | width: ~30, height: ~30 | pressure: ~0-1 (зависит от силы)\n' +
          '    // При мульти-тач: второй палец будет иметь pointerId: 2, isPrimary: false\n' +
          '  });\n' +
          '</script>',
      },
      {
        title: 'Мульти-тач',
        content:
          'События указателя поддерживают мульти-тач с помощью свойств pointerId и isPrimary:\n' +
          '• При касании первым пальцем: pointerdown с isPrimary=true и уникальным pointerId\n' +
          '• При касании вторым и последующими пальцами: pointerdown с isPrimary=false и своим pointerId для каждого пальца\n' +
          '• pointermove и pointerup для каждого пальца срабатывают с тем же pointerId, который был при pointerdown\n' +
          'События мыши всегда имеют isPrimary=true и один и тот же pointerId.',
        addition:
          'pointerId присваивается не устройству, а каждому касающемуся пальцу. Если коснуться экрана 5 пальцами, будет 5 событий pointerdown с разными pointerId.',
        examples:
          '<script>\n' +
          '  // Отслеживание нескольких касаний\n' +
          '  document.addEventListener("pointerdown", (event) => {\n' +
          '    console.log(\n' +
          '      `Палец ${event.pointerId}: ` +\n' +
          '      `${event.isPrimary ? "основной" : "дополнительный"} ` +\n' +
          '      `на позиции (${event.clientX}, ${event.clientY})`\n' +
          '    );\n' +
          '  });\n' +
          '  // При касании первым пальцем: "Палец 2: основной на позиции (100, 200)"\n' +
          '  // При касании вторым пальцем: "Палец 3: дополнительный на позиции (300, 400)"\n' +
          '</script>',
      },
      {
        title: 'Событие pointercancel',
        content:
          'pointercancel возникает, когда действие с указателем прерывается браузером, и события указателя больше не генерируются:\n' +
          '• Указывающее устройство физически выключено\n' +
          '• Изменилась ориентация устройства\n' +
          "• Браузер решил сам обработать действие (жест масштабирования, встроенный Drag'n'Drop)\n" +
          "Чтобы избежать pointercancel при реализации Drag'n'Drop:\n" +
          "1. Отключить встроенный Drag'n'Drop: elem.ondragstart = () => false\n" +
          '2. Добавить CSS: #elem { touch-action: none } — для сенсорных устройств',
        addition:
          'touch-action в CSS запрещает браузеру обрабатывать жесты (масштабирование, прокрутку) на указанном элементе. Это необходимо для корректной работы перетаскивания на сенсорных экранах.',
        examples:
          '<div id="ball" style="width: 40px; height: 40px; position: absolute; top: 100px; left: 100px; touch-action: none;">\n\n' +
          '<script>\n' +
          '  document.addEventListener("DOMContentLoaded", () => {\n' +
          '    const ball = document.getElementById("ball");\n\n' +
          '    // Без отключения встроенного Drag’n’Drop браузер перехватит перетаскивание и вызовет pointercancel (используется для перетаскивания картинок и ссылок).\n' +
          '    ball.ondragstart = () => false;\n\n' +
          '    ball.addEventListener("pointerdown", () => console.log("pointerdown"));\n' +
          '    ball.addEventListener("pointermove", () => console.log("pointermove"));\n' +
          '    ball.addEventListener("pointerup", () => console.log("pointerup"));\n' +
          '    ball.addEventListener("pointercancel", () => console.log("pointercancel (перехвачено браузером)"));\n' +
          '  });\n' +
          '</script>',
      },
      {
        title: 'Методы: setPointerCapture, releasePointerCapture',
        content:
          'Захват указателя позволяет привязать все последующие события указателя к определённому элементу, независимо от того, где они происходят в документе.\n' +
          '• elem.setPointerCapture(pointerId) — перенаправляет все события с данным pointerId на elem (target становится elem)\n' +
          '• elem.releasePointerCapture(pointerId) — явное освобождение захвата\n' +
          'Привязка автоматически отменяется при pointerup, pointercancel или удалении элемента из документа.\n' +
          "Захват упрощает Drag'n'Drop: не нужно вешать обработчики на document, нет побочных эффектов (другие обработчики pointermove не вызываются случайно).",
        addition:
          'setPointerCapture влияет только на target/currentTarget события. Все остальные свойства остаются корректными.',
        examples:
          '<div id="slider" style="width: 200px; height: 20px; background: #ddd; border-radius: 10px; position: relative;">\n' +
          '  <div id="thumb" style="width: 20px; height: 30px; background: #09f; border-radius: 5px; position: absolute; top: -5px; left: 0;"></div>\n' +
          '</div>\n\n' +
          '<script>\n' +
          '  let thumb = document.getElementById("thumb");\n' +
          '  let slider = document.getElementById("slider");\n\n' +
          '  thumb.addEventListener("pointerdown", (e) => {\n' +
          '    // Захватываем указатель на thumb\n' +
          '    thumb.setPointerCapture(e.pointerId);\n\n' +
          '    function onPointerMove(e) {\n' +
          '      // Даже если курсор улетит за пределы thumb — ползунок продолжит двигаться\n' +
          '      let newLeft = e.clientX - slider.getBoundingClientRect().left;\n' +
          '      newLeft = Math.max(0, Math.min(newLeft, slider.clientWidth - thumb.clientWidth));\n' +
          '      thumb.style.left = newLeft + "px";\n' +
          '    }\n\n' +
          '    thumb.addEventListener("pointermove", onPointerMove);\n' +
          '    thumb.addEventListener("pointerup", () => {\n' +
          '      thumb.removeEventListener("pointermove", onPointerMove);\n' +
          '    }, { once: true });\n' +
          '  });\n' +
          '  // Без setPointerCapture при движении мыши вне thumb — ползунок бы останавливался\n' +
          '</script>',
      },
      {
        title: 'События: gotpointercapture, lostpointercapture',
        content:
          'Два события, связанные с захватом указателя:\n' +
          '• gotpointercapture — срабатывает на элементе, когда setPointerCapture успешно включил захват\n' +
          '• lostpointercapture — срабатывает при освобождении захвата: явно через releasePointerCapture, автоматически при pointerup/pointercancel или удалении элемента из документа',
        addition:
          'Полезны для изменения внешнего вида элемента при захвате (подсветка, курсор) и для отладки.',
        examples:
          '<div id="area" style="width: 100px; height: 100px; background: lightblue; touch-action: none;">\n' +
          '  Захвати меня\n' +
          '</div>\n\n' +
          '<script>\n' +
          '  const area = document.getElementById("area");\n\n' +
          '  // gotpointercapture срабатывает после setPointerCapture\n' +
          '  area.addEventListener("gotpointercapture", () => {\n' +
          '    console.log("gotpointercapture — захват включён");\n' +
          '    area.style.background = "lightgreen"; // подсветка при захвате\n' +
          '  });\n\n' +
          '  // lostpointercapture срабатывает при освобождении захвата (pointerup, releasePointerCapture и т.д.)\n' +
          '  area.addEventListener("lostpointercapture", () => {\n' +
          '    console.log("lostpointercapture — захват снят");\n' +
          '    area.style.background = "lightblue"; // возвращаем цвет\n' +
          '  });\n\n' +
          '  area.addEventListener("pointerdown", (event) => {\n' +
          '    // Включаем захват указателя\n' +
          '    area.setPointerCapture(event.pointerId);\n' +
          '  });\n' +
          '  // Порядок: pointerdown → gotpointercapture → ... → pointerup → lostpointercapture\n' +
          '</script>',
      },
    ],
  },
};
