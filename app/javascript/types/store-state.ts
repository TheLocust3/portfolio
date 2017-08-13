import Article from '../api/articles';
import Admin from "../api/admin";

export interface StoreState {
    articles: ArticleStoreState;
}

export interface ArticleStoreState {
    isReady: boolean;
    articles: Article[];
    article: Article;
}

export interface AdminStoreState {
    isReady: boolean;
    admin: Admin;
}
