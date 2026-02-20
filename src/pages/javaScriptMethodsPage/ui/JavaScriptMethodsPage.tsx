import { useState, useEffect, useRef, useMemo, type FC } from 'react';
import { type IMethod, labelMethods, Methods } from '@/entities/method';
import { Pills } from '@/shared/ui';
import { MethodCard } from './methodCard/MethodCard.tsx';
import { config } from '../config';
import styles from './JavaScriptMethodsPage.module.css';

const ITEMS_PER_LOAD = 20;

export const JavaScriptMethodsPage: FC = () => {
  const [activeCategories, setActiveCategories] = useState<Methods[]>([]);
  const [loadedCount, setLoadedCount] = useState(ITEMS_PER_LOAD);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const pillItems = Object.keys(config).map((category) => ({
    label: labelMethods[category as Methods],
    value: category as Methods,
  }));

  const categoriesToShow =
    activeCategories.length === 0
      ? (Object.keys(config) as Methods[])
      : activeCategories;

  const totalMethodsCount = useMemo(() => {
    return categoriesToShow.reduce((total, category) => {
      return total + (config[category]?.length || 0);
    }, 0);
  }, [categoriesToShow]);

  const getMethodsToShow = useMemo(() => {
    let methodsLoaded = 0;
    const result: Record<string, IMethod[]> = {};

    for (const category of categoriesToShow) {
      const categoryMethods = config[category] || [];

      if (methodsLoaded >= loadedCount) break;

      const remainingToLoad = loadedCount - methodsLoaded;
      const methodsToTake = Math.min(categoryMethods.length, remainingToLoad);

      if (methodsToTake > 0) {
        result[category] = categoryMethods.slice(0, methodsToTake);
        methodsLoaded += methodsToTake;
      }
    }

    return result;
  }, [categoriesToShow, loadedCount]);

  const hasMore = loadedCount < totalMethodsCount;

  useEffect(() => {
    if (!hasMore || !sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadedCount((prev) =>
            Math.min(prev + ITEMS_PER_LOAD, totalMethodsCount),
          );
        }
      },
      { threshold: 0.1, rootMargin: '100px' },
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, [hasMore, totalMethodsCount]);

  const filterChange = (filters: Methods[]) => {
    setActiveCategories(filters);
    setLoadedCount(ITEMS_PER_LOAD);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>API JavaScript</h1>
      </header>

      <Pills items={pillItems} onFilterChange={filterChange} />

      <div className={styles.mainContent}>
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

        {hasMore && <div ref={sentinelRef} className={styles.sentinel} />}
      </div>
    </div>
  );
};
