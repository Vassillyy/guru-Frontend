import { useNavigate } from 'react-router-dom';
import { type ITopic } from '@/entities/topic';
import { AppPaths } from '@/shared/constants/route.ts';
import { config } from '../config';

export const useTopicsData = () => {
  const navigate = useNavigate();

  const topicsToShow = config;

  const navigateToTopic = (topic: ITopic) => {
    navigate(`${AppPaths.JAVA_SCRIPT}/topic/${topic.value}`, {
      state: { topicData: topic },
    });
  };

  return {
    topicsToShow,
    navigateToTopic,
  };
};
