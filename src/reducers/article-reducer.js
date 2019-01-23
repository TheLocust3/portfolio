import * as ArticleActions from '../actions/article-actions';

const initialState = {
  isReady: false,
  article: {},
  articles: []
};

export function articleReducer(state = initialState, action) {
  switch (action.type) {
    case ArticleActions.REQUEST_ALL_ARTICLES:
    case ArticleActions.REQUEST_ARTICLE:
      return Object.assign({}, state, {
        isReady: false
      });
    case ArticleActions.RECEIVE_ALL_ARTICLES:
      return Object.assign({}, state, {
        isReady: true,
        articles: action.data
      });
    case ArticleActions.RECEIVE_ARTICLE:
      return Object.assign({}, state, {
        isReady: true,
        article: action.data
      });
    default:
      return state;
  }
}
