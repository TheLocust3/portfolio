import { createActions } from 'redux-actions';

import Article from '../../api/articles';

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
        return (dispatch) => {
            dispatch(articleActions.articles.collection.request);

            Article.all().then((articles: Article[]) => {
                dispatch(articleActions.articls.collection.receive(articles))
            })
        }
    },

    getArticle() {
        return (dispatch) => {

        }
    },

    createArticle() {
        return (dispatch) => {

        }
    },

    updateArticle() {
        return (dispatch) => {

        }
    }
};
