import React from 'react';
import styled from 'react-emotion';

import { MAX_MOBILE_WIDTH, IMAGES_URL } from '../../constants';

import Text from '../common/Text';
import SideMargin from '../common/SideMargin';
import TechLogo from '../common/TechLogo';
import VerticalSpacer from '../common/VerticalSpacer';
import CompanyLogo from './CompanyLogo';

const Container = styled('div')`
  position: relative;

  padding: 20px;
`;

const LeftColumn = styled('div')`
  display: inline-block;
  width: 70%;
  vertical-align: top;

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    width: 100%;
  }
`;

const RightColumn = styled('div')`
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
        <LeftColumn>
          <Text type="headline3">CloudHealth Tech</Text>

          <SideMargin margin="1.5%">
            <Text type="headline6" header>
              Software Engineering Intern
            </Text>
          </SideMargin>

          <Text type="body1">
            <SideMargin margin="1%">
              <p>
                CloudHealth Technologies was my first software developing job and I worked there for
                two summers in high school (between eighth grade->freshman year and freshman
                year->sophomore year). This was a formational experience for me because it gave me
                my first experience working on a project larger than me and working as part of a
                team.
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
            </SideMargin>
          </Text>
        </LeftColumn>

        <RightColumn>
          <center>
            <br />
            <br />
            <CompanyLogo
              to="https://www.cloudhealthtech.com/"
              src={`${IMAGES_URL}cloudhealth.svg`}
              alt="CloudHealth Tech"
              width="300px"
            />
            <br />

            <VerticalSpacer margin="2.5%" />
            <Text type="caption">June 2014 - August 2015 (two summers)</Text>
            <VerticalSpacer margin="1%" />

            <Text type="headline6">Key Technologies</Text>

            <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
              <TechLogo
                src="logos/rails.png"
                alt="Ruby on Rails"
                href="https://rubyonrails.org/"
                width="80px"
              />
              <TechLogo src="logos/aws.png" alt="AWS" href="https://aws.amazon.com/" />
              <TechLogo src="logos/mysql.png" alt="MySQL" href="https://www.mysql.com/" />
            </div>
          </center>
        </RightColumn>
      </Container>
    );
  }
}

export default CloudHealth;
