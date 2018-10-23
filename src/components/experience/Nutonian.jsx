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
    width: 400px;

    float: right;

    margin-right: 40px;
    margin-bottom: 20px;

    @media (max-width: ${MAX_MOBILE_WIDTH}) {
        width: 90%;
        margin: 5%;
    }
`;

class Nutonian extends React.Component {
    render() {
        return (
            <Container>
                <Text type="headline3" header>
                    Nutonian
                </Text>
                <br />

                <Text type="body1">
                    <img className={imageClass} src="/images/nutonian.png" alt="Nutonian" />

                    <p>
                        I worked at Nutonian during the summer before my sophomore year of highschool. There I worked as a QA engineer, and one of
                        their only QA developers. As a result I got a full view into how QA and DevOps worked.
                    </p>

                    <p>
                        As a QA developer, I built their performance testing suite which allowed them to track their API performance over time and
                        make sure no one change suddenly bloated the API. I also maintained many fully automated Selenium tests, learning how to
                        develop strong automated browser tests and testable websites.
                    </p>

                    <p>
                        The major hard skills I learned there were Python+PyTest, Selenium, and code testing. I learned even more soft skills like
                        testing a major projects, getting familiar with an entire product's codebase in a short amount of time, and how to write good,
                        testable code.
                    </p>

                    <p>
                        Nemo sunt quam minus minima ut. Facilis aut possimus qui dolor quos. Aut voluptatem et tempore placeat esse. Possimus dolor
                        soluta quas est quidem. Molestiae sit rerum dolores ratione corrupti aut iure.
                    </p>

                    <p>
                        Sit similique et id ut architecto assumenda delectus. Et aspernatur veniam cumque ut reprehenderit voluptatem consequatur
                        itaque. Quisquam accusantium alias id fugit ad iure voluptas. Dignissimos voluptatem minima voluptas laudantium aliquam omnis
                        tempore. Totam illo ea labore ut ipsum omnis quis. Aperiam aut sunt voluptas.
                    </p>
                </Text>
            </Container>
        );
    }
}

export default Nutonian;
