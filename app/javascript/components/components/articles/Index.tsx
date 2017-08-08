import React from 'react';

import Article from '../../../api/articles'
import { ConnectedState, ConnectedDispatch } from '../../containers/articles/IndexContainer';

export default class Index extends React.Component<ConnectedState & ConnectedDispatch, any> {

    componentWillMount(): void {
        this.props.getAllArticles();
    }

    renderArticleList() {
        if (!this.props.isReady) return;

        return (
            this.props.articles.map((article: Article, i: number) => {
                return (
                    <div key={i}>
                        <h2>{article.title}</h2>
                        <div>
                            {article.text}
                        </div>
                    </div>
                )
            })
        )
    }

    render(): JSX.Element {
        return (
            <div>
                <h1>Article List</h1><hr />
                {this.renderArticleList()}
            </div>
        );
    }
}
