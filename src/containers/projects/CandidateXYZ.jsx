import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
import TechLogo from '../../components/common/TechLogo';
import ProjectImage from './ProjectImage';
import SplashScreen from '../../components/SplashScreen';
import SideMargin from '../../components/common/SideMargin';

class CandidateXYZ extends React.Component {
  componentWillMount() {
    this.props.dispatch(setTitle('candidateXYZ'));
    this.props.dispatch(setSolidNavbar(false));
  }

  render() {
    return (
      <FadeIn>
        <SplashScreen
          src="/images/candidatexyz.jpeg"
          alt="candidateXYZ"
          header="candidateXYZ"
          height="60vh"
        />

        <Content>
          <Text type="body1">
            <ProjectImage
              src="/images/projects/candidatexyz_finance.png"
              alt="candidateXYZ Finance"
            />

            <Text type="headline4">Overview</Text>

            <p>
              CandidateXYZ is a web app created to give everyone the opportunity to run for office
              regardless of prior experience, connections, and money. The application helps
              candidates set up a campaign to run for office by forming a committee allowing them to
              raise money, and streamlining the complex job of tracking a campaign’s expenses.
            </p>

            <p>
              With this information, it automatically generates campaign finance forms so that
              candidates can focus on campaigning for office rather than dealing with the complex
              law surrounding running for office. The product also acts as a dashboard for a
              campaign’s website by tracking engagement, volunteers, and managing email lists.
            </p>

            <br />
            <br />

            <center>
              <Text type="headline6">Key Technologies</Text>

              <p>
                <TechLogo
                  src="/images/logos/rails.png"
                  alt="Ruby on Rails"
                  href="https://rubyonrails.org/"
                />
                <TechLogo
                  src="/images/logos/javascript.png"
                  alt="Javascript (Babel)"
                  href="https://babeljs.io/"
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
              </p>
            </center>

            <br />

            <Text type="headline4">Creation</Text>

            <p>
              I began building candidateXYZ near the end of my senior year with the vision of a
              world where anyone could decide to run for office creating a wealth of new candidates
              who cut across our current political divisions. My initial product idea was to build a
              product like Wordpress or Squarespace but tailored for the needs of small political
              campaigns. With this in mind I began building a generic candidate’s website that would
              be easily modifiable by me.
            </p>

            <p>
              I sold this initial product to a local party committee in my area after meeting with
              the chairwoman. With this done, I quickly moved on to making the website customizable
              by the user.
            </p>

            <p>
              I invested significant amounts of time in building out a user friendly interface and
              extensible backend to allow people with lower technical skills to adjust the website
              to their liking, but before I completed the final product, I started doing customer
              research and realized that people simply didn’t want this product. I had initially
              defined my target market as adults under the age of forty running for office, these
              people were generally tech-savvy and, as a result, gravitated towards current
              customizable solutions like Squarespace.
            </p>

            <p>
              After this realization, I scrapped my work on a Squarespace clone and pivoted to
              focusing on the other side of making running office easier: the complex laws
              candidates must navigate through. After a few interviews, I was focused my initial
              product on the initial paperwork involved in setting up a campaign and campaign
              finance reporting. With this in mind, I built out an MVP, restricting my product to
              candidates for local office in Massachusetts.
            </p>

            <p>
              With the new understanding of the market I was in by building this product, I realized
              my product simply didn’t fill a deep consumer need. Candidates weren’t being held back
              for running for office because there was a lot of paperwork, nor were they being held
              back because they couldn’t get people to run their campaign’s for them. They were be
              held back due to social and commitment reasons. Simply put, running for office is
              exhausting, and my product didn’t address this fatal issue.
            </p>

            <p>
              By the end of this journey, my summer had ended, and I was starting school at
              Northeastern. I knew that I wouldn’t have the time to keep working on this while
              managing my transition to college, so I shut down work on the company and left the
              websites up for as long as there was money to do so.
            </p>

            <br />

            <Text type="headline4">Takeaways</Text>

            <p>
              I learned a ton through the nearly half year that I worked on candidateXYZ. The
              process of taking a field I wasn’t familiar with and rapidly learning about it through
              building a product taught me a lot. My biggest downfall was that I laid low and built
              my product for too long ignoring the valuable insights that would have come from real
              conversations to my potential customers.
            </p>

            <p>
              While I might have failed to build a successful business, I did build many important
              relationships in my community and learned the foundations of the building a real
              business, experience which I plan to take forward to my future endeavours.
            </p>

            <div>
              <a href="https://candidatexyz.com">candidateXYZ Website</a>
              <br />
              <br />

              <Text type="headline6">GitHub Repos</Text>

              <SideMargin margin="1%">
                <a href="https://github.com/TheLocust3/candidatexyz-app">candidateXYZ App</a>
                <br />

                <a href="https://github.com/TheLocust3/candidatexyz-website">
                  candidateXYZ Website
                </a>
                <br />

                <a href="https://github.com/TheLocust3/candidatexyz-2.0">candidateXYZ MVP</a>
                <br />

                <a href="https://github.com/TheLocust3/candidatexyz-volunteer-api">
                  candidateXYZ Volunteer API
                </a>
                <br />

                <a href="https://github.com/TheLocust3/candidatexyz-user-api">
                  candidateXYZ Auth API
                </a>
                <br />

                <a href="https://github.com/TheLocust3/candidatexyz-mailer-api">
                  candidateXYZ Mailer API
                </a>
                <br />

                <a href="https://github.com/TheLocust3/candidatexyz-common">
                  candidateXYZ Common Rails Code
                </a>
                <br />

                <a href="https://github.com/TheLocust3/candidatexyz-common-js">
                  candidateXYZ Common JS Code
                </a>
                <br />

                <a href="https://github.com/TheLocust3/candidatexyz-1.0">candidateXYZ Old MVP</a>
              </SideMargin>
            </div>
          </Text>
        </Content>
      </FadeIn>
    );
  }
}

export default connect()(CandidateXYZ);
