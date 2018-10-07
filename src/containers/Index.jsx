import React from 'react';
import { connect } from 'react-redux';
import { Parallax, Background } from 'react-parallax';
import { Text } from 'react-material-components-web';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

class Index extends React.Component {
    componentWillMount() {
        this.props.dispatch(setTitle('Home'));
        this.props.dispatch(setSolidNavbar(false));
    }

    render() {
        return (
            <div>
                <Parallax strength={300} style={{ height: '100vh' }} bgStyle={{ width: '100%' }}>
                    <Background>
                        <img src="/splash.jpeg" alt="Boston" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
                    </Background>

                    <div className="header-text">
                        <Text type="headline1">Jake Kinsella</Text>
                        <Text className="header-text-subtitle" type="headline5">
                            Developer, and aspiring entrepreneur.
                        </Text>
                    </div>
                </Parallax>

                <div className="content">
                    <Text type="body1">Hello</Text>
                </div>
            </div>
        );
    }
}

export default connect()(Index);
