import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
import ProjectImage from './ProjectImage';
import SplashScreen from '../../components/SplashScreen';

class PongAimbot extends React.Component {
  componentWillMount() {
    this.props.dispatch(setTitle('candidateXYZ'));
    this.props.dispatch(setSolidNavbar(false));
  }

  render() {
    return (
      <FadeIn>
        <SplashScreen
          src="/images/pongaimbot.jpeg"
          alt="3D Pong Aimbot"
          header="3D Pong Aimbot"
          height="60vh"
        />

        <Content>
          <Text type="body1">
            <p>
              The idea for this started while we were procrastinating writing code for my high
              school's robotics team (and not studying for my first midterms ever) during my
              freshman year. The whole Programming Team was sitting around playing this incredibly
              hard 3D Pong game when my friend and I realized that we could write an aimbot that
              played it for us.
            </p>

            <ProjectImage src="/images/projects/pong.png" alt="3D Pong" />

            <p>
              We were naturally very competitive, so we decided to set it up as a competition, so we
              both got to work. I realized that the best way to go about it would be to simply track
              the ball and move the cursor to match. It sounds simple, it wasn't.
            </p>

            <p>
              My first thought was to track the ball by accessing its location with Javascript,
              unfortunately, it was a Flash game, so I moved onto my next option of tracking it
              using some vision processing.
            </p>

            <p>
              In the end, this involved me repeatedly taking screenshots through Java, processing
              only certain bits of the image, and looking for the ball in four different quadrants,
              all being processed concurrently. This required many hours of tweaking and optimizing
              my code until it could finally be my friend's aimbot.
            </p>

            <p>
              While this program was somewhat simple looking back, it was foundational to the
              programming I am today. I learned many hard skills like becoming very fluent in Java
              and learning about computer vision processing techniques. I also learned many soft
              skills like optimization and how to get as much performance out of a system through
              small tweaks.
            </p>

            <a href="https://github.com/TheLocust3/Java-3D-Pong-Aimbot">GitHub</a>
          </Text>
        </Content>
      </FadeIn>
    );
  }
}

export default connect()(PongAimbot);
