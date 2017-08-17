import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';

import { ConnectedState, ConnectedDispatch } from '../../containers/admin/IndexContainer';

export default class Index extends React.Component<ConnectedState & ConnectedDispatch, any> {

    componentWillMount(): void {
        this.props.getCurrentAdmin();
        this.props.getAllArticles();
    }

    renderTable(): JSX.Element {
        if (!this.props.areArticlesReady) return null;

        return (
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.articles.map((article, i) => {
                        return (
                            <tr key={i}>
                                <td>{article.title}</td>
                                <td><Link to={`/articles/${article.id}`}>Show</Link> | <Link to={`/articles/${article.id}/edit`}>Edit</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    render(): JSX.Element {
        if (!this.props.isAdminReady) return null;

        if (_.isNull(this.props.admin)) {
            window.location.href = '/admin/sign_in'
        }

        return (
            <div>
                <h1>Admin</h1><hr />
                <Link to="/articles/new">New</Link><br /><br />

                {this.renderTable()}
            </div>
        );
    }
}
