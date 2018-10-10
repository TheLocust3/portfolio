import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

import Content from '../components/common/Content';
import ScrollUp from '../components/common/ScrollUp';
import CandidateXYZ from '../components/projects/CandidateXYZ';
import Intel8080 from '../components/projects/Intel8080';
import GameboyEmulator from '../components/projects/GameboyEmulator';

class Projects extends React.Component {
    componentWillMount() {
        this.props.dispatch(setTitle('Projects'));
        this.props.dispatch(setSolidNavbar(true));
    }

    render() {
        return (
            <Content>
                <CandidateXYZ />
                <Intel8080 />
                <GameboyEmulator />

                <ScrollUp />
            </Content>
        );
    }
}

export default connect()(Projects);
