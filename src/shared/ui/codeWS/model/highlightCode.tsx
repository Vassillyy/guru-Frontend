import type { ReactNode } from 'react';

export const highlightCode = (
  code: string,
  styles: Record<string, string>,
): ReactNode[] => {
  const parts: ReactNode[] = [];
  let remainingCode = code;
  let keyCounter = 0;

  while (remainingCode.length > 0) {
    let matched = false;

    const keywordMatch = remainingCode.match(/^\b(let|const|var|console)\b/);

    if (keywordMatch) {
      parts.push(
        <span key={`kw-${keyCounter++}`} className={styles.keyword}>
          {keywordMatch[0]}
        </span>,
      );
      remainingCode = remainingCode.substring(keywordMatch[0].length);
      matched = true;
      continue;
    }

    const methodMatch = remainingCode.match(/^\.([a-zA-Z_$][a-zA-Z0-9_$]*)\b/);

    if (methodMatch) {
      parts.push(<span key={`dot-${keyCounter++}`}>.</span>);
      parts.push(
        <span key={`method-${keyCounter++}`} className={styles.method}>
          {methodMatch[1]}
        </span>,
      );
      remainingCode = remainingCode.substring(methodMatch[0].length);
      matched = true;
      continue;
    }

    const stringMatch = remainingCode.match(/^(["'`])(?:\\.|(?!\1).)*\1/);

    if (stringMatch) {
      parts.push(
        <span key={`str-${keyCounter++}`} className={styles.string}>
          {stringMatch[0]}
        </span>,
      );
      remainingCode = remainingCode.substring(stringMatch[0].length);
      matched = true;
      continue;
    }

    const numberMatch = remainingCode.match(/^\d+(\.\d+)?/);

    if (numberMatch) {
      parts.push(
        <span key={`num-${keyCounter++}`} className={styles.number}>
          {numberMatch[0]}
        </span>,
      );
      remainingCode = remainingCode.substring(numberMatch[0].length);
      matched = true;
      continue;
    }

    if (!matched) {
      parts.push(
        <span key={`char-${keyCounter++}`}>{remainingCode.charAt(0)}</span>,
      );
      remainingCode = remainingCode.substring(1);
    }
  }

  return parts;
};
