import { combineReducers } from 'redux';

import { articleReducer } from './article-reducer';
import { globalReducer } from './global-reducer';

const reducer = combineReducers({
  articles: articleReducer,
  global: globalReducer
});

export default reducer;
