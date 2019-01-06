import React from 'react';
import styled, { css } from 'react-emotion';

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
`;

let rightColumn = css`
  display: inline-block;
  width: 30%;
`;

class Nutonian extends React.Component {
  render() {
    return (
      <Container>
        <Text type="headline3" header>
          Nutonian
        </Text>
        <br />

        <Text type="body1">
          <div className={leftColumn}>
            <SideMargin margin="0.5%">
              <a href="https://www.nutonian.com/">Website</a>
            </SideMargin>

            <p>
              I worked at Nutonian, a company that developed a general purpose machine learning
              platform, during the summer before my sophomore year of high school. There I worked as
              a one of two QA developers. As a result I got a full view into how QA and DevOps
              worked and their interaction with the wider software development world.
            </p>

            <p>
              As a QA developer, I built their first performance testing suite which allowed them to
              track their API performance over time and make sure no one change suddenly bloated the
              API. I also maintained many fully automated Selenium tests, learning how to develop
              maintainable automated browser tests and testable websites.
            </p>

            <p>
              The major hard skills I learned there were Python+PyTest, Selenium, and code testing.
              I learned even more soft skills like testing a major projects, getting familiar with
              an entire product's codebase in a short amount of time, and how to write good,
              testable code.
            </p>
          </div>

          <div className={rightColumn}>
            <center>
              <img className={imageClass} src="/images/nutonian.png" alt="Nutonian" />
              <br />

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
                <TechLogo
                  src="/images/logos/jenkins.png"
                  alt="Jenkins"
                  href="https://jenkins.io/"
                />
                <TechLogo src="/images/logos/java.png" alt="Java" href="https://www.java.com/en/" />
                <TechLogo
                  src="/images/logos/selenium.png"
                  alt="Selenium"
                  href="https://www.seleniumhq.org/"
                />
              </div>
            </center>
          </div>
        </Text>
      </Container>
    );
  }
}

export default Nutonian;
