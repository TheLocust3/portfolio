import _ from 'lodash';
import styled from 'react-emotion';

let VerticalSpacer = styled('div')`
  margin-top: ${(props) => {
    if (_.isEmpty(props.leftMargin)) {
      if (_.isEmpty(props.margin)) {
        return '5%';
      }

      return props.margin;
    }

    return props.leftMargin;
  }};

  margin-bottom: ${(props) => {
    if (_.isEmpty(props.rightMargin)) {
      if (_.isEmpty(props.margin)) {
        return '5%';
      }

      return props.margin;
    }

    return props.rightMargin;
  }};
`;

export default VerticalSpacer;
