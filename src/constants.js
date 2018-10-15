import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';

import reducer from './reducers/root-reducer';

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export let history = createBrowserHistory();

export let colors = { textBlack: '#212121', linkBlackHover: '#333333', borderGray: '#9E9E9E' };
