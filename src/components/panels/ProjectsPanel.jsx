import React from 'react';
import styled, { css } from 'react-emotion';
import { Button } from 'react-material-components-web';

import { history, colors } from '../../constants';

import Project from './Project';
import SideMargin from '../common/SideMargin';
import Text from '../common/Text';
import Panel from './Panel';

let ContentContainer = styled('div')`
    margin-top: 5vh;

    padding-left: 17.5vw;
    padding-right: 17.5vw;
`;

let moreButton = css`
    width: 100%;

    background-color: #e0e0e0 !important;
    color: ${colors.textBlack} !important;
    text-transform: none;
`;

class ProjectsPanel extends React.Component {
    render() {
        return (
            <Panel>
                <center>
                    <Text type="headline4" serif header>
                        Selected Projects
                    </Text>
                </center>

                <ContentContainer>
                    <Project to="/projects?scroll=1">
                        <Text type="headline5" serif header>
                            candidateXYZ
                        </Text>
                        <br />

                        <Text type="body2" serif>
                            <SideMargin margin="3%">
                                Building during the summer of my senior year, candidateXYZ is web application design to make it easy for everyone to
                                run for office, no matter your experience, connections, or finiancial situation. Allows candidates create an official
                                Candidate Committee, keep track of their finiances (receipts, expenditures, liabilities), and generate monthly
                                campaign finiance reports.
                            </SideMargin>
                        </Text>
                    </Project>

                    <Project to="/projects?scroll=2">
                        <Text type="headline5" serif header>
                            Intel 8080 Emulator
                        </Text>
                        <br />

                        <Text type="body2" serif>
                            <SideMargin margin="3%">
                                Built during my Junior year of high school after my first attempt at building a Gameboy emulator. Emulates the pure
                                Intel 8080 CPU based off of the original specification. Fully tested instruction set and CPU interrupts.
                            </SideMargin>
                        </Text>
                    </Project>

                    <Project to="/projects?scroll=3">
                        <Text type="headline5" serif header>
                            Ti NSpire Gameboy Emulator
                        </Text>
                        <br />

                        <Text type="body2" serif>
                            <SideMargin margin="3%">
                                My first attempt at writing an emulator back in Sophmore year of high school. Designed to be run on a common graphing
                                calculator (the Ti-NSpire CX CAS) and allow users to play Gameboy Classic games. Never got the graphics working but
                                implemented the full CPU instruction set and interrupts.
                            </SideMargin>
                        </Text>
                    </Project>
                    <br />
                    <br />
                    <br />

                    <Button className={moreButton} onClick={() => history.push('/projects')}>
                        <Text type="body2" serif>
                            See more projects
                        </Text>
                    </Button>
                </ContentContainer>
            </Panel>
        );
    }
}

export default ProjectsPanel;
