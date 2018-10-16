import React from 'react';
import { css } from 'react-emotion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { colors } from '../../constants';

let unstyledLink = css`
    color: ${colors.textBlack};
    text-decoration: none;

    &:hover {
        color: ${colors.textBlack};
    }
`;

class UnstyledLink extends React.Component {
    render() {
        let { className, children, ...props } = this.props;

        return (
            <Link className={`${unstyledLink} ${this.props.className}`} {...props}>
                {this.props.children}
            </Link>
        );
    }
}

UnstyledLink.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
};

export default UnstyledLink;
