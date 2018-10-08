import React from 'react';
import styled from 'react-emotion';
import { Text } from 'react-material-components-web';

let Panel = styled('div')`
    color: white;
    background-color: #424242;
`;

class CandidateXYZPanel extends React.Component {
    render() {
        return (
            <Panel>
                <Text type="headline3">candidateXYZ</Text>
            </Panel>
        );
    }
}

export default CandidateXYZPanel;
