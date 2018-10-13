import _ from 'lodash';
import styled from 'react-emotion';

let SideMargin = styled('div')`
    position: relative;

    margin-left: ${(props) => (_.isEmpty(props.margin) ? '5%' : props.margin)};
    margin-right: ${(props) => (_.isEmpty(props.margin) ? '5%' : props.margin)};
`;

export default SideMargin;
