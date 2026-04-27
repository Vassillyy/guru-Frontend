import { ListTopicCard } from '@/widgets/listTopicCard';
import { Input, PageContainer } from '@/shared/ui';
import { useFilters } from '@/shared/hooks';
import { config } from '../config/index';
import styles from './JavaScriptBrowserPage.module.css';

export const JavaScriptBrowserPage = () => {
  const { searchQuery, searchChange, searchReset, loadedCount, loadMore } =
    useFilters();

  return (
    <PageContainer
      title="Среда выполнения: Браузер"
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
      <ListTopicCard
        loadedCount={loadedCount}
        loadMore={loadMore}
        searchQuery={searchQuery}
        topics={config}
      />
    </PageContainer>
  );
};
