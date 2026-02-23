import { type FC, useState } from 'react';
import type { IUtilityType } from '@/entities/utilityType';
import { useFormattedText } from '@/shared/hooks/useFormattedText.tsx';
import { CodeWS, IconArrow } from '@/shared/ui';
import { TableSyntaxBreakdown } from './table/TableSyntaxBreakdown.tsx';
import styles from './UtilityTypeCard.module.css';

export const UtilityTypeCard: FC<{ utility: IUtilityType }> = ({ utility }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const formattedDescription = useFormattedText(utility.description, {
    highlightStyle: { fontWeight: 600, color: '#1864ab' },
  });

  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <button
          className={styles.cardHeader}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <h3 className={styles.headerText}>{utility.name}</h3>
          <div className={styles.buttonArrow}>
            <IconArrow isOpen={isOpen} />
          </div>
        </button>

        {isOpen && (
          <>
            <div className={styles.signature}>{utility.signature}</div>
            <div className={styles.description}>{formattedDescription}</div>

            {utility.syntaxBreakdown && (
              <TableSyntaxBreakdown breakdown={utility.syntaxBreakdown} />
            )}
          </>
        )}
      </div>

      {isOpen && <CodeWS text={utility.example} />}
    </div>
  );
};
