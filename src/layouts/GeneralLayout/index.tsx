import { Route, Switch } from 'react-router-dom';

import { generalRoutes } from './config';
import { Layout } from './styled';

function GeneralLayout() {
  return (
    <Layout>
      <Switch>
        {generalRoutes.map(({ id, exact, path, component }) => (
          <Route
            key={id}
            exact={exact}
            path={path}
            component={component}
          />
        ))}
      </Switch>
    </Layout>
  );
}

export default GeneralLayout;
