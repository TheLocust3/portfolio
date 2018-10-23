import React from 'react';
import styled, { css } from 'react-emotion';

import { MAX_MOBILE_WIDTH } from '../../constants';
import Text from '../common/Text';

let Container = styled('div')`
    position: relative;

    min-height: 70vh;
    padding: 20px;
`;

let imageClass = css`
    width: 250px;

    float: right;

    margin-top: 10px;
    margin-left: 20px;
    margin-right: 40px;
    margin-bottom: 20px;

    @media (max-width: ${MAX_MOBILE_WIDTH}) {
        width: 90%;
        margin: 5%;
    }
`;

class Talla extends React.Component {
    render() {
        return (
            <Container>
                <Text type="headline3" header>
                    Talla
                </Text>
                <br />

                <Text type="body1">
                    <img className={imageClass} src="/images/talla.png" alt="Talla" />

                    <p>
                        I joined Talla during the summer between my junior and senior years of high school. Talla is company that builds intelligent
                        Slackbots to manage common HR tasks.
                    </p>

                    <p>
                        When on the team, I was given the project to built out a data annotation platform that would allow them to import Slack
                        conversations and rate whether Talla's (their chatbot) response was correct or not and what it should be. This allowed their
                        data scientists to rapidly improve their product and allowed them to outsource data annotation to those outside the company,
                        speeding up the rate at which they could build their product.
                    </p>

                    <p>
                        On the team I participated in their full Agile process, and was a full developer participating in all their meetings. This
                        gave me great insight into how a small startup of around 20 people worked.
                    </p>

                    <p>
                        While there I learned React/modern Javascript web development, how to work with AWS and to make it scalable with Terraform,
                        and to build full webapps with Ruby on Rails.
                    </p>
                </Text>
            </Container>
        );
    }
}

export default Talla;
