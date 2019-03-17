import { combineReducers } from 'redux';

import { globalReducer } from './global-reducer';

const reducer = combineReducers({
  global: globalReducer
});

export default reducer;
