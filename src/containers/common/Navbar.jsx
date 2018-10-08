import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';

import NavbarLink from './NavbarLink';

let NavbarDiv = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;

    padding-top: 3%;

    color: white;
    font-size: 20px;
`;

let solidNavbar = css`
    position: relative;
    padding-top: 3%;
`;

class Navbar extends React.Component {
    render() {
        return (
            <NavbarDiv className={this.props.solidNavbar ? solidNavbar : ''}>
                <NavbarLink to="/" solid={this.props.solidNavbar}>
                    Home
                </NavbarLink>

                <NavbarLink to="/projects" solid={this.props.solidNavbar}>
                    Projects
                </NavbarLink>

                <NavbarLink to="/blog" solid={this.props.solidNavbar}>
                    Blog
                </NavbarLink>
            </NavbarDiv>
        );
    }
}

function mapStateToProps(state) {
    return {
        solidNavbar: state.global.solidNavbar
    };
}

export default connect(mapStateToProps)(Navbar);
