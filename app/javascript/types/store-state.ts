import Article from '../api/articles';
import Admin from "../api/admin";

export interface StoreState {
    articles: ArticleStoreState;
    admin: AdminStoreState;
}

export interface AdminStoreState {
    isReady: boolean;
    admin: Admin;
}

export interface ArticleStoreState {
    isReady: boolean;
    articles: Article[];
}
