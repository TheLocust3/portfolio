import React from 'react';
import styled from 'react-emotion';

import { MAX_MOBILE_WIDTH } from '../../constants';

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

class Nutonian extends React.Component {
  render() {
    return (
      <Container>
        <LeftColumn>
          <Text type="headline3">Nutonian</Text>

          <SideMargin margin="1.5%">
            <Text type="headline6" header>
              QA Engineering Intern
            </Text>
          </SideMargin>

          <Text type="body1">
            <SideMargin margin="1%">
              <p>
                I worked at Nutonian, a startup that developed a general purpose machine learning
                platform, during the summer before my sophomore year of high school. There I worked
                as a one of two QA developers. As a result I got a full view into how QA and DevOps
                worked and their interaction with the wider software development world.
              </p>

              <p>
                As a QA developer, I built their first performance testing suite which allowed them
                to track their API performance over time and make sure no one change suddenly
                bloated the API. I also maintained many fully automated Selenium tests, learning how
                to develop maintainable automated browser tests and testable websites.
              </p>

              <p>
                The major hard skills I learned there were Python+PyTest, Selenium, and code
                testing. I learned even more soft skills like testing a major projects, getting
                familiar with an entire product's codebase in a short amount of time, and how to
                write good, testable code.
              </p>
            </SideMargin>
          </Text>
        </LeftColumn>

        <RightColumn>
          <center>
            <br />
            <CompanyLogo
              to="https://www.nutonian.com/"
              src="/images/nutonian.png"
              alt="Nutonian"
              width="300px"
            />

            <Text type="caption">June 2016 - August 2016</Text>
            <VerticalSpacer margin="1%" />

            <Text type="headline6">Key Technologies</Text>

            <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
              <TechLogo
                src="/images/logos/python.png"
                alt="Python"
                href="https://www.python.org/"
              />
              <TechLogo
                src="/images/logos/pytest.png"
                alt="PyTest"
                href="https://docs.pytest.org/en/latest/"
              />
              <TechLogo src="/images/logos/jenkins.png" alt="Jenkins" href="https://jenkins.io/" />
              <TechLogo src="/images/logos/java.png" alt="Java" href="https://www.java.com/en/" />
              <TechLogo
                src="/images/logos/selenium.png"
                alt="Selenium"
                href="https://www.seleniumhq.org/"
              />
            </div>
          </center>
        </RightColumn>
      </Container>
    );
  }
}

export default Nutonian;
