import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
import TechLogo from '../../components/common/TechLogo';
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
            <ProjectImage src="/images/projects/pong.png" alt="3D Pong" />

            <Text type="headline4">Overview</Text>

            <p>
              A Java program built to play 3D pong for the user by detecting the location of the
              ball and moving the paddle towards it as fast as possible.
            </p>

            <br />

            <center>
              <Text type="headline6">Key Technologies</Text>

              <p>
                <TechLogo src="/images/logos/java.png" alt="Java" href="https://www.java.com/en/" />
                <TechLogo
                  src="/images/logos/intellij.png"
                  alt="IntelliJ"
                  href="https://www.jetbrains.com/idea/"
                />
              </p>
            </center>

            <br />

            <Text type="headline4">Creation</Text>

            <p>
              The idea for this project started while my friend and I were procrastinating writing
              code for our high school robotics team (and also not studying for midterms) during my
              freshman year. The whole Programming Team was sitting around playing this incredibly
              hard 3D Pong game when my friend and I realized that we could probably write an aimbot
              that played it for us.
            </p>

            <p>
              Since we were very competitive, so we decided to set it up as a competition of who
              could get to a higher difficulty level, so we both got to work. I realized that the
              best way to go about it would be to simply track the ball and move the cursor to
              match. While it would be simple using off the shelf libraries like OpenCV or other
              vision tracking systems, I decided to get experience rolling my own system.
            </p>

            <p>
              In the end, this involved me repeatedly taking screenshots through Java, processing
              only certain bits of the image, implementing all sorts of common vision techniques,
              and concurrently processing pieces of the image. This required many hours of tweaking
              and optimizing my code until it could finally beat my friend's aimbot.
            </p>

            <br />

            <Text type="headline4">Takeaways</Text>

            <p>
              While this program was somewhat simple looking back, it was foundational to the
              programmer I am today. I learned many hard skills like fluency in Java and learning
              about computer vision processing techniques. I also learned many soft skills like
              optimization and how to get as much performance out of a system through small tweaks.
            </p>

            <a href="https://github.com/TheLocust3/Java-3D-Pong-Aimbot">GitHub</a>
          </Text>
        </Content>
      </FadeIn>
    );
  }
}

export default connect()(PongAimbot);
