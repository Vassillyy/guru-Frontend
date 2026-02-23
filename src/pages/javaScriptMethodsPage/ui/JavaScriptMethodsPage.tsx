import { type FC } from 'react';
import { labelMethods } from '@/entities/method';
import { PageContainer } from '@/shared/ui';
import { MethodCard } from './methodCard/MethodCard.tsx';
import { Filters } from './filters/Filters.tsx';
import { useFilters, useMethodsData, useInfiniteScroll } from '../hooks';
import styles from './JavaScriptMethodsPage.module.css';

export const JavaScriptMethodsPage: FC = () => {
  const {
    activeCategories,
    searchQuery,
    loadedCount,
    filterChange,
    searchChange,
    searchReset,
    loadMore,
  } = useFilters();

  const { pillItems, getMethodsToShow, hasMore } = useMethodsData({
    activeCategories,
    searchQuery,
    loadedCount,
  });

  const sentinelRef = useInfiniteScroll({
    hasMore,
    onLoadMore: loadMore,
  });

  return (
    <PageContainer
      title="API JavaScript"
      filtersSlot={
        <Filters
          pillItems={pillItems}
          searchQuery={searchQuery}
          onFilterChange={filterChange}
          onSearchChange={searchChange}
          onSearchReset={searchReset}
        />
      }
    >
      {Object.entries(getMethodsToShow).map(([category, methods]) => (
        <div key={category} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>
            {labelMethods[category as keyof typeof labelMethods]}
          </h2>
          <div className={styles.methodsList}>
            {methods.map((method, index) => (
              <MethodCard key={`${category}-${index}`} method={method} />
            ))}
          </div>
        </div>
      ))}

      {Object.entries(getMethodsToShow).length === 0 && (
        <div className={styles.noResult}>По данному запросу данных нет</div>
      )}

      {hasMore && <div ref={sentinelRef} className={styles.sentinel} />}
    </PageContainer>
  );
};
