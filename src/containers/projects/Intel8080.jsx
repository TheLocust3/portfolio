import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
import TechLogo from '../../components/common/TechLogo';
import ProjectImage from './ProjectImage';
import SplashScreen from '../../components/SplashScreen';

class Intel8080 extends React.Component {
  componentWillMount() {
    this.props.dispatch(setTitle('candidateXYZ'));
    this.props.dispatch(setSolidNavbar(false));
  }

  render() {
    return (
      <FadeIn>
        <SplashScreen
          src="/images/intel8080.jpeg"
          alt="Intel 8080 Emulator"
          header="Intel 8080 Emulator"
          height="60vh"
        />

        <Content>
          <Text type="body1">
            <ProjectImage src="/images/projects/intel8080_code.png" alt="Intel 8080 Code" />

            <Text type="headline4">Overview</Text>

            <p>
              An emulator for the Intel 8080, an 8-bit CPU released in 1974. It emulates all the
              registers, opcodes, and interrupt pins on the real CPU and runs CPU compatible
              programs.
            </p>

            <br />

            <center>
              <Text type="headline6">Key Technologies</Text>

              <p>
                <TechLogo
                  src="/images/logos/c.png"
                  alt="C"
                  href="https://en.wikipedia.org/wiki/C_%28programming_language%29"
                />
                <TechLogo
                  src="/images/logos/clion.png"
                  alt="CLion"
                  href="https://www.jetbrains.com/clion/"
                />
              </p>
            </center>

            <br />

            <Text type="headline4">Creation</Text>

            <p>
              During my sophomore year of high school, I became interested in emulators through my
              project to create a Gameboy Classic emulator for my calculator (which can be found
              here). This project inspired me to have another go at writing an emulator with a more
              practical and well defined CPU.
            </p>

            <p>
              I the idea of writing an emulator for the 8080 popped into my head while I was reading
              Code: The Hidden Language of Computer Hardware and Software, in which the author
              describes the inner workings of the 8080. The elegance of its insides inspired me to
              pull up the Intel manual and read more about the opcodes and registers. Through this,
              I decided that I wanted to give emulating this CPU a shot.
            </p>

            <p>
              So after reading through the entire manual, I felt confident enough to start writing
              the code, and quickly settled on C as my language of choice so that I could gain more
              experience in such a fundamental language.
            </p>

            <p>
              I started off by writing the main loop and basic registers and immediately decided
              that for each module and opcode that I wrote, I would write multiple unit tests. This
              was a huge lesson that I learned from my last attempt at writing an emulator which
              quickly got out of hand with bugs and unreadable code.
            </p>

            <p>
              With the help of the 8080 manual and hours of staring at the CPU’s pin diagrams, I
              completed my emulator, properly emulating everything on the CPU except limiting the
              clock speed (I’ve tried it before, it was painful).
            </p>

            <br />

            <Text type="headline4">Takeaways</Text>

            <p>
              Through this project I learned a load hard skills like C, proper testing, and an
              understanding of assembly (despite it being a variant from forty years ago). I also
              came away with a lot of soft skills like proper code organization and writing a
              project planning for it to scale to thousands more lines of code.
            </p>

            <a href="https://github.com/TheLocust3/Intel-8080-Emulator">GitHub</a>
          </Text>
        </Content>
      </FadeIn>
    );
  }
}

export default connect()(Intel8080);
