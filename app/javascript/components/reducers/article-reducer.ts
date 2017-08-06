import Redux from 'redux';
import { handleActions } from 'redux-actions';

import { ArticleStoreState } from '../../types/store-state';
import { articleActions } from '../actions/article-actions';

const defaultState: ArticleStoreState = { isReady: false, articles: [], article: null };

const reducer: Redux.Reducer<ArticleStoreState> = handleActions({
    [articleActions.articles.collection.request.toString()]: (state: ArticleStoreState) => ({
        isReady: false
    }),
    [articleActions.articles.collection.receive.toString()]: (state: ArticleStoreState, action: any) => ({ // TODO: find data type
        isReady: true,
        articles: action.payload.articles
    }),

    [articleActions.articles.member.request.toString()]: (state: ArticleStoreState) => ({
        isReady: false
    }),
    [articleActions.articles.member.receive.toString()]: (state: ArticleStoreState, action: any) => ({
        isReady: true,
        article: action.payload.article
    })
}, defaultState);

export default reducer;
