import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

import Content from '../components/common/Content';
import ProjectsPanel from '../components/panels/ProjectsPanel';

class Projects extends React.Component {
    componentWillMount() {
        this.props.dispatch(setTitle('candidateXYZ'));
        this.props.dispatch(setSolidNavbar(true));
    }

    render() {
        return (
            <Content>
                <ProjectsPanel all />
            </Content>
        );
    }
}

export default connect()(Projects);
