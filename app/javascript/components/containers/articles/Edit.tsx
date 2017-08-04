import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

class Edit extends React.Component<RouteComponentProps, any> {

    constructor(props: RouteComponentProps) {
        super(props)
    }

    render() {
        return (
            <div>
                Edit Article: {this.props.match.params['id']}
            </div>
        );
    }
}

export default Edit;
