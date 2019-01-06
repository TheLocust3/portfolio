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
  width: 150px;
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

class Talla extends React.Component {
  render() {
    return (
      <Container>
        <Text type="headline3" header>
          Talla
        </Text>
        <br />

        <Text type="body1">
          <div className={leftColumn}>
            <SideMargin margin="0.5%">
              <a href="https://talla.com/">Website</a>
            </SideMargin>

            <p>
              I joined Talla during the summer between my junior and senior years of high school.
              Talla is company that builds intelligent Slackbots to manage common HR tasks.
            </p>

            <p>
              As a part of the dev team, I was given the task to built out a data annotation
              platform that would allow them to import Slack conversations and rate whether Talla's
              (their chatbot) response was correct or not and what it should be. This allowed their
              data scientists to rapidly improve their product and allowed them to outsource data
              annotation to contractors, speeding up the rate at which they could improve their
              product.
            </p>

            <p>
              On the team I participated in their full Agile process, and participated in all their
              meetings. This gave me great insight into how a small startup of around 20 people
              worked and how informal management among peers works.
            </p>
          </div>

          <div className={rightColumn}>
            <center>
              <img className={imageClass} src="/images/talla.png" alt="Talla" />
              <br />

              <Text type="headline6">Key Technologies</Text>

              <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                <TechLogo
                  src="/images/logos/rails.png"
                  alt="Ruby on Rails"
                  href="https://rubyonrails.org/"
                  width="80px"
                />
                <TechLogo
                  src="/images/logos/javascript.png"
                  alt="Javascript (Babel)"
                  href="https://babeljs.io/"
                  width="105px"
                />
                <TechLogo src="/images/logos/react.png" alt="React" href="https://reactjs.org/" />
                <TechLogo src="/images/logos/redux.png" alt="Redux" href="https://redux.js.org/" />
                <TechLogo
                  src="/images/logos/postgresql.png"
                  alt="PostgreSQL"
                  href="https://www.postgresql.org/"
                />
                <TechLogo src="/images/logos/aws.png" alt="AWS" href="https://aws.amazon.com/" />
                <TechLogo
                  src="/images/logos/terraform.png"
                  alt="Terraform"
                  href="https://www.terraform.io/"
                />
                <TechLogo
                  src="/images/logos/vscode.png"
                  alt="VSCode"
                  href="https://code.visualstudio.com/"
                />
              </div>
            </center>
          </div>
        </Text>
      </Container>
    );
  }
}

export default Talla;
