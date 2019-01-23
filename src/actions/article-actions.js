import ArticleApi from '../api/article-api';

export const REQUEST_ALL_ARTICLES = 'REQUEST_ALL_ARTICLES';
export const RECEIVE_ALL_ARTICLES = 'RECEIVE_ALL_ARTICLES';
export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';

export function requestAllArticlesAction() {
  return {
    type: REQUEST_ALL_ARTICLES
  };
}

export function receiveAllArticlesAction(data) {
  return {
    type: RECEIVE_ALL_ARTICLES,
    data: data
  };
}

export function requestArticleAction() {
  return {
    type: REQUEST_ARTICLE
  };
}

export function receiveArticleAction(data) {
  return {
    type: RECEIVE_ARTICLE,
    data: data
  };
}

export function fetchAllArticles() {
  return function(dispatch) {
    dispatch(requestAllArticlesAction());

    ArticleApi.getAll()
      .then((response) => {
        dispatch(receiveAllArticlesAction(response.body));
      })
      .catch(() => {
        dispatch(receiveAllArticlesAction([]));
      });
  };
}

export function fetchArticle(url) {
  return function(dispatch) {
    dispatch(requestArticleAction());

    ArticleApi.get(url)
      .then((response) => {
        dispatch(receiveArticleAction(response.body));
      })
      .catch(() => {
        dispatch(receiveArticleAction({}));
      });
  };
}
