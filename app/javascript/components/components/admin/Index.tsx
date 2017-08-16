import _ from 'lodash';
import React from 'react';

import { ConnectedState, ConnectedDispatch } from '../../containers/admin/IndexContainer';

export default class Index extends React.Component<ConnectedState & ConnectedDispatch, any> {

    componentWillMount(): void {
        this.props.getCurrentAdmin();
        this.props.getAllArticles();
    }

    render(): JSX.Element {
        if (!this.props.isAdminReady) return null;

        if (_.isNull(this.props.admin)) {
            window.location.href = '/admin/sign_in'
        }

        return (
            <div>
                <h1>Admin</h1><hr />
            </div>
        );
    }
}
