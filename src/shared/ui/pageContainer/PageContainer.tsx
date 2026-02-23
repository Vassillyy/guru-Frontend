import type { FC, ReactNode } from 'react';
import styles from './PageContainer.module.css';

interface IPageContainerProps {
  title: string;
  children: ReactNode;
  filtersSlot?: ReactNode;
}

export const PageContainer: FC<IPageContainerProps> = ({
  title,
  filtersSlot,
  children,
}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>

      {filtersSlot}

      <div className={styles.content}>{children}</div>
    </div>
  );
};
