import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Topics, type ITopic } from '@/entities/topic';
import { AppPaths } from '@/shared/constants/route.ts';
import { config } from '../config';

export const useTopicsData = () => {
  const [activeTopics, setActiveTopics] = useState<Topics[]>([]);
  const [expandedGroups, setExpandedGroups] = useState<Topics[]>([]);
  const navigate = useNavigate();

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
      state: { topicData: topic },
    });
  };

  return {
    setActiveTopics,
    expandedGroups,
    topicsToShow,
    toggleGroup,
    navigateToTopic,
  };
};
