import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

class MaterialIcon extends React.Component {
    render() {
        let { icon, className, ...props } = this.props;

        return (
            <i className={`material-icons ${_.isEmpty(className) ? '' : className}`} {...props}>
                {icon}
            </i>
        );
    }
}

MaterialIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default MaterialIcon;
