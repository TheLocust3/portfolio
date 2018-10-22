import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
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
                <SplashScreen src="/images/intel8080.jpeg" alt="Intel 8080 Emulator" header="Intel 8080 Emulator" height="60vh" />

                <Content>
                    <Text type="body1">
                        <p>
                            During my sophmore year of high school, I started to be interested in emulators through my project to create a Gameboy
                            Classic emulator for my calculator (a project that can be found on this site). This project inspired me to step by and
                            work on a more common and well defined CPU to try to emulate it properly and get a handle on the organization of
                            emulators.
                        </p>

                        <ProjectImage src="/images/projects/intel8080_code.png" alt="Intel 8080 Code" />

                        <p>
                            I got the idea to pursue an emulator of the Intel 8080 chip by reading the book Code: The Hidden Language of Computer
                            Hardware and Software, in which the author describes the inner workings of the 8080. The elegance of its insides inspired
                            me to pull up the Intel manual and read more about the opcodes and registers. Through this, I decided that I wanted to
                            give emulating this CPU a shot.
                        </p>

                        <p>
                            So after reading through the manual repeatedly, I felt confident enough to tackle actually writing the code. To do this I
                            decided that I wanted to write it in C, simply so that I had more experience in the language. I started off by writing the
                            main loop and basic registers and immediately decided that for each module and opcode that I wrote, I would write multiple
                            tests. This was a huge lesson that I learned from my last attempt at writing an emulator which quickly got out of hand
                            with bugs and unreadable code.
                        </p>

                        <p>
                            In the end, I had implemented all the opcodes in the 8080, the registers, and added the ability to register new
                            interrupts, making this emulator complete. The only piece that I didn't implement was the clock speed which would involve
                            slowing the program down so that the opcodes would be run at the proper times.
                        </p>

                        <p>
                            Through this project I learned a load hard skills like C and proper testing, but I also came away with a lot of soft
                            skills like proper code organization and writing a project so that it can scale to thousands more lines of code.
                        </p>
                    </Text>
                </Content>
            </FadeIn>
        );
    }
}

export default connect()(Intel8080);
