import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import { colors, MAX_MOBILE_WIDTH } from '../../constants';

import MaterialIcon from '../common/MaterialIcon';
import UnstyledLink from '../common/UnstyledLink';

let ProjectContainer = styled('div')`
  position: relative;

  padding: 40px;
  padding-top: 5vh;
  padding-bottom: 5vh;

  margin-top: -1px;

  border: 1px solid ${colors.accent};
  border-left: 0;
  border-right: 0;

  cursor: pointer;

  -webkit-transition: background-color 400ms ease;
  -ms-transition: background-color 400ms ease;
  transition: background-color 400ms ease;

  &:hover {
    background-color: rgba(
      ${colors.accentRGB.r},
      ${colors.accentRGB.g},
      ${colors.accentRGB.b},
      0.05
    );
  }

  &:hover .mdc-typography--headline5 div {
    color: ${colors.accent} !important;
  }

  &:hover i {
    opacity: 1;
  }

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    padding: 20px;
    padding-top: 2.5vh;
    padding-bottom: 2.5vh;
  }

  .mdc-typography--headline5 div {
    -webkit-transition: color 300ms ease;
    -ms-transition: color 300ms ease;
    transition: color 300ms ease;
  }
`;

let arrowClass = css`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0%, -50%);

  -webkit-transition: opacity 500ms ease;
  -ms-transition: opacity 500ms ease;
  transition: opacity 500ms ease;

  opacity: 0;
  color: ${colors.accent};
`;

class Project extends React.Component {
  render() {
    let { to, children, ...props } = this.props;

    return (
      <UnstyledLink to={to}>
        <ProjectContainer {...props}>
          {children}

          <MaterialIcon icon="arrow_forward" className={arrowClass} />
        </ProjectContainer>
      </UnstyledLink>
    );
  }
}

Project.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default Project;
