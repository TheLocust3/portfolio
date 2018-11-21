import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

class Icon extends React.Component {
  render() {
    let size = _.isUndefined(this.props.size) ? '18px' : `${this.props.size}px`;

    return (
      <i
        className={`${this.props.brand ? 'fab' : 'fas'} fa-${this.props.icon}`}
        style={{ fontSize: size }}
        aria-hidden="true"
      />
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  brand: PropTypes.bool
};

export default Icon;
