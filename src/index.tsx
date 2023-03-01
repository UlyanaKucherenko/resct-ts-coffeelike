import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import 'react-toastify/dist/ReactToastify.css';

import store from 'store';
import App from 'App';
import Theme from 'components/App/Theme';
import { ComponentsGlobalStyles } from 'components/App/GlobalStyled/global/components';
import { RebootStyles } from 'components/App/GlobalStyled/global/reboot';
import { GlobalStyles } from 'components/App/GlobalStyled/global';
import Router from 'router';

const persist = persistStore(store);

ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persist}
      >
        <Theme>
          <RebootStyles />
          <ComponentsGlobalStyles />
          <GlobalStyles />

          <Router>
            <App />
          </Router>
        </Theme>
      </PersistGate>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop={false}
        closeButton={false}
        limit={1}
        hideProgressBar
        draggable
        pauseOnHover
        theme="light"
      />
    </Provider>
  </React.StrictMode>
);
