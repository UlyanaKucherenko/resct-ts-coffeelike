import NotFoundPage from 'pages/General/NotFound';
import { APP_ROUTES } from 'router/appRoutes';
import SingInPage from 'pages/Auth/SingInPage';
import RegistrationPage from 'pages/Auth/RegistrationPage';

export const authRoutes = [
  {
    id: 3,
    exact: true,
    path: APP_ROUTES.auth.registration,
    component: RegistrationPage,
  },
  {
    id: 2,
    exact: true,
    path: APP_ROUTES.auth.signIn,
    component: SingInPage,
  },
  {
    id: 1,
    exact: false,
    path: undefined,
    component: NotFoundPage,
  },
];
