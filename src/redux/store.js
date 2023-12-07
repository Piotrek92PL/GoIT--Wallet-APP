import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/slice';
import currencyReducer from './currency/slice';
import categoriesReducer from './categories/slice';
import { globalReducer } from './global/slice';
import { transactionsReducer } from './transactions/slice';
// import { financeReducer } from './finance/finanseSlice'; //to blokuje logowanie

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const currencyPersistConfig = {
  key: 'currency',
  storage,
  whitelist: ['data', 'lastFetchDate'],
};

const categoriesPersistConfig = {
  key: 'categories',
  storage,
  whitelist: ['categories'],
};

// const financePersistConfig = { //to blokuje logowanie
//   key: 'currency',
//   storage,
//   whitelist: ['data', 'lastFetchDate'],
// };

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),

    currency: persistReducer(currencyPersistConfig, currencyReducer),

    categories: persistReducer(categoriesPersistConfig, categoriesReducer),

    // finances: persistReducer(financePersistConfig, financeReducer), //for diagrampage/chart //to blokuje logowanie

    global: globalReducer, //co to jest? moze trzeba skasowac
    transactions: transactionsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
