import { type IUtilityType, UtilityCategory } from '@/entities/utilityType';

export const config: Record<UtilityCategory, IUtilityType[]> = {
  [UtilityCategory.OBJECT]: [
    {
      name: 'Partial<T>',
      description:
        'Утилитарный тип, создает на основе T новый тип, где все свойства помечены как опциональные.',
      signature: 'type Partial<T> \u003D { [P in keyof T]?: T[P] }',
      example:
        'interface User {\n  id: number;\n  name: string;\n}\n\ntype PartialUser = Partial<User>;\n// { id?: number; name?: string }',
      syntaxBreakdown: [
        { code: '{ ... }', description: 'Создание объектного типа' },
        {
          code: '[P in keyof T]',
          description: 'Перебирает все ключи из типа T',
        },
        {
          code: 'P',
          description: 'Текущий ключ из типа T на каждой итерации',
        },
        {
          code: 'keyof T',
          description: 'Все ключи типа T в виде объединения (union)',
        },
        {
          code: '?:',
          description: 'Делает свойство необязательным',
        },
        {
          code: 'T[P]',
          description: 'Тип значения свойства с ключом P из типа T',
        },
      ],
    },
    {
      name: 'Required<T>',
      description:
        'Утилитарный тип, создает на основе T новый тип, где все свойства становятся обязательными.',
      signature: 'type Required<T> \u003D { [P in keyof T]-?: T[P] }',
      example:
        'interface User {\n  id?: number;\n  name?: string;\n}\n\ntype RequiredUser = Required<User>;\n// { id: number; name: string }',
      syntaxBreakdown: [
        { code: '{ ... }', description: 'Создание объектного типа' },
        {
          code: '[P in keyof T]',
          description: 'Перебирает все ключи из типа T',
        },
        {
          code: 'P',
          description: 'Текущий ключ из типа T на каждой итерации',
        },
        {
          code: 'keyof T',
          description: 'Все ключи типа T в виде объединения (union)',
        },
        {
          code: '-?',
          description: 'Модификатор обязательности — убирает опциональность',
        },
        {
          code: 'T[P]',
          description: 'Тип значения свойства с ключом P из типа T',
        },
      ],
    },
    {
      name: 'Readonly<T>',
      description:
        'Утилитарный тип, создает на основе T новый тип, где все свойства становятся доступными только для чтения.',
      signature: 'type Readonly<T> \u003D { readonly [P in keyof T]: T[P] }',
      example:
        'interface User {\n  id: number;\n  name: string;\n}\n\ntype ReadonlyUser = Readonly<User>;\n// { readonly id: number; readonly name: string }',
      syntaxBreakdown: [
        { code: '{ ... }', description: 'Создание объектного типа' },
        {
          code: '[P in keyof T]',
          description: 'Перебирает все ключи из типа T',
        },
        {
          code: 'P',
          description: 'Текущий ключ из типа T на каждой итерации',
        },
        {
          code: 'keyof T',
          description: 'Все ключи типа T в виде объединения (union)',
        },
        {
          code: 'readonly',
          description:
            'Модификатор, запрещающий изменение значения свойства после инициализации',
        },
        {
          code: 'T[P]',
          description: 'Тип значения свойства с ключом P из типа T',
        },
      ],
    },
    {
      name: 'Pick<T, K>',
      description:
        'Утилитарный тип, создает на основе T новый тип, выбирая только указанные свойства K из T.',
      signature: 'type Pick<T, K extends keyof T> \u003D { [P in K]: T[P] }',
      example:
        'interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\ntype UserPreview = Pick<User, "id" | "name">;\n// { id: number; name: string }',
      syntaxBreakdown: [
        { code: '{ ... }', description: 'Создание объектного типа' },
        {
          code: 'K extends keyof T',
          description: 'Ограничение: K должен быть ключом из T',
        },
        {
          code: '[P in K]',
          description: 'Перебирает только указанные ключи K',
        },
        {
          code: 'P',
          description: 'Текущий ключ из набора K на каждой итерации',
        },
        {
          code: 'T[P]',
          description: 'Тип значения свойства с ключом P из типа T',
        },
      ],
    },
    {
      name: 'Omit<T, K>',
      description:
        'Утилитарный тип, создает на основе T новый тип, исключая указанные свойства K из T.',
      signature:
        'type Omit<T, K extends keyof any> \u003D Pick<T, Exclude<keyof T, K>>',
      example:
        'interface User {\n  id: number;\n  name: string;\n  password: string;\n}\n\ntype UserWithoutPassword = Omit<User, "password">;\n// { id: number; name: string }',
      syntaxBreakdown: [
        {
          code: 'K extends keyof any',
          description:
            'Ограничение: K может быть любым строковым или числовым ключом',
        },
        {
          code: 'keyof T',
          description: 'Все ключи типа T',
        },
        {
          code: 'Exclude<keyof T, K>',
          description: 'Исключает указанные ключи K из набора ключей T',
        },
        {
          code: 'Pick<T, ...>',
          description: 'Выбирает оставшиеся ключи из T',
        },
      ],
    },
    {
      name: 'Record<K, T>',
      description:
        'Утилитарный тип, создает тип объекта, где ключами являются значения из K, а значения свойств имеют тип T.',
      signature: 'type Record<K extends keyof any, T> \u003D { [P in K]: T }',
      example:
        'type Roles = "admin" | "user" | "guest";\n\ntype RoleDescriptions = Record<Roles, string>;\n// { admin: string; user: string; guest: string }',
      syntaxBreakdown: [
        {
          code: 'K extends keyof any',
          description: 'Ограничение: K может быть строкой, числом или символом',
        },
        {
          code: '[P in K]',
          description: 'Перебирает все значения из объединения K',
        },
        {
          code: 'P',
          description: 'Текущий ключ из набора K на каждой итерации',
        },
        {
          code: 'T',
          description: 'Тип значения для каждого свойства',
        },
      ],
    },
    {
      name: 'ThisType<T>',
      description:
        'Утилитарный тип, который не возвращает новый тип, а служит маркером для контекста this в объектных литералах. Используется в сочетании с опцией компилятора noImplicitThis.',
      signature: 'type ThisType<T> \u003D intrinsic',
      example:
        'type Logger = { log: (msg: string) => void };\n\nconst obj: ThisType<Logger> & { foo: string } = {\n  foo: "hello",\n  bar() {\n    this.log(this.foo); // this имеет тип Logger\n  }\n};',
      syntaxBreakdown: [
        {
          code: 'intrinsic',
          description:
            'Встроенная реализация компилятора TypeScript (не может быть реализована пользователем)',
        },
      ],
    },
  ],
  [UtilityCategory.UNION]: [
    {
      name: 'Exclude<T, U>',
      description:
        'Утилитарный тип, создает новый тип на основе T, исключая из объединения все члены, которые можно присвоить U.',
      signature: 'type Exclude<T, U> \u003D T extends U ? never : T',
      example:
        'type T = "a" | "b" | "c" | "d";\n\ntype Result = Exclude<T, "c" | "d">;\n// "a" | "b"',
      syntaxBreakdown: [
        {
          code: 'T extends U',
          description: 'Проверяет, можно ли присвоить тип T типу U',
        },
        {
          code: '? never : T',
          description: 'Если T присваивается U — исключаем, иначе оставляем T',
        },
        {
          code: 'never',
          description:
            'Тип, который никогда не должен существовать (исключается из объединения)',
        },
      ],
    },
    {
      name: 'Extract<T, U>',
      description:
        'Утилитарный тип, создает новый тип на основе T, оставляя в объединении только те члены, которые можно присвоить U.',
      signature: 'type Extract<T, U> \u003D T extends U ? T : never',
      example:
        'type T = "a" | "b" | "c" | "d" | 1 | 2;\n\ntype Result = Extract<T, string>;\n// "c" | "d"',
      syntaxBreakdown: [
        {
          code: 'T extends U',
          description: 'Проверяет, можно ли присвоить тип T типу U',
        },
        {
          code: '? T : never',
          description:
            'Если T присваивается U — оставляем T, иначе исключаем (never)',
        },
        {
          code: 'never',
          description:
            'Тип, который никогда не должен существовать (исключается из объединения)',
        },
      ],
    },
    {
      name: 'NonNullable<T>',
      description:
        'Утилитарный тип, создает новый тип на основе T, исключая из объединения значения null и undefined.',
      signature: 'type NonNullable<T> \u003D T & {}',
      example:
        'type T = string | null | undefined;\n\ntype Result = NonNullable<T>;\n// string',
      syntaxBreakdown: [
        {
          code: 'T & {}',
          description:
            'Пересечение типа T с пустым объектом, которое отсеивает null и undefined',
        },
        {
          code: '&',
          description: 'Оператор пересечения типов (intersection)',
        },
        {
          code: '{}',
          description:
            'Пустой объектный тип, который несовместим с null и undefined',
        },
      ],
    },
  ],
  [UtilityCategory.FUNCTION]: [
    {
      name: 'Parameters<T>',
      description:
        'Утилитарный тип, извлекает типы параметров функции T и возвращает их в виде кортежа.',
      signature:
        'type Parameters<T extends (...args: any) => any> \u003D T extends (...args: infer P) => any ? P : never',
      example:
        'type Fn = (a: string, b: number) => boolean;\n\ntype Params = Parameters<Fn>;\n// [string, number]',
      syntaxBreakdown: [
        {
          code: 'T extends (...args: any) => any',
          description: 'Ограничение: T должен быть функцией',
        },
        {
          code: 'infer P',
          description: 'Захватывает типы параметров функции в выводной тип P',
        },
        {
          code: '? P : never',
          description:
            'Если T — функция, возвращает кортеж с типами параметров P, иначе never',
        },
        {
          code: 'never',
          description:
            'Тип, который никогда не должен существовать (для невалидных случаев)',
        },
      ],
    },
    {
      name: 'ReturnType<T>',
      description:
        'Утилитарный тип, извлекает тип возвращаемого значения функции T.',
      signature:
        'type ReturnType<T extends (...args: any) => any> \u003D T extends (...args: any) => infer R ? R : any',
      example:
        'type Fn = (a: string) => boolean;\n\ntype Result = ReturnType<Fn>;\n// boolean',
      syntaxBreakdown: [
        {
          code: 'T extends (...args: any) => any',
          description: 'Ограничение: T должен быть функцией',
        },
        {
          code: 'infer R',
          description: 'Захватывает возвращаемый тип функции в выводной тип R',
        },
        {
          code: '? R : any',
          description: 'Если T — функция, возвращает тип R, иначе any',
        },
      ],
    },
    {
      name: 'ConstructorParameters<T>',
      description:
        'Утилитарный тип, извлекает типы параметров конструктора класса T и возвращает их в виде кортежа.',
      signature:
        'type ConstructorParameters<T extends abstract new (...args: any) => any> \u003D T extends abstract new (...args: infer P) => any ? P : never',
      example:
        'class User {\n  constructor(public id: number, public name: string) {}\n}\n\ntype Params = ConstructorParameters<typeof User>;\n// [number, string]',
      syntaxBreakdown: [
        {
          code: 'T extends abstract new (...args: any) => any',
          description:
            'Ограничение: T должен быть конструктором класса (абстрактным или нет)',
        },
        {
          code: 'infer P',
          description:
            'Захватывает типы параметров конструктора в выводной тип P',
        },
        {
          code: '? P : never',
          description:
            'Если T — конструктор, возвращает кортеж с типами параметров P, иначе never',
        },
        {
          code: 'abstract',
          description:
            'Ключевое слово, указывающее, что конструктор может быть абстрактным',
        },
      ],
    },
    {
      name: 'InstanceType<T>',
      description:
        'Утилитарный тип, извлекает тип экземпляра, создаваемого конструктором класса T.',
      signature:
        'type InstanceType<T extends abstract new (...args: any) => any> \u003D T extends abstract new (...args: any) => infer R ? R : any',
      example:
        'class User {\n  constructor(public id: number, name: string) {}\n}\n\ntype UserInstance = InstanceType<typeof User>;\n// User',
      syntaxBreakdown: [
        {
          code: 'T extends abstract new (...args: any) => any',
          description:
            'Ограничение: T должен быть конструктором класса (абстрактным или нет)',
        },
        {
          code: 'infer R',
          description:
            'Захватывает тип экземпляра, создаваемого конструктором, в выводной тип R',
        },
        {
          code: '? R : any',
          description:
            'Если T — конструктор, возвращает тип экземпляра R, иначе any',
        },
        {
          code: 'abstract',
          description:
            'Ключевое слово, указывающее, что конструктор может быть абстрактным',
        },
      ],
    },
    {
      name: 'ThisParameterType<T>',
      description:
        'Утилитарный тип, извлекает тип параметра this из функции T, если он объявлен. Если функция не имеет явного this, возвращает unknown.',
      signature:
        'type ThisParameterType<T> \u003D T extends (this: infer U, ...args: never) => any ? U : unknown',
      example:
        'function toHex(this: Number) {\n  return this.toString(16);\n}\n\ntype ThisParam = ThisParameterType<typeof toHex>;\n// Number',
      syntaxBreakdown: [
        {
          code: 'this: infer U',
          description: 'Захватывает тип параметра this в выводной тип U',
        },
        {
          code: '...args: never',
          description: 'Игнорирует остальные параметры функции',
        },
        {
          code: '? U : unknown',
          description: 'Если this объявлен — возвращает U, иначе unknown',
        },
      ],
    },
    {
      name: 'OmitThisParameter<T>',
      description:
        'Утилитарный тип, удаляет параметр this из типа функции T, возвращая тип функции без него.',
      signature:
        'type OmitThisParameter<T> \u003D unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T',
      example:
        'function toHex(this: Number) {\n  return this.toString(16);\n}\n\ntype WithoutThis = OmitThisParameter<typeof toHex>;\n// () => string',
      syntaxBreakdown: [
        {
          code: 'ThisParameterType<T>',
          description: 'Проверяет, есть ли у функции параметр this',
        },
        {
          code: '(...args: infer A) => infer R',
          description: 'Захватывает остальные параметры и возвращаемый тип',
        },
        {
          code: '(...args: A) => R',
          description: 'Возвращает функцию без параметра this',
        },
      ],
    },
  ],
  [UtilityCategory.STRING]: [
    {
      name: 'Uppercase<S>',
      description:
        'Утилитарный тип, преобразует все символы строкового типа S в верхний регистр.',
      signature: 'type Uppercase<S extends string> \u003D intrinsic',
      example: 'type T = "hello";\n\ntype Result = Uppercase<T>;\n// "HELLO"',
      syntaxBreakdown: [
        {
          code: 'S extends string',
          description: 'Ограничение: S должен быть строковым типом',
        },
        {
          code: 'intrinsic',
          description:
            'Встроенная реализация компилятора TypeScript (не может быть реализована пользователем)',
        },
      ],
    },
    {
      name: 'Lowercase<S>',
      description:
        'Утилитарный тип, преобразует все символы строкового типа S в нижний регистр.',
      signature: 'type Lowercase<S extends string> \u003D intrinsic',
      example: 'type T = "HELLO";\n\ntype Result = Lowercase<T>;\n// "hello"',
      syntaxBreakdown: [
        {
          code: 'S extends string',
          description: 'Ограничение: S должен быть строковым типом',
        },
        {
          code: 'intrinsic',
          description:
            'Встроенная реализация компилятора TypeScript (не может быть реализована пользователем)',
        },
      ],
    },
    {
      name: 'Capitalize<S>',
      description:
        'Утилитарный тип, преобразует первый символ строкового типа S в верхний регистр, остальные символы оставляет без изменений.',
      signature: 'type Capitalize<S extends string> \u003D intrinsic',
      example: 'type T = "hello";\n\ntype Result = Capitalize<T>;\n// "Hello"',
      syntaxBreakdown: [
        {
          code: 'S extends string',
          description: 'Ограничение: S должен быть строковым типом',
        },
        {
          code: 'intrinsic',
          description:
            'Встроенная реализация компилятора TypeScript (не может быть реализована пользователем)',
        },
      ],
    },
    {
      name: 'Uncapitalize<S>',
      description:
        'Утилитарный тип, преобразует первый символ строкового типа S в нижний регистр, остальные символы оставляет без изменений.',
      signature: 'type Uncapitalize<S extends string> \u003D intrinsic',
      example:
        'type T = "Hello";\n\ntype Result = Uncapitalize<T>;\n// "hello"',
      syntaxBreakdown: [
        {
          code: 'S extends string',
          description: 'Ограничение: S должен быть строковым типом',
        },
        {
          code: 'intrinsic',
          description:
            'Встроенная реализация компилятора TypeScript (не может быть реализована пользователем)',
        },
      ],
    },
  ],
  [UtilityCategory.ADVANCED]: [
    {
      name: 'Awaited<T>',
      description:
        'Утилитарный тип, рекурсивно разворачивает вложенные Promise-типы и возвращает тип итогового значения, которое будет получено после разрешения всех промисов.',
      signature:
        'type Awaited<T> \u003D T extends null | undefined ? T : T extends object & { then(onfulfilled: infer F): any } ? F extends (value: infer V, ...args: any) => any ? Awaited<V> : never : T',
      example:
        'type P = Promise<Promise<string>>;\n\ntype Result = Awaited<P>;\n// string',
      syntaxBreakdown: [
        {
          code: 'T extends null | undefined',
          description:
            'Если T — null или undefined, возвращает T без изменений',
        },
        {
          code: 'T extends object & { then(onfulfilled: infer F): any }',
          description:
            'Проверяет, является ли T thenable-объектом (например, Promise) и захватывает функцию обработчика F',
        },
        {
          code: 'infer F',
          description: 'Захватывает тип функции-обработчика onfulfilled',
        },
        {
          code: 'F extends (value: infer V, ...args: any) => any',
          description:
            'Проверяет, что F — функция, и захватывает тип её первого параметра V',
        },
        {
          code: 'Awaited<V>',
          description: 'Рекурсивно разворачивает полученный тип V',
        },
        {
          code: 'never',
          description: 'Возвращается, если структура не соответствует thenable',
        },
      ],
    },
    {
      name: 'NoInfer<T>',
      description:
        'Утилитарный тип, блокирует автоматический вывод (inference) типа T компилятором TypeScript. Используется для ограничения вывода в обобщенных функциях, чтобы тип определялся только по определенным аргументам.',
      signature: 'type NoInfer<T> \u003D T & {}',
      example:
        'function fn<T>(a: T, b: NoInfer<T>) {}\n\n// T выводится из первого аргумента\nfn(1, 2);\n// ✅ (T = number)\nfn(1, "2");\n// ❌ (T = number, но второй аргумент не number)',
      syntaxBreakdown: [
        {
          code: 'T & {}',
          description:
            'Пересечение типа T с пустым объектом, которое "прячет" T от механизма вывода типов',
        },
        {
          code: '&',
          description: 'Оператор пересечения типов (intersection)',
        },
        {
          code: '{}',
          description:
            'Пустой объектный тип, который создает контекст, не влияющий на вывод',
        },
      ],
    },
    {
      name: 'ReadonlyArray<T>',
      description:
        'Утилитарный тип, создает неизменяемый массив, где все методы, изменяющие массив, недоступны. Элементы массива доступны только для чтения.',
      signature: 'interface ReadonlyArray<T> { ... }',
      example:
        'const arr: ReadonlyArray<number> = [1, 2, 3];\n\narr[0] = 10;// ❌ Ошибка!\narr.push(4); // ❌ Ошибка!\nconsole.log(arr.map(x => x * 2)); // ✅ [2, 4, 6]',
      syntaxBreakdown: [
        {
          code: 'ReadonlyArray<T>',
          description: 'Тип массива, доступного только для чтения',
        },
        {
          code: 'T',
          description: 'Тип элементов массива',
        },
      ],
    },
  ],
};
