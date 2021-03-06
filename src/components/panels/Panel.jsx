import _ from 'lodash';
import styled from 'react-emotion';

import { MAX_MOBILE_WIDTH } from '../../constants';

let Panel = styled('div')`
  position: relative;
  color: ${(props) => (_.isEmpty(props.color) ? 'black' : props.color)};
  background-color: ${(props) => props.backgroundColor};

  min-height: 40vh;
  padding: 20px;
  margin-bottom: 5vh;

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    padding: 0;

    margin-bottom: 2.5vh;
  }
`;

export default Panel;
