import Redux, { connect } from 'react-redux';

import { StoreState } from '../../../types/store_state';
import { articleRequests } from '../../actions/article_actions';
import Article from "../../../api/articles";
import Show from '../../components/articles/Show';

export interface ConnectedState {
    isReady: boolean;
    article: Article;
}

export interface ConnectedDispatch {
    getArticle: () => void;
}

const mapStateToProps = (state: StoreState): ConnectedState => ({
    isReady: state.articles.isReady,
    article: state.articles.article
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<StoreState>): ConnectedDispatch => ({
    getArticle: () => {
        dispatch(articleRequests.getArticle())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
