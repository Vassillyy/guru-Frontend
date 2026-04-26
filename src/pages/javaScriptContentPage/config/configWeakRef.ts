import { type ITopic } from '@/entities/topic';

export const configWeakRef: ITopic = {
  value: 'weakref-finalizationregistry',
  name: 'WeakRef и FinalizationRegistry',
  content: {
    introduction:
      'WeakRef и FinalizationRegistry — это низкоуровневые возможности JavaScript для работы со слабыми ссылками и отслеживания удаления объектов сборщиком мусора. Эти механизмы используются в специфических сценариях оптимизации памяти.',
    sections: [
      {
        title: 'WeakRef (Слабые ссылки)',
        content:
          'WeakRef — это объект, который содержит слабую ссылку на другой объект.\n' +
          'WeakRef создаётся через new WeakRef(target).\n\n' +
          'Для получения целевого объекта используется метод deref():\n' +
          '• Если объект ещё жив в памяти — возвращает его\n' +
          '• Если объект уже удалён сборщиком мусора — возвращает undefined',
        addition:
          '• Сильная ссылка — предотвращает удаление объекта сборщиком мусора\n' +
          '• Слабая ссылка — не препятствует удалению объекта\n' +
          '• Если на объект остались только слабые ссылки, GC может его уничтожить\n' +
          '• deref() — единственный способ получить объект из WeakRef\n' +
          '• WeakRef не гарантирует мгновенного удаления объекта',
        examples:
          '// Сильная ссылка\n' +
          'let user = { name: "John" }; // Объект не будет удалён\n' +
          'user = null; // Теперь объект может быть удалён\n\n' +
          '// Слабая ссылка\n' +
          'let user = { name: "John" };\n' +
          'const weakRef = new WeakRef(user); // Создаём слабую ссылку\n\n' +
          'user = null; // Удаляем сильную ссылку\n\n' +
          '// Пытаемся получить объект\n' +
          'const recovered = weakRef.deref();\n' +
          'if (recovered) {\n' +
          '  console.log("Объект ещё жив:", recovered.name);\n' +
          '} else {\n' +
          '  console.log("Объект уже удалён сборщиком мусора");\n' +
          '}',
      },
      {
        title: 'FinalizationRegistry (Финализаторы)',
        content:
          'FinalizationRegistry — это объект, который позволяет зарегистрировать колбэк (финализатор), вызываемый при удалении объекта сборщиком мусора.\n' +
          'FinalizationRegistry создаётся через new FinalizationRegistry(handler)\n\n' +
          'Методы:\n' +
          '• register(target, heldValue, unregisterToken) — регистрирует объект для отслеживания\n' +
          '• unregister(unregisterToken) — отменяет регистрацию объекта\n\n' +
          'Колбэк handler получает heldValue — значение, переданное при регистрации (не сам объект).',
        addition:
          '• Финализаторы не гарантируют немедленного вызова и не подходят для критической логики\n' +
          '• Объект FinalizationRegistry не блокирует удаление target, но блокирует удаление heldValue\n' +
          '• heldValue останется в памяти до вызова колбэка',
        examples:
          '// Создаём реестр финализаторов\n' +
          'const registry = new FinalizationRegistry((heldValue) => {\n' +
          '  console.log(`Объект "${heldValue}" удалён сборщиком мусора`);\n' +
          '});\n\n' +
          'let user = { name: "John" };\n' +
          'registry.register(user, user.name, user); // Регистрируем\n\n' +
          'user = null; // Удаляем ссылку\n\n' +
          '// Когда сборщик мусора удалит объект,\n' +
          '// в консоль будет выведено: Объект "John" удалён сборщиком мусора\n\n' +
          '// Отмена регистрации до сборки мусора:\n' +
          '// registry.unregister(user);',
      },
    ],
  },
};
