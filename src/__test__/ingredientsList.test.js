import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import IngrediantsList from '../containers/IngredientsList';

describe('Creates a component', () => {
  const middlewares = [thunk];
  const initialState = { ingredients: ['lamb'] };
  const mockStore = configureStore(middlewares);
  let store;
  it('renders correctly', () => {
    store = mockStore(initialState);
    const tree = renderer.create(
      <Provider store={store}>
        <IngrediantsList />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
