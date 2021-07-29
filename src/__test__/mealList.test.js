import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import MealsList from '../containers/MealList';

describe('Creates a component', () => {
  const middlewares = [thunk];
  const initialState = { meals: ['lamb'] };
  const mockStore = configureStore(middlewares);
  let store;
  it('renders correctly', () => {
    store = mockStore(initialState);
    const tree = renderer.create(
      <Provider store={store}>
        <MealsList />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
