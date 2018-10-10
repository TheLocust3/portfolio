import React from 'react';
import styled from 'react-emotion';
import { Text } from 'react-material-components-web';

let Container = styled('div')`
    position: relative;

    height: 70vh;
    padding: 20px;
`;

class Intel8080 extends React.Component {
    render() {
        return (
            <Container>
                <Text type="headline3">Intel 8080 Emulator</Text>
            </Container>
        );
    }
}

export default Intel8080;
