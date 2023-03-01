import React, { createContext, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { ProtectedRoute } from 'middleware/ProtectedRoute';
import { AppIsReady } from 'middleware/AppIsReady';
import { IRoleChecker } from 'types/common';
import { appRoles } from 'utils/roles';
import { auth } from 'store/auth';
import { APP_ROUTES } from 'router/appRoutes';
import { UserHeader } from 'components/User/UserHeader';
import RSidebar from 'components/RSidebar';
import { RMask } from 'components/RMask';
import { device } from 'utils/device';
import { Layout, Main, Content } from './styled';
import { userRoutes } from './config';

export const UserLayoutContext = createContext({});

const navItems = [
  {
    route: APP_ROUTES.user.dashboard,
    icon: '',
    title: 'Dashboard',
  },
  {
    route: '/user/shopping-card',
    icon: '',
    title: 'Shopping Card',
  },
];

function UserLayout() {
  const [isOpened, setIsOpened] = useState(false);

  const mainRef = useRef(null);
  const isTouchDevice = useMediaQuery({ query: `(${device.lg})` });

  const contextValue = useMemo(() => ({ mainRef }), [mainRef]);
  const onOpenSidebar = () => setIsOpened(true);
  const onCloseSidebar = () => setIsOpened(false);

  return (
    <ProtectedRoute>
      <RoleChecker>
        {/* <AppIsReady> */}
        <Layout>
          <RSidebar
            links={navItems}
            isOpened={isOpened}
            onClose={onCloseSidebar}
          />
          {isOpened && isTouchDevice && <RMask />}
          <UserLayoutContext.Provider value={contextValue}>
            <Main ref={mainRef}>
              <UserHeader setIsOpened={onOpenSidebar} />
              <Content>
                <Switch>
                  {userRoutes.map(({ id, exact, path, component }) => (
                    <Route
                      key={id}
                      exact={exact}
                      path={path}
                      component={component}
                    />
                  ))}
                </Switch>
              </Content>
            </Main>
          </UserLayoutContext.Provider>
        </Layout>
        {/* </AppIsReady> */}
      </RoleChecker>
    </ProtectedRoute>
  );
}

function RoleChecker({ children }: IRoleChecker) {
  const roles = useSelector(auth.selectors.roles);
  const token = useSelector(auth.selectors.token);

  if (!token) return <Redirect to={APP_ROUTES.auth.signIn} />;
  return <>{children}</>;
}

export default UserLayout;
