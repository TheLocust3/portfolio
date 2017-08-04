import { createActions } from 'redux-actions'

export const articleActions = createActions({
    GET_ALL_ARTICLES: (data: object) => ({ data: data }),
    GET_ARTICLE: (data: object) => ({ data: data })
});
