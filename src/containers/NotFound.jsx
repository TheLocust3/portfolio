import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

class NotFound extends React.Component {
    componentWillMount() {
        this.props.dispatch(setTitle('Not Found'));
        this.props.dispatch(setSolidNavbar(true));
    }

    render() {
        return <div className="content">404 Not Found!</div>;
    }
}

export default connect()(NotFound);
