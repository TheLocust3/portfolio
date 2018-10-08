import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

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
    color: #212121;

    &:hover {
        color: #333333;
    }
`;

class NavbarLink extends React.Component {
    render() {
        let { to, solid, children } = this.props;

        return (
            <Link className={`mdc-typography--headline6 ${navbarLink} ${solid ? navbarLinkSolid : ''}`} to={to}>
                {children}
            </Link>
        );
    }
}

NavbarLink.propTypes = {
    to: PropTypes.string,
    solid: PropTypes.bool,
    children: PropTypes.any
};

export default NavbarLink;
