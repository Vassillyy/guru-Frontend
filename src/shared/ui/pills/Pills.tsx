import { useState } from 'react';
import cn from 'classnames';
import styles from './Pills.module.css';

interface IPillItem<T> {
  label: string;
  value: T;
}

interface IPillsProps<T> {
  items: IPillItem<T>[];
  onFilterChange: (activeFilters: T[]) => void;
}

export const Pills = <T extends string>({
  items,
  onFilterChange,
}: IPillsProps<T>) => {
  const [activePills, setActivePills] = useState<T[]>([]);

  const handleClick = (value: T) => {
    const newPills = activePills.includes(value)
      ? activePills.filter((item) => item !== value)
      : [...activePills, value];

    setActivePills(newPills);
    onFilterChange(newPills);
  };

  return (
    <div className={cn(styles.containerPills)}>
      {items.map((item) => (
        <div
          className={cn(styles.pills, {
            [styles.active]: activePills.includes(item.value),
          })}
          key={item.value}
          onClick={() => handleClick(item.value)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};
