import React from 'react';

import { ConnectedState, ConnectedDispatch } from '../../containers/articles/Index'

export default class Index extends React.Component<ConnectedState & ConnectedDispatch, any> {

    componentWillMount(): void {
        this.props.getAllArticles();
    }

    render(): JSX.Element {
        return (
            <div>
                Articles Index
            </div>
        );
    }
}
