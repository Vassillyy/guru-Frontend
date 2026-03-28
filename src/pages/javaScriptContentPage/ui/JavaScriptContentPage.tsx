import type { FC } from 'react';
import { labelTopics, Topics } from '@/entities/topic';
import { Input, PageContainer } from '@/shared/ui';
import { useFilters } from '@/shared/hooks';
import { useTopicsData } from '../hooks/useTopicsData.ts';
import { TopicCard } from './TopicCard/TopicCard.tsx';
import { config } from '../config';
import styles from './JavaScriptContentPage.module.css';

export const JavaScriptContentPage: FC = () => {
  const { topicsToShow, navigateToTopic } = useTopicsData();

  const { searchQuery, searchChange, searchReset } = useFilters<Topics>();

  const allSections = topicsToShow
    .flatMap((topicKey) => {
      const sections = config[topicKey as Topics] || [];
      return sections.map((section) => ({
        ...section,
        topicLabel: labelTopics[topicKey as Topics],
      }));
    })
    .filter((section) =>
      section.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  return (
    <PageContainer
      title="Руководство по JavaScript"
      filtersSlot={
        <div className={styles.filtersContainer}>
          <Input
            searchQuery={searchQuery}
            onSearchChange={searchChange}
            onSearchReset={searchReset}
          />
        </div>
      }
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
