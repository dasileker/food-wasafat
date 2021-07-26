import { combineReducers } from 'redux';
import categoriesReducer from './getCategoriesReducer';
import ingredientsReducer from './getIngredientsReducer';
import mealsReducer from './getMealsReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  meals: mealsReducer,
  ingredients: ingredientsReducer,
});

export default rootReducer;
