import _ from 'lodash';
import styled from 'react-emotion';

let Content = styled('div')`
    position: relative;

    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: ${(props) => (_.isEmpty(props.margin) ? '5%' : props.margin)};
    margin-right: ${(props) => (_.isEmpty(props.margin) ? '5%' : props.margin)};
`;

export default Content;
