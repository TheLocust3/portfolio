import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'react-emotion';
import { Text } from 'react-material-components-web';

import MiddleCenter from '../common/MiddleCenter';
import Panel from './Panel';

let ContentContainer = styled('div')`
    margin-top: 7.5vh;
`;

let RoundImage = styled('div')`
    float: left;
    position: relative;
    overflow: hidden;
    display: inline-block;

    height: 29vh;
    width: 29vh;
    border-radius: 5%;

    margin-left: 3vw;
`;

let image = css`
    height: 30vh;
`;

let blurb = css`
    float: right;
    width: 50%;

    margin-top: 0;
    margin-right: 3vw;
    margin-left: 3vw;
`;

let moreLink = css`
    float: right;
`;

class ExperiencePanel extends React.Component {
    render() {
        return (
            <Panel>
                <center>
                    <Text type="headline2">Professional Experience</Text>
                </center>

                <ContentContainer>
                    <RoundImage>
                        <MiddleCenter>
                            <img src="/talla.png" alt="candidateXYZ" className={image} />
                        </MiddleCenter>
                    </RoundImage>

                    <Text type="body2" className={blurb}>
                        <center>
                            <Text type="headline3">Talla</Text>
                        </center>

                        <p>
                            Soluta necessitatibus nostrum iste dolorem ullam ducimus eos reiciendis. Distinctio voluptatem totam quaerat soluta.
                            Explicabo eaque mollitia nulla id et sit. Dolorem quod et ea tenetur modi non. Eius temporibus assumenda ut voluptatibus
                            et consequatur a.
                        </p>

                        <p>
                            Voluptatem id ut et. Sit ab aut esse perferendis totam nam. Eos error temporibus natus ea possimus nostrum. Iusto dolorem
                            amet pariatur tempore facere vel culpa eos.
                        </p>
                        <br />

                        <Link to="/projects" className={moreLink}>
                            <Text type="body1">More of my experience</Text>
                        </Link>
                    </Text>
                </ContentContainer>
            </Panel>
        );
    }
}

export default ExperiencePanel;
