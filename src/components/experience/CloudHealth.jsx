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
    width: 500px;

    float: right;

    margin-top: 30px;
    margin-left: 20px;
    margin-right: 40px;
    margin-bottom: 20px;

    @media (max-width: ${MAX_MOBILE_WIDTH}) {
        width: 90%;
        margin: 5%;
    }
`;

class CloudHealth extends React.Component {
    render() {
        return (
            <Container>
                <Text type="headline3" header>
                    CloudHealth Tech
                </Text>
                <br />

                <Text type="body1">
                    <img className={imageClass} src="/images/cloudhealth.svg" alt="CloudHealth Tech" />

                    <p>
                        Quis illo laborum sed consectetur. Veniam est corrupti ea ut provident. Ipsum sit rem saepe earum deleniti eligendi saepe. Aut
                        aut ipsa voluptatibus et nesciunt quia laudantium. Et autem ipsum totam nulla. Sunt est explicabo nostrum neque.
                    </p>

                    <p>
                        Consequatur reprehenderit quisquam qui quia praesentium dolor corporis fugit. Facere porro rerum aut aut earum quas velit qui.
                        Dolorum aut dolores sed. Doloribus voluptatum eum assumenda ut ut vel. Cum ea debitis quam sapiente illo nemo. Id praesentium
                        voluptas sed modi.
                    </p>

                    <p>
                        Occaecati aut reprehenderit repudiandae. Sed totam suscipit placeat fugiat nulla quo quibusdam fugiat. Ad incidunt dolores nam
                        exercitationem. In suscipit aliquid aut velit consequatur magnam est. Itaque aut aut voluptas.
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

export default CloudHealth;
