import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { phonebookReducer } from './usersSlice';

const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    users: phonebookReducer,
    filters: null,
  },
  enhancer,
});
