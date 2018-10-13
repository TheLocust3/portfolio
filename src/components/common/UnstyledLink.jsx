import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

let unstyledLink = styled('div')`
    margin-top: 5vh;

    padding-left: 20vw;
    padding-right: 20vw;
`;


class UnstyledLink extends React.Component {
    render() {
        let { className, children, ...props }

        return (
            <Link className={`${unstyledLink} ${this.props.className}`} {...props}>{this.props.children}</Link>
        );
    }
}

UnstyledLink.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
};

export default UnstyledLink
