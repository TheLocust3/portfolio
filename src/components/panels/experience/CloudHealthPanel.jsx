import React from 'react';
import { Text } from 'react-material-components-web';

import { colors } from '../../../constants';

import Panel from '../Panel';

class CloudHealthPanel extends React.Component {
    render() {
        return (
            <Panel color={colors.textBlack} backgroundColor="#eeeeee">
                <Text type="headline3">CloudHealth Technologies</Text>
            </Panel>
        );
    }
}

export default CloudHealthPanel;
