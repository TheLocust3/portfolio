import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

import ScrollUp from '../components/common/ScrollUp';

import FadeIn from '../components/common/FadeIn';
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
            <FadeIn>
                <SplashScreen src="/images/splash.jpeg" header="Jake Kinsella" subtitle="Developer, and aspiring entrepreneur." />
                <br />

                <AboutPanel />

                <ProjectsPanel />
                <br />

                <ExperiencePanel />

                <ScrollUp />
            </FadeIn>
        );
    }
}

export default connect()(Index);
