import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

import { colors } from '../../constants';

let navbarLink = css`
  margin-left: 3%;

  cursor: pointer;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: #cccccc;
  }
`;

let navbarLinkSolid = css`
  color: ${colors.fontBlack};

  &:hover {
    color: ${colors.linkBlackHover};
  }
`;

class NavbarLink extends React.Component {
  render() {
    let { to, solid, children } = this.props;

    return (
      <Link
        className={`mdc-typography--headline6 ${navbarLink} ${solid ? navbarLinkSolid : ''}`}
        to={to}>
        {children}
      </Link>
    );
  }
}

NavbarLink.propTypes = {
  to: PropTypes.string.isRequired,
  solid: PropTypes.bool,
  children: PropTypes.any
};

export default NavbarLink;
