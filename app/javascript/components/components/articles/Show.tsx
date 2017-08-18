import _ from 'lodash';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ConnectedState, ConnectedDispatch } from '../../containers/articles/ShowContainer';
import Article from "../../../api/articles";

class Show extends React.Component<ConnectedState & ConnectedDispatch & RouteComponentProps, any> {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getArticle();
    }

    renderArticle() {
        if (!this.props.isReady) return;
        let article: Article = _.find(this.props.articles, (article: Article) => { return article.id == this.props.match.params['id'] });

        return (
            <div>
                <h1>{article.title}</h1>
                {article.text}
            </div>
        )
    }

    render(): JSX.Element {
        return (
            <div>
                {this.renderArticle()}
            </div>
        );
    }
}

export default Show;
