import Redux from 'redux';
import { handleActions } from 'redux-actions';

import { ArticleStoreState } from '../../types/store_state';

const defaultState: ArticleStoreState = { isReady: false, articles: [], article: null };

const reducer: Redux.Reducer<ArticleStoreState> = handleActions({
    GET_ALL_ARTICLES: (state, data) => ({
        articles: data
    }),

    GET_ARTICLE: (state, data) => ({
        article: data
    })
}, defaultState);

export default reducer;
