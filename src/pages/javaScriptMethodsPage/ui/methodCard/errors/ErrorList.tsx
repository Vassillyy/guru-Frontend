import type { FC } from 'react';
import type { IMethod } from '@/entities/method';
import { useFormattedText } from '@/shared/hooks/useFormattedText.tsx';
import styles from './ErorsList.module.css';

export const ErrorList: FC<{
  method: Required<IMethod>;
}> = ({ method }) => {
  const formattedError = useFormattedText(method.errors, {
    highlightStyle: { fontWeight: 600, color: '#da3030ff' },
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>Возможные ошибки:</div>
      <ul className={styles.list}>
        <div className={styles.error}>{formattedError}</div>
      </ul>
    </div>
  );
};
