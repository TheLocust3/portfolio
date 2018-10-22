import styled from 'react-emotion';

import { MAX_MOBILE_WIDTH } from '../../constants';

let ProjectImage = styled('img')`
    width: 500px;

    float: right;

    margin: 20px;

    @media (max-width: ${MAX_MOBILE_WIDTH}) {
        width: 90%;

        margin: 5%;
    }
`;

export default ProjectImage;
