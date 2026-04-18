import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { type ITopic } from '@/entities/topic';
import { AppPaths } from '@/shared/constants/route.ts';
import { config } from '../config';

interface IUseTopicsData {
  searchQuery: string;
  loadedCount: number;
}

export const useTopicsData = ({
  searchQuery = '',
  loadedCount,
}: IUseTopicsData) => {
  const navigate = useNavigate();

  const allTopics = config;

  const filteredTopics = useMemo(
    () =>
      searchQuery
        ? allTopics.filter((t) =>
            t.name.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : allTopics,
    [allTopics, searchQuery],
  );

  const topicsToShow = filteredTopics.slice(0, loadedCount);

  const hasMore = loadedCount < filteredTopics.length;

  const navigateToTopic = (topic: ITopic) => {
    navigate(`${AppPaths.JAVA_SCRIPT}/topic/${topic.value}`, {
      state: { topicData: topic },
    });
  };

  return {
    topicsToShow,
    navigateToTopic,
    hasMore,
  };
};
