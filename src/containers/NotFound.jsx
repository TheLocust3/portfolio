import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

import Content from '../components/common/Content';
import FadeIn from '../components/common/FadeIn';

class NotFound extends React.Component {
    componentWillMount() {
        this.props.dispatch(setTitle('Not Found'));
        this.props.dispatch(setSolidNavbar(true));
    }

    render() {
        return (
            <FadeIn>
                <Content>404 Not Found!</Content>
            </FadeIn>
        );
    }
}

export default connect()(NotFound);
