import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import { NAV_ITEMS, findParentItemIdForActivePath } from '../model';
import { NavItem } from './navItem/NavItem.tsx';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
  const location = useLocation();
  const [expandedItemId, setExpandedItemId] = useState<string | null>(() => {
    return findParentItemIdForActivePath(NAV_ITEMS, location.pathname);
  });
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleItem = (itemId: string) => {
    setExpandedItemId((prev) => (prev === itemId ? null : itemId));
  };

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className={cn(styles.sidebar, isCollapsed && styles.hiddenSidebar)}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          {!isCollapsed && <h2 className={styles.title}>Навигация</h2>}
          <button className={styles.collapseButton} onClick={toggleSidebar}>
            {isCollapsed ? '→' : '←'}
          </button>
        </div>
        {!isCollapsed && <p className={styles.subtitle}>Выберите раздел</p>}
      </div>

      {!isCollapsed && (
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => {
              const itemHasChildren = item.children && item.children.length > 0;
              const isExpanded = item.id ? expandedItemId === item.id : false;

              return (
                <li key={item.path || item.id} className={styles.navItem}>
                  <NavItem
                    to={item.path}
                    isActive={isActive(item.path)}
                    hasChildren={itemHasChildren}
                    isExpanded={isExpanded}
                    onClick={
                      itemHasChildren ? () => toggleItem(item.id!) : undefined
                    }
                  >
                    {item.label}
                  </NavItem>

                  {itemHasChildren && isExpanded && item.children && (
                    <ul className={styles.childrenList}>
                      {item.children.map((child) => (
                        <li key={child.path} className={styles.navItem}>
                          <NavItem
                            to={child.path}
                            isActive={isActive(child.path)}
                            variant="nested"
                          >
                            {child.label}
                          </NavItem>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
};
