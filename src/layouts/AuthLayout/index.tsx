import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { auth } from 'store/auth';
import { IRoleChecker } from 'types/common';
import React from 'react';
import { appRoles } from 'utils/roles';
import { APP_ROUTES } from 'router/appRoutes';
import { authRoutes } from './config';
import { Layout } from './styled';

function AuthLayout() {
  return (
    <RoleChecker>
      <Layout>
        <Switch>
          {authRoutes.map(({ id, exact, path, component }) => (
            <Route
              key={id}
              exact={exact}
              path={path}
              component={component}
            />
          ))}
        </Switch>
      </Layout>
    </RoleChecker>
  );
}

function RoleChecker({ children }: IRoleChecker) {
  const token = useSelector(auth.selectors.token);
  // const roles = useSelector(auth.selectors.roles);

  // TODO: add conditions

  if (token) return <Redirect to={APP_ROUTES.user.dashboard} />;
  return <>{children}</>;
}

export default AuthLayout;
