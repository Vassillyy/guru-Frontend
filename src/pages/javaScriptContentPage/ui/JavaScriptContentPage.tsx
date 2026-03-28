import type { FC } from 'react';
import { labelTopics, Topics, type ITopic } from '@/entities/topic';
import { Pills, PageContainer } from '@/shared/ui';
import { useFilteredData } from '@/shared/hooks';
import { useTopicsData } from '../hooks/useTopicsData.ts';
import { TopicCard } from './TopicCard/TopicCard.tsx';
import { config } from '../config';
import styles from './JavaScriptContentPage.module.css';

export const JavaScriptContentPage: FC = () => {
  const {
    activeTopics,
    setActiveTopics,
    topicsToShow,
    navigateToTopic,
  } = useTopicsData();

  const { pillItems } = useFilteredData<ITopic, Topics>({
    activeCategories: activeTopics,
    config,
    getLabel: (category) => labelTopics[category],
  });

  const allSections = topicsToShow.flatMap((topicKey) => {
    const sections = config[topicKey as Topics] || [];
    return sections.map((section) => ({
      ...section,
      topicLabel: labelTopics[topicKey as Topics],
    }));
  });

  return (
    <PageContainer
      title="Руководство по JavaScript"
      filtersSlot={<Pills items={pillItems} onFilterChange={setActiveTopics} />}
    >
      <div className={styles.content}>
        {allSections.map((section) => (
          <TopicCard
            key={section.value}
            section={section}
            onClick={() => navigateToTopic(section)}
          />
        ))}
      </div>

      {allSections.length === 0 && (
        <div className={styles.noResult}>По данному запросу данных нет</div>
      )}
    </PageContainer>
  );
};
