import _ from 'lodash';
import styled from 'react-emotion';

let Panel = styled('div')`
    position: relative;
    color: ${(props) => (_.isEmpty(props.color) ? 'black' : props.color)};
    background-color: ${(props) => props.backgroundColor};

    min-height: 50vh;
    padding: 20px;
    margin-bottom: 5vh;
`;

export default Panel;
