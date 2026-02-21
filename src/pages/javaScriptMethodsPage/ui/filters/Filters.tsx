import { type ChangeEvent, type FC } from 'react';
import { Pills } from '@/shared/ui';
import { type Methods } from '@/entities/method';
import styles from './Filters.module.css';

interface IFiltersProps {
  pillItems: Array<{ label: string; value: Methods }>;
  searchQuery: string;
  onFilterChange: (filters: Methods[]) => void;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchReset: () => void;
}

export const Filters: FC<IFiltersProps> = ({
  pillItems,
  searchQuery,
  onFilterChange,
  onSearchChange,
  onSearchReset,
}) => {
  return (
    <div className={styles.mainContainer}>
      <Pills items={pillItems} onFilterChange={onFilterChange} />

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Поиск..."
          value={searchQuery}
          onChange={onSearchChange}
          className={styles.searchInput}
        />
        {searchQuery && (
          <button className={styles.clearSearch} onClick={onSearchReset}>
            ×
          </button>
        )}
      </div>
    </div>
  );
};
