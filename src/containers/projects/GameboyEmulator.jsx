import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
import TechLogo from '../../components/common/TechLogo';
import ProjectImage from './ProjectImage';
import SplashScreen from '../../components/SplashScreen';

class GameboyEmulator extends React.Component {
  componentWillMount() {
    this.props.dispatch(setTitle('candidateXYZ'));
    this.props.dispatch(setSolidNavbar(false));
  }

  render() {
    return (
      <FadeIn>
        <SplashScreen
          src="/images/gameboyemulator.jpeg"
          alt="Gameboy Emulator"
          header="Gameboy Emulator"
          height="60vh"
        />

        <Content>
          <Text type="body1">
            <ProjectImage src="/images/projects/gameboy_specs.png" alt="Gameboy Specs" />

            <Text type="headline4">Overview</Text>

            <p>
              A Gameboy Classic emulator designed to be played on a Ti-NSpire CX CAS, a commonly
              used graphing calculator for my school. It emulates all the instructions, registers,
              memory, interrupts, key bindings, and ran as fast as possible (the calculator simply
              couldn’t run Lua at the full clock speed of the Gameboy). The only piece that was left
              out was drawing the image onto the screen.
            </p>

            <br />

            <center>
              <Text type="headline6">Key Technologies</Text>

              <div>
                <TechLogo src="/images/logos/lua.png" alt="Lua" href="https://www.lua.org/" />
                <TechLogo
                  src="/images/logos/ruby.png"
                  alt="Ruby"
                  href="https://www.ruby-lang.org/en/"
                />
                <TechLogo
                  src="/images/logos/sublime-text.png"
                  alt="Sublime Text"
                  href="https://www.sublimetext.com/"
                  width="75px"
                />
              </div>
            </center>

            <br />

            <Text type="headline4">Creation</Text>

            <p>
              During my sophomore year, I was just getting into larger scale programming projects (I
              had been programming since elementary school but never had taken on a truly large
              project). At the time, my school required me to own a Ti-NSpire CX CAS (a graphing
              calculator) which had a full color display and keyboard and was completely overkill
              what we were doing on it.
            </p>

            <p>
              Since we were high schoolers, we found out that you could run certain exploits that
              would allow the calculator to run binary programs rather than simply Lua scripts. This
              was of course used by high schoolers to play Gameboy games through an emulator ported
              to the calculators architecture.
            </p>

            <p>
              The problem with this was that the whole calculator would break everytime you updated
              it, and we'd have to wait until the maintainers attempted to find another exploit to
              crack the system again. This made me wonder why we even needed to run a fully compiled
              emulator when the calculator came with a built in scripting language
            </p>

            <p>
              This question inspired me to learn the inner workings of the Gameboy and learn about
              emulator and CPU architecture. Over the following months I read everything I could on
              the subject until I felt that I was ready to write my own emulator. This process
              started by me writing a simple disassembler, written in Ruby, to convert Gameboy
              machine code to Assembly so that I could figure out what was actually on a ROM.
            </p>

            <p>
              To my surprise, it was simply sequential instructions to the CPU (I was 15, cut me
              some slack). This made me think (incorrectly, but still), that all I would have to do
              was simply implement run these commands and I would be able to play Pokemon.
            </p>

            <p>
              Then came the hard part, I started straight away implementing the opcodes that made up
              the CPU (of which there are hundreds). This process eventually led me to completely
              scrap the program and start over because it became too unwieldy. In the end, I managed
              to implement all the opcodes in the CPU and the interrupts but failed to get it to
              render the screen. The biggest issue, ignoring the simple sluggishness of the
              calculator’s Lua implementation, was that I never unit tested the program leading to
              bugs popping up in weird places and slow program bloat.
            </p>

            <br />

            <Text type="headline4">Takeaways</Text>

            <p>
              This project was the first thing that got be truly obsessed with programming. In the
              end, while it never completely worked I learned so many hard skills like how to write
              an emulator, assembly, and low level computer architecture. I also learned many soft
              skills like how the organize large projects, the importance of fully testing code, and
              how to tackle a large project. But my biggest takeaway was the importance of testing
              and organization in combating program rot over time.
            </p>

            <a href="https://github.com/TheLocust3/Ti-Nspire-Gameboy-Classic-Emulator">GitHub</a>
          </Text>
        </Content>
      </FadeIn>
    );
  }
}

export default connect()(GameboyEmulator);
