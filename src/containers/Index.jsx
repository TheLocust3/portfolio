import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

import ScrollUp from '../components/common/ScrollUp';

import SplashScreen from '../components/SplashScreen';
import AboutPanel from '../components/panels/AboutPanel';

import ProjectsPanel from '../components/panels/ProjectsPanel';
import ExperiencePanel from '../components/panels/ExperiencePanel';

class Index extends React.Component {
    componentWillMount() {
        this.props.dispatch(setTitle('Home'));
        this.props.dispatch(setSolidNavbar(false));
    }

    render() {
        return (
            <div>
                <SplashScreen />

                <AboutPanel />
                <ProjectsPanel />
                <ExperiencePanel />

                <ScrollUp />
            </div>
        );
    }
}

export default connect()(Index);
