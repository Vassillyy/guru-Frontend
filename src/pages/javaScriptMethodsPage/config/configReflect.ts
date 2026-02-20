import { Methods, type IMethod } from '@/entities/method';

export const configReflect: Record<Methods.REFLECT, IMethod[]> = {
  [Methods.REFLECT]: [
    {
      name: 'Reflect.ownKeys()',
      syntax: 'Reflect.ownKeys(obj)',
      parameters: [
        {
          name: 'obj',
          description: 'Объект, все собственные ключи которого нужно получить',
        },
      ],
      description:
        'Статический метод объекта Reflect, возвращает массив всех собственных ключей указанного объекта, как перечисляемых, так и неперечисляемых.',
      example:
        "const sym = Symbol('id');\nconst obj = { a: 1, b: 2, [sym]: 3 };\nconst keys = Reflect.ownKeys(obj);\nconsole.log(keys); // ['a', 'b', Symbol(id)]",
      specification:
        'https://tc39.es/ecma262/multipage/reflect-object.html#sec-reflect.ownkeys',
      errors: 'TypeError — если аргумент (obj) не является объектом.',
    },
  ],
};
