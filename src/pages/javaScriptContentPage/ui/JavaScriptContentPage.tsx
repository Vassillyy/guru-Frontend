import type { FC } from 'react';
import { labelTopics, Topics, type ITopic } from '@/entities/topic';
import { Pills, PageContainer } from '@/shared/ui';
import { useFilteredData } from '@/shared/hooks';
import { useTopicsData } from '../hooks/useTopicsData.ts';
import { TopicGroup } from './TopicGroup/TopicGroup.tsx';
import { config } from '../config';
import styles from './JavaScriptContentPage.module.css';

export const JavaScriptContentPage: FC = () => {
  const {
    activeTopics,
    setActiveTopics,
    expandedGroups,
    topicsToShow,
    toggleGroup,
    navigateToTopic,
  } = useTopicsData();

  const { pillItems } = useFilteredData<ITopic, Topics>({
    activeCategories: activeTopics,
    config,
    getLabel: (category) => labelTopics[category],
  });

  return (
    <PageContainer
      title="Руководство по JavaScript"
      filtersSlot={<Pills items={pillItems} onFilterChange={setActiveTopics} />}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.icon}>📚</span>
          Оглавление
        </h2>
      </div>

      <div className={styles.content}>
        {topicsToShow.map((topicKey) => {
          const topicLabel = labelTopics[topicKey as Topics];
          const sections = config[topicKey as Topics] || [];
          const isExpanded = expandedGroups.includes(topicKey);

          return (
            <TopicGroup
              key={topicKey}
              topicKey={topicKey}
              topicLabel={topicLabel}
              sections={sections}
              isExpanded={isExpanded}
              onToggle={() => toggleGroup(topicKey)}
              onSectionClick={navigateToTopic}
            />
          );
        })}
      </div>
    </PageContainer>
  );
};
