import type { ReactNode } from 'react';
import { highlightCode } from './highlightCode';

export const formatExample = (
  example: string,
  styles: Record<string, string>,
) => {
  if (!example) return [];

  const lines = example.split('\n');
  const formattedLines: ReactNode[] = [];

  lines.forEach((line, index) => {
    if (line === '') {
      formattedLines.push(<br key={`empty-${index}`} />);
      return;
    }

    const commentIndex = line.indexOf('//');

    if (commentIndex !== -1) {
      const codePart = line.substring(0, commentIndex);
      const commentPart = line.substring(commentIndex);

      const highlightedCode = highlightCode(codePart, styles);

      formattedLines.push(
        <div key={`line-${index}`} className={styles.exampleLine}>
          {highlightedCode}
          <span className={styles.comment}>{commentPart}</span>
        </div>,
      );
    } else {
      const highlightedCode = highlightCode(line, styles);

      formattedLines.push(
        <div key={`line-${index}`} className={styles.exampleLine}>
          {highlightedCode}
        </div>,
      );
    }
  });

  return formattedLines;
};
