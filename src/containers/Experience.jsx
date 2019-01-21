import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import queryString from 'query-string';
import styled from 'react-emotion';

import { MAX_MOBILE_WIDTH } from '../constants';
import { setSolidNavbar } from '../actions/global-actions';

import Content from '../components/common/Content';
import FadeIn from '../components/common/FadeIn';
import ScrollUp from '../components/common/ScrollUp';
import Team4761 from '../components/experience/Team4761';
import Talla from '../components/experience/Talla';
import Nutonian from '../components/experience/Nutonian';
import CloudHealth from '../components/experience/CloudHealth';

let Spacer = styled('div')`
  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    margin-top: 25%;
  }
`;

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: 'All my professional experience through internships and jobs.'
    };
  }

  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  componentDidMount() {
    let parsed = queryString.parse(this.props.location.search);

    if (!_.isUndefined(parsed.scroll) && parsed.scroll !== '1') {
      let title = '';
      let description = '';

      if (parsed.scroll == 1) {
        title = ': Team 4761';
        description =
          'I joined my high school’s robotics team during my freshman year of high school, called the Reading Robockets (or Team 4761, the number that FIRST robotics lovingly assigned to us). We were a part of FIRST of FIRST Robotics Competition, a non-profit dedicated to inspiring kids to pursue STEM careers through having them create people sized robots to solve challenges and generally bash into other robots.';
      } else if (parsed.scroll == 2) {
        title = ': Talla';
        description =
          'I joined Talla during the summer between my junior and senior years of high school. Talla is a Boston startup builds intelligent Slackbots to manage common HR tasks.';
      } else if (parsed.scroll == 3) {
        title = ': Nutonian';
        description =
          'I worked at Nutonian, a startup that developed a general purpose machine learning platform, during the summer before my sophomore year of high school. There I worked as a one of two QA developers. As a result I got a full view into how QA and DevOps worked and their interaction with the wider software development world.';
      } else {
        title = ': CloudHealth Tech';
        description =
          'CloudHealth Technologies was my first software developing job and I worked there for two summers in high school (between eighth grade->freshman year and freshman year->sophomore year). This was a formational experience for me because it gave me my first experience working on a project larger than me and working as part of a team.';
      }

      $('html, body').animate(
        {
          scrollTop: $(`#${parsed.scroll}`).offset().top
        },
        300
      );

      this.setState({
        title: title,
        description: description
      });
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - Experience{this.state.title}</title>
          <meta name="description" content={this.state.description} />
        </Helmet>

        <FadeIn>
          <Content>
            <Spacer />

            <div id="1">
              <Team4761 />
            </div>

            <div id="2">
              <Talla />
            </div>

            <div id="3">
              <Nutonian />
            </div>

            <div id="4">
              <CloudHealth />
            </div>

            <ScrollUp />
          </Content>
        </FadeIn>
      </div>
    );
  }
}

export default connect()(Experience);
