import React from 'react';
import styled, { css } from 'react-emotion';
import { Link } from 'react-router-dom';
import { Text } from 'react-material-components-web';

import Panel from './Panel';

let ContentContainer = styled('div')`
    margin-top: 7.5vh;
    padding-left: 3vw;
    padding-right: 3vw;
`;

let title = css`
    display: inline;
`;

let image = css`
    float: right;
    width: 35vw;
`;

let blurb = css`
    width: 50%;

    margin-top: 3vh;
    margin-left: 6vw;
    margin-right: 6vw;
`;

let moreLink = css`
    float: right;
`;

class ProjectsPanel extends React.Component {
    render() {
        return (
            <Panel>
                <center>
                    <Text type="headline2">Projects</Text>
                </center>

                <ContentContainer>
                    <Text type="headline3" outerClassName={title} className={title}>
                        candidateXYZ
                    </Text>
                    <img src="/candidatexyz.png" alt="candidateXYZ" className={image} />
                </ContentContainer>

                <Text type="body2" className={blurb}>
                    <p>
                        Soluta necessitatibus nostrum iste dolorem ullam ducimus eos reiciendis. Distinctio voluptatem totam quaerat soluta. Explicabo
                        eaque mollitia nulla id et sit. Dolorem quod et ea tenetur modi non. Eius temporibus assumenda ut voluptatibus et consequatur
                        a.
                    </p>

                    <p>
                        Voluptatem id ut et. Sit ab aut esse perferendis totam nam. Eos error temporibus natus ea possimus nostrum. Iusto dolorem amet
                        pariatur tempore facere vel culpa eos.
                    </p>
                    <br />

                    <Link to="/projects" className={moreLink}>
                        <Text type="body1">More of my projects</Text>
                    </Link>
                </Text>
            </Panel>
        );
    }
}

export default ProjectsPanel;
