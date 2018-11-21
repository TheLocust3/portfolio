import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
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
            <p>
              CandidateXYZ is a web app created to make running for office attainable for everyone
              overcoming a lack of experience, connections, and money. I began building it during
              the end of my senior year and spent the summer trying to turn it into a company.
            </p>

            <ProjectImage
              src="/images/projects/candidatexyz_finance.png"
              alt="candidateXYZ Finance"
            />

            <p>
              In the end, I turned it into an LLC and worked long hours trying to find customers for
              it and develop the platform further. Over the summer I learned many lessons about
              running a company (despite it just being myself), finding mentors and early adopters,
              and building a winning product.
            </p>

            <p>
              CandidateXYZ tracked local candidate's finances, generating monthly financial reports
              that were required to be reported to the government. It also managed email lists,
              volunteers, and tracked website visitors. For my first customers, my goal was to build
              them a custom website and integrate it directly with my platform.
            </p>

            <p>
              After the summer, I decided to shut the company down because it had lost steam (and
              college was keeping me incredibly busy). Looking back, I made two main mistakes.
              First, I built a product to what I percieved to be issues in an industry I didn't know
              without building it with my customers and learning from them.
            </p>

            <p>
              This first mistake led straight into my second mistake which was that the laws and
              paperwork around running for office aren't the things holding people back from running
              for office. In fact, these tasks are generally not even done by the candidate (it is
              mostly done by the Treasurer, a position that campaigns are required by law to fill).
            </p>

            <p>
              Despite this projects relative failure, I still learned a ton about programming and
              general skills. A few of the hard skills I learned were React/modern web development,
              scalable AWS infastructure (through Terraform), and writing a large Rails app. Even
              better were the countless soft skills I gained over the summer like juggling hundreds
              of different tasks, writing a huge app, managing customer relations, and microservice
              architecture.
            </p>

            <div>
              <a href="https://candidatexyz.com">candidateXYZ Website</a>
              <br />
              <br />

              <Text type="headline6">GitHub</Text>

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
