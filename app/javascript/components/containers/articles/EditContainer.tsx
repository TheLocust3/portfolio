import Redux, { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { StoreState } from '../../../types/store-state';
import { articleRequests } from '../../actions/article-actions';
import Article from "../../../api/articles";
import Edit from '../../components/articles/Edit';

export interface ConnectedState {
    isReady: boolean;
    articles: Article[];
}

export interface ConnectedDispatch {
    getArticle: () => void;
}

const mapStateToProps = (state: StoreState): ConnectedState => ({
    isReady: state.articles.isReady,
    articles: state.articles.articles
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<StoreState>, props: RouteComponentProps): ConnectedDispatch => ({
    getArticle: () => {
        dispatch(articleRequests.getArticle(props.match.params['id']))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
