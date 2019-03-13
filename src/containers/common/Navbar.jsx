import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';

import { colors, MAX_MOBILE_WIDTH_NUMBER } from '../../constants';

import NavbarLink from './NavbarLink';
import MobileNavbar from './MobileNavbar';

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
  color: ${colors.textBlack};

  padding-top: 3%;
  margin-bottom: 5%;
`;

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lastRenderedWidth: $(document).width() };
  }

  updateDimensions() {
    let width = $(document).width();

    if (
      (this.state.lastRenderedWidth > MAX_MOBILE_WIDTH_NUMBER && width < MAX_MOBILE_WIDTH_NUMBER) ||
      (this.state.lastRenderedWidth < MAX_MOBILE_WIDTH_NUMBER && width > MAX_MOBILE_WIDTH_NUMBER)
    ) {
      this.setState({
        lastRenderedWidth: width
      });

      this.forceUpdate();
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.updateDimensions());
  }

  render() {
    if (this.state.lastRenderedWidth > MAX_MOBILE_WIDTH_NUMBER) {
      return (
        <div>
          <NavbarDiv className={this.props.solidNavbar ? solidNavbar : ''}>
            <NavbarLink to="/" solid={this.props.solidNavbar}>
              Home
            </NavbarLink>

            <NavbarLink to="/blog" solid={this.props.solidNavbar}>
              Blog
            </NavbarLink>

            <NavbarLink to="/projects" solid={this.props.solidNavbar}>
              Projects
            </NavbarLink>

            <NavbarLink to="/experience" solid={this.props.solidNavbar}>
              Experience
            </NavbarLink>

            <NavbarLink to="/Resume.pdf" solid={this.props.solidNavbar} externalLink>
              Resume
            </NavbarLink>
          </NavbarDiv>
        </div>
      );
    } else {
      return <MobileNavbar />;
    }
  }
}

function mapStateToProps(state) {
  return {
    solidNavbar: state.global.solidNavbar
  };
}

export default connect(mapStateToProps)(Navbar);
