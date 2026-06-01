import { createHashRouter } from 'react-router-dom';
import { JavaScriptContentPage } from '@/pages/javaScriptContentPage';
import { TypeScriptUtilityTypesPage } from '@/pages/typeScriptUtilityTypesPage';
import { MainPage } from '@/pages/mainPage';
import { JavaScriptMethodsPage } from '@/pages/javaScriptMethodsPage';
import { JavaScriptTopicPage } from '@/pages/javaScriptTopicPage';
import { JavaScriptBrowserPage } from '@/pages/javaScriptBrowserPage';
import { AppPaths } from '@/shared/constants/route';
import { MainLayout, TopicLayout } from './layouts';

export const router = createHashRouter([
  {
    path: AppPaths.MAIN,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: AppPaths.JAVA_SCRIPT,
        element: <JavaScriptContentPage />,
      },
      {
        path: AppPaths.JAVA_SCRIPT_METHODS,
        element: <JavaScriptMethodsPage />,
      },
      {
        path: AppPaths.TYPE_SCRIPT_UTILITY_TYPES,
        element: <TypeScriptUtilityTypesPage />,
      },
      {
        path: AppPaths.JAVA_SCRIPT_BROWSER,
        element: <JavaScriptBrowserPage />,
      },
    ],
  },
  {
    path: `${AppPaths.JAVA_SCRIPT}/topic/:topicId`,
    element: <TopicLayout />,
    children: [
      {
        index: true,
        element: <JavaScriptTopicPage />,
      },
    ],
  },
]);
