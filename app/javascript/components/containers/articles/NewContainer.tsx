import { connect } from 'react-redux';

import { StoreState } from '../../../types/store-state';
import Article from "../../../api/articles";
import New from '../../components/articles/New';

export interface ConnectedState {
    isReady: boolean;
    article: Article;
}

const mapStateToProps = (state: StoreState): ConnectedState => ({
    isReady: state.articles.isReady,
    article: state.articles.article
});

export default connect(mapStateToProps)(New);
