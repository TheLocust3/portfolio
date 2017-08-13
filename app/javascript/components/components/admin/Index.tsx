import React from 'react';

import { ConnectedState, ConnectedDispatch } from '../../containers/admin/IndexContainer';
import Admin from '../../../api/admin'

export default class Index extends React.Component<ConnectedState & ConnectedDispatch, any> {

    componentWillMount(): void {
        this.props.getAllArticles();
    }

    render(): JSX.Element {
        return (
            <div>
                <h1>Admin</h1><hr />
            </div>
        );
    }
}
