import React from 'react';

import { ConnectedState, ConnectedDispatch } from '../../containers/articles/IndexContainer';

export default class Index extends React.Component<ConnectedState & ConnectedDispatch, any> {

    componentWillMount(): void {
        this.props.getAllArticles();
    }

    render(): JSX.Element {
        console.log(this.props)
        return (
            <div>
                Articles Index
            </div>
        );
    }
}
