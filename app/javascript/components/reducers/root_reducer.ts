import Redux, { combineReducers } from 'redux';

import articleReducer from './article_reducer';
import { StoreState } from '../../types/store_state';

const reducer: Redux.Reducer<StoreState> = combineReducers({
    articles: articleReducer
});

export default reducer;
