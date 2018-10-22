import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

import Content from '../components/common/Content';
import FadeIn from '../components/common/FadeIn';
import ProjectsPanel from '../components/panels/ProjectsPanel';

class Projects extends React.Component {
    componentWillMount() {
        this.props.dispatch(setTitle('candidateXYZ'));
        this.props.dispatch(setSolidNavbar(true));
    }

    render() {
        return (
            <FadeIn>
                <br />
                <br />
                <ProjectsPanel all />
            </FadeIn>
        );
    }
}

export default connect()(Projects);
