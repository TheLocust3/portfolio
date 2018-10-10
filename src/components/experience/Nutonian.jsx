import React from 'react';
import styled from 'react-emotion';
import { Text } from 'react-material-components-web';

let Container = styled('div')`
    position: relative;

    height: 70vh;
    padding: 20px;
`;

class Nutonian extends React.Component {
    render() {
        return (
            <Container>
                <Text type="headline3">Nutonian</Text>
            </Container>
        );
    }
}

export default Nutonian;
