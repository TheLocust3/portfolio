import React from 'react';
import styled, { css } from 'react-emotion';

import { IMAGES_URL } from '../../constants';

import Text from '../common/Text';
import Content from '../common/Content';
import Panel from './Panel';

let RoundedImage = styled('div')`
  position: relative;
  overflow: hidden;

  height: 225px;
  width: 225px;
  border-radius: 50%;
`;

let image = css`
  position: absolute;
  transform: translate(-50%, -5%);
  left: 50%;
  margin-right: -50%;

  height: 300px;
  width: auto;
`;

class AboutPanel extends React.Component {
  render() {
    return (
      <Panel>
        <br />

        <center>
          <Text type="headline4" header>
            About Me
          </Text>
          <br />
          <br />

          <RoundedImage>
            <img src={`${IMAGES_URL}jake.png`} alt="Jake" className={image} />
          </RoundedImage>
          <br />

          <Content margin={35} style={{ marginTop: '0', marginBottom: '0' }}>
            <Text type="body2">
              I'm a software developer, and entrepreneur, with a passion for building technology.
              Currently a sophomore Computer Science student at Northeastern.
            </Text>
          </Content>
        </center>
      </Panel>
    );
  }
}

export default AboutPanel;
