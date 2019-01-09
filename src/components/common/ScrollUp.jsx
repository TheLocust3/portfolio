import $ from 'jquery';
import React from 'react';
import styled from 'react-emotion';

import { colors } from '../../constants';

import Icon from './Icon';
import MiddleCenter from './MiddleCenter';

let ScrollContainer = styled('div')`
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 5%;

  width: 40px;
  height: 50px;

  color: white;
  background-color: rgba(0, 0, 0, 0.5);

  -webkit-transition: background-color 150ms linear;
  -ms-transition: background-color 150ms linear;
  transition: background-color 150ms linear;

  &:hover {
    cursor: pointer;
    background-color: rgba(
      ${colors.accentRGB.r},
      ${colors.accentRGB.g},
      ${colors.accentRGB.b},
      0.6
    );
  }
`;

class ScrollUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { shown: false };
  }

  componentDidMount() {
    $(window).scroll(() => this.onScroll());
  }

  componentWillUnmount() {
    $(window).off('scroll');
  }

  onScroll() {
    if ($(window).scrollTop() > $(window).height()) {
      this.setState({
        shown: true
      });
    } else {
      this.setState({
        shown: false
      });
    }
  }

  onClick() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      750
    );
  }

  render() {
    return (
      <ScrollContainer
        onClick={this.onClick.bind(this)}
        style={{ display: this.state.shown ? 'block' : 'none' }}>
        <MiddleCenter>
          <Icon icon="arrow-up" />
        </MiddleCenter>
      </ScrollContainer>
    );
  }
}

export default ScrollUp;
