import React from 'react';
import { Text } from 'react-material-components-web';

import MiddleCenter from '../../common/MiddleCenter';
import TitlePanel from '../TitlePanel';

class ExperiencePanel extends React.Component {
    render() {
        return (
            <TitlePanel>
                <MiddleCenter>
                    <Text type="headline2">Professional Experience</Text>
                </MiddleCenter>
            </TitlePanel>
        );
    }
}

export default ExperiencePanel;
