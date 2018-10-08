import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

import SplashScreen from '../components/SplashScreen';
import AboutPanel from '../components/panels/AboutPanel';

import ProjectsPanel from '../components/panels/projects/ProjectsPanel';
import CandidateXYZPanel from '../components/panels/projects/CandidateXYZPanel';
import Intel8080Panel from '../components/panels/projects/Intel8080Panel';
import GameboyEmulatorPanel from '../components/panels/projects/GameboyEmulatorPanel';

import ExperiencePanel from '../components/panels/experience/ExperiencePanel';
import TallaPanel from '../components/panels/experience/TallaPanel';
import NutonianPanel from '../components/panels/experience/NutonianPanel';
import CloudHealthPanel from '../components/panels/experience/CloudHealthPanel';

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

                <CandidateXYZPanel />
                <Intel8080Panel />
                <GameboyEmulatorPanel />

                <ExperiencePanel />
                <TallaPanel />
                <NutonianPanel />
                <CloudHealthPanel />
            </div>
        );
    }
}

export default connect()(Index);
