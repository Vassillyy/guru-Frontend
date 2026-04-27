import type { FC, ReactNode } from 'react';
import styles from './TopicCard.module.css';

interface ITopicCard {
  onClick: () => void;
  children: ReactNode;
}

export const TopicCard: FC<ITopicCard> = ({ onClick, children }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.content}>
        <h3 className={styles.title}>{children}</h3>
      </div>
    </div>
  );
};
