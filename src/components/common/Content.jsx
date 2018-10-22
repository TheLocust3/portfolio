import _ from 'lodash';
import styled from 'react-emotion';

import { MAX_MOBILE_WIDTH } from '../../constants';

let Content = styled('div')`
    position: relative;

    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: ${(props) => (_.isUndefined(props.margin) ? '5%' : `${props.margin}%`)};
    margin-right: ${(props) => (_.isUndefined(props.margin) ? '5%' : `${props.margin}%`)};

    @media (max-width: ${MAX_MOBILE_WIDTH}) {
        margin-top: 5%;
        margin-left: ${(props) => (_.isUndefined(props.margin) ? '2.5%' : `${props.margin / 2}%`)};
        margin-right: ${(props) => (_.isUndefined(props.margin) ? '2.5%' : `${props.margin / 2}%`)};
    }
`;

export default Content;
