import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-material-components-web';

class Index extends React.Component {
    render() {
        return (
            <div className="content">
                <Text type="body1">Hello</Text>
            </div>
        );
    }
}

export default connect()(Index);
