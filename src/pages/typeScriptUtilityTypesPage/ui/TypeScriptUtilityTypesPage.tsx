import { PageContainer, Pills } from '@/shared/ui';
import styles from './TypeScriptUtilityTypesPage.module.css';
import { labelUtilityCategory, UtilityCategory } from '@/entities/utilityType';
import { configUtilityTypes } from './config';
import { UtilityTypeCard } from './utilityTypeCard/UtilityTypeCard.tsx';
import { useState } from 'react';

export const TypeScriptUtilityTypesPage = () => {
  const [activeCategories, setActiveCategories] = useState<UtilityCategory[]>(
    [],
  );

  const pillItems = Object.values(UtilityCategory).map((category) => ({
    label: labelUtilityCategory[category],
    value: category,
  }));

  const categoriesToShow =
    activeCategories.length === 0
      ? (Object.keys(configUtilityTypes) as UtilityCategory[])
      : activeCategories;

  return (
    <PageContainer
      title="Utility Types"
      filtersSlot={
        <Pills items={pillItems} onFilterChange={setActiveCategories} />
      }
    >
      {categoriesToShow.map((category) => (
        <div key={category} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>
            {labelUtilityCategory[category]}
          </h2>
          <div className={styles.typesList}>
            {configUtilityTypes[category]?.map((utility, index) => (
              <UtilityTypeCard key={`${category}-${index}`} utility={utility} />
            ))}
          </div>
        </div>
      ))}
    </PageContainer>
  );
};
