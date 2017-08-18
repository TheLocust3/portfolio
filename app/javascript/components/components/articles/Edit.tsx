import _ from 'lodash';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ConnectedState, ConnectedDispatch } from '../../containers/articles/EditContainer';
import Form from "./Form";
import Article from "../../../api/articles";

class Edit extends React.Component<ConnectedState & ConnectedDispatch & RouteComponentProps, any> {

    constructor(props) {
        super(props)
    }

    componentWillMount(): void {
        this.props.getArticle(this.props.match.params['id']);
    }

    renderForm(): JSX.Element {
        if (!this.props.isReady) return;
        let article: Article = _.find(this.props.articles, (article: Article) => { return article.id == this.props.match.params['id'] });

        return (
            <Form article={article} />
        )
    }

    render(): JSX.Element {
        return (
            <div>
                <h1>Edit Article</h1>
                {this.renderForm()}
            </div>
        );
    }
}

export default Edit;