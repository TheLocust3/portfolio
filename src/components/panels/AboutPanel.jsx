import React from 'react';
import styled from 'react-emotion';
import { Text } from 'react-material-components-web';

let Panel = styled('div')`
    position: relative;

    height: 60vh;
    padding-top: 20px;
    padding-bottom: 20px;
`;

class AboutPanel extends React.Component {
    render() {
        return (
            <Panel>
                <center>
                    <Text type="headline2">About Me</Text>
                </center>
            </Panel>
        );
    }
}

export default AboutPanel;
