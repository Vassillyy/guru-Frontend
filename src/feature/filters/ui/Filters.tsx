import { type ChangeEvent } from 'react';
import { Input, Pills } from '@/shared/ui';
import styles from './Filters.module.css';

interface IFiltersProps<T extends string> {
  pillItems: Array<{ label: string; value: T }>;
  searchQuery: string;
  onFilterChange: (filters: T[]) => void;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchReset: () => void;
}

export const Filters = <T extends string>({
  pillItems,
  searchQuery,
  onFilterChange,
  onSearchChange,
  onSearchReset,
}: IFiltersProps<T>) => {
  return (
    <div className={styles.container}>
      <Pills<T> items={pillItems} onFilterChange={onFilterChange} />

      <Input
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        onSearchReset={onSearchReset}
      />
    </div>
  );
};
