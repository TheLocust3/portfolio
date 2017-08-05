import Redux, { connect } from 'react-redux'

import { StoreState } from '../../../types/store_state'
import { articleRequests } from '../../actions/article_actions'
import Article from "../../../api/articles";
import New from '../../components/articles/New.tsx'

export interface ConnectedState {
    isReady: boolean;
    article: Article;
}

export interface ConnectedDispatch {
    createArticle: () => void;
}

const mapStateToProps = (state: StoreState, ownProps: any): ConnectedState => ({
    isReady: state.articles.isReady,
    article: state.articles.article
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<StoreState>): ConnectedDispatch => ({
    createArticle: () => {
        dispatch(articleRequests.createArticle())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(New);
