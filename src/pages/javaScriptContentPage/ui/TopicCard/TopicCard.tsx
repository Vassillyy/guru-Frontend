import { type FC } from 'react';
import { type ITopic } from '@/entities/topic';
import styles from './TopicCard.module.css';

interface ITopicCardProps {
  section: ITopic & { topicLabel?: string };
  onClick: () => void;
}

export const TopicCard: FC<ITopicCardProps> = ({ section, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.content}>
        <h3 className={styles.title}>{section.name}</h3>
      </div>
    </div>
  );
};
