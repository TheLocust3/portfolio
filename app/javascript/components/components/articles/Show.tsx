import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ConnectedState, ConnectedDispatch } from '../../containers/articles/ShowContainer';

class Show extends React.Component<ConnectedState & ConnectedDispatch & RouteComponentProps, any> {

    constructor(props) {
        super(props)
    }

    componentWillMount(): void {
        this.props.getArticle();
    }

    render(): JSX.Element {
        return (
            <div>
                Show Article: {this.props.match.params['id']}
            </div>
        );
    }
}

export default Show;
