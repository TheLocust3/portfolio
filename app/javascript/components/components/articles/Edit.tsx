import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ConnectedState, ConnectedDispatch } from '../../containers/articles/EditContainer';

class Edit extends React.Component<ConnectedState & ConnectedDispatch & RouteComponentProps, any> {

    constructor(props) {
        super(props)
    }

    componentWillMount(): void {
        this.props.getArticle(this.props.match.params['id']);
    }

    render(): JSX.Element {
        return (
            <div>
                Edit Article: {this.props.match.params['id']}
            </div>
        );
    }
}

export default Edit;