import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { setSolidNavbar } from '../actions/global-actions';

import FadeIn from '../components/common/FadeIn';
import ProjectsPanel from '../components/panels/ProjectsPanel';

class Projects extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - Projects</title>
          <meta
            name="description"
            content="My major programming projects that I've created over the years like candidateXYZ and various emulators.
                Provides a brief overview of my open source work."
          />
        </Helmet>

        <FadeIn>
          <br />
          <br />
          <ProjectsPanel all />
        </FadeIn>
      </div>
    );
  }
}

export default connect()(Projects);
