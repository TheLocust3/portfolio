import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ConnectedState, ConnectedDispatch } from '../../containers/articles/ShowContainer';

class Show extends React.Component<ConnectedState & ConnectedDispatch & RouteComponentProps, any> {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getArticle();
    }

    renderArticle() {
        if (!this.props.isReady) return;

        return (
            <div>
                <h1>{this.props.article.title}</h1>
                {this.props.article.text}
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
