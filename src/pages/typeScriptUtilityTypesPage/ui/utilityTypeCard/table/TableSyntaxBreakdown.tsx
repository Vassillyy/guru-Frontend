import type { FC } from 'react';
import type { ISyntaxBreakdownItem } from '@/entities/utilityType';
import styles from './TableSyntaxBreakdown.module.css';

export const TableSyntaxBreakdown: FC<{
  breakdown: ISyntaxBreakdownItem[];
}> = ({ breakdown }) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Часть кода</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          {breakdown.map((item, index) => (
            <tr key={index}>
              <td>
                <code>{item.code}</code>
              </td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
