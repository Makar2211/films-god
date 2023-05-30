import { configureStore } from '@reduxjs/toolkit';

import { filmsHome } from './slices/HomeSlice';

export const store = configureStore({
  reducer: {
    films: filmsHome,
  },
});
