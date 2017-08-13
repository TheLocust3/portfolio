import Redux, { connect } from 'react-redux';

import { StoreState } from '../../../types/store-state';
import { articleRequests } from '../../actions/article-actions';
import { adminRequests } from '../../actions/admin-actions';
import Article from "../../../api/articles";
import Index from '../../components/admin/Index';

export interface ConnectedState {
    isReady: boolean;
    articles: Article[];
}

export interface ConnectedDispatch {
    getCurrentAdmin: () => void;
    getAllArticles: () => void;
}

const mapStateToProps = (state: StoreState): ConnectedState => ({
    isReady: state.articles.isReady,
    articles: state.articles.articles
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<StoreState>): ConnectedDispatch => ({
    getCurrentAdmin: () => {
        dispatch(adminRequests.getCurrentAdmin())
    },

    getAllArticles: () => {
        dispatch(articleRequests.getAllArticles())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
