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
  accent: '#6B4E71',
  accentRGB: { r: 107, g: 78, b: 113 }
};

export let MAX_MOBILE_WIDTH = '768px';
export let MAX_MOBILE_WIDTH_NUMBER = 768;

export const IMAGES_URL = `https://jakekinsella-portfolio.s3.amazonaws.com/images/`;
