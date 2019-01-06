import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { Text } from 'react-material-components-web';

import { colors } from '../../constants';

let textClass = css`
  color: ${colors.textBlack};
`;

let headerClass = css`
  text-transform: uppercase;
`;

let bodyClass = css`
  color: ${colors.textBlackLighter};
`;

let accentClass = css`
  color: ${colors.accent};
`;

class StyledText extends React.Component {
  render() {
    let { header, accent, type, className, children, ...props } = this.props;

    return (
      <Text
        type={type}
        className={`${_.isEmpty(className) ? '' : className} ${textClass} ${
          _.includes(type, 'body') ? bodyClass : ''
        } ${header ? headerClass : ''} ${accent ? accentClass : ''}`}
        {...props}>
        {children}
      </Text>
    );
  }
}

StyledText.propTypes = {
  type: PropTypes.string,
  header: PropTypes.bool,
  accent: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any
};

export default StyledText;
