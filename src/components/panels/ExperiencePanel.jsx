import React from 'react';
import styled from 'react-emotion';

import SideMargin from '../common/SideMargin';
import Text from '../common/Text';
import Panel from './Panel';
import Project from './Project';

let ContentContainer = styled('div')`
    margin-top: 5vh;

    padding-left: 17.5vw;
    padding-right: 17.5vw;
`;

class ExperiencePanel extends React.Component {
    render() {
        return (
            <Panel>
                <center>
                    <Text type="headline4" header>
                        Professional Experience
                    </Text>
                </center>

                <ContentContainer>
                    <Project to="/experience?scroll=1">
                        <Text type="headline5" header>
                            Talla
                        </Text>
                        <br />

                        <Text type="body2">
                            <SideMargin margin="3%">
                                My internship during the summer before my senior year of high school. Talla is a company that develops an extensible
                                Slackbot that acts as a general purpose office manager. While there I built out a data annotation web app that would
                                allow them to rapidly collect data from Slack and have it annotated by humans.
                            </SideMargin>
                        </Text>
                    </Project>

                    <Project to="/experience?scroll=2">
                        <Text type="headline5" header>
                            Nutonian
                        </Text>
                        <br />

                        <Text type="body2">
                            <SideMargin margin="3%">
                                During the summer before my junior year of high school, I interned at Nutonian. Nutonian was (recently aquired by
                                DataRobot) a general purpose Machine Learning company. While there I was a QA engineer, developing their first
                                performance suite of tests for their api and maintaining a large number of Selenium tests.
                            </SideMargin>
                        </Text>
                    </Project>

                    <Project to="/experience?scroll=3">
                        <Text type="headline5" header>
                            CloudHealth Tech
                        </Text>
                        <br />

                        <Text type="body2">
                            <SideMargin margin="3%">
                                During the summers before my freshman and sophomore year of high school, I interned at CloudHealth Tech, a cloud
                                management company whose product optimized your cloud infrastructure. During my time there, I was part of the
                                development team and built out features and fixed bugs for them.
                            </SideMargin>
                        </Text>
                    </Project>
                </ContentContainer>
            </Panel>
        );
    }
}

export default ExperiencePanel;
