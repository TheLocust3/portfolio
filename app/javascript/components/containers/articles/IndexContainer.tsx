import Redux, { connect } from 'react-redux';

import { StoreState } from '../../../types/store-state';
import { articleRequests } from '../../actions/article-actions';
import Article from "../../../api/articles";
import Index from '../../components/articles/Index';

export interface ConnectedState {
    isReady: boolean;
    articles: Article[];
}

export interface ConnectedDispatch {
    getAllArticles: () => void;
}

const mapStateToProps = (state: StoreState): ConnectedState => ({
    isReady: state.articles.isReady,
    articles: state.articles.articles
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<StoreState>): ConnectedDispatch => ({
    getAllArticles: () => {
        dispatch(articleRequests.getAllArticles())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
