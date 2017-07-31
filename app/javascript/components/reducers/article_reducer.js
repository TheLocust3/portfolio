import { handleActions } from 'redux-actions'

const defaultState = {  };

const reducer = handleActions({
    GET_ALL_ARTICLES: (state, data) => ({
        articles: data
    }),

    GET_ARTICLE: (state, data) => ({
        article: data
    })
}, defaultState);

export default reducer
