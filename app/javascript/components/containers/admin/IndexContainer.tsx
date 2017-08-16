import Redux, { connect } from 'react-redux';

import { StoreState } from '../../../types/store-state';
import { articleRequests } from '../../actions/article-actions';
import { adminRequests } from '../../actions/admin-actions';
import Article from "../../../api/articles";
import Index from '../../components/admin/Index';
import Admin from "../../../api/admin";

export interface ConnectedState {
    areArticlesReady: boolean;
    articles: Article[];
    isAdminReady: boolean;
    admin: Admin;
}

export interface ConnectedDispatch {
    getAllArticles: () => void;
    getCurrentAdmin: () => void;
}

const mapStateToProps = (state: StoreState): ConnectedState => ({
    areArticlesReady: state.articles.isReady,
    articles: state.articles.articles,
    isAdminReady: state.admin.isReady,
    admin: state.admin.admin
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<StoreState>): ConnectedDispatch => ({
    getAllArticles: () => {
        dispatch(articleRequests.getAllArticles())
    },

    getCurrentAdmin: () => {
        dispatch(adminRequests.getCurrentAdmin())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
