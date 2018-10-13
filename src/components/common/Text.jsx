import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { Text } from 'react-material-components-web';

let serifClass = css`
    font-family: 'Noto Serif', serif;
`;

class StyledText extends React.Component {
    render() {
        let { serif, className, children, ...props } = this.props;

        return (
            <Text className={`${className} ${serif ? serifClass : ''}`} {...props}>
                {children}
            </Text>
        );
    }
}

StyledText.propTypes = {
    serif: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any
};

export default StyledText;
