import { connect } from 'react-redux';

import { StoreState } from '../../../types/store-state';
import Article from "../../../api/articles";
import New from '../../components/articles/New';

export interface ConnectedState {
    articles: Article[];
}

const mapStateToProps = (state: StoreState): ConnectedState => ({
    articles: state.articles.articles
});

export default connect(mapStateToProps)(New);
