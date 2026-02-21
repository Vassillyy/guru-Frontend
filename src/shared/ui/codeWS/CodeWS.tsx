import { type FC, useState } from 'react';
import { formatExample } from './model/formatExample.tsx';
import styles from './CodeWS.module.css';

interface ICodeWSProps {
  text: string;
  isShowToggle?: boolean;
  isHiddenDefault?: boolean;
}

export const CodeWS: FC<ICodeWSProps> = ({
  text,
  isShowToggle = false,
  isHiddenDefault = false,
}) => {
  const [isHidden, setIsHidden] = useState<boolean>(isHiddenDefault);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Примеры использования:
        {isShowToggle && (
          <button
            className={styles.toggleButton}
            onClick={() => setIsHidden((prev) => !prev)}
          >
            {isHidden ? 'Показать' : 'Скрыть'}
          </button>
        )}
      </div>
      {!isHidden && (
        <div className={styles.code}>{formatExample(text, styles)}</div>
      )}
    </div>
  );
};
