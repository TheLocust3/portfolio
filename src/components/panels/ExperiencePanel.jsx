import React from 'react';
import styled, { css } from 'react-emotion';
import { Button } from 'react-material-components-web';

import { history, colors } from '../../constants';

import SideMargin from '../common/SideMargin';
import Text from '../common/Text';
import Panel from './Panel';

let ContentContainer = styled('div')`
    margin-top: 5vh;

    padding-left: 20vw;
    padding-right: 20vw;
`;

let Project = styled('div')`
    margin-top: 7.5vh;
    margin-bottom: 7.5vh;
`;

let moreButton = css`
    width: 100%;

    background-color: #e0e0e0 !important;
    color: ${colors.textBlack} !important;
    text-transform: none;
`;

class ExperiencePanel extends React.Component {
    render() {
        return (
            <Panel>
                <center>
                    <Text type="headline2">Selected Professional Experience</Text>
                </center>

                <ContentContainer>
                    <Project>
                        <Text type="headline4" serif>
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

                    <Project>
                        <Text type="headline4" serif>
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

                    <Project>
                        <Text type="headline4" serif>
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

                    <Button className={moreButton} onClick={() => history.push('/experience')}>
                        <Text type="body2" serif>
                            See more professional experience
                        </Text>
                    </Button>
                </ContentContainer>
            </Panel>
        );
    }
}

export default ExperiencePanel;
