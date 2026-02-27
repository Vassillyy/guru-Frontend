import {
  labelUtilityCategory,
  UtilityCategory,
  type IUtilityType,
} from '@/entities/utilityType';
import { Filters } from '@/feature/filters';
import { PageContainer } from '@/shared/ui';
import { useFilteredData, useFilters } from '@/shared/hooks';
import { UtilityTypeCard } from './utilityTypeCard/UtilityTypeCard.tsx';
import { config } from '../config';
import styles from './TypeScriptUtilityTypesPage.module.css';

export const TypeScriptUtilityTypesPage = () => {
  const {
    activeCategories,
    searchQuery,
    loadedCount,
    filterChange,
    searchChange,
    searchReset,
  } = useFilters<UtilityCategory>();

  const { pillItems, itemsToShow } = useFilteredData<
    IUtilityType,
    UtilityCategory
  >({
    activeCategories,
    searchQuery,
    loadedCount,
    config,
    getLabel: (category) => labelUtilityCategory[category as UtilityCategory],
  });

  return (
    <PageContainer
      title="Utility Types"
      filtersSlot={
        <Filters<UtilityCategory>
          pillItems={pillItems}
          onFilterChange={filterChange}
          searchQuery={searchQuery}
          onSearchChange={searchChange}
          onSearchReset={searchReset}
        />
      }
    >
      {Object.entries(itemsToShow).map(([category, utilities]) => (
        <div key={category} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>
            {labelUtilityCategory[category as UtilityCategory]}
          </h2>
          <div className={styles.typesList}>
            {utilities.map((utility, index) => (
              <UtilityTypeCard key={`${category}-${index}`} utility={utility} />
            ))}
          </div>
        </div>
      ))}

      {Object.entries(itemsToShow).length === 0 && (
        <div className={styles.noResult}>По данному запросу данных нет</div>
      )}
    </PageContainer>
  );
};
