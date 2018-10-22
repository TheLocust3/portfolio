import React from 'react';
import styled, { css } from 'react-emotion';

import Text from '../common/Text';
import Content from '../common/Content';
import Panel from './Panel';

let RoundedImage = styled('div')`
    position: relative;
    overflow: hidden;

    height: 250px;
    width: 250px;
    border-radius: 50%;
`;

let image = css`
    position: absolute;
    transform: translate(-50%, -5%);
    left: 50%;
    margin-right: -50%;

    height: 40vh;
`;

class AboutPanel extends React.Component {
    render() {
        return (
            <Panel>
                <br />

                <center>
                    <Text type="headline4" header>
                        About Me
                    </Text>
                    <br />
                    <br />

                    <RoundedImage>
                        <img src="/images/jake.png" alt="Jake" className={image} />
                    </RoundedImage>
                    <br />

                    <Content margin="30%" style={{ marginTop: '0', marginBottom: '0' }}>
                        <Text type="body2">
                            I'm a software developer, and entrepreneur, with a passion for building technology. Currently a Freshman Computer Science
                            student at Northeastern.
                        </Text>
                    </Content>
                </center>
            </Panel>
        );
    }
}

export default AboutPanel;
