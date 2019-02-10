import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
import TechLogo from '../../components/common/TechLogo';
import ProjectImage from './ProjectImage';
import SplashScreen from '../../components/SplashScreen';

class Intel8080 extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(false));
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - Project: Full Stack VM</title>
          <meta
            name="description"
            content="A virtual machine built from the ground up, emulating a complete CPU with a limited
            instruction set, building out an assembler for the emulator with plans to create higher level
            languages on top of it."
          />
        </Helmet>

        <FadeIn>
          <SplashScreen
            src="/images/full-stack-vm.jpeg"
            alt="Full Stack VM"
            header="Full Stack VM"
            height="60vh"
          />

          <Content>
            <Text type="body1">
              <ProjectImage src="/images/projects/vm.png" alt="VM Tests" />

              <Text type="headline4">Overview</Text>

              <p>
                A virtual machine built from the ground up, emulating a complete CPU with a limited
                instruction set, building out an assembler for the emulator with plans to create
                higher level languages on top of it.
              </p>

              <br />

              <center>
                <Text type="headline6">Key Technologies</Text>

                <div>
                  <TechLogo
                    src="/images/logos/rust.png"
                    alt="Rust"
                    href="https://www.rust-lang.org/"
                    black
                  />
                  <TechLogo src="/images/logos/cargo.png" alt="Cargo" href="https://crates.io/" />
                  <TechLogo
                    src="/images/logos/vscode.png"
                    alt="VSCode"
                    href="https://code.visualstudio.com/"
                  />
                </div>
              </center>

              <br />

              <Text type="headline4">Creation</Text>

              <p>
                During the last two weeks of my Fundamentals of Computer Science 1 class, we started
                learning about building our own simple functional programming languages. The core to
                this project was building a stack language that our new language could compile to
                and then be run as. This idea of a stack language was new to me and I immediately
                latched onto it, with ideas from my previous experiences of building emulators
                flooding back.
              </p>

              <p>
                A stack language seemed, to me, to be closely related to Assembly and machine code,
                but it could be used to build even higher level languages, something I’ve always
                wanted to pursue. So I married these two ideas together. What if, I thought, I could
                write an emulator to my own processor and slowly build up an entire stack around it?
                I could start with machine code, and go from assembly, to a stack language, to
                higher level languages interfacing with my monitor and hardware.
              </p>

              <p>
                With this pipedream in my mind, I started out building another emulator just like my
                previous ones except that for this one, I wasn’t reading complex CPU documentation,
                instead I was writing it. So after writing the bare minimum needed to describe my
                CPU, I was off to programming, this time with Rust, a language I had always heard a
                lot about but never given a shot.
              </p>

              <p>
                I took all the knowledge I had from my past programming projects, like building out
                clean code and writing extensive tests, and completed a fully functional emulator.
                This is where I hit the present day. As of right now, I am currently working on an
                assembly language variant that compiles to my own machine code, and has its own more
                complex subroutines that add functionality to a purposely limited instruction set.
              </p>

              <br />

              <Text type="headline4">Takeaways</Text>

              <p>
                So far it’s been a ride from the idea of just building another emulator to deciding
                that this would be the first step of building an entire custom stack. The more I
                continue, the more I learn about architecting code with extensible and clean design,
                keeping in mind that I don’t know entirely where this project will go. I am only
                starting this project despite the thousands of lines of code it already contains,
                but I’m sure that by the end of it, I’ll be back here writing another a conclusion.
              </p>

              <a href="https://github.com/TheLocust3/full-stack-vm">GitHub</a>
            </Text>
          </Content>
        </FadeIn>
      </div>
    );
  }
}

export default connect()(Intel8080);
