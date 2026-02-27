import { type FC } from 'react';
import { type ITopicSection } from '@/entities/topic';
import { useFormattedText } from '@/shared/hooks';
import { CodeWS } from '@/shared/ui';
import styles from './SectionItem.module.css';

export const SectionItem: FC<{ section: ITopicSection }> = ({ section }) => {
  const additionFormatted = useFormattedText(section.addition, {
    highlightStyle: {
      fontWeight: 600,
      color: '#333',
    },
  });

  const contentFormatted = useFormattedText(section.content, {
    highlightStyle: {
      fontWeight: 600,
      color: '#3b82f6',
    },
  });

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{section.title}</h2>
      <div className={styles.content}>{contentFormatted}</div>
      {section.addition && (
        <div className={styles.addition}>{additionFormatted}</div>
      )}
      {section.examples && (
        <CodeWS text={section.examples} isShowToggle isHiddenDefault />
      )}
    </div>
  );
};
