import { configureStore } from '@reduxjs/toolkit';
import configuratorReducer from './features/configuratorSlice';

const store = configureStore({
  reducer: {
    configurator: configuratorReducer,
  },
});

export default store;