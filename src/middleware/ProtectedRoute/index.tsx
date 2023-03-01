import { ReactNode } from 'react';
import { Redirect } from 'react-router-dom';

import { APP_ROUTES } from 'router/appRoutes';
import { useSelector } from 'react-redux';
import { auth } from 'store/auth';

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  // TODO: add token
  const token = useSelector(auth.selectors.token);

  if (!token) return <Redirect to={APP_ROUTES.auth.signIn} />;
  return <>{children}</>;
}
