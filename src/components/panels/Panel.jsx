import _ from 'lodash';
import styled from 'react-emotion';

let Panel = styled('div')`
    color: ${(props) => (_.isEmpty(props.color) ? 'white' : props.color)};
    background-color: ${(props) => props.backgroundColor};

    height: 60vh;
    padding: 20px;
`;

export default Panel;
