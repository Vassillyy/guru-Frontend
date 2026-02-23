import { createBrowserRouter } from 'react-router-dom';
import { JavaScriptContentPage } from '@/pages/javaScriptContentPage';
import { TypeScriptUtilityTypesPage } from '@/pages/typeScriptUtilityTypesPage';
import { MainPage } from '@/pages/mainPage';
import { JavaScriptMethodsPage } from '@/pages/javaScriptMethodsPage';
import { AppPaths } from '@/shared/constants/route';
import { MainLayout } from './layouts';
import { JavaScriptTopicPage } from '@/pages/javaScriptTopicPage';

export const router = createBrowserRouter([
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
        path: `${AppPaths.JAVA_SCRIPT}/topic/:topicId`,
        element: <JavaScriptTopicPage />,
      },
    ],
  },
]);
