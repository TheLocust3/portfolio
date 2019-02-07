import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
import TechLogo from '../../components/common/TechLogo';
import ProjectImage from './ProjectImage';
import SplashScreen from '../../components/SplashScreen';

class Intel8080 extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(false));
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - Project: Full Stack VM</title>
          <meta
            name="description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta diam ut feugiat
                consectetur. Mauris nec metus erat. Nulla ultricies ipsum nec augue maximus convallis."
          />
        </Helmet>

        <FadeIn>
          <SplashScreen
            src="/images/full-stack-vm.jpeg"
            alt="Full Stack VM"
            header="Full Stack VM"
            height="60vh"
          />

          <Content>
            <Text type="body1">
              <ProjectImage src="/images/projects/vm.png" alt="VM Tests" />

              <Text type="headline4">Overview</Text>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta diam ut feugiat
                consectetur. Mauris nec metus erat. Nulla ultricies ipsum nec augue maximus
                convallis.
              </p>

              <br />

              <center>
                <Text type="headline6">Key Technologies</Text>

                <div>
                  <TechLogo
                    src="/images/logos/rust.png"
                    alt="Rust"
                    href="https://www.rust-lang.org/"
                    black
                  />
                  <TechLogo
                    src="/images/logos/vscode.png"
                    alt="VSCode"
                    href="https://code.visualstudio.com/"
                  />
                </div>
              </center>

              <br />

              <Text type="headline4">Creation</Text>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta diam ut feugiat
                consectetur. Mauris nec metus erat. Nulla ultricies ipsum nec augue maximus
                convallis. Donec enim urna, hendrerit non elit nec, pellentesque sollicitudin magna.
                Vestibulum luctus, felis vel convallis pretium, neque leo posuere eros, ac venenatis
                elit turpis id neque. In hac habitasse platea dictumst.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta diam ut feugiat
                consectetur. Mauris nec metus erat. Nulla ultricies ipsum nec augue maximus
                convallis. Donec enim urna, hendrerit non elit nec, pellentesque sollicitudin magna.
                Vestibulum luctus, felis vel convallis pretium, neque leo posuere eros, ac venenatis
                elit turpis id neque. In hac habitasse platea dictumst.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta diam ut feugiat
                consectetur. Mauris nec metus erat. Nulla ultricies ipsum nec augue maximus
                convallis. Donec enim urna, hendrerit non elit nec, pellentesque sollicitudin magna.
                Vestibulum luctus, felis vel convallis pretium, neque leo posuere eros, ac venenatis
                elit turpis id neque. In hac habitasse platea dictumst.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta diam ut feugiat
                consectetur. Mauris nec metus erat. Nulla ultricies ipsum nec augue maximus
                convallis. Donec enim urna, hendrerit non elit nec, pellentesque sollicitudin magna.
                Vestibulum luctus, felis vel convallis pretium, neque leo posuere eros, ac venenatis
                elit turpis id neque. In hac habitasse platea dictumst.
              </p>

              <br />

              <Text type="headline4">Takeaways</Text>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta diam ut feugiat
                consectetur. Mauris nec metus erat. Nulla ultricies ipsum nec augue maximus
                convallis. Donec enim urna, hendrerit non elit nec, pellentesque sollicitudin magna.
                Vestibulum luctus, felis vel convallis pretium, neque leo posuere eros, ac venenatis
                elit turpis id neque. In hac habitasse platea dictumst.
              </p>

              <a href="https://github.com/TheLocust3/full-stack-vm">GitHub</a>
            </Text>
          </Content>
        </FadeIn>
      </div>
    );
  }
}

export default connect()(Intel8080);
