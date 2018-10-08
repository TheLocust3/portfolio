import React from 'react';
import styled from 'react-emotion';
import { Text } from 'react-material-components-web';

import { colors } from '../../constants';

import Icon from './Icon';

let FooterOuter = styled('div')`
    background-color: #f5f5f5;
    text-align: center;
`;

let IconRow = styled('div')`
    & a {
        color: ${colors.textBlack};

        margin-right: 1%;
        margin-left: 1%;
    }

    & a:hover {
        color: ${colors.linkBlackHover};
    }
`;

class Footer extends React.Component {
    render() {
        return (
            <FooterOuter>
                <br />

                <IconRow>
                    <a href="mailto:jake.kinsella@gmail.com">
                        <Icon icon="envelope" size={28} />
                    </a>

                    <a to="https://github.com/TheLocust3">
                        <Icon icon="github" size={28} brand />
                    </a>

                    <a to="https://www.linkedin.com/in/jake-kinsella/">
                        <Icon icon="linkedin-in" size={28} brand />
                    </a>
                </IconRow>

                <br />

                <Text type="body1">Jake Kinsella</Text>

                <br />
            </FooterOuter>
        );
    }
}

export default Footer;
