import { type FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pills, IconArrow } from '@/shared/ui';
import { AppPaths } from '@/shared/constants/route.ts';
import { labelTopics, Topics, type ITopic } from '@/entities/topic';
import { config } from '../config';
import styles from './JavaScriptContentPage.module.css';

export const JavaScriptContentPage: FC = () => {
  const [activeTopics, setActiveTopics] = useState<Topics[]>([]);
  const [expandedGroups, setExpandedGroups] = useState<Topics[]>([]);
  const navigate = useNavigate();

  const pillItems = Object.keys(config).map((topic) => ({
    label: labelTopics[topic as Topics],
    value: topic as Topics,
  }));

  const topicsToShow =
    activeTopics.length > 0 ? activeTopics : (Object.keys(config) as Topics[]);

  const toggleGroup = (topicKey: Topics) => {
    setExpandedGroups((prev) =>
      prev.includes(topicKey)
        ? prev.filter((t) => t !== topicKey)
        : [...prev, topicKey],
    );
  };

  const navigateToTopic = (topic: ITopic) => {
    navigate(`${AppPaths.JAVA_SCRIPT}/topic/${topic.value}`, {
      state: {
        topicData: topic,
      },
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Руководство по JavaScript</h1>
      </header>

      <Pills items={pillItems} onFilterChange={setActiveTopics} />

      <div className={styles.mainContent}>
        <div className={styles.tocHeader}>
          <h2 className={styles.tocTitle}>
            <span className={styles.tocIcon}>📚</span>
            Оглавление
          </h2>
        </div>

        <div className={styles.tableOfContents}>
          {topicsToShow.map((topicKey) => {
            const topicLabel = labelTopics[topicKey as Topics];
            const sections = config[topicKey as Topics] || [];
            const isExpanded = expandedGroups.includes(topicKey);

            return (
              <div key={topicKey} className={styles.topicGroup}>
                <div
                  className={styles.topicHeader}
                  onClick={() => toggleGroup(topicKey)}
                >
                  <div className={styles.topicTitle}>
                    <span className={styles.topicIcon}>
                      {isExpanded ? '📖' : '📘'}
                    </span>
                    <h3>{topicLabel}</h3>
                    <span className={styles.sectionCount}>
                      {sections.length}
                    </span>
                  </div>
                  <IconArrow isOpen={isExpanded} />
                </div>

                {isExpanded && sections.length > 0 && (
                  <div className={styles.sectionsList}>
                    {sections.map((section, index) => (
                      <div
                        key={section.value}
                        className={styles.sectionItem}
                        onClick={() => navigateToTopic(section)}
                      >
                        <div className={styles.sectionNumber}>{index + 1}</div>
                        <div className={styles.sectionContent}>
                          {section.title}
                        </div>
                        <div className={styles.sectionArrow}>→</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
