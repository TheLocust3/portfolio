import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ConnectedState, ConnectedDispatch } from '../../containers/articles/Edit'

class Edit extends React.Component<ConnectedState & ConnectedDispatch & RouteComponentProps, any> {

    constructor(props: RouteComponentProps) {
        super(props)
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