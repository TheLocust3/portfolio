import React from 'react';
import { connect } from 'react-redux';

class NotFound extends React.Component {
    render() {
        return <div className="content">404 Not Found!</div>;
    }
}

export default connect()(NotFound);
