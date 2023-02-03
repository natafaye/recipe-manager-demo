import { configureStore } from '@reduxjs/toolkit';
import { recipeReducer } from '../features/recipes/recipeSlice';

export const store = configureStore({
  reducer: {
    recipes: recipeReducer
  },
});
