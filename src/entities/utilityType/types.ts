export enum UtilityCategory {
  OBJECT = 'object',
  UNION = 'union',
  FUNCTION = 'function',
  STRING = 'string',
  ADVANCED = 'advanced',
}

export const labelUtilityCategory: Record<UtilityCategory, string> = {
  [UtilityCategory.OBJECT]: 'Объекты',
  [UtilityCategory.UNION]: 'Объединения',
  [UtilityCategory.FUNCTION]: 'Функции',
  [UtilityCategory.STRING]: 'Строки',
  [UtilityCategory.ADVANCED]: 'Продвинутые',
};

export interface IUtilityType {
  name: string;
  description: string;
  signature: string;
  example: string;
  syntaxBreakdown: ISyntaxBreakdownItem[];
}

export interface ISyntaxBreakdownItem {
  code: string;
  description: string;
}
