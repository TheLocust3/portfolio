import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';

import reducer from './reducers/root-reducer';

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export let history = createBrowserHistory();

export let colors = { textBlack: '#444', textBlackLighter: '#555', linkBlackHover: '#666', borderGray: '#9E9E9E' };

export let MAX_MOBILE_WIDTH = '768px';
