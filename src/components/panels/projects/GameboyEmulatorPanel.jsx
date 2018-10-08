import React from 'react';
import { Text } from 'react-material-components-web';

import Panel from '../Panel';

class GameboyEmulatorPanel extends React.Component {
    render() {
        return (
            <Panel backgroundColor="#f44336">
                <Text type="headline3">Ti-Nspire Gameboy Emulator</Text>
            </Panel>
        );
    }
}

export default GameboyEmulatorPanel;
