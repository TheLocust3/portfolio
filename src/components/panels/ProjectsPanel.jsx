import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { Button } from 'react-material-components-web';

import { history, MAX_MOBILE_WIDTH } from '../../constants';

import Project from './Project';
import SideMargin from '../common/SideMargin';
import Text from '../common/Text';
import Panel from './Panel';

let ContentContainer = styled('div')`
  margin-top: 5vh;

  padding-left: 17.5vw;
  padding-right: 17.5vw;

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    padding-left: 10vw;
    padding-right: 10vw;
  }
`;

let titleClass = css`
  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    margin-top: 25%;
  }
`;

let moreButton = css`
  width: 80%;

  background-color: #e0e0e0 !important;
  text-transform: none;
`;

class ProjectsPanel extends React.Component {
  renderRest() {
    if (!this.props.all) {
      return (
        <center>
          <br />
          <br />

          <Button className={moreButton} onClick={() => history.push('/projects')}>
            <Text type="body2">See more projects</Text>
          </Button>
        </center>
      );
    }

    return (
      <Project to="/projects/pong-aimbot">
        <Text type="headline5" header>
          3D Pong Aimbot
        </Text>
        <br />

        <Text type="body2">
          <SideMargin margin={3}>
            Written during my freshman year of high school in a competition with my close friend.
            This program is made to play a version of 3D Pong automatically and get to as high a
            level as possible. It involved hundreds of lines of optimizations and parallel
            processing techniques to predict where the ball would be going and move the paddle.
          </SideMargin>
        </Text>
      </Project>
    );
  }

  render() {
    return (
      <Panel>
        <center>
          <Text className={titleClass} type="headline4" header>
            {this.props.all ? 'My Projects' : 'Selected Projects'}
          </Text>
        </center>

        <ContentContainer>
          <Project to="/projects/candidatexyz">
            <Text type="headline5" header>
              candidateXYZ
            </Text>
            <br />

            <Text type="body2">
              <SideMargin margin={3}>
                Created during the summer of my senior year, candidateXYZ is web application design
                to make it easy for everyone to run for office, no matter your experience,
                connections, or finiancial situation. Allows candidates create an official Candidate
                Committee, keep track of their finiances (receipts, expenditures, liabilities), and
                generate monthly campaign finiance reports.
              </SideMargin>
            </Text>
          </Project>

          <Project to="/projects/intel8080">
            <Text type="headline5" header>
              Intel 8080 Emulator
            </Text>
            <br />

            <Text type="body2">
              <SideMargin margin={3}>
                Built during my junior year of high school after my first attempt at building a
                Gameboy emulator. Emulates the pure Intel 8080 CPU based off of the original
                specification. Fully tested instruction set and CPU interrupts.
              </SideMargin>
            </Text>
          </Project>

          <Project to="/projects/gameboy-emulator">
            <Text type="headline5" header>
              Ti NSpire Gameboy Emulator
            </Text>
            <br />

            <Text type="body2">
              <SideMargin margin={3}>
                My first attempt at writing an emulator back in Sophmore year of high school.
                Designed to be run on a common graphing calculator (the Ti-NSpire CX CAS) and allow
                users to play Gameboy Classic games. Never got the graphics working but implemented
                the full CPU instruction set and interrupts.
              </SideMargin>
            </Text>
          </Project>

          {this.renderRest()}
        </ContentContainer>
      </Panel>
    );
  }
}

ProjectsPanel.propTypes = {
  all: PropTypes.bool
};

export default ProjectsPanel;
