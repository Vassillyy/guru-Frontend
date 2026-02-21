import { useMemo } from 'react';
import { type IMethod, labelMethods, Methods } from '@/entities/method';
import { config } from '../config';

interface IUseMethodsDataProps {
  activeCategories: Methods[];
  searchQuery: string;
  loadedCount: number;
}

export const useMethodsData = ({
  activeCategories,
  searchQuery,
  loadedCount,
}: IUseMethodsDataProps) => {
  const categoriesToShow = useMemo(
    () =>
      activeCategories.length === 0
        ? (Object.keys(config) as Methods[])
        : activeCategories,
    [activeCategories],
  );

  const pillItems = useMemo(
    () =>
      Object.keys(config).map((category) => ({
        label: labelMethods[category as Methods],
        value: category as Methods,
      })),
    [],
  );

  const totalMethodsCount = useMemo(() => {
    return categoriesToShow.reduce((total, category) => {
      const categoryMethods = config[category] || [];
      const filteredMethods = categoryMethods.filter((method) =>
        method.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      return total + filteredMethods.length;
    }, 0);
  }, [categoriesToShow, searchQuery]);

  const getMethodsToShow = useMemo(() => {
    let methodsLoaded = 0;
    const result: Record<string, IMethod[]> = {};

    for (const category of categoriesToShow) {
      const categoryMethods = config[category] || [];
      const filteredMethods = categoryMethods.filter((method) =>
        method.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      if (methodsLoaded >= loadedCount) break;

      const remainingToLoad = loadedCount - methodsLoaded;
      const methodsToTake = Math.min(filteredMethods.length, remainingToLoad);

      if (methodsToTake > 0) {
        result[category] = filteredMethods.slice(0, methodsToTake);
        methodsLoaded += methodsToTake;
      }
    }

    return result;
  }, [categoriesToShow, loadedCount, searchQuery]);

  const hasMore = loadedCount < totalMethodsCount;

  return {
    pillItems,
    categoriesToShow,
    totalMethodsCount,
    getMethodsToShow,
    hasMore,
  };
};
