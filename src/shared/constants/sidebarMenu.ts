import { AppPaths } from './route.ts';

export interface SidebarItem {
  label: string;
  path: string;
  id?: string;
  children?: SidebarItem[];
}

export const sidebarMenu: SidebarItem[] = [
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
    path: '#',
    id: 'type-script',
    label: 'Type Script',
    children: [
      {
        path: AppPaths.TYPE_SCRIPT_UTILITY_TYPES,
        label: 'Utility Types',
      },
    ],
  },
];
