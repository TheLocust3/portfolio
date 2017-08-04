import React from 'react';
import { RouteComponentProps } from 'react-router-dom';


class Show extends React.Component<RouteComponentProps, any> {

    constructor(props: RouteComponentProps) {
        super(props)
    }

    render() {
        return (
            <div>
                Show Article: {this.props.match.params['id']}
            </div>
        );
    }
}

export default Show;
