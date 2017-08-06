import Redux from 'redux';
import { createActions } from 'redux-actions';

import Article from '../../api/articles';
import { StoreState } from "../../types/store-state";

export const articleActions = createActions({
    ARTICLES: {
        COLLECTION: {
            REQUEST: undefined,
            RECEIVE: (articles: Article[]) => ({ articles: articles }),
        },
        MEMBER: {
            REQUEST: undefined,
            RECEIVE: (article: Article) => ({ article: article }),
        }
    }
});

export const articleRequests = {

    getAllArticles() {
        return (dispatch: Redux.Dispatch<StoreState>) => {
            dispatch(articleActions.articles.collection.request);

            Article.all().then((articles: Article[]) => {
                dispatch(articleActions.articles.collection.receive(articles));
            })
        }
    },

    getArticle(id: number) {
        return (dispatch: Redux.Dispatch<StoreState>) => {
            dispatch(articleActions.articles.member.request);

            Article.get(id).then((article: Article) => {
                dispatch(articleActions.articles.member.receive(article))
            })
        }
    }
};
