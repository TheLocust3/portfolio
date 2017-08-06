import Redux, { combineReducers } from 'redux';

import articleReducer from './article-reducer';
import { StoreState } from '../../types/store-state';

const reducer: Redux.Reducer<StoreState> = combineReducers({
    articles: articleReducer
});

export default reducer;
