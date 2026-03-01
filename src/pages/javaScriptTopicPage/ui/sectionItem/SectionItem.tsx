import { type FC, useState } from 'react';
import { type ITopicSection } from '@/entities/topic';
import { useFormattedText } from '@/shared/hooks';
import { CodeWS, IconArrow } from '@/shared/ui';
import styles from './SectionItem.module.css';

export const SectionItem: FC<{ section: ITopicSection }> = ({ section }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

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
      <button
        className={styles.header}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h2 className={styles.title}>{section.title}</h2>
        <div className={styles.buttonArrow}>
          <IconArrow isOpen={isOpen} />
        </div>
      </button>
      {isOpen && (
        <>
          <div className={styles.content}>{contentFormatted}</div>
          {section.addition && (
            <div className={styles.addition}>{additionFormatted}</div>
          )}
          {section.examples && (
            <CodeWS text={section.examples} isShowToggle isHiddenDefault />
          )}
        </>
      )}
    </div>
  );
};
