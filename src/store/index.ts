import storage from 'redux-persist/lib/storage';
import { Action, combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// REDUCERS
import auth from 'store/auth';
import products from 'store/products';

const appReducer = combineReducers({
  auth,
  products,
});

type RootState = ReturnType<typeof appReducer>;

const rootReducer = (state: RootState | undefined, action: Action) => {
  if (
    action.type === 'auth/logout/fulfilled' ||
    action.type === 'auth/SET_APP_IS_FAILED'
  ) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: 'project_name',
  storage,
  blacklist: [],
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type { RootState };
export default store;
