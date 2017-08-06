import Redux from 'redux';
import { handleActions } from 'redux-actions';

import { ArticleStoreState } from '../../types/store-state';
import { articleActions } from '../actions/article-actions'

const defaultState: ArticleStoreState = { isReady: false, articles: [], article: null };

const reducer: Redux.Reducer<ArticleStoreState> = handleActions({
    [articleActions.articles.collection.request.toString()]: (state: ArticleStoreState) => ({
        isReady: false
    }),
    [articleActions.articles.collection.receive.toString()]: (state: ArticleStoreState, data: any) => ({ // TODO: find data type
        isReady: true,
        articles: data.payload.articles
    }),

    [articleActions.articles.member.request.toString()]: (state: ArticleStoreState) => ({
        isReady: false
    }),
    [articleActions.articles.member.request.toString()]: (state: ArticleStoreState, data: any) => ({
        isReady: true,
        article: data.payload.article
    })
}, defaultState);

export default reducer;
