import React from 'react';
import { Text } from 'react-material-components-web';

import MiddleCenter from '../../common/MiddleCenter';
import TitlePanel from '../TitlePanel';

class ProjectsPanel extends React.Component {
    render() {
        return (
            <TitlePanel>
                <MiddleCenter>
                    <Text type="headline2">Projects</Text>
                </MiddleCenter>
            </TitlePanel>
        );
    }
}

export default ProjectsPanel;
