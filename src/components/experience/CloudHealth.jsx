import React from 'react';
import styled, { css } from 'react-emotion';

import { MAX_MOBILE_WIDTH } from '../../constants';

import Text from '../common/Text';
import SideMargin from '../common/SideMargin';
import TechLogo from '../common/TechLogo';

let Container = styled('div')`
  position: relative;

  padding: 20px;
`;

let imageClass = css`
  width: 300px;
`;

let leftColumn = css`
  display: inline-block;
  width: 70%;
  vertical-align: top;

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    width: 100%;
  }
`;

let rightColumn = css`
  display: inline-block;
  width: 30%;

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    width: 100%;
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
          <div className={leftColumn}>
            <SideMargin margin="0.5%">
              <a href="https://www.cloudhealthtech.com/">Website</a>
            </SideMargin>

            <p>
              CloudHealth Technologies was my first software developing job and I worked there for
              two summers in high school (between eighth grade->freshman year and freshman
              year->sophomore year). This was a formational experience for me because it gave me my
              first experience working on a project larger than me and working as part of a team.
            </p>

            <p>
              While at CloudHealth I focused mainly on bug fixing and adding new features. While
              this doesn't seem like much in retrospect, at that young age it was a tremendous
              opportunity for me.
            </p>

            <p>
              While there I got my first experience working in a team environment, and learning
              modern software development techniques like Agile and Scrum. This experience has
              shaped me as a software developer.
            </p>
          </div>

          <div className={rightColumn}>
            <center>
              <img className={imageClass} src="/images/cloudhealth.svg" alt="CloudHealth Tech" />
              <br />
              <br />

              <Text type="headline6">Key Technologies</Text>

              <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                <TechLogo
                  src="/images/logos/rails.png"
                  alt="Ruby on Rails"
                  href="https://rubyonrails.org/"
                  width="80px"
                />
                <TechLogo src="/images/logos/aws.png" alt="AWS" href="https://aws.amazon.com/" />
                <TechLogo src="/images/logos/mysql.png" alt="MySQL" href="https://www.mysql.com/" />
              </div>
            </center>
          </div>
        </Text>
      </Container>
    );
  }
}

export default CloudHealth;
