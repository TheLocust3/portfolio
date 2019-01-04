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
  width: 400px;

  float: right;

  margin-right: 40px;
  margin-bottom: 20px;

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    width: 90%;
    margin: 5%;
  }
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
          <img className={imageClass} src="/images/nutonian.png" alt="Nutonian" />

          <SideMargin margin="0.5%">
            <a href="https://www.nutonian.com/">Website</a>
          </SideMargin>

          <p>
            I worked at Nutonian, a company that developed a general purpose machine learning
            platform, during the summer before my sophomore year of high school. There I worked as a
            one of two QA developers. As a result I got a full view into how QA and DevOps worked
            and their interaction with the wider software development world.
          </p>

          <p>
            As a QA developer, I built their first performance testing suite which allowed them to
            track their API performance over time and make sure no one change suddenly bloated the
            API. I also maintained many fully automated Selenium tests, learning how to develop
            maintainable automated browser tests and testable websites.
          </p>

          <p>
            The major hard skills I learned there were Python+PyTest, Selenium, and code testing. I
            learned even more soft skills like testing a major projects, getting familiar with an
            entire product's codebase in a short amount of time, and how to write good, testable
            code.
          </p>

          <br />

          <Text type="headline6">Key Technologies</Text>
          <p>Python, PyTest, Jenkins, Java, and Selenium</p>
        </Text>
      </Container>
    );
  }
}

export default Nutonian;
