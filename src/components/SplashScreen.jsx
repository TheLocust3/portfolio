import React from 'react';
import styled from 'react-emotion';
import { Parallax, Background } from 'react-parallax';
import { Text } from 'react-material-components-web';

let Header = styled('div')`
    margin-top: 30vh;
    margin-left: 4%;

    color: white;
`;

let HeaderSubtitle = styled('div')`
    margin-top: 1%;
    margin-left: 5%;
`;

class SplashScreen extends React.Component {
    render() {
        return (
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
        );
    }
}

export default SplashScreen;
