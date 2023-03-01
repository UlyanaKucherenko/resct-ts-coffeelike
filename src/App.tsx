import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { RLoadingOverlay } from 'components/RLoadingOverlay';
import NotFoundPage from 'pages/General/NotFound';

const UserLayout = lazy(() => import('layouts/UserLayout'));
const AuthLayout = lazy(() => import('layouts/AuthLayout'));
const GeneralLayout = lazy(() => import('layouts/GeneralLayout'));

function App() {
  return (
    <Suspense fallback={<RLoadingOverlay isVisible />}>
      <Switch>
        <Route
          path="/user"
          component={UserLayout}
        />
        <Route
          path="/general"
          component={GeneralLayout}
        />
        <Route
          path="/"
          component={AuthLayout}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default App;
