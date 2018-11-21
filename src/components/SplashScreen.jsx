import React from 'react';
import styled, { css } from 'react-emotion';
import { Parallax, Background } from 'react-parallax';
import PropTypes from 'prop-types';

import Text from '../components/common/Text';

let Header = styled('div')`
  margin-top: 20%;
  margin-left: 4%;
`;

let headerClass = css`
  color: white;
`;

let HeaderSubtitle = styled('div')`
  margin-top: 1%;
  margin-left: 5%;
`;

class SplashScreen extends React.Component {
  render() {
    let { src, alt, header, subtitle } = this.props;

    let height = this.props.height ? this.props.height : '100vh';

    return (
      <Parallax strength={300} style={{ height: height }} bgStyle={{ width: '100%' }}>
        <Background>
          <img src={src} alt={alt} style={{ width: '100%', height: height, objectFit: 'cover' }} />
        </Background>

        <Header>
          <Text className={headerClass} type="headline1" header>
            {header}
          </Text>

          <HeaderSubtitle>
            <Text className={headerClass} type="headline5">
              {subtitle}
            </Text>
          </HeaderSubtitle>
        </Header>
      </Parallax>
    );
  }
}

SplashScreen.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  header: PropTypes.string,
  subtitle: PropTypes.string,
  height: PropTypes.string
};

export default SplashScreen;
