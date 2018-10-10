import _ from 'lodash';
import styled from 'react-emotion';

let Panel = styled('div')`
    position: relative;
    color: ${(props) => (_.isEmpty(props.color) ? 'black' : props.color)};
    background-color: ${(props) => props.backgroundColor};

    height: 95vh;
    padding: 20px;
`;

export default Panel;
