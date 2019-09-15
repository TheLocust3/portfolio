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

class Talla extends React.Component {
  render() {
    return (
      <Container>
        <LeftColumn>
          <Text type="headline3">Talla</Text>

          <SideMargin margin="1.5%">
            <Text type="headline6" header>
              Web Development Intern
            </Text>
          </SideMargin>

          <Text type="body1">
            <SideMargin margin="1%">
              <p>
                I joined Talla during the summer between my junior and senior years of high school.
                Talla Boston startup that builds intelligent Slackbots to manage common HR tasks.
              </p>

              <p>
                As a part of the dev team, I was given the task to built out a data annotation
                platform that would allow them to import Slack conversations and rate whether
                Talla's (their chatbot) response was correct or not and what it should be. This
                allowed their data scientists to rapidly improve their product and allowed them to
                outsource data annotation to contractors, speeding up the rate at which they could
                improve their product.
              </p>

              <p>
                On the team I participated in their full Agile process, and participated in all
                their meetings. This gave me great insight into how a small startup of around 20
                people worked and how informal management among peers works.
              </p>
            </SideMargin>
          </Text>
        </LeftColumn>

        <RightColumn>
          <center>
            <br />
            <br />
            <CompanyLogo
              to="https://talla.com/"
              src={`${IMAGES_URL}talla.png`}
              alt="Talla"
              width="150px"
            />
            <br />

            <VerticalSpacer margin="1%" />
            <Text type="caption">June 2017 - August 2017</Text>
            <VerticalSpacer margin="1%" />

            <Text type="headline6">Key Technologies</Text>

            <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
              <TechLogo
                src="logos/rails.png"
                alt="Ruby on Rails"
                href="https://rubyonrails.org/"
                width="80px"
              />
              <TechLogo
                src="logos/javascript.png"
                alt="Javascript (Babel)"
                href="https://babeljs.io/"
                width="105px"
              />
              <TechLogo src="logos/react.png" alt="React" href="https://reactjs.org/" />
              <TechLogo src="logos/redux.png" alt="Redux" href="https://redux.js.org/" />
              <TechLogo
                src="logos/postgresql.png"
                alt="PostgreSQL"
                href="https://www.postgresql.org/"
              />
              <TechLogo src="logos/aws.png" alt="AWS" href="https://aws.amazon.com/" />
              <TechLogo
                src="logos/terraform.png"
                alt="Terraform"
                href="https://www.terraform.io/"
              />
            </div>
          </center>
        </RightColumn>
      </Container>
    );
  }
}

export default Talla;
