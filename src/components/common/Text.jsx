import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { Text } from 'react-material-components-web';

let headerSerifClass = css`
    text-transform: uppercase;
`;

let serifClass = css`
    font-family: Josefin Sans, sans-serif;
`;

class StyledText extends React.Component {
    render() {
        let { serif, header, className, children, ...props } = this.props;

        let headerClass = header && serif ? headerSerifClass : '';

        return (
            <Text className={`${_.isEmpty(className) ? '' : className} ${serif ? serifClass : ''} ${headerClass}`} {...props}>
                {children}
            </Text>
        );
    }
}

StyledText.propTypes = {
    serif: PropTypes.bool,
    header: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any
};

export default StyledText;
