import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';
import { Parallax, Background } from 'react-parallax';
import { Text } from 'react-material-components-web';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

import CandidateXYZPanel from '../components/panels/CandidateXYZPanel';

let Header = styled('div')`
    margin-top: 30vh;
    margin-left: 4%;

    color: white;
`;

let HeaderSubtitle = styled('div')`
    margin-top: 1%;
    margin-left: 5%;
`;

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

                    <Header>
                        <Text type="headline1">Jake Kinsella</Text>

                        <HeaderSubtitle>
                            <Text type="headline5">Developer, and aspiring entrepreneur.</Text>
                        </HeaderSubtitle>
                    </Header>
                </Parallax>

                <CandidateXYZPanel />
            </div>
        );
    }
}

export default connect()(Index);
