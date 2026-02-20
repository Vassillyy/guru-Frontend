import { AppPaths } from '@/shared/constants/route';

export interface NavItem {
  label: string;
  path: string;
  id?: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    path: AppPaths.MAIN,
    label: 'Главная страница',
  },
  {
    path: '#',
    id: 'java-script',
    label: 'Java Script',
    children: [
      {
        path: AppPaths.JAVA_SCRIPT,
        label: 'Руководство',
      },
      {
        path: AppPaths.JAVA_SCRIPT_METHODS,
        label: 'API',
      },
    ],
  },
  {
    path: AppPaths.TYPE_SCRIPT,
    label: 'TypeScript',
  },
];

/** Находит идентификатор родительского элемента для указанного пути */
export const findParentItemIdForActivePath = (
  items: NavItem[],
  currentPath: string,
) => {
  for (const item of items) {
    if (item.path === currentPath) return item.id || null;

    if (item.children && item.children.length > 0) {
      for (const child of item.children) {
        if (child.path === currentPath) return item.id || null;
      }
    }
  }

  return null;
};
