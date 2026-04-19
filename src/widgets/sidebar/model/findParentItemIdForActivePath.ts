import type { SidebarItem } from '@/shared/constants/sidebarMenu.ts';

export const findParentItemIdForActivePath = (
  items: SidebarItem[],
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
