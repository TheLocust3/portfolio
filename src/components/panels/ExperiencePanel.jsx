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
                    <Text type="headline4" serif header>
                        Selected Professional Experience
                    </Text>
                </center>

                <ContentContainer>
                    <Project to="/experience">
                        <Text type="headline5" serif header>
                            Talla
                        </Text>
                        <br />

                        <Text type="body2" serif>
                            <SideMargin margin="3%">
                                Soluta necessitatibus nostrum iste dolorem ullam ducimus eos reiciendis. Distinctio voluptatem totam quaerat soluta.
                                Explicabo eaque mollitia nulla id et sit. Dolorem quod et ea tenetur modi non. Eius temporibus assumenda ut
                                voluptatibus et consequatur a.
                            </SideMargin>
                        </Text>
                    </Project>

                    <Project to="/experience">
                        <Text type="headline5" serif header>
                            Nutonian
                        </Text>
                        <br />

                        <Text type="body2" serif>
                            <SideMargin margin="3%">
                                Soluta necessitatibus nostrum iste dolorem ullam ducimus eos reiciendis. Distinctio voluptatem totam quaerat soluta.
                                Explicabo eaque mollitia nulla id et sit. Dolorem quod et ea tenetur modi non. Eius temporibus assumenda ut
                                voluptatibus et consequatur a.
                            </SideMargin>
                        </Text>
                    </Project>

                    <Project to="/experience">
                        <Text type="headline5" serif header>
                            CloudHealth Technologies
                        </Text>
                        <br />

                        <Text type="body2" serif>
                            <SideMargin margin="3%">
                                Soluta necessitatibus nostrum iste dolorem ullam ducimus eos reiciendis. Distinctio voluptatem totam quaerat soluta.
                                Explicabo eaque mollitia nulla id et sit. Dolorem quod et ea tenetur modi non. Eius temporibus assumenda ut
                                voluptatibus et consequatur a.
                            </SideMargin>
                        </Text>
                    </Project>
                </ContentContainer>
            </Panel>
        );
    }
}

export default ExperiencePanel;
