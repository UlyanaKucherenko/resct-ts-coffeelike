import axios from 'axios';

import store from 'store';
import { auth as authModule } from 'store/auth';

interface FailedQuery {
  resolve: (token: string | null) => void;
  reject: (error: Error) => void;
}

let isRefreshing = false;
let isLogout = false;
let failedQueue: FailedQuery[] = [];

const processQueue = (error: Error | null, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }

    failedQueue = [];
  });
};

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
  timeout: 30000,
});

instance.interceptors.request.use((config) => {
  const { auth } = store.getState();
  if (auth.token) config.headers!.Authorization = `Bearer ${auth.token}`;
  return config;
});

// logout interceptor
instance.interceptors.response.use(
  (res) => res,
  (err) => {
    const { status } = err.response;
    const { auth } = store.getState();

    if (auth.token && status === 418) {
      isLogout = !isLogout;

      if (isLogout) {
        store.dispatch(authModule.thunks.authLogout());
      }
    }

    return Promise.reject(err);
  }
);

// refresh interceptor
instance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    const { status } = err.response;
    const { auth } = store.getState();

    if (auth.token && status === 401 && !originalConfig._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalConfig.headers.Authorization = `Bearer${token}`;
            return instance(originalConfig);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalConfig._retry = true;
      isRefreshing = true;

      return new Promise((resolve, reject) => {
        // const { auth } = store.getState();
        // instance
        //   .post(WEB_API_ROUTES.auth.refreshToken, {
        //     refresh_token: auth.refreshToken,
        //   })
        //   .then((res) => {
        //     instance.defaults.headers.common.Authorization = `Bearer${res.data.accessToken}`;
        //     originalConfig.headers.Authorization = `Bearer${res.data.accessToken}`;
        //     processQueue(null, res.data.accessToken);
        //     // store.dispatch(authModule.actions.SET_REFRESH_TOKEN(res.data));
        //     resolve(instance(originalConfig));
        //   })
        //   .catch((err) => {
        //     processQueue(err, null);
        //     reject(err);
        //   });
      }).finally(() => {
        isRefreshing = false;
      });
    }

    return Promise.reject(err);
  }
);

export default instance;
