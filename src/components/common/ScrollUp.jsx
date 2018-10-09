import $ from 'jquery';
import React from 'react';
import styled from 'react-emotion';

import Icon from './Icon';
import MiddleCenter from './MiddleCenter';

let ScrollContainer = styled('div')`
    position: fixed;
    bottom: 40px;
    right: 40px;
    border-radius: 7.5%;

    width: 40px;
    height: 50px;

    color: white;
    background-color: rgba(0, 0, 0, 0.5);

    &:hover {
        cursor: pointer;
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

    onScroll() {
        if ($(window).scrollTop() > $(window).height() * 0.5) {
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
            <ScrollContainer onClick={this.onClick.bind(this)} style={{ display: this.state.shown ? 'block' : 'none' }}>
                <MiddleCenter>
                    <Icon icon="arrow-up" />
                </MiddleCenter>
            </ScrollContainer>
        );
    }
}

export default ScrollUp;
