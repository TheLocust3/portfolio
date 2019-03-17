import _ from 'lodash';
import styled from 'react-emotion';

let SideMargin = styled('div')`
  position: relative;

  margin-left: ${(props) => {
    if (_.isEmpty(props.leftMargin)) {
      if (_.isEmpty(props.margin)) {
        return '5%';
      }

      return props.margin;
    }

    return props.leftMargin;
  }};

  margin-right: ${(props) => {
    if (_.isEmpty(props.rightMargin)) {
      if (_.isEmpty(props.margin)) {
        return '5%';
      }

      return props.margin;
    }

    return props.rightMargin;
  }};
`;

export default SideMargin;
