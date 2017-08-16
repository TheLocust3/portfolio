import Redux, { combineReducers } from 'redux';

import articleReducer from './article-reducer';
import adminReducer from './admin-reducer';
import { StoreState } from '../../types/store-state';

const reducer: Redux.Reducer<StoreState> = combineReducers({
    articles: articleReducer,
    admin: adminReducer
});

export default reducer;
