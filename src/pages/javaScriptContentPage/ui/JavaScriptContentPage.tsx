import type { FC } from 'react';
import { Input, PageContainer } from '@/shared/ui';
import { useFilters } from '@/shared/hooks';
import { useTopicsData } from '../hooks/useTopicsData.ts';
import { TopicCard } from './TopicCard/TopicCard.tsx';
import styles from './JavaScriptContentPage.module.css';

export const JavaScriptContentPage: FC = () => {
  const { topicsToShow, navigateToTopic } = useTopicsData();

  const { searchQuery, searchChange, searchReset } = useFilters();

  const filteredTopics = topicsToShow.filter((section) =>
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
        {filteredTopics.map((section) => (
          <TopicCard
            key={section.value}
            section={section}
            onClick={() => navigateToTopic(section)}
          />
        ))}
      </div>

      {filteredTopics.length === 0 && (
        <div className={styles.noResult}>По данному запросу данных нет</div>
      )}
    </PageContainer>
  );
};
