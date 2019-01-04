import React from 'react';
import styled, { css } from 'react-emotion';

import { MAX_MOBILE_WIDTH } from '../../constants';
import Text from '../common/Text';
import SideMargin from '../common/SideMargin';

let Container = styled('div')`
  position: relative;

  padding: 20px;
`;

let imageClass = css`
  width: 500px;

  float: right;

  margin-top: 30px;
  margin-left: 20px;
  margin-right: 40px;
  margin-bottom: 20px;

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    width: 90%;
    margin: 5%;
  }
`;

class CloudHealth extends React.Component {
  render() {
    return (
      <Container>
        <Text type="headline3" header>
          CloudHealth Tech
        </Text>
        <br />

        <Text type="body1">
          <img className={imageClass} src="/images/cloudhealth.svg" alt="CloudHealth Tech" />

          <SideMargin margin="0.5%">
            <a href="https://www.cloudhealthtech.com/">Website</a>
          </SideMargin>

          <p>
            CloudHealth Technologies was my first software developing job and I worked there for two
            summers in high school (between eighth grade->freshman year and freshman year->sophomore
            year). This was a formational experience for me because it gave me my first experience
            working on a project larger than me and working as part of a team.
          </p>

          <p>
            While at CloudHealth I focused mainly on bug fixing and adding new features. While this
            doesn't seem like much in retrospect, at that young age it was a tremendous opportunity
            for me.
          </p>

          <p>
            While there I got my first experience working in a team environment, and learning modern
            software development techniques like Agile and Scrum. This experience has shaped me as a
            software developer.
          </p>
          <br />

          <Text type="headline6">Key Technologies</Text>
          <p>Ruby on Rails, Amazon Web Services, and MySQL</p>
        </Text>
      </Container>
    );
  }
}

export default CloudHealth;
