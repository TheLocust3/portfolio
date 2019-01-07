import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';

import reducer from './reducers/root-reducer';

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export let history = createBrowserHistory();

export let colors = {
  textBlack: '#444',
  textBlackLighter: '#555',
  linkBlackHover: '#666',
  borderGray: '#9E9E9E',
  // accent: '#03256C',
  // accentRGB: { r: 3, g: 37, b: 108 }
  // accent: '#52154E',
  // accentRGB: { r: 82, g: 21, b: 78 }
  accent: '#6B4E71',
  accentRGB: { r: 107, g: 78, b: 113 }
};

export let MAX_MOBILE_WIDTH = '768px';
export let MAX_MOBILE_WIDTH_NUMBER = 768;
