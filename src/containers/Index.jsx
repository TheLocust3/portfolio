import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { setSolidNavbar } from '../actions/global-actions';

import ScrollUp from '../components/common/ScrollUp';

import FadeIn from '../components/common/FadeIn';
import SplashScreen from '../components/SplashScreen';
import AboutPanel from '../components/panels/AboutPanel';

import ProjectsPanel from '../components/panels/ProjectsPanel';
import ExperiencePanel from '../components/panels/ExperiencePanel';

class Index extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(false));
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - Home</title>
          <meta
            name="description"
            content="I'm a software developer, and entrepreneur, with a passion for building technology."
          />
        </Helmet>

        <FadeIn>
          <SplashScreen
            src="/images/splash.jpeg"
            header="Jake Kinsella"
            subtitle="Developer and aspiring entrepreneur."
          />
          <br />

          <AboutPanel />

          <ProjectsPanel />
          <br />

          <ExperiencePanel />

          <ScrollUp />
        </FadeIn>
      </div>
    );
  }
}

export default connect()(Index);
