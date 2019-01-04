import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

let aClassName = css`
  margin-left: 1%;
  margin-right: 1%;
`;

let imgClassName = css`
  height: 50px;
  width: 50px;

  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  filter: grayscale(100%);
  transition: all 0.5s ease;

  &:hover {
    -webkit-filter: grayscale(0%);
    -moz-filter: grayscale(0%);
    filter: grayscale(0%);
  }
`;

class TechLogo extends React.Component {
  render() {
    return (
      <a className={aClassName} href={this.props.href}>
        <img className={imgClassName} src={this.props.src} alt={this.props.alt} />
      </a>
    );
  }
}

TechLogo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default TechLogo;
