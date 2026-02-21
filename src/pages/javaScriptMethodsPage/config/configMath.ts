import { Methods, type IMethod } from '@/entities/method';

export const configMath: Record<Methods.MATH, IMethod[]> = {
  [Methods.MATH]: [
    {
      name: 'Math.abs()',
      syntax: 'Math.abs(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число, для которого нужно найти абсолютное значение',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает абсолютное значение числа (модуль числа).',
      example:
        'console.log(Math.abs(-5)); // 5\nconsole.log(Math.abs(5)); // 5\nconsole.log(Math.abs(0)); // 0',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.abs',
    },
    {
      name: 'Math.round()',
      syntax: 'Math.round(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число, которое нужно округлить до ближайшего целого',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает число, округлённое до ближайшего целого. Округляет по правилам математического округления (.5 округляется вверх).',
      example:
        'console.log(Math.round(4.2)); // 4\nconsole.log(Math.round(4.7)); // 5\nconsole.log(Math.round(4.5)); // 5 (округляется вверх)\nconsole.log(Math.round(-4.5)); // -4 (округляется вверх)\nconsole.log(Math.round(-4.2)); // -4\nconsole.log(Math.round(-4.7)); // -5',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.round',
    },
    {
      name: 'Math.ceil()',
      syntax: 'Math.ceil(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число, которое нужно округлить вверх',
        },
      ],
      description:
        'Статический метод объекта Math, округляет число вверх до ближайшего целого.',
      example:
        'console.log(Math.ceil(4.2)); // 5\nconsole.log(Math.ceil(4.7)); // 5\nconsole.log(Math.ceil(4.0)); // 4\nconsole.log(Math.ceil(-4.2)); // -4\nconsole.log(Math.ceil(-4.7)); // -4',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.ceil',
    },
    {
      name: 'Math.floor()',
      syntax: 'Math.floor(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число, которое нужно округлить вниз',
        },
      ],
      description:
        'Статический метод объекта Math, округляет число вниз до ближайшего целого.',
      example:
        'console.log(Math.floor(4.2)); // 4\nconsole.log(Math.floor(4.7)); // 4\nconsole.log(Math.floor(4.0)); // 4\nconsole.log(Math.floor(-4.2)); // -5\nconsole.log(Math.floor(-4.7)); // -5',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.floor',
    },
    {
      name: 'Math.trunc()',
      syntax: 'Math.trunc(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число, у которого нужно удалить дробную часть',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает целую часть числа, отбрасывая дробную часть.',
      example:
        'console.log(Math.trunc(4.2)); // 4\nconsole.log(Math.trunc(-4.2)); // -4\nconsole.log(Math.trunc(0.123)); // 0',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.trunc',
    },
    {
      name: 'Math.pow()',
      syntax: 'Math.pow(base, exponent)',
      parameters: [
        {
          name: 'base',
          description: 'Основание степени',
        },
        {
          name: 'exponent',
          description: 'Показатель степени',
        },
      ],
      description:
        'Статический метод объекта Math, возводит основание в указанную степень. Аналог оператора **.',
      example:
        'console.log(Math.pow(2, 3)); // 8\nconsole.log(2 ** 3); // 8 (аналог)\nconsole.log(Math.pow(2, -2)); // 0.25',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.pow',
    },
    {
      name: 'Math.sqrt()',
      syntax: 'Math.sqrt(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число, из которого нужно извлечь квадратный корень',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает квадратный корень числа. Если передан отрицательный аргумент, возвращает NaN.',
      example:
        'console.log(Math.sqrt(16)); // 4\nconsole.log(Math.sqrt(2)); // 1.4142135623730951\nconsole.log(Math.sqrt(0)); // 0\nconsole.log(Math.sqrt(-16)); // NaN',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sqrt',
    },
    {
      name: 'Math.cbrt()',
      syntax: 'Math.cbrt(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число, из которого нужно извлечь кубический корень',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает кубический корень числа.',
      example:
        'console.log(Math.cbrt(27)); // 3\nconsole.log(Math.cbrt(-27)); // -3\nconsole.log(Math.cbrt(0)); // 0',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.cbrt',
    },
    {
      name: 'Math.hypot()',
      syntax: 'Math.hypot([x1[, x2[, ...]]])',
      parameters: [
        {
          name: 'x1, x2, ...',
          description: 'Произвольное количество аргументов',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает квадратный корень из суммы квадратов аргументов (длину гипотенузы).',
      example:
        'console.log(Math.hypot(3, 4)); // 5 (√(3² + 4²))\nconsole.log(Math.hypot(5, 12)); // 13\nconsole.log(Math.hypot(3, 4, 5)); // 7.0710678118654755\nconsole.log(Math.hypot(0, 0)); // 0',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.hypot',
    },
    {
      name: 'Math.exp()',
      syntax: 'Math.exp(x)',
      parameters: [
        {
          name: 'x',
          description: 'Показатель степени для числа e',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает e (число Эйлера, ≈2.718) в степени x.',
      example:
        'console.log(Math.exp(0)); // 1\nconsole.log(Math.exp(1)); // 2.718281828459045\nconsole.log(Math.exp(2)); // 7.38905609893065',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.exp',
    },
    {
      name: 'Math.expm1()',
      syntax: 'Math.expm1(x)',
      parameters: [
        {
          name: 'x',
          description: 'Показатель степени для числа e',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает результат вычисления e^x - 1. Используется для повышения точности вычислений при очень малых значениях x, где обычное вычисление Math.exp(x) - 1 может давать погрешность из-за особенностей представления чисел с плавающей точкой.',
      example:
        'console.log(Math.expm1(0)); // 0\nconsole.log(Math.expm1(1)); // 1.718281828459045\nconsole.log(Math.expm1(0.000001)); // 0.0000010000005000001665',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.expm1',
    },
    {
      name: 'Math.log()',
      syntax: 'Math.log(x)',
      parameters: [
        {
          name: 'x',
          description:
            'Число, для которого нужно вычислить натуральный логарифм',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает натуральный логарифм числа (по основанию e).',
      example:
        'console.log(Math.log(1)); // 0\nconsole.log(Math.log(Math.E)); // 1\nconsole.log(Math.log(10)); // 2.302585092994046\nconsole.log(Math.log(0)); // -Infinity\nconsole.log(Math.log(-1)); // NaN',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.log',
    },
    {
      name: 'Math.log10()',
      syntax: 'Math.log10(x)',
      parameters: [
        {
          name: 'x',
          description:
            'Число, для которого нужно вычислить десятичный логарифм',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает логарифм числа по основанию 10.',
      example:
        'console.log(Math.log10(1)); // 0\nconsole.log(Math.log10(10)); // 1\nconsole.log(Math.log10(100)); // 2',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.log10',
    },
    {
      name: 'Math.log2()',
      syntax: 'Math.log2(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число, для которого нужно вычислить двоичный логарифм',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает логарифм числа по основанию 2.',
      example:
        'console.log(Math.log2(1)); // 0\nconsole.log(Math.log2(2)); // 1\nconsole.log(Math.log2(4)); // 2\nconsole.log(Math.log2(8)); // 3',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.log2',
    },
    {
      name: 'Math.log1p()',
      syntax: 'Math.log1p(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число, для которого нужно вычислить Math.log(1 + x)',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает натуральный логарифм от 1 + x. Обеспечивает высокую точность для очень малых значений x, где обычное вычисление Math.log(1 + x) может давать существенную погрешность из-за потери значащих разрядов при округлении.',
      example:
        'console.log(Math.log1p(0)); // 0\nconsole.log(Math.log1p(1)); // 0.6931471805599453\nconsole.log(Math.log1p(0.0001)); // 0.00009999500033330834',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.log1p',
    },
    {
      name: 'Math.sin()',
      syntax: 'Math.sin(x)',
      parameters: [
        {
          name: 'x',
          description: 'Угол в радианах',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает синус угла (в радианах).',
      example:
        'console.log(Math.sin(0)); // 0\nconsole.log(Math.sin(Math.PI / 2)); // 1\nconsole.log(Math.sin(Math.PI)); // 1.2246467991473532e-16 (≈0)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sin',
    },
    {
      name: 'Math.cos()',
      syntax: 'Math.cos(x)',
      parameters: [
        {
          name: 'x',
          description: 'Угол в радианах',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает косинус угла (в радианах).',
      example:
        'console.log(Math.cos(0)); // 1\nconsole.log(Math.cos(Math.PI / 2)); // 6.123233995736766e-17 (≈0)\nconsole.log(Math.cos(Math.PI)); // -1',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.cos',
    },
    {
      name: 'Math.tan()',
      syntax: 'Math.tan(x)',
      parameters: [
        {
          name: 'x',
          description: 'Угол в радианах',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает тангенс угла (в радианах).',
      example:
        'console.log(Math.tan(0)); // 0\nconsole.log(Math.tan(Math.PI / 4)); // 0.9999999999999999 (≈1)\nconsole.log(Math.tan(Math.PI / 2)); // 1.633123935319537e+16',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.tan',
    },
    {
      name: 'Math.asin()',
      syntax: 'Math.asin(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число от -1 до 1',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает арксинус числа (угол в радианах).',
      example:
        'console.log(Math.asin(0)); // 0\nconsole.log(Math.asin(1)); // 1.5707963267948966 (π/2)\nconsole.log(Math.asin(-1)); // -1.5707963267948966 (-π/2)\nconsole.log(Math.asin(0.5)); // 0.5235987755982989 (π/6)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.asin',
    },
    {
      name: 'Math.acos()',
      syntax: 'Math.acos(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число от -1 до 1',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает арккосинус числа (угол в радианах).',
      example:
        'console.log(Math.acos(0)); // 1.5707963267948966 (π/2)\nconsole.log(Math.acos(1)); // 0\nconsole.log(Math.acos(-1)); // 3.141592653589793 (π)\nconsole.log(Math.acos(0.5)); // 1.0471975511965979 (π/3)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.acos',
    },
    {
      name: 'Math.atan()',
      syntax: 'Math.atan(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число, для которого нужно вычислить арктангенс',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает арктангенс числа (угол в радианах от -π/2 до π/2).',
      example:
        'console.log(Math.atan(0)); // 0\nconsole.log(Math.atan(1)); // 0.7853981633974483 (π/4)\nconsole.log(Math.atan(Infinity)); // 1.5707963267948966 (π/2)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.atan',
    },
    {
      name: 'Math.atan2()',
      syntax: 'Math.atan2(y, x)',
      parameters: [
        {
          name: 'y',
          description: 'Координата по оси Y',
        },
        {
          name: 'x',
          description: 'Координата по оси X',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает угол (в радианах) между положительной осью X и точкой (x, y). Учитывает знаки обоих аргументов для определения квадранта.',
      example:
        'console.log(Math.atan2(0, 1)); // 0\nconsole.log(Math.atan2(1, 0)); // 1.5707963267948966 (π/2)\nconsole.log(Math.atan2(0, -1)); // 3.141592653589793 (π)\nconsole.log(Math.atan2(-1, -1)); // -2.356194490192345 (-3π/4)',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.atan2',
    },
    {
      name: 'Math.sinh()',
      syntax: 'Math.sinh(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число, для вычисления гиперболического синуса',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает гиперболический синус числа.',
      example:
        'console.log(Math.sinh(0)); // 0\nconsole.log(Math.sinh(1)); // 1.1752011936438014\nconsole.log(Math.sinh(-1)); // -1.1752011936438014',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sinh',
    },
    {
      name: 'Math.cosh()',
      syntax: 'Math.cosh(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число, для вычисления гиперболического косинуса',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает гиперболический косинус числа.',
      example:
        'console.log(Math.cosh(0)); // 1\nconsole.log(Math.cosh(1)); // 1.5430806348152437\nconsole.log(Math.cosh(-1)); // 1.5430806348152437',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.cosh',
    },
    {
      name: 'Math.tanh()',
      syntax: 'Math.tanh(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число, для вычисления гиперболического тангенса',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает гиперболический тангенс числа.',
      example:
        'console.log(Math.tanh(0)); // 0\nconsole.log(Math.tanh(1)); // 0.7615941559557649\nconsole.log(Math.tanh(Infinity)); // 1\nconsole.log(Math.tanh(-Infinity)); // -1',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.tanh',
    },
    {
      name: 'Math.asinh()',
      syntax: 'Math.asinh(x)',
      parameters: [
        {
          name: 'x',
          description:
            'Число, для вычисления обратного гиперболического синуса',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает обратный гиперболический синус числа.',
      example:
        'console.log(Math.asinh(0)); // 0\nconsole.log(Math.asinh(1)); // 0.881373587019543\nconsole.log(Math.asinh(-1)); // -0.881373587019543',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.asinh',
    },
    {
      name: 'Math.acosh()',
      syntax: 'Math.acosh(x)',
      parameters: [
        {
          name: 'x',
          description:
            'Число (>= 1), для вычисления обратного гиперболического косинуса',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает обратный гиперболический косинус числа.',
      example:
        'console.log(Math.acosh(1)); // 0\nconsole.log(Math.acosh(2)); // 1.3169578969248166\nconsole.log(Math.acosh(10)); // 2.993222846126381',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.acosh',
    },
    {
      name: 'Math.atanh()',
      syntax: 'Math.atanh(x)',
      parameters: [
        {
          name: 'x',
          description:
            'Число (от -1 до 1), для вычисления обратного гиперболического тангенса',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает обратный гиперболический тангенс числа.',
      example:
        'console.log(Math.atanh(0)); // 0\nconsole.log(Math.atanh(0.5)); // 0.5493061443340548\nconsole.log(Math.atanh(-0.5)); // -0.5493061443340548',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.atanh',
    },
    {
      name: 'Math.sign()',
      syntax: 'Math.sign(x)',
      parameters: [
        {
          name: 'x',
          description: 'Число, для которого нужно определить знак',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает знак числа: -1 (отрицательное), 0 (ноль), 1 (положительное). Для -0 возвращает -0, для NaN — NaN.',
      example:
        'console.log(Math.sign(10)); // 1\nconsole.log(Math.sign(-5)); // -1\nconsole.log(Math.sign(0)); // 0\nconsole.log(Math.sign(-0)); // -0\nconsole.log(Math.sign(NaN)); // NaN',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sign',
    },
    {
      name: 'Math.random()',
      syntax: 'Math.random()',
      description:
        'Статический метод объекта Math, возвращает псевдослучайное число с плавающей точкой в диапазоне от 0 до 1 (не включая).',
      example:
        '// Случайное число от 0 до 1\nconsole.log(Math.random()); // Например 0.123456789',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.random',
    },
    {
      name: 'Math.max()',
      syntax: 'Math.max([value1[, value2[, ...]]])',
      parameters: [
        {
          name: 'value1, value2, ...',
          description: 'Произвольное количество чисел',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает наибольшее из переданных чисел. Если аргументы не переданы, возвращает -Infinity.',
      example:
        'console.log(Math.max(10, 5, 20)); // 20\nconsole.log(Math.max(-10, -5, -20)); // -5\nconsole.log(Math.max()); // -Infinity',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.max',
    },
    {
      name: 'Math.min()',
      syntax: 'Math.min([value1[, value2[, ...]]])',
      parameters: [
        {
          name: 'value1, value2, ...',
          description: 'Произвольное количество чисел',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает наименьшее из переданных чисел. Если аргументы не переданы, возвращает Infinity.',
      example:
        'console.log(Math.min(10, 5, 20)); // 5\nconsole.log(Math.min(-10, -5, -20)); // -20\nconsole.log(Math.min()); // Infinity',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.min',
    },
    {
      name: 'Math.E',
      syntax: 'Math.E',
      description:
        'Статическое свойство объекта Math, представляет число Эйлера (основание натуральных логарифмов), приблизительно равное 2.718281828459045.',
      example: 'console.log(Math.E); // 2.718281828459045',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.e',
    },
    {
      name: 'Math.PI',
      syntax: 'Math.PI',
      description:
        'Статическое свойство объекта Math, представляет число π (отношение длины окружности к диаметру), приблизительно равное 3.141592653589793.',
      example: 'console.log(Math.PI); // 3.141592653589793',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.pi',
    },
    {
      name: 'Math.LN10',
      syntax: 'Math.LN10',
      description:
        'Статическое свойство объекта Math, представляет натуральный логарифм 10, приблизительно равный 2.302585092994046.',
      example: 'console.log(Math.LN10); // 2.302585092994046',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.ln10',
    },
    {
      name: 'Math.LN2',
      syntax: 'Math.LN2',
      description:
        'Статическое свойство объекта Math, представляет натуральный логарифм 2, приблизительно равный 0.6931471805599453.',
      example: 'console.log(Math.LN2); // 0.6931471805599453',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.ln2',
    },
    {
      name: 'Math.LOG10E',
      syntax: 'Math.LOG10E',
      description:
        'Статическое свойство объекта Math, представляет логарифм e по основанию 10, приблизительно равный 0.4342944819032518.',
      example: 'console.log(Math.LOG10E); // 0.4342944819032518',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.log10e',
    },
    {
      name: 'Math.LOG2E',
      syntax: 'Math.LOG2E',
      description:
        'Статическое свойство объекта Math, представляет логарифм e по основанию 2, приблизительно равный 1.4426950408889634.',
      example: 'console.log(Math.LOG2E); // 1.4426950408889634',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.log2e',
    },
    {
      name: 'Math.SQRT1_2',
      syntax: 'Math.SQRT1_2',
      description:
        'Статическое свойство объекта Math, представляет квадратный корень из 1/2 (или 1/√2), приблизительно равный 0.7071067811865476.',
      example: 'console.log(Math.SQRT1_2); // 0.7071067811865476',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sqrt1_2',
    },
    {
      name: 'Math.SQRT2',
      syntax: 'Math.SQRT2',
      description:
        'Статическое свойство объекта Math, представляет квадратный корень из 2, приблизительно равный 1.4142135623730951.',
      example: 'console.log(Math.SQRT2); // 1.4142135623730951',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sqrt2',
    },
    {
      name: 'Math.clz32()',
      syntax: 'Math.clz32(x)',
      parameters: [
        {
          name: 'x',
          description:
            'Число, которое будет приведено к 32-битному целому без знака',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает количество ведущих нулей в 32-битном двоичном представлении числа (count leading zeros).',
      example:
        'console.log(Math.clz32(1)); // 31\nconsole.log(Math.clz32(2)); // 30\nconsole.log(Math.clz32(4)); // 29\nconsole.log(Math.clz32(0)); // 32',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.clz32',
    },
    {
      name: 'Math.imul()',
      syntax: 'Math.imul(a, b)',
      parameters: [
        {
          name: 'a',
          description: 'Первый множитель',
        },
        {
          name: 'b',
          description: 'Второй множитель',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает результат умножения двух чисел как 32-битных целых со знаком. Результат тоже является 32-битным целым. Если результат превышает 32-битный диапазон (-2^31 до 2^31 - 1), происходит переполнение, и возвращается значение с учётом этого ограничения.',
      example:
        'console.log(Math.imul(2, 3)); // 6\nconsole.log(Math.imul(0xffffffff, 5)); // -5',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.imul',
    },
    {
      name: 'Math.fround()',
      syntax: 'Math.fround(x)',
      parameters: [
        {
          name: 'x',
          description:
            'Число, которое будет преобразовано в 32-битное представление с плавающей точкой',
        },
      ],
      description:
        'Статический метод объекта Math, возвращает ближайшее 32-битное представление числа с плавающей точкой.',
      example:
        'console.log(Math.fround(0.1)); // 0.10000000149011612\nconsole.log(Math.fround(1.0)); // 1\nconsole.log(Math.fround(1.337)); // 1.3370000123977661',
      specification:
        'https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.fround',
    },
  ],
};
