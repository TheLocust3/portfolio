import React from 'react';
import { Text } from 'react-material-components-web';

import Panel from '../Panel';

class Intel8080Panel extends React.Component {
    render() {
        return (
            <Panel backgroundColor="#9e9e9e">
                <Text type="headline3">Intel 8080 Emulator</Text>
            </Panel>
        );
    }
}

export default Intel8080Panel;
