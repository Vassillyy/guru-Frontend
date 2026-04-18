import type { FC } from 'react';
import { Input, PageContainer } from '@/shared/ui';
import { useFilters, useInfiniteScroll } from '@/shared/hooks';
import { useTopicsData } from '../hooks/useTopicsData.ts';
import { TopicCard } from './TopicCard/TopicCard.tsx';
import styles from './JavaScriptContentPage.module.css';

export const JavaScriptContentPage: FC = () => {
  const { searchQuery, searchChange, searchReset, loadedCount, loadMore } = useFilters();

  const { topicsToShow, navigateToTopic, hasMore } = useTopicsData({
    searchQuery,
    loadedCount,
  });

  const sentinelRef = useInfiniteScroll({
    hasMore,
    onLoadMore: loadMore,
  });

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

      {hasMore && <div ref={sentinelRef} className={styles.sentinel} />}
    </PageContainer>
  );
};
