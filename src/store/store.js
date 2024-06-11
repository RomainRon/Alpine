import { configureStore } from '@reduxjs/toolkit';
import configuratorReducer from '../features/configuratorSlice';

const store = configureStore({
  reducer: {
    configurateur: configuratorReducer,
  },
});

export default store;