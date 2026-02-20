import type { ReactNode, MouseEvent as ReactMouseEvent } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import cn from 'classnames';
import { IconArrow } from '@/shared/ui';
import styles from './NavItem.module.css';

interface INavItemProps extends Omit<LinkProps, 'to'> {
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
}: INavItemProps) => {
  const handleClick = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link
      to={to}
      className={cn(
        styles.navItem,
        styles[variant],
        isActive && styles.active,
        hasChildren && styles.hasChildren,
      )}
      onClick={handleClick}
      {...props}
    >
      <span className={styles.content}>
        {children}
        {hasChildren && <IconArrow isOpen={isExpanded} />}
      </span>
    </Link>
  );
};
