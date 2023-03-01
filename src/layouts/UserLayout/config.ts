import NotFoundPage from 'pages/General/NotFound';
import DashboardPage from 'pages/User/DashboardPage';
import { APP_ROUTES } from 'router/appRoutes';

export const userRoutes = [
  {
    id: 2,
    exact: true,
    path: APP_ROUTES.user.dashboard,
    component: DashboardPage,
  },
  {
    id: 1,
    exact: false,
    path: undefined,
    component: NotFoundPage,
  },
];
