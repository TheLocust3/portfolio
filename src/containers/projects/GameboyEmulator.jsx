import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
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
                <SplashScreen src="/images/gameboyemulator.jpeg" alt="Gameboy Emulator" header="Gameboy Emulator" height="60vh" />

                <Content>
                    <Text type="body1">
                        <p>
                            During my sophomore year, I was just getting into larger scale serious programming projects (I had been programming since
                            elementary school but never had taken on a truly large project). For school, I had a graphing calculator (the Ti-NSpire CX
                            CAS) which had a full color display and keyboard, which generally was completely overkill but for high schoolers, was a
                            ton of fun. With this calculator, you could run certain exploits that would allow it to run binary programs rather than
                            simply Lua scripts. This was of course used by high schoolers to play Gameboy games through an available emulator.
                        </p>

                        <ProjectImage src="/images/projects/gameboy_specs.png" alt="Gameboy Specs" />

                        <p>
                            The problem with this was that the exploits were patched every update and we'd have to wait long times as maintainers
                            attempted to break into the system again. This made me wonder, why do we even need to run a compiled emulator, why can I
                            write my own in Lua and skip the exploit process?
                        </p>

                        <p>
                            This question inspired me to learn the inner workings of the Gameboy and learn about emulator and CPU architecture. Over
                            the next months I read everything I could on the subject until I felt that I was ready to write my own emulator. This
                            process started by me writing a simple Ruby script to convert Gameboy machine code to Assembly so that I could figure out
                            what was actually on a ROM.
                        </p>

                        <p>
                            To my surprise, it was simply sequential instructions to the CPU (which shouldn't be very suprising but I was 15). This
                            made me think (incorrectly, but still), that all I would have to do was simply implement run these commands and I would be
                            able to play Mario.
                        </p>

                        <p>
                            Then came the hard part, I started straight away implementing the opcodes that made up the CPU (of which there are
                            hundreds). This process eventually led me to completely scrap it and start over because the program was becoming unwieldy.
                            In the end, I managed to implement all the opcodes in the CPU and the interrupts but failed to get it to render the
                            screen. This was mostly because the program became incredibly unweildy, mainly due to the fact that it was never properly
                            tested.
                        </p>

                        <p>
                            This project was the first thing that got be truly obsessed with programming at all times. In the end, while it never
                            completely worked I learned so many hard skills like how to write an emulator, assembly, and low level computer
                            architecture. I also learned many soft skills like how the organize large projects, the importance of fully testing code,
                            and how to tackle a large project.
                        </p>
                    </Text>
                </Content>
            </FadeIn>
        );
    }
}

export default connect()(GameboyEmulator);
