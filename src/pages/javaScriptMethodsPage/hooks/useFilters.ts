import { useState } from 'react';
import { type Methods } from '@/entities/method';
import { type ChangeEvent } from 'react';

const ITEMS_PER_LOAD = 20;

export const useFilters = () => {
  const [activeCategories, setActiveCategories] = useState<Methods[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loadedCount, setLoadedCount] = useState(ITEMS_PER_LOAD);

  const filterChange = (filters: Methods[]) => {
    setActiveCategories(filters);
    setLoadedCount(ITEMS_PER_LOAD);
  };

  const searchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setLoadedCount(ITEMS_PER_LOAD);
  };

  const searchReset = () => {
    setSearchQuery('');
    setLoadedCount(ITEMS_PER_LOAD);
  };

  const loadMore = () => {
    setLoadedCount((prev) => prev + ITEMS_PER_LOAD);
  };

  return {
    activeCategories,
    searchQuery,
    loadedCount,
    filterChange,
    searchChange,
    searchReset,
    loadMore,
    setLoadedCount,
  };
};
