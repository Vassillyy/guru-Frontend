export interface IMethod {
  name: string;
  description: string;
  example: string;
  syntax: string;
  parameters?: Array<{
    name: string;
    description: string;
  }>;
  specification: string;
  errors?: string;
}

export type TConfig = {
  [key in Methods]: IMethod[];
};

export enum Methods {
  ARRAY = 'ARRAY',
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  SYMBOL = 'SYMBOL',
  OBJECT = 'OBJECT',
  MAP = 'MAP',
  WEAK_MAP = 'WEAK_MAP',
  SET = 'SET',
  WEAK_SET = 'WEAK_SET',
  MATH = 'MATH',
  DATE = 'DATE',
  JSON = 'JSON',
  PROMISE = 'PROMISE',
  FUNCTION = 'FUNCTION',
  REFLECT = 'REFLECT',
  UTIL = 'UTIL',
}

export const labelMethods = {
  [Methods.ARRAY]: 'Array',
  [Methods.STRING]: 'String',
  [Methods.NUMBER]: 'Number',
  [Methods.OBJECT]: 'Object',
  [Methods.MAP]: 'Map',
  [Methods.WEAK_MAP]: 'WeakMap',
  [Methods.SET]: 'Set',
  [Methods.WEAK_SET]: 'WeakSet',
  [Methods.MATH]: 'Math',
  [Methods.DATE]: 'Date',
  [Methods.JSON]: 'JSON',
  [Methods.PROMISE]: 'Promise',
  [Methods.FUNCTION]: 'Function',
  [Methods.SYMBOL]: 'Symbol',
  [Methods.REFLECT]: 'Reflect',
  [Methods.UTIL]: 'Util',
};
