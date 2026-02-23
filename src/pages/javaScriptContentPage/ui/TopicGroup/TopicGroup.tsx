import { type FC } from 'react';
import { type ITopic, type Topics } from '@/entities/topic';
import { IconArrow } from '@/shared/ui';
import styles from './TopicGroup.module.css';

interface ITopicGroupProps {
  topicKey: Topics;
  topicLabel: string;
  sections: ITopic[];
  isExpanded: boolean;
  onToggle: () => void;
  onSectionClick: (section: ITopic) => void;
}

export const TopicGroup: FC<ITopicGroupProps> = ({
  topicKey,
  topicLabel,
  sections,
  isExpanded,
  onToggle,
  onSectionClick,
}) => {
  return (
    <div key={topicKey} className={styles.container}>
      <div className={styles.header} onClick={onToggle}>
        <div className={styles.title}>
          <span className={styles.icon}>{isExpanded ? '📖' : '📘'}</span>
          <h3>{topicLabel}</h3>
          <span className={styles.sectionCount}>{sections.length}</span>
        </div>
        <IconArrow isOpen={isExpanded} />
      </div>

      {isExpanded && sections.length > 0 && (
        <div className={styles.sectionsList}>
          {sections.map((section, index) => (
            <div
              key={section.value}
              className={styles.sectionItem}
              onClick={() => onSectionClick(section)}
            >
              <div className={styles.sectionNumber}>{index + 1}</div>
              <div className={styles.sectionContent}>{section.title}</div>
              <div className={styles.sectionArrow}>→</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
