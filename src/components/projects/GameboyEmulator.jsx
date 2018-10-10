import React from 'react';
import styled from 'react-emotion';
import { Text } from 'react-material-components-web';

let Container = styled('div')`
    position: relative;

    height: 70vh;
    padding: 20px;
`;

class GameboyEmulator extends React.Component {
    render() {
        return (
            <Container>
                <Text type="headline3">Gameboy Emulator for the Ti-Nspire</Text>
            </Container>
        );
    }
}

export default GameboyEmulator;
