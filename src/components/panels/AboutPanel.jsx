import React from 'react';
import styled, { css } from 'react-emotion';

import Text from '../common/Text';
import Content from '../common/Content';
import Panel from './Panel';

let RoundedImage = styled('div')`
    position: relative;
    overflow: hidden;

    height: 35vh;
    width: 30vh;
    border-radius: 3%;
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
                        <img src="/jake.png" alt="Jake" className={image} />
                    </RoundedImage>
                    <br />

                    <Content margin="30%" style={{ marginTop: '0', marginBottom: '0' }}>
                        <Text type="body2">
                            Software developer since elementary school, and entrepreneur, with a passion for building technology. Currently a Freshman
                            Computer Science student at Northeastern.
                        </Text>
                    </Content>
                </center>
            </Panel>
        );
    }
}

export default AboutPanel;
