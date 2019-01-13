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
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  componentDidMount() {
    let parsed = queryString.parse(this.props.location.search);

    if (!_.isUndefined(parsed.scroll) && parsed.scroll !== '1') {
      $('html, body').animate(
        {
          scrollTop: $(`#${parsed.scroll}`).offset().top
        },
        300
      );
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - Experience</title>
          <meta
            name="description"
            content="All my professional experience through internships and jobs."
          />
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
