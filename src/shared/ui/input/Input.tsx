import type { ChangeEvent, FC } from 'react';
import styles from './Input.module.css';

interface IInputProps {
  searchQuery: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchReset: () => void;
}

export const Input: FC<IInputProps> = ({
  searchQuery,
  onSearchChange,
  onSearchReset,
}) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Поиск..."
        value={searchQuery}
        onChange={onSearchChange}
        className={styles.input}
      />
      {searchQuery && (
        <button className={styles.clear} onClick={onSearchReset}>
          ×
        </button>
      )}
    </div>
  );
};
