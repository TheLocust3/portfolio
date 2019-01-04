import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import Text from './Text';

let outerClassName = css`
  position: relative;
  display: inline-block;

  margin-left: 1%;
  margin-right: 1%;

  &:hover div {
    opacity: 1;
  }
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

let tooltipClassName = css`
  opacity: 0;
  transition: all 0.5s ease;

  position: absolute;
  top: -30px;
  transform: translate(-50%, 0%);
  left: 50%;
  margin-right: -50%;

  height: 20px;

  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 10px;
  padding-right: 10px;

  background-color: #191919;
  border-radius: 3px;
`;

let Triangle = styled('div')`
  width: 0;
  height: 0;

  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid #191919;
`;

let textClassName = css`
  color: white;
`;

class TechLogo extends React.Component {
  render() {
    return (
      <div className={outerClassName}>
        <a href={this.props.href}>
          <img className={imgClassName} src={this.props.src} alt={this.props.alt} />
        </a>

        <div className={tooltipClassName} style={{ width: this.props.width }}>
          <Text className={textClassName} type="caption">
            {this.props.alt}
          </Text>

          <Triangle />
        </div>
      </div>
    );
  }
}

TechLogo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  width: PropTypes.string
};

export default TechLogo;
