import { combineReducers } from 'redux';

import { userReducer } from './user-reducer';
import { articleReducer } from './article-reducer';
import { globalReducer } from './global-reducer';

const reducer = combineReducers({
  users: userReducer,
  articles: articleReducer,
  global: globalReducer
});

export default reducer;
