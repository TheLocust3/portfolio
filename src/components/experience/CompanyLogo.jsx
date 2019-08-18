import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Image = styled('img')`
  -webkit-filter: brightness(100%);
  -moz-filter: brightness(100%);
  filter: brightness(100%);
  transition: all 0.2s ease;

  overflow: hidden;
  border-radius: 5px;

  &:hover {
    -webkit-filter: brightness(80%);
    -moz-filter: brightness(80%);
    filter: brightness(80%);
  }
`;

class CompanyLogo extends React.Component {
  render() {
    let { src, alt, width, to, ...props } = this.props;

    return (
      <a href={to} {...props}>
        <Image width={width} src={src} alt={alt} />
      </a>
    );
  }
}

CompanyLogo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  to: PropTypes.string
};

export default CompanyLogo;
