import Article from '../api/articles'

export interface StoreState {
    articles: ArticleStoreState;
}

export interface ArticleStoreState {
    isReady: boolean;
    articles: Article[];
    article: Article;
}
