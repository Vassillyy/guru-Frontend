import type { ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import cn from 'classnames';
import { ShortArrow } from '@/shared/ui';
import styles from './NavItem.module.css';

interface INavItem extends Omit<LinkProps, 'to'> {
  to: string;
  children: ReactNode;
  isActive?: boolean;
  variant?: 'default' | 'nested';
  hasChildren?: boolean;
  isExpanded?: boolean;
  onClick?: () => void;
}

export const NavItem = ({
  to,
  children,
  isActive = false,
  variant = 'default',
  hasChildren = false,
  isExpanded = false,
  onClick,
  ...props
}: INavItem) => {
  return (
    <Link
      to={to}
      className={cn(styles.navItem, styles[variant], isActive && styles.active)}
      onClick={onClick}
      {...props}
    >
      <span className={styles.content}>
        {children}
        {hasChildren && <ShortArrow isOpen={isExpanded} />}
      </span>
    </Link>
  );
};
