import type { FC } from 'react';
import { formatExample } from './model/formatExample.tsx';
import styles from './CodeWS.module.css';

export const CodeWS: FC<{ text: string }> = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Примеры использования:</div>
      <div className={styles.code}>{formatExample(text, styles)}</div>
    </div>
  );
};
