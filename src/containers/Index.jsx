import React from 'react';
import { connect } from 'react-redux';

import { fetchCurrentUser } from '../actions/user-actions';

class Index extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchCurrentUser());
    }

    render() {
        if (!this.props.isReady) return null;

        return <div className="content">Hello {this.props.user.name}</div>;
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.users.isReady,
        user: state.users.currentUser
    };
}

export default connect(mapStateToProps)(Index);
