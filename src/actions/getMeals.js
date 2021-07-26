import axios from 'axios';
import { MealsActionTypes } from './actionTypes';

export const fetchMealsStart = () => ({
  type: MealsActionTypes.FETCH_MEALS_START,
});

export const fetchMealsSuccess = meals => ({
  type: MealsActionTypes.FETCH_MEALS_SUCCEESS,
  meals,
});

export const fetchMealsFailure = error => ({
  type: MealsActionTypes.FETCH_MEALS_FAILURE,
  error,
});

// eslint-disable-next-line arrow-body-style
export const fetchMealsStartAsync = meals => {
  return dispatch => {
    dispatch(fetchMealsStart());
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meals}`)
      .then(res => dispatch(fetchMealsSuccess(res.data.meals)))
      .catch(error => dispatch(fetchMealsFailure(error)));
  };
};
