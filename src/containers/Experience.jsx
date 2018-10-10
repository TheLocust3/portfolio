import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

import Content from '../components/common/Content';
import ScrollUp from '../components/common/ScrollUp';
import Talla from '../components/experience/Talla';
import Nutonian from '../components/experience/Nutonian';
import CloudHealth from '../components/experience/CloudHealth';

class Experience extends React.Component {
    componentWillMount() {
        this.props.dispatch(setTitle('Projects'));
        this.props.dispatch(setSolidNavbar(true));
    }

    render() {
        return (
            <Content>
                <Talla />
                <Nutonian />
                <CloudHealth />

                <ScrollUp />
            </Content>
        );
    }
}

export default connect()(Experience);
